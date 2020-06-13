const express = require('express');

const app = express();

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // Load index HTML file for any request
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listen on port - deploying on heroku
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));


