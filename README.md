# nodejs-guidelines



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

