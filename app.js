function applyTheme(theme) {
    document.documentElement.classList.toggle("theme-light", theme === "light")
    const btnTheme = document.querySelector("#btn-theme")
    btnTheme.textContent = theme === "light" ? "obscure" : "claire"
}

document.querySelector("#btn-theme").addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("theme-light")
    const next = isLight ? "dark" : "light"
    applyTheme(next)
})
