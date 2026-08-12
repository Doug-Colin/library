let library = [
  {
    id: "e671a081-e7eb-4a61-be42-c8299b676a3a",
    title: "Stealing is Okay",
    author: "The Hamburgler",
    pages: 254,
    haveRead: false,
  },
  {
    id: "e671a081-e7eb-4a61-be42-c8299b676a3a",
    title: "Stealing is Okay",
    author: "The Hamburgler",
    pages: 254,
    haveRead: false,
  },
  {
    id: "e671a081-e7eb-4a61-be42-c8299b676a3a",
    title: "Stealing is Okay",
    author: "The Hamburgler",
    pages: 254,
    haveRead: false,
  },


  
];

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
    haveRead = !haveRead;
  };
  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, haveRead: ${haveRead}`);
  };
}

function addNewBook(title, author, pages, haveRead) {
  const book = new Book(title, author, pages, haveRead);
  library.push(book);
}

// --- Open Dialog with Form to Add Book ---------------

const dialog = document.getElementById("form-dialog");
const openAddBookForm = document.getElementById("open-add-book-form");
const closeAddBookForm = document.getElementById("close");
const alertButton = document.getElementById("alert");

openAddBookForm.addEventListener("click", () => {
  dialog.showModal();
});

closeAddBookForm.addEventListener("click", () => {
  dialog.close();
});

// ---------------------------------------
const booksListContainer = document.getElementById("books-list-container");
const template = document.getElementById("book-card-template");

library.forEach((book) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector("#book-title").textContent = book.title
  clone.querySelector("#book-author").textContent = book.author
  clone.querySelector("#book-length").textContent = `${book.pages} pages`

  booksListContainer.append(clone);
});
