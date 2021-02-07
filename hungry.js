fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data =>  displayMenu(data.categories));


const displayMenu = menus =>{
    //  console.log(menus);
    const menusDiv = document.getElementById("menus");

    menus.forEach(menu => {

        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu';

        const  menuInfo =  ` 
             <img  src='${ menu.strCategoryThumb }'>
             <p class=""> ${menu.strCategory}</p>
             <button onclick="displayMenuDetails('${menu.strCategory}')">Details</button>
         `;
       
        menuDiv.innerHTML = menuInfo;
        menusDiv.appendChild(menuDiv);
    });

    
}

const displayMenuDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>  renderMenuInfo(data.meals[0]));
}
const renderMenuInfo = menu => {
    const menuDiv = document.getElementById('menuDetail');
    menuDiv.innerHTML = `
    <img  src='${ menu.strMealThumb }'>
    <h3>${menu.strMeal}</h3>
    

    `;
}



