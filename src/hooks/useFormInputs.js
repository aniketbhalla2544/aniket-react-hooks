import { useReducer } from 'react';

const initialState = {};

function reducer(inputStore, action) {
  const { name, value } = action.target;
  return {
    ...inputStore,
    [name]: value,
    autoFocusInputName: name
  };
}

export function useFormInputs() {
  const [inputStore, dispatchInputStore] = useReducer(reducer, initialState);
  return [inputStore, dispatchInputStore];
}
