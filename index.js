const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron')
let tray = null;

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon: "bin/icon.png",
        frame: false
    });
    mainWindow.loadFile('editor/index.html');
    Menu.setApplicationMenu(null);
}
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// Window control
ipcMain.on('window-min', function() {
    mainWindow.minimize();
})
ipcMain.on('window-max', function() {
    if (mainWindow.isMaximized()) {
        mainWindow.restore();
    } else {
        mainWindow.maximize();
    }
    mainWindow.webContents.send('maxmized', mainWindow.isMaximized());
})
ipcMain.on('window-get', function() {
    mainWindow.webContents.send('maxmized', mainWindow.isMaximized());
})
ipcMain.on('fullscr', function() {
    if (mainWindow.isFullScreen()) {
        mainWindow.setFullScreen(false);
    } else {
        mainWindow.setFullScreen(true);
    }
    mainWindow.webContents.send('fullscr', mainWindow.isFullScreen());
})
ipcMain.on('window-fullscr', function() {
    mainWindow.webContents.send('fullscr', mainWindow.isFullScreen());
})
ipcMain.on('exit', function() {
    app.exit();
})