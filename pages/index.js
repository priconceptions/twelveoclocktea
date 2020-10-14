import Head from 'next/head';
import styles from '../styles/Home.module.css';
import KermitTea from '../components/KermitTea';
import Logo from '../components/Logo';
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

const teaLogo = () => {
  return (
    <svg xmlns="http://w3.org/2000/svg" viewBox="0 0 100 100">
      <text y=".9em" font-size="90">
        🍵
      </text>
    </svg>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <ColorModeProvider value="dark">
        <CSSReset />
        <Head>
          <title>12 O'Clock Tea</title>
          {/* <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍵</text></svg>" /> */}
          <link rel="shortcut icon" href="https://emojicdn.elk.sh/🍵" />
        </Head>
        <Grid
          height="100vh"
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)'
          ]}
          gap={0}
        >
          <Box
            as="section"
            w="100%"
            h="100vh"
            display={['none', 'flex', 'flex', 'flex']}
            justifyContent="center"
            alignItems="center"
          >
            <KermitTea />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            as="section"
            w="100%"
            h="100vh"
            pr="3rem"
            pl={['3rem', '0', '0', '0']}
          >
            <Box verticalAlign="center">
              <Heading as="h1" fontWeight="black" fontSize="4xl">
                <Logo />
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
                <Input placeholder="Enter Email" focusBorderColor="#adc90d" />
                <Button bg="#adc90d" color="black">
                  Try it!
                </Button>
              </Box>
              <Button variantColor="#adc90d" variant="link" mt="6">
                Let me read it first
              </Button>
            </Box>
          </Box>
        </Grid>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
