const express = require('express');
const app = express();
require('dotenv').config(); // environment config
const connectDB = require('./db/connect');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


// Default values
const port = process.env.PORT || 5000;

// built-in middlewares

app.use(express.static('./public')); // The express.static() function is a built-in middleware function in Express. It serves static files and is based on serve-static. 
app.use(express.json()); //  It parses incoming requests with JSON payloads and is based on body-parser. 


// routes
// app.use('/api/v1/tasks', tasks);

// custom middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


(async function startServer(){
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
          console.log(`Server is listening on port ${port}...`)
        );
      } catch (error) {
        console.log(error);
      }
})();