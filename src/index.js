const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
// const User = require('./models/user')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const my =  async () => {
//     const user = await User.findById('5e7f612a629b671c7fd77630')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// my()