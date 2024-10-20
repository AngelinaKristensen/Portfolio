//Randomize animation til bobler
// Find alle Bubbles
const bubbles = document.querySelectorAll('.bubble1, .bubble2, .bubble3, .bubble4');

// Loop gennem hver bubble og giv dem random animations tid og delays
bubbles.forEach(bubble => {
    // Random tid mellem 4s og 10s
    bubble.style.animationDuration = `${Math.random() * 6 + 4}s`;  
    // Random delay op til 2s
    bubble.style.animationDelay = `${Math.random() * 2}s`;  
});

