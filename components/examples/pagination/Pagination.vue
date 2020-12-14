<template>
  <div></div>
</template>

<script>
/**
 * 構築方法を考える
 */

/*
■MOCK JSONをどう作るか

■propsに何を持たせるか

■ライブラリも検討する


*/

export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      },
      required: false,
      parPage: {
        type: Number,
        default: 10,
        required: false,
      },
      currentPaga: {
        type: Number,
        default: 1,
        required: false,
      },
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
