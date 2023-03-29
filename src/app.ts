import express from "express"
import  {logger}  from "./logger"

const app = express()
app.use((req, res, next)=>{
  logger.info(req.url)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export {app}