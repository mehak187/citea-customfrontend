const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Add click event to each link to make it active
    links.forEach(link => {
      link.addEventListener('click', function() {
        // Remove active class from all links
        links.forEach(link => link.classList.remove('active'));
        
        // Add active class to the clicked link
        this.classList.add('active');
        
        // Close menu on mobile after selection
        navLinks.classList.remove('active');
      });
    });