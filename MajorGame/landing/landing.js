function setLandingMajorGame(){
import('../../scripts/aggregator.js')
    .then(({elAdd, addClickId, startMajorGame}) => {
      import('./landing.css', {assert: {type:'css'}})
      .then(landing => {
        const landingHTML =
      `<div id="landing">
        <div id="heading">Major Memory Game</div>
        <div id="start">click to start</div>
      </div>`

      elAdd('AppContent', landingHTML)
       addClickId('start', startMajorGame)
       document.adoptedStyleSheets = [landing.default]; 
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
  setLandingMajorGame,
}