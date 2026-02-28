// ---------- Данные книг ----------
const booksData = [
    {
        id: 1,
        title: "Три товарища",
        author: "Эрих Мария Ремарк",
        price: 420,
        genre: "роман",
        pages: 480,
        ageRating: "16+",
        publisher: "АСТ",
        year: 1936,
        cover: "./images/book1.webp",
        description: "Трагическая история любви на фоне послевоенной Германии."
    },
    {
        id: 2,
        title: "1984",
        author: "Джордж Оруэлл",
        price: 350,
        genre: "роман-антиутопия",
        pages: 320,
        ageRating: "16+",
        publisher: "Эксмо",
        year: 1949,
        cover: "./images/book2.webp",
        description: "Роман о тоталитарном обществе, где за каждым следит Большой Брат."
    },
    {
        id: 3,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        price: 500,
        genre: "роман",
        pages: 480,
        ageRating: "16+",
        publisher: "Азбука",
        year: 1967,
        cover: "./images/book3.webp",
        description: "Мистический роман о визите дьявола в советскую Москву."
    },
    {
        id: 4,
        title: "Убить пересмешника",
        author: "Харпер Ли",
        price: 400,
        genre: "роман",
        pages: 416,
        ageRating: "12+",
        publisher: "Corpus",
        year: 1960,
        cover: "./images/book4.webp",
        description: "История о расовой несправедливости глазами маленькой девочки."
    },
    {
        id: 5,
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        price: 300,
        genre: "повесть-сказка",
        pages: 120,
        ageRating: "6+",
        publisher: "Эксмо",
        year: 1943,
        cover: "./images/book5.webp",
        description: "Философская сказка о дружбе, любви и одиночестве."
    },
    {
        id: 6,
        title: "Преступление и наказание",
        author: "Федор Достоевский",
        price: 450,
        genre: "роман",
        pages: 672,
        ageRating: "16+",
        publisher: "АСТ",
        year: 1866,
        cover: "./images/book6.webp",
        description: "Психологический роман о студенте, решившем проверить свою теорию о 'праве на кровь'."
    },
    {
        id: 7,
        title: "Гарри Поттер и философский камень",
        author: "Дж.К. Роулинг",
        price: 650,
        genre: "фэнтези",
        pages: 432,
        ageRating: "6+",
        publisher: "Махаон",
        year: 1997,
        cover: "./images/book7.webp",
        description: "Первая книга о мальчике, который выжил, и его друзьях в школе чародейства и волшебства Хогвартс."
    },
    {
        id: 8,
        title: "Гордость и предубеждение",
        author: "Джейн Остин",
        price: 380,
        genre: "роман",
        pages: 416,
        ageRating: "12+",
        publisher: "Азбука",
        year: 1813,
        cover: "./images/book8.webp",
        description: "Остроумная история любви между дочерью обедневшего дворянина и гордым аристократом."
    },
    {
        id: 9,
        title: "Война и мир. Том 1",
        author: "Лев Толстой",
        price: 550,
        genre: "роман-эпопея",
        pages: 736,
        ageRating: "12+",
        publisher: "АСТ",
        year: 1867,
        cover: "./images/book9.webp",
        description: "Величайшая эпопея русской литературы о жизни русского общества в эпоху наполеоновских войн."
    },
    {
        id: 10,
        title: "Портрет Дориана Грея",
        author: "Оскар Уайльд",
        price: 360,
        genre: "роман",
        pages: 320,
        ageRating: "16+",
        publisher: "Эксмо",
        year: 1890,
        cover: "./images/book10.webp",
        description: "Философский роман о красоте, грехе и вечной молодости."
    },
    {
        id: 11,
        title: "Старик и море",
        author: "Эрнест Хемингуэй",
        price: 290,
        genre: "повесть",
        pages: 128,
        ageRating: "12+",
        publisher: "АСТ",
        year: 1952,
        cover: "./images/book11.webp",
        description: "Философская повесть о старом рыбаке и его борьбе с огромной рыбой."
    },
    {
        id: 12,
        title: "Вино из одуванчиков",
        author: "Рэй Брэдбери",
        price: 410,
        genre: "роман",
        pages: 384,
        ageRating: "12+",
        publisher: "Эксмо",
        year: 1957,
        cover: "./images/book12.webp",
        description: "Автобиографичная книга о лете, детстве и умении радоваться простым вещам."
    },
    {
        id: 13,
        title: "Сто лет одиночества",
        author: "Габриэль Гарсиа Маркес",
        price: 600,
        genre: "роман",
        pages: 544,
        ageRating: "16+",
        publisher: "АСТ",
        year: 1967,
        cover: "./images/book13.webp",
        description: "Семейная сага в стиле магического реализма, повествующая о истории рода Буэндиа."
    },
    {
        id: 14,
        title: "Шерлок Холмс. Повести и рассказы",
        author: "Артур Конан Дойл",
        price: 500,
        genre: "детектив",
        pages: 608,
        ageRating: "12+",
        publisher: "Азбука",
        year: 1892,
        cover: "./images/book14.webp",
        description: "Сборник рассказов о знаменитом сыщике с Бейкер-стрит."
    },
    {
        id: 15,
        title: "Цветы для Элджернона",
        author: "Дэниел Киз",
        price: 380,
        genre: "научная фантастика",
        pages: 384,
        ageRating: "16+",
        publisher: "Эксмо",
        year: 1959,
        cover: "./images/book15.webp",
        description: "Трогательная история об умственно отсталом мужчине, ставшем гением в результате эксперимента."
    },
    {
        id: 16,
        title: "Анна Каренина",
        author: "Лев Толстой",
        price: 550,
        genre: "роман",
        pages: 864,
        ageRating: "16+",
        publisher: "АСТ",
        year: 1877,
        cover: "./images/book16.webp",
        description: "Трагическая история любви замужней женщины и блестящего офицера."
    },
    {
        id: 17,
        title: "Над пропастью во ржи",
        author: "Джером Сэлинджер",
        price: 370,
        genre: "роман",
        pages: 288,
        ageRating: "16+",
        publisher: "Эксмо",
        year: 1951,
        cover: "./images/book17.webp",
        description: "Культовый роман о подростковом бунте и поиске себя."
    },
    {
        id: 18,
        title: "Мартин Иден",
        author: "Джек Лондон",
        price: 390,
        genre: "роман",
        pages: 416,
        ageRating: "12+",
        publisher: "АСТ",
        year: 1909,
        cover: "./images/book18.webp",
        description: "История о простом моряке, который ради любви к девушке из высшего общества решает стать писателем."
    },
    {
        id: 19,
        title: "Собачье сердце",
        author: "Михаил Булгаков",
        price: 320,
        genre: "повесть",
        pages: 160,
        ageRating: "12+",
        publisher: "Азбука",
        year: 1925,
        cover: "./images/book19.webp",
        description: "Сатирическая повесть об эксперименте по превращению собаки в человека."
    },
    {
        id: 20,
        title: "О дивный новый мир",
        author: "Олдос Хаксли",
        price: 400,
        genre: "роман-антиутопия",
        pages: 352,
        ageRating: "16+",
        publisher: "АСТ",
        year: 1932,
        cover: "./images/book20.webp",
        description: "Антиутопия о 'потребительском' обществе, где люди выращиваются в пробирках и счастливы по обязанности."
    },
    {
        id: 21,
        title: "Тихий Дон",
        author: "Михаил Шолохов",
        price: 700,
        genre: "роман-эпопея",
        pages: 1600,
        ageRating: "16+",
        publisher: "АСТ",
        year: 1940,
        cover: "./images/book21.webp",
        description: "Масштабное повествование о жизни донского казачества в годы Первой мировой и Гражданской войны."
    },
    {
        id: 22,
        title: "Властелин колец. Братство Кольца",
        author: "Дж.Р.Р. Толкин",
        price: 650,
        genre: "фэнтези",
        pages: 544,
        ageRating: "12+",
        publisher: "АСТ",
        year: 1954,
        cover: "./images/book22.webp",
        description: "Первая часть знаменитой трилогии о путешествии хоббита Фродо и его друзей в Мордор."
    },
    {
        id: 23,
        title: "451° по Фаренгейту",
        author: "Рэй Брэдбери",
        price: 360,
        genre: "роман-антиутопия",
        pages: 256,
        ageRating: "12+",
        publisher: "Эксмо",
        year: 1953,
        cover: "./images/book23.webp",
        description: "Мир, в котором книги сжигают, а главный герой — пожарный, чья работа жечь книги."
    },
    {
        id: 24,
        title: "Поющие в терновнике",
        author: "Колин Маккалоу",
        price: 480,
        genre: "роман",
        pages: 608,
        ageRating: "16+",
        publisher: "Азбука",
        year: 1977,
        cover: "./images/book24.webp",
        description: "Семейная сага о любви, которая длится всю жизнь, на фоне австралийских пейзажей."
    },
    {
        id: 25,
        title: "Зов предков",
        author: "Джек Лондон",
        price: 280,
        genre: "повесть",
        pages: 160,
        ageRating: "12+",
        publisher: "АСТ",
        year: 1903,
        cover: "./images/book25.webp",
        description: "История о собаке по кличке Бэк, похищенной из уютной жизни и попавшей в суровый мир золотоискателей."
    },
    {
        id: 26,
        title: "Пикник на обочине",
        author: "Аркадий и Борис Стругацкие",
        price: 410,
        genre: "фантастика",
        pages: 352,
        ageRating: "16+",
        publisher: "АСТ",
        year: 1972,
        cover: "./images/book26.webp",
        description: "История о Зоне — месте посещения инопланетян, и сталкерах, которые рискуют жизнью ради артефактов."
    },
    {
        id: 27,
        title: "Джейн Эйр",
        author: "Шарлотта Бронте",
        price: 390,
        genre: "роман",
        pages: 544,
        ageRating: "12+",
        publisher: "Эксмо",
        year: 1847,
        cover: "./images/book27.webp",
        description: "История о сложной судьбе гувернантки, которая ищет любви и независимости."
    },
    {
        id: 28,
        title: "Трудно быть богом",
        author: "Аркадий и Борис Стругацкие",
        price: 390,
        genre: "фантастика",
        pages: 288,
        ageRating: "12+",
        publisher: "АСТ",
        year: 1964,
        cover: "./images/book28.webp",
        description: "Приключения землянина на планете, застрявшей в средневековье, где ему запрещено вмешиваться в историю."
    },
    {
        id: 29,
        title: "Чайка по имени Джонатан Ливингстон",
        author: "Ричард Бах",
        price: 300,
        genre: "притча",
        pages: 160,
        ageRating: "12+",
        publisher: "София",
        year: 1970,
        cover: "./images/book29.webp",
        description: "Философская притча о чайке, которая хотела летать не только ради еды, но и ради совершенства."
    },
    {
        id: 30,
        title: "Унесенные ветром",
        author: "Маргарет Митчелл",
        price: 700,
        genre: "роман",
        pages: 1216,
        ageRating: "16+",
        publisher: "Эксмо",
        year: 1936,
        cover: "./images/book30.webp",
        description: "История о взрослении и выживании южной красавицы Скарлетт О'Хара во время Гражданской войны в США."
    },
    {
        id: 31,
        title: "Мы",
        author: "Евгений Замятин",
        price: 330,
        genre: "роман-антиутопия",
        pages: 288,
        ageRating: "16+",
        publisher: "Азбука",
        year: 1921,
        cover: "./images/book31.webp",
        description: "Первая в мире антиутопия, описывающая общество тотального контроля, где у людей нет имен, только номера."
    },
    {
        id: 32,
        title: "Приключения Шерлока Холмса",
        author: "Артур Конан Дойл",
        price: 450,
        genre: "детектив",
        pages: 512,
        ageRating: "12+",
        publisher: "Махаон",
        year: 1892,
        cover: "./images/book32.webp",
        description: "Сборник из двенадцати детективных рассказов о гениальном сыщике."
    },
    {
        id: 33,
        title: "Ребекка",
        author: "Дафна Дюморье",
        price: 420,
        genre: "роман",
        pages: 480,
        ageRating: "16+",
        publisher: "Азбука",
        year: 1938,
        cover: "./images/book33.webp",
        description: "Готический роман о молодой женщине, которая выходит замуж за аристократа, но чувствует присутствие его первой жены."
    },
    {
        id: 34,
        title: "Алхимик",
        author: "Пауло Коэльо",
        price: 400,
        genre: "роман-притча",
        pages: 224,
        ageRating: "12+",
        publisher: "АСТ",
        year: 1988,
        cover: "./images/book34.webp",
        description: "Философская сказка о путешествии андалузского пастуха к пирамидам в поисках сокровищ."
    },
    {
        id: 35,
        title: "Кэрри",
        author: "Стивен Кинг",
        price: 360,
        genre: "ужасы",
        pages: 320,
        ageRating: "18+",
        publisher: "АСТ",
        year: 1974,
        cover: "./images/book35.webp",
        description: "Первый роман короля ужасов о девушке-изгое, обладающей способностью к телекинезу."
    }
];

// ---------- Уведомления ----------
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// ---------- Работа с localStorage ----------
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

// ---------- Рендер карточки книги ----------
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
          <div>
              <button class="btn btn-small btn-secondary add-to-cart" data-id="${book.id}">В корзину</button>
              <button class="btn btn-small btn-secondary favorite-toggle" data-id="${book.id}">
                ${isFavorite(book.id) ? '★' : '☆'}
              </button>
          </div>
        </div>
      ` : ''}
    </div>
  `;
    return card;
}

// ---------- Инициализация страниц ----------
document.addEventListener('DOMContentLoaded', () => {
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

    // Глобальные обработчики для кнопок (делегирование)
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

    // Запуск страничных функций
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
    // Остальные страницы статичны
});

// ---------- Главная страница ----------
function initIndexPage() {
    // Рекомендуемые (первые 4)
    const recommended = booksData.slice(0, 4);
    const recGrid = document.getElementById('recommended-grid');
    if (recGrid) {
        recommended.forEach(book => recGrid.appendChild(renderBookCard(book)));
    }

    // Новинки (последние 4)
    const newBooks = booksData.slice(-4);
    const newGrid = document.getElementById('new-grid');
    if (newGrid) {
        newBooks.forEach(book => newGrid.appendChild(renderBookCard(book)));
    }

    // Хиты продаж (перемешаем для примера)
    const bestsellers = [booksData[1], booksData[3], booksData[5], booksData[7]];
    const bestGrid = document.getElementById('bestsellers-grid');
    if (bestGrid) {
        bestsellers.forEach(book => bestGrid.appendChild(renderBookCard(book)));
    }
}

