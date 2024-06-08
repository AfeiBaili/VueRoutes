const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(history)
app.get('/', (req, res) => {
    res.send('Welcome to the Vue App!');
})
app.listen(33393, "localhost", () => {
    console.log("服务器开启了:", `http://localhost:33393`)
});
