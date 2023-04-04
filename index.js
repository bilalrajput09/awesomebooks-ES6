
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const btnAdd = document.querySelector("#btn_add");
const booksContainer = document.querySelector(".book_list");
let bookList = [];

const checkLocalStorage = function () {
    if (localStorage.getItem("Books") === null) {
        bookList = [];
    } else {
        bookList = JSON.parse(localStorage.getItem("Books"));
        displayBooks();
    }
}

const setLocalStorage = function (array) {
    localStorage.setItem("Books", JSON.stringify(array));
}



const addBook = function () {
    if (title.value === "" || author.value === "") return;
    const bookObject = {
        title: title.value,
        author: author.value
    }
    bookList.push(bookObject);
    console.log(bookList);
    setLocalStorage(bookList);
    displayBooks();
}


const displayBooks = function () {
    booksContainer.innerHTML = ""
    let html = '';
    bookList.forEach((book, i) => {
        html += `<div id = "${i}" class ="book_main_container"><p>
        ${book.title}
        </p>
        <p>
        ${book.author}
        </p>
        <button id="btn_remove" onclick = "removeBook(${i})">Remove</button>
        <br><br></div>`;
        booksContainer.innerHTML = html;
    });
}

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addBook();
});




// Remove book,
const removeBook = function (id) {
    const bookIndex = bookList.findIndex((_, i) => i === id);
    console.log(bookIndex);
    console.log(id);
    bookList.splice(bookIndex, 1);
    console.log(bookList);
    setLocalStorage(bookList);
    displayBooks()
}
checkLocalStorage();