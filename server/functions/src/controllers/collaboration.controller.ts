import { Response } from 'express'
import { db } from '../config/firebase'


type EntryType = {
    firstName: string,
    lastName: string,
    email: string,
    comment: string
  }
  
  type Request = {
    body: EntryType,
    params: { collaboratorId: string }
  }

export const addCollaborator = async (req: Request, res: Response) => {
    const { firstName, lastName, email, comment } = req.body
    try {
      const collaborator = db.collection('collaborators').doc()
      const collaboratorObject = {
        id: collaborator.id,
        firstName, 
        lastName, 
        email, 
        comment 
      }
  
      collaborator.set(collaboratorObject)
  
      res.set("Access-Control-Allow-Origin", "*");
      res.status(201).send({
        status: 'success',
        message: 'collaborator added successfully',
        data: collaboratorObject
      })
    } catch(error) {
        res.status(500).json(error)
    }
  }