const searchBtn = document.getElementById('search-btn');
//search for input 
searchBtn.addEventListener('click', function () {
    const input = document.getElementById('search-input');

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
        .then(res => res.json())
        .then(data => displayMenu(data.meals));


    document.getElementById('menus').innerHTML = '';
    document.getElementById('menuDetail').innerHTML = '';


})
// meals function
const displayMenu = menus => {
    // console.log(menus);
    const menusDiv = document.getElementById("menus");
    const input = document.getElementById('search-input').value;

    if (menus == input) {
        const alertDiv = document.getElementById('alert-div');
        
        alertDiv.className = 'alert';

        const alertInfo = ` 
             <h1 class=""> ${menu}</h1>
             <p>NOT FOUND</p>
             
         `;
         
        const alertsDiv = document.createElement('div');
        alertDiv.innerHTML = alertInfo;
        alertDiv.appendChild(alertsDiv);

    }
    else {
        menus.forEach(menu => {

            const menuDiv = document.createElement('div');
            menuDiv.className = 'menu';

            const menuInfo = ` 
             <img  src='${menu.strMealThumb}'>
             <h1 class=""> ${menu.strMeal}</h1>
         `;

            menuDiv.innerHTML = menuInfo;
            menusDiv.appendChild(menuDiv);
            menuDiv.onclick = () => {
                displayMenuDetails(`${menu.strMeal}`);
                document.getElementById('menuDetail').innerHTML = '';
            };
        }
        );
    }

}
//ingredient valu input function fetch
const displayMenuDetails = name => {
    // console.log(name);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())

        .then(data => renderMenuInfo(data.meals[0]));



}
//ingradient function
const renderMenuInfo = menu => {
    console.log(menu);
    const menuDiv = document.getElementById('menuDetail');
    const ingredients = `
    <img  src='${menu.strMealThumb}'>
    <h1>${menu.strMeal}</h1>
    <h3> Ingredient</h3>
    <ul class="gradients-list">
    <li class="item-list">${menu.strIngredient1}</li>
    <li class="item-list">${menu.strIngredient2}</li>
    <li class="item-list">${menu.strIngredient3}</li>
    <li class="item-list">${menu.strIngredient4}</li>
    <li class="item-list">${menu.strIngredient5}</li>
    <li class="item-list">${menu.strIngredient6}</li>
    <li class="item-list">${menu.strIngredient7}</li>
    <li class="item-list">${menu.strIngredient8}</li>
    <li class="item-list">${menu.strIngredient9}</li>
    <li class="item-list">${menu.strIngredient10}</li>
   
</ul>
    `;

    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.innerHTML = ingredients;
    menuDiv.appendChild(ingredientsDiv);

}





