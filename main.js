let library = [];

function Book(title, author, pages, haveRead) {
  if (!new.target) {
    throw new Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID()
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, haveRead: ${haveRead}`);
  };
}

function addBookToLibrary(title, author, pages, haveRead) {
  const book = new Book(title, author, pages, haveRead);
  library.push(book);
}
