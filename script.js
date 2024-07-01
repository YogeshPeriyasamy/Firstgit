const place=document.querySelectorAll(".fruit")
for(let i=0;i<place.length;i++)
  {
    place[i].innerHTML= place[i].innerHTML+'<button class="edit-btn">Edit</button>'
  }
const form= document.querySelector("form");
const fruits= document.querySelector(".fruits")
form.addEventListener('submit',function(event){
  event.preventDefault();
  const fruitstoadd= document.getElementById("fruit-to-add")
  const newfruit=document.createElement("li")
  const newfruitvalue= document.createTextNode(fruitstoadd.value)
  newfruit.appendChild(newfruitvalue);
  newfruit.className= 'fruit';
  const deletebutton= document.createElement('button')
  const deletetext= document.createTextNode('x');
  deletebutton.appendChild(deletetext);
  deletebutton.className="delete-btn"
   const insertbutton= document.createElement('button')
  const inserttext= document.createTextNode('Edit');
 insertbutton.appendChild(inserttext);
  newfruit.appendChild(deletebutton);
   newfruit.appendChild(insertbutton);
  fruits.appendChild(newfruit)
})
fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn'))
    {
      const fruittodelete= event.target.parentElement;
      fruits.removeChild(fruittodelete);
    }
  
})