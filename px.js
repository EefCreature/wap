
function display_items(less , less_id){
    
    
    for (let i =0; i< less.length && i < 5; i++)
    {
        if (! less[i][0] ){
            less[i][0] = "Missing content"
        }
        let itm = document.getElementById(less_id);
        itm.innerHTML += `<div class="cl_bot" id="id_bot_${i}">
                        <a href="${less[i][2]}" class="cl_bot">
                            <img src="${less[i][1]}" alt="${less[i][1]}" width="100" class="cl_bot"> ${less[i][0]}
                        </a>
                        
                    </div>`;
    }
}

//Missing content


display_items(ductless_less,"id_ductless")
display_items(recipe_less,"id_recipe_less")
