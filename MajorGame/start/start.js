import {setMenu} from '../../scripts/aggregator.js'

function startMajorGame(){
    
  let filteredImages = ''
  let popped = ''
  let filteredCopy = []
  let shuffledSet = []
  let imagesHTML = ''
  let mode = true
  let step = 0;
        
  function elAdd(el, add){
    return getId(el).innerHTML = add;
  }
  
  function elAddText(el, add){
    return getId(el).textContent = add
  }

  function getId(id){
    return document.getElementById(id)
  }

  function addClickId(id, fn){
    getId(id).addEventListener('click', fn)
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
      return array
  }
  
  import('./start.css', {assert: {type:'css'}})
    .then(start => {
        
      const startHTML = 
        `<div id="container">
          <div id="header"></div>
          <div id="images"></div>
          <div id="controls"></div>
        </div>`
        
      let headerHTML = `
        <div id="headerBox">
          <div id="headerText">0</div>
          <span id="x">X<span>
        </div>`
        
      let controlHTML = `
        <button id="back">Back</button>
        <button id="mode">Mode</button>
        <button id="next">Next</button>`
            
      document.adoptedStyleSheets = [start.default];
  
      elAdd('AppContent', startHTML)
      elAdd('controls', controlHTML)
      elAdd('header', headerHTML)
  
  import('../data.js')
    .then(imageObj => {
      let {images} = imageObj
      
      function setFilteredImages(){
        filteredImages = images.filter(({type}) => type == step)
      }
      
      function copyShuffle(){
        filteredCopy = [...filteredImages]
        shuffledSet = shuffle(filteredCopy);
      }
          
      function addImageSet(){
        imagesHTML = ''
        setFilteredImages()
        filteredImages.forEach(({name, num}) => {                
          imagesHTML += `<img src='images/${name}.webp' class="stickers ${num}" alt='${name}' loading="lazy">`
        })
          elAdd('images', imagesHTML)
          copyShuffle()
      }
      
      function selectImage(){
       if(shuffledSet.length){
        popped = shuffledSet.pop()
        if(mode){
          elAddText('headerText', popped.num)
        } else {
          elAddText('headerText', popped.name)
        }
        } else {
          stepUp()
        }
      }
        
      function stepDown(){
        --step
        if(step == -1){
          step = 9 
        }
        addImageSet()
        selectImage()
      }
        
      function stepUp(){
        ++step
        if(step == 10){
          step = 0
        }
        addImageSet()
        selectImage()
      }
        
    function changeSet(pressed){
      if(pressed == 'back'){
        stepDown()
      }
      if(pressed == 'next'){
        stepUp()
      }
      if(pressed == 'mode'){
        changeMode()
      }
    }
        
    function checkMatch(e){
      if(e.target.tagName == 'IMG'){
          let clicked = e.target.classList[1]
        if(clicked == popped.num){
          e.target.classList.add('hide')
          selectImage()
        } else {
          alert('wrong')
        }
      }
    }
      
    function changeMode(){
      if(mode){
        getId('headerText').textContent = popped.name
        mode = false
      } else {
        getId('headerText').textContent = popped.num
        mode = true
      }
    }
      
    function gameInit(){
      addImageSet()
      selectImage()
      addClickId('controls', (e) => changeSet(e.target.id))
      addClickId('images', checkMatch)
    }
      
      gameInit()
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

export {
  startMajorGame,
}