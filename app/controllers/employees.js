module.exports = app => {

    const { Employees } = app.app.models.Employees
    // const test = () => {

    //   console.log('teste' , Employees );
    // }
    // create a new Employee
    const createEmployee = async (req, res) => {
      // test()
      try {
        const { name, email, start, position, salary, description  } = req.body
        
        const employees = new Employees({name, email, start, position, salary, description})

        await employees.save()
        
        return res.send({employee})
      } catch(err) {
        return res.status(400).send({ error: 'Error creating new employee.'})
      }
    }
  
    // list employee
    const getEmployee = async (req, res) => {
      try {
        const employees = await Employees.find().populate(['user'])
        return res.send({ employees })
      } catch(err) {
        return res.status(400).send({ error: 'Error loading employee.' })
      }
    }
  
    // list employee by id
    const getEmployeeById = async (req, res) => {
      console.log(req)
      try {
        const employees = await Employees.findById(req.params.employeeId)
  
        return res.send({ employees })
      } catch(err) {
        return res.status(400).send({ error: 'Error loading employee.'})
      }
    }
  
    // update projects
    const updateEmployees = async (req, res) => {
      try {
        const { name, email, start, position, salary, description } = req.body
        
        const employees = await Employees.findByIdAndUpdate(req.params.employeeId, { 
            name, 
            email, 
            start, 
            position, 
            salary, 
            description
        }, { new: true })
  
        await employees.save()
  
        return res.send({ employees })
      } catch(err) {
        return res.status(400).send({ error: 'Error updating employee.' })
      }
    }
  
    // delete projects
    const removeEmployee = async (req, res) => {
      try {
        await Employees.findByIdAndRemove(req.params.employeeId)
  
        return res.status(200).send({ message: 'Employee successfully removed!' })
      } catch(err) {
        return res.status(400).send({ error: 'Error loading employee.'})
      }
    }
  
    return { createEmployee, getEmployee, getEmployeeById, removeEmployee, updateEmployees }
  }