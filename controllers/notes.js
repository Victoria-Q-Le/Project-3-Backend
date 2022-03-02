const express = require ('express')
const router = express.Router()
const Notes = require('../models/notes.js')

router.post('/', (req,res) => {
  Notes.create(req.body, (err,createdNote) => {
    res.json(createdNote)
  })
})

router.get('/', (req,res) => {
  Notes.find({}, (err, foundNotes) => {
    res.json(foundNotes)
  })
})

router.delete('/:id', (req,res) => {
  Notes.findByIdAndRemove(req.params.id, (err,deletedNote) => {
    res.json(deletedNote)
  })
})

module.exports = router
