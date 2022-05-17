const { getPostData } = require('../utils')
const { Task } = require('../../db/models')

class TaskController {
  async getTasks (req, res) {
    try {
      const tasks = await Task.findAll()

      res.end(JSON.stringify(tasks))
    } catch(err) {
      res.end(JSON.stringify(err))
    }
  }

  async createTask (req, res) {
    try {
      const body = await getPostData(req)

      if (!body.status && !body.list_id) {
        res.writeHead(400, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: 'Needed parameters are not specified to create task' }))
      }

      const task = await Task.create(body)

      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(task))
    } catch(err) {
      res.end(JSON.stringify(err))
    }
  }

  async updateStatus (req, res) {
    try {
      const id = req.url.split('/')[3]
      const task = await Task.findOne({ where: { id: id} })

      if (!task) {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: 'Task does not found' }))
      }

      const body = await getPostData(req)

      await task.update({ status: body.status })

      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(task))
    } catch(err) {
      res.end(JSON.stringify(err))
    }
  }

  async updateNumber (req, res) {
    try {
      const id = req.url.split('/')[3]
      const task = await Task.findOne({ where: { id: id} })

      if (!task) {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: 'Task does not found' }))
      }

      const body = await getPostData(req)
      console.log
      await task.update({ number: body.number })

      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(task))
    } catch(err) {
      res.end(JSON.stringify(err))
    }
  }
}

module.exports = TaskController
