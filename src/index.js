require('./db/mongoose')
const express = require('express')

const app = express()
const port = process.env.PORT

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

//Maintenance mode
// app.use((req, res, next) => {
//     res.status(503).send('Site is down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



