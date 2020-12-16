<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>企業名</th>
          <th>電話番号</th>
          <th>住所</th>
          <th>業種</th>
          <th>従業員規模</th>
          <th>資本金</th>
          <th>タグ</th>
          <th></th>
          <th>設定</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="content in contents" :key="content.id">
          <td>{{ content.companyName }}</td>
          <td>{{ content.phone }}</td>
          <td>{{ content.address }}</td>
          <td>{{ content.jobType }}</td>
          <td>{{ content.employeeSize }}</td>

          <td>{{ content.capital }}</td>
          <td>{{ content.tag }}</td>
          <td></td>
          <td>{{ content.settings }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
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
