import {
  TASK_ADD,
  TASK_UPDATE,
  TASK_DELETE,
  TASK_GET_ID,
  TASK_GET_LIST,
  TASK_SELECT_TOGGLER
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

    case TASK_SELECT_TOGGLER: {
      const id = action.payload
      const hasTask = state.taskSelecteds.map(task=>{if(id===task[0]) return true})
      if (hasTask){
        return {...state, taskSelecteds: [...state.taskSelecteds, id]}
      } else {
        const selecteds = state.taskSelecteds.filter(el=>{if (el!==id) return el})
        return {...state, taskSelecteds: selecteds}
      }
    }

    default:
      return state
  }
}
