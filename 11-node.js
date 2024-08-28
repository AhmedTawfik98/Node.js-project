const axios = require('axios');

const searchByISBN = async (isbn) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const book = response.data.items[0]; 
    console.log('Book details:', book.volumeInfo.title, book.volumeInfo.authors);
  } catch (error) {
    console.error('Error fetching book details:', error.message);
  }
};

searchByISBN('9780596000486'); // Example ISBN
