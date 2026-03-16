let booksData = []; // из JSON

//Уведомления
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

//Работа с localStorage
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function addToFavorites(bookId) {
    const favorites = getFavorites();
    if (!favorites.includes(bookId)) {
        favorites.push(bookId);
        saveFavorites(favorites);
        showNotification('Книга добавлена в избранное');
    } else {
        showNotification('Книга уже в избранном', 'error');
    }
}

function removeFromFavorites(bookId) {
    let favorites = getFavorites();
    favorites = favorites.filter(id => id !== bookId);
    saveFavorites(favorites);
    showNotification('Книга удалена из избранного');
}

function isFavorite(bookId) {
    return getFavorites().includes(bookId);
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || {};
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(bookId, quantity = 1) {
    const cart = getCart();
    cart[bookId] = (cart[bookId] || 0) + quantity;
    saveCart(cart);
    showNotification('Товар добавлен в корзину');
}

function updateCartItem(bookId, quantity) {
    const cart = getCart();
    if (quantity <= 0) {
        delete cart[bookId];
    } else {
        cart[bookId] = quantity;
    }
    saveCart(cart);
}

function removeFromCart(bookId) {
    updateCartItem(bookId, 0);
    showNotification('Товар удалён из корзины');
}

function getCartItems() {
    const cart = getCart();
    return Object.entries(cart).map(([id, qty]) => ({
        id: parseInt(id),
        quantity: qty
    }));
}

//Рендер карточки книги
function renderBookCard(book, showActions = true) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
    <img src="${book.cover}" alt="${book.title}">
    <div class="info">
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <p class="price">${book.price} ₽</p>
      ${showActions ? `
        <div class="actions">
          <a href="product.html?id=${book.id}" class="btn btn-small">Подробнее</a>
          <button class="btn btn-small btn-secondary add-to-cart" data-id="${book.id}">В корзину</button>
          <button class="btn btn-small btn-secondary favorite-toggle" data-id="${book.id}">
            ${isFavorite(book.id) ? '★' : '☆'}
          </button>
        </div>
      ` : ''}
    </div>
  `;
    return card;
}

//Функции для каждой страницы
function initIndexPage() {
    const recGrid = document.getElementById('recommended-grid');
    if (recGrid) {
        booksData.slice(0, 4).forEach(book => recGrid.appendChild(renderBookCard(book)));
    }

    const newGrid = document.getElementById('new-grid');
    if (newGrid) {
        booksData.slice(-4).forEach(book => newGrid.appendChild(renderBookCard(book)));
    }

    const bestGrid = document.getElementById('bestsellers-grid');
    if (bestGrid) {
        const bestsellers = [booksData[1], booksData[3], booksData[5], booksData[7]];
        bestsellers.forEach(book => bestGrid.appendChild(renderBookCard(book)));
    }
}

function initCatalogPage() {
    const container = document.getElementById('catalog-grid');
    const filterGenre = document.getElementById('filter-genre');
    const filterAuthor = document.getElementById('filter-author');
    const filterAge = document.getElementById('filter-age');
    const filterMinPrice = document.getElementById('filter-min-price');
    const filterMaxPrice = document.getElementById('filter-max-price');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');

    // Заполнение селектов на каталоге
    const genres = [...new Set(booksData.map(b => b.genre))];
    genres.sort().forEach(g => {
        const option = document.createElement('option');
        option.value = g;
        option.textContent = g;
        filterGenre.appendChild(option);
    });

    const authors = [...new Set(booksData.map(b => b.author))];
    authors.sort().forEach(a => {
        const option = document.createElement('option');
        option.value = a;
        option.textContent = a;
        filterAuthor.appendChild(option);
    });

    const ages = [...new Set(booksData.map(b => b.ageRating))];
    ages.sort().forEach(a => {
        const option = document.createElement('option');
        option.value = a;
        option.textContent = a;
        filterAge.appendChild(option);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search') || '';
    if (searchQuery) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = searchQuery;
    }

    function filterBooks() {
        const genre = filterGenre.value;
        const author = filterAuthor.value;
        const age = filterAge.value;
        const minPrice = parseFloat(filterMinPrice.value) || 0;
        const maxPrice = parseFloat(filterMaxPrice.value) || Infinity;
        const query = searchQuery.toLowerCase();

        return booksData.filter(book => {
            if (genre && book.genre !== genre) return false;
            if (author && book.author !== author) return false;
            if (age && book.ageRating !== age) return false;
            if (book.price < minPrice || book.price > maxPrice) return false;
            if (query && !book.title.toLowerCase().includes(query) && !book.author.toLowerCase().includes(query)) return false;
            return true;
        });
    }

    function renderBooks(books) {
        container.innerHTML = '';
        if (books.length === 0) {
            container.innerHTML = '<p>Книг не найдено</p>';
        } else {
            books.forEach(book => container.appendChild(renderBookCard(book)));
        }
    }

    function updateCatalog() {
        renderBooks(filterBooks());
    }

    applyFiltersBtn.addEventListener('click', updateCatalog);
    resetFiltersBtn.addEventListener('click', () => {
        filterGenre.value = '';
        filterAuthor.value = '';
        filterAge.value = '';
        filterMinPrice.value = '';
        filterMaxPrice.value = '';
        window.location.href = 'catalog.html'; // сброс поиска
    });

    renderBooks(filterBooks());
}

function initProductPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const book = booksData.find(b => b.id === id);

    if (!book) {
        document.getElementById('product-detail').innerHTML = '<p>Книга не найдена</p>';
        return;
    }

    const container = document.getElementById('product-detail');
    container.innerHTML = `
    <div class="product-image">
      <img src="${book.cover}" alt="${book.title}">
    </div>
    <div class="product-info">
      <h1>${book.title}</h1>
      <p class="author">${book.author}</p>
      <p class="price">${book.price} ₽</p>
      <div class="product-specs">
        <p><strong>Жанр:</strong> ${book.genre}</p>
        <p><strong>Страниц:</strong> ${book.pages}</p>
        <p><strong>Возрастной ценз:</strong> ${book.ageRating}</p>
        <p><strong>Издательство:</strong> ${book.publisher}</p>
        <p><strong>Год издания:</strong> ${book.year}</p>
      </div>
      <p class="product-description">${book.description}</p>
      <div class="product-actions">
        <button class="btn" id="add-to-cart">В корзину</button>
        <button class="btn btn-secondary" id="favorite-toggle">
          ${isFavorite(book.id) ? '★ Удалить из избранного' : '☆ В избранное'}
        </button>
      </div>
    </div>
  `;

    document.getElementById('add-to-cart').addEventListener('click', () => {
        addToCart(book.id);
    });

    const favBtn = document.getElementById('favorite-toggle');
    favBtn.addEventListener('click', () => {
        if (isFavorite(book.id)) {
            removeFromFavorites(book.id);
            favBtn.textContent = '☆ В избранное';
        } else {
            addToFavorites(book.id);
            favBtn.textContent = '★ Удалить из избранного';
        }
    });
}

function initFavoritesPage() {
    const container = document.getElementById('favorites-grid');
    const favoritesIds = getFavorites();
    const favoriteBooks = booksData.filter(book => favoritesIds.includes(book.id));

    if (favoriteBooks.length === 0) {
        container.innerHTML = '<p>В избранном пока нет книг.</p>';
        return;
    }

    favoriteBooks.forEach(book => {
        container.appendChild(renderBookCard(book));
    });
}

function initCartPage() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const totalContainer = document.getElementById('cart-total-container');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const orderForm = document.getElementById('order-form');
    const cancelBtn = document.getElementById('cancel-order');

    function renderCart() {
        const cartItems = getCartItems();
        container.innerHTML = '';

        if (cartItems.length === 0) {
            container.innerHTML = '<p>Корзина пуста.</p>';
            if (totalContainer) totalContainer.style.display = 'none';
            if (checkoutBtn) checkoutBtn.style.display = 'none';
            if (checkoutForm) checkoutForm.style.display = 'none';
            return;
        }

        let total = 0;
        cartItems.forEach(item => {
            const book = booksData.find(b => b.id === item.id);
            if (!book) return;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.dataset.id = book.id;
            itemDiv.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" class="cart-item-image" onclick="window.location='product.html?id=${book.id}'" style="cursor: pointer;">
        <div class="cart-item-info">
          <a href="product.html?id=${book.id}" class="cart-item-title">${book.title}</a>
          <span class="cart-item-author">${book.author}</span>
          <span class="cart-item-price">${book.price} ₽</span>
        </div>
        <div class="cart-item-quantity">
          <button class="btn-small btn-secondary" data-action="decr">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="btn-small btn-secondary" data-action="incr">+</button>
        </div>
        <button class="btn-small btn-secondary cart-item-remove" data-action="remove">Удалить</button>
      `;
            container.appendChild(itemDiv);
            total += book.price * item.quantity;
        });

        totalEl.textContent = `${total} ₽`;
        totalContainer.style.display = 'block';
        checkoutBtn.style.display = 'inline-block';
        checkoutForm.style.display = 'none';
    }

    renderCart();

    container.addEventListener('click', e => {
        const target = e.target;
        const cartItem = target.closest('.cart-item');
        if (!cartItem) return;
        const id = parseInt(cartItem.dataset.id);
        const quantitySpan = cartItem.querySelector('.quantity');
        let currentQty = parseInt(quantitySpan.textContent);

        if (target.dataset.action === 'incr') {
            currentQty++;
            updateCartItem(id, currentQty);
            quantitySpan.textContent = currentQty;
        } else if (target.dataset.action === 'decr') {
            if (currentQty > 1) {
                currentQty--;
                updateCartItem(id, currentQty);
                quantitySpan.textContent = currentQty;
            }
        } else if (target.dataset.action === 'remove') {
            removeFromCart(id);
            cartItem.remove();
            renderCart();
            return;
        }
        recalcTotal();
    });

    function recalcTotal() {
        const items = document.querySelectorAll('.cart-item');
        let total = 0;
        items.forEach(item => {
            const id = parseInt(item.dataset.id);
            const qty = parseInt(item.querySelector('.quantity').textContent);
            const book = booksData.find(b => b.id === id);
            if (book) total += book.price * qty;
        });
        totalEl.textContent = `${total} ₽`;
    }

    checkoutBtn.addEventListener('click', () => {
        checkoutForm.style.display = 'block';
        checkoutBtn.style.display = 'none';
    });

    cancelBtn.addEventListener('click', () => {
        checkoutForm.style.display = 'none';
        checkoutBtn.style.display = 'inline-block';
        orderForm.reset();
    });

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(orderForm);
        const order = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            address: formData.get('address'),
            comment: formData.get('comment'),
            items: getCartItems(),
            total: totalEl.textContent,
            date: new Date().toLocaleString()
        };
        console.log('Заказ оформлен:', order);
        showNotification('Заказ успешно оформлен!', 'success');
        localStorage.removeItem('cart');
        renderCart();
        orderForm.reset();
    });
}

