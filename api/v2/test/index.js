const router = express.Router()
const path = require('path')
  .resolve(__dirname)
  .replace(appRoot, '')

/**
 * GET /api/v2/test
 */
router.get(path + '/', (req, res) => {
  models.go
    .findAll()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      res.status(400).json(error)
    })
})

/**
 * POST /api/v2/test
 * @param body
 */
router.post(path + '/', (req, res) => {
  models.go
    .create(req.body)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      res.status(400).json(error)
    })
})

/**
 * PUT /api/v2/test
 * @param body
 */
router.put(path + '/', (req, res) => {
  const id = req.body.id
  delete req.body.id
  models.go
    .update(req.body, {
      where: {
        id: id,
      },
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      res.status(400).json(error)
    })
})

/**
 * DEL /api/v2/test/:id
 */
router.delete(path + '/:id', (req, res) => {
  models.go
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((error) => {
      res.status(400).json(error)
    })
})

module.exports = router
