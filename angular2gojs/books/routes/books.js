var express = require('express');
var router = express.Router();
            
var books = [
  {id: 1, name: 'Test Driven Development: By Example', author: 'Kent Beck', publisher: 'Addison-Wesley', link: 'http://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530'},
  {id: 2, name: 'JavaScript: The Good Parts', author: 'Douglas Crockford', publisher: "O'Reilly", link: 'http://shop.oreilly.com/product/9780596517748.do'},
  {id: 3, name: 'Test-Driving JavaScript Applications: Rapid, Confident, Maintainable Code', author: 'Venkat Subramaniam', publisher: 'The Pragmatic Programmers', link: 'https://pragprog.com/book/vsjavas'}
];   

router.get('/', function(req, res, next) {
  res.send(books);
});

router.post('/', function(req, res, next) {
  var book = req.body;
  
  book.id = books[books.length - 1].id + 1;
  
  books.push(book);
  res.send("book added");
});

router.delete('/:id', function(req, res, next) {
  var bookId = parseInt(req.params.id);
  
  var notTheGivenBook = function(book) {
    return book.id !== bookId;
  }                            
  
  books = books.filter(notTheGivenBook);
  
  res.send("book deleted");
});
                  

module.exports = router;
