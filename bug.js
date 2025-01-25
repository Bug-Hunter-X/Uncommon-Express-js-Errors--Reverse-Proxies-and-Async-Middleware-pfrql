const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error:  If you are using a reverse proxy (like Nginx or Apache) in front of your Express app, you might encounter unexpected behavior if the proxy isn't properly configured to forward requests to the correct port or path. This can lead to seemingly random errors or the inability to reach your app.  The app may start successfully, but requests won't make it through the proxy. 

//Another less common case: Improper handling of asynchronous operations within middleware functions can lead to race conditions or unexpected behavior.  If you're not careful about the order of operations and how you handle promises or callbacks, you might run into problems that are tricky to debug. 