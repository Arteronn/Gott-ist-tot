window.onload = function () {
    const marquee = document.getElementById('marquee');
    let text = marquee.innerHTML;
    setInterval(() => {
        text = text.substring(1) + text[0];
        marquee.innerHTML = text;
    }, 150);
};