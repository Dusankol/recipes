
var movies =[
	{
		imgUrl : "./img/movie1.jpg",
		movieName : "The Godfather"
	},
	{
		imgUrl : "./img/movie2.jpg",
		movieName : "The Shawshank redemption"
	},
	{
		imgUrl : "./img/movie3.jpg",
		movieName : "Schindlers list"
	},
	{
		imgUrl : "./img/movie4.jpg",
		movieName : "Raging bull"
	},
	{
		imgUrl : "./img/movie5.jpg",
		movieName : "Casablanca"
	},
	{
		imgUrl : "./img/movie6.jpg",
		movieName : "Citizen Kane"
	},
	{
		imgUrl : "./img/movie7.jpg",
		movieName : "Gone with the wind"
	},
	{
		imgUrl : "./img/movie8.jpg",
		movieName : "The wizard of Oz"
	},
	{
		imgUrl : "./img/movie9.jpg",
		movieName : "One flew over the Cuckoo's nest"
	},
	{
		imgUrl : "./img/movie10.jpg",
		movieName : "Lawrence of Arabia"
	},
	{
		imgUrl : "./img/movie11.jpg",
		movieName : "Vertigo"
	},
	{
		imgUrl : "./img/movie12.jpg",
		movieName : "Psyho"
	},
	{
		imgUrl : "./img/movie13.jpg",
		movieName : "The Godfather Part II"
	},
	{
		imgUrl : "./img/movie14.jpg",
		movieName : "On the waterfront"
	},
	{
		imgUrl : "./img/movie15.jpg",
		movieName : "Sunset boulevard"
	},
	{
		imgUrl : "./img/movie16.jpg",
		movieName : "Forest Gump"
	},
	{
		imgUrl : "./img/movie17.jpg",
		movieName : "The sound of music"
	},
	{
		imgUrl : "./img/movie18.jpg",
		movieName : "12 angry men"
	},
	{
		imgUrl : "./img/movie19.jpg",
		movieName : "West side story"
	},
	{
		imgUrl : "./img/movie20.jpg",
		movieName : "Stars Wars: A new hope"
	},
	{
		imgUrl : "./img/movie21.jpg",
		movieName : "2001: A space Odyssey"
	},
	{
		imgUrl : "./img/movie22.jpg",
		movieName : "E.T."
	},
	{
		imgUrl : "./img/movie23.jpg",
		movieName : "The silence of the lambs"
	},
	{
		imgUrl : "./img/movie24.jpg",
		movieName : "Chinatown"
	},
	{
		imgUrl : "./img/movie25.jpg",
		movieName : "The bridge on the river Kwai"
	},
	{
		imgUrl : "./img/movie26.jpg",
		movieName : "Singin' in the rain"
	},{
		imgUrl : "./img/movie27.jpg",
		movieName : "It's a wonderful life"
	},
	{
		imgUrl : "./img/movie28.jpg",
		movieName : "Dr. Strangelove"
	},
	{
		imgUrl : "./img/movie29.jpg",
		movieName : "Some like it hot"
	},
	{
		imgUrl : "./img/movie30.jpg",
		movieName : "Ben Hur"
	},
	{
		imgUrl : "./img/movie31.jpg",
		movieName : "Apocalypse today"
	},
	{
		imgUrl : "./img/movie32.jpg",
		movieName : "Amadeus"
	}
];

var input = document.querySelector("input");
var button = document.querySelector("button");
button.onclick = ()=> window.location.reload();

function createElement(someElement, someIndex) {
	if (someElement.movieName.toLowerCase().includes(input.value.toLowerCase())) {
		var myGallery = document.querySelector("div.gallery");
		var myDiv = document.createElement("div");
		var myImg = document.createElement("img");
		var myHeading = document.createElement("h5");
		var mySpan = document.createElement("span");
		myHeading.textContent = someElement.movieName;
		myImg.setAttribute("src", someElement.imgUrl);
		mySpan.textContent = "Remove";
		makeDiv(myDiv, mySpan, myImg, myHeading);
		myGallery.appendChild(myDiv);
		addClick(mySpan, myGallery, someIndex);
	}	
}

function displayMovies() {
	movies.forEach((element, index)=> {
		createElement(element, index);
	})
}

function makeDiv(someDiv, someSpan, someImg, someHeading) {
	someDiv.appendChild(someSpan);
	someDiv.appendChild(someImg);
	someDiv.appendChild(someHeading);
}

function addClick(someSpan, someGallery, index) {
	someSpan.addEventListener("click", ()=> {
		movies.splice(index, 1);
		someGallery.innerHTML = "";
		displayMovies();
	})
}

displayMovies();

input.addEventListener("keyup", ()=> {
	var myGallery = document.querySelector("div.gallery");
	myGallery.innerHTML = "";
	displayMovies();
})
