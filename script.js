const projects = [
  { title: 'Ultron AI', type: 'ml', label: 'AI RECRUITMENT INTELLIGENCE', description: 'An AI-powered recruitment intelligence system that evaluates resumes and intelligently ranks candidates through semantic matching and profile analysis.', image: 'images/Ultron AI.png', tags: ['AI', 'Recruitment', 'Semantic matching'], url: 'https://ultron-ai-recruitment-intelligence.vercel.app/', icon: 'scan-search' },
  { title: 'GFG Campus Website', type: 'product', label: 'DIGITAL BUILD', description: 'A modern home for the GeeksforGeeks campus community — designed to make events, resources and updates easy to find.', image: 'https://images.unsplash.com/photo-1652939617330-e5b59457c496?auto=format&fit=crop&w=1200&q=85', tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'], url: 'https://github.com/anandvaidya21/Geekforgeeks-BGIEM-Student-Chapter-Official-Website', icon: 'layout-template' },
  { title: 'No Trace', type: 'product', label: 'PRIVACY PRODUCT', description: 'A privacy-minded web application built to help people make more intentional choices about their online footprint.', image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=1200&q=85', tags: ['Python', 'React', 'FastAPI', 'PostgreSQL'], url: 'https://no-trace-tool.vercel.app/', icon: 'shield-check' },
  { title: 'EDA Storytelling', type: 'data', label: 'DATA ANALYTICS', description: 'Exploring real-world datasets through visual analysis, pattern finding and clear, decision-ready reporting.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85', tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'], url: 'https://github.com/anandvaidya21', icon: 'chart-spline' },
  { title: 'Customer Churn Prediction', type: 'ml', label: 'MACHINE LEARNING', description: 'A classification model built to flag at-risk customers early and turn retention into an actionable problem.', image: 'https://images.unsplash.com/photo-1717501217912-933d2792d493?auto=format&fit=crop&w=1200&q=85', tags: ['Python', 'Scikit-learn', 'XGBoost'], url: 'https://github.com/anandvaidya21', icon: 'brain-circuit' },
  { title: 'Movie Recommendation System', type: 'ml', label: 'MACHINE LEARNING', description: 'A personalised movie recommendation app that suggests films based on user preferences and similarity patterns.', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85', tags: ['Python', 'Streamlit', 'Machine Learning'], url: 'https://movie-recommendation-system-by-anand.streamlit.app/', icon: 'clapperboard' }
];

const skills = [
  { category: 'Data & intelligence', number: '01 / CORE', items: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Excel', 'Tableau', 'ETL pipelines'] },
  { category: 'Machine learning', number: '02 / MODELS', items: ['Scikit-learn', 'XGBoost', 'NLP', 'Deep Learning', 'GenAI', 'LangChain', 'OpenAI API'] },
  { category: 'Product engineering', number: '03 / BUILD', items: ['JavaScript', 'React', 'Node.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'] },
  { category: 'Creative edge', number: '04 / EXTRA', items: ['UI/UX design', 'Video editing', 'Content creation', 'Graphic design', 'Social media', 'Powerlifting'] }
];

const icon = (name) => `<i data-lucide="${name}"></i>`;

function projectCard(project) {
  const body = `<div class="project-media"><img src="${project.image}" alt="${project.title} project preview" loading="lazy"></div><div class="project-content"><span class="project-kind">${project.label}</span><span class="project-open">${icon(project.icon)}</span><h3>${project.title}</h3><p>${project.description}</p><div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></div>`;
  return `<a class="project-card reveal" href="${project.url}" target="_blank" rel="noreferrer" aria-label="View ${project.title}">${body}</a>`;
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  const filtered = filter === 'all' ? projects : projects.filter(project => project.type === filter);
  grid.innerHTML = filtered.map(projectCard).join('');
  observeReveals(grid.querySelectorAll('.reveal'));
  lucide.createIcons();
}

function renderMiniProjects() {
  const dataProjects = projects.filter(project => project.type === 'data');
  document.getElementById('data-project-list').innerHTML = dataProjects.map((project, index) => `<a class="mini-project reveal" href="${project.url}" target="_blank" rel="noreferrer" aria-label="View ${project.title}"><span>0${index + 1}</span><strong>${project.title}</strong><p>${project.description}</p>${icon('arrow-up-right')}</a>`).join('');
  const mlProjects = projects.filter(project => project.type === 'ml');
  document.getElementById('ml-project-list').innerHTML = mlProjects.map((project, index) => `<a class="ml-project reveal" href="${project.url}" target="_blank" rel="noreferrer" aria-label="View ${project.title}"><div class="ml-project-top"><span class="ml-project-index">0${index + 1} / 0${mlProjects.length}</span>${icon(project.icon)}</div><h3>${project.title}</h3><p>${project.description}</p><div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></a>`).join('');
}

function renderSkills() {
  document.getElementById('skills-grid').innerHTML = skills.map(group => `<article class="skill-group reveal"><div class="skill-group-head"><h3>${group.category}</h3><small>${group.number}</small></div><div class="skill-chips">${group.items.map(item => `<span class="skill-chip">${item}</span>`).join('')}</div></article>`).join('');
}

let revealObserver;
function observeReveals(elements = document.querySelectorAll('.reveal')) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.12 });
  }
  elements.forEach((element, index) => { element.style.transitionDelay = `${Math.min(index * 55, 230)}ms`; revealObserver.observe(element); });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderProjects(); renderMiniProjects(); renderSkills(); observeReveals(); lucide.createIcons();
  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
    document.querySelector('.filter-button.active').classList.remove('active'); button.classList.add('active'); renderProjects(button.dataset.filter);
  }));
  const menuButton = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  menuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); menuButton.innerHTML = icon(open ? 'x' : 'menu'); lucide.createIcons();
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menuButton.click()));
});

window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20), { passive: true });
window.addEventListener('pointermove', event => { const glow = document.querySelector('.cursor-glow'); if (glow && window.innerWidth > 850) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; } }, { passive: true });
