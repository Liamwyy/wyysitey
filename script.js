
window.onscroll = function() {
  const ball = document.getElementById("scroll-ball");
  const aside = document.querySelector("aside");
  
  if (ball && aside) {
  
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) : 0;
    
    
    const asideHeight = aside.offsetHeight;
    
    
    const moveAmount = scrolled * (asideHeight - 10); 
    
    ball.style.transform = `translateY(${moveAmount}px)`;
  }
};


const projects = [
  {
    title: "TrendVogue",
    desc: "Online e-commerce platform for clothing items that comes with a customization feature for outfits.",
    icon:"assets/images/icontv.png",
    image: "assets/images/trendv.png",
    link: "https://trendvouge-frontend1.vercel.app/"
  },

  {
    title: "Article Analyzer",
    desc: "A classifier that runs as a website and identifies if articles are crisis or non-crisis.",
    icon:"🚨",
    image: "assets/images/mlops.png",
    link: "https://github.com/minmyataung54/CPE_393_MLOps"
  },

  {
    title: "KMUTT-AI-Service",
    desc: "AI service tool for university students and staff to use *IN PROGRESS*.",
    icon:"assets/images/kmutt.png",
    image: "assets/images/aiskmutt.png",
    link:"#"
  }
  ,

  {
    title: "Fire Spelling Game",
    desc: "Typing game that aims to help players improve typing skills and spelling.",
    icon:"assets/images/fsg.png",
    image: "assets/images/fgss.png",
    link:"https://mango-bush-08ffdc31e.3.azurestaticapps.net/"
  }

];

const listContainer = document.getElementById('project-list-container');
const previewBox = document.getElementById('project-preview');


projects.forEach((proj) => {
  const li = document.createElement('li');
  li.className = 'project-item';
 
  const normalizePath = (p) => (typeof p === 'string' ? p.replace(/\\\\/g, '/').replace(/\\/g, '/') : p);

  let iconHtml = '';
  if (proj.icon) {
    if (/\.(png|jpe?g|gif|svg)$/i.test(proj.icon) || proj.icon.includes('/')) {
      const src = normalizePath(proj.icon);
      iconHtml = `<img class="project-icon" src="${src}" alt="${proj.title} icon">`;
    } else {
      iconHtml = `<span class="project-icon-emoji">${proj.icon}</span>`;
    }
  }

  const link = proj.link || '#';
  li.innerHTML = `
    <a href="${link}" target="_blank" rel="noopener noreferrer">
      <div class="project-link">
        ${iconHtml}
        <strong class="project-title">${proj.title}</strong>
      </div>
    </a>
  `;

  // Hover logic: attach only to the title text so preview appears only when
  // hovering the project name itself.
  const titleEl = li.querySelector('.project-title');
  if (titleEl) {
    titleEl.addEventListener('mouseenter', (e) => {
      document.getElementById('preview-title').innerText = proj.title;
      document.getElementById('preview-desc').innerText = proj.desc;
      document.getElementById('preview-img').src = proj.image;
      previewBox.style.display = 'block';
    });

    titleEl.addEventListener('mousemove', (e) => {
      previewBox.style.left = (e.clientX + 20) + 'px';
      previewBox.style.top = (e.clientY + 20) + 'px';
    });

    titleEl.addEventListener('mouseleave', () => {
      previewBox.style.display = 'none';
    });
  }

  listContainer.appendChild(li);
});
