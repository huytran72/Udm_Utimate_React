const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destrucutring

const books = getBooks();
books.forEach((book) => {
  const { title, author, genres } = book;
  console.log(title, author, genres);
});

const book = getBook(2);

// const title = book.title;
// const author = book.author;

// const { title, author } = book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres, pages, publicationDate, hasMovieAdaptation);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [
  ...genres,
  "fantasy",
  "adventure",
  "fiction",
  "novels",
  "literature",
];
newGenres;

const updatedBook = {
  ...book,

  // Add new properties
  moviePublicationDate: "2022-01-01",

  // Overwrtie existing properties
  pages: 300,
  genres: newGenres,
};
updatedBook;

const summary = `${title} is a book by ${author} with ${pages} pages. It was published on ${publicationDate}. It belongs to the genres ${genres.join(
  ", "
)}.`;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages.`);

function getYear(str) {
  return str.split("-")[0];
}

(str) => str.split("-")[0];
console.log(getYear(publicationDate));

console.log(true && "Some String");
console.log(false && "Some String");
console.log(true || "Some String");
console.log(hasMovieAdaptation && "This book has a movie adaptation");

// falsy values
console.log("kenny" && "Some String");
console.log("" && "Some String");

console.log(true || "Some String");
console.log(false || "Some String");

console.log(book.translations.spanish || "No translation available");

console.log(book.translations.korean || "No translation available");

const spanishTranslation =
  book.translations.spanish || "No translation available";
console.log(spanishTranslation);

console.log(book.reviews.librarything.rating || "No rating available");
const countWrong = book.reviews.librarything.reviewsCount || "no data";
console.log(countWrong);
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

function getTotalReiewCount(book) {
  const goodreadsCount = book.reviews.goodreads.ratingsCount;
  const librarything = book.reviews.librarything.ratingsCount;

  return (
    book.reviews.goodreads.ratingsCount + book.reviews.librarything.ratingsCount
  );
}
console.log(getTotalReiewCount(book));

const books2 = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books2.map((book) => book.title);
titles;

const essentialData = books2.map((book) => {
  const { title, author, genres, pages } = book;
  return { title, author, genres, pages };
});
essentialData;

const longBooks = books2
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const longBooksWitMovie = books2
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWitMovie;

const advebtureBooks = books2
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
advebtureBooks;

const pagesAllBooks = books2.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
sorted;
console.log(arr);

const sortedByPages = books2.sort((a, b) => a.pages - b.pages);
sortedByPages;

// 1) Add book object to the data array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  publicationDate: "1937-09-21",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books2, newBook];
booksAfterAdd;

// 2) Delete book object from the data array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);
booksAfterDelete;

// 3) Update book object in the data array
const booksAfterUpdate = booksAfterDelete.map((book) => {
  if (book.id === 5) {
    return { ...book, title: "A Game of Thrones: The Iron Throne" };
  }
  return book;
});
booksAfterUpdate;

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
console.log("kenny");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);

  return data;
}
const todos = getTodos();
console.log(todos);

console.log("kenny");
