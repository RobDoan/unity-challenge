import React from 'react'
import { useController } from 'react-hook-form'
import { Box, Icon, styled } from '@mui/material'
import { useDropzone } from 'react-dropzone';
import { useGameItemContext } from './GameItemProvider';

const Root = styled(Box)(({theme}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  '& .productImageUpload': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1.6rem',
    margin: '0 10px',
    width: 128,
    height: 128,
    transitionProperty: 'box-shadow',
    transitionDuration: '250ms',
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
}));

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: inherit 20px;
`

const ImageItemWrapper = styled(Box)(({theme}) => ({
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1.6rem',
  width: 128,
  height: 128,
  transitionProperty: 'box-shadow',
  transitionDuration: '250ms',
  transitionTimingFunction: theme.transitions.easing.easeInOut,
  boxShadow: theme.shadows[2],
  margin: '0 10px',
  "&:hover": {
    boxShadow: theme.shadows[4],
  }
}))

const ImageItem = ({file}) => {
  const url = URL.createObjectURL(file)
  return <ImageItemWrapper>
    <img src={url} width='100%' height='100%' alt={file.path}/>
  </ImageItemWrapper>
}

const GameItemImages = (props) => {
  const {control, name} = props
  const {field} = useController({control, name})

  const {service} = useGameItemContext()
  const onDrop = async (acceptedFiles) => {
    const images = await service.uploadImages(acceptedFiles)
    const values = field.value || []
    field.onChange([...values, ...images])
  }
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    accept: "image/*", noDrag: true, onDrop
  });
  return (
    <Root>
      <Wrapper>
        <Box {...getRootProps({className: 'dropzone productImageUpload'})} sx={{
          boxShadow: 2, ":hover": {
            boxShadow: 4,
          }
        }}>
          <input {...getInputProps()} />
          <Icon fontSize="large" color="action">
            cloud_upload
          </Icon>
        </Box>
        {
          acceptedFiles.map((file) => (<ImageItem file={file} key={file.filename}/>))
        }
      </Wrapper>

    </Root>
  );
}

export default GameItemImages
