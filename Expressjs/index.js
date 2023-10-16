const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./Memberinos");


const app = express();

// init middleware
//app.use(logger);

// handlebars middleware

app.engine("handlebars", exphbs.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//homepage route
app.get("/",(req, res) => res.render("index", {
    title: "Members app",
    members
}));

// body parser middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));


/*
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
*/

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/member"));

const PORT = process.nextTick.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));