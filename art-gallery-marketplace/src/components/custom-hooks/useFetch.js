export default function useFetch() {
const baseUrl = 'https://art-gallery-marketplace.vercel.app/'

  return {
    get: async endpoint => {
      try {
        const res = await fetch(baseUrl + endpoint)
        const data = await res.json()
        return data
      } catch (err) {
        return err
      }
    },
    post: async (endpoint, body) => {
      try {
        const res = await fetch(baseUrl + endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
        const data = res.json()
        return data
      } catch (err) {
        return err
      }
    }
  }
}