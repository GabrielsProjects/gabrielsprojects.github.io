document.addEventListener("DOMContentLoaded", function() {
    // Get references to the list items by their IDs
    var homeListItem = document.getElementById("nav-home");
    var projectsListItem = document.getElementById("nav-projects");
    var linksListItem = document.getElementById("nav-links");
    var fixedIcon = document.querySelector(".fixed-icon");

    function changeColorToGrey(item) {
        var link = item.querySelector('a');
        link.classList.add('menu-item-clicked');
        link.style.color = '#08f1cc';
        setTimeout(function() {
            link.style.color = '';
            link.classList.remove('menu-item-clicked');
        }, 200); // Reset to white after 0.3 seconds
    }

    // Add an onclick event handler to each list item
    homeListItem.onclick = function(e) {
        e.preventDefault(); // Prevent default link behavior
        changeColorToGrey(this);
        scrollToSection("home");
    };

    projectsListItem.onclick = function(e) {
    e.preventDefault(); // Prevent default link behavior
        changeColorToGrey(this);
        scrollToSection("projects");
    };

    linksListItem.onclick = function(e) {
      e.preventDefault(); // Prevent default link behavior
        changeColorToGrey(this);
        scrollToSection("links");
    };

    // Function to smoothly scroll to a section by its ID
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                behavior: 'smooth',
                top: section.offsetTop
            });
        }
    }

    // Add an opacity animation to the fixed icon
    fixedIcon.style.transition = "opacity 0.5s ease";

    // Check scroll position to change the opacity of the arrow
    window.addEventListener("scroll", function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        fixedIcon.style.opacity = "0"; // Fade out the arrow
    } else {
        fixedIcon.style.opacity = "1"; // Fade in the arrow
    }
    });

    // Get the "View Resume" button by its ID
    var resumeButton = document.getElementById("resume");

    // Add a click event handler to the button
    resumeButton.onclick = function() {
        // Get the PDF document URL from the data attribute
        var pdfUrl = this.getAttribute("data-pdf-url");

        // Open the PDF document in a new tab
        if (pdfUrl) {
            window.open(pdfUrl, '_blank');
        }
    };
});
