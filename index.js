import express from "express";
import router from "./routers/index.js";
import morgan from "morgan";

const PORT = 8081;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("public"));

app.use("/", router);

app.listen(PORT, (err) => {
 if (err) {
    console.log(err);
    
 } else {
     console.log("Server started");
  console.log(`http://localhost:${PORT}`);
 }
});
