function setGameMenu(){
  import('../scripts/aggregator.js')
      .then(({elAdd, addClickId, setMenu, getId}) => {
        import('../menu/menu.css', {assert: {type:'css'}})
        .then(gameMenu => {
          const gameMenuHTML =
        `<div id="heading">Game Menu</div>
          <div id="menu">
            <div id="rainingGame">Growing Sounds</div>
            <div id="mainMenu"><b>Main Menu</b></b>
          </div>`
        
        elAdd('AppContent', gameMenuHTML)
        addClickId('mainMenu', setMenu)
         document.adoptedStyleSheets = [gameMenu.default]; 
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
  setGameMenu,
}
