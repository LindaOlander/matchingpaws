import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_URL || "mongodb+srv://matchingpawsUser:juniboltwilma2020@cluster0.8ft70.mongodb.net/matching-paws-dogs?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb")
})

const Dog = mongoose.model("Dog", {
  hundnamn: {
    type: String,
  },
  beskrivning: {
    type: String,
  },
  bild: {
    type: String,
  },
  ras: {
    type: String,
  },
  alder: {
    type: String,
  },
  storlek: {
    type: String,
  },
  kastrerad: {
    type: String,
  },
  hunderfarenhet: {
    type: String,
  },
  fysik: {
    type: String,
  },
  allergi: {
    type: String,
  },
  barn: {
    type: String,
  },
  boende: {
    type: String,
  },
  hundpassning: {
    type: String,
  },
  aktivitet: {
    sällskap: Boolean,
    jakt: Boolean,
    sportkompis: Boolean,
    sök: Boolean,
    hundsport: Boolean,
    vakt: Boolean,
    inget: Boolean,
  },
  energi: {
    type: String,
  }, 
  problematik: {
    hundaggressivitet: Boolean,
    hoppar: Boolean,
    integritet: Boolean,
    drar: Boolean,
    ensam: Boolean,
    skällig: Boolean,
    resursförsvar: Boolean,
    sjukdom: Boolean,
    ingen: Boolean,
  }, 
  katt: {
    type: String,
  }, 
  hund: {
    type: String,
  }, 
  ledarskap: {
    type: String,
  }, 
  kontaktnamn: {
    type: String,
  },
  email: {
    type: String,
  }, 
  lank: {
    type: String,
  }
})

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/dogs', (req, res) => {
  if (req.query.style) {
    Dog.find({ style: req.query.style }).then(dog => {
      res.json(dog)
    })
  } else if (req.query.age) {
    Dog.find({ age: req.query.age }).then(dog => {
      res.json(dog)
    })
  } else {
    Dog.find().then(dog => {
      res.json(dog)
    })
  }
})

app.get("/dogs/:id", (req, res) => {
  Dog.findOne({ _id: req.params.id } , function(err, dog) {
    if (err) res.send(err)
    res.json(dog)
  })
})

app.post('/dogs/', (req, res) => {
  const dog = new Dog(req.body)
  dog.save()
    .then(() => { res.status(201).send("Dog added") })
    .catch(err => { res.status(400).send(err) })
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})