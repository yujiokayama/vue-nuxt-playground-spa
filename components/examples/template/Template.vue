<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
export default {
  props: {
    test: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
