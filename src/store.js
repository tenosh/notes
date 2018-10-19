import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getters = {
  getNotes: state => {
    return state.notes
  },
  totalNotes: (state, getters) => {
    return getters.getNotes.length
  },
}

const mutations = {
  // Load saved notes on localStorage
  init(state) {
    state.notes = getSavedNotes('notesArray') || []
  },
  // Create note / update state & localStorage with the new note
  createNote(state, payload) {
    const uniqueID = Math.floor((1 + Math.random()) * 0x10000) // add "unique" id to the object and keep track of it
      .toString(16)
      .substring(1)
    payload.id = uniqueID
    state.notes.push(payload)
    saveNotes('notesArray', state.notes)
  },
  // Update note / update state & localStorge with the new value
  updateNote(state, payload) {
    let notes = getSavedNotes('notesArray')
    for (let note of notes) {
      if (note.id === payload.id) {
        note.title = payload.title
        note.body = payload.body
        break
      }
    }
    state.notes = notes
    saveNotes('notesArray', state.notes)
  },
  // Delete note / update state & localStorage with the object already removed
  deleteNote(state, payload) {
    let notes = getSavedNotes('notesArray')
    for (const note of notes) {
      if (note.id === payload.id) {
        const index = notes.indexOf(note)
        notes.splice(index, 1)
        break
      }
    }
    state.notes = notes
    saveNotes('notesArray', state.notes)
  },
}

// ===
// Private helpers
// ===

function getSavedNotes(key) {
  return JSON.parse(window.localStorage.getItem(key))
}

function saveNotes(key, notes) {
  window.localStorage.setItem(key, JSON.stringify(notes))
}

export default new Vuex.Store({
  state: {
    notes: [],
  },
  getters,
  mutations,
  actions: {},
})
