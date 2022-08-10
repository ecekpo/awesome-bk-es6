import insertDate from './modules/time.js';
import { locStore } from './modules/locStore.js';

const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const button = document.querySelector('.btn');

insertDate();

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  showAddedBooks() {
    this.title = title;
    const bookList = document.querySelector('.remove-book');
    bookList.innerHTML = '';

    locStore();
  }

  removeAddedBook(el) {
    const books = JSON.parse(localStorage.getItem('book'));
    localStorage.setItem('book', JSON.stringify(books));
    const { id } = el;
    localStorage.setItem(
      'book',
      JSON.stringify(books.filter((book) => book.id !== id)),
    );
    this.showAddedBooks();
  }
}

const book = new Book(title, author);

// Add Book
button.addEventListener('click', () => {
  const books = JSON.parse(localStorage.getItem('book') || '[]');
  const id = Math.random().toString(36).substr(0, 5);
  books.push({ id, title: title.value, author: author.value });
  localStorage.setItem('book', JSON.stringify(books));

  title.value = '';
  author.value = '';
  book.showAddedBooks();
});

// Remove
const removeBtn = document.querySelector('.remove-book');

removeBtn.addEventListener('click', (e) => {
  book.removeAddedBook(e.target);
});

book.showAddedBooks();