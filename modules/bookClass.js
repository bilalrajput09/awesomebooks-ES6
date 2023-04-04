import { bookList } from './checkLocalStorage.js';

export const booksContainer = document.querySelector('.book_list');

export default class Books {
  constructor() {
    this.id;
    this.title;
    this.author;
  }

  addBook() {
    this.title = title.value;
    this.author = author.value;
  }

  displayBooks() {
    booksContainer.innerHTML = '';
    let html = '';
    bookList.forEach((book, i) => {
      html += `<div id = "${i}" class ="book_main_container allbooks">
      <div class ="paragraph"><p>
        ${book.title} By
        </p>
        <p>
        ${book.author}
        </p>
        </div>
        <button id="btn_remove" class = "remove">Remove</button>
</div>`;
      booksContainer.innerHTML = html;
    });
  }

  removeBooks() {
    const bookIndex = bookList.findIndex((_, i) => i === id);
    bookList.splice(bookIndex, 1);
  }
}
