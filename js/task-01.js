
const listUl = document.querySelector("#categories");
console.log(listUl);

const categoriesLi = listUl.children;
console.log(`В списке ${categoriesLi} категории.`);

[...categoriesLi].forEach(categoriLi  => {
    const title = categoriLi.querySelector("h2");
    console.log(`Категория:${title.textContent}`)
    const subList = categoriLi.querySelector("ul");
    const children = subList.children;
    console.log(`Количество элементов:${children.length}`)
});