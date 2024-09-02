export function contactContent() {
    
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

return contactSection
}