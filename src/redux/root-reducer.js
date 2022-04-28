import {combineReducer} from 'redux'
import directoryReducer from './directory/directory.reducer'

const rootReducer = combineReducer({
    directory: directoryReducer
})

export default rootReducer