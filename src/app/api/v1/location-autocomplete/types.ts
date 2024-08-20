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

/** The id of this alternate name. */
type AlternateNameId = string;
/** The geonameId is referring to id in table 'geoname'. */
type GeonameId = string;
/**
 * Iso language, varchar(7)
 *
 * 2 to 3-characters:
 * - iso 639 language codes
 *
 * 4-characters:
 * - 'post': postal codes
 * - 'iata','icao', 'faac': airport codes
 * - 'abbr': abbreviation
 * - 'link': link to a website (mostly to wikipedia)
 * - 'wkdt': wikidataid
 *
 * 7-characters:
 * - 'fr_1793': French Revolution names
 */
type Isolanguage = string;
/** Alternate name or name variant, varchar(400). */
type AlternateName = string;
/** Is an abbreviation of the name. */
type IsAbbreviation = "" | "1";
/** Is an official/preferred name. */
type IsPreferredName = "" | "1";
/** Is short name like 'California' for 'State of California. */
type IsShortName = "" | "1";
/**
 * Alternate name is a colloquial or slang term.
 * Example: 'Big Apple' for 'New York'.
 */
type IsColloquial = "" | "1";
/**
 * Alternate name is historic and was used in the past.
 * Example 'Bombay' for 'Mumbai'.
 */
type IsHistoric = "" | "1";
/** From period when the name was used. */
type From = string;
/** To period when the name was used. */
type To = string;

export type AlternateNameData = [
  AlternateNameId,
  GeonameId,
  Isolanguage,
  AlternateName,
  IsPreferredName,
  IsShortName,
  IsColloquial,
  IsHistoric,
  From,
  To,
];

/** Name of geographical point (utf8), varchar(200). */
type LocationName = "string";
/** Name of geographical point (ascii), varchar(200). */
type LocationAsciiname = "string";
/**
 * Alternatenames, comma separated, ascii names automatically transliterated,
 * convenience attribute from alternatename table, varchar(10000).
 */
type LocationAlternatenames = "string";
/** Latitude in decimal degrees (wgs84). */
type LocationLatitude = "string";
/** Longitude in decimal degrees (wgs84). */
type LocationLongitude = "string";
/**
 * Feature classes and codes: http://www.geonames.org/export/codes.html.
 * char(1)
 */
type LocationFeatureClass = "A" | "H" | "L" | "P" | "R" | "S" | "T" | "U" | "V";
/**
 * Feature classes and codes: http://www.geonames.org/export/codes.html.
 * varchar(10)
 */
