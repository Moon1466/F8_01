document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".header__toggle");
    const overlay = document.querySelector(".header__overlay");
    const drawer = document.querySelector(".header__drawer");

    if (toggleButton && overlay && drawer) {
        toggleButton.addEventListener("click", function (event) {
            event.stopPropagation();
            overlay.classList.toggle("header__overlay--active");
            drawer.classList.toggle("header__drawer--active");
        });

        overlay.addEventListener("click", function () {
            const isActiveOverlay = overlay.classList.contains("header__overlay--active");
            const isActiveDrawer = drawer.classList.contains("header__drawer--active");

            console.log("isActiveOverlay:", isActiveOverlay);
            console.log("isActiveDrawer:", isActiveDrawer);

            if (isActiveOverlay || isActiveDrawer) {
                overlay.classList.remove("header__overlay--active");
                drawer.classList.remove("header__drawer--active");
            }
        });
    } else {
        console.error("Không tìm thấy phần tử với class .header__toggle, .header__overlay, hoặc .header__drawer");
    }
});
