const app = require('./app.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
});