document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");


    // Initial Animation
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 500);




    // Mouse Movement Effect
    document.querySelector('.hero').addEventListener('mousemove', (event) => {
        const { clientX: x, clientY: y } = event;
        const move = 25;
        const xMove = x / window.innerWidth * move - move / 2;
        const yMove = y / window.innerHeight * move - move / 2;

        heroTitle.style.transform = `translate(${xMove}px, ${yMove}px)`;
        heroSubtitle.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});
    
    
    
    
    