import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const WizardParentRedux = () => {
  const demoState = {
    books: [
      {
        id: "123abcdefghiklmn",
        title: "Origin",
        description:
          "Origin thrusts Robert Langdon into the dangerous intersection of humankind’s two most enduring questions.",
        author: "Dan Brown",
        published: 2017,
      },
    ],
    filters: {
      text: "ori",
      sortBy: "published", // published or title
      startYear: undefined,
      endYear: undefined,
    },
  };

  // action creators for Books Reducer
  const addBook = ({
    title = "",
    description = "",
    author = "",
    published = 0,
  } = {}) => ({
    type: "ADD_BOOK",
    book: {
      id: "123",
      title,
      description,
      author,
      published,
    },
  });

  const removeBook = ({ id } = {}) => ({
    type: "REMOVE_BOOK",
    id,
  });

  const booksReducerDefaultState = [];
  // Books Reducer
  const booksReducer = (state = booksReducerDefaultState, action) => {
    switch (action.type) {
      case "ADD_BOOK":
        return [...state, action.book];
      case "REMOVE_BOOK":
        return state.filter(({ id }) => id !== action.id);
      default:
        return state;
    }
  };

  // action creators for Filters Reducer
  const filterText = (text = "") => ({
    type: "FILTER_TEXT",
    text,
  });

  const startYear = (startYear) => ({
    type: "START_YEAR",
    startYear,
  });

  const endYear = (endYear) => ({
    type: "END_YEAR",
    endYear,
  });

  const sortBy = (sortType) => ({
    type: "SORT_BY",
    sortType,
  });

  const clear = () => ({
    type: "CLEAR",
    defaultFilter: filtersReducerDefaultState,
  });

  const filtersReducerDefaultState = {
    text: "",
    sortBy: "",
    startYear: undefined,
    endYear: undefined,
  };
  // Filters Reducer
  const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case "FILTER_TEXT":
        return {
          ...state,
          text: action.text,
        };
      case "START_YEAR":
        return {
          ...state,
          startYear: action.startYear,
        };
      case "END_YEAR":
        return {
          ...state,
          endYear: action.endYear,
        };
      case "SORT_BY":
        return {
          ...state,
          sortBy: action.sortType,
        };
      case "CLEAR":
        return {
          ...state,
          text: action.defaultFilter.text,
          sortBy: action.defaultFilter.sortBy,
          startYear: action.defaultFilter.startYear,
          endYear: action.defaultFilter.endYear,
        };
      default:
        return state;
    }
  };

  // Store
  const store = createStore(
    combineReducers({
      books: booksReducer,
      filters: filtersReducer,
    })
  );

  const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const books = getVisibleBooks(state.books, state.filters);
    console.log(books);
  });

  const getVisibleBooks = (books, { text, sortBy, startYear, endYear }) => {
    return books
      .filter((book) => {
        const textMatch =
          book.title.toLowerCase().includes(text.toLowerCase()) ||
          book.description.toLowerCase().includes(text.toLowerCase());

        const startYearMatch =
          typeof startYear !== "number" || startYear <= book.published;
        const endYearMatch =
          typeof endYear !== "number" || book.published <= endYear;

        return textMatch && startYearMatch && endYearMatch;
      })
      .sort((book1, book2) => {
        if (sortBy === "title") {
          return book1.title.localeCompare(book2.title);
        } else if (sortBy === "published") {
          return book1.published < book2.published ? -1 : 1;
        }
      });
  };

  const book1 = store.dispatch(
    addBook({
      title: "Origin",
      description:
        "Origin thrusts Robert Langdon into the dangerous intersection of humankind’s two most enduring questions.",
      author: "Dan Brown",
      published: 2017,
    })
  );

  const book2 = store.dispatch(
    addBook({
      title: "Harry Potter and the Deathly Hallows",
      description: "The seventh and final novel of the Harry Potter series.",
      author: "J. K. Rowling",
      published: 2007,
    })
  );

  const book3 = store.dispatch(
    addBook({
      title: "The 100-Year-Old Man Who Climbed Out the Window and Disappeared",
      author: "Jonas Jonasson",
      published: 2009,
    })
  );

  console.log("filterText: 'ow'");
  store.dispatch(filterText("ow"));
  store.dispatch(clear());

  console.log("startYear: 2008");
  store.dispatch(startYear(2008));
  store.dispatch(clear());

  console.log("endYear: 2012");
  store.dispatch(endYear(2012));
  store.dispatch(clear());

  store.dispatch(startYear(2008));
  console.log("startYear: 2008 - endYear: 2012");
  store.dispatch(endYear(2012));
  store.dispatch(clear());

  console.log("sortBy: 'published'");
  store.dispatch(sortBy("published"));
  store.dispatch(clear());

  console.log("sortBy: 'title'");
  store.dispatch(sortBy("title"));

  return;
};

export default WizardParentRedux;
