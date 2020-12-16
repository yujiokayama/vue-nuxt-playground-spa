<template>
  <div>
    <Editor :api-key="apikey" :initialValue="initialValue" :init="init" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      apikey: 'd65wg0ri0htywl7ebkmyujocziknbn6nlou8jic3o7j2m9ss',
      init: {
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
      initialValue: '<p>This is the initial content of the editor</p>',
    }
  },
}
</script>

<style lang="scss" scoped></style>
