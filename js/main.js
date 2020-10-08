var searchButton = document.querySelector(".search-button");
var appId="2a81fffb";
var appKeys="c76432340eaabf32a594b16cac90fdcb";
var recipesList=document.querySelector("#recipes");
var healthLabels=document.querySelector("select#health");
var dietLabels=document.querySelector("select#diet");
var count=document.querySelector("span.recipe-count-number");
var caloriesMin=document.querySelector("#cal-min");
var caloriesMax=document.querySelector("#cal-max");
var page=1;
var footer=document.querySelector("footer");



function onSearch(){
	var searchField=document.querySelector(".keyword-input");
	
	searchField.value.trim() && getRecipes(searchField.value);

	searchField.value="";

}




function getRecipes(searchValue){
	var req=new XMLHttpRequest();
	var s=0;
	var e=12;


	var healthOption;
	if(healthLabels.value="general"){healthOption="";}else{healthOption="&health="+healthLabels.value}
	var dietOption;
	if(dietLabels.value="general"){dietOption="";}else{dietOption="&diet="+dietLabels.value}

	var caloriesRange;
	if(caloriesMin.value.length===0&&caloriesMax.value.length===0){caloriesRange="&calories="+0+"-"+9999999};
	if(caloriesMin.value.length===0&&caloriesMax.value.length!==0){caloriesRange="&calories="+0+"-"+caloriesMax.value};
	if(caloriesMin.value.length!==0&&caloriesMax.value.length===0){caloriesRange="&calories="+caloriesMin.value+"-"+9999999};
	if(caloriesMin.value.length!==0&&caloriesMax.value.length!==0){caloriesRange="&calories="+caloriesMin.value+"-"+caloriesMax.value};


	req.open("GET","https://api.edamam.com/search?q="+searchValue+"&app_id="+appId+"&app_key="+appKeys+healthOption+dietOption+"&from="+s+"&to="+e+caloriesRange);

	req.onload= function(){
		listRecipes(JSON.parse(req.responseText).hits)
		count.innerHTML=JSON.parse(req.responseText).count
		document.querySelector("div.loader").style.visibility="hidden";


	}

	req.send();
}


function listRecipes(recipes){
	recipesList.innerHTML="";
	recipes.forEach(function(recipe){
		addRecipes(recipe)
	})
}


function addRecipes(recipeData){
	var recipeElement=document.createElement("div");
	recipeElement.classList.add("recipe-element")

	var img="<img src='"+recipeData.recipe.image+"'/>";
	var title="<h3>"+recipeData.recipe.label+"</h3>";
	var tags="<div class='label'>"+recipeData.recipe.healthLabels+"</div>";
	var caloriesCounter="<div class='calories'>"+Math.round(recipeData.recipe.calories/recipeData.recipe.yield)+' kcal'+"</div>"

	recipeElement.innerHTML=img+caloriesCounter+"<div class='labels'>"+title+tags+"</div>";
	recipesList.appendChild(recipeElement)

	recipeElement.querySelectorAll("img,h3").forEach(function(element){
		element.addEventListener("click",showRecipe)
	})

	function showRecipe(url){
  		window.open(recipeData.recipe.url, '_blank');
}

}


function loading(){
	var loader=document.querySelector("div.loader");
	loader.innerHTML="<img src='img/loader.gif'/>"
	loader.style.visibility="visible";


}






//INIT

searchButton.addEventListener("click",function(){onSearch()});
document.querySelector(".keyword-input").addEventListener("keypress",function(e){
  if(e.keyCode===13){searchButton.click()}
})



searchButton.addEventListener("click",loading);