// ---------- Каталог ----------
function initCatalogPage() {
    const container = document.getElementById('catalog-grid');
    const filterGenre = document.getElementById('filter-genre');
    const filterAuthor = document.getElementById('filter-author');
    const filterAge = document.getElementById('filter-age');
    const filterMinPrice = document.getElementById('filter-min-price');
    const filterMaxPrice = document.getElementById('filter-max-price');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');

    // Заполнение селектов уникальными значениями
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

    // Получаем поисковый запрос из URL
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
        const filtered = filterBooks();
        renderBooks(filtered);
    }

    applyFiltersBtn.addEventListener('click', updateCatalog);
    resetFiltersBtn.addEventListener('click', () => {
        filterGenre.value = '';
        filterAuthor.value = '';
        filterAge.value = '';
        filterMinPrice.value = '';
        filterMaxPrice.value = '';
        // Очищаем search в URL, но проще перезагрузить без параметра
        window.location.href = 'catalog.html';
    });

    // Первоначальный рендер с учётом поиска
    renderBooks(filterBooks());
}

// ---------- Карточка товара ----------
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

// ---------- Избранное ----------
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

// ---------- Корзина ----------
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

            // HTML с раздельными элементами
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

    // Обработчики событий (делегирование)
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
            renderCart(); // перерисуем для обновления totals и скрытия формы при пустой корзине
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