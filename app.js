/**
 * «ИЗ ГУЩИ В ЧАШКУ» — CoffeeNewLife (Multi-page Web Application)
 * Catalog rendering, detailed product modal inspection, cart management,
 * eco-calculator, and partner application handling.
 */

// ============================================================================
// 1. Data Store: Assortment of Coffee Ground Mugs
// ============================================================================

const PRODUCTS_DATA = [
  {
    id: 'cappuccino-classic',
    title: 'Кофейная чашка «Капучино Классик» с блюдцем',
    category: 'cappuccino',
    categoryName: 'Капучино & Флэт Уайт',
    badge: 'Хит продаж',
    badgeType: 'badge-hit',
    price: 4900,
    priceFormatted: '4 900 ₸',
    volume: '220 мл',
    weight: '145 г',
    coffeePercent: '65% кофейного жмыха',
    shotsSaved: 6,
    shortDesc: 'Идеальный баланс тепла и тактильности для капучино, латте и фильтр-кофе. В комплекте с фирменным блюдцем из жмыха.',
    description: 'Создана методом горячего формования под давлением из 6 порций отработанного эспрессо. Обладает приятной бархатистой матовой поверхностью и легким кофейным ароматом. Не обжигает руки благодаря низкой теплопроводности биокомпозита.',
    specs: {
      volume: '220 мл',
      dimensions: 'Высота: 78 мм, Диаметр: 84 мм',
      weight: '145 г (с блюдцем 210 г)',
      material: '65% жмых SCG, 25% био-PLA, 10% растительные воски',
      tempMax: 'до +100°C (для кипятка и горячего кофе)',
      dishwasher: 'Да, до 65°C (Эко-режим)',
      microwave: 'Не рекомендуется',
      compost: '3–6 месяцев в промышленном компосте'
    },
    images: [
      'assets/images/mug_cappuccino_grain.jpg',
      'assets/images/cappuccino_mug.jpg',
      'assets/images/grounds_macro.jpg'
    ]
  },
  {
    id: 'espresso-duo',
    title: 'Набор чашек для эспрессо «Doppio Duo» (2 шт.)',
    category: 'espresso',
    categoryName: 'Эспрессо (80 мл)',
    badge: 'Эко-хит',
    badgeType: 'badge-eco',
    price: 5400,
    priceFormatted: '5 400 ₸',
    volume: '80 мл × 2',
    weight: '85 г / шт.',
    coffeePercent: '70% кофейного жмыха',
    shotsSaved: 8,
    shortDesc: 'Пара компактных эспрессо-чашек с толстыми стенками для идеального сохранения крема и аромата.',
    description: 'Специальная форма чаши концентрирует крема и подчеркивает ноты обжарки. Высокое содержание жмыха (70%) дает насыщенный темный цвет и выразительную фактурность кофейных крупинок.',
    specs: {
      volume: '80 мл (до краев 90 мл)',
      dimensions: 'Высота: 58 мм, Диаметр: 62 мм',
      weight: '85 г одна чашка',
      material: '70% жмых SCG, 20% PLA/целлюлоза, 10% воски',
      tempMax: 'до +100°C',
      dishwasher: 'Да, устойчиво к 100+ циклам',
      microwave: 'Не рекомендуется',
      compost: '3–6 месяцев в промышленном компосте'
    },
    images: [
      'assets/images/mug_espresso_duo.jpg',
      'assets/images/espresso_cup.jpg',
      'assets/images/matte_black_cup.jpg'
    ]
  },
  {
    id: 'travel-tumbler-go',
    title: 'Термокружка «On-the-Go Urban» с клапаном',
    category: 'tumbler',
    categoryName: 'Travel Tumbler (с крышкой)',
    badge: 'С крышкой',
    badgeType: 'badge-thermo',
    price: 6800,
    priceFormatted: '6 800 ₸',
    volume: '400 мл',
    weight: '190 г',
    coffeePercent: '55% кофейного жмыха',
    shotsSaved: 10,
    shortDesc: 'Многоразовый travel-стакан с герметичной эко-крышкой и силиконовым кольцом. Помещается в любой автомобильный подстаканник.',
    description: 'Надежная замена одноразовым бумажным стаканам. Двойные стенки дольше сохраняют напиток горячим, а удобный флип-клапан защищает от брызг на ходу или в машине. Эко-крышка также содержит переработанный кофе.',
    specs: {
      volume: '400 мл (рабочий объем 360 мл)',
      dimensions: 'Высота: 155 мм, Диаметр дна: 66 мм',
      weight: '190 г',
      material: '55% жмых, 35% термостойкий PBS/PLA, 10% пищевой силикон',
      tempMax: 'до +98°C',
      dishwasher: 'Да (рекомендуется верхняя полка)',
      microwave: 'Не рекомендуется',
      compost: 'Корпус и крышка компостируемы'
    },
    images: [
      'assets/images/mug_tumbler_on_go.jpg',
      'assets/images/reusable_tumbler.jpg',
      'assets/images/workshop_craft.jpg'
    ]
  },
  {
    id: 'scandi-latte-mug',
    title: 'Большая кружка «Scandi Mug» с ручкой',
    category: 'mug',
    categoryName: 'Большие кружки (350 мл)',
    badge: 'Новинка',
    badgeType: 'badge-new',
    price: 5200,
    priceFormatted: '5 200 ₸',
    volume: '350 мл',
    weight: '175 г',
    coffeePercent: '60% кофейного жмыха',
    shotsSaved: 9,
    shortDesc: 'Скандинавский лаконичный дизайн с широкой эргономичной ручкой. Для больших порций фильтр-кофе, латте и чая.',
    description: 'Теплая форма, которую приятно обнять двумя ладонями промозглым утром. Текстурированные кофейные крапинки делают каждую чашку неповторимой — узор никогда не повторяется в точности.',
    specs: {
      volume: '350 мл',
      dimensions: 'Высота: 96 мм, Диаметр: 88 мм',
      weight: '175 г',
      material: '60% жмых SCG, 30% растительная матрица, 10% натуральные воски',
      tempMax: 'до +100°C',
      dishwasher: 'Да, до 65°C',
      microwave: 'Не рекомендуется',
      compost: '3–6 месяцев'
    },
    images: [
      'assets/images/mug_scandi_latte.jpg',
      'assets/images/mug_minimal_flat.jpg',
      'assets/images/cafe_collection.jpg'
    ]
  },
  {
    id: 'flatwhite-sensory',
    title: 'Сенсорный стакан «Flat White Pure» (без ручки)',
    category: 'cappuccino',
    categoryName: 'Капучино & Флэт Уайт',
    badge: 'Бариста-выбор',
    badgeType: 'badge-hit',
    price: 4300,
    priceFormatted: '4 300 ₸',
    volume: '180 мл',
    weight: '120 г',
    coffeePercent: '65% кофейного жмыха',
    shotsSaved: 5,
    shortDesc: 'Анатомический стакан без ручки с рифленой полосой для идеального тактильного контакта с напитком.',
    description: 'Разработан совместно со спешелти-бариста для каппингов и раскрытия букета флэт уайта. Матовая шелковистая кромка обеспечивает исключительно приятное ощущение при каждом глотке.',
    specs: {
      volume: '180 мл',
      dimensions: 'Высота: 72 мм, Диаметр: 78 мм',
      weight: '120 г',
      material: '65% жмых, 25% био-композит, 10% растительные смолы',
      tempMax: 'до +100°C',
      dishwasher: 'Да, 100+ моек',
      microwave: 'Не рекомендуется',
      compost: 'Биоразлагаемо'
    },
    images: [
      'assets/images/mug_minimal_flat.jpg',
      'assets/images/cappuccino_mug.jpg',
      'assets/images/grounds_macro.jpg'
    ]
  },
  {
    id: 'granite-coffee-cup',
    title: 'Кружка темной обжарки «Dark Roast Granite»',
    category: 'mug',
    categoryName: 'Большие кружки (300 мл)',
    badge: 'Глубокий цвет',
    badgeType: 'badge-new',
    price: 4800,
    priceFormatted: '4 800 ₸',
    volume: '300 мл',
    weight: '160 г',
    coffeePercent: '70% кофейного жмыха',
    shotsSaved: 7,
    shortDesc: 'Глубокий оттенок темного шоколада с матовой текстурой натурального камня. Не царапается и не выцветает.',
    description: 'В этой модели используется жмых темной итальянской обжарки с повышенным содержанием натуральных пигментов. Устойчива к падениям со стола и частой эксплуатации в офисе.',
    specs: {
      volume: '300 мл',
      dimensions: 'Высота: 90 мм, Диаметр: 82 мм',
      weight: '160 г',
      material: '70% кофейная фракция, 20% матрица, 10% защитные воски',
      tempMax: 'до +100°C',
      dishwasher: 'Да, тест на 100 циклов пройден',
      microwave: 'Не рекомендуется',
      compost: '3–6 месяцев (промышленный)'
    },
    images: [
      'assets/images/mug_granite_coffee.jpg',
      'assets/images/matte_black_cup.jpg',
      'assets/images/process_compounding.jpg'
    ]
  }
];

