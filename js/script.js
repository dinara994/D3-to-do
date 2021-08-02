const textInput = document.querySelector('.text-input')
const addBtn = document.querySelector('.add-btn')
const clearAll = document.querySelector('.clear-all')
const list = document.querySelector('.list')

 addBtn.addEventListener('click', () => { //
    if (textInput.value.trim()) { //убрать пробелы и пустую строку
        const template = `<li>
                            <input type="checkbox" class="done"> 
                            ${textInput.value} 
                            <button class="del-btn">Удалить</button>
                            </li>`
        list.innerHTML += template //втавить HTML код
        textInput.value = '' //Очистить инпут при добавление инф.
    }
})
//------Enter
 textInput.addEventListener("keyup", (ev) => {
     if (ev.keyCode === 13) {
         const template = `<li>
                            <input type="checkbox" class="done"> 
                            ${textInput.value} 
                            <button class="del-btn">Удалить</button>
                            </li>`
         list.innerHTML += template
         textInput.value = ''
     }
})
clearAll.addEventListener("click", () => {
    list.innerHTML = ""
    textInput.innerHTML = ""
})

//Видео 40 мин
list.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'del-btn') { //Взять class с нулевым idx [0]
        event.target.parentNode.remove() // и удвёалить его родителя.
    }


        if (event.target.classList[0] === "done") {
            event.target.parentNode.classList.toggle("line-through")
        }

})






// event - обьек хранит нажатие
// target - показывает на что был нажат


//classList.add - добавить
//classList.remove() - удалить
//classList.toggle(class) -






// label {
//     position: relative;
//     vertical-align: middle;
//     cursor: pointer;
//     padding: 18px 18px 18px 40px;
//     display: block;
// }

    // ::-webkit-input-placeholder {
    // color: #f2a899;
    // font-size: 18px;
    // opacity: 0.6;





