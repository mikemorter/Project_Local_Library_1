function findAuthorById(authors, id) {
  // return author by ID
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  // return book by id
  return books.find((book) => book.id === id);
}

// create helper function for returned books
function returnedBooks(books) {
  // return books that have been returned
  return [books.filter(book => book.borrows[0].returned === true)];
}

function partitionBooksByBorrowedStatus(books) {
  //let allBorrowed = [];
  // let returnedBookArray = [];
  let loanedOutArray = [];
  // const returnedBook = books.filter(book => book.borrows[0].returned === true);
  // returnedBookArray.push(returnedBook);
  const loanedOut = books.filter(book => book.borrows[0].returned === false);
  loanedOutArray.push(loanedOut);
 // allBorrowed.push(loanedOut, returnedBook);
  const allBorrowed = [...loanedOutArray, ...returnedBooks(books)];
  return allBorrowed;
}
function getBorrowersForBook(book, accounts) {
    let result = book.borrows.map(borrower => {
      let result = accounts.find(account => borrower.id === account.id
        )
        result.returned = borrower.returned

        return result
    })
    return result.filter((borrower, id) => 
      result.findIndex(item =>
        item.id === borrower.id) === id)
    }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
