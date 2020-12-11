import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

const mongoServer = process.env.MONGO_URL || "mongodb+srv://matchingpawsUser:juniboltwilma2020@cluster0.8ft70.mongodb.net/matching-paws-dogs?retryWrites=true&w=majority" // add mongourl
mongoose.connect(mongoServer, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb")
})

const Dog = mongoose.model("Dog", {
  name: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  }
})

app.get("/dogs", (req, res) => {
  if (req.query.style) {
    Dog.find({ style: req.query.style }).then(dog => {
      res.json(dog)
    })
  } else {
    Dog.find().then(dog => {
      res.json(dog)
    })
  }
})

app.post("/dogs", (req, res) => {
  const dog = new Dog(req.body)

  dog.save()
    .then(() => { res.status(201).send("Dog added") })
    .catch(err => { res.status(400).send(err) })
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`)) // add port variable