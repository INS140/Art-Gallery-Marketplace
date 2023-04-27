export default function useFetch() {
const baseUrl = 'https://art-gallery-marketplace.vercel.app'

  return {
    get: async endpoint => {
      try {
        const res = await fetch(baseUrl+endpoint)
        return await res.json()
      } catch (err) {
        return err
      }
    },
    post: async (endpoint, body) => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
        return await res.json()
      } catch (err) {
        return err
      }
    },
    put: async (endpoint, body) => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
        return await res.json()
      } catch (err) {
        return err
      }
    },
    remove: async endpoint => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          method: 'DELETE'
        })
        return await res.json()
      } catch (err) {
        return err
      }
    }
  }
}