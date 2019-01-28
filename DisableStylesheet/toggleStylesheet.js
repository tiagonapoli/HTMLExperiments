const toggleStylesheet = function(name) {
  console.log(document.styleSheets) 
  for(let i=0;i<document.styleSheets.length;i++) {
    if (document.styleSheets[i].href.includes(name)) {
      document.styleSheets[i].disabled ^= 1 
      console.log(document.styleSheets[i].href, document.styleSheets[i].disabled) 
    }
  }
  console.log(document.styleSheets)
  console.log('-----------------------------------------------')
}