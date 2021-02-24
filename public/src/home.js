function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
//   let accumulator = 0;
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].borrows[0].returned === false) {
//       accumulator += 1;
//     }
//   }
//   return accumulator;
// }

  return books.reduce((acc, book) => {
    if (book.borrows[0].returned === false) {
       acc += 1;
    }
    return acc;
  }, 0);
}

function getMostCommonGenres(books) { 
  let countObj = {};
  books.forEach(aBook => {
    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++;
    } else {
      countObj[aBook.genre] = 1;
    }
  });
  let countArray = [];
  // loop ober the keys in the countObj
  for (let key in countObj) {
    // creating a new object with 'name' and 'count' and pushing it into the countArray
    countArray.push({
      'name' : key,
      'count' : countObj[key]
    }); 
  }
  // for (const [key, value] of Object.entries(countObj)) {
  //   countArray.push({
  //     'name' : key,
  //     'count' : value
  //   }); 
  // }
  countArray.sort((count1,count2) => count2.count - count1.count);
  return countArray.slice(0, 5);

}
function getMostPopularBooks(books) {
  return books
    .map(book => {
      return {
        name: book.title,
        count: book.borrows.length
      }
    })
    .sort((a,b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
let returnArr = [];
authors.forEach(author => {
  const {first: firstName} = author.name;
  const {name: {last: lastName}} = author;
  let returnAuthor = {
    name: `${firstName} ${lastName}`, 
    count:0
  }
  books.forEach(book => {
    if (book.authorId === author.id) {
      returnAuthor.count += book.borrows.length
    }
  })
  returnArr.push(returnAuthor);
})
return returnArr.sort((countA, countB) => countB.count - countA.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
