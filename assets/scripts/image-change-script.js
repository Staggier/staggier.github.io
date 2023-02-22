function nextImageclick(id, images, index) {
    var pics = images.split("png");
    pics.pop();

    for (let i = 0; i < pics.length; i++) {
        pics[i] += "png";
    }

    var i = parseInt(index)
    
    if (i == pics.length - 1) {
        i = -1;
    }

    i += 1;

    document.getElementById((id.split('button'))[0] + "img").src = pics[i];
    document.getElementById(id).dataset.index = i;
}
