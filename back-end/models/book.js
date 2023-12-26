const db = require('../util/database');

module.exports = class Book {
  constructor(id, name, description, price, quantity, block_number, author, genre, year, publisher, store_id) {
     this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.block_number = block_number;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.publisher = publisher;
    this.store_id = store_id;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM books');
  }

  static post(name, description, price, quantity, block_number, author, genre, year, publisher, store_id) {
    return db.execute('INSERT INTO books (name, description, price, quantity, block_number, author, genre, year, publisher, store_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [id, name, description, price, quantity, block_number, author, genre, year, publisher, store_id]);
  }

  static update(id, name, description, price, quantity, block_number, author, genre, year, publisher, store_id) {
    return db.execute('UPDATE books SET item = ? WHERE id = ?', [name, description, price, quantity, block_number, author, genre, year, publisher, store_id, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM books WHERE id = ?', [id]);
  }

  static searchByName(name){
    return db.execute('SELECT * FROM books WHERE name = ?' [name]);
  }

  static searchByGenre(genre){
    return db.execute('SELECT * FROM books WHERE genre = ?' [genre]);
  }

  static searchByBlockNumber(block_number){
    return db.execute('SELECT * FROM books WHERE block_number = ?' [block_number]);
  }

  static searchByAuthor(author){
    return db.execute('SELECT * FROM books WHERE author = ?' [author]);
  }
};