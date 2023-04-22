export default function useFetch() {
const baseUrl = 'http://localhost:3002'//'https://art-gallery-marketplace.vercel.app/'

  return {
    get: async endpoint => {
      try {
        const res = await fetch(baseUrl + endpoint)
        return await res.json()
      } catch (err) {
        return err
      }
    },
    post: async (endpoint, body) => {
      const res = await fetch(baseUrl+endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      return await res.json()
    }
  }
}