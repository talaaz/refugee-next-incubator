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
 
export const sendCollaborationEmail = async (req: Request, res: Response) => {
  const mailOptions = {
    from: req.body.email,
    to: '',
    subject:  "New collaboration request from: " + req.body.firstName + " " + req.body.lastName,
    text:  req.body.comment
  };

  // returning result
  return transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          return res.status(500).send(error.toString());
      }
      return res.status(200).send('Email sent: ' + info.response);
  });
}

var transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      secure: true,
      auth: {
        user: '',
        pass: ''
      }
});


 
 
