import React from 'react';
import { Card, CardContent, CardHeader, Divider, styled } from '@mui/material';

const Root = styled(Card)({width: '100%', p: 0});

const ContentWrapper = ({title, children}) => (
  <Root>
    <CardHeader title={title}/>
    <Divider/>
    <CardContent>{children}</CardContent>
  </Root>
);

export default ContentWrapper;
