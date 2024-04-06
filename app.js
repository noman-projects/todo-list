document.querySelector('#eraser').addEventListener('click',()=>{
    document.querySelector('#groceryItems').textContent = '';
})
document.querySelector('#user-input').addEventListener('keydown',(event)=>{
    if(event.key == 'Enter')
    addItem();
})

var addItem = ()=>{
    const item = document.createElement('h2')
    item.textContent = '-' + document.querySelector('#user-input').value
    item.addEventListener('click' , ()=>{
        if(item.style.textDecoration != 'line-through')
        item.style.textDecoration = 'line-through'
        else
            item.style.textDecoration = 'none';
        
    })
    document.querySelector("#groceryItems").appendChild(item);
    document.querySelector("#user-input").value = "";
}