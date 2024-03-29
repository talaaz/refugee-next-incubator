import { Response } from 'express'
import { db } from '../config/firebase'


type EntryType = {
    name: string,
  }
  
  type Request = {
    body: EntryType,
    params: { pUserId: string }
  }

export const addPUser = async (req: Request, res: Response) => {
    const { name } = req.body
    try {
      const pUser = db.collection('pusers').doc()
      const pUserObject = {
        id: pUser.id,
        name 
      }
  
      pUser.set(pUserObject)
  
      res.set("Access-Control-Allow-Origin", "*");
      res.status(201).send({
        status: 'success',
        message: 'pUser added successfully',
        data: pUserObject
      })
    } catch(error ) {
        res.status(500).json(error)
    }
  }