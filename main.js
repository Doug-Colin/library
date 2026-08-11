let library = [];

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

// --- Open Add Book Form Dialog  ---------------

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

