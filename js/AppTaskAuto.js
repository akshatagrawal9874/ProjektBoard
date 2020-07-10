function drop_select() {
    let drop = document.getElementById("auto_drop");
    if (drop.style.visibility == "collapse") {
        drop.style.visibility = "unset"
    } else {
        drop.style.visibility = "collapse"
    }

}