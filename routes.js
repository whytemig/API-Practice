// requiring our express router 

const express = require('express');

const router = express.Router();
// requiring our model(tables)
const User = require('./models');


router.get('/todos', async (req, res, next)=>{
    const find = await User.findAll();

    res.status(200).json(find);
});

router.post('/todos', async (req, res, next)=>{
    // save data
    const newUsers = await User.create({ 
        content: "stuff 2",
        description: "stuff 3",
        check: false,
        completed:null
    });

    // res.send(newUsers)

    try{
        await newUsers.save();
        res.status(201).newUsers.json();

    }catch(error){
        res.status(404).json(error)
    }

    

});

router.get('/todos/:id', async (req, res, next)=>{
    const id = req.params.id;
    const data = await User.findOne({
        where: { id: `${id}` }
      });

      try{
        await data.save();
        res.status(201).json(data);

    }catch(error){
        res.status(404).json(error)
    }

});

router.patch('/todos/:id', async (req, res, next)=>{
    const id = req.params.id;

    const data = await User.update({ content: "Updated content 1" }, {
        where: { id: `${id}` }
      });
   
      try{
        await data.save();
        res.status(201).json(data);

    }catch(error){
        res.status(404).json(error)
    }
});

router.delete('/todos/:id', async(req, res)=>{
    const id = req.params.id;

    const data = await User.destroy({
        where: { id: `${id}` }
      });

      try{
        await data.save();
        res.status(201).json(data);

    }catch(error){
        res.status(404).json(error)
    }

});

module.exports = router;
