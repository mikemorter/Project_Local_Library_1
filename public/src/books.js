function findAuthorById(authors, id) {
  // return author by ID
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  // return book by id
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let allBorrowed = [];
  const returnedBook = books.filter(book => book.borrows[0].returned === true);
  const loanedOut = books.filter(book => book.borrows[0].returned === false);
  allBorrowed.push(loanedOut, returnedBook);
  return allBorrowed;
}
function getBorrowersForBook(book, accounts) {
    let result = book.borrows.map(borrower => {
      let result = accounts.find(account => borrower.id === account.id
        )
        result.returned = borrower.returned

        return result
    })
    console.log(result)
    return result.filter((borrower, id) => result.findIndex(item =>
      item.id === borrower.id) === id)
    }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
