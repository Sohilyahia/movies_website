import * as actions from "./ActionsTypes";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case actions.ADD_TO_WATCHED:
      return {
        ...state,
        watchlist: state.watchlist.filter((m) => m.id !== action.payload.id),
        watched: [action.payload, ...state.watched],
      };
    case actions.REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter((m) => m.id !== action.payload),
      };
    case actions.REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((m) => m.id !== action.payload),
      };
    case actions.ADD_FROM_WATCHLIST_TO_WATCHED:
      return {
        ...state,
        watchlist: state.watchlist.filter((m) => m.id !== action.payload.id),
        watched: [action.payload, ...state.watched],
      };
    case actions.ADD_FROM_WATCHED_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter((m) => m.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist],
      };
  }
};
