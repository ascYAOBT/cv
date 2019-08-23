function showImg(i){
      setTimeout(function(){
        document.getElementById("img"+i).classList.remove("img");
        document.getElementById("img"+i).classList.add("iconAnimation");
        if(--i) {showImg(i)}
        else {
          showImg2(6);
        };
    },100)
  };

function showImg2(j){
  setTimeout(function(){
    document.getElementById("img"+j).classList.remove("img");
    document.getElementById("img"+j).classList.add("iconAnimation");
    if(--j>4) {showImg2(j)}
})
};

function showFooter(){
  document.getElementById("section4").style.height = "5vh"
}

function sendEmail(message) {
    var email = "alexis.st-pierre@hotmail.com";
    var subject = "Plus d'information sur votre profil";
    console.log(email);
    document.location = "mailto:"+email+"?subject="+subject;
}

function highlightHeader(section){
  document.getElementById("s"+section).classList.add("currentHeader");

}

function removeHighlight(section) {
  document.getElementById("s"+section).classList.remove("currentHeader");
}

function showCpro(){
  document.getElementById("cPro").style.display="block";
}

function showHambuger(){
  let header = document.getElementById("header");
  if (header.classList.contains("headerVisible")){
    document.getElementById("header").classList.remove("headerVisible");
  } else{
  document.getElementById("header").classList.add("headerVisible");
}
}