type LocationFeatureCode =
  | "ADM1"
  | "ADM1H"
  | "ADM2"
  | "ADM2H"
  | "ADM3"
  | "ADM3H"
  | "ADM4"
  | "ADM4H"
  | "ADM5"
  | "ADM5H"
  | "ADMD"
  | "ADMDH"
  | "LTER"
  | "PCL"
  | "PCLD"
  | "PCLF"
  | "PCLH"
  | "PCLI"
  | "PCLIX"
  | "PCLS"
  | "PRSH"
  | "TERR"
  | "ZN"
  | "ZNB"
  | "AIRS"
  | "ANCH"
  | "BAY"
  | "BAYS"
  | "BGHT"
  | "BNK"
  | "BNKR"
  | "BNKX"
  | "BOG"
  | "CAPG"
  | "CHN"
  | "CHNL"
  | "CHNM"
  | "CHNN"
  | "CNFL"
  | "CNL"
  | "CNLA"
  | "CNLB"
  | "CNLD"
  | "CNLI"
  | "CNLN"
  | "CNLQ"
  | "CNLSB"
  | "CNLX"
  | "COVE"
  | "CRKT"
  | "CRNT"
  | "CUTF"
  | "DCK"
  | "DCKB"
  | "DOMG"
  | "DPRG"
  | "DTCH"
  | "DTCHD"
  | "DTCHI"
  | "DTCHM"
  | "ESTY"
  | "FISH"
  | "FJD"
  | "FJDS"
  | "FLLS"
  | "FLLSX"
  | "FLTM"
  | "FLTT"
  | "GLCR"
  | "GULF"
  | "GYSR"
  | "HBR"
  | "HBRX"
  | "INLT"
  | "INLTQ"
  | "LBED"
  | "LGN"
  | "LGNS"
  | "LGNX"
  | "LK"
  | "LKC"
  | "LKI"
  | "LKN"
  | "LKNI"
  | "LKO"
  | "LKOI"
  | "LKS"
  | "LKSB"
  | "LKSC"
  | "LKSI"
  | "LKSN"
  | "LKSNI"
  | "LKX"
  | "MFGN"
  | "MGV"
  | "MOOR"
  | "MRSH"
  | "MRSHN"
  | "NRWS"
  | "OCN"
  | "OVF"
  | "PND"
  | "PNDI"
  | "PNDN"
  | "PNDNI"
  | "PNDS"
  | "PNDSF"
  | "PNDSI"
  | "PNDSN"
  | "POOL"
  | "POOLI"
  | "RCH"
  | "RDGG"
  | "RDST"
  | "RF"
  | "RFC"
  | "RFX"
  | "RPDS"
  | "RSV"
  | "RSVI"
  | "RSVT"
  | "RVN"
  | "SBKH"
  | "SD"
  | "SEA"
  | "SHOL"
  | "SILL"
  | "SPNG"
  | "SPNS"
  | "SPNT"
  | "STM"
  | "STMA"
  | "STMB"
  | "STMC"
  | "STMD"
  | "STMH"
  | "STMI"
  | "STMIX"
  | "STMM"
  | "STMQ"
  | "STMS"
  | "STMSB"
  | "STMX"
  | "STRT"
  | "SWMP"
  | "SYSI"
  | "TNLC"
  | "WAD"
  | "WADB"
  | "WADJ"
  | "WADM"
  | "WADS"
  | "WADX"
  | "WHRL"
  | "WLL"
  | "WLLQ"
  | "WLLS"
  | "WTLD"
  | "WTLDI"
  | "WTRC"
  | "WTRH"
  | "AGRC"
  | "AMUS"
  | "AREA"
  | "BSND"
  | "BSNP"
  | "BTL"
  | "CLG"
  | "CMN"
  | "CNS"
  | "COLF"
  | "CONT"
  | "CST"
  | "CTRB"
  | "DEVH"
  | "FLD"
  | "FLDI"
  | "GASF"
  | "GRAZ"
  | "GVL"
  | "INDS"
  | "LAND"
  | "LCTY"
  | "MILB"
  | "MNA"
  | "MVA"
  | "NVB"
  | "OAS"
  | "OILF"
  | "PEAT"
  | "PRK"
  | "PRT"
  | "QCKS"
  | "RES"
  | "RESA"
  | "RESF"
  | "RESH"
  | "RESN"
  | "RESP"
  | "RESV"
  | "RESW"
  | "RGN"
  | "RGNE"
  | "RGNH"
  | "RGNL"
  | "RNGA"
  | "SALT"
  | "SNOW"
  | "TRB"
  | "PPL"
  | "PPLA"
  | "PPLA2"
  | "PPLA3"
  | "PPLA4"
  | "PPLA5"
  | "PPLC"
  | "PPLCH"
  | "PPLF"
  | "PPLG"
  | "PPLH"
  | "PPLL"
  | "PPLQ"
  | "PPLR"
  | "PPLS"
  | "PPLW"
  | "PPLX"
  | "STLMT"
  | "CSWY"
  | "OILP"
  | "PRMN"
  | "PTGE"
  | "RD"
  | "RDA"
  | "RDB"
  | "RDCUT"
  | "RDJCT"
  | "RJCT"
  | "RR"
  | "RRQ"
  | "RTE"
  | "RYD"
  | "ST"
  | "STKR"
  | "TNL"
  | "TNLN"
  | "TNLRD"
  | "TNLRR"
  | "TNLS"
  | "TRL"
  | "ADMF"
  | "AGRF"
  | "AIRB"
  | "AIRF"
  | "AIRH"
  | "AIRP"
  | "AIRQ"
  | "AIRT"
  | "AMTH"
  | "ANS"
  | "AQC"
  | "ARCH"
  | "ARCHV"
  | "ART"
  | "ASTR"
  | "ASYL"
  | "ATHF"
  | "ATM"
  | "BANK"
  | "BCN"
  | "BDG"
  | "BDGQ"
  | "BLDA"
  | "BLDG"
  | "BLDO"
  | "BP"
  | "BRKS"
  | "BRKW"
  | "BSTN"
  | "BTYD"
  | "BUR"
  | "BUSTN"
  | "BUSTP"
  | "CARN"
  | "CAVE"
  | "CH"
  | "CMP"
  | "CMPL"
  | "CMPLA"
  | "CMPMN"
  | "CMPO"
  | "CMPQ"
  | "CMPRF"
  | "CMTY"
  | "COMC"
  | "CRRL"
  | "CSNO"
  | "CSTL"
  | "CSTM"
  | "CTHSE"
  | "CTRA"
  | "CTRCM"
  | "CTRF"
  | "CTRM"
  | "CTRR"
  | "CTRS"
  | "CVNT"
  | "DAM"
  | "DAMQ"
  | "DAMSB"
  | "DARY"
  | "DCKD"
  | "DCKY"
  | "DIKE"
  | "DIP"
  | "DPOF"
  | "EST"
  | "ESTO"
  | "ESTR"
  | "ESTSG"
  | "ESTT"
  | "ESTX"
  | "FCL"
  | "FNDY"
  | "FRM"
  | "FRMQ"
  | "FRMS"
  | "FRMT"
  | "FT"
  | "FY"
  | "FYT"
  | "GATE"
  | "GDN"
  | "GHAT"
  | "GHSE"
  | "GOSP"
  | "GOVL"
  | "GRVE"
  | "HERM"
  | "HLT"
  | "HMSD"
  | "HSE"
  | "HSEC"
  | "HSP"
  | "HSPC"
  | "HSPD"
  | "HSPL"
  | "HSTS"
  | "HTL"
  | "HUT"
  | "HUTS"
  | "INSM"
  | "ITTR"
  | "JTY"
  | "LDNG"
  | "LEPC"
  | "LIBR"
  | "LNDF"
  | "LOCK"
  | "LTHSE"
  | "MALL"
  | "MAR"
  | "MFG"
  | "MFGB"
  | "MFGC"
  | "MFGCU"
  | "MFGLM"
  | "MFGM"
  | "MFGPH"
  | "MFGQ"
  | "MFGSG"
  | "MKT"
  | "ML"
  | "MLM"
  | "MLO"
  | "MLSG"
  | "MLSGQ"
  | "MLSW"
  | "MLWND"
  | "MLWTR"
  | "MN"
  | "MNAU"
  | "MNC"
  | "MNCR"
  | "MNCU"
  | "MNFE"
  | "MNMT"
  | "MNN"
  | "MNQ"
  | "MNQR"
  | "MOLE"
  | "MSQE"
  | "MSSN"
  | "MSSNQ"
  | "MSTY"
  | "MTRO"
  | "MUS"
  | "NOV"
  | "NSY"
  | "OBPT"
  | "OBS"
  | "OBSR"
  | "OILJ"
  | "OILQ"
  | "OILR"
  | "OILT"
  | "OILW"
  | "OPRA"
  | "PAL"
  | "PGDA"
  | "PIER"
  | "PKLT"
  | "PMPO"
  | "PMPW"
  | "PO"
  | "PP"
  | "PPQ"
  | "PRKGT"
  | "PRKHQ"
  | "PRN"
  | "PRNJ"
  | "PRNQ"
  | "PS"
  | "PSH"
  | "PSN"
  | "PSTB"
  | "PSTC"
  | "PSTP"
  | "PYR"
  | "PYRS"
  | "QUAY"
  | "RDCR"
  | "RDIN"
  | "RECG"
  | "RECR"
  | "REST"
  | "RET"
  | "RHSE"
  | "RKRY"
  | "RLG"
  | "RLGR"
  | "RNCH"
  | "RSD"
  | "RSGNL"
  | "RSRT"
  | "RSTN"
  | "RSTNQ"
  | "RSTP"
  | "RSTPQ"
  | "RUIN"
  | "SCH"
  | "SCHA"
  | "SCHC"
  | "SCHL"
  | "SCHM"
  | "SCHN"
  | "SCHT"
  | "SECP"
  | "SHPF"
  | "SHRN"
  | "SHSE"
  | "SLCE"
  | "SNTR"
  | "SPA"
  | "SPLY"
  | "SQR"
  | "STBL"
  | "STDM"
  | "STNB"
  | "STNC"
  | "STNE"
  | "STNF"
  | "STNI"
  | "STNM"
  | "STNR"
  | "STNS"
  | "STNW"
  | "STPS"
  | "SWT"
  | "SYG"
  | "THTR"
  | "TMB"
  | "TMPL"
  | "TNKD"
  | "TOLL"
  | "TOWR"
  | "TRAM"
  | "TRANT"
  | "TRIG"
  | "TRMO"
  | "TWO"
  | "UNIP"
  | "UNIV"
  | "USGE"
  | "VETF"
  | "WALL"
  | "WALLA"
  | "WEIR"
  | "WHRF"
  | "WRCK"
  | "WTRW"
  | "ZNF"
  | "ZOO"
  | "ASPH"
  | "ATOL"
  | "BAR"
  | "BCH"
  | "BCHS"
  | "BDLD"
  | "BLDR"
  | "BLHL"
  | "BLOW"
  | "BNCH"
  | "BUTE"
  | "CAPE"
  | "CFT"
  | "CLDA"
  | "CLF"
  | "CNYN"
  | "CONE"
  | "CRDR"
  | "CRQ"
  | "CRQS"
  | "CRTR"
  | "CUET"
  | "DLTA"
  | "DPR"
  | "DSRT"
  | "DUNE"
  | "DVD"
  | "ERG"
  | "FAN"
  | "FORD"
  | "FSR"
  | "GAP"
  | "GRGE"
  | "HDLD"
  | "HLL"
  | "HLLS"
  | "HMCK"
  | "HMDA"
  | "INTF"
  | "ISL"
  | "ISLET"
  | "ISLF"
  | "ISLM"
  | "ISLS"
  | "ISLT"
  | "ISLX"
  | "ISTH"
  | "KRST"
  | "LAVA"
  | "LEV"
  | "MESA"
  | "MND"
  | "MRN"
  | "MT"
  | "MTS"
  | "NKM"
  | "NTK"
  | "NTKS"
  | "PAN"
  | "PANS"
  | "PASS"
  | "PEN"
  | "PENX"
  | "PK"
  | "PKS"
  | "PLAT"
  | "PLATX"
  | "PLDR"
  | "PLN"
  | "PLNX"
  | "PROM"
  | "PT"
  | "PTS"
  | "RDGB"
  | "RDGE"
  | "REG"
  | "RK"
  | "RKFL"
  | "RKS"
  | "SAND"
  | "SBED"
  | "SCRP"
  | "SDL"
  | "SHOR"
  | "SINK"
  | "SLID"
  | "SLP"
  | "SPIT"
  | "SPUR"
  | "TAL"
  | "TRGD"
  | "TRR"
  | "UPLD"
  | "VAL"
  | "VALG"
  | "VALS"
  | "VALX"
  | "VLC"
  | "APNU"
  | "ARCU"
  | "ARRU"
  | "BDLU"
  | "BKSU"
  | "BNKU"
  | "BSNU"
  | "CDAU"
  | "CNSU"
  | "CNYU"
  | "CRSU"
  | "DEPU"
  | "EDGU"
  | "ESCU"
  | "FANU"
  | "FLTU"
  | "FRZU"
  | "FURU"
  | "GAPU"
  | "GLYU"
  | "HLLU"
  | "HLSU"
  | "HOLU"
  | "KNLU"
  | "KNSU"
  | "LDGU"
  | "LEVU"
  | "MESU"
  | "MNDU"
  | "MOTU"
  | "MTU"
  | "PKSU"
  | "PKU"
  | "PLNU"
  | "PLTU"
  | "PNLU"
  | "PRVU"
  | "RDGU"
  | "RDSU"
  | "RFSU"
  | "RFU"
  | "RISU"
  | "SCNU"
  | "SCSU"
  | "SDLU"
  | "SHFU"
  | "SHLU"
  | "SHSU"
  | "SHVU"
  | "SILU"
  | "SLPU"
  | "SMSU"
  | "SMU"
  | "SPRU"
  | "TERU"
  | "TMSU"
  | "TMTU"
  | "TNGU"
  | "TRGU"
  | "TRNU"
  | "VALU"
  | "VLSU"
  | "BUSH"
  | "CULT"
  | "FRST"
  | "FRSTF"
  | "GROVE"
  | "GRSLD"
  | "GRVC"
  | "GRVO"
  | "GRVP"
  | "GRVPN"
  | "HTH"
  | "MDW"
  | "OCH"
  | "SCRB"
  | "TREE"
  | "TUND"
  | "VIN"
  | "VINS";

