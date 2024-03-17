function updateTotalEnrolled(){
    const total = document.getElementById('total_enrolled');
    let currentValue = parseFloat(total.innerText.replace('M', '')) || 0;
    currentValue += 0.01;
    total.innerText = currentValue.toFixed(2) + 'M';
    setTimeout(updateTotalEnrolled, 10000);
}

function updateTotalmonth(){
    const total = document.getElementById('month');
    let currentValue = parseFloat(total.innerText.replace('K', '')) || 0;
    currentValue += 0.01;
    total.innerText = currentValue.toFixed(2) + 'K';
    setTimeout(updateTotalmonth, 5000);
}
setInterval(updateTotalmonth, 5000);

function updateTotalweek(){
    const total = document.getElementById('week');
    let currentValue = parseFloat(total.innerText.replace('K', '')) || 0;
    currentValue += 0.01;
    total.innerText = currentValue.toFixed(2) + 'K';
    setTimeout(updateTotalweek, 3000);
}
setInterval(updateTotalweek, 1000);

function updateTotalactive(){
    const total = document.getElementById('active');
    let currentValue = parseFloat(total.innerText.replace('K', '')) || 0;
    currentValue += 0.01;
    total.innerText = currentValue.toFixed(2) + 'K';
    setTimeout(updateTotalactive, 10000);
}

updateTotalEnrolled();
updateTotalmonth();
updateTotalweek();
updateTotalactive();
