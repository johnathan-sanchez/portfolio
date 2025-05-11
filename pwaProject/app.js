fetch('herbs.json')
  .then(res => res.json())
  .then(data => {
    const herbMenu = document.getElementById('herbMenu');
    const canvas = document.getElementById('herbCanvas');
    const ctx = canvas.getContext('2d');

    data.forEach(herb => {
      const card = document.createElement('div');
      card.className = 'herb-card';
      card.addEventListener('click', () => {
        playAudio(`assets/${herb.audio}`);
      });
      card.innerHTML = `
        <img src="assets/${herb.image}" alt="${herb.title}" />
          <h3>${herb.title}</h3>
          <p>${herb.text}</p>`;
      card.addEventListener('click', () => drawOnCanvas(herb.image));
      herbMenu.appendChild(card);
    });

    function drawOnCanvas(imageSrc) {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 10, 10, 280, 280);
      };
      img.src = `assets/${imageSrc}`;
    }

    window.playAudio = function(src) {
      const audio = new Audio(src);
      audio.play();
    }
  })
  .catch(err => console.error('Error loading JSON:', err));