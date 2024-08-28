// Express.js route for searching by title
app.get('/search-by-title', async (req, res) => {
  try {
    const { title } = req.query;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
    const books = response.data.items;
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books by title' });
  }
});
