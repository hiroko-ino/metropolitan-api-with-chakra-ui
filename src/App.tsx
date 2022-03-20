import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
} from "@chakra-ui/react"
import { INDEX_DATA } from "./const"
import theme from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box p="8" minH="100vh" bgGradient='linear(to-br, green.200, pink.200)'>
      <Text align="center" fontSize="2xl" fontWeight={600}>
        {INDEX_DATA.SITENAME}
      </Text>
    </Box>
  </ChakraProvider>
)