// ============================================================================
// 2. Shopping Cart Management
// ============================================================================

let cart = JSON.parse(localStorage.getItem('coffee_cup_cart') || '[]');

function saveCart() {
  localStorage.setItem('coffee_cup_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      volume: product.volume,
      shotsSaved: product.shotsSaved,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`Кружка добавлена в корзину!`, 'cart');
}

function updateCartItemQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast('Товар удален из корзины', 'info');
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalShots = cart.reduce((sum, item) => sum + ((item.shotsSaved || 5) * item.quantity), 0);
  const groundsGrams = totalShots * 18;

  // Update badge counters across header
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = totalCount;

  // Update drawer contents
  const itemsContainer = document.getElementById('cart-items-container');
  const totalPriceEl = document.getElementById('cart-total-price');
  const savedGramsEl = document.getElementById('cart-coffee-saved');

  if (totalPriceEl) totalPriceEl.textContent = `${totalPrice.toLocaleString('ru-RU')} ₸`;
  if (savedGramsEl) savedGramsEl.textContent = `${groundsGrams} г (~${totalShots} порций кофе)`;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">☕</div>
        <p>Ваша эко-корзина пуста</p>
        <p style="font-size: 0.84rem; margin-top: 8px;">Выберите любую чашку из каталога, чтобы сделать шаг к Zero Waste образу жизни.</p>
      </div>
    `;
  } else {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item-row" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
        <div>
          <h4 class="cart-item-title">${item.title}</h4>
          <span class="cart-item-sub">${item.volume}</span>
          <div class="cart-item-price">${(item.price * item.quantity).toLocaleString('ru-RU')} ₸</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px;">
          <div class="qty-stepper" style="padding: 2px 6px;">
            <button class="stepper-btn" onclick="updateCartItemQuantity('${item.id}', -1)" aria-label="Уменьшить">-</button>
            <span class="stepper-val" style="width: 24px; font-size: 0.85rem;">${item.quantity}</span>
            <button class="stepper-btn" onclick="updateCartItemQuantity('${item.id}', 1)" aria-label="Увеличить">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Удалить</button>
        </div>
      </div>
    `).join('');
  }
}

