/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
  IAlternateNamesData,
  IRelevantLocation,
  IDataFileUrls
} from './types.d'

const startTime = Date. now()
const refetchRemoteData = false

const dataCountryCode = 'US'
const remoteDataUrl = 'http://download.geonames.org/export/dump/'

const __dirname = dirname(fileURLToPath(import.meta.url));

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
  console.info('Run create location data')

  const tmpDirPath = resolve(__dirname, `tmp-${startTime}`)

  const localExtractionPath = `${tmpDirPath}/${dataCountryCode}-extracted`
  const outputDirPathAlternateNames = `${tmpDirPath}/${dataCountryCode}-alternatenames-extracted`

  console.info(`Create temporary directory: ${tmpDirPath}`)
  if (!existsSync(tmpDirPath)) {
    mkdirSync(tmpDirPath);
  }

  const localDataDestinationPath = {
    locations: `${tmpDirPath}/locations-${dataCountryCode}-extracted`,
    alternateNames: `${tmpDirPath}/alternatenames-${dataCountryCode}-extracted`
  }

  if (refetchRemoteData) {
    // Geonames all locations
    await fetchRemoteArchive({
      remoteArchiveUrl: `${remoteDataUrl}${dataCountryCode}.zip`,
      localDownloadPath: `${tmpDirPath}/locations-${dataCountryCode}.zip`,
      localExtractionPath: localDataDestinationPath.locations
    })

    // Geonames alternate location names
    await fetchRemoteArchive({
      remoteArchiveUrl: `${remoteDataUrl}alternatenames/${dataCountryCode}.zip`,
      localDownloadPath: `${tmpDirPath}/alternatenames-${dataCountryCode}.zip`,
      localExtractionPath: localDataDestinationPath.alternateNames
    })
  }

  console.info('Start reading file')

  const alternateNamesData = readFileSync(
    `${outputDirPathAlternateNames}/${dataCountryCode}.txt`,
    'utf8'
  )
  const parsedAlternateNamesData: Array<IAlternateNamesData | null> =
    alternateNamesData
      .split('\n')
      .map((alternateNamesLine) => {
        const [
          alternateNameId,
          geonameId,
          isolanguage,
          alternateName,
          isPreferredName,
          isShortName,
          isColloquial,
          isHistoric,
          _from,
          _to
        ] = alternateNamesLine.split('\t') as TAlternateNameData

        const isRelevantAlternateName = isolanguage === 'en' &&
          Number(isHistoric) !== 1

        if (isRelevantAlternateName) {
          return {
            alternateNameId,
            geonameId,
            alternateName,
            isPreferredName,
            isShortName,
            isColloquial
          }
        }

        return null
      })
      .filter(alternateName => alternateName)

  const locationData = readFileSync(
    `${localExtractionPath}/${dataCountryCode}.txt`,
    'utf8'
  )

  const relevantLocationData: Array<IRelevantLocation> = locationData
    .split('\n')
    .reduce((relevantLocations, location) => {
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
      ] = location.split('\t') as TLocationData

      // Only include populated place a city, town, village, or other
      // agglomeration of buildings where people live and work.
      const hasRelevantFeature = (featureClass === 'P' && featureCode === 'PPL')
      const hasPopulation = Number(population) === 0
      if (hasRelevantFeature && hasPopulation) {
        const alternateNames = parsedAlternateNamesData
          .filter(parsedAlternateNameData => (
            parsedAlternateNameData?.geonameId === geonameId
          ));

        relevantLocations.push({
          geonameId,
          name,
          admin1Code,
          ...(alternateNames && alternateNames.length > 0 && {
            alternateNames
          })
        })
      }

      return relevantLocations
    }, Array())

  const locationDataFilePath = resolve(__dirname, 'locations-data.json')
  console.info(`Write location data to file: ${locationDataFilePath}`)
  writeFileSync(locationDataFilePath, JSON.stringify(relevantLocationData))

  if (refetchRemoteData) {
    // Clean up temporary directory
    rmSync(tmpDirPath, {
      recursive: true,
      force: true
    })
  }

  const endTime = Date. now()
  console.info(`Created lcoation data successfully after: ${endTime - startTime}ms`)
} catch(error) {
  console.error('Creating location file failed with:', error)
}

process.exit()
