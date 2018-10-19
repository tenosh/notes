<template>
  <div>
    <h2>{{ title }}</h2>
    <div>
      <div v-for="(note, index) in getNotes" :key="note.id">
        <p>{{index + 1}}. {{note.title}}</p>
        <div>
          <span @click="editNote(note)">edit</span>
          <span @click="removeNote(note)">delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NoteList',
  props: {
    title: {
      type: String,
      default: 'Your Notes',
    },
  },
  computed: {
    ...mapGetters(['getNotes']),
  },
  methods: {
    editNote(note) {
      this.$router.push({
        name: 'edit',
        params: {
          title: note.title,
          body: note.body,
          id: note.id,
          new: false,
        },
      })
    },
    removeNote(note) {
      this.$store.commit('deleteNote', note)
    },
  },
}
</script>
