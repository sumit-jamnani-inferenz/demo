const { Client } = require("pg");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Styloland', 'postgres', 'Inferenz@123', {
    host: 'localhost',
    dialect: 'postgres'
});

const con = new Client(
    {
        host: 'localhost',
        user: 'postgres',
        port: 5432,
        password: 'Inferenz@123',
        database: 'Styloland'
    }
)

con.connect();

// if (con != null) {
//     console.log('Connected')
// }

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
// module.exports = con;
module.exports = sequelize;