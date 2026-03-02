
const products = [
"Iphone X","Iphone XR","Iphone XS","Iphone XS Max",
"Iphone 11","Iphone 11 Pro","Iphone 11 Pro Max",
"Iphone 12","Iphone 12 Pro","Iphone 12 Pro Max",
"Iphone 13","Iphone 13 Pro Max",
"Iphone 14","Iphone 14 Pro","Iphone 14 Pro Max"
];

const productList=document.getElementById("product-list");

products.forEach(p=>{
const card=document.createElement("div");
card.className="card";
card.innerHTML=`
<img src="images/placeholder-phone.png">
<h4>${p}</h4>
<button>View</button>
`;
productList.appendChild(card);
});

fetch("data/sales.json")
.then(res=>res.json())
.then(data=>{
const saleList=document.getElementById("sale-list");
data.forEach(item=>{
if(item.onSale){
const card=document.createElement("div");
card.className="card";
card.innerHTML=`
<img src="${item.image}">
<h4>${item.name}</h4>
<p>Sale</p>
`;
saleList.appendChild(card);
}
});
});
