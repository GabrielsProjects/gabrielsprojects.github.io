document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    const aboutLink = document.querySelector('#nav-about a');
    aboutLink.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const arrow = document.getElementById("bottom-arrow");
    arrow.addEventListener("click", function(e) {
        e.preventDefault();

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        })
    });

    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;

        let modifier = 20; 
        if(currentScroll + modifier > documentHeight) {
            arrow.style.opacity = 0;
        } else {
            arrow.style.opacity = .4;
        }
    })
});
