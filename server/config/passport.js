const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const localStrategy = require("passport-local").Strategy;
const { ExtractJwt } = require("passport-jwt");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const config = require("../config");
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebook.appID,
      clientSecret: config.facebook.secret,
      callbackURL: "/api/auth/return",
      profileFields: ['id', 'displayName', 'photos']
    },
    function(accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ facebookId: profile.id }, function(err, user) {
    //     return cb(err, user);
    //   });
    console.log(profile);
    return cb(profile)
    }
  )
);
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
      secretOrKey: config.jwt.secret
    },
    (payload, done) => {
      //console.log('inside paassport jwt');
      try {
        //find the user specified in token
        User.findOne({ _id: payload._id }, (err, user) => {
          //if user doesn't exist, handle it
          //console.log('payload')
          //console.log(payload)
          if (!user) {
            //console.log('inside passport.js jwt-strategy: user does not exist')
            return done(null, false);
          }
          //otherwise, return the user
          else {
            return done(null, user);
          }
        });
      } catch (e) {
        //console.log('inside passport.js jwt-strategy:' + e);
        done(e, false);
      }
    }
  )
);

passport.use(
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    (username, password, done) => {
      //Find the user, given the email
      //If not, handle that
      User.findOne({ username }, (err, user) => {
        console.log("LOGIN ERROR: didnt find any user with that username");
        if (!user) return done(null, false);
        //if user found, check if password correct
        //if correct, return user, otherwise, handle that.
        else {
          user.comparePassword(password, (err, isMatch) => {
            if (err) {
              console.log("LOGIN ERROR: General err comparing passwords");
              done("Error inside passport.js localStarategy", false);
            } else if (!isMatch) {
              console.log("LOGIN ERROR: passwords dont match");
              done("MISMATCH inside passport.js localStarategy", false);
            } else done(null, user);
          });
        }
      });
    }
  )
);
