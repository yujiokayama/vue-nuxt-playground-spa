export default function ({ $axios }, inject) {
  const api = new API($axios)
  inject('api', api)
}

class API {
  constructor(axios) {
    this.axios = axios
  }

  /**
   * Get
   * @param url string
   * @param params object
   */
  async getAPI() {
    const url = 'https://ys-note.microcms.io/api/v1/post'
    const response = await this.axios
      .get(url, {
        headers: { 'X-API-KEY': process.env.API_KEY },
      })
      .catch((error) => {
        return error
      })
    return response
  }
}

/**
 * Post
 */

/**
 * Put
 */

/**
 * Patch
 */

/**
 * Delete
 */
