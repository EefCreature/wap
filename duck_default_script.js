

for (let i =0; i< recipe_less.length ; i++){
    console.log(recipe_less[i][3],document.getElementById("title").innerHTML);
    lst = document.getElementById("list_recipes") ;
    if (document.getElementById("title").innerHTML == recipe_less[i][3]){
        console.log(true,lst);
        lst.innerHTML +=`
        <a href="${recipe_less[i][2]}">- ${recipe_less[i][0]}</a>
        `;
        
    }
    
}