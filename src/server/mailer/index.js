import nodemailer from 'nodemailer'

import config from './config'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
      user: 'customtshirtsdotcom@gmail.com',
      pass: 'd80256477766'
  },
  from: 'customtshirtsdotcom@gmail.com'
});

const mailer = message => {
  transporter.sendMail(message,(err,info) => {
    if(err) return console.log(err)
    console.log('Email sent: ',info)
  })
}

export default mailer
