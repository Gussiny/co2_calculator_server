const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const serverless = require('serverless-http')
const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'database-project.cq1sdfmlqcje.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'proyectoaws',
    database : 'DBproyecto'
}); 
connection.connect();
// dotenv config
dotenv.config()

// Init app
const app = express()

// BodyParser
app.use(express.urlencoded({ extended: true,  limit: '100mb'}));
app.use(express.json({limit: '100mb'}));

// Cross Origin Resource Sharing
app.use(cors({ origin: '*' }))

// Json middleware
app.use(express.json())

// Assign port
const port = process.env.PORT || 5050

// Routes
app.get('/', function (req, res) {
    res.send("Hola Mundo :)")
});

/*
    MILES
*/

app.get('/miles', function (req, res) {
    var sqlQuery='SELECT * FROM miles';
    connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json({result: results});
    });
});

app.post('/miles', async (req, res) => {
    try {
        const miles = req.body;

        const sqlQuery=`INSERT INTO miles SET car = ${miles.car}, bycicle_walking = ${miles.bycicle_walking}, public = ${miles.public}, airplane = ${miles.airplane}`

        connection.query(sqlQuery, (error, results) => {
            if (error) throw error;
            res.status(200).json({ message: "Miles created" })
        });

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Listen in port
//app.listen(port, () => console.log(`Server listening at port: ${port}`))

module.exports.handler = serverless(app);