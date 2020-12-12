export default function ({ $axios }, inject) {
  const url = `https://ys-note.microcms.io/api/v1/post`
  const api = {
    /**
     * Get
     * @param url string
     * @param params object
     */
    async getAPI() {
      const headers = {
        'X-API-KEY': process.env.API_KEY,
        'Content-Type': 'application/json',
      }
      const params = {
        filters: 'title[contains]非同期処理',
      }
      const response = await $axios
        .get(url, { headers, params })
        .catch((error) => {
          return error
        })
      return response
    },
    /**
     * Post
     * @param url string
     * @param body object
     * @param header object
     */
    async postAPI() {
      const headers = {
        'X-WRITE-API-KEY': '0d37c00f-04a6-4325-be02-553017669a5c',
        'Content-Type': 'application/json',
      }
      const body = {
        title: 'post test',
      }
      const post = await $axios
        .post(url, JSON.stringify(body), { headers })
        .catch((error) => {
          return error
        })
      return post
    },
    /**
     * Put
     */

    /**
     * Patch
     */

    /**
     * Delete
     */
  }
  inject('api', api)
}
