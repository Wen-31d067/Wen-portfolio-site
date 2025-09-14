const category = document.body.dataset.category || 'visual';

fetch('projects.json')
  .then(res => res.json())
  .then(items => {
    const list = document.getElementById('list');
    list.innerHTML = items
      .filter(p => p.category === category)
      .map(p => `
        <figure class="card">
          <img class="thumb" src="${p.img}" alt="${p.alt}" loading="lazy">
          <figcaption class="info">
            <p class="title">${p.title}</p>
            <p class="desc">${p.desc || ""}</p>
          </figcaption>
        </figure>
      `).join('');
  });