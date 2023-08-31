// JAVASCRIPT COMES HERE
// --------------------------------------------------------

const sectiontitles = document.getElementsByClassName("sectiontitle");

let n;
for (n = 0; n < sectiontitles.length; n++) { 
    sectiontitles[n].addEventListener("click", function() {
        let panel = this.nextElementSibling;
        
        if (this.classList.contains("opened")) {
            this.classList.remove("opened");
            panel.style.maxHeight = null;
        }
        else {
            this.classList.add("opened");
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        
    });
}

//all sectiontitles have a click eventlistener added to them.
//onclick, the sectiontitle gets a class of .opened, and the <ul> that is its nextelementsibling is opened (its max-height was initially set to 0, and onclick the max-height is calculated to be the <ul>'s scrollheight)
//if the sectiontitles already has a classname of .opened, then the classname is removed and the nextelementsibling <ul> has its max-height set to null/0.



const body = document.querySelector("body");
const currentsection = document.getElementById("currentsection");

function opencurrent() {
    currentsection.classList.add("opened");   
    const currentpanel = currentsection.nextElementSibling;
    currentpanel.style.maxHeight = currentpanel.scrollHeight + "px";
}

body.addEventListener("load", opencurrent());

//the page body has a function called 'opencurrent' that runs on pageload.
//'currentsection' is first defined by looking for an element with that ID
//the function 'opencurrent' adds a classname of .opened to the current sectiontitle, and then looks for the the <ul> that is the next elementsibling of the 'currentsection' and adds a height to it (max-height is initially set to 0) 