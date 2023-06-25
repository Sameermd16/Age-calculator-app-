


//input elements 
const dayInputEl = document.getElementById('day')
const monthInputEl = document.getElementById('month')
const yearInputEl = document.getElementById('year')

//output elements
const yearOutputEl = document.querySelector('.output_year')
const monthOutputEl = document.querySelector('.output_month')
const dayOutputEl = document.querySelector('.output_day')

//btn element 
const resultBtn = document.getElementById('submit_btn')

//present times
const presentYear = new Date().getFullYear()
const presentMonth =  new Date().getMonth()
const presentDay = new Date().getDate()

resultBtn.addEventListener('click', () => {
    // console.log('submitted')
    let dayInputValue = Number(dayInputEl.value)
    let monthInputValue = Number(monthInputEl.value)
    let yearInputValue = Number(yearInputEl.value)

    if(dayInputValue > 31) {
        document.querySelector('.error_day').textContent = 'Must be a valid day'
    }
    if(monthInputValue > 12) {
        document.querySelector('.error_month').textContent = 'Must be a valid month'
    }
    if(yearInputValue > 2023) {
        document.querySelector('.error_year').textContent = 'Must be a valid year'
    }

    // console.log(yearInputValue)
    // console.log(presentDay)
    const yearOutput = presentYear - yearInputValue
    yearOutputEl.textContent = yearOutput

    const monthOutput = presentMonth - monthInputValue
    monthOutputEl.textContent = Math.abs(monthOutput)
    

    const dayOutput = presentDay - dayInputValue
    dayOutputEl.textContent = dayOutput
})


dayInputEl.addEventListener('change', () => {
//  console.log(typeof Number(dayInputEl.value)) 

})