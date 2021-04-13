import * as Type from './constant';

const initState = {
  isOpen: false,
  yearId: null,
  semId: null,
};

export default function courseDragSource(state = initState, action) {
  switch (action.type) {
    case Type.OPEN_DIALOG: {
      const { yearId, semId } = action.payload;
      return Object.assign({}, state, {
        isOpen: true,
        yearId,
        semId,
      });
    }
    case Type.CLOSE_DIALOG: {
      return Object.assign({}, state, {
        isOpen: false,
      });
    }
    case Type.CLEAR_DATA: {
      return initState;
    }
    default:
      return state;
  }
}
