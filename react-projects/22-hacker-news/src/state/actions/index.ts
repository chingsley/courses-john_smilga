import { ActionType } from "../action-types";

export interface IStory {
  objectID: string;
}

export enum EnumPageTransition {
  Inc = 'inc',
  Dec = 'dec'
}


export interface SetLoadingAction {
  type: ActionType.SET_LOADING;
}

export interface SetStoriesAction {
  type: ActionType.SET_STORIES;
  payload: {
    hits: IStory[];
    nbPages: number;
  };
}

export interface RemoveStoryAction {
  type: ActionType.REMOVE_STORY;
  payload: string;
}

export interface HandleSearchAction {
  type: ActionType.HANDLE_SEARCH;
  payload: string;
}

export interface HandlePageAction {
  type: ActionType.HANDLE_PAGE;
  payload: EnumPageTransition;
}

export type Action =
  | SetLoadingAction
  | SetStoriesAction
  | RemoveStoryAction
  | HandleSearchAction
  | HandlePageAction;