import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Select,
} from "@chakra-ui/react"
import { INDEX_DATA } from "./const"
import theme from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box p={8} minH="100vh" bgGradient='linear(to-br, green.200, pink.200)'>
      <Text align="center" fontSize="2xl" fontWeight={600}>
        {INDEX_DATA.SITENAME}
      </Text>
      <Box pt={10}>
        <Input placeholder="キーワード" backgroundColor="#fff" my={2} />
        <Input placeholder="作家名" backgroundColor="#fff" my={2} />
        <Input placeholder="ジャンル" backgroundColor="#fff" my={2} />
        <Input placeholder="材質・技法" backgroundColor="#fff" my={2} />
        <Select placeholder="所蔵館" backgroundColor="#fff" my={2}>
          <option value="edo-tokyo-museum">江戸東京博物館</option>
          <option value="topmuseum">東京都写真美術館</option>
          <option value="mot-art-museum">東京都現代美術館</option>
          <option value="tatemonoen">江戸東京たてもの園</option>
          <option value="tobikan">東京都美術館</option>
          <option value="teien-art-museum">庭園美術館</option>
        </Select>
        <Input placeholder="製作年 以降 ※入力年以降の作品を表示します" backgroundColor="#fff" my={2} />
        <Input placeholder="製作年 以前 ※入力年以前の作品を表示します" backgroundColor="#fff" my={2} />
      </Box>
    </Box>
  </ChakraProvider>
)
