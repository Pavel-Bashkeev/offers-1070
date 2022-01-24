window.addEventListener('DOMContentLoaded', () => {
  const lineWrapper = document.querySelectorAll('.remainder-decor')
  lineWrapper.forEach(item => {
    let countLine = item.dataset.countLine;
    let countAcitveLine = item.dataset.countActiveLine;
    createLine(countLine, countAcitveLine, item)
  })
  
})

function createLine(countLine, countActiveLine, wrapperLine) {
  for(let i = 0; i < countLine; i++){
    if(i < countActiveLine){
      wrapperLine.innerHTML += `
    <span class="remainder-decor__line accent-line db"></span>
    `
    }else{
      wrapperLine.innerHTML += `
    <span class="remainder-decor__line db"></span>
    `
    }
    
  }
}