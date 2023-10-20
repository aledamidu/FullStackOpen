const mongoose = require('mongoose')

if (process.argv.length < 3 || process.argv.length === 4) {
  console.log(
    'Usage: \n Get All Peoples: node mongo.js <password>   \n Create new Person: node mongo.js <password> <name> <number>'
  )
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://alexisduchepro:${password}@fullstackopencourse.enfcy3y.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  number: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const phoneNumberRegex = /^(?:\d{2,3}-\d+)$/

        return phoneNumberRegex.test(value)
      },
      message: 'Phone number must be in the format XX-XXXXXXX or XXX-XXXXXXX.',
    },
  },
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log('phonebook:')
    result.forEach((person) => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}

if (process.argv.length > 4) {
  const name = process.argv[3]
  const number = process.argv[4]

  const person = new Person({
    name: name,
    number: number,
  })

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

