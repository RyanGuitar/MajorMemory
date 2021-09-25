function setMenu(){
  import('../scripts/aggregator.js')
    .then(({elAdd, addClickId, setIntroduction, setSounds1, setBasics, setSounds2, setLandingMajorGame, setImageSearch, setNumberConvertor}) => {
      import('./menu.css', {assert: {type:'css'}})
      .then(menu => {
        const menuHTML = 
        `<div id="heading">Main Menu</div>
        <div id="menu">
          <div id="introduction">Introduction</div>
          <div id="basics">The Basics</div>
          <div id="sounds1">Sounds 0 - 4</div>
          <div id="sounds2">Sounds 5 - 9</div>
          <div id="numberConvertor">Number Convertor</div>
          <div id="imageSearch">Image Search</div>
          <div id="gameMenu"><b>Major Game</b></div>
        </div>`

       elAdd('AppContent', menuHTML)
       addClickId('introduction', setIntroduction)
       addClickId('basics', setBasics)
       addClickId('sounds1', setSounds1)
       addClickId('sounds2', setSounds2)
       addClickId('numberConvertor', setNumberConvertor)
       addClickId('gameMenu', setLandingMajorGame)
       addClickId('imageSearch', setImageSearch)
       document.adoptedStyleSheets = [menu.default]; 
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
  setMenu,
}