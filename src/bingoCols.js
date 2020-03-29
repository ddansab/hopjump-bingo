import _ from "lodash"

let bCol = _.sampleSize(_.range(1, 15), 5)
let iCol = _.sampleSize(_.range(16, 30), 5)
let nCol = _.sampleSize(_.range(31, 45), 5)
let gCol = _.sampleSize(_.range(46, 60), 5)
let oCol = _.sampleSize(_.range(61, 75), 5)

_.fill(nCol, "FREE", 2, 3)

export const bingoCols = [bCol, iCol, nCol, gCol, oCol]
