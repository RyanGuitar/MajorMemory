function setRainGame(){
    import('../../../scripts/aggregator.js')
      .then(({addClickId, elAdd, getId, rainData, setMenu}) => {
        import('./game.css', {assert: {type:'css'}})
        .then(rainGame => {
          let score = 0;
          let time = 2000
          let rainGameHTML = `<div id="score">score : <span id="newScore">0</span><span id="x">x</span></div><div id="sounds"></div><div id="buttons"></div>`
          let sound = ''
          let timer = ''
          let soundsChildren = ''

          elAdd('AppContent', rainGameHTML)
    
        function addToSoundArray(){
          soundsChildren = getId('sounds')
          if(soundsChildren){
            soundsChildren = soundsChildren.children.length
          } else {
            return
          }

            if(soundsChildren < 20){
              let randomSound = Math.floor(Math.random() * 16)
              let addedSounds = document.getElementById('sounds').innerHTML
              let addSound = `<div class='${rainData[randomSound][1]}' style="margin-left:${Math.floor(Math.random() * 90)}%;">${rainData[randomSound][0]}</div>` 
              let soundGroup = addSound + addedSounds
              getId('sounds').innerHTML = soundGroup
              clearTimeout(timer)
              timer = setTimeout(addToSoundArray, time)
            } 
        
        }

        addToSoundArray()

         function removeSound(){
          sound = getId('sounds').children 
          sound[sound.length - 1].remove()
         }
          
         function checkSound(e){
            sound = getId('sounds').children
            if(sound[sound.length - 1].className == e.target.id[1]){
              removeSound()
              score = score + 5
              document.getElementById('newScore').textContent = score;
            } else {
              score = score - 5
              document.getElementById('newScore').textContent = score;
            }
          }

          let buttonArray = [0,1,2,3,4,5,6,7,8,9]
          
          function setButtons(){
              let buttons = ''
              for (let i = 0;i < buttonArray.length;i++){
                buttons += `<button id="b${buttonArray[i]}">${buttonArray[i]}</button>`
              }

              getId('buttons').innerHTML = buttons
              let buttonChildren = getId('buttons').children

              for(let i = 0;i < buttonChildren.length;i++){
                  buttonChildren[i].addEventListener('click', (e) => checkSound(e))
              }
          }

         function returnToMenu(){
            soundsChildren = ''
            clearTimeout('timer')
            elAdd('AppContent', '')
            setMenu()
          }
          
          setButtons()
          addClickId('x', returnToMenu)

           document.adoptedStyleSheets = [rainGame.default]; 
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
    setRainGame,
  }