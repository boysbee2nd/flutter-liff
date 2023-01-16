function alertMessage(text) {
    alert(text)
}
function callAddBot() {
    if (confirm("คุณยังไม่ได้เพิ่ม BOT เป็นเพื่อน จะเพิ่มเลยไหม ?")) {
        window.location = "https://line.me/R/ti/p/@369ddbbh"
    }
}
function callWindowReload() {
    window.location.reload()
}

window.logger = (flutter_value) => {
    console.log({ js_context: this, flutter_value });
}

