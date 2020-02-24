const axios = require('axios')

exports.index = async (req, res) => {
  axios.get(`https://api.github.com/users/${req.user}`).then(response => {
    res.status(200).json(response.data)
  })
}