function openTab(evt, tabName) {
    const caseContent = document.getElementsByClassName("caseContent");
    const tabLinks = document.getElementsByClassName("tablinks");

    // Loop gennem caseContent og set display "none")
    for (let i = 0; i < caseContent.length; i++) {
        caseContent[i].style.display = "none";
    }

    // Loop gennem hver knap og fjern "active" class for at sørge for at ingen tab er aktiv før den korrekte tab
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Hvis den aktive tab 
    document.getElementById(tabName).style.display = "block";

    // Tilføj "active" class for at highlighte den tab
    evt.currentTarget.className += " active";
};

// Automatic åben den første tab når siden indlæses
document.getElementById("defaultOpen").click();

// Credit: W3 schools - https://www.w3schools.com
// Modificeret fra det oprindelige eksempel med få ændringer/optimeringer