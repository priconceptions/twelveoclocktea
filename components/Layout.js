import Head from 'next/head';
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

const Layout = (props) => {
  <ThemeProvider>
    <ColorModeProvider value="dark">
      <CSSReset />
      <Head>
        <title>12 O'Clock Tea</title>
        {/* <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍵</text></svg>" /> */}
        <link rel="shortcut icon" href="https://emojicdn.elk.sh/🍵" />
      </Head>
      {...props}
    </ColorModeProvider>
  </ThemeProvider>;
};

const LandingPageLayout = (props) => {
  <ThemeProvider>
    <ColorModeProvider value="dark">
      <CSSReset />
      <Head>
        <title>12 O'Clock Tea</title>
        <link rel="shortcut icon" href="https://emojicdn.elk.sh/🍵" />
      </Head>
      {...props}
    </ColorModeProvider>
  </ThemeProvider>;
};

export { Layout, LandingPageLayout };
