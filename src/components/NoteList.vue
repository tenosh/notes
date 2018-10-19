<template>
  <div :class="$style.notesContainer">
    <h2>{{ title }}</h2>
    <div :class="$style.noteList">
      <div :class="$style.note" v-for="(note, index) in getNotes" :key="note.id">
        <p>{{index + 1}}. {{note.title}}</p>
        <div :class="$style.edit">
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

<style lang="scss" module>
@import '../assets/design/index.scss';
.notesContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 50%;
  padding: 3em 0;
  h2 {
    margin: 12px 0;
    text-align: center;
    text-transform: uppercase;
  }
  .noteList {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 2em 0;
    .note {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      width: 90%;
      padding: 3em 0;
      margin: 7px 0;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.3;
      background-color: rgba(#000, 0.2);
      border-radius: 2px;
      p {
        padding: 0;
        margin: 0;
      }
      .edit {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
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
  }
}
</style>
