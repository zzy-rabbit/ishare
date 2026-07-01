const host = window.location.origin;

function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function formatSize(size) {
    if (size < 1024) {
        return size + " B";
    }
    if (size < 1024 * 1024) {
        return (size / 1024).toFixed(1) + " KB";
    }
    return (size / 1024 / 1024).toFixed(2) + " MB";
}

function escapeHtml(str) {
    return str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

// 密码输入过滤（可复用）
function initPasswordInput(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9A-Za-z]/g, "");
        });
    }
}