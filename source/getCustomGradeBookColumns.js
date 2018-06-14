import fetchAll from './internal/fetchAll'

const canvasDomain = process.env.CANVAS_API_DOMAIN

export default function getCustomGradeBookColumns (courseId) {
  return fetchAll(canvasDomain + `/courses/${courseId}/custom_gradebook_columns?include_hidden=true`)
}