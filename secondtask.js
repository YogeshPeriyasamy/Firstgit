const createdtag= document.createElement('H3')
const line= document.createTextNode("Buy high quality organic fruits online")
createdtag.appendChild(line)
const firstdiv= document.getElementsByTagName("div")
const placetoinsert= firstdiv[0];
placetoinsert.appendChild(createdtag)
createdtag.id= 'firstsubheading';
document.getElementById(
              'firstsubheading').style.font = "italic"
const para= document.createElement("p")
const paragraph= document.createTextNode("Total fruits: 4")
para.appendChild(paragraph);
const seconddiv=  document.getElementsByTagName("div")
const toinsertpara= seconddiv[1];
const toinsertbefore= document.querySelector(".fruits")
toinsertpara.insertBefore(para,toinsertbefore)
para.id= 'fruits-total'
