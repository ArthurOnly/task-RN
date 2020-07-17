import {
  TASK_ADD,
  TASK_UPDATE,
  TASK_DELETE,
  TASK_GET_ID,
  TASK_GET_LIST,
  TASK_SELECT,
  TASK_SELECT_REMOVE
} from './actions'

const INITIAL_STATE = {
  tasks: [],
  task: null,
  taskSelecteds: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TASK_ADD: {
      const payload = action.payload
      const newTasks = [state.tasks.concat(payload)]
      return {...state, tasks: newTasks}
    }

    case TASK_UPDATE: {
      const payload = action.payload
      return {...state, task: payload}
    }

    case TASK_DELETE: {
      const payload = action.payload
      return {...state, task: payload}
    }

    case TASK_GET_ID: {
      const payload = action.payload
      return {...state, task: payload}
    }

    case TASK_GET_LIST: {
      const payload = action.payload
      return {...state, tasks: payload}
    }

    case TASK_SELECT: {
      const payload = action.payload
      return {...state, taskSelecteds: [...state.taskSelecteds, payload]}
    }

    case TASK_SELECT_REMOVE: {
      const payload = action.payload
      const selecteds = state.taskSelecteds.filter(el=>{if (el!==payload) return el})
      return {...state, taskSelecteds: selecteds}
    }

    default:
      return state
  }
}
