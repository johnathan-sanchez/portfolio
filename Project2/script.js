function convert() {
    let inches = document.getElementById('inches').value;
    let meters = inches * 0.0254;
    document.getElementById('result').innerText = inches + " inches is " + meters.toFixed(4) + " meters.";
}