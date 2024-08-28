// Express.js route for searching by author
app.get('/search-by-author', async (req, res) => {
  try {
    const { author } = req.query;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`);
    const books = response.data.items;
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books by author' });
  }
});
