<template>
  <div class="flex flex-col h-screen mt-10">
    <Header />
    <main class="flex-grow">
      <Tags />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Tags from '~/components/Tags.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Tags,
    Footer,
  },
  created() {},
  mounted() {},
}
</script>

<style></style>
