export const setHeaderHeight = (elem_name = 'header.header') => {
  const header_height = document?.querySelector(`${elem_name}`).offsetHeight
  document.querySelector(':root').style.setProperty('--header-height', `${header_height}`)
  return true
}
