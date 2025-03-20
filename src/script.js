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