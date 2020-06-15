const express = require("express");
const monogoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const { body, validationResult } = require("express-validator");

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.post(
  "/auth/signup",
  [
    body("email").isEmail().withMessage("please type valid email"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be greater than 6 character"),
    body("name").trim().not().isEmpty().withMessage("Name field is required"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const error = new Error("Validation failed");
      error.statusCode = 422;
      error.data = errors.array();

      throw error;
    }

    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    res.json({
      message: "success",
    });
  }
);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(statusCode).json({
    message,
    data,
  });
});

monogoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-c7fco.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("listening to port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
