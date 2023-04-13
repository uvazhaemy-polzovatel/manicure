// Данные карочек

const card = [
    // City Nails & Beauty
    {
        id: 1,
        areaClass: 'petrogradsky kalininsky',
        logo: 'img/city nails & beauty/logo.jpg',
        name: 'City Nails & Beauty',
        area: '<div class="card-badge-item"><div class="card-dot-badge"></div>Калининский</div> <div class="card-badge-item"><div class="card-dot-badge"></div>Петроградский</div>',
        img1: 'img/city nails & beauty/1.jpg',
        img2: 'img/city nails & beauty/2.jpg',
        img3: 'img/city nails & beauty/3.jpg',
        img4: 'img/city nails & beauty/4.jpg',
        pricelist: '<div class="pricelist-item"><div class="pricelist-name">Маникюр + гель-лак<div class="pricelist-discription">- Обработка кутикулы<br>- Обработка ногтевой пластины<br>- Однотонное покрытие гель-лаком</div></div><div class="price">1490р</div></div><div class="pricelist-item"><div class="pricelist-name">Педикюр + гель-лак<div class="pricelist-discription">- Обработка кутикулы<br>- Обработка ногтевой пластины<br>- Обработка стопы<br>- Однотонное покрытие гель-лаком</div></div><div class="price">1790р</div></div><div class="pricelist-item"><div class="pricelist-name">В 4 руки + гель-лак<div class="pricelist-discription">- Одновременная работа двух мастеров. Процедура экономит не меньше часа вашего времени</div></div><div class="price">3680р</div></div><div class="pricelist-item"><div class="pricelist-name">Японский маникюр<div class="pricelist-discription">- Обработка кутикулы<br>- Обработка ногтевой пластины<br>- Мгновенное восстановление ногтевой пластины, устранение видимых дефектов<br>- Полировка и глянцевание ногтевой пластины</div></div><div class="price">900р</div></div><div class="pricelist-item"><div class="pricelist-name">Бразильский маникюр<div class="pricelist-discription">- Обработка кутикулы без применения режущих инструментов<br>- Обработка ногтевой пластины<br>- СПА - уход за кожей рук и ногтями с использованием бразильской косметики, насыщенной витаминами и микроэлементами</div></div><div class="price">800р</div></div><div class="pricelist-item"><div class="pricelist-name">Покрытие shellac/ Vinylux/ лак<div class="pricelist-discription">*без маникюра или педикюра</div></div><div class="price">700р</div></div><div class="pricelist-item"><div class="pricelist-name">Покрытие френч<div class="pricelist-discription">- Дополнительно к стоимости маникюра или педикюра</div></div><div class="price">300р</div></div><div class="pricelist-item"><div class="pricelist-name">Дизайн одного ногтя</div><div class="price">100р</div></div><div class="pricelist-item"><div class="pricelist-name">Кислотный педикюр<div class="pricelist-discription">- Обработка кутикулы<br>- Обработка ногтевой пластины<br>- Обработка стопы израильскими средствами Kart<br>Процедура экономит не менее 30 минут вашего времени<br>Позволяет сохранять стопу гладкой и ухоженной минимум на 7 дней дольше</div></div><div class="price">1890р</div></div><div class="pricelist-item"><div class="pricelist-name">Мужской маникюр<div class="pricelist-discription">- Обработка кутикулы<br>- Обработка ногтевой пластины<br>- Уход за кожей рук</div></div><div class="price">790р</div></div><div class="pricelist-item"><div class="pricelist-name">Мужской педикюр<div class="pricelist-discription">- Обработка кутикулы<br>- Обработка ногтевой пластины<br>- Обработка стопы<br>- Уход за кожей ног</div></div><div class="price">1300р</div></div><div class="pricelist-item"><div class="pricelist-name">Детский маникюр<div class="pricelist-discription">- Обработка кутикулы без использования режущих инструментов<br>- Обработка ногтевой пластины<br>- Уход за кожей рук</div></div><div class="price">390р</div></div>',
        about: 'Мы экономим ваше время и деньги.<br>У нас цены ниже, чем в других салонах бизнес-класса, чтобы профессиональный уход за собой был доступен всем, а не только избранным.<br><br>Мы сделали доступными элитные услуги: маникюр и педикюр в 4 руки, израильский кислотный педикюр, японский маникюр и многие другие.<br><br>А еще у нас для всех вкусный кофе с печеньем, новинки кино на большом экране и оплата банковскими картами!<br>Ждем вас!<br><br>В работе мы используем продукцию только известных брендов.<br><br>Мы всегда рады воплощать в жизнь даже самые невероятные идеи наших клиентов.<br><br>Мы следим за модными трендами индустрии красоты, всегда держим в наличии больше 100 оттенков гель-лаков и широкий ассортимент материалов для дизайна ногтей и ресниц',
        address: '<div class="address">Петроградский район, Кронверкский проспект 21/2<br>100 метров от метро Горьковская<br><a href="tel:+79523777734" class="tel">+7 952 37 777 34</a></div><div class="address">Калининский район, Финляндский вокзал<br>улица Комсомола, 35Ж<br>100 метров от метро Площадь Ленина<br><a href="tel:+79522110112" class="tel">+7 952 211 01 12</a></div>',
        portfolio: '<div class="portfolio-wrapper"> <img src="img/city nails & beauty/1.jpg" alt="" class="portfolio-img"> <img src="img/city nails & beauty/2.jpg" alt="" class="portfolio-img"> <img src="img/city nails & beauty/3.jpg" alt="" class="portfolio-img"> <img src="img/city nails & beauty/4.jpg" alt="" class="portfolio-img"> <img src="img/city nails & beauty/5.jpg" alt="" class="portfolio-img"><img src="img/city nails & beauty/6.jpg" alt="" class="portfolio-img"><img src="img/city nails & beauty/7.jpg" alt="" class="portfolio-img"><img src="img/city nails & beauty/8.jpg" alt="" class="portfolio-img"><img src="img/city nails & beauty/9.jpg" alt="" class="portfolio-img"><img src="img/city nails & beauty/10.jpg" alt="" class="portfolio-img"></div>',
        social: '<a href="http://citynails.tilda.ws/" target="_blank" class="social-icon"><i class="fa-solid fa-globe"></i></a><a href="https://www.instagram.com/citynails.spb/" target="_blank" class="social-icon"><i class="fa-brands fa-instagram"></i></a><a href="https://vk.com/citynailsspb" target="_blank" class="social-icon"><i class="fa-brands fa-vk"></i></a><a href="https://www.facebook.com/citynails.spb" target="_blank" class="social-icon"><i class="fa-brands fa-facebook"></i></a>'
    },
    // Lovenails
    {
        id: 2,
        areaClass: 'centralny',
        logo: 'img/lovenails/logo.jpg',
        name: 'Lovenails',
        area: '<div class="card-badge-item"><div class="card-dot-badge"></div>Центральный</div>',
        img1: 'img/lovenails/1.jpg',
        img2: 'img/lovenails/2.jpg',
        img3: 'img/lovenails/3.jpg',
        img4: 'img/lovenails/4.jpg',
        pricelist: '<div class="pricelist-item"><div class="pricelist-name">Снятие + маникюр + покрытие гель лак</div><div class="price">2000р</div></div> <div class="pricelist-item"><div class="pricelist-name">Снятие + маникюр + гель-лак + дизайн</div><div class="price">от 2100р</div></div> <div class="pricelist-item"><div class="pricelist-name">Маникюр + гель лак + педикюр + гель-лак (комплекс со снятием)</div><div class="price">4500р</div></div> <div class="pricelist-item"><div class="pricelist-name">Коррекция ногтей + маникюр + покрытие гель лак</div><div class="price">3500р</div></div> <div class="pricelist-item"><div class="pricelist-name">Маникюр + гель-лак (френч)</div><div class="price">2500р</div></div>',
        about: 'Выбираете салон, где быстро можно сделать качественный маникюр в центре Санкт-Петербурга?  Добро пожаловать в студию маникюра и педикюра  "LoveNails"! Профессиональные талантливые мастера, уютная атмосфера и удобное расположение - в самом центре Санкт-Петербурга, в пяти минутах ходьбы от станции метро Гостиный двор.<br><br>На официальном сайте "LoveNails" вы найдёте удобный сервис для записи онлайн в наш салон маникюра, сможете самостоятельно записаться на маникюр и педикюр на удобное для вас время.<br><br>Мы за творчество, яркость, скорость и профессионализм. От сетевых гигантов мы выгодно отличаемся качеством выполнения работ и индивидуальным подходом к каждому нашему гостю. Об этом говорит несопоставимо низкий процент переделок (с декабря 2017г. их было всего 3). Студия предлагает весь спектр услуг ногтевого сервиса: идеальное покрытие гель лаком, наращивание ногтей, дизайны любой сложности, но, главное-исключительно бережное отношение к вашим рукам и ногам!<br><br>Инструменты и фрезы проходят полный цикл дезинфекции и 100% безопасны.',
    },
    // "Ногти"
    {
        id: 3,
        areaClass: 'admiralteysky',
        logo: 'img/city nails & beauty/logo.jpg',
        name: 'City Nails & Beauty',
        area: '<div class="card-badge-item"><div class="card-dot-badge"></div>Адмиралтейский</div>',
        img1: 'img/city nails & beauty/1.jpg',
        img2: 'img/city nails & beauty/2.jpg',
        img3: 'img/city nails & beauty/3.jpg',
        img4: 'img/city nails & beauty/4.jpg',
    }
]