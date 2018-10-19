<template>
  <div :class="$style.mainContainer">
    <NoteList :title="notesTitle"/>
    <div :class="$style.createButtonContainer"
        @click="createNote">
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

<style lang="scss" module>
@import '../assets/design/index.scss';
.mainContainer {
  display: block;
  width: 100%;
  .createButtonContainer {
    position: absolute;
    top: 12px;
    right: 12px;
    display: block;
    min-width: 100px;
    padding: 12px 12px;
    margin: 10px;
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
</style>
