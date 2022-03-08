import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Loading from './layouts/application-layout/loadable/Loading'

ReactDOM.render(
  <Suspense fallback={<Loading/>}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Suspense>
  ,
  document.getElementById('root'),
);

