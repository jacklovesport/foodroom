export function aboutContent()
 {
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

    return aboutSection
}