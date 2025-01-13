// filter() , map() and reduce().

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89];

// filter() --> Returns elements of array that passes the check condition.

let filteredARR = myNums.filter((item) => item > 5);

// console.log(filteredARR); // [ 6, 7, 8, 9, 89 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// get all books having genre history
const historyBooks = books.filter((book) => book.genre === "History");
// console.log(historyBooks);
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]

// get books which are published after year 2000

const booksPublishedAfter = books.filter((book) => book.publish > 2000);

// console.log(booksPublishedAfter);
/*
    [
        {
            title: 'Book Five',
            genre: 'Science',
            publish: 2009,
            edition: 2014
        },
        {
            title: 'Book Eight',
            genre: 'Science',
            publish: 2011,
            edition: 2016
        }
    ]
*/

// -------------------------------------------------------------------

// map() ==> Creates new array with result of callback function on every element of array.

const bookNames = books.map((item) => item.title);

// console.log(bookNames);

/*
    [
        'Book One',   'Book Two',
        'Book Three', 'Book Four',
        'Book Five',  'Book Six',
        'Book Seven', 'Book Eight',
        'Book Nine'
    ]
*/

// -----------------------------------------------------------

// reduce() --> The reduce() function in JavaScript is a powerful array method that allows you to accumulate or "reduce" an array to a single value. The initial value of accumulator is 0 but it can change to waht we pass to it.

const myNumsArr = [1, 2, 3];

const myTotal = myNumsArr.reduce(function (accumulator, currval) {
  //   console.log(`accumulator: ${accumulator} and currval: ${currval}`);
  return accumulator + currval;
}, 0);

// console.log(myTotal) // 6

const totalOfArr = myNumsArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// console.log(totalOfArr); // 6
/*
    accumulator: 0 and currval: 1
    accumulator: 1 and currval: 2
    accumulator: 3 and currval: 3
*/

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

console.log(priceToPay); // 22996
