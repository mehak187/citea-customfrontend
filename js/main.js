const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    links.forEach(link => {
      link.addEventListener('click', function() {
        links.forEach(link => link.classList.remove('active'));
        
        this.classList.add('active');
        
        navLinks.classList.remove('active');
      });
    });



    function updatePricing() {
      const rangeValue = document.getElementById('propertyRange').value;
      const propertyCount = document.getElementById('propertyCount');
      const price = document.getElementById('price');
      propertyCount.value = rangeValue;
      const calculatedPrice = rangeValue * 12; 
      price.innerText = `$${calculatedPrice}`;
  }