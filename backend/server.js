const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const {notFound ,errorHandler} = require('./middleware/errorMiddleware');
const { yellow } = require("colors");


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API is running successs");
});



/////----------main-------
app.use("/api/user", userRoutes);
app.use('/api/chat',chatRoutes)


app.use(notFound);
app.use(errorHandler);


/////--------main-end------

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server Started on ${PORT}`.yellow.bold));



// practice 
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   //   console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);

//   res.send(singleChat);
// });