export function loadContent() {
    const content = document.getElementById('content');
    //getting content from html

    const aboutSection = document.createElement('section');
    aboutSection.id = 'about-section';

    const aboutHeading = document.createElement('h2');
    aboutHeading.textContent = 'About Us';

    const aboutPara = document.createElement('p');
    aboutPara.textContent = 'Welcome to our cozy Italian restaurant, where we bring the flavors of Italy to your table. Our chefs use the freshest ingredients to create classic dishes that are both delicious and authentic.';

    const aboutPic = document.createElement('img');
    aboutPic.src = 'https://via.placeholder.com/400x200';
    aboutPic.alt = 'Italian Restaurant Interior';

    aboutSection.appendChild(aboutHeading)
    aboutSection.appendChild(aboutPara)
    aboutSection.appendChild(aboutPic)

    content.appendChild(aboutSection);

    const menuSection = document.createElement('section');
    menuSection.id = 'menu-section';

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'Our Menu';

    const menuItems = [
        {
            name: 'Spaghetti Carbonara',
            description: 'A traditional Roman dish made with eggs, cheese, pancetta, and pepper.',
            imgSrc: 'https://via.placeholder.com/150',
            imgAlt: 'Spaghetti Carbonara'
        },
        {
            name: 'Margherita Pizza',
            description: 'Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.',
            imgSrc: 'https://via.placeholder.com/150',
            imgAlt: 'Margherita Pizza'
        },
        {
            name: 'Tiramisu',
            description: 'A popular Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
            imgSrc: 'https://via.placeholder.com/150',
            imgAlt: 'Tiramisu'
        }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const menuItemImage = document.createElement('img');
        menuItemImage.src = item.imgSrc;
        menuItemImage.alt = item.imgAlt;

        const menuItemName = document.createElement('h2');
        menuItemName.textContent = item.name;

        const menuItemDescription = document.createElement('p')
        menuItemDescription.textContent = item.description;

        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemDescription);

        menuSection.appendChild(menuItem);
    });

    content.appendChild(menuSection);

    const contactSection = document.createElement('section');
    contactSection.id = 'contact-section';

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';

    const contactText = document.createElement('p');
    contactText.textContent = 'Come visit us at 123 Main Street, Anytown, or call us at (123) 456-7890 to make a reservation.';

    const contactImage = document.createElement('img');
    contactImage.src = 'https://via.placeholder.com/400x200';
    contactImage.alt = 'Restaurant Location';

    contactSection.appendChild(contactHeading);
    contactSection.appendChild(contactText);
    contactSection.appendChild(contactImage);

    content.appendChild(contactSection);

 console.log('whaaaaaaaattttttt')


}