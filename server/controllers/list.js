const { getPostData } = require('../utils')
const { List } = require('../../db/models')

class ListController {
  async getLists (req, res) {
    try {
      const lists = await List.findAll()

      res.end(JSON.stringify(lists))
    } catch(err) {
      res.end(JSON.stringify(err))
    }
  }

  async createList (req, res) {
    try {
      const body = await getPostData(req)
      const list = await List.create(body)

      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(list))
    } catch(err) {
      res.end(JSON.stringify(err))
    }
  }
}

module.exports = ListController
