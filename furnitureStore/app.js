window.addEventListener('load', solve);

function solve() {
    let modelEl = document.getElementById('model')
    let yearEl = document.getElementById('year')
    let descriptionEl = document.getElementById('description')
    let priceEl = document.getElementById('price')

    let furnitureList = document.getElementById('furniture-list')
    let totalPrice = document.querySelector('.total-price')
    let sum = 0

    let addBtn = document.getElementById('add')
    addBtn.addEventListener('click', add)

    function add(e){
        e.preventDefault()

        let model = modelEl.value 
        let year = yearEl.value
        let description = descriptionEl.value
        let price = Number(priceEl.value)

        if(model == '' || description == '' || year == '' || price == ''){
            return
        }
        if(year < 0 || price < 0){
            return
        }

        let tr = document.createElement('tr')
        tr.classList.add('info')

        let td1 = document.createElement('td')
        td1.textContent = `${model}`

        let td2 = document.createElement('td')
        td2.textContent = `${price.toFixed(2)}`

        let td3 = document.createElement('td')

        let btn1 = document.createElement('button')
        btn1.textContent = 'More Info'
        btn1.classList.add('moreBtn')

        let btn2 = document.createElement('button')
        btn2.textContent = 'Buy it'
        btn2.classList.add('buyBtn')

        td3.appendChild(btn1)
        td3.appendChild(btn2)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
    
        let tr2 = document.createElement('tr')
        tr2.classList.add('hide')
        tr2.style.display = 'none'
        let td4 = document.createElement('td')
        td4.textContent = `Year: ${year}`
        let td5 = document.createElement('td')
        td5.colSpan = "3"
        td5.textContent = `Description: ${description}`
        tr2.appendChild(td4)
        tr2.appendChild(td5)

        furnitureList.appendChild(tr)
        furnitureList.appendChild(tr2)

        let moreInfoBtn = tr.querySelector('.moreBtn')
        let buyBtn = tr.querySelector('.buyBtn')

        moreInfoBtn.addEventListener('click', moreInfo)
        buyBtn.addEventListener('click', buy)

        modelEl.value = ''
        descriptionEl.value = ''
        yearEl.value = ''
        priceEl.value = ''
        
    }
    function moreInfo(){
        let btn = document.querySelector('.moreBtn')
        let text = document.querySelector('.hide')
        if (btn.textContent == 'More Info'){
            btn.textContent = 'Less Info'
            text.style.display = 'contents'
        }else {
            btn.textContent = 'More Info'
            text.style.display = 'none'
        }

    }

    function buy(e){
        let price = document.querySelectorAll('td')[1].textContent
        sum += Number(price)
        totalPrice.textContent = sum.toFixed(2)

        e.target.parentNode.parentNode.remove()
    }
}
