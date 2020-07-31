const http = require('http')
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const pathname = '127.0.0.1'
const port = '9000'

const fileName = '/fileServer/new'

const server = http.createServer(((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  switch (req.url) {
    case '/static':
      // 挂载静态展示页
      const indexHtml = fs.readFileSync(resolve('./client/index.html'), 'utf-8')

      res.end(indexHtml)

      break;
    case '/getData':
      // 取数据
      const data1 = fs.readFileSync(__dirname + '/fileServer/new_1579587463609.json')

      // const data2 = fs.readFileSync(__dirname + '/fileServer/new_1579486795145.json')

      // const data = {events: JSON.parse(data1).events.concat(JSON.parse(data2).events)}

      data = JSON.parse(data1)
      
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({
        code: 200,
        msg: 'success',
        data: {
          time: new Date().getTime(),
          fileFata: JSON.stringify(data)
        }
      }))

        // , (err, data) => {
        //   if (err) {
        //     res.writeHead(500, { 'Content-Type': 'application/json' })
        //     res.end(JSON.stringify({
        //       code: 500,
        //       msg: 'error'
        //     }))
        //   }

        //   res.writeHead(200, { 'Content-Type': 'application/json' })
        //   res.end(JSON.stringify({
        //     code: 200,
        //     msg: 'success',
        //     data: {
        //       time: new Date().getTime(),
        //       fileFata: data.toString()
        //     }
        //   }))
        // })

      break;
    case '/saveData':
      let postData = ''
      // 本地写入数据
      req.addListener('data', postDateChunk => {
        postData += postDateChunk
      })

      req.addListener('end', () => {
        // 写入json文件
        fs.writeFile(__dirname + fileName + '_' + new Date().getTime() + '.json', postData, 'utf-8', () => {
          res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
          res.end(JSON.stringify({
            code: 200,
            msg: 'success',
            data: {
              time: new Date().getTime()
            }
          }))
        })

      })
      break;
    default:
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
      res.end(JSON.stringify({
        code: 200,
        msg: 'success',
        data: {
          time: new Date().getTime()
        }
      }))
      break
  }

}))


server.listen(port, pathname, () => {
  console.log(`Server running at http://${pathname}:${port}`)
})