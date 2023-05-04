const product = [
{

	id: 0,
	img: 'img/images.jpeg',
	title:'Omez 20',
	price:30.5


},

{

	id: 1,
	img: 'img/Itomash.jpeg',
	title:'Itomash ',
	price:39,

},
{
	id: 2,
	img: 'img/download.jpeg',
	title:'Spasmodigestin',
	price:37.5,
},
{
	id: 3,
	img: 'img/101745.jpg',
	title:'Fawar fruit',
	price:12,

},


{
	id: 4,
	img: 'img/207702-500x500-1-600x600.jpg',
	title:'Gast reg 200',
	price:45,

},
{
	id: 5,
	img: 'img/A.jpg',
	title:'Colverin D',
	price:51,
},



];

const categories =[...new Set(product.map((item)=>{return item}))]
let i=0;

document.getElementById('root').innerHTML = categories.map((item)=>
{
	var {img, title , price} = item;
	return(
		`<div class='box'>
		<div class='img-box'>
		<img class='images' src=${img}></img>
		</div>
		<div class='bottom'>
		<p>${title}</p>
		<h2>$ ${price}.00</h2>`+
		"<button onclick='card("+(i++)+")'>Add to cart</button>"+
		`</div>
		</div>`
		)


}).join('')

var cart=[];
function card(a){
	cart.push({...categories[a]})
	displaycart();
}
function delElement(a){
	cart.splice(a,1);
	displaycart();

}


function displaycart(a){
	let j =0 , total=0;
	document.getElementById("count").innerHTML=cart.length;
	if(cart.length==0){
		document.getElementById('cartitem').innerHTML="Your cart is empty";
		document.getElementById("total").innerHTML="$"+0+".00";
	}
	else{
		document.getElementById('cartitem').innerHTML=cart.map((items)=>
		{
			var { img , title ,price} =items;
			total=total+price;
			document.getElementById("total").innerHTML="$"+total+".00";

			return(
				`<div class='cart-item'>
				<div class='row-img'>
				<img class='rowimg' src=${img}>
				</div>
				<p style='font-size:12px;'>${title}</p>
				<h2 style='font-size:15px;'>${price}.00</h2>`+
				"<i class='bx bxs-trash-alt' style='color:#eaa424' onclick='delElement("+(j++)+")'></i></div>"
				
				
			);

		}).join('');
	}
}