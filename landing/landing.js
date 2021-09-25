function setLanding(){
  import('./landing.css', {assert: {type:'css'}})
    .then(landing => {
      
     document.adoptedStyleSheets = [landing.default]; 
    
  import('../menu/menu.js')
    .then(({setMenu}) => {

  function elAdd(el, add){
    return getId(el).innerHTML = add;
  }
  
  function getId(id){
    return document.getElementById(id)
  }
  
  function addClickId(id, fn){
    getId(id).addEventListener('click', fn)
  }

  const landingHTML =
    `<div id="landing">
        <div id="heading">Major Memory System</div>
        <div id="start">click to start learning</div>
      </div>`
     
      elAdd('AppContent', landingHTML)
      addClickId('landing', setMenu);
  })   
  .catch(err => {
    console.log(err.message);
  });
  }).catch(err => {
    console.log(err.message);
  });
}

export {
  setLanding,
}