function openCartDrawer() {
  const drawerOverlay = document.getElementById('cart-drawer-overlay');
  if (drawerOverlay) {
    drawerOverlay.classList.add('active');
    drawerOverlay.setAttribute('aria-hidden', 'false');
  }
}

function closeCartDrawer() {
  const drawerOverlay = document.getElementById('cart-drawer-overlay');
  if (drawerOverlay) {
    drawerOverlay.classList.remove('active');
    drawerOverlay.setAttribute('aria-hidden', 'true');
  }
}

function checkoutOrder() {
  if (cart.length === 0) {
    showToast('Ваша корзина пуста. Добавьте понравившуюся кружку!', 'info');
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const promptPhone = prompt(`Оформление заказа на сумму ${total.toLocaleString('ru-RU')} ₸\n\nВведите ваш номер телефона или WhatsApp:`, '+7 ');
  
  if (promptPhone && promptPhone.trim().length > 4) {
    showToast('Спасибо за эко-заказ! Наш менеджер свяжется с вами в течение 15 минут.', 'eco');
    cart = [];
    saveCart();
    closeCartDrawer();
  }
}

// ============================================================================
// 3. Render Catalog & Homepage Products
// ============================================================================

function createProductCardHTML(product) {
  return `
    <article class="product-card" data-category="${product.category}">
      <div class="product-media" onclick="openProductModal('${product.id}')" title="Нажмите, чтобы рассмотреть подробно">
        <img src="${product.images[0]}" alt="${product.title}" class="product-thumb" loading="lazy">
        <span class="product-badge-flag ${product.badgeType}">${product.badge}</span>
        <span class="product-coffee-saved">
          <span>☕</span> ${product.shotsSaved} порций кофе внутри
        </span>
        <div class="product-quick-view-overlay">
          <span class="quick-view-btn-inner">🔍 Рассмотреть чашку</span>
        </div>
      </div>

      <div class="product-info">
        <div class="product-category-row">
          <span>${product.categoryName}</span>
          <span>${product.coffeePercent}</span>
        </div>

        <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.title}</h3>
        
        <p class="product-short-desc">${product.shortDesc}</p>

        <div class="product-spec-pills">
          <span class="spec-pill">Объем: ${product.volume}</span>
          <span class="spec-pill">Вес: ${product.weight}</span>
          <span class="spec-pill">до +100°C</span>
        </div>

        <div class="product-card-footer">
          <div class="product-price-box">
            <span class="product-price">${product.priceFormatted}</span>
            <span class="product-price-alt">В наличии на складе</span>
          </div>

          <div class="product-action-btns">
            <button class="btn btn-sm btn-outline" onclick="openProductModal('${product.id}')">
              Подробнее
            </button>
            <button class="btn-icon-cart" onclick="addToCart('${product.id}', 1)" aria-label="Добавить в корзину" title="В корзину">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 01-8 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog(filter = 'all') {
  const grid = document.getElementById('products-grid');
  const countDisplay = document.getElementById('product-count-display');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === filter);

  if (countDisplay) {
    countDisplay.textContent = `Показано: ${filtered.length} ${filtered.length === 1 ? 'модель' : 'моделей'}`;
  }

  grid.innerHTML = filtered.map(createProductCardHTML).join('');
}

function renderHomepagePreview() {
  const homeGrid = document.getElementById('homepage-products-preview');
  if (!homeGrid) return;
  // Render first 3 flagship models
  const topProducts = PRODUCTS_DATA.slice(0, 3);
  homeGrid.innerHTML = topProducts.map(createProductCardHTML).join('');
}

function setupCatalogFilters() {
  const container = document.getElementById('catalog-filters');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;

    container.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    tab.classList.add('active');

    const filterVal = tab.getAttribute('data-filter');
    renderCatalog(filterVal);
  });
}

// ============================================================================
// 4. Detailed Product Modal ("Возможность посмотреть любую из кружек")
// ============================================================================

let currentModalQty = 1;

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  currentModalQty = 1;
  const modalOverlay = document.getElementById('product-modal-overlay');
  const modalBody = document.getElementById('product-modal-content');
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-product-layout">
      <!-- Gallery Left -->
      <div class="modal-gallery-side">
        <div class="modal-main-img-box" id="modal-zoom-box">
          <img src="${product.images[0]}" alt="${product.title}" class="modal-main-img" id="modal-primary-img">
        </div>

        <div class="modal-thumb-strip">
          ${product.images.map((img, idx) => `
            <div class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="switchModalImage('${img}', this)">
              <img src="${img}" alt="Ракурс ${idx + 1}">
            </div>
          `).join('')}
        </div>

        <div class="modal-texture-callout">
          <span style="font-size: 1.3rem;">🔬</span>
          <div>
            <strong>Фактура натурального жмыха</strong>
            <p style="font-size: 0.78rem; color: #5e4c47;">Матовый бархатистый композит с естественными микрочастицами кофейного помола.</p>
          </div>
        </div>
      </div>

      <!-- Details Right -->
      <div class="modal-info-side">
        <div class="modal-badge-row">
          <span class="product-badge-flag ${product.badgeType}">${product.badge}</span>
          <span class="mat-pill">${product.coffeePercent}</span>
          <span class="mat-pill" style="color: #6B8F4E;">🌱 100% Zero Waste</span>
        </div>

        <h2 class="modal-product-title" id="modal-product-title">${product.title}</h2>

        <div class="modal-price-row">
          <span class="modal-price">${product.priceFormatted}</span>
          <span class="modal-in-stock">● В наличии в Алматы с быстрой доставкой</span>
        </div>

        <p class="modal-desc">${product.description}</p>

        <!-- Specifications Grid -->
        <div class="modal-specs-grid">
          <div class="spec-cell">
            <span class="spec-cell-label">Объем</span>
            <span class="spec-cell-val">${product.specs.volume}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Вес изделия</span>
            <span class="spec-cell-val">${product.specs.weight}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Термостойкость</span>
            <span class="spec-cell-val">${product.specs.tempMax}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Посудомоечная машина</span>
            <span class="spec-cell-val">${product.specs.dishwasher}</span>
          </div>
          <div class="spec-cell" style="grid-column: 1 / -1;">
            <span class="spec-cell-label">Состав биокомпозита</span>
            <span class="spec-cell-val">${product.specs.material}</span>
          </div>
          <div class="spec-cell" style="grid-column: 1 / -1;">
            <span class="spec-cell-label">Утилизация и компост</span>
            <span class="spec-cell-val">${product.specs.compost}</span>
          </div>
        </div>

        <!-- Environmental Impact Counter -->
        <div style="background: rgba(107, 143, 78, 0.12); border: 1px solid rgba(107, 143, 78, 0.25); border-radius: 12px; padding: 12px 16px; margin-bottom: 24px; display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 1.5rem;">🌍</span>
          <div style="font-size: 0.85rem; color: #251613;">
            При покупке этой чашки вы спасаете <strong>${product.shotsSaved * 18} г</strong> кофейной гущи (<strong>${product.shotsSaved} чашек эспрессо</strong>) от образования метана на полигоне ТБО!
          </div>
        </div>

        <!-- Actions -->
        <div class="modal-actions">
          <div class="qty-stepper">
            <button class="stepper-btn" onclick="changeModalQty(-1)" aria-label="Меньше">-</button>
            <span class="stepper-val" id="modal-qty-val">1</span>
            <button class="stepper-btn" onclick="changeModalQty(1)" aria-label="Больше">+</button>
          </div>

          <button class="btn btn-accent btn-lg" style="flex-grow: 1;" onclick="addCurrentModalToCart('${product.id}')">
            <span>Добавить в корзину</span>
            <span id="modal-add-price">${product.priceFormatted}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function switchModalImage(imgSrc, thumbEl) {
  const mainImg = document.getElementById('modal-primary-img');
  if (mainImg) mainImg.src = imgSrc;

  const thumbs = document.querySelectorAll('.modal-thumb');
  thumbs.forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function changeModalQty(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  const qtyEl = document.getElementById('modal-qty-val');
  if (qtyEl) qtyEl.textContent = currentModalQty;
}

function addCurrentModalToCart(productId) {
  addToCart(productId, currentModalQty);
  closeProductModal();
  openCartDrawer();
}

function closeProductModal() {
  const modalOverlay = document.getElementById('product-modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ============================================================================
// 5. Interactive Eco Impact Calculator
// ============================================================================

function setupEcoCalculator() {
  const slider = document.getElementById('eco-cups-slider');
  const cupsCountVal = document.getElementById('cups-count-val');
  const resGroundsKg = document.getElementById('res-grounds-kg');
  const resCupsMade = document.getElementById('res-cups-made');
  const resCo2Saved = document.getElementById('res-co2-saved');

  if (!slider) return;

  function update() {
    const cups = parseInt(slider.value, 10);
    const cupsWord = cups === 1 ? 'чашка' : (cups >= 2 && cups <= 4 ? 'чашки' : 'чашек');
    if (cupsCountVal) cupsCountVal.textContent = `${cups} ${cupsWord}`;

    const annualGroundsKg = (cups * 18 * 365) / 1000;
    const mugsManufactured = Math.round((annualGroundsKg * 1000) / 120);
    const co2SavedKg = (annualGroundsKg * 2.1).toFixed(1);

    if (resGroundsKg) resGroundsKg.textContent = `${annualGroundsKg.toFixed(1)} кг`;
    if (resCupsMade) resCupsMade.textContent = `${mugsManufactured} шт.`;
    if (resCo2Saved) resCo2Saved.textContent = `${co2SavedKg} кг`;
  }

  slider.addEventListener('input', update);
  update();
}

// ============================================================================
// 6. Partner Lead Form Submission
// ============================================================================

function handlePartnerSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('lead-name')?.value;
  const cafe = document.getElementById('lead-cafe')?.value;
  const phone = document.getElementById('lead-phone')?.value;

  const btn = document.getElementById('partner-submit-btn');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>Отправляем заявку...</span>';
  }

  setTimeout(() => {
    showToast(`Заявка для «${cafe}» принята! Логист свяжется с вами по номеру ${phone}.`, 'eco');
    document.getElementById('partner-lead-form')?.reset();
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<span>Заявка успешно отправлена ✓</span>';
      setTimeout(() => {
        btn.innerHTML = '<span>Подключить бесплатный сбор</span>';
      }, 4000);
    }
  }, 700);
}

// ============================================================================
// 7. Toast Notification System
// ============================================================================

function showToast(message, type = 'default') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'eco' ? 'toast-eco' : ''}`;
  
  const icon = type === 'eco' ? '🌱' : (type === 'cart' ? '☕' : 'ℹ️');
  toast.innerHTML = `<span>${icon}</span> <div>${message}</div>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ============================================================================
// 8. Initialization & Event Listeners
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Render
  renderCatalog('all');
  renderHomepagePreview();
  setupCatalogFilters();

  // 2. Setup Cart UI
  updateCartUI();
  document.getElementById('cart-trigger')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-drawer-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cart-drawer-overlay') closeCartDrawer();
  });

  // 3. Product Modal Close Handlers
  document.getElementById('modal-close-btn')?.addEventListener('click', closeProductModal);
  document.getElementById('product-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'product-modal-overlay') closeProductModal();
  });

  // 4. Eco Calculator Setup
  setupEcoCalculator();

  // 5. Mobile Navigation Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
    });
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('mobile-active');
      });
    });
  }

  // 6. Keyboard ESC Handler
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
    }
  });

  // 7. Interactive 3D tilt on Hero Card (Homepage only)
  const heroCard = document.getElementById('hero-card-showcase');
  if (heroCard && window.innerWidth > 992) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      heroCard.style.transform = `perspective(1000px) rotateY(${x * 0.02}deg) rotateX(${-y * 0.02}deg) translateY(-4px)`;
    });
    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)';
    });
  }
});
