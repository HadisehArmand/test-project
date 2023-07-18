





reload.addEventListener('click', () => {
    var xhr = new XMLHttpRequest();
    // var names = ['Microsoft', 'Tesla', 'Samsung', 'Asus', 'Apple']
    var randomIndex = Math.floor(Math.random() * names.length);
    xhr.open('GET', 'https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/' + names[randomIndex], true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Api-Key', 'gEe44anVOHCsOxSog4cW8w==Di2fldfejCd7R3WF');
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = xhr.response;
            var imageUrl = data[0]['image']
            image.src = imageUrl;
        } else {
            console.error('Request failed. Status: ' + xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error('Request failed');
    };
    xhr.send();

});