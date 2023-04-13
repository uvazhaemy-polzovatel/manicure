

const toHTML = card => `
<div class="card ${card.areaClass}">
                    <div class="card-header">
                        <div class="card-user" data-content>
                            <img src="${card.logo}"
                                alt="" class="card-ava">
                            <span class="card-name-user">${card.name}</span>
                        </div>
                        <div class="card-badges">
                            ${card.area}
                        </div>
                    </div>
                    <!-- /card-header -->
                    <div class="card-body">
                        <div class="card-galery-wrapper">
                            <div class="card-galery">
                                <img src="${card.img1}"
                                    alt="" class="card-galery-item">
                                <img src="${card.img2}"
                                    alt="" class="card-galery-item">
                                <img src="${card.img3}"
                                    alt="" class="card-galery-item">
                                <img src="${card.img4}"
                                    alt="" class="card-galery-item">
                            </div>
                        </div>

                        <div class="card-about">
                            ${card.about}
                        </div>
                    </div>
                    <div class="click-card" data-click="popup" data-id="${card.id}"></div>
                </div>
`

function render() {
    const html = card.map(toHTML).join('')
    document.querySelector('#card').innerHTML = html
}

render()

const modal = $.modal({
    closable: true
})

document.addEventListener('click', event => {
    const clickType = event.target.dataset.click
    const id = +event.target.dataset.id
    if (clickType === 'popup') {
        const cardId = card.find(f => f.id === id)
        modal.setContent(`
            <div class="modal-background">
                <div class="modal-background2">
                    <div class="modal-header">                          
                        <div class="user">
                            <img src="${cardId.logo}"
                                alt="" class="ava">
                            <span class="name-user">${cardId.name}</span>
                        </div>
                        <div class="badges">
                            ${cardId.area}
                        </div>                        
                    </div>
                    <div class="modal-body">
                        <div class="about">
                            <div class="modal-title">О себе</div>
                            <div class="about-text">${cardId.about}</div>
                        </div>
                        <div class="pricelist">
                            <div class="modal-title">Прайс-лист</div>
                            <div class="pricelist-wrapper">
                               ${cardId.pricelist}
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="modal-title">Адрес и телефон</div>
                        <div class="address-wrapper">
                            ${cardId.address}
                        </div>    
                        
                        <div class="portfolio">
                            <div class="modal-title">Галерея</div>
                            ${cardId.portfolio}
                        </div>
                        <div class="social">
                            <div class="modal-title">Ссылки</div>
                            <div class="social-wrapper">
                                ${cardId.social}
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>            
        `)
        modal.open()
    }
})

// Scroll reset

function myfunc() {
    var modalScrll0 = document.getElementById('modalScrll0')
    modalScrll0.scrollTop = 0
}

function myfunc2() {
    var containerScrll0 = document.getElementById('containerScrll0')
    containerScrll0.scrollTop = 0
}

// Select

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

document.querySelectorAll('.select-wrapper').forEach(function (selectWrapper) {

    const selectInput = selectWrapper.querySelector('.select-input')
    const select = selectWrapper.querySelector('.select')
    const selectItem = select.querySelectorAll('.select-item')


    // Клик по кнопке. Открыть/Закрыть select

    selectInput.addEventListener('click', function () {
        select.classList.toggle('open')
    })


    // Выбор элемента списка. Запомнить выбранное значение. Закрыть dropdown

    selectItem.forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            // e.stopPropagation()
            selectInput.innerHTML = this.innerText
            select.classList.remove('open')
        })
    })


    // Клик снаружи dropdown. Закрыть dropdown

    document.addEventListener('click', function (e) {
        if (e.target !== selectInput) {
            select.classList.remove('open')
        }
    })

})





// Filter

const filterCard = document.querySelectorAll('.card')
const selectDropdown = document.querySelector('.select-dropdown')

selectDropdown.addEventListener('click', event => {
    if (event.target.className !== 'select-item') return false

    let filterClass = event.target.dataset['id']

    filterCard.forEach(elem => {
        elem.classList.remove('filter-hide')
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('filter-hide')
        }
    })
})




// Dark-Light

let $toggler = document.getElementById('toggler'),
    toggleButton = document.querySelector('.dark-light');

if (toggleButton.classList.contains('light-mode')) {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
} else {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
}

$toggler.addEventListener('click', function () {
    toggleButton.classList.toggle('light-mode');

    if (toggleButton.classList.contains('light-mode')) {
        $toggler.querySelector('#light').style.display = 'none';
        $toggler.querySelector('#dark').style.display = 'block';
    } else {
        $toggler.querySelector('#light').style.display = 'block';
        $toggler.querySelector('#dark').style.display = 'none';
    }
})

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('light-mode-bg');
});
