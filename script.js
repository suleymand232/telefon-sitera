function geceModunuAcKapat() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('darkModeToggle');

    if (document.body.classList.contains('dark-mode')) {
        btn.innerHTML = "☀️ Mod";
        localStorage.setItem('theme', 'dark');
    } else {
        btn.innerHTML = "🌙 Mod";
        localStorage.setItem('theme', 'light');
    }
}

window.onload = function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('darkModeToggle');
        if (btn) btn.innerHTML = "☀️ Mod";
    }
}
function mobilMenuAcKapat() {
    var nav = document.getElementById("mainNav");
    nav.classList.toggle("aktif");
}