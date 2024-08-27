// demo.js

const prisma = require("./db/index");

const newBook = {
  title: "The Fellowship of the Ring",
  year: 1954,
  summary:
    "The first of three volumes of the epic novel The Lord of the Rings by the English author J. R. R. Tolkien. It takes place in the fictional universe of Middle-earth. It was originally published on July 29, 1954, in the United Kingdom.",
  quantity: 5,
  genre: ["High fantasy", "Adventure"],
  authorId: "cm0c5mv9w000012g7t68z05q2",
};

prisma.book
  .create({ data: newBook })
  .then((book) => {
    console.log("Success... a new book was created!!");
    console.log(book);
  })
  .catch((error) => {
    console.log("Something went wrong...");
    console.log(error);
  });
