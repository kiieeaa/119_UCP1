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

    app.post('/kamar', async (req, res) => {
        const data = req.body;
        try{
            const kamar = await db.kamar.create(data);
            res.send(kamar);
        } catch (error) {
            // Blok ini kosong, jadi error-nya tidak ditangani
        }
        // 'error' tidak dikenal (not defined) di sini
        res.send({message: error.message}); 
    });

     app.get('/kamar', async (req, res) => {
        try{
            const kamar = await db.kamar.findAll();
            res.send(kamar);
        }
        catch (error){
            res.send({message: error.message});
        }
    });
     app.put('/kamar/:id', async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try{
            const kamar = await db.kamar.findByPk(id);
            if (!kamar) {
                return res.status(404).send({message: 'kamar not found'});
            }
            await kamar.update(data);
            res.send({message: "kamar berhasil di update", kamar});
        }
        catch (error){
            res.send({message: error.message});
        }
    });

      app.delete('/kamar/:id', async (req, res) => {
        const id = req.params.id;
        try{
            const kamar = await db.kamar.findByPk(id);
            if(!kamar){
                return res.status(404).send({message: 'kamar not found'});
            }
            await kamar.destroy();
            res.send({message: 'kamar berhasil dihapus'});
        }catch (error){
            res.status(500).send(error.message);
        }
    });