//Загрузка данных и запуск нужной страницы
document.addEventListener('DOMContentLoaded', () => {
    // Показываем индикатор загрузки
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading';
    loadingDiv.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(255,255,255,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    z-index: 2000;
  `;
    loadingDiv.textContent = 'Загрузка данных...';
    document.body.appendChild(loadingDiv);

    fetch('books.json')
        .then(response => {
            if (!response.ok) throw new Error('Ошибка загрузки данных');
            return response.json();
        })
        .then(data => {
            booksData = data;
            loadingDiv.remove();

            // Определяем текущую страницу
            const path = window.location.pathname;
            const page = path.split('/').pop() || 'index.html';

            // Бургер-меню
            const burger = document.getElementById('burger');
            const navMenu = document.getElementById('navMenu');
            if (burger && navMenu) {
                burger.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                });
            }

            // Подсветка активного пункта меню
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === page) {
                    link.classList.add('active');
                }
            });

            // Глобальные обработчики делегирование
            document.addEventListener('click', e => {
                if (e.target.classList.contains('add-to-cart')) {
                    const id = parseInt(e.target.dataset.id);
                    addToCart(id);
                }
                if (e.target.classList.contains('favorite-toggle')) {
                    const id = parseInt(e.target.dataset.id);
                    if (isFavorite(id)) {
                        removeFromFavorites(id);
                        e.target.textContent = '☆';
                    } else {
                        addToFavorites(id);
                        e.target.textContent = '★';
                    }
                }
            });

            // Запуск страничной функции
            if (page === 'index.html' || page === '') {
                initIndexPage();
            } else if (page === 'catalog.html') {
                initCatalogPage();
            } else if (page === 'product.html') {
                initProductPage();
            } else if (page === 'favorites.html') {
                initFavoritesPage();
            } else if (page === 'cart.html') {
                initCartPage();
            }
        })
        .catch(error => {
            loadingDiv.textContent = 'Ошибка загрузки данных. Обновите страницу.';
            console.error(error);
        });
});
