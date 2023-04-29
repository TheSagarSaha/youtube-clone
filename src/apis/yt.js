import Axios from "axios"

const KEY = "AIzaSyCKHiXXusQs_2YtT-Qc0JHP0xCrQgIkrzE"

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 10,
    key: KEY
  }
}) 
