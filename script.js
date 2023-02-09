window.onload = (event) => {
    if (document.getElementById("madame") !== null) {
        document.getElementById("madame").style.display = "none";
    }
    if (document.getElementById("toutou") !== null) {
        document.getElementById("toutou").style.display = "none";
    }
    if (document.getElementById("arc") !== null) {
        document.getElementById("arc").style.display = "none";
    }
    if (document.getElementById("loulou") !== null) {
        document.getElementById("loulou").style.display = "none";
    }
};

function changemonument() {
    if (document.getElementById("eiffel") !== null) {

        if (document.getElementById("eiffel").checked) {
            document.getElementById("madame").style.display = "none";
            document.getElementById("toutou").style.display = "block";
        }
    }
    if (document.getElementById("notreDame") !== null) {

        if (document.getElementById("notreDame").checked) {
            document.getElementById("madame").style.display = "block";
            document.getElementById("toutou").style.display = "none";
        }
    }
    if (document.getElementById("triomphe") !== null) {

        if (document.getElementById("triomphe").checked) {
            document.getElementById("loulou").style.display = "none";
            document.getElementById("arc").style.display = "block";
        }
    }
    if (document.getElementById("louvre") !== null) {

        if (document.getElementById("louvre").checked) {
            document.getElementById("loulou").style.display = "block";
            document.getElementById("arc").style.display = "none";
        }
    }
}