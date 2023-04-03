import path from 'path';

import express from "express"
import  {logger}  from "./logger"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use((req, res, next)=>{
  logger.info(req.url)
  next()
})

app.use('/static', express.static(path.join(process.cwd(), '/static')))

app.get('/', (req, res) => {
  res.redirect(301, '/static/index.html')
})

export {app}