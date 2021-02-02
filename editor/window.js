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
_('panelistic-titletext').innerText = document.title;
setInterval(function() {
_('panelistic-titletext').innerText = document.title;
}, 800)
ipcRenderer.on('maxmized', (event, arg) => {
    if (arg) {
        _('maxbtn').src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAdCAYAAAA+YOU3AAAAmUlEQVRYR+2VQQqAIBREX7SJIOj+t6xN0aYwaFcmMYjGeIA/z+eoDRWupkJmDJ3r1GzapiMGXA/XI2M99hfbkjoqhrRAD6zABo8fVtiQIk8yZADmBMNFQXfAAozAdAN/wRYFHThjQIYOhiQX46+mr6pLJEmGJJqWfZhK6BiUKufMkA6TqUx49HNlyXJsWqbS9cil0qZt+ruBA49uGB6yMUNFAAAAAElFTkSuQmCC";
    } else {
        _('maxbtn').src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAdCAYAAAA+YOU3AAAAdElEQVRYR+2XwQ3AMAwCyf5Dt8oCgQeKavXyRpic+Xhp4FsDM4vQt7YGaUgfCFCPafV4wsCVzVZMJO3QzivRRH93gyITQgeYIG0g0emgRVaSUEw0dtAW/L7TCaUKpIpJkrapIXST5skL0pDmcrnVAUh/gPQLZcASHgcg2/4AAAAASUVORK5CYII=";
    }
    window.onresize = function() {
        ipcRenderer.send('window-get');
    }

});