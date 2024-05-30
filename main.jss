document.addEventListener('DOMContentLoaded', () => {
    const farmersList = document.getElementById('farmers-list');
    const restaurantsList = document.getElementById('restaurants-list');
    
    const farmers = [
        { name: "Green Acres Farm", produce: "Organic vegetables and fruits" },
        { name: "Sunny Meadows", produce: "Free-range eggs and dairy" },
        { name: "Heritage Farms", produce: "Heritage breed meats" }
    ];

    const restaurants = [
        { name: "Farm to Table Bistro", special: "Local, seasonal dishes" },
        { name: "Green Earth Cafe", special: "Vegan and vegetarian options" },
        { name: "Harvest Kitchen", special: "Farm-fresh ingredients daily" }
    ];

    if (farmersList) {
        farmers.forEach(farmer => {
            const li = document.createElement('li');
            li.textContent = `${farmer.name} - ${farmer.produce}`;
            farmersList.appendChild(li);
        });
    }

    if (restaurantsList) {
        restaurants.forEach(restaurant => {
            const li = document.createElement('li');
            li.textContent = `${restaurant.name} - ${restaurant.special}`;
            restaurantsList.appendChild(li);
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }
});
