function goToCard() {
    const container = document.querySelector('.container');
    container.classList.add('flip-out');
    
    // Wait for animation to finish before redirecting
    setTimeout(() => {
      window.location.href = "card.html";
    }, 800); // Match animation duration (0.8s)
}

function goToCard(){
    window.location.href = "card.html";
}