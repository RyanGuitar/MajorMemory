function setNumberConvertor(){
  
  let convertorHTML = `
    <div id="headingBox">
      <div id="heading">Number Convertor<span id="x">x</span></div>
      <div id="desc">Enter numbers and then press enter to see associated images</div>
    </div>
    <div id="displayBox">
      <div id="numImages"></div>
      <div id="numbers">0</div>
      <div id="numCheck">0</div>
    </div>
    <div id="buttonBox"></div>
    `
  
import('../scripts/aggregator.js')
     .then(({elAdd, addClickId, getId, imageNum, setMenu}) => {
       
  import('./convertor.css', {assert: {type:'css'}})
    .then(convertor => {
   
     document.adoptedStyleSheets = [convertor.default];

     elAdd('AppContent', convertorHTML)
     
     function setButtons(){
       let buttonHTML = ''
       let buttonArray = [0,1,2,3,4,5,6,7,8,9]
       buttonArray.forEach(button => {
         buttonHTML += `<button>${button}</<button>`
       })
       elAdd('buttonBox', buttonHTML)
     }
     
     setButtons()
     
     let clicked = ''
     let numberList = ''
     let addImages = ''
     
     function getImage(){
       return imageNum.filter(({num}) => num == clicked)
     }
     
     function displayImage(image){
      addImages += `<img src=images/${image[0].name}.webp alt=${image[0].name}>`
      //console.log(image[0].name)
      elAdd('numImages', addImages)
      console.log(getId('numImages').children.length)
      
     }
     
     function updateNumbers(e){
       clicked += e.target.textContent
       elAdd('numCheck', clicked)
       if(clicked.length == 2){
         displayImage(getImage())
         numberList += clicked
         clicked = ''
         elAdd('numbers', numberList)
       } 
     }
     
     addClickId('buttonBox', updateNumbers)
     addClickId('x', setMenu)
       
     })
     .catch(err => {
       console.log(err.message);
     });
  })
  .catch(err => {
    console.log(err.message);
  });
}

export {setNumberConvertor}