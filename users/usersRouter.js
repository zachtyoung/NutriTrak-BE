const express = require('express');
const db = require('../users/usersModel')
const bcrypt = require('bcryptjs');
// const restricted = require('../auth/auth-middleware');
const router = express.Router();
// const scrapers = require('./scrapers');
const tkn = require('../users/token.js')

router.get('/', (req,res) =>{
    db.get().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
})
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
    db.insert(user)
      .then(saved => {
        const token = tkn.generateToken(user)
        res.status(201).json({id:saved.id, name:saved.email, token:token});
      })
      .catch(error => {
        res.status(500).json(error);
        console.log(error)
      });
  });

  router.post('/login', (req, res) => {
    let { email, password } = req.body;
    db.getBy({ email })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = tkn.generateToken(user)
          res.status(200).json({ id:user.id, name:user.email, token: token 
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials'});
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });



router.put('/:id', (req, res) =>{
  const {id} = req.params;
  const changes = req.body;

  changes? db.update(id, changes) .then(updated =>{
      if(updated){
          res.status(200).json(updated)
      } else{
          res.status(404).json({ message: "The user with the specified ID does not exist." })
      }
  }) .catch(err =>{
      res.status(500).json({ error: "The user information could not be modified.", errorMessage:err })
  }) : res.status(400).json({ errorMessage: "Please provide id and changes for the user." })
})





module.exports = router;