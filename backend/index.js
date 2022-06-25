const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//keys
const hasingKey = "MYNAMEISVINEETKUMARDIXIT";
const jwttokenKey = "thisjwtkeyismadebyvineetkumardixit";

//creating a new connetion with DataBase
mongoose
  // .connect("mongodb://localhost:27017/rentalcar")
  .connect(
    "mongodb+srv://rentalcar:qwertyuiop@carrental.9ggtwqn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DataBase connected");
    {
      message: "DataBase connected";
    }
  })
  .catch((err) => {
    {
      message: "Failed to connect to DataBase";
    }
    console.log("Failed to connect to DataBase");
  });

//Establishing a connection

const connection = mongoose.connection;

//Creating a Schema for database

const UserDetails = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  tokens: {
    type: String,
    require: true,
  },
});

//Creating a Model of a schema into a Database

const USERDETAILS = connection.model("usersdetail", UserDetails);

//Creating Routes/APi

app.post("/register", (req, res) => {
  //Destructuring the Object
  const { name, email, phone, username, password, cpassword } = req.body;
  if (!name || !email || !phone || !username || !password || !cpassword) {
    console.log("Please fill all the Details ");
    res.status(422).send("Please fill all the Details");
  }
  //checking whether user exist or not
  USERDETAILS.findOne({ email: email }, (err, result) => {
    if (result) {
      res.send({ message: "User Already Exist" });
    } else {
      const values = new USERDETAILS(req.body); //saving reqbody into a variable to save into database
      //create hash value for password
      values.password = crypto
        .createHash("sha256", hasingKey)
        .update(req.body.password)
        .digest("hex");
      values.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "User Registered" });
        }
      });
    }
  });
});
let AuthToken;
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("Please fill al the details");
      res.send({ message: "Please fill all the details" });
    }
    USERDETAILS.findOne({ email: email }, (err, result) => {
      if (result) {
        //Creating hash to check with DB hash password
        req.body.password = crypto
          .createHash("sha256", hasingKey)
          .update(req.body.password)
          .digest("hex");
        if (req.body.password === result.password) {
          //Creating a JWT Token and storing into Database

          AuthToken = jwt.sign({ _id: result._id }, jwttokenKey);
          result.tokens = AuthToken;

          result.save((err) => {
            if (err) {
              console.log("Error: Unable to save");
            } else {
              console.log("AuthToken", AuthToken);

              console.log("Saved Successfully");
            }
          });
          console.log("User Logged In");

          //Creating cookies at login
          res.cookie("username", result.username,{httpOnly:true});
          return res
            .cookie("access_token", AuthToken, {
              httpOnly: true,
            })
            .status(200)
            .json({ message: "Logged in successfully 😊 👌" });
        } else {
          console.log(result);
          res.send({ message: "Incorrect Credentials" });
        }
      } else {
        console.log("User Didn,t Exist");
        res.send({ message: "User Didn,t Exist" });
      }
    });
  } catch (error) {
    console.log("Error Occured");
    req.body.password;
    res.status(404).send("Failed to Login");
  }
});

app.get("/home", async (req, res) => {
  try {
    const tokenCookies = req.cookies.access_token;
    if (!tokenCookies) {
      console.log("Token not found");
      return res.send("Token not found");
    } else {
      //check token here
      return res.send("Token  found");
    }
  } catch (error) {
    console.log("Error Occured");
    res.status(404).send("Failed to Load page");
  }
});
app.post("/contactus", async (req, res) => {
  try {
    console.log("Welcome to homepage");
  } catch (error) {
    console.log("Error Occured");
    res.status(404).send("Failed to Load page");
  }
});

app.post("/aboutus", async (req, res) => {
  try {
    console.log("Welcome to homepage");
  } catch (error) {
    console.log("Error Occured");
    res.status(404).send("Failed to Load page");
  }
});

app.listen(port, () => {
  console.log("Server has been started at port  " + port);
});
