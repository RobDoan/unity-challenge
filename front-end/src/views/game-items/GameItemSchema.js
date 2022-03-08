import * as yup from 'yup'

const GameItemSchema = yup.object().shape({
  title: yup.string()
    .required('you must enter a title'),
  subtitle: yup.string(),
  description: yup.string().min(10),
  images: yup.array().of(yup.object().shape({
    id: yup.string(),
    url: yup.string(),
    type: yup.number(),
  })),
  tags: yup.array().of(yup.string()),
  author: yup.string(),
  replayBundleUrlJson: yup.string(),
  duration: yup.number().required().positive().integer(),
  isDownloadable: yup.boolean(),
  isStreamable: yup.boolean(),
  version: yup.string().matches(/[v]*\d+\.\d+/)
})

export default GameItemSchema
