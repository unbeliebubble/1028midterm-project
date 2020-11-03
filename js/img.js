var imgs = ["scr/icon/icon_04.png","scr/icon/icon_03.png"];
function changeImage() {
    document.getElementById("imgClickAndChange").src = imgs[0];
    imgs.push(imgs.shift())
}
