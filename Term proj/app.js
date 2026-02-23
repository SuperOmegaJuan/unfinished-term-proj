const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

/* ROUTES */
const homeRoutes = require("./routes/homeRoutes");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

/* VIEW ENGINE */
app.set("view engine", "ejs");

/* MIDDLEWARE */
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "verysecretkey",
    resave: false,
    saveUninitialized: true,
  })
);

/* MAKE USER AVAILABLE IN ALL EJS */
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

/* ROUTES */
app.use("/", homeRoutes);
app.use("/", authRoutes);
app.use("/", productRoutes);

/* SERVER */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});