window.addEventListener('load', init);

function init()
{
    showBatteryStatus();
}

function showBatteryStatus()
{
    navigator.getBattery().then((battery) => {
        changeStatusText(battery);
        battery.addEventListener('levelchange', () => changeStatusText(battery));
    });
}

function changeStatusText(battery)
{
    document.getElementById('target-status').innerText = ((battery.level * 100) + '%');
    let remainingTime = (battery.dischargingTime / 60 / 60).toFixed(2);
    document.getElementById('target-remaining').innerText = (remainingTime + ' uur');
}
