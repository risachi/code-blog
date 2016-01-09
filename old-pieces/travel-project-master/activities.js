var resultsDiv = document.getElementById("results");
var allActivities = App.allActivities();
var savedChoices;
resultsDiv.innerHTML = " ";


/** Adding Event Listeners to each radio button **/
var checkboxes = document.getElementsByTagName("input");

for(var index = 0; index < checkboxes.length; index++) {
  checkboxes[index].addEventListener("change", updateResults);
}

function updateResults(){
  /***Clear out the results area***/
  resultsDiv.innerHTML = " ";

  /***Object to store the values chosen***/
  var choices = {};

  //var isIndoor = (document.getElementById("options").isIndoor.value == "true");
  //var intensity = document.getElementById("options").intensity.value;
  //var cost = document.getElementById("options").cost.value;
  //var kidFriendly = (document.getElementById("options").kidFriendly.value == "true");

  var isIndoor = document.querySelector('input[name="isIndoor"]:checked');
  console.log(isIndoor);
  if(isIndoor !== null){
    choices.isIndoor = (isIndoor.value == "true");
  }

  var intensity = document.querySelector('input[name="intensity"]:checked');
   if(intensity !== null){
     choices.intensity = intensity.value;
   }

  var cost = document.querySelector('input[name="cost"]:checked');
  if(cost !== null){
     choices.cost = cost.value;
   }

  var kidFriendly = document.querySelector('input[name="kidFriendly"]:checked');
  if(kidFriendly !== null){
     choices.kidFriendly = (kidFriendly.value == "true");
  }

  /***Console logging out the current choices***/
  var keys = Object.keys(choices);
  for(var index=0; index<keys.length; index++){
    //console.log(keys[index] + ": " + choices[keys[index]]);
  }

  for(index=0; index<allActivities.length; index++){
    var showActivity = true;
    for(var counter=0; counter<keys.length; counter++){
     var property = keys[counter];
     showActivity = showActivity && (allActivities[index][property] == choices[property]);
    }
    if(showActivity){
      //console.log("match "+allActivities[index].name);
      resultsDiv.innerHTML += "<p>"+ displayActivity(allActivities[index]) +"</p>";
    }
  }
  resultsCheck();
  savedChoices = choices;
  localStorage.setItem("savedChoices", JSON.stringify(savedChoices));
}

function displayActivity(anActivity) {
  return "<a href=" + anActivity.url + ">" + anActivity.name + "</a>";
}

/***When no results are found for that search - throw an error message***/
function resultsCheck(){
  if(resultsDiv.innerHTML == " "){
    resultsDiv.innerHTML += "<p>No results found!</p>";
    resultsDiv.innerHTML += "<p>Please select another combination.</p>";
  }
  else {
    resultsDiv.innerHTML += "<h3>More info <a href='resources.html'>here</a>.</h3>";
  }
}

/***Persistence stuff***/

window.addEventListener("load", getChoices);

function getChoices(event){
    var localChoices = JSON.parse(localStorage.getItem("savedChoices"));
    if (localChoices == null) {
      return null;
    }
    else {
      savedChoices = localChoices;
      //console.log(savedChoices);
      loadChoices(savedChoices);
    }
}

function loadChoices(savedChoices){
  /***Clear out the results area***/
  resultsDiv.innerHTML = " ";

  /***Object to store the values chosen***/
  var choices = savedChoices;

  if(choices.isIndoor == false || choices.isIndoor == true ){
    if(choices.isIndoor == false){
      document.getElementById("outdoor").checked = true;
    }
    else {
      document.getElementById("indoor").checked = true;
    }
  }

  if(choices.intensity){
    if(choices.intensity == "low"){
      document.getElementById("lowIntensity").checked = true;
    }
    else if(choices.intensity == "medium"){
      document.getElementById("mediumIntensity").checked = true;
    }
    else {
      document.getElementById("highIntensity").checked = true;
    }
  }

  if(choices.cost){
    if(choices.cost == "lowCost"){
      document.getElementById("lowCost").checked = true;
    }
    else if(choices.cost == "medCost"){
      document.getElementById("medCost").checked = true;
    }
    else {
      document.getElementById("highCost").checked = true;
    }
  }

  if(choices.kidFriendly == false || choices.kidFriendly == true){
    if(choices.kidFriendly == false){
      document.getElementById("noKids").checked = true;
    }
    else {
      document.getElementById("kids").checked = true;
    }
  }

  /***Console logging out the current choices***/
  var keys = Object.keys(choices);
  for(var index=0; index<keys.length; index++){
    //console.log(keys[index] + ": " + choices[keys[index]]);
  }

  for(index=0; index<allActivities.length; index++){
    var showActivity = true;
    for(var counter=0; counter<keys.length; counter++){
     var property = keys[counter];
     showActivity = showActivity && (allActivities[index][property] == choices[property]);
    }
    if(showActivity){
      //console.log("match "+allActivities[index].name);
      resultsDiv.innerHTML += "<p>"+ displayActivity(allActivities[index]) +"</p>";
    }
  }
  resultsCheck();
  savedChoices = choices;
  localStorage.setItem("savedChoices", JSON.stringify(savedChoices));
}

/***Clear Button***/
document.getElementById("clearButton").addEventListener("click", clearResults);

function clearResults(){
  localStorage.removeItem("savedChoices");
  location.reload();
}


// Print list of activities with icons to the document.
function printAllActivities() {
  for (i = 0; i < App.allActivities().length; i++) {
    var currentActivity = App.allActivities()[i];

    document.write( currentActivity.toLink() );

    document.write('<div class=icons>');

    if (currentActivity.isIndoor) {
      document.write('<div class="resourceIcons"><span class="fa fa-home fa-2x"></span></div>');
    } else {
      document.write('<div class="resourceIcons"><span class="fa fa-tree fa-2x"></span></div>');
    }

    if (currentActivity.kidFriendly) {
      document.write('<div class="resourceIcons"><span class="fa fa-child fa-2x"></span></div>');
    } else {
      document.write('<div class=noChild><span class="fa-stack fa-lg"><i class="fa fa-child fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x text-danger"></i></span></div> ');
    }

    if (currentActivity.cost === 'lowCost') {
      document.write('<div class="resourceIcons"><span class="fa fa-usd fa-2x"></span></div>');
    } else if (currentActivity.cost === 'medCost') {
      document.write('<div class="resourceIcons"><span class="fa fa-usd fa-2x"></span><span class="fa fa-usd fa-2x"></span></div>');
    } else {
      document.write('<div class="resourceIcons"><span class="fa fa-usd fa-2x"></span><span class="fa fa-usd fa-2x"></span><span class="fa fa-usd fa-2x"></span></div>');
    }

    if (currentActivity.intensity === 'low') {
      document.write('<div class="resourceIcons"><span class="fa fa-heart-o fa-2x"></span></div>');
    } else if (currentActivity.intensity === 'medium') {
      document.write('<div class="resourceIcons"><span class="fa fa-heart fa-2x"></span></div>');
    } else {
      document.write('<div class="resourceIcons"><span class="fa fa-heartbeat fa-2x"></span></div>');
    }

    document.write('</div>');
    document.write( "<br clear='both'>&nbsp;<br>" );
  }
}
