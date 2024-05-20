const form = document.querySelectorAll(".form")
const btns = document.querySelectorAll(".btn")

function resetForm(){
    form.forEach( value =>{
        value.classList.remove("open")
    })
}

function resetSelect(){
    btns.forEach(value =>{
        value.classList.remove("selectedBtn")
    })
}

function openForm(data){
    resetForm()
    resetSelect()
    if(data == "aluno"){
        btns[0].classList.add("selectedBtn")
        form[0].classList.add('open')
    }
    else if(data == "professor"){
        btns[1].classList.add("selectedBtn")
        form[1].classList.add('open')
    }
    else if(data == "fornecedor"){
        btns[2].classList.add("selectedBtn")
        form[2].classList.add('open')
    }
}