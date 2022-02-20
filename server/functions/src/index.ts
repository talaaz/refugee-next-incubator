import * as functions from 'firebase-functions'
import * as express from 'express'
import {addPUser} from "./controllers/puser.controller"
const app = express()

app.post("/pUser", addPUser)
exports.app = functions.https.onRequest(app)

