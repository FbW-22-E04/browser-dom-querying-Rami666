const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

const h1 = document.querySelector('.title');
h1.style.textAlign = 'center';

const main = document.querySelector('.main');
main.style.display = 'flex';
main.style.justifyContent = 'space-around';
main.style.flexflow = 'wrap';
main.style.boxSizing = 'border-box';

const label = document.getElementsByClassName('category');
for (let i = 0; i < label.length; i++) {
  label[i].style.fontWeight = 'bold';
    label[i].style.textDecoration = 'underline';
    label[i].style.fontSize = '2em';
}

const h3 = document.getElementById('warning');
h3.style.color = 'red';
h3.style.fontSize = '2em';
h3.style.textAlign = 'center';



const foodCategories = document.querySelectorAll(".food-category");
for (let i = 0; i < foodCategories.length; i++) {
    foodCategories[i].style.backgroundColor = 'lightblue';
    foodCategories[i].style.borderRadius = '10px';
    foodCategories[i].style.margin = '10px';
    foodCategories[i].style.padding = '10px';
    foodCategories[i].style.width = '30%';
    foodCategories[i].style.textAlign = 'center';
    }

    const foodItems = document.querySelectorAll(".food-item");
    for (let i = 0; i < foodItems.length; i++) {
        foodItems[i].style.listStyle = 'none';
        foodItems[i].style.padding = '5px';
        foodItems[i].style.margin = '5px';
        foodItems[i].style.fontSize = '1 rem';
        foodItems[i].style.textAlign = 'left';
    }

    const allergy = document.querySelector(".allergy-warning");

    allergy.style.display = "flex";
    allergy.style.flexFlow = "column";
    allergy.style.justifyContent = "center";
    allergy.style.alignItems = "center";

    const allergyList = document.querySelector(".allergies");
allergyList.style.width = "20rem";
allergyList.style.listStyle = "none";
allergyList.style.marginTop = "1rem";


const allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style: item }, i) => {
  if (i % 2 === 1) {
    item.backgroundColor = "skyblue";
  }
  item.paddingLeft = "1rem";
  item.lineHeight = "1.75";
});


//footer descriptions
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.justifyContent = "space-around";
footer.style.flexFlow = "wrap";
footer.style.boxSizing = "border-box";


const description = document.querySelectorAll(".food-desc");

description.forEach(({ style: item }, i) => {
  item.backgroundColor = "lightgreen";
  item.borderRadius = "10px";
  item.margin = "10px";
  item.padding = "10px";
  item.width = "30%";
  item.textAlign = "center";
}
)

    










