/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * The data that is being downloaded in this script is provided by
 * GeoNames (https://www.geonames.org/). We are using the data to compile a set
 * of US cities and states that match the needs of this project. Their work is
 * licensed under a Creative Commons Attribution 4.0 License:
 * https://creativecommons.org/licenses/by/4.0/.
 *
 * All database dumps and table definitions can be found here:
 * https://download.geonames.org/export/dump/.
 */

import https from 'https'
import {
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import AdmZip from 'adm-zip'

import {
  TAlternateNameData,
  TLocationData,
  IRelevantLocation,
  IRelevantLocationAlternate,
  IDataFileUrls
} from './types.d'

const DATA_COUNTRY_CODE = 'US'
const REMOTE_DATA_URL = 'https://download.geonames.org/export/dump/'
const LOCATIONS_DATA_FILE = 'locationAutocompleteData.json'

// Change these variables only for debugging
// Default values: true
const REFETCH_REMOTE_DATA = true
const SHOULD_CLEANUP_DOWNLOADED_DATA = true

function writeFromRemoteFile({ url, writeStream }: {
  url: string,
  writeStream: any
}) {
  return new Promise((resolve, reject) => {
    https.get(
      url,
      res => {
        res.on('end', () => {
          resolve(res)
        })
        res.on('error', error => {
          reject(error)
        })
        res.pipe(writeStream)
      }
    )
  })
}

async function fetchRemoteArchive({
  remoteArchiveUrl,
  localDownloadPath,
  localExtractionPath
}: IDataFileUrls) {
  console.info(`Download remote file: ${remoteArchiveUrl} -> ${localDownloadPath}`)

  await writeFromRemoteFile({
    url: remoteArchiveUrl,
    writeStream: createWriteStream(localDownloadPath)
  })

  console.info(`Extract: ${localDownloadPath} -> ${localExtractionPath}`)
  const zip = new AdmZip(localDownloadPath)
  zip.extractAllTo(localExtractionPath, true)
}

try {
  const startTime = Date.now()
  console.info('Run create location data')

  const __dirname = dirname(fileURLToPath(import.meta.url))
  const tmpDirPath = resolve(__dirname, 'tpm-data')

  console.info(`Create data directory: ${tmpDirPath}`)
  if (!existsSync(tmpDirPath)) {
    mkdirSync(tmpDirPath)
  }

  const localDataDestinationPath = {
    locations: `${tmpDirPath}/locations-${DATA_COUNTRY_CODE}-extracted`,
    alternateNames: `${tmpDirPath}/alternatenames-${DATA_COUNTRY_CODE}-extracted`
  }

  if (REFETCH_REMOTE_DATA) {
    console.info('Download all locations')
    await fetchRemoteArchive({
      remoteArchiveUrl: `${REMOTE_DATA_URL}${DATA_COUNTRY_CODE}.zip`,
      localDownloadPath: `${tmpDirPath}/locations-${DATA_COUNTRY_CODE}.zip`,
      localExtractionPath: localDataDestinationPath.locations
    })

    console.info('Download alternate names')
    await fetchRemoteArchive({
      remoteArchiveUrl: `${REMOTE_DATA_URL}alternatenames/${DATA_COUNTRY_CODE}.zip`,
      localDownloadPath: `${tmpDirPath}/alternatenames-${DATA_COUNTRY_CODE}.zip`,
      localExtractionPath: localDataDestinationPath.alternateNames
    })
  } else {
    console.log('Skip downloading remote data')
  }

  console.info('Read file: Alternate location names')
  const alternateNamesData = readFileSync(
    `${localDataDestinationPath.alternateNames}/${DATA_COUNTRY_CODE}.txt`,
    'utf8'
  )

  console.info('Parse data: Alternate location names')
  const alternateNameRows = alternateNamesData.split('\n')
  const parsedAlternateNames =
    alternateNameRows
      .map((alternateNamesLine) => {
        const [
          alternateNameId,
          geonameId,
          isolanguage,
          alternateName,
          isPreferredName,
          _isShortName,
          _isColloquial,
          isHistoric,
          _from,
          _to
        ] = alternateNamesLine.split('\t') as TAlternateNameData // lines are tab delimited

        const isAbbreviation = isolanguage === 'abbr'
        const isRelevantAlternateName =
          (isolanguage === 'en' || isAbbreviation) &&
          Number(isHistoric) !== 1

        if (isRelevantAlternateName) {
          return {
            id: alternateNameId,
            alternateOf: geonameId,
            name: alternateName,
            isPreferredName
          }
        }

        return null
      })
      .filter(alternateName => alternateName) as Array<IRelevantLocationAlternate>

  console.info('Read file: All locations')
  const locationData = readFileSync(
    `${localDataDestinationPath.locations}/${DATA_COUNTRY_CODE}.txt`,
    'utf8'
  )

  console.info('Parse data: All locations')
  const locationDataRows = locationData.split('\n')
  const locationRowCount = locationDataRows.length
  const relevantLocationData: Array<IRelevantLocation> = locationDataRows
    .reduce((relevantLocations, location, rowIndex) => {
      const progress = Math.round(((rowIndex + 1) / locationRowCount) * 100)
      process.stdout.write(
        `Progress: ${locationRowCount}/${rowIndex + 1} (${progress}%) \r`
      )

      const [
        geonameId,
        name,
        _asciiname,
        _alternatenames,
        _latitude,
        _longitude,
        featureClass,
        featureCode,
        _countryCode,
        _cc2,
        admin1Code,
        _admin2Code,
        _admin3Code,
        _admin4Code,
        population,
        _elevation,
        _dem,
        _timezone,
        _modificationDate,
      ] = location.split('\t') as TLocationData // lines are tab delimited

      // Only include populated place a city, town, village, or other
      // agglomeration of buildings where people live and work.
      // TODO: Use location relations data for filtering out districts
      // Feature classes and codes: http://www.geonames.org/export/codes.html
      const hasRelevantFeature = featureClass === 'P' && (
        featureCode === 'PPL' ||
        featureCode === 'PPLA' ||
        featureCode === 'PPLA2' ||
        featureCode === 'PPLA3' ||
        featureCode === 'PPLA4' ||
        featureCode === 'PPLA5' ||
        featureCode === 'PPLC' ||
        featureCode === 'PPLL'
      )
      const hasPopulation = Number(population) !== 0

      if (hasRelevantFeature && hasPopulation) {
        const alternateNames = parsedAlternateNames
          .filter(({ alternateOf, name: alternateName }) => (
            alternateOf === geonameId && alternateName !== name
          ))
        const preferredName = alternateNames.find(({ isPreferredName }) => (
          isPreferredName === '1'
        ))
        const alternateNamesFinal = alternateNames.map((alternateName) => {
          // Include the original name as an alternative name if we’ll use an
          // alternate name that is the preferred name
          if (preferredName && preferredName.name === alternateName.name) {
            return name
          }

          return alternateName.name
        })

        relevantLocations.push({
          id: geonameId,
          // switch names if an alternate name is the preferred location name
          name: preferredName ? preferredName.name : name,
          stateCode: admin1Code,
          population,
          ...((alternateNames && alternateNames.length > 0) && {
            alternateNames: alternateNamesFinal
          })
        })
      }

      return relevantLocations
    }, Array())

  console.info(`Number of relevant locations found: ${relevantLocationData.length}`)

  console.info(`Write location data to file: ${LOCATIONS_DATA_FILE}`)
  writeFileSync(LOCATIONS_DATA_FILE, JSON.stringify(relevantLocationData))

  if (SHOULD_CLEANUP_DOWNLOADED_DATA) {
    console.info('Clean up data directory')
    rmSync(tmpDirPath, {
      recursive: true,
      force: true
    })
  }

  const endTime = Date. now()
  console.info(`Created location data file successfully: Executed in ${(endTime - startTime) / 1000}s`)
} catch(error) {
  console.error('Creating location file failed with:', error)
}

process.exit()
