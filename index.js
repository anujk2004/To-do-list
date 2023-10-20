let inputbox= document.getElementById("input-box")
let listcontainer= document.getElementById("listcontainer")
// let addbtn= document.getElementById("add-btn")
// let liel = document.querySelector(".checked")
// let inval=["ASD"]
// let liEl=[]
// const leElinternalstorage = JSON.parse(localStorage.getItem("liEL"));

function addItem(inputbox){
    let listitem= document.createElement("li")
    listitem.innerHTML= `${inputbox}<i></i>`

    listitem.addEventListener("click", function(){
        this.classList.toggle('done')
    })

    listitem.querySelector("i").addEventListener("click",function(){

        listitem.remove()
    })
    listcontainer.appendChild(listitem)

}

inputbox.addEventListener("keyup",function(event){

        if(event.key=="Enter"){
            if(inputbox.value==""){
                alert("Please write any task")
            }
            else{
                addItem(this.value)
                this.value=""
            }
            
        }
})

