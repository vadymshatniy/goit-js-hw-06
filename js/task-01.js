

const numberCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberCategories}`);


const categories = document.querySelectorAll('.item');
categories.forEach(category =>
    console.log(
        `Category: ${category.querySelector('h2').textContent}
Elements: ${category.querySelectorAll('.item>ul>li').length}`
    ));

