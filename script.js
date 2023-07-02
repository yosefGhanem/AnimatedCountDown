// Control when to show numbers
// Control when to show final message
// Loop through spans 
// add and remove the in and out class so animation happens continuously

const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function runAnimation() {
    // loop through
    nums.forEach((num, idx)=>{
        // console.log(num,idx)
        const nextToLast = nums.length -1

        // create an event listener to know
        // when the animation ends
        num.addEventListener('animationend', (e)=>{
            if(e.animationName ==='goIn' && idx !==nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName === 'goOut' && num.nextElementSibling){
                // if the next element exists it's gonna
                // add the class of in 
                num.nextElementSibling.classList.add('in')
            }else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }

        })
    })
}

function resetDOM(){
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    // loop through the numbers again
    nums.forEach((num)=>{
        num.classList.value =''
    })

    // add the class of in to the first span
    //nodelist as an array so access the first element 
    nums[0].classList.add('in')
    
}

replay.addEventListener('click', ()=>{
    resetDOM()
    runAnimation()
})