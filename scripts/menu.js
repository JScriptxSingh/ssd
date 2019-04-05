document.addEventListener("DOMContentLoaded",  function() {
    // toggle mobile hamburger
    let hamburger = document.querySelector('.hamburger');
    let body = document.querySelector('body');
    hamburger.onclick = function () {
        body.classList.toggle('show');
    }

    // generate to top button
    let toTopBtn = document.createElement('button');
    toTopBtn.appendChild(document.createTextNode("Top"));
    toTopBtn.className = "to-top-btn";
    body.appendChild(toTopBtn);

    let header = document.querySelector('header');
    toTopBtn.onclick = function() {
        header.scrollIntoView({behavior: 'smooth'});
    }
});

document.addEventListener("DOMContentLoaded", function(){
    
    // toggle view button
    let toggleBtn = document.querySelector('.view-toggle');
    let schedule = document.querySelector('.schedule');
    let isList = false;
    toggleBtn.onclick = function() {
        schedule.classList.toggle('list-view');
        isList = !isList;
        if (isList) {
            toggleBtn.textContent = "# Grid View";
        } else {
            toggleBtn.textContent = String.fromCharCode(9776) + " List View";
        }
    }

    // jump to today
    let todayBtn = document.querySelector('.today-btn');
    todayBtn.onclick = function() {
        let todayDiv = document.querySelector('.today');
        todayDiv.scrollIntoView({behavior: 'smooth'});
    }
});