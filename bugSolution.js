const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Solution for Reverse Proxy issues: Ensure your reverse proxy (Nginx, Apache, etc.) is correctly configured to forward requests to the correct port and path of your Express app.  Properly configure the proxy pass or location directives.

// Solution for Async Middleware issues: Always handle asynchronous operations (promises, callbacks) properly within middleware functions. Use async/await or promise chaining to ensure operations are completed in the correct order and that errors are caught. Avoid race conditions by using appropriate locking mechanisms or data structures if needed.