require("dotenv").config();
const { API_PORT } = process.env;
const PORT = process.env.PORT || API_PORT;
const app = require("./app");
require("./config/dbconfig");
const server = require('./server');

// app.listen(PORT, () => {
//     console.log(`Server is listening on port: ${PORT}`);
// });

server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));


