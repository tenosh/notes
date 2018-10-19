<template>
  <div>
    <div>
      <span @click="saveNote"> save </span>
      <span @click="cancel"> cancel </span>
    </div>
    <Note :note="noteParams"/>
  </div>
</template>

<script>
import Note from '@/components/Note.vue'
export default {
  name: 'note',
  components: {
    Note,
  },
  computed: {
    noteParams() {
      return this.$route.params
    },
  },
  methods: {
    saveNote() {
      const note = {
        title: this.$route.params.title,
        body: this.$route.params.body,
        id: this.$route.params.id,
      }
      if (this.$route.params.new) this.$store.commit('createNote', note)
      else this.$store.commit('updateNote', note)
      this.$router.push('/')
    },
    cancel() {
      this.$router.go(-1)
    },
  },
}
</script>
