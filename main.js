function loaddoc () {

    panorama = new PANOLENS.ImagePanorama('images/image.png');
    panorama2 = new PANOLENS.ImagePanorama('images/kitchen.jpg');

    let imageContainer = document.querySelector('.image-container');

    viewer = new PANOLENS.Viewer({
        container: imageContainer,
    });

    var infospotPositions = [
        new THREE.Vector3(-506.06, -200.30, -1500.14),
        new THREE.Vector3(836.06, -196.30, -1090.14), 
        new THREE.Vector3(1300.06, -596.30, 1590.14), 
        new THREE.Vector3(1500.00, 0.00, -500.00), 
        new THREE.Vector3(1000, -90, 900.00),
        new THREE.Vector3(1200, 500.00, 400.00),
    ];

    function handleClick(panorama) {
        return function () {
            viewer.setPanorama(panorama);
        }
    }

    var infospot1 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
    infospot1.position.copy(infospotPositions[0]);
    infospot1.addHoverText("Kitchen");
    infospot1.addEventListener('click', handleClick(panorama2));               

    var infospot2 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
    infospot2.position.copy(infospotPositions[1]);
    infospot2.addHoverText("Lounge");
    infospot2.addEventListener('click', handleClick(panorama));

    var infospot3 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
    infospot3.position.copy(infospotPositions[2]);
    infospot3.addHoverText("Coffee Table Set");
    infospot3.addEventListener('click', function () {
        const overlay = document.getElementById('container1');
        const img = document.getElementById('static-image-1');
        img.src = 'images/image3.jpg';
        overlay.style.display = 'flex';
    });

    var infospot4 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
    infospot4.position.copy(infospotPositions[3]);
    infospot4.addHoverText("Vending Machine");
    infospot4.addEventListener('click', function () {
        const overlay = document.getElementById('container2');
        const img = document.getElementById('static-image-2');
        img.src = 'images/image2.png';
        overlay.style.display = 'flex';
    });

    var infospot5 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
    infospot5.position.copy(infospotPositions[4]);
    infospot5.addHoverText("Sink Area");
    infospot5.addEventListener('click', function () {
        const overlay = document.getElementById('container3');
        const img = document.getElementById('static-image-3');
        img.src = 'images/image5.png';
        overlay.style.display = 'flex';
    });

    var infospot6 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
    infospot6.position.copy(infospotPositions[5]);
    infospot6.addHoverText("Light");
    infospot6.addEventListener('click', function () {
        const overlay = document.getElementById('container4');
        const img = document.getElementById('static-image-4');
        img.src = 'images/image8.jpg';
        overlay.style.display = 'flex';
    });

    panorama.add(infospot1);
    panorama2.add(infospot2);
    panorama.add(infospot3);
    panorama.add(infospot4);
    panorama2.add(infospot5);
    panorama2.add(infospot6);

    panorama.link(panorama2, infospotPositions[0]);
    panorama2.link(panorama, infospotPositions[1]);

    viewer.add(panorama);
    viewer.add(panorama2);
}
