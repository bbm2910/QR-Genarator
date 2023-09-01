
const qrBox = document.querySelector(".qr-box");
const qrImg = document.querySelector(".qr-img");
const qrInput = document.querySelector(".qr-input");
const paragraph = document.querySelector(".qr-box-p");
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

function updateColor() {
    const paragraph = document.querySelector(".qr-box-p");

    // Toggle between the two color classes
    if (paragraph.classList.contains("change-color")) {
        paragraph.classList.remove("change-color");
        paragraph.classList.add("change-color-2");
    } else {
        paragraph.classList.remove("change-color-2");
        paragraph.classList.add("change-color");
    }
}

const intervalId = setInterval(updateColor, 700);

