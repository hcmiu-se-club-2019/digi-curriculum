import * as Type from './constant';

export function openDialog({ yearId, semId }) {
  return {
    type: Type.OPEN_DIALOG,
    payload: {
      yearId,
      semId,
    },
  };
}

export function closeDialog() {
  return {
    type: Type.CLOSE_DIALOG,
  };
}

export function clearData() {
  return {
    type: Type.CLEAR_DATA,
  };
}
