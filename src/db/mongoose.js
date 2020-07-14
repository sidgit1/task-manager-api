const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



// const me = new User({
//     name: 'Sid',
//     email: 'sidhant@iitk.Ac.in ',
//     password: 'yoyoyoyo',
//     age: 20
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) =>{
//     console.log('Error! ', error)
// })



// const task = new Task({
//     description: 'Learn mongoose library'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

// process.on('unhandledRejection', error => {
//     // Prints "unhandledRejection woops!"
//     console.log('unhandledRejection', error.test);
//   });
  
//   new Promise((_, reject) => reject({ test: 'woops!' })).catch(() => {});
