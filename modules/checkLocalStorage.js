export let bookList = [];

const checkLocalStorage = () => {
  if (localStorage.getItem('Books') === null) {
    bookList = [];
  } else {
    bookList = JSON.parse(localStorage.getItem('Books'));
  }
};

export default checkLocalStorage;