$(document).ready(function(){

let images = ["https://www.google.fr/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F03%2F11%2F23%2F42%2Flandscape-2136128_960_720.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Ffr%2Fpaysage-%25C3%25A9tang-%25C3%25A9tang-%25C3%25A0-poissons-2136128%2F&docid=bt5f3M_Np9lYFM&tbnid=sfLNGtW0afHBrM%3A&vet=10ahUKEwjEgs_40r_UAhXGDBoKHbxmB-QQMwglKAAwAA..i&w=960&h=360&itg=1&bih=974&biw=1920&q=paysage&ved=0ahUKEwjEgs_40r_UAhXGDBoKHbxmB-QQMwglKAAwAA&iact=mrc&uact=8",
"http://www.mon-voyage-tahiti.com/wp-content/themes/monvoyagetahiti/images/banner.png",
"https://cdn.pixabay.com/photo/2016/10/24/21/23/autumn-1767373_960_720.jpg"];
let index = 0;

setInterval(function(){

	$("#sliderImage").attr("src", images[index]);
	index++;

if(index === images.length){
	index = 0;
}

},3000);




});


// Si l'index est égal à 0
  