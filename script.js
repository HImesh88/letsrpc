const bot_player = document.getElementById('bot-player');
const you_player = document.getElementById('you-player');
const gameres = document.getElementById('game_res')

function botPlayer() {
    let rpcarr = ["🪨", "🧻", "✂️"];
    const ran = Math.floor(Math.random() * rpcarr.length);
    bot_player.textContent = rpcarr[ran];
}

function win() {
    gameres.textContent="Wow !! You won"
}
function loose() {
    gameres.textContent="Oops!! You loosed"
}
function draw() {
    gameres.textContent="It's a Draw"
}

function stopBounce(){
    if(you_player.classList.contains('animate-bounce') && bot_player.classList.contains('animate-bounce') ){
        you_player.classList.remove('animate-bounce');
        bot_player.classList.remove('animate-bounce');
    }
}

function checkResult() {
    const you = you_player.textContent;
    const bot = bot_player.textContent;

    if (you === bot) {
       setTimeout(draw,2000)
       gameres.textContent=""
    } else if (you === "🪨" && bot === "✂️") {
        setTimeout(win,2000)
        gameres.textContent=""
    } else if (you === "✂️" && bot === "🧻") {
        setTimeout(win,2000)
        gameres.textContent=""
    } else if (you === "🧻" && bot === "🪨") {
        setTimeout(win,2000)
        gameres.textContent=""
    } else {
        setTimeout(loose,2000)
        gameres.textContent=""
    }
}

let allbtn = document.querySelector('#btn_s');
allbtn.addEventListener('click', function () {
    you_player.textContent = "✂️";
    botPlayer();
    checkResult();
    setTimeout(stopBounce,2000)
    you_player.classList.add('animate-bounce')
    bot_player.classList.add('animate-bounce')
});

let allbtn2 = document.querySelector('#btn_r');
allbtn2.addEventListener('click', function () {
    you_player.textContent = "🪨";
    botPlayer();
    checkResult();
    setTimeout(stopBounce,2000)
    you_player.classList.add('animate-bounce')
    bot_player.classList.add('animate-bounce')
});

let allbtn3 = document.querySelector('#btn_p');
allbtn3.addEventListener('click', function () {
    you_player.textContent = "🧻";
    botPlayer();
    checkResult();
    setTimeout(stopBounce,2000)   
    you_player.classList.add('animate-bounce')
    bot_player.classList.add('animate-bounce')
});


