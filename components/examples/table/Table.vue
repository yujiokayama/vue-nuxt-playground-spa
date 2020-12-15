<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>I</th>
          <th>B</th>
          <th>X</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>B</td>
          <td>C</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      },
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
