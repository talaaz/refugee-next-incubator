import * as nodemailer from "nodemailer";
import { Response } from 'express'

type EntryType = {
  firstName: string,
  lastName: string,
  email: string,
  comment:string
}

type Request = {
  body: EntryType,
}
 

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_AUTH_GMAIL,
    pass: process.env.NODEMAILER_AUTH_PASSWORD
  }
});

export const sendCollaborationEmail = (req: Request, res: Response) => {
  const mailOptions = {
    from: req.body.email,
    to: process.env.NODEMAILER_AUTH_GMAIL,
    subject:  "New collaboration request from: " + req.body.firstName + " " + req.body.lastName,
    text: `${req.body.firstName} <${req.body.email}> has showed interest in collaborating with us. The comment: ${req.body.comment}`
  };

  return transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          return res.status(500).send(error.toString());
      }
      sendConfirmationsEmail(req, res);
      return res.status(200).send('Email sent: ' + info.response);
  });

}

const sendConfirmationsEmail = (req: Request, res: Response) => {
  const mailOptions = {
    from: process.env.NODEMAILER_AUTH_GMAIL,
    to: req.body.email,
    subject:  "Thank you for your interest",
    text:  "We have received your inquiry and will get back to you soon"
  };

  return transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          return res.status(500).send(error.toString());
      }
      return res.status(200).send('Email sent: ' + info.response);
  });
}




 
 
