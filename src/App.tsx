import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Code,
  Button,
  Image,
  Spinner
} from "@chakra-ui/react"
import { INDEX_DATA, LABELS } from "./const"
import theme from "./theme"
import api from "./api"
import { getRandom } from "./utils"

interface objectResponseData {
  objectID: number
  isHighlight: boolean
  accessionNumber: string
  accessionYear: string
  isPublicDomain: boolean
  primaryImage: string
  primaryImageSmall: string
  additionalImages: string[]
  constituents: {
    constituentID: number
    role: string
    name: string
    constituentULAN_URL: string
    constituentWikidata_URL: string
  }[]
  department: string
  objectName: string
  title: string
  culture: string
  period: string
  dynasty: string
  reign: string
  portfolio: string
  artistRole: string
  artistPrefix: string
  artistDisplayName: string
  artistDisplayBio: string
  artistSuffix: string
  artistAlphaSort: string
  artistNationality: string
  artistBeginDate: string
  artistEndDate: string
  artistGender: string
  artistWikidata_URL: string
  artistULAN_URL: string
  objectDate: string
  objectBeginDate: string
  objectEndDate: string
  medium: string
  dimensions: string
  dimensionsParsed: string
  measurements: {
    elementName: string
    elementDescription: string
    elementMeasurements: {
      Height: number
      Length: number
      Width: number
    }
  }[]
  creditLine: string
  geographyType: string
  city: string
  state: string
  county: string
  country: string
  region: string
  subregion: string
  locale: string
  locus: string
  excavation: string
  river: string
  classification: string
  rightsAndReproduction: string
  linkResource: string
  metadataDate: string
  repository: string
  objectURL: string
  tags: {
    term: string
    AAT_URL: string
    Wikidata_URL: string
  }[]
  objectWikidata_URL: string
  isTimelineWork: boolean
  GalleryNumber: number
}

export const App = () => {
  const [numArr, setNumArr] = React.useState<number[]>([]);
  const [result, setResult] = React.useState<objectResponseData[]>([]);
  const [isPending, setIsPending] = React.useState(false);

  const getSearchResult = async () => {
    let objectIDs: number[] = numArr.length ? numArr : [];

    if (!numArr.length) {
      setIsPending(true);
      await api.get('https://collectionapi.metmuseum.org/public/collection/v1/objects', (status: number, response: any) => {
        objectIDs = response.objectIDs
        setNumArr(objectIDs);
      });
    }
    const randomNum = getRandom(objectIDs);
    await api.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNum}`, (status: number, response: any) => {
      setResult([response]);
      setIsPending(false);
    });
  }

  return (
    <ChakraProvider theme={theme}>
      <Box p={8} minH="100vh" bgGradient='linear(to-br, green.200, pink.200)'>
        <Text align="center" fontSize="2xl" fontWeight={600}>
          {INDEX_DATA.SITENAME}
        </Text>
        <Flex justify="center" p={8}>
          <Button colorScheme="pink" onClick={getSearchResult}>{INDEX_DATA.BUTTON}</Button>
        </Flex>
        <Box>
            {isPending && (
              <Flex justify="center">
                <Spinner color='pink.500' />
              </Flex>
            )}
            {result.map((item) => {
              return (
                <>
                  {item.primaryImage && (
                    <Flex justify="center" pb={8}>
                      <Image src={item.primaryImageSmall} width="30%" />
                    </Flex>
                  )}
                  <Code p={2} width="100%" lineHeight={1.8}>
                    {LABELS.TITLE}: {item.title} <br />
                    {LABELS.ARTIST_DISPLAY_NAME}: {item.artistDisplayName} <br />
                    {LABELS.ARTIST_DISPLAY_BIO}: {item.artistDisplayBio} <br />
                    {LABELS.ARTIST_NATIONALITY}: {item.artistNationality} <br />
                    {LABELS.ARTIST_BEGIN_DATE}: {item.artistBeginDate} <br />
                    {LABELS.ARTIST_END_DATE}: {item.artistEndDate} <br />
                    {LABELS.ARTIST_GENDER}: {item.artistGender} <br />
                    {LABELS.IS_PUBLIC_DOMAIN}: {item.isPublicDomain ? LABELS.PUBLIC.TRUE : LABELS.PUBLIC.FALSE} <br />
                    {LABELS.CULTURE}: {item.culture} <br />
                    {LABELS.PERIOD}: {item.period} <br />
                    {LABELS.DIMENTIONS}: {item.dimensions} <br />
                    {LABELS.CITY}: {item.city} <br />
                  </Code>
                </>
              ) 
            })}
        </Box>
      </Box>
    </ChakraProvider>
  )
}