/** ISO-3166 2-letter country code, 2 characters. */
type LocationCountryCode = "string";
/**
 * Alternate country codes, comma separated, ISO-3166 2-letter country code,
 * 200 characters.
 */
type LocationCc2 = "string";
/**
 * fipscode (subject to change to iso code), see exceptions below,
 * see file admin1Codes.txt for display names of this code, varchar(20).
 */
type LocationAdmin1Code = "string";
/**
 * Code for the second administrative division, a county in the US, varchar(80).
 *
 * See file admin2Codes.txt.
 */
type LocationAdmin2Code = "string";
/** Code for third level administrative division, varchar(20). */
type LocationAdmin3Code = "string";
/** Code for fourth level administrative division, varchar(20). */
type LocationAdmin4Code = "string";
/** bigint (8 byte int) */
type LocationPopulation = "string";
/** in meters, integer */
type LocationElevation = "string";
/**
 * Digital elevation model:
 * - srtm3 or gtopo30
 * - average elevation of 3''x3'' (ca 90mx90m) or 30''x30'' (ca 900mx900m)
 * - area in meters (srtm processed by cgiar/ciat)
 */
type LocationDem = "string";
/** The iana timezone id (see file timeZone.txt), varchar(40). */
type LocationTimezone = "string";
/** Date of last modification in yyyy-MM-dd format */
type LocationModificationDate = "string";

export type LocationData = [
  GeonameId,
  LocationName,
  LocationAsciiname,
  LocationAlternatenames,
  LocationLatitude,
  LocationLongitude,
  LocationFeatureClass,
  LocationFeatureCode,
  LocationCountryCode,
  LocationCc2,
  LocationAdmin1Code,
  LocationAdmin2Code,
  LocationAdmin3Code,
  LocationAdmin4Code,
  LocationPopulation,
  LocationElevation,
  LocationDem,
  LocationTimezone,
  LocationModificationDate,
];

// NOTE: The location JSON uses short keys and
// optional properties to reduce filesize.
export interface RelevantLocation {
  id: string; // GeoName location ID
  n: string; // location name
  s: string; // state code
  p?: string; // population
  a?: Array<string>; // alternate location names
}

export interface RelevantLocationAlternate {
  id: AlternateNameId;
  alternateOf: GeonameId;
  name: AlternateName;
  isAbbreviation: IsAbbreviation;
  isPreferredName: IsPreferredName;
  isShortName: IsShortName;
  isColloquial: IsColloquial;
}

export interface DataFileUrls {
  remoteArchiveUrl: string;
  localDownloadPath: string;
  localExtractionPath: string;
}
