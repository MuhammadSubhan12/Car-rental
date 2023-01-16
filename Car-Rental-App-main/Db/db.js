const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect("mongodb+srv://subhan:subhansubhan1@cluster0.3j8fj0p.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("connection successfull");
  });
  connection.on("error", () => {
    console.log("connection failed");
  });
}

connectDb();
module.exports = mongoose;
