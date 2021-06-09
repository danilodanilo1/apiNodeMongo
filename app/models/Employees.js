const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

module.exports = () => {
  const EmployeesSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
      },
    start: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    description: {
      type: String,
      required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
  })

  const Employees = mongoose.model('Employees', EmployeesSchema)

  return { Employees }
}