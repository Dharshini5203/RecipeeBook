//selecting popupbox and popupoverlay button
    
    var popupoverlay=document.querySelector(".popup-overlay")
    var popupbox=document.querySelector(".popup-box")
    var addpopupbutton=document.getElementById("add-popup")
     
    addpopupbutton.addEventListener("click",function(){
        popupoverlay.style.display="block"
        popupbox.style.display="block"
    })

    // selecting cancel button

    var canelButton = document.getElementById("cancel-popup")
    canelButton.addEventListener("click",function(event){
        event.preventDefault()
        popupoverlay.style.display="none"
        popupbox.style.display="none"

    })

    //selecting container,add-recipe,recipe-title-input,ingredients-name-input

    var container=document.querySelector(".container")
    var addrecpie=document.getElementById("add-recipe")
    var recipetitleinput=document.getElementById("recipe-name-input")
    var ingredienttitleinput=document.getElementById("ingredients-name-input") 
    var recipedescription=document.getElementById("recipe-description-input")
    addrecpie.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","recipe-container")
        div.innerHTML=`<h2>${recipetitleinput.value}</h2>
            <H5>${ingredienttitleinput.value}</H5>
            <p>${recipedescription.value}</p>
            <button onclick="deleterecipe(event)">Delete</button>` 
        container.append(div)
        popupoverlay.style.display="none"
        popupbox.style.display="none"
    })


    function deleterecipe(event)
    {
        event.target.parentElement.remove()
    }