function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modal-wrapper')
    modal.insertAdjacentHTML('afterbegin', `
    <div onclick="myfunc()" class="modal-overlay" data-close="true">        
        <div class="modal" id="modalScrll0" data-content>
            
        </div> 
        <div onclick="myfunc()" class="modal-close" data-close="true"><span class="close-text">Закрыть</span> <i class="fa-sharp fa-solid fa-xmark"></i></div>       
    </div>
`)
    document.body.appendChild(modal)
    return modal
}


$.modal = function (options) {
    const ANIMATION_SPEED = 300
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}