import express from "express";
import monogoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

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
