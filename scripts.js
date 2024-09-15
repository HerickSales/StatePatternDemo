class Carro {
    state

    constructor(){
        this.state=null
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state=state
    }

    doState(){
        this.state.action(this)
    }
}

class State{ 
    constructor(){}

    action(carro){
        carro.setState(this)
    }

}

class CarroAcelerado extends State{
    constructor(){
        super()
    }
     action(){
        let car= document.querySelector('.container-car')
        const computedStyle = window.getComputedStyle(car)
        const currentX= new WebKitCSSMatrix(computedStyle.transform).m41

        car.style.setProperty('--start-position',`${currentX}px`)
        car.style.animation='acelerar 15s linear'

    }
}

class CarroParado extends State{
    constructor(){
        super()
    }
    action(){
        let car= document.querySelector('.container-car')
        const computedStyle = window.getComputedStyle(car)
        const currentX= new WebKitCSSMatrix(computedStyle.transform).m41

        car.style.transform= `translateX(${currentX}px)`
        car.style.animation= 'none'
  

    }
}

class CarroRe extends State{
    constructor(){
        super()
    }
    action(carro){
        let car= document.querySelector('.container-car')
        const computedStyle = window.getComputedStyle(car)
        const currentX= new WebKitCSSMatrix(computedStyle.transform).m41

        car.style.setProperty('--start-position',`${currentX}px`)
        car.style.animation='retroceder 15s linear'

    }
}


let carro = new Carro()

let acelerado = new CarroAcelerado()    
let parado = new CarroParado()
let re= new  CarroRe()




let btnAcelerar = document.querySelector('#btn-acelerar')
let btnParar = document.querySelector('#btn-parar')
let btnRe = document.querySelector('#btn-voltar')

btnAcelerar.addEventListener('click',()=>{
    carro.setState(acelerado)
    carro.doState()
})

btnParar.addEventListener('click',()=>{
    carro.setState(parado)
    carro.doState()
})

btnRe.addEventListener('click',()=>{
    carro.setState(re)
    carro.doState()
})


