import { mockBookData } from "./data/mock-book-data.js";

let library = [...mockBookData];

function Book(title, author, pages, haveRead) {
  if (!new.target) {
    throw new Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.toggleHaveRead = function () {
    this.haveRead = !this.haveRead;
  };
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, haveRead: ${this.haveRead}`,
    );
  };
}

function addNewBook(title, author, pages, haveRead) {
  const book = new Book(title, author, pages, haveRead);
  library.push(book);
}

// --- Form dialog enables users to add books. ---------------

const dialog = document.getElementById("form-dialog");
const openAddBookForm = document.getElementById("open-add-book-form");
const closeAddBookForm = document.getElementById("close");

openAddBookForm.addEventListener("click", () => {
  dialog.showModal();
});

closeAddBookForm.addEventListener("click", () => {
  dialog.close();
});

// --- Slider for viewing how books cards render as they scale in quantity. ---

const bookCountSlider = document.querySelector("#book-count-slider");
bookCountSlider.max = mockBookData.length;

const sliderOutput = document.querySelector("#book-count-output");

bookCountSlider.addEventListener("input", (event) => {
  const sliderValue = event.target.value;
  const bookQuantity = Number(sliderValue);

  sliderOutput.textContent = bookQuantity;

  renderBooks(mockBookData.slice(0, bookQuantity));
});

// --- Render View.  ---------------
const booksListContainer = document.getElementById("books-list-container");
const template = document.getElementById("book-card-template");

function renderBooks(booksArray) {
  booksListContainer.replaceChildren();

  booksArray.forEach((book) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".book-title").textContent = book.title;
    clone.querySelector(".book-author").textContent = book.author;
    clone.querySelector(".book-length").textContent = `${book.pages} pages`;

    booksListContainer.append(clone);
  });
}

renderBooks(mockBookData);
