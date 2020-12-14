/**
 *
 * ・CRUD操作について
 *
 * ・REST APIとは
 * https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2
 *
 */

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
        .$get(url, { headers, params })
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
        'X-WRITE-API-KEY': process.env.WRITE_API_KEY,
        'Content-Type': 'application/json',
      }
      const body = {
        title: 'post test',
        content: 'testですよ',
        tags: ['CSS'],
      }
      const post = await $axios
        .$post(url, JSON.stringify(body), { headers })
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
