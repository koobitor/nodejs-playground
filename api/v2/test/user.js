const router = express.Router()
const path = require('path')
  .resolve(__dirname)
  .replace(appRoot, '')
const download = require('../../../libs/download')

/**
 * Read
 * GET /api/v2/test/user
 */
router.get(path + '/user', async (req, res) => {
  const data = [
    {
      'First Name': 'Sakol',
      lastname: 'Assawasagool',
      phone: '081-234-5678',
      email: 'koobitor@gmail.com',
    },
  ]

  const xl = require('excel4node')
  const wb = new xl.Workbook()
  const ws = wb.addWorksheet('Employee')

  res.json(wb)

  // Create a reusable style
  // const style = wb.createStyle({
  //   font: {
  //     color: '#FFFFFF',
  //     size: 20,
  //   },
  //   fill: {
  //     type: 'pattern',
  //     patternType: 'solid',
  //     fgColor: '#FF0800',
  //   },
  // })

  // data.forEach((item, i) => {
  //   let temp = item
  //   if (i == 0) {
  //     Object.keys(temp).forEach((word, j) => {
  //       ws.cell(i + 1, j + 1).string(word + '')
  //     })
  //   }
  //   Object.keys(temp).forEach((word, j) => {
  //     ws.cell(i + 2, j + 1)
  //       .string(temp[word] + '')
  //       .style(style)
  //   })
  // })

  // const name = Date.now() + '.xlsx'
  // const path = 'uploads/exports/' + name

  // wb.write(path, (err, stats) => {
  //   if (err) console.error(err)
  //   const file = appRoot + '/' + path
  //   res.download(file)
  // })

  // download.excelArray(res, data)
  // const pond = await sequelize
  //   .query('SELECT * FROM `users`', { type: sequelize.QueryTypes.SELECT })
  //   .then((pond) => pond)
  // // let output = []
  // // pond.forEach((item) => {
  // //   setTimeout(() => {
  // //     output.push(item.name)
  // //   }, 100)
  // // })
  // let promises = []
  // pond.forEach((item) => {
  //   promises.push(
  //     new Promise((resolve) => {
  //       resolve(item.id)
  //     }),
  //   )
  // })
  // Promise.all(promises).then((result) => {
  //   res.json(result)
  // })
  // const company_id = 1
  // models.employee_position
  //   .findAll({
  //     include: [
  //       {
  //         model: models.company,
  //         as: 'company',
  //         attributes: ['id', 'name_en', 'name_th'],
  //       },
  //     ],
  //   })
  //   .then((result) => {
  //     res.status(200).json(result)
  //   })
  //   .catch((error) => {
  //     res.status(400).json(error)
  //   })
})

module.exports = router
