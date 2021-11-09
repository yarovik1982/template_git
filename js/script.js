const goods = [
    {
        name: "Вася",
        link: "link",
    },
    {
        name: "Олег",
        link: "link",
    },
];
console.log(goods);

let out = "";
for(key in goods){
    out += "Имя " + ":" + goods[key].name + "<br>";
    out += `Ссылка ${goods[key].link} <br>`; 
}
document.querySelector('.out').innerHTML = out;