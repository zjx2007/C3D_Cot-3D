const { app, BrowserWindow, Menu } = require('electron')
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  Menu.setApplicationMenu(null)
  win.loadFile('editor/index.html');
}
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})