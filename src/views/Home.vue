<template>
  <div>
    <NoteList :title="notesTitle"/>
    <div @click="createNote">
        new
    </div>
  </div>
</template>

<script>
import NoteList from '@/components/NoteList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    NoteList,
  },
  computed: {
    notesTitle() {
      if (this.notesCount > 0) return `you have ${this.notesCount} notes`
      else return 'create a new note to get started'
    },
    ...mapGetters({
      notesCount: 'totalNotes',
    }),
  },
  methods: {
    createNote() {
      this.$router.push({
        name: 'edit',
        params: {
          title: 'Your note title',
          body: 'Your note content',
          id: null,
          new: true,
        },
      })
    },
  },
}
</script>
