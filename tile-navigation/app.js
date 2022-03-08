const toggleBtn = document.querySelector('.toggle-btn');
const linksContainer = document.querySelector('.links-container');
const portfolioSection = document.querySelector('.portfolio-section')

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('hide');
    portfolioSection.classList.toggle('hide');

})