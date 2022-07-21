import { createStore } from 'redux';
import shortid from 'shortid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      return {...state, books: state.books.filter(book => book.id !== action.payload) }
    case 'ADD_BOOK':
      return {...state, books: [...state.books, { id: shortid(), ...action.payload }] }
      default:
        return state;
    };
};

const initialState = {
  books: [
    { id: 1, title: 'Normal People', author: 'Sally Rooney' },
    { id: 2, title: 'What happend in Jonestown?', author: 'Jeff Guinn' },
    { id: 3, title: 'Night Stalker', author: 'Philip Carlo' },
  ]
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
