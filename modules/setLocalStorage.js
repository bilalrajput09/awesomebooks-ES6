const setLocalStorage = (array) => {
  localStorage.setItem('Books', JSON.stringify(array));
};

export default setLocalStorage;