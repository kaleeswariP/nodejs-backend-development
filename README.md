# nodejs-backend-development

* [What is Node JS](https://github.com/kaleeswariP/nodejs-backend-development#what-is-node-js)
* [Concurrency in javascript and node Js]()
* [NPM - Node Package Manager]()
* [Express Js framework](https://github.com/kaleeswariP/nodejs-backend-development#express-js-framework)
    * [Middleware](https://github.com/kaleeswariP/nodejs-backend-development#middleware)
    * [Routing](https://github.com/kaleeswariP/nodejs-backend-development#routing)
    * [Template Engines](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#template-engines)
    * [Static Files](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#static-files)
    * [Error handling](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#error-handling)
    * [Extensible](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#extensible)
      
* [RESTFUl APIs](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#restful-apis)
    * [Key concepts](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#key-concepts-of-restful-apis)
    * [Example with express-js](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#example-of-restful-api)
    * [Best practices](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#restful-api-design-best-practices)
      
* [Core concepts](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#core-concepts)
  * [Modules](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#modules)
  * [Event loop](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#event-loop)
  * [Asynchronous programming](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#asynchronous-programming) [asynchronous-programming-1](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#asynchronous-programming-1)
  * [Worker Threads/processes]()
  * [Cluster Module]()

* [APIs in NodeJS]()
  * [Http API call Structure]()
     * [Header]()
     * [Request]()
     * [Response]()
     * [Status codes]()
      
* [Core Modules]()
   * [HTTP](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#http-http)
   * [fs](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#fs-module-fs)
   * [path](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#path-module-path)
   * [os](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#os-module-os)
   * [events](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#events-module-events)
   * [URL](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#url-module-url)
   * [crypto](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#crypto-module-crypto)
   * [stream](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#stream-module-stream)

* [Design Patterns]()
* [Node JS Project]()     
* [Real-time Scenarios]()
* [Questions & Answers]()
    * [Types of middleware - express-js]()
    * []()
* [Websockets]()
  
* [Coding challenges/tasks]()
    * [Sample node js application with express-js framework]()
    * [JWT Token Implementation]()
    * [Connection to MongoDB]()
    * [Connection to Postgresql DB]()

# What is Node JS
Node.js is a powerful, open-source, cross-platform runtime environment that allows you to execute JavaScript code outside of a web browser.

Node.js is designed to build scalable network applications and allows developers to use JavaScript for server-side scripting, creating dynamic web page content before the page is sent to the user's web browser.

**Key Features**

**Event-Driven and Non-Blocking I/O:**

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

The non-blocking I/O model means that Node.js can handle multiple requests at the same time without waiting for any function to complete.


**Single Programming Language:**

With Node.js, both client-side and server-side scripts can be written in JavaScript, which simplifies the development process and allows for the use of the same language across the entire stack.


**Package Manager (npm):**

Node.js comes with npm (Node Package Manager), which is a large ecosystem of open-source libraries and packages that can be easily installed and used in your applications.


**Fast Performance:**

Since Node.js is built on the V8 engine, it compiles JavaScript to machine code and executes it at high speed, making it very performant for server-side operations.


**Scalability:**

Node.js is designed with scalability in mind, making it possible to build applications that can handle a large number of simultaneous connections with high throughput.

**Use Cases of Node Js**

**Real-Time Applications:**

* Node.js is well-suited for applications that require real-time interaction, such as chat applications, online gaming, collaborative tools, and live data streaming.

**API Servers:**

* Node.js can be used to create RESTful APIs that handle a large number of client requests efficiently, making it a popular choice for building backend services.
  
**Microservices:**

* Due to its lightweight nature, Node.js is often used in microservices architectures where small, independent services communicate with each other.
  
**Single-Page Applications (SPAs):**

* Node.js can be used in conjunction with front-end frameworks like React, Angular, or Vue.js to build SPAs that provide a seamless user experience.

**IoT Applications:**

* Node.js's event-driven architecture makes it suitable for Internet of Things (IoT) applications that require handling a large number of events from various devices.

# Concurrency execution in Node Js and Javascript

*Concurrency in Node.js and JavaScript is achieved through a combination of asynchronous programming, the event loop, and (in the case of Node.js) the use of a thread pool.*

## Single-Threaded Execution

Single-threaded execution means that JavaScript, whether running in a browser or in Node.js, operates on a single main thread. 

This single thread is responsible for executing all the code, including handling events, running functions, and managing asynchronous operations.

## Asynchronous programming

Asynchronous programming is the cornerstone of achieving concurrency in a single-threaded environment like JavaScript.

It allows the execution of non-blocking operations, enabling the main thread to handle multiple tasks seemingly at the same time.

The primary tools for asynchronous programming in JavaScript are:

* **Callbacks:** Functions passed as arguments to other functions to be executed later.
  
* **Promises:** Objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
  
* **Async/Await:** Syntactic sugar over promises, making asynchronous code look and behave more like synchronous code.

## Event loop

The event loop is a fundamental mechanism in both the browser and Node.js that manages asynchronous operations.

 It allows JavaScript to perform non-blocking I/O operations despite being single-threaded.

**How the Event Loop Works:**

* **Call Stack:** Contains the currently executing code.
  
* **Event Queue:** Contains tasks (callbacks, events) to be executed.
  
* **Microtask Queue:** Contains microtasks (promise resolutions, mutation observer callbacks) which have higher priority than tasks in the event queue.
  
* **Event Loop:** Continuously checks the call stack, event queue, and microtask queue. It processes microtasks first, then tasks, and then continues to the next event loop tick.

## Concurrency in the Browser
In the browser, concurrency is handled through the **event loop** and **Web APIs**. 

When an asynchronous operation (like a network request or a timer) is initiated, it’s handled by the browser’s Web API. 

Once the operation completes, the callback is pushed onto the event queue and executed when the call stack is clear.

Example:
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 1000);

console.log('End');

// Ouput

// Start
// End
// Timeout

```

## Concurrency in Node.js

Node.js extends JavaScript’s concurrency model with additional features like the thread pool, provided by the libuv library, to handle I/O-bound tasks efficiently.

**Key Components:**

* **Event Loop:** Similar to the browser, it handles asynchronous operations and ensures non-blocking execution.
  
* **Thread Pool:** Used for executing heavy I/O operations (like file system access, DNS lookup, etc.) in parallel, preventing these operations from blocking the event loop.

Example with Thread Pool:

Consider a file read operation in Node.js:

```javascript
const fs = require('fs');

console.log('Start');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});

console.log('End');

// Ouput
// Start
// End
// File content: (content of file.txt)

```
Here’s what happens:

1. Start is logged.
2. The fs.readFile operation is offloaded to the thread pool.
3. End is logged.
4. When the file read operation completes, the callback is pushed onto the event queue.
5. The event loop picks up the callback and logs the file content.

**Additional Mechanisms in Node.js**<br>

* Cluster Module: Allows forking the main process to utilize multiple CPU cores.

* Worker Threads: Provides a way to run JavaScript code in parallel in multiple threads. This is particularly useful for CPU-bound tasks.

## Conclusion

Concurrency in JavaScript (both in the browser and Node.js) is primarily achieved through:

* **Asynchronous Programming:** Using callbacks, promises, and async/await to handle non-blocking operations.
  
* **Event Loop:** Manages the execution of asynchronous tasks and ensures the main thread is never blocked.

* **Thread Pool (Node.js):** Handles I/O-bound operations, allowing parallel execution of heavy tasks.

* **Cluster and Worker Threads (Node.js):** Allow for better CPU utilization for CPU-bound tasks.

# NPM - Node Package Manager

# Express JS framework

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.

It simplifies the process of building web applications and APIs by providing a layer of fundamental web application features without obscuring the functionality of Node.js. 

Express.js is known for its performance and ease of use, making it one of the most popular frameworks for building server-side applications with Node.js.

**Key Features**

* [Middleware](https://github.com/kaleeswariP/nodejs-backend-development#middleware)
* [Routing](https://github.com/kaleeswariP/nodejs-backend-development#routing)
* [Template Engines](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#template-engines)
* [Static Files](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#static-files)
* [Error handling](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#error-handling)
* [Extensible](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#extensible)


## Middleware:
Middleware functions access the request object `(req)`, the response object `(res)`, and the next middleware function in the application's request-response cycle.

They can execute code, change the request and response objects, end the request-response cycle, and call the next middleware function.

Middleware is used extensively in Express.js to handle various tasks such as logging, authentication, parsing request bodies, and more.

Refer - [Types of middleware in expressjs](https://github.com/kaleeswariP/nodejs-backend-development/edit/master/README.md#1-types-of-middlewares-available-in-express-js)

```javascript

const express = require('express');
const app = express();

// A simple middleware function
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## Routing
Express.js provides a powerful routing mechanism that allows you to define routes for different HTTP methods and URL patterns. 

Routes can be parameterized to capture dynamic values from the URL.

```javascript
const express = require('express');
const app = express();

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Define a route with a URL parameter
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## Template Engines
Express.js supports various template engines like Pug, EJS, and Handlebars, which allow you to generate HTML dynamically based on your application's data.

```javascript
const express = require('express');
const app = express();
const path = require('path');

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Express', message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## Static Files
Express.js allows you to serve static files such as images, CSS, and JavaScript files from a directory using the  `express.static` middleware.

```javascript
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## Error Handling
Express.js provides a simple mechanism for handling errors. Middleware functions that take four arguments (err, req, res, next) are recognized as error-handling middleware.

```javascript
const express = require('express');
const app = express();

// A simple route
app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```
## Extensible
Express.js can be easily extended with various third-party middleware and libraries to add functionality such as authentication, validation, and more.

**Example Application**

Source Code Path: 

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});

app.put('/update', (req, res) => {
  res.send('Update Received');
});

app.delete('/delete', (req, res) => {
  res.send('Delete Request Received');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

# RESTFul APIs

* [Key concepts](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#key-concepts-of-restful-apis)
* [Example with express-js](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#example-of-restful-api)
* [Best practices](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#restful-api-design-best-practices)

RESTful APIs (Representational State Transfer APIs) are a type of web service that adhere to the principles and constraints of REST, an architectural style for designing networked applications.

RESTful APIs use standard HTTP methods and status codes and are designed to be stateless, scalable, and easy to interact with using URLs.

They are widely used for building web services that communicate over HTTP/HTTPS.

## Key Concepts of RESTful APIs

### Resources
Everything in a RESTful API is considered a resource. Resources are identified by URLs `(Uniform Resource Locators)`. 

For example, in an e-commerce application, resources could be products, orders, users, etc.

### HTTP Methods:

RESTful APIs use standard HTTP methods to perform operations on resources:
* GET: Retrieve a resource.
* POST: Create a new resource.
* PUT: Update an existing resource.
* DELETE: Remove a resource.
* PATCH: Partially update an existing resource.

### Stateless:
Each request from a client to a server must contain all the information needed to understand and process the request. 

The server does not store any state of the client session.

### Representation

Resources can be represented in different formats such as JSON (most common), XML, HTML, or plain text.

The client and server negotiate the format using HTTP headers like `Accept` and `Content-Type`.

### Uniform Interface:

A uniform interface between client and server simplifies the architecture. This includes using standardized URIs, HTTP methods, status codes, and headers.

### Client-Server Architecture:

The client and server are separated and interact through requests and responses. This separation allows for the independent evolution of the client and server.

### Cacheable:

Responses must be defined as cacheable or non-cacheable to improve performance and reduce server load. Caching can be controlled using HTTP headers like Cache-Control.

## Example of RESTful API
Consider an example of a simple RESTful API for managing a collection of books.

Resource URIs
* **GET /books:** Retrieve a list of all books.
* **GET /books/{id}:** Retrieve a specific book by ID.
* **POST /books:** Create a new book.
* **PUT /books/{id}:** Update an existing book by ID.
* **DELETE /books/{id}:** Delete a specific book by ID.

Example API Implementation (using Express.js)

```javascript
const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

// GET /books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET /books/:id
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

// POST /books
app.post('/books', (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(book);
  res.status(201).json(book);
});

// PUT /books/:id
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');

  book.title = req.body.title;
  book.author = req.body.author;
  res.json(book);
});

// DELETE /books/:id
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).send('Book not found');

  books.splice(bookIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## RESTful API Design Best Practices

1. **Use nouns for resource names:** Use nouns instead of verbs in endpoint paths `(e.g., `/users` instead of `/getUsers`)`.<br>

2. **Use HTTP status codes appropriately:** Return the appropriate status code based on the outcome of the request `(e.g., `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`)`.<br>

3. **Versioning:** Implement versioning in your API to manage changes over time `(e.g., `/v1/books`)`.<br>

4. **Documentation:** Provide clear and comprehensive documentation for your API, including available endpoints, request/response formats, and examples.<br>

5. **Security:** Implement authentication and authorization mechanisms to protect your API. Use HTTPS to encrypt data transmitted between client and server.<br>

6. **Pagination:** Use pagination for endpoints that return large lists of resources to improve performance and usability `(e.g., `/books?page=1&limit=10`)`.<br>


# Core concepts

* [Modules](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#modules)
* [Event loop](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#event-loop)
* [Asynchronous Programming](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#asynchronous-programming)
  
## Modules
Node.js uses a module system to organize code into reusable components. Each file in a Node.js application is considered a module, and modules can be imported and exported using the `require` and `module.exports` syntax.

```javascript
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// main.js
const add = require('./math');
console.log(add(2, 3)); // 5
```

## Event loop

The event loop is a key part of Node.js that allows it to perform non-blocking I/O operations.

It continuously checks for events and executes the appropriate callback functions, allowing Node.js to handle multiple operations concurrently.

## Asynchronous Programming

Node.js heavily relies on asynchronous programming. Instead of waiting for operations like file reading or database queries to complete, Node.js continues executing the next line of code and handles the result through callbacks, promises, or async/await syntax.

```javascript
const fs = require('fs');

// Using a callback
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Using a promise
const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

readFile('example.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Using async/await
const readAsync = async (file) => {
  try {
    const data = await readFile(file);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readAsync('example.txt');
```

# Core Modules of Node JS

* [HTTP](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#http-http)
* [fs](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#fs-module-fs)
* [path](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#path-module-path)
* [os](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#os-module-os)
* [events](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#events-module-events)
* [URL](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#url-module-url)
* [crypto](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#crypto-module-crypto)
* [stream](https://github.com/kaleeswariP/nodejs-backend-development?tab=readme-ov-file#stream-module-stream)

## HTTP: `http`
The `http` module provides utilities to create HTTP servers and clients. It's fundamental for building web applications and APIs.

While using the `express-js` framework, then we will it's a way to create a server in node js i.e., we don't create a server using the `http` module directly.

**Key features**

Creating an HTTP server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});

```
Making HTTP requests:

```javascript
const http = require('http');

const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();
```

## FS module: `fs`
The `fs` module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

**Key Features**
Reading a file:

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```
Writing to a file:

```javascript
const fs = require('fs');

const content = 'Some content to write to the file';

fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});
```

Watching a file:

```javascript
const fs = require('fs');

fs.watch('example.txt', (eventType, filename) => {
  console.log(`File ${filename} has changed. Event type: ${eventType}`);
});

```
## PATH module: `path`
The `path` module provides utilities for working
with file and directory paths. It helps in resolving and manipulating file paths in a cross-platform way.

**Key Features**
Joining paths, Getting the directory name, and Getting the file extension.

```javascript
const path = require('path');

const fullPath = path.join('/users', 'john', 'docs', 'file.txt');
console.log(fullPath); // /users/john/docs/file.txt

const dirName = path.dirname('/users/john/docs/file.txt');
console.log(dirName); // /users/john/docs

const ext = path.extname('file.txt');
console.log(ext); // .txt

```

## OS Module: `os`
The `os` module provides operating system-related utility methods and properties. It allows you to interact with the underlying operating system.

**Key Features**
Getting the hostname, Getting system memory information, and Getting network interfaces.

```javascript
const os = require('os');

const hostname = os.hostname();
console.log(hostname); // Example: my-computer.local

const freeMemory = os.freemem();
const totalMemory = os.totalmem();
console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);
```

## Events Module: `events`

The `events` module provides a way to work with events and event-driven programming. It's the foundation of the event system in Node.js.

**Key Features**

Creating an event emitter:

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('An event occurred!');
});

myEmitter.emit('event');
```

Handling multiple events:

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (arg1, arg2) => {
  console.log(`An event occurred with arguments: ${arg1}, ${arg2}`);
});

myEmitter.emit('event', 'arg1', 'arg2');
```

## URL Module: `url`
The `url` module provides utilities for URL resolution and parsing. It helps in handling URL strings easily.

**Key Features**
Parsing a URL, Formatting a URL.

```javascript
const url = require('url');

const parsedUrl = url.parse('https://example.com:8080/path/name?query=string#hash');
console.log(parsedUrl);

const formattedUrl = url.format({
  protocol: 'https',
  hostname: 'example.com',
  port: 8080,
  pathname: '/path/name',
  query: { query: 'string' },
  hash: '#hash'
});
console.log(formattedUrl); // 'https://example.com:8080/path/name?query=string#hash'
```

## Crypto Module: `crypto`
The `crypto` module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

**Key Features**
Hashing data, Generating random bytes.

```javascript
const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('some data to hash');
console.log(hash.digest('hex'));

crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log(buffer.toString('hex'));
});

```

## Stream Module: `stream`
The stream module provides a way to work with streaming data. Streams can be readable, writable, or both (duplex).

**Key Features**
Creating a readable stream:

```javascript
const { Readable } = require('stream');

const readable = new Readable({
  read(size) {
    this.push('Hello, World!');
    this.push(null); // No more data
  }
});

readable.pipe(process.stdout);
```
Creating a writable stream:

```javascript
const { Writable } = require('stream');

const writable = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(writable);
```

# Real-time Scenarios:

# Questions & Answers

## 1. Types of middlewares available in express-js

In Express.js, middleware functions are pieces of code that execute during the lifecycle of a request to a web server. 

These functions can perform a variety of tasks, such as modifying the request or response objects, ending the request-response cycle, or calling the next middleware function in the stack.

Here are the main types of middleware available in Express.js:
* Built-in Middleware
* Third-party Middleware
* Application-level Middleware
* Router-level Middleware
* Error-handling Middleware
* Custom Middleware

### Built-in Middleware:

* `express.json()`: Parses incoming requests with JSON payloads.

* `express.urlencoded()`: Parses incoming requests with URL-encoded payloads.

* `express.static()`: Serves static files, such as images, CSS files, and JavaScript files.

### Third-party Middleware:

* `body-parser`: Parses incoming request bodies in a middleware before your handlers, available under the `req.body` property.

* `cookie-parser`: Parses cookies attached to the client request object.

* `morgan`: Logs request details.

* `cors`: Enables Cross-Origin Resource Sharing (CORS) with various options.

* `helmet`: Helps secure Express apps by setting various HTTP headers.

* `multer`: Handles `multipart/form-data`, which is primarily used for uploading files.

### Application-level Middleware:
These middleware functions are bound to an instance of the Express app using `app.use()` or `app.METHOD()`.

```javascript
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.get('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
```

Router-level Middleware:
These middleware functions are bound to an instance of express.Router().

```javascript
const router = express.Router();

router.use(function (req, res, next) {
  console.log('Router Middleware');
  next();
});

router.get('/user/:id', function (req, res, next) {
  res.send('User Info');
});

app.use('/api', router);
```

### Error-handling Middleware:
These middleware functions take four arguments: (err, req, res, next). They are used to catch and handle errors.

```javascript
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

```
### Custom Middleware:
You can define your own middleware functions to perform specific tasks based on your application's requirements.

```javascript
function myMiddleware(req, res, next) {
  console.log('Custom Middleware');
  next();
}

app.use(myMiddleware);
```


## HTTP Status Codes

**CheatSheet**
![image](https://github.com/kaleeswariP/nodejs-guidelines/assets/22699303/b506fe12-c9f1-487b-9b43-f7121643d3c7)

## Different Types of APIs

Image Representation:
![Different types of APIs](https://github.com/kaleeswariP/nodejs-guidelines/assets/22699303/80c92ed8-decf-4428-beaa-cdf794b55763)

## Web Sockets
Websockets in javascript allow for real-time bidirectional communication between a client `(usually a web browser)` and a server.
It is particularly useful for building interactive web applications that require instant data updates.

Websockets provide a full-duplex communication channel over a single TCP connection.

Unlike HTTP, Webscokets enable both the client and server to send messages to each other at any time without waiting for a request from the client.

Web sockets use a protocol that starts with `ws://``(unencrypted)` or `wss://``(encrypted)` insteadof `http://` or `https://`.

**Creating a WebSocket connection**
To establish a WebSocket connection in Javascript, create a new WebSocket object, passing the WebSocket server URL as a parameter.
```javascript
const socket = new WebSocket('ws://example.com/socket');
```
**WebSockets Events**
WebSocket objects emit various events to handle different stages of the connection

*Open: Triggered when the connection is successfully established*

*message: Fired the server sends a message*

*error: Triggered when an error occurs*

*close: Fired when the connection is closed*

```javascript
socket.addEventListener('open', (event) => {
// connection is open
});

socket.addEventListener('message', (event) => {
  const message = event.data;
//Handle the incoming message
});

socket.addEventListener('error', event => {
    console.error('WebSocket error:', event);
});

socket.addEventListener('close', event => {
    if(event.wasClean)
        console.log(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
    else    
        console.error('WebSocket error:', event);
});
```
**sending data**
To send the data to the server, use the send method of the WebSocket object. Data can be a `string`, `ArrayBuffer`, and `Blob`.

```javascript
socket.send('Hello, server');
```
**Closing the connection**
To close the WebSocket connection, call the `close` method on the WebSocket object.

```javascript
socket.close();
```

**Server-side WebSocket Implementation**

On the server side, you need to implement a WebSocket server that listens for WebSocket connections and handles messages from clients. Popular libraries for this purpose include `ws`, `socket.io` for node js.

**ErrorHandling**

Be sure to handle errors gracefully by listening to the error event and providing appropriate feedback to the server.

**Security Considerations**

When using WebSockets, consider security measures like encrypting the using `wss://`, implementing authentication, and validating incoming messages to prevent vulnerabilities like WebSocket-based attacks.

**Use Cases**

WebSockets are suitable for real-time chat applications, online gaming, live notifications, collaborative tools, and any scenario where immediate data updates are required.


## Coding challenges/tasks

### Node Js simple application
code: https://stackblitz.com/edit/node-cnibuf?file=index.js%3AL15

### JWT Token Implementation
It's a token-based standard that allows us to securely transfer information between two parties without storing anything in a database.

**JWT Strategy:** It can be considered to be a form of user identification that is issued after the user authentication takes place when a user completes a login process and they are authenticated our rest API will issue the client application an access token and a refresh token.

JWT token consists of three parts:
  * Header
  * Payload
  * Signature
Each one is BaseURL64 encoded to form the token.

𝐉𝐖𝐓 𝐚𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐥𝐥𝐨𝐰𝐬 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 4 𝐬𝐭𝐞𝐩 𝐩𝐫𝐨𝐜𝐞𝐬𝐬

1) Client (Browser): sends post request with credentials to auth server to authenticate themselves

2) Auth Server: authenticates user credentials and generates a JWT. The server does not store anything and sends the token to the browser to save. It allows users to authenticate without their credentials in the future. The best option is to store the token in an http-only cookie.

3) Next, every client request sends the JWT in the authorization header. Validation happens using token introspection with the auth server.

4) Once validated, the resource server sends the necessary data to the client.

**Access token:** short time and Refresh token = Long time

**Hazards:** XSS - Cross-site scripting and CSRF - CS Request forgery

**Access Token:** Sent as JSON, the client stores in memory and does not store in local storage or cookies.

**Refresh Token:** Sent as httpOnly cookie, It is not accessible via javascript and must have expiry at some point.

#### How do you refresh the JWT token from the client(react application) in the meanwhile not missing incoming API calls and outgoing responses?

To refresh the token your API needs an endpoint that receives a valid, not expired JWT and returns the same signed JWT with the newly set expiration. 

If you are using Axios (which I highly recommend), you can declare your token refreshing behaviors in the response's interceptors. This will apply to all HTTP requests made by Axios.

**The process is something like**
* Checking if the error status is 401
* If there is a valid refresh token: use it to get the access token
* if there is no valid refresh token: log the user out and return
* Re-do the request again with the new token.

Here is an example:
```javascript
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return new Promise((resolve) => {
      const originalRequest = error.config
      const refreshToken = localStorage.get('refresh_token')
      if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest && refreshToken) {
        originalRequest._retry = true

        const response = fetch(api.refreshToken, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.set(res.access, 'token')

            return axios(originalRequest)
          })
        resolve(response)
      }

      return Promise.reject(error)
    })
  },
)
```
Image representation

![JWT Token Implementation](https://github.com/kaleeswariP/nodejs-guidelines/assets/22699303/60e7fca1-f4a2-47b8-a991-69fc843e2949)

