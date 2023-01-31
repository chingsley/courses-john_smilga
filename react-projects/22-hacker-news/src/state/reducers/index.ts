import { ActionType } from '../action-types';
import { Action, IStory, EnumPageTransition } from '../actions';

export interface IState {
  isLoading: boolean;
  hits: IStory[];
  page: number;
  nbPages: number;
  query: string;
}

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return { ...state, isLoading: true };
    case ActionType.SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case ActionType.REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter(story => story.objectID !== action.payload),
      };
    case ActionType.HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };
    case ActionType.HANDLE_PAGE:
      if (action.payload === EnumPageTransition.Inc) {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) nextPage = 0;
        return { ...state, page: nextPage };
      } else {
        let prevPage = state.page - 1;
        if (prevPage < 0) prevPage = state.nbPages - 1;
        return { ...state, page: prevPage };
      }
    default:
      console.log('invalid action type detected');
      return state;
  }
};

export default reducer;