document.addEventListener("DOMContentLoaded", function() {
    // Get references to the list items by their IDs
    var homeListItem = document.getElementById("nav-about");
    var projectsListItem = document.getElementById("nav-projects");
    var linksListItem = document.getElementById("nav-links");
    var fixedIcon = document.querySelector(".fixed-icon");

    function changeColorToGrey(item) {
        var link = item.querySelector('a');
        link.classList.add('menu-item-clicked');
        link.style.color = '#D3D3D3';
        setTimeout(function() {
            link.style.color = '';
            link.classList.remove('menu-item-clicked');
        }, 300); // Reset to white after 0.3 seconds
    }

    // Add an onclick event handler to each list item
    homeListItem.onclick = function(e) {
        e.preventDefault(); // Prevent default link behavior
        changeColorToGrey(this);
        scrollToSection("about");
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
});
