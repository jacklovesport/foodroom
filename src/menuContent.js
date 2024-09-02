export function menuContent() { 
    
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

return menuSection

};
