const express = require("express");
path = require("path"); //path module
app = express();
mysql = require("mysql"); //import mysql module
cors = require("cors");
bodyParser = require("body-parser");

//routes
const userRouter = require("./routes/users");

//setup database
db = mysql.createConnection(
  {
    host: "localhost",
    user: "akapesh",
    password: "PeshWiwon13#",
    database: "simpleapi",
  },
  console.log(`success db connected`)
);

//make server object that contain port property & the value for our server.
var server = {
  port: 4040,
};

//use the modules(middleware)
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use router
app.use("/users", userRouter);
//router user input
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "views") + "/index.html");
});

app.use("/users", userRouter);

//starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
