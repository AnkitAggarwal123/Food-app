const recipe = document.getElementById("search-input");
const search = document.getElementById("search-button");
const searchResult = document.querySelector(".result");
const recipename = document.querySelector(".input-name");


search.addEventListener("click" , (e) =>{

    searchResult.innerHTML = "";
    

    e.preventDefault();
    data(recipe.value);
    
}) 


const data = async (recipe) =>{

    recipename.innerHTML= ": "+recipe;
    try{
    const res = await fetch("https://forkify-api.herokuapp.com/api/search?q="+recipe);

    if(!res.ok){
        throw new Error("response is not good");
    }

    const jsonData = await res.json();
    const recipeData = jsonData.recipes;
    console.log(recipeData);
    showCards(recipeData);
 }catch(err){
    console.log(err);
 }

}

let showCards=(res)=>{
    res.forEach(element =>{

        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card" >
        <img src=${element.image_url} style="width:290px" id="img">
        <h1 class="upper-text">${element.title}</h1>
        <h4 class="lower-text">${element.publisher}</h4>
        
        <div>
            <a id="btndetail" role = "button" href = "index1.html?id=${element.recipe_id}">Details</a>
            <a role="button" href=${element.source_url} target="_blank" id="btnrecipe">Recipe URL</a>
        </div>
       </div>

        `
        searchResult.appendChild(div);
        
    })
}



{/* <div>
<div class="card">
<img src=${element.image_url}>  
</div>
<div class = "content">${element.title}</div>
<h4 class = "brand">${element.publisher}</h4>
<div class = "all-buttons">
<a class = "detail" role = "button" href = "index1.html?id=${element.recipe_id}">Details</a>
<a class = "recipebutton" role = "button" href = ${element.source_url} target="_blank" >Recipe Url</a>
</div>
</div> */}




// const ingredient = async(id) =>{

//     const 

// }

// const a = (res) =>{

//     const ingredient = fetch("https://forkify-api.herokuapp.com/api/get?rId="+res);

// }

// const detail = document.querySelectorAll(".detail");

// detail.addEventListener("click", () =>{

// })

// document.addEventListener("DOMContentLoaded", function() {
//     var detailsElements = document.querySelectorAll('.detail');
    
//     detailsElements.forEach(function(detailsElement) {
//       detailsElement.addEventListener('click', function() {
//         // Do something with the clicked details element
//         console.log("Clicked on:", detailsElement);
//       });
//     });
//   });