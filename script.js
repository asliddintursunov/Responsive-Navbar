let xMark = document.getElementById('x-mark');
let hamburger = document.getElementById('hamburger');
let mobileNavbar = document.getElementById('mobile-navbar-container');
let desktopNavbarContainer = document.getElementById('desktop-navbar-container');
let desktopNavbarUlElement = document.getElementById('desktop-navbar-ulElement');

xMark.style = 'display: none;';
mobileNavbar.style = 'display: none;';

hamburger.onclick = () => {
    hamburger.style = 'display: none;';
    xMark.style = 'display: inline;';
    mobileNavbar.style = 'display: flex;';
    mobileNavbar.classList.remove('hide');
    mobileNavbar.classList.add('show');
    desktopNavbarContainer.classList.toggle('allBorder');
    desktopNavbarContainer.classList.toggle('topBorder');
}

xMark.onclick = () => {
    xMark.style = 'display: none;';
    hamburger.style = 'display: inline;';
    mobileNavbar.classList.add('hide');
    mobileNavbar.classList.remove('show');
    desktopNavbarContainer.classList.toggle('topBorder');
    desktopNavbarContainer.classList.toggle('allBorder');
}
