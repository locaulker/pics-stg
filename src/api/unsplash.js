import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID RGmyvMk5480G69BQNpR26l55sKhNI5LP7krMwcBrhJE",
  },
})
