    var stelle=Math.floor(Math.random()*4);
    var imgs = [
        "IMG_20180409_164357.jpg",
        "IMG_20180629_145819.jpg",
        "IMG_20180701_172036.jpg",
        "IMG_20180731_205435.jpg"
    ]
    var x='url("img/'+imgs[stelle]+'")';
    document.getElementsByClassName("hintergrund--first")[0].style.backgroundImage=x;