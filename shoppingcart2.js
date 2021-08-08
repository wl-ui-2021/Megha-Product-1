const items = document.querySelector('#item-list');

const shoppingCartContent = document.getElementById("cart-content");


///listeners 
loadEvenetListener();

function loadEvenetListener(){
    // new item is added 
    items.addEventListener('click' , buyitem)

    //to remove 
    shoppingCartContent.addEventListener('click' , removeitem)

    //
    document.addEventListener('DOMContentLoaded' , onload)
}
function buyitem(event){
    event.preventDefault(); 
    console.log('clicked anywhere on the div')
    // target - html elements - dom -
    //if event target element- contains the class - add-to-cart 
    // - true - 
    //access the parent elemenet - event.target.parentElement 
    if(event.target.classList.contains(' add-To-Cart')){
        // 
        // console.log(event.target.parentElement.parentElement)
        const item = event.target;

        console.log(item)
        
        getItemInfo(item);
    }
}
function getItemInfo(item){
    // console.log("elem",item)
    //create an object with the item data 
    

    const itemInfo = {
        image : $(item).parent().find('img').attr('src'),
       // title : item.querySelector('h1').textContent,
        id : $(item).attr('data-id')
    }
   //  console.log("courseIno" , courseInfo)
console.log(itemInfo);
    addIntoCart(itemInfo);
}
function addIntoCart(item){
    // console.log("cou" , item); 
    //build html template 
    //   <a class="dropdown-item" href="#">Action</a>
    //                 <a class="dropdown-item" href="#">Another action</a>
    //                 <a class="dropdown-item" href="#">Something else here</a>
    const a = document.createElement('a');
    a.classList.add("dropdown-item");
    a.innerHTML=`
    <td><img src="${item.image}" width=30></td>
 
    <button class="clearitem" data-id="${item.id}"> clear </button>
    `
    shoppingCartContent.appendChild(a); 
    saveIntoStorage(item);
}

function removeitem(e){
    e.preventDefault();
    //check if the it contains class- clearitem 
    if(e.target.classList.contains('clearitem')){
        console.log(e.target.parentElement)
          //
     item = e.target.parentElement.parentElement
     itemId = item.querySelector('button').getAttribute('data-id')
  
     e.target.parentElement.remove()
     removeiteminfofromlocal(itemId)
    }
  
}
function removeiteminfofromlocal(itemId){
    console.log("item from loca", itemId )
    
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
    let items = getItemsfromlocal();
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
        console.log("items---------------------------------------");
        console.log(items);
        console.log("items---------------------------------------");
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

            console.log(item.image); 
            const row = document.createElement('tr');
    // <td><img src="${item.image}" width=30></td>
            row.innerHTML=`
           
            <td>${item.image}</td>
           
            <button class="clearitem" data-id="${item.id}" > clear </button>
            `
            shoppingCartContent.appendChild(row); 
    
        })
    }
