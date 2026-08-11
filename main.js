let library = [
  {
    id: "8b8dc31f-b76e-4b94-a9c6-78c88c03bc52",
    title: "Golfing on Meth",
    author: "Todd Tweakout",
    pages: 34,
    haveRead: false,
  },
  {
    id: "e671a081-e7eb-4a61-be42-c8299b676a3a",
    title: "Life of a German",
    author: "Ludwig Schmuzkopff",
    pages: 254,
    haveRead: false,
  },
  {
    id: "3e5999ec-c7b3-46b3-af73-2b6c66343b9f",
    title: "Sailing Across Puddles",
    author: "Jimmy Ant",
    pages: 12,
    haveRead: false,
  },
  {
    id: "3a6bc133-6d11-4af4-bbf9-42b0ee0d6c85",
    title: "I derp, you derp, everybody derps",
    author: "Don Derp",
    pages: 1,
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
