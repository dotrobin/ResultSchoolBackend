const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk')

const notesPath = path.join(__dirname, 'db.json')

async function addNote(title) {
  const notes = await getNotes()
  const note = {
    title,
    id: Date.now().toString()
  }

  notes.push(note)

  await saveNotes(notes)
  console.log(chalk.bgGreen('Note was added!'))
}

<<<<<<< HEAD
=======
async function editNote(id, title) {
  const notes = await getNotes()
  const editedNotes = notes.map(elem => {
    if (elem.id === id) return {title, id}
    else return elem
  })
  console.log(editedNotes)

  await saveNotes(editedNotes)
  console.log(chalk.bgGreen(`Note with id="${id}" was renamed!`))
}

>>>>>>> feature/WEbServer
async function getNotes() {
  const notes = await fs.readFile(notesPath, {encoding: 'utf-8'})
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}

async function saveNotes(notes) {
  await fs.writeFile(notesPath, JSON.stringify(notes))
}

async function printNotes() {
  const notes = await getNotes()

  console.log(chalk.bgBlue('Here is the list of notes:'))
  notes.forEach(note => {
    console.log(chalk.bgWhite(note.id), chalk.blue(note.title))
  })
}

async function removeNote(id) {
  const notes = await getNotes()

<<<<<<< HEAD
  const fNotes = notes.filter(note =>
    note.id !== id
  )
  await saveNotes(fNotes)
  console.log(chalk.bgBlue('Note successfully removed'))
}

module.exports = {
  addNote, printNotes, removeNote
}
=======
  const filtered = notes.filter(note => note.id !== id)

  await saveNotes(filtered)
  console.log(chalk.red(`Note with id="${id}" has been removed.`))
}

module.exports = {
  addNote, getNotes, removeNote, editNote
}
>>>>>>> feature/WEbServer
