var passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy;
const { models } = require("../sequelize");
passport.use(
    new LocalStrategy(async function (username, password, done) {
        try {
            const user = await models.user.findOne({ where: { username: username } })
            if (!user) {
                return done(null, false, { message: "Incorrect username." });
            }
            if (user.password !== password) {
                return done(null, false, { message: "Incorrect password." });
            }
            return done(null, user);
        } catch (error) {
            return done(err);
        }

    })
);
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await models.user.findByPk(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
});
module.exports = passport;
