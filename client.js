const axios = require('axios')

axios.post("http://localhost:3000/todo", {
  todo: "Learn react",
  done: true
}).then(response => {
  console.log(response.data)
}).catch(err => {
  console.log(err)
})

axios.get("http://localhost:3000/todo").then(response => {
  console.log(response.data)
}).catch(err => {
  console.log(err)
})
