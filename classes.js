import checkLocalStorage, { bookList } from "./modules/checkLocalStorage.js";
import { setLocalStorage } from "./modules/setLocalStorage.js";
import Books, { booksContainer } from "./modules/bookClass.js";

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const btnAdd = document.querySelector("#btn_add");
checkLocalStorage();
const bookObj = new Books();
btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    bookObj.addBook();
    bookList.push(bookObj);
    bookObj.displayBooks();
    setLocalStorage(bookList)
})

booksContainer.addEventListener("click", (e) => {
    const bookIndex = e.target.closest(".book_main_container").id;
    bookList.splice(bookIndex, 1);
    localStorage.setItem("Books", JSON.stringify(bookList))
    bookObj.displayBooks();
})
bookObj.displayBooks();