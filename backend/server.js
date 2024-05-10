// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const UserModel = require("./models/user");
// const translationRoutes = require('./routes/translationRoutes');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect(
//   "mongodb+srv://myAtlasDBUser:admin12345@myatlasclusteredu.h1am4v3.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true }
// );

// app.use('/translations', translationRoutes);

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   UserModel.findOne({ email: email }).then(user => {
//     if (user) {
//       if (user.password === password) {
//         res.json("Success");
//       } else {
//         res.json("incorrect password.");
//       }
//     } else {
//       res.json("invalide cradentiels.");
//     }
//   });
// });

// app.post("/signUp", (req, res) => {
//   UserModel.create(req.body)
//     .then((users) => res.json(users))
//     .catch((error) => res.json(error));
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const UserModel = require("./models/user");
const translationRoutes = require('./routes/translationRoutes');

const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://myAtlasDBUser:admin12345@myatlasclusteredu.h1am4v3.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use('/translations', translationRoutes);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then(async (user) => {
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ _id: user._id }, 'authToken', { expiresIn: '1h' });
        res.json({ message: 'Success', token });
      } else {
        res.json({ message: "incorrect password." });
      }
    } else {
      res.json({ message: "invalide cradentiels." });
    }
  });
});

app.post("/signUp", async (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});