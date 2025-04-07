const text = "PortFolio";
  const container = document.getElementById("bouncing-text");

  // Loop through each character in the text and create a span element for it
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block"; // For independent animation
    span.style.animation = `bounce 1s ease infinite`;
    span.style.animationDelay = `${index * 0.1}s`; // Add delay for each character
    container.appendChild(span);
  }); 


  const roles = ["Web Developer", "Frontend Developer", "Backend Developer", "JavaScript Developer"];
        let roleIndex = 0; // Tracks current role
        let charIndex = 0; // Tracks current character

        function typeEffect() {
            const dynamicText = document.querySelector('.dynamic-text');
            
            // Get the current role and the current substring
            const currentRole = roles[roleIndex];
            dynamicText.textContent = currentRole.slice(0, charIndex);
            
            // Move to the next character
            charIndex++;
            
            // Check if the entire role is displayed
            if (charIndex > currentRole.length) {
                // Reset character index and move to the next role after a short pause
                charIndex = 0;
                roleIndex = (roleIndex + 1) % roles.length; // Cycle through roles
                setTimeout(typeEffect, 1000); // Pause before typing next role
            } else {
                // Continue typing the current role
                setTimeout(typeEffect, 150); // Adjust typing speed here
            }
        }

        // Initialize the typing effect
        typeEffect();
