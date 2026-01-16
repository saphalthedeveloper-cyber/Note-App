const notesContainer=document.querySelector(".container");
const notesButton=document.querySelector(".note-button");

let notes=document.querySelectorAll(".input-box");


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

function clickNotes(){
    notesButton.addEventListener("click",()=>{
        let inputBox=document.createElement("p");
         let img=document.createElement("img");
         inputBox.className="input-box";
         inputBox.setAttribute("contenteditable","true");
         img.src="images/delete.png";
         notesContainer.appendChild(inputBox).appendChild(img);
         updateStorage();
    })
}
clickNotes();

function deleteNotes(){
    notesContainer.addEventListener("click",function (e){
        if(e.target.tagName==="IMG"){
            e.target.parentElement.remove();
            updateStorage();
        }
        else if(e.target.tagName==="P"){
            notes=document.querySelectorAll(".input-box");
            notes.forEach(nt=> {
                nt.onkeyup=function(){
                    updateStorage();
                }
            })
        }
    })
}
deleteNotes();



document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

function loadNotes(){
    const savedNotes = localStorage.getItem("notes");
        notesContainer.innerHTML = savedNotes;
}
loadNotes();
