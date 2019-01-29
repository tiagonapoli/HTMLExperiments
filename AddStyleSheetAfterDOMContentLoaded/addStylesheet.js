const addStylesheet = function(name) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = name
  document.body.appendChild(link)
}

const addClass = function(tagId, className) {
  const element = document.getElementById(tagId)
  element.classList.add(className)
}