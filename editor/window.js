// This file is used for window-control

ipcRenderer.on('fullscr', (event, arg) => {
    if (arg) {
        _('maxbtn').style.display = "none";
        _('defullbtn').style.display = "block";
    } else {
        _('maxbtn').style.display = "block";
        _('defullbtn').style.display = "none";
    }
})
_('minbtn').onclick = function() {
    ipcRenderer.send('window-min');
}
_('closebtn').onclick = function() {
    ipcRenderer.send('exit');
}
_('maxbtn').onclick = function() {
    ipcRenderer.send('window-max');
}
_('titletext').innerText = document.title;
setInterval(function() {
    _('titletext').innerText = document.title;
}, 800)
ipcRenderer.on('maxmized', (event, arg) => {
    if (arg) {
        _('maxbtn').src = "img/window/reset.png";
    } else {
        _('maxbtn').src = "img/window/max.png";
    }
    window.onresize = function() {
        ipcRenderer.send('window-get');
    }

});