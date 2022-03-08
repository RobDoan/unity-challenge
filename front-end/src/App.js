import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { theme } from './layouts/application-layout/themConfig';
import Router from './routes/Router';


export const myCache = createCache({
  key: 'my-prefix-key',
  stylisPlugins: []
})

const App = () => {
  const routing = useRoutes(Router);
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={myCache}>
        <CssBaseline/>
        {routing}
      </CacheProvider>
    </ThemeProvider>
  );
};

export default App;
