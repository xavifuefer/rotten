import { combineReducers } from 'redux'

import ui from './ui'
import hero from './hero'

export default combineReducers({
  ui,
  hero,
})
