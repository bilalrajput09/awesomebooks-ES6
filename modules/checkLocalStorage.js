export let bookList = [];

export default function checkLocalStorage() {
    if (localStorage.getItem("Books") === null) {
        bookList = [];
    } else {
        bookList = JSON.parse(localStorage.getItem("Books"));
    }
}