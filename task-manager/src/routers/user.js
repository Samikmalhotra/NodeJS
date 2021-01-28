const { Router } = require('express')
const express = require('express')
const router = new express.Router()

router.get('/test', (req,res)=>{
    res.send('from another file')
})

module.exports = router