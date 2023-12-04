import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Our awesome LoL App is listering to http://localhost:${port}`)
})