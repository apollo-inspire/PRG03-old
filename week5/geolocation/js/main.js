window.addEventListener('load', init);
let $target = null;
let $button = null;

function init()
{
    $target = document.getElementById('target');
    $button = document.getElementById('button');

    if ('geolocation' in navigator) {
        $button.addEventListener('click', function () {
            navigator.geolocation.getCurrentPosition(showCurrentLocation);
            navigator.geolocation.watchPosition(showCurrentLocation);
        });
    } else {
        $target.innerText = 'Geolocation API not supported.';
    }
}

function showCurrentLocation(location)
{
    $button.remove();
    $target.innerHTML = (location.coords.latitude + ', ' + location.coords.longitude);
}
