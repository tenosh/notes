<template>
  <div>
    <div>
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
