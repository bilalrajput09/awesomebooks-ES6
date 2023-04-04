/* eslint-disable */
export const setLocalStorage = (array) => {
  localStorage.setItem('Books', JSON.stringify(array));
};