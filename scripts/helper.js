function elAdd(el, add){
  return getId(el).innerHTML = add;
}

function getId(id){
  return document.getElementById(id)
}

function addClickId(id, fn){
  getId(id).addEventListener('click', fn)
}

export {
  elAdd,
  getId,
  addClickId,
}