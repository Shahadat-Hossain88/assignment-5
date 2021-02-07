fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data =>  displayMenu(data.categories));


const displayMenuDetail = name => {
    console.log(name);
}

const displayMenu = menus =>{
    //  console.log(menus);
    const menusDiv = document.getElementById("menus");

    menus.forEach(menu => {

        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu';
        // menu.onclick ="displayMenuDetail('chiken')"

        const  menuInfo =  ` 
             <img  src='${ menu.strCategoryThumb }'>
             <p class=""> ${menu.strCategory}</p>
         `
       
        menuDiv.innerHTML = menuInfo;
        menusDiv.appendChild(menuDiv);
    });

    


    // for (let i = 0; i < menus.length; i++) {
        
    //     const menu = menus[i];
    //     const menuDiv = document.createElement('div');
    //     menuDiv.className = 'menu';

    //     // const picture = document.createElement('img');
    //     // picture.src = menu.strCategoryThumb;

    //     // // const id = document.createElement('h3');
    //     // // id.innerText = menu.idCategory;
    //     // const category = document.createElement('h1');
    //     // category.innerText = menu.strCategory;
    //     // // const categoryDescription = document.createElement('p');
    //     // // categoryDescription.innerText = menu.strCategoryDescription;

    //     // menuDiv.appendChild(picture);
    //     // // menuDiv.appendChild(id);
    //     // menuDiv.appendChild(category);
    //     // // menuDiv.appendChild(categoryDescription);
        

    //     const menuInfo = ` 
    //         <img  src='${ menu.strCategoryThumb }'>
    //         <h5> ${menu.strCategory}</h5>
    //     `
    //     menuDiv.innerHTML = menuInfo;
    //     menusDiv.appendChild(menuDiv);
        
        
    // }
}


// let searchBtn = document.getElementById("search-btn");
// searchBtn .addEventListener('click', function () {
//     const firstDivArea = document.getElementById("first-div");
//     firstDivArea.style.display = 'none';
// })
