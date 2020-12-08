<template>
  <div class="flex flex-col items-center">
    <nav>
      <nuxt-link to="/"><Logo /></nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    data: {
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
