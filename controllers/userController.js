const axios = require('axios')

exports.index = (req, res) => {
  return axios.get(`https://api.github.com/users/${req.params.user}`).then(response => {
    res.status(200).json(response.data)
  })
}

exports.repos = (req, res) => {
  return axios.get(`https://api.github.com/users/${req.params.user}/repos`).then(response => {
    res.status(200).json(response.data)
  })
}