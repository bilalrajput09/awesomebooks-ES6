export let bookList = []; // eslint-disable-line

const checkLocalStorage = () => {
  if (localStorage.getItem('Books') === null) {
    bookList = [];
  } else {
    bookList = JSON.parse(localStorage.getItem('Books'));
  }
};

export default checkLocalStorage;