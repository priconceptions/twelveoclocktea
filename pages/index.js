import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  ThemeProvider,
  CSSReset,
  Box,
  Heading,
  ColorModeProvider,
  Grid,
  Text,
  Input,
  Button
} from '@chakra-ui/core';

export default function Home() {
  return (
    <ThemeProvider>
      <ColorModeProvider value="dark">
        <CSSReset />
        <Grid height="100vh" templateColumns="repeat(2, 1fr)" gap={0}>
          <Box as="section" w="100%" h="100vh" />

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            as="section"
            w="100%"
            h="100vh"
            pr="3rem"
          >
            <Box verticalAlign="center">
              <Heading as="h1" fontWeight="black" fontSize="4xl">
                🍵 12 O'Clock Tea
              </Heading>

              <Heading
                as="h2"
                fontWeight="black"
                fontSize="xl"
                mt="6"
                color="#adc90d"
              >
                Get the hottest, juiciest tea right in your inbox
              </Heading>

              <Text opacity="0.7" fontSize="lg" mt="6">
                Get the best news on entertainment, culture etc right in your
                inbox for free.
              </Text>
              <Box display="flex" mt="6">
                <Input placeholder="Enter Email" />
                <Button bg="#adc90d" color="black">
                  Try it!
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
