const express = require('express');
const router = express.Router();
const axios = require('axios');
   
router.get('/:username',(req,res,next) => {
    const username = req.params.username
    axios
        .get(`https://torre.bio/api/bios/${username}`)
        .then((response) => {
            res.status(200).json(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
})

module.exports = router;