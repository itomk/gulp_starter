import { throttle } from '../functions/throttle.js'

const setHeaderHeight = (elem_name = 'header.header') => {
  let headerHeight = parseFloat(document?.querySelector(`${elem_name}`).offsetHeight.toFixed(2))

  let headerHeightChange = document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`)
  throttle(headerHeightChange)
}

const headerHeightOnResize = () => {
  setHeaderHeight()
  window.addEventListener('resize', () => setHeaderHeight())
}

export { headerHeightOnResize }
