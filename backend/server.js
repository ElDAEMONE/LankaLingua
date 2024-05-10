// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const jwt = require('jsonwebtoken');
// const UserModel = require("./models/user");
// const translationRoutes = require('./routes/translationRoutes');
// const Category = require('./models/categoryModel');

// const bcrypt = require('bcrypt');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // mongoose.connect(
// //   "mongodb+srv://myAtlasDBUser:admin12345@myatlasclusteredu.h1am4v3.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true }
// // );

// mongoose.connect('mongodb+srv://myAtlasDBUser:admin12345@myatlasclusteredu.h1am4v3.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');

//         // Seed initial categories
//         const categories = ['WORK', 'LITERATURE', 'RESEARCH', 'FICTION', 'ESSAYS'];
//         Category.insertMany(categories.map(name => ({ name })))
//             .then(() => {
//                 console.log('Initial categories seeded successfully');
//                 mongoose.connection.close();
//             })
//             .catch(error => console.error('Error seeding categories:', error));
//     })
//     .catch(error => console.error('Error connecting to MongoDB:', error));

// app.use('/translations', translationRoutes);

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   UserModel.findOne({ email: email }).then(async (user) => {
//     if (user) {
//       const isPasswordValid = await bcrypt.compare(password, user.password);
//       if (isPasswordValid) {
//         const token = jwt.sign({ _id: user._id }, 'authToken', { expiresIn: '1h' });
//         res.json({ message: 'Success', token });
//       } else {
//         res.json({ message: "incorrect password." });
//       }
//     } else {
//       res.json({ message: "invalide cradentiels." });
//     }
//   });
// });

// app.post("/signUp", async (req, res) => {
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
const Category = require('./models/categoryModel');
const bcrypt = require('bcrypt');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect('mongodb+srv://myAtlasDBUser:admin12345@myatlasclusteredu.h1am4v3.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(async () => {
//         console.log('Connected to MongoDB');

//         // Seed initial categories
//         const categories = ['WORK', 'LITERATURE', 'RESEARCH', 'FICTION', 'ESSAYS'];
//         await Category.insertMany(categories.map(name => ({ name })));
//         console.log('Initial categories seeded successfully');
//     })
//     .catch(error => console.error('Error connecting to MongoDB:', error));

// Connect to MongoDB

mongoose.connect('mongodb+srv://myAtlasDBUser:admin12345@myatlasclusteredu.h1am4v3.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Register category routes
app.use('/api', categoryRoutes); // Assume your route will be under '/api'


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