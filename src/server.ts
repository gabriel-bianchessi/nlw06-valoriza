import 'reflect-metadata';
import express from 'express';
import { router } from './routes'

import './database'

const app = express();

app.use(express.json())

app.get('/teste', (req, res) => {
  return res.send("Olá mundo")
})

app.post('/teste-post', (req, res) => {
  return res.send("Teste da rota post")
})

app.use(router)

app.listen(3000, () => {
  console.log("Server is running")
})