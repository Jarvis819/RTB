const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
  res.render('register');
};
module.exports.register = async (req, res, next) => {
  try {
    const { number, email, username, password } = req.body;
    const user = new User({ email, username, number });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'Registration successful');
      res.redirect('/');
    });
  } catch (e) {
    req.flash('error', e.message);
    res.redirect('register');
  }
};

module.exports.renderLogin = (req, res) => {
  res.render('login');
};

module.exports.login = (req, res) => {
  req.flash('success', 'Welcome back!');
  const redirectUrl = '/';
  delete req.session.returnTo;
  res.redirect(redirectUrl);
};

// module.exports.logout = (req, res) => {
//   req.logout();
//   req.flash('success', 'Goodbye!');
//   res.redirect('/');
// };
