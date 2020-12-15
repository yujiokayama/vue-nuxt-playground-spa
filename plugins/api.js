export default function ({ $axios }, inject) {
  const api = {
    /**
     * Get
     * @param {url} string URI
     * @param {params} object クエリ
     */
    async getAPI(url, params) {
      const headers = {
        'X-API-KEY': process.env.API_KEY,
        'Content-Type': 'application/json',
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
     * @param {url} string
     * @param {body} object
     * @param {header} object
     */
    async postAPI(url) {
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
