import express from 'express'
const app = express();
import cors from 'cors'

//middleware imports
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(cors())


let friendBirthdays = [{id: 1, firstName: "George", birthday: "12/12/80"}]

app.get('/appointments', (req, res) => {
  res.send(friendBirthdays)
})

//Take in all http methods & routes left over after checking routes
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 4000

app.listen(port, () => console.log(`server listening on port ${port}`))