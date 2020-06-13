const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = process.env.PORT || 8000;

// app.listen(port, () => console.log(`Server started on port ${port}`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


