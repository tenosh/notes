<template>
  <div :class="$style.noteContainer">
    <div :class="$style.buttonsContainer">
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

<style lang="scss" module>
@import '../assets/design/index.scss';
.noteContainer {
  display: block;
  width: 100%;
  height: 100vh;
  background-color: $primary-color;
  .buttonsContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 12px;
    span {
      display: inline-block;
      min-width: 100px;
      padding: 12px 12px;
      margin-right: 7px;
      overflow: hidden;
      font-size: 13px;
      font-weight: 500;
      line-height: 1.3;
      color: $color-text;
      text-align: center;
      text-decoration: none !important;
      text-transform: capitalize;
      white-space: nowrap;
      cursor: pointer;
      user-select: none;
      background: #161616;
      border: 0 none;
      border-radius: 2px;
      appearance: none;
      &:hover {
        opacity: 0.85;
        transition: all 150ms linear;
      }
      &:active {
        opacity: 0.55;
        transition: all 150ms linear;
      }
      &:focus {
        outline: 1px dotted #959595;
        outline-offset: -4px;
      }
    }
  }
}
</style>
