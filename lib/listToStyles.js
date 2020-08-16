/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
export default function listToStyles (parentId, list) {
  // Get default export if list is an ES Module (CSS Loader v4+)
  list = list.__esModule ? list.default : list
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}
