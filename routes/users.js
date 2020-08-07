const express = require("express");
router = express.Router();

//get user lists
router.get("/list", function (req, res) {
  let sql = `select * from users`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrived successfully",
    });
  });
});

//create new user
router.post("/new", function (req, res) {
  let sql = `insert into users(name, gender) values(?)`;
  let values = [req.body.name, req.body.gender];
  db.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully",
    });
  });
});

module.exports = router;
