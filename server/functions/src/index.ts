import * as functions from 'firebase-functions'
import * as express from 'express'
import {addPUser} from "./controllers/puser.controller"
const cors = require('cors')({origin: true})
const app = express()

app.use(cors)
app.post("/pUser", addPUser)
exports.app = functions.https.onRequest(app)

