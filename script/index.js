const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector('#rests-container')

  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest-1.jpg'

    },

    {
      id: 1,
      title: 'Тануки',
      time: 40,
      rating: 4.7,
      price: 800,
      type: 'Суши',
      image: 'rest-2.jpg'
    },
    {
      id: 2,
      title: 'FoodBand',
      time: 60,
      rating: 4.6,
      price: 1000,
      type: 'Бургеры',
      image: 'rest-3.jpg'
    },
    {
      id: 3,
      title: 'Жадина-пицца',
      time: 45,
      rating: 4.4,
      price: 700,
      type: 'Пицца',
      image: 'rest-4.jpg'
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 55,
      rating: 4.3,
      price: 650,
      type: 'Восточная кухня',
      image: 'rest-5.jpg'
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 35,
      rating: 4.8,
      price: 1200,
      type: 'Фастфуд',
      image: 'rest-6.jpg'
    }
  ];

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
  }

  const randerRests = (array) => {
    container.innerHTML = ''

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
        <a href="./goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="./images/rests/${card.image}" alt="${card.image}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h4 class="products-card__description--title">${card.title}</h4>
                    <div class="products-card__description--badge">${card.time} мин</div>
                  </div>

                  <div class="products-card__description-row">
                    <div class="products-card__description-info">
                      <div class="products-card__description-info--raiting">
                        <img src="./images/icons/star.svg" alt="star" />
                        ${card.rating}
                      </div>
                      <div class="products-card__description-info--price">
                        От ${card.price} ₽
                      </div>
                      <div class="products-card__description-info--group">
                        ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
        `)
    })

  }

  if (container) {
    loading()

    setTimeout(() => {
      randerRests(restArray)
    }, 1000)
  }

}

const goodsFunc = () => {
  const container = document.querySelector('#goods-container');

  const goodsArray = [
    {
      id: 0,
      title: 'Ролл угорь стандарт',
      description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      price: 250,
      image: 'good-1.jpg'
    },
    {
      id: 1,
      title: 'Калифорния лосось стандарт',
      description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, нори.',
      price: 395,
      image: 'good-2.jpg'
    },
    {
      id: 2,
      title: 'Окинава стандарт',
      description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец.',
      price: 250,
      image: 'good-3.jpg'
    },

    {
      id: 3,
      title: 'Цезарь маки хl',
      description: 'Рис, курица копчёная, сыр сливочный, салат айсберг, томаты.',
      price: 400,
      image: 'good-4.jpg'
    },
    {
      id: 4,
      title: 'Ясай маки стандарт 185 г',
      description: 'Рис, авокадо, огурец, салат, болгарский перец, нори.',
      price: 250,
      image: 'good-5.jpg'
    },
    {
      id: 5,
      title: 'Ролл с креветкой стандарт',
      description: 'Рис, креветка, сыр сливочный, огурец, нори.',
      price: 290,
      image: 'good-6.jpg'
    }
  ];

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>';
  };

  const renderGoods = (array) => {
    container.innerHTML = '';

    array.forEach((good) => {
      container.insertAdjacentHTML('beforeend', `
        <div class="products-card">
          <div class="products-card__image">
            <img src="${good.image}" alt="${good.image}" />
          </div>
          <div class="products-card__description">
            <div class="products-card__description-row">
              <h5 class="products-card__description--name">${good.title}</h5>
            </div>
            <div class="products-card__description-row">
              <p class="products-card__description--text">${good.description}</p> 
            </div>
            <div class="products-card__description-row">
              <div class="products-card__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img src="./images/icons/shopping-cart-white.svg" alt="shopping-cart" />
                </button>
                <span class="products-card__description-controls--price">${good.price} ₽</span>
              </div>
            </div>
          </div>
        </div>
      `);
    });
  };

  loading();

  setTimeout(() => {
    renderGoods(goodsArray);
  }, 2000);
};

modalFunc()
restsFunc()
goodsFunc();