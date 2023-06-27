const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) =>{
insert.innerHTML = `
<div class="key">
                ${event.key === ' ' ? 'Space' : event.key}
                <small>event.key</small>
            </div>

            <div class="key">
                ${event.keyCode}
                <small>event.keyCode</small>
            </div>
            <div class="key">
               ${event.code}
            </div>
            <div class="key">
                Press any key to get the key code
            </div>`
})

//important to use backticks in line 4 so that the values are dynamic 

//window is the highest level of the browser, which is where you are listening for the event