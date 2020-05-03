
const User = require("../../../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

// render the sign up page
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("./profile");
  }

  return res.render("user_sign_up", {
    title: "SquareOne | Sign Up",
    recaptcha: res.recaptcha
  });
};

// render the sign in page
module.exports.signIn = function (req, res) {
  // if (!req.recaptcha.error) {
  if (req.isAuthenticated()) {
    return res.redirect("./profile");
  }
  // }

  return res.render("user_sign_in", {
    title: "SquareOne | Sign In",
    recaptcha: res.recaptcha
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  //   console.log("body is", req.body.name);
  // if (!req.recaptcha.error) {
  if (req.body.password != req.body.confirm_password) {
    console.log("password mismatch");
    req.flash('error', 'passwords mismatch');
    return res.redirect('back');
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }

    if (!user) {
      // const hash = bcrypt.hashSync(req.body.password, saltRounds);
      // console.log(hash);

      var newUser = new User();

      newUser.email = req.body.email;
      newUser.name = req.body.name;
      newUser.password = newUser.generateHash(req.body.password);

      User.create(newUser, function (err, user) {
        if (err) {
          console.log("error in creating user while signing up");
          return;
        }
        req.flash('success', "created successfully");
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
  // }

};

// sign in and create a session for the user
module.exports.createSession = function (req, res) {
  // if (!req.recaptcha.error) {
  return res.redirect("./profile");
  // }
};

module.exports.destroySession = function (req, res) {
  req.logout();

  return res.redirect("/");
};



