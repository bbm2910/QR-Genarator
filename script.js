
const qrBox = document.querySelector(".qr-box");
const qrImg = document.querySelector(".qr-img");
const qrInput = document.querySelector(".qr-input");
const btn = document.querySelector(".btn");


function generateQrCode() {
    if (qrInput.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
        qrBox.classList.add("show-img");
    }
    else {
        qrInput.classList.add("error");
        setTimeout(() => {
            qrInput.classList.remove("error")
        }, 1000);
    }
}

btn.addEventListener("click", generateQrCode);