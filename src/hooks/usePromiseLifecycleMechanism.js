import { useImmerReducer } from "use-immer";

export const INITIAL_STATE = {
  status: 'idle',
  error: ''
}

function reducer(state, action) {
  const { type } = action;
  if (type === 'loading') {
    state.status = 'loading'
  } else if (type === 'fulfilled') {
    state.status = 'fulfilled'
  } else if (type === 'error') {
    state.status = 'error';
    if (action.payload) {
      state.error = action.payload;
    }
  } else {
    return state;
  }
}

const usePromiseLifecycleMechanism = () => {
  const [promiseState, dispatch] = useImmerReducer(reducer, INITIAL_STATE);

  const isIdle = promiseState.status === 'idle';
  const isLoading = promiseState.status === 'loading';
  const isFulfilled = promiseState.status === 'fulfilled';
  const isError = promiseState.status === 'error';
  const status = promiseState.status;
  const error = promiseState.error;

  return { isIdle, isLoading, isFulfilled, isError, status, error, dispatch }
}

export default usePromiseLifecycleMechanism