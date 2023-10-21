const random = (min,max) => Math.floor(min + Math.random() * (max + 1 - min))
const aiImg = document.querySelector('.ai-choice-main img')
const userImg = document.querySelector('.user-choice-main img')
const userChoiceItem = document.querySelectorAll('.choice-item')
let interval = null
const opt = {
    turnsAi: [],
    turnsUser: [],
    interval: 20,
    userScore: 0,
    aiScore: 0,
}

const generateAi = () => {
    let rand = random(1,3)
    aiImg.setAttribute('src',`./kartinki/${rand}.png`)
}

interval = setInterval(generateAi, opt.interval)