import express, { json } from 'express';
import cors from 'cors';
import mongoose, { connect } from 'mongoose';
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imgURL: String,
    des: String
});

const Products = mongoose.model('Products', productsSchema);

app.get('/elmin', async (req, res) => {
    const data = await Products.find()
    res.send(data)
})
app.get('/elmin/:id', async (req, res) => {
    const { id } = req.params
    const data = await Products.findById(id)
    res.send(data)
})
app.post('/elmin', async (req, res) => {
    const body = req.body
    const data = new Products(body)
    await data.save()
    res.send(data)
})
app.delete('/elmin/:id', async (req, res) => {
    const { id } = req.params
    const data = await Products.findByIdAndDelete(id)
    res.send(data)
})

connect('mongodb+srv://LordOfElmin:Lordofelmin12@elmin.1dhi0zk.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})