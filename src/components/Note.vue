<template>
  <div :class="$style.noteContainer">
    <div :class="$style.formContainer">
        <form method="post" action="">
          <input v-model="note.title" type="text" name="title" value="note.title">
          <textarea v-model="note.body" name="body"></textarea>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    note: {
      type: Object,
      default() {
        return {
          title: 'note title',
          body: 'note body',
        }
      },
    },
  },
}
</script>

<style lang="scss" module>
@import '../assets/design/index.scss';

.noteContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  .formContainer {
    width: 100%;
    margin-bottom: 12px;
    textarea {
      min-height: 500px;
    }
    input,
    textarea {
      width: 100%;
      padding: 12px;
      margin-bottom: 12px;
      font-size: 37px;
      line-height: 2em;
      color: $color-text;
      background-color: rgba(#000, 0.2);
      border: 0 none;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
