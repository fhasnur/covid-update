// SideNav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Modal
const modal = document.querySelectorAll('.modal');
M.Modal.init(modal);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    interval: 3000,
    height: 350
});

// Material Box
const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

//Tooltip
const toolTip = document.querySelectorAll('.tooltipped');
M.Tooltip.init(toolTip);