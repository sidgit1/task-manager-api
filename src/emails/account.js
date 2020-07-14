const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email ,
        from: 'sidhant@iitk.ac.in',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
//.then(() => {
//    console.log('Message sent')
//}).catch((error) => {
  //  console.log(error.response.body)
    // console.log(error.response.body.errors[0].message)
//})

const goodByeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'sidhant@iitk.ac.in',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}! I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    goodByeEmail
}