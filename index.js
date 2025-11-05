const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({extended: false}));


db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server Started');
        })
          })
    .catch((err) => {
        console.log(err);
    })
     app.post('/hotel', async (req, res) => {
        const data = req.body;
        try{
            const hotel = await db.Tentrem.create(data);
            res.send(hotel);
        } catch (error) {
            // Blok ini kosong, jadi error-nya tidak ditangani
        }
        // 'error' tidak dikenal (not defined) di sini
        res.send({message: error.message}); 
    });
     app.get('/hotel', async (req, res) => {
        try{
            const hotel = await db.Tentrem.findAll();
            res.send(hotel);
        }
        catch (error){
            res.send({message: error.message});
        }
    });



