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
//User Registration Details

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

//Owners Registration
const OwnersDetails = new mongoose.Schema({
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

//Owners Car Details
const CarDetails = new mongoose.Schema({
  carBrand: {
    type: String,
    require: true,
  },
  carModel: {
    type: String,
    require: true,
  },
  noOfSeats: {
    type: Number,
    require: true,
  },
  transmissionType: {
    type: String,
    require: true,
  },
  fuelType: {
    type: String,
    require: true,
  },
  // price: {
  //   type: String,
  //   require: true,
  // },
  // carId: {
  //   type: Number,
  //   require: true,
  // },

  ownerEmail: {
    type: String,
    require: true,
  },
  ownerId: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  ownerName: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
    default: true,
  },
  carLocation: {
    type: String,
    require: true,
  },
  carType: {
    type: String,
    require: true,
  },
  carNumber: {
    type: String,
    require: true,
  },
  kmDriven: {
    type: Number,
    require: true,
  },
});

const carMasterData = new mongoose.Schema({
  brand: {
    type: String,
  },
  model: {
    type: [],
  },
});

//Creating a Model of a schema into a Database

const USERDETAILS = connection.model("usersdetail", UserDetails);
const OWNERSDETAILS = connection.model("ownersdetail", OwnersDetails);
const CARDETAILS = connection.model("cardetails", CarDetails);
const CARMASTERDATA = connection.model("carmasterdatas", carMasterData);

//middleware to validate user token
const authorization = (req, res, next) => {
  const token = req.headers.access_token;
  const username = req.headers.username;
  console.log("token", token);
  console.log("req", req);

  if (!token) {
    console.log("token not found");
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, jwttokenKey);
    USERDETAILS.findOne({ tokens: token }, (err, result) => {
      if (result) {
        // console.log(result);

        // console.log(data);
        if (result.username === username) {
          req.body = result;
          return next();
        } else {
          res.send("invalid token");
        }
      }
    });
  } catch {
    return res.sendStatus(403);
  }
};

//Creating Routes/APi

//Routes for user Registration
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

//Routes for User Login & Authentication
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
          res.cookie("username", result.username, { httpOnly: true });
          return res
            .cookie("access_token", AuthToken, {
              httpOnly: true,
            })
            .status(200)
            .json({
              message: { username: result.username, access_token: AuthToken },
            });
        } else {
          console.log(result);
          res.status(400).send({ message: "Incorrect Credentials" });
        }
      } else {
        console.log("User Didn't Exist");
        res.status(400).send("test");
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
    console.log("inside home");
    return res.send("Token found");
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

app.get("/aboutus", async (req, res) => {
  try {
    console.log("Welcome to aboutus");
    console.log(req.cookies);

    // console.log(res);

    // console.log(req);
  } catch (error) {
    console.log("Error Occured");
    res.status(404).send("Failed to Load page");
  }
});

//Routes to insert a new car
app.post("/insertcar", async (req, res) => {
  try {
    if (
      !req.body.carBrand ||
      !req.body.carModel ||
      !req.body.kmDriven ||
      !req.body.fuelType ||
      !req.body.transmissionType ||
      !req.body.noOfSeats ||
      !req.body.carLocation ||
      !req.body.carType ||
      !req.body.carNumber
    ) {
      console.log(req.body);

      console.log("Please fill all the details");
      res.json({ message: "Please fill all the details" });
    } else {
      // console.log(req.body.name);
      const newCar = await new CARDETAILS(req.body);
      newCar.ownerName = req.body.name;
      newCar.ownerEmail = req.body.email;
      newCar.ownerId = req.body.ownerId;
      newCar.phone = req.body.phone;
      newCar.save((err) => {
        if (err) {
          console.log(err);

          console.log("Error in saving to database");
          res.json({ message: "Error in saving to database" });
        } else {
          console.log("Car Data saved successfully");
          res.json({ message: "Car Data saved successfully" });
        }
      });
    }
  } catch (error) {
    console.log("unable to insert");
  }
});

//Routes for searching a car on basis of location at home page
app.post("/searchCars", async (req, res) => {
  try {
    const { pickuplocation, datefrom, dateto } = req.body;
    const arr = [{ carLocation: pickuplocation }, { status: true }];
    CARDETAILS.find({ $and: arr }, (err, result) => {
      console.log("inside try");
      if (result) {
        res.send(result);
      }
    });
  } catch (error) {}
});

//Routes for filter the searchCar on basis of need on the home page of user
app.post("/filterdata", async (req, res) => {
  try {
    let queryParam = [{ status: true }];
    if (req.body.seats && req.body.seats != "") {
      queryParam.push({ noOfSeats: req.body.seats });
    }
    if (req.body.transmission && req.body.transmission != "") {
      queryParam.push({ transmissionType: req.body.transmission });
    }
    if (req.body.cartypes && req.body.cartypes != "") {
      queryParam.push({ carType: req.body.cartypes });
    }
    if (req.body.pickuplocation && req.body.pickuplocation != "") {
      queryParam.push({ carLocation: req.body.pickuplocation });
    }
    console.log("query params");
    console.log(queryParam);
    CARDETAILS.find({ $and: queryParam }, (err, result) => {
      console.log("filtered data");
      console.log(result);
      if (result) {
        res.send(result);
      }
    });
    console.log(req.body);
  } catch (error) {
    console.log("Error Occured");
  }
});

app.get("/cardetailspage", async (req, res) => {
  console.log("");
});

//Owners Routes

//Routes for Registration of the owner

app.post("/ownerregister", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
      console.log("Please fill all the Details ");
      res.status(422).send("Please fill all the Details");
    } else {
      //Check if the owner is already registered or not
      OWNERSDETAILS.findOne({ email: email }, (err, result) => {
        if (result) {
          res.send({ message: "User Already exist" });
        } else {
          //Saving the req.body value into values
          const values = new OWNERSDETAILS(req.body);
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
    }
  } catch (error) {
    console.log("Error cannot register");
    res.send("Error cannot register");
  }
});

//Routes for User Login & Authentication
let OwnerAuthToken;
app.post("/ownerlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("Please fill al the details");
      res.send({ message: "Please fill all the details" });
    }
    OWNERSDETAILS.findOne({ email: email }, (err, result) => {
      if (result) {
        //Creating hash to check with DB hash password
        req.body.password = crypto
          .createHash("sha256", hasingKey)
          .update(req.body.password)
          .digest("hex");
        if (req.body.password === result.password) {
          //Creating a JWT Token and storing into Database

          OwnerAuthToken = jwt.sign({ _id: result._id }, jwttokenKey);
          result.tokens = OwnerAuthToken;
          console.log("result", result);

          result.save((err) => {
            if (err) {
              console.log("Error: Unable to save");
            } else {
              console.log("Saved Successfully");
            }
          });
          console.log("User Logged In");

          //Creating cookies at login
          res.cookie("username", result.username, { httpOnly: true });
          res
            .cookie("access_token", OwnerAuthToken, { httpOnly: true })
            .status(200);
          res.send(result);
          // return res
          //   .cookie("access_token", OwnerAuthToken, {
          //     httpOnly: true,
          //   })
          //   .status(200)
          //   .json({ message: "Logged in successfully 😊 👌", data:result });
        } else {
          console.log(result);
          res.status(400).send({ message: "Incorrect Credentials" });
        }
      } else {
        console.log("User Didn't Exist");
        res.status(400).send({ message: "User Didn't Exist" });
      }
    });
  } catch (error) {
    console.log("Error Occured");
    req.body.password;
    res.status(404).send("Failed to Login");
  }
});

app.get("/carBrands", (req, res) => {
  try {
    CARMASTERDATA.find({}, (err, result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(400).send("error occured");
      }
    });
  } catch (error) {
    console.log("ERROR");
    res.status(400).send("error occured");
  }
});


//Routes to find Model On basis of Car Brands

app.post("/carmodels", async (req, res) => {
  try {
    console.log("req.body", req.body);
    // console.log(req)

    if (!req.body) {
      res.status(400).json({ message: "Please select Brand" });
    } else {
      CARMASTERDATA.findOne({ brand: req.body.carBrand }, (err, result) => {
        console.log(result);
        res.send(result);
      });
    }
  } catch (error) {
    console.log("Error while fetching data from backend");
  }
});

app.post("/ownerProfileData", async (req, res) => {
  try {
    CARDETAILS.find({ownerId: req.body.ownerId}, (err, result) => {
      if (result){
        res.send(result);
      }
    })
    // OWNERSDETAILS.findOne({ownerId: req.body.ownerId}, (err, result) => {}
  } catch (error) {
    
  }
})

app.listen(port, () => {
  console.log("Server has been started at port  " + port);
});
