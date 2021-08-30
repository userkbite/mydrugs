const title = document.getElementById('title')
title.innerHTML = "haha, did you really think i was stupid enough to sell you drugs ??\nwell no, we don't sell any illegal stuff.\nThis site is only a FanArt.\nPress the button below if you understand :/\n"

function typeWrite(e) {
    const textArray = e.innerHTML.split('')
    e.innerHTML = ' '
    textArray.forEach((word, i) => {
        setTimeout(() => {
        e.innerHTML += word
        }, 75*i)
    })
}

typeWrite(title)