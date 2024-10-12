
let button = document.getElementsByClassName("btn")[0];
let urlInput = document.getElementsByClassName("form-control")[0];

async function getQr(urlLink) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlLink}`;
}

async function displayQr() {
    let urlLink = urlInput.value;
    let qrCodeUrl = await getQr(urlLink);
    document.getElementsByClassName("qr-code")[0].innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`; 
}

button.addEventListener("click", async function() {
    await displayQr(); 
    urlInput.value="";

});
