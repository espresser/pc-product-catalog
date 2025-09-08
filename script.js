const products = [
  {
    id: 1,
    size: "24",
    os: "windows",
    img: "images/product_pc24.jpg",
    title_ko: "부착라이프 올인원 PC 24 i5-Haswell",
    title_en: "PC 24 i5-Haswell",
    desc_ko: `
      <ul>
        <li>운영체제: Windows 7</li>
        <li>디스플레이: 24인치 FHD LED</li>
        <li>CPU: 인텔 i5 Haswell</li>
        <li>메모리: 8GB DDR3</li>
        <li>저장장치: 128GB SSD</li>
      </ul>`,
    desc_en: `
      <ul>
        <li>OS: Windows 7</li>
        <li>Display: 24" FHD LED</li>
        <li>CPU: Intel i5 Haswell</li>
        <li>Memory: 8GB DDR3</li>
        <li>Storage: 128GB SSD</li>
      </ul>`
  },
  {
    id: 2,
    size: "10",
    os: "android",
    img: "images/touch_pc.jpg",
    title_ko: "터치일체형 PC 10.1 안드로이드",
    title_en: "Touch PC 10.1 Android",
    desc_ko: `
      <ul>
        <li>운영체제: Android 11</li>
        <li>디스플레이: 10.1인치 / IPS</li>
        <li>CPU: Octa-Core Cortex-A55</li>
        <li>메모리: 4GB</li>
        <li>저장장치: 32GB</li>
      </ul>`,
    desc_en: `
      <ul>
        <li>OS: Android 11</li>
        <li>Display: 10.1” IPS</li>
        <li>CPU: Octa-Core Cortex-A55</li>
        <li>Memory: 4GB</li>
        <li>Storage: 32GB</li>
      </ul>`
  },
  // 👉 Add more products from the PDF as needed
];

let lang = 'ko';

function renderProducts() {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.setAttribute('data-size', p.size);
    div.setAttribute('data-os', p.os);
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title_ko}" loading="lazy" />
      <h3>${lang === 'ko' ? p.title_ko : p.title_en}</h3>
      ${lang === 'ko' ? p.desc_ko : p.desc_en}
    `;
    div.onclick = () => openModal(p);
    container.appendChild(div);
  });
}

function toggleLang() {
  lang = lang === 'ko' ? 'en' : 'ko';
  document.querySelectorAll('[data-ko]').forEach(el => {
    el.textContent = lang === 'ko' ? el.dataset.ko : el.dataset.en;
  });
  renderProducts();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function filterProducts() {
  const val = document.getElementById('filter').value;
  document.querySelectorAll('.product-card').forEach(card => {
    const size = card.dataset.size;
    const os = card.dataset.os;
    card.style.display = (
      val === 'all' ||
      val === size ||
      val === os
    ) ? 'block' : 'none';
  });
}

function openModal(product) {
  document.getElementById('modal-img').src = product.img;
  document.getElementById('modal-desc').innerHTML = lang === 'ko' ? product.desc_ko : product.desc_en;
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', renderProducts);
