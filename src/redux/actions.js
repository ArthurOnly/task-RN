import {AsyncStorage} from 'react-native';

export const TASK_ADD = 'TASK_ADD'
export const TASK_UPDATE = 'TASK_UPDATE'
export const TASK_DELETE = 'TASK_DELETE'
export const TASK_GET_LIST = 'TASK_GET_LIST'
export const TASK_GET_ID = 'TASK_GET_ID'
export const TASK_SELECT_TOGGLER = 'TASK_SELECT_TOGGLER'

export async function taskAdd(data,dispatch) {
  const itemKey = new Date().getTime().toString()
  const item = JSON.stringify(data)
  try{
    await AsyncStorage.setItem(itemKey, item)
  } catch (error) {
    alert (error)
  }
  return dispatch({type: TASK_ADD, payload: [itemKey,item]})
}

export function taskUpdate(id,data) {
  //Logica de add
  return {type: TASK_UPDATE, payload}
}

export function taskDelete(ids) {
  AsyncStorage.multiRemove(ids)
  return {type: TASK_DELETE, payload: id}
}

export async function taskGetList(dispatch) {
  const keys = await AsyncStorage.getAllKeys()
  const payload = await AsyncStorage.multiGet(keys)
  return dispatch({type: TASK_GET_LIST, payload})
}

export function taskGet(id) {
  return {type: TASK_GET_ID, payload: id}.payload
}

export async function taskSelectToggler(id,dispatch) {
  return dispatch({type: TASK_SELECT_TOGGLER, payload: id})
}