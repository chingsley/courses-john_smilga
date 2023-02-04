import { Action } from './actions';
import { ActionType } from './actionTypes';
interface Person { id: string; name: string; }


interface State {
  people: Person[],
  isResultModalOpen: boolean;
  modalContent: string;
}

export const initialState = {
  people: [],
  isResultModalOpen: false,
  modalContent: '',
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return {
        ...state,
        people: [...state.people, action.payload],
        isResultModalOpen: true,
        modalContent: `${action.payload.name} added`
      };
    case ActionType.REMOVE_ITEM:
      const userToRemove = state.people.find(({ id }) => id === action.payload);
      if (!userToRemove) return state;

      return {
        ...state,
        people: state.people.filter(({ id }) => id !== action.payload),
        isResultModalOpen: true,
        modalContent: `${userToRemove.name} removed`
      };
    case ActionType.NO_VALUE:
      return {
        ...state,
        isResultModalOpen: true,
        modalContent: 'no value entered'
      };
    case ActionType.CLOSE_MODAL:
      return {
        ...state,
        isResultModalOpen: false,
        modalContent: '',
      };
    default:
      return state;
  }
}