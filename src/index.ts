import 'reflect-metadata'

import * as echarts from 'echarts'
import * as fs from 'fs'

console.info('Generating SVG to example.svg...')

const chart = echarts.init(null, null, { renderer: 'svg', ssr: true, width: 400, height: 400 })
const option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [{ type: 'bar', data: [23, 24, 18, 25, 27, 28, 25] }]
}

chart.setOption(option)
const svgStr = chart.renderToSVGString()
chart.dispose()

fs.writeFileSync('example.svg', svgStr)

console.info('Done')
