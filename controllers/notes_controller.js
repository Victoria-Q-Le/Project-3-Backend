const express = require ('express')
const notes = express.Router()
const Notes = require('../models/notes.js')

notes.post('/', (req,res) => {
  Notes.create(req.body, (err,createdNote) => {
    res.json(createdNote)
  })
})

notes.get('/', (req,res) => {
  Notes.find({}, (err, foundNotes) => {
    res.json(foundNotes)
  })
})

notes.get('/:id', (req,res) => {
  Notes.findById(req.params.id, (err, foundNote) => {
    res.json(foundNote)
  })
})

notes.delete('/:id', (req,res) => {
  Notes.findByIdAndRemove(req.params.id, (err,deletedNote) => {
    res.json(deletedNote)
  })
})

notes.put('/:id', (req,res) => {
  Notes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedNote) => {
    res.json(updatedNote)
  })
})

module.exports = notes
