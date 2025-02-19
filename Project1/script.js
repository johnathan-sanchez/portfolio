// Get the canvas and context
const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

// Load background image
const background = new Image();
background.src = "images/background.png";
background.onload = function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    // Load and draw sun
    const sun = new Image();
    sun.src = "images/sun.png";
    sun.onload = function() {
        ctx.drawImage(sun, 600, 50, 100, 100); // Position in the top-right corner

        // Load and draw tree
        const tree = new Image();
        tree.src = "images/tree.png";
        tree.onload = function() {
            ctx.drawImage(tree, 150, 250, 200, 250); // Placed on the left side

            // Add text
            ctx.font = "24px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Nature Landscape", 300, 50);
            ctx.fillText("By Your Name", 300, 80);
        };
    };
};
