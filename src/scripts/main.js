import { headerHeightOnResize } from './blocks/header.js'
import { vhSetFix } from './functions/vh-fix.js'

window.addEventListener('DOMContentLoaded', () => {
  headerHeightOnResize() // CSS перемен. '--header-height' в HTML
  vhSetFix() // CSS перемен. '--vh'px = 1vh

  window.addEventListener('load', () => { return true })
})
