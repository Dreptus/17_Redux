import { legacy_createStore,configureStore, combineReducers } from "@reduxjs/toolkit";
import initialState from "./initialState";
import shortid from "shortid";

// const reducer = (state, payload) => {
//   switch (payload.type) {
//     case "ADD_COLUMN":
//       return {
//         ...state,
//         columns: [...state.columns, { ...payload.newColumn, id: shortid() }],
//       };
//     case "ADD_CARD":
//       console.log(payload)
//       return {
//         ...state,
//         cards: [...state.cards, { ...payload.newCard, id: shortid() }],
//       };
//     default:
//       return state;
//   }
// };

// const store = legacy_createStore(
//   reducer,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const columnsReducer = (state = initialState.columns, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return [...state, { ...action.payload, id: shortid() }];
    default:
      return state;
  }
};

const cardsReducer = (state = initialState.cards, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [...state, { ...action.payload, id: shortid() }];
    default:
      return state;
  }
};

const subReducer = {
  columns: columnsReducer,
  cards: cardsReducer,
};

const reducer = combineReducers(subReducer);

const store = configureStore({
  reducer,
});

export default store;
