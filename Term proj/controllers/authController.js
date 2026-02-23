const users = require("../data/users.json");

exports.loginAdmin = (req, res) => {
  req.session.user = users.admin;
  res.redirect("/");
};

exports.loginCustomer = (req, res) => {
  const { username } = req.body;

  const user = users.customers.find(u => u.username === username);

  if (!user) {
    return res.redirect("/");
  }

  req.session.user = user;

  res.redirect("/");
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};