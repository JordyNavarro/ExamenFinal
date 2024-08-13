const express = require("express")
const cors = require('cors');
const uri = 'mongodb+srv://silvaiberson3:iberson123@cluster0.j8pegzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
app.use(cors());

const port = 8081
const { productModel } = require('./models');
app.get('/', (req, res) => { res.send("products"); })

app.get('/products', async(req, res)=>{
  const products = await productModel.find({});
  res.json( products );
});
app.get('/product:id/', async(req, res)=>{
  const product = await productModel.find({id:req.params.id});
  res.json( product );
});

app.post('/product', async(req, res)=>{
    try {
        const id = req.body.id;
        const image = req.body.image;
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
  
        const product = new productModel({ id,image,name,description, price});
  
        const data = await product.save();
        return res.status(201).json(data);
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
