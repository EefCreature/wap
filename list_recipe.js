
console.log("jsjs");

function display_items(less , less_id){
    document.getElementById(less_id).innerHTML = ``
    
    for (let i =0; i< less.length ; i++)
    {
        if (! less[i][0] ){
            less[i][0] = "Missing content"
        }
        let itm = document.getElementById(less_id);
        itm.innerHTML += `<div class="item-style" id="id_bot_${i}">
                        <a href="${less[i][2]}" class="item-title-style">
                        <img src="${less[i][1]}" alt="${less[i][1]}" width="100" class="item-image-style">
                        </a>
                        <a href="${less[i][2]}" class="item-title-style">
                             ${less[i][0]}
                        </a>
                        
                    </div>`;
    }
}

function txt(test,int){
    ts = ""
    for (let i = 0 ; i< int ; i++){
        ts += test[i]
    }
    return ts
}

function displayFilteredItems(){

    list = []
    for (let i = 0 ; i< recipe_less.length ; i++){
        if (txt(recipe_less [i][0],document.getElementById("searchInput").value.length) == document.getElementById("searchInput").value ){
            list.push (recipe_less[i]);
        }
        
    }
    
    
    display_items(list,"id_ducks")
}



display_items(recipe_less,"id_ducks")