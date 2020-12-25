<template>
  <div>
    <div v-html="editorValue"></div>
    <editor
      v-model="editorValue"
      ref="editor"
      :api-key="apikey"
      :initialValue="initialValue"
      :init="init"
    ></editor>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    editor: Editor,
  },
  data() {
    return {
      editorValue: '',
      apikey: 'd65wg0ri0htywl7ebkmyujocziknbn6nlou8jic3o7j2m9ss',
      init: {
        language: 'ja',
        height: 500,
        menubar: false,
        table_toolbar: [
          'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
        ],
        plugins: [
          'print preview fullpage importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars  emoticons',
        ],
        toolbar: [
          'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help table',
        ],
      },
      initialValue: '日本語対応可のエディタ',
    }
  },
}
</script>

<style lang="scss" scoped></style>
