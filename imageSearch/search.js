function setImageSearch(){
  
  function elAdd(el, add){
    return getId(el).innerHTML = add;
  }

  function getId(id){
    return document.getElementById(id)
  }

  function addClickId(id, fn){
    getId(id).addEventListener('click', fn)
  }
  
  import('../scripts/aggregator.js')
     .then(({setMenu, images}) => {
       
    let searchHTML = `
      <input id="searchBar" type="text" placeholder="Search number or name ...">
      <div id="list"></div>
      <div id="back">Back</div>
      `
       
  import('./search.css', {assert: {type:'css'}})
      .then(searchCSS => {
        
        document.adoptedStyleSheets = [searchCSS.default]; 
        elAdd('AppContent', searchHTML)

        let dataList = ''
        
        function setCards(cardData){
          dataList = ''
          cardData.forEach(({name, num, desc}) => {
            dataList += `
            <div id="card">
              <div id="callSign">
                <div>${num}</div>
                <div>${name}</div>
              </div>
              <div id="imageContainer">
                <img src="images/${name}.webp" alt=${name} loading="lazy">
              </div>
              <div id="description"></div>
            </div>`
          })
          return dataList
        }
        
      addClickId('back', setMenu)

      function checkSearch({search}){
        let input = getId('searchBar')
        return search.includes(input.value)
      }

      function imagesFilter() {
        let list  = setCards(images.filter(checkSearch))
        elAdd('list', list)
      }

      getId('searchBar').addEventListener('keyup', imagesFilter)

      setCards(images)
      elAdd('list', dataList)

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
  setImageSearch,
}