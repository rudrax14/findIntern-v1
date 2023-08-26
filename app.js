const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport");
localStrategy = require("passport-local")
passportLocalMongoose = require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1/findIntern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(require("express-session")({
    secret: "The true measure of a shinobi is not how he lives, but how he dies",
    resave: false,
    saveUninitialized: false
}))
const User = require("./models/user")
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");




const userRoutes = require("./routes/index")
const mainRoutes = require("./routes/main")
app.use(userRoutes)
app.use(mainRoutes)




app.listen(3000, () => {
    console.log("Listening here we go")
})