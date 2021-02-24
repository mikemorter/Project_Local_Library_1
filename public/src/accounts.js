function findAccountById(accounts, id) {
  // find account by given id
return accounts.find((name) => name.id === id);
}
  // return the matching account object
//   let accountIdMatch = {};
//   for (let name in accounts) {
//    if (name.id === id) {
//     accountIdMatch[name];
//    }
//   } 
//   return accountIdMatch;
// }

function sortAccountsByLastName(accounts) {
  // sort accounts by last name
  accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);
  // return sorted array 
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  // create variable 
  return books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) { 
      // add up the books that given account id has borrowed
      if (book.borrows[i].id === account.id) {
        acc += 1;
      }
    }
    return acc;
  }, 0)
  // acc = 0;
  // loop through each book 
  // books.forEach(book => {
  //   for (let i = 0; i < book.borrows.length; i++) { 
  //     // add up the books that given account id has borrowed
  //     if (book.borrows[i].id === account.id) {
  //       acc += 1;
  //     }
  //   }
  // })
  // return ammount of borrows
  // return acc;
}

function getBooksPossessedByAccount(account, books, authors) {

  return books.filter((book) => 
  book.borrows.some(acc => acc.id === account.id && acc.returned === false))
  .map(book => { 
    let author = authors.find(author => author.id === book.authorId) 
    book.author = author; 
    return book;
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};