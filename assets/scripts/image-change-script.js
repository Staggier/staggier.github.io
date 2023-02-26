function nextImageclick(id, images, index) {
    var pics = images.split(" ");

    var i = parseInt(index)
    
    if (i == pics.length - 1) {
        i = -1;
    }

    i += 1;

    img_id = id.replace('button', 'img')

    document.getElementById(img_id).src = pics[i];
    document.getElementById(id).dataset.index = i;
}
