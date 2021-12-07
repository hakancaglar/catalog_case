import express from 'express'
const app = express()
const port = process.env.PORT;
app.get('/', (_, res) => {
  res.status(200).send("adada")
})
app.listen(port, () => console.log(`Running on port ${port}`))