import React from 'react';
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography';

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
`

const LoadingText = styled(Typography)`
  font-size: 20px;
  margin-bottom: 20px;
`

const Loading = (props) => {
  return (
    <Root>
      <LoadingText color="textSecondary">
        Loading...
      </LoadingText>
    </Root>
  );
}
export default Loading


