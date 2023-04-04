import checkLocalStorage, { bookList } from './modules/checkLocalStorage.js';
import { setLocalStorage } from './modules/setLocalStorage.js';
import Books, { booksContainer } from './modules/bookClass.js';
import { DateTime } from './modules/luxon.js';

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const btnAdd = document.querySelector('#btn_add');
const mainForm = document.querySelector('.main_form');
const addNewBtn = document.querySelector('.add_new_btn');
const contactBtn = document.querySelector('.contact_btn');
const contactPage = document.querySelector('.contact');
const listBtn = document.querySelector('.list_btn');
const listContainer = document.querySelector('.list_container');

listBtn.addEventListener('click', () => {
  mainForm.style.display = 'none';
  listContainer.classList.remove('hidden');
  contactPage.classList.add('hidden');
});
addNewBtn.addEventListener('click', () => {
  mainForm.style.display = 'flex';
  listContainer.classList.add('hidden');
  contactPage.classList.add('hidden');
});

contactBtn.addEventListener('click', () => {
  mainForm.style.display = 'none';
  listContainer.classList.add('hidden');
  contactPage.classList.remove('hidden');
});

checkLocalStorage();
const bookObj = new Books();
btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  bookObj.addBook();
  bookList.push(bookObj);
  bookObj.displayBooks();
  setLocalStorage(bookList);
  title.value = '';
  author.value = '';
});

booksContainer.addEventListener('click', (e) => {
  const bookIndex = e.target.closest('.book_main_container').id;
  bookList.splice(bookIndex, 1);
  localStorage.setItem('Books', JSON.stringify(bookList));
  bookObj.displayBooks();
});
bookObj.displayBooks();

document.querySelector('#currentDate').innerHTML = DateTime.now().toFormat('MM/dd/yyyy, hh:mm');
