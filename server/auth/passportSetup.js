const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/user.model");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "50533467962-4la1pmp2qvc46j2ltrvf8vudls9gltm9.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/api/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const candidate = await User.findOne({ googleId: profile.id });
      if (candidate) return done({ err: null, user: candidate });

      const newUser = await User.create({
        userName: profile.displayName,
        userEmail: profile.emails,
        idAdmin: false,
        googleId: profile.id,
      });

      return done({ err: null, user: newUser });
    }
  )
);
