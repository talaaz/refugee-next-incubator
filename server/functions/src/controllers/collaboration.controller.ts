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
    to: 'refugeenext@gmail.com',
    subject:  req.body.firstName+   req.body.lastName,
    text:  req.body.comment
  };

  // returning result
  return transporter.sendMail(mailOptions, (erro:any, info:any) => {
      if(erro){
          return res.send(erro.toString());
      }
      return res.status(200).send('Sended');
  });
}

var transporter = nodemailer.createTransport({
      service: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'refugeenext@gmail.com',
        pass: 'Talas184235'
      }
});


 
 
