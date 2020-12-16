<template>
  <div>
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>
<script>
import VueFroala from 'vue-froala-wysiwyg'
export default {
  components: {
    froala: VueFroala,
  },
  data() {
    return {
      config: {
        events: {
          initialized() {},
        },
      },
      model: 'ここに記入して下さい',
    }
  },
}
</script>

<style lang="scss" scoped></style>
