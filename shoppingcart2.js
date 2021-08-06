const items = document.querySelector('#item-list');

const shoppingCartContent = document.querySelector('#shoppping-cart')


///listeners 
loadEvenetListener();

function loadEvenetListener(){
    // new item is added 
    items.addEventListener('click' , buyItems)

    //to remove 
    shoppingCartContent.addEventListener('click' , removeItems)

    //
    document.addEventListener('DOMContentLoaded' , onload)
}


function buyItems(event){
    event.preventDefault(); 
 
    if(event.target.classList.contains('add-To-Cart')){
        // 
        // console.log(event.target.parentElement.parentElement)
        const item = event.target.parentElement.parentElement.parentElement;
        console.log(item)
        
        getItemInfo(item);
    }
}
function getItemInfo(item){
  
    const itemInfo = {
        image : item.querySelector('img').src,
        title : item.querySelector('h1').textContent,
        id : item.querySelector('button').getAttribute('data-id')
    }
    // console.log("courseIno" , courseInfo)

    addIntoCart(itemInfo);
   
}

function addIntoCart(item){
    
    const row = document.createElement('tr');

    row.innerHTML=`
    <td><img src="${item.image}" width=30></td>
    <td>${item.title}</td>
    <td>${item.price}></td>
    <button class="clearitem" data-id="${item.id}"> clear </button>
    `
    shoppingCartContent.appendChild(row); 

    //
    saveIntoStorage(item)
}


function removeItem(e){
    e.preventDefault();
    //check if the it contains class- clearitem 
    if(e.target.classList.contains('clearitem')){
        console.log(e.target.parentElement)
          //
     item = e.target.parentElement.parentElement
     courseId = item.querySelector('button').getAttribute('data-id')
  
     e.target.parentElement.remove()
     removeIteminfofromlocal(itemId)
    }
  
}

function removeIteminfofromlocal(itemId){

    
    // get the local storage data 
    let items = getItemsfromlocal(); 

    //loop array - find the id and remove  
    items.forEach((item, index)=>{
        if(item.id == itemId){
            items.splice(index, 1)
        }
    })
    // and update the local storage 
    localStorage.setItem('items' , JSON.stringify(items));
}





function saveIntoStorage(item){
    //clg
    console.log("c" , item )
    // first get the existing data from the localstorage
    let item = getItemsfromlocal();
    // push the new item - too the item 
    items.push(item)
    //set Item 
    localStorage.setItem('items' , JSON.stringify(items))
}

// ls - setItem - to add to storage 
// - getItem - to fetch from storage
// - removeItem - to removeItem
// it is an object - its stores the data in the key : value

function getItemsfromlocal(){
    let items; 
    //get Item 
    if(localStorage.getItem('items') === null ){
        return items = []
    }else{
        items = JSON.parse(localStorage.getItem('items'))
    }
    return items; 
}

// getItemsfromlocal()

    //
function onload(){
    let itemLS = getItemsfromlocal(); 
    console.log("onload " , itemLS)
    //loop through the array and generate the markup 

    itemLS.forEach(function(item){
        // 
        const row = document.createElement('tr');

        row.innerHTML=`
        <td><img src="${item.image}" width=30></td>
        <td>${item.title}</td>
        <td>${item.price}></td>
        <button class="clearitem" data-id="${item.id}" > clear </button>
        `
        shoppingCartContent.appendChild(row); 

    })
}