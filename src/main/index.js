import { app, BrowserWindow, ipcMain} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let loginWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindowLogin () {
  /**
   * Initial window options
   */
  loginWindow = new BrowserWindow({
    width: 440,
    height: 340,
    useContentSize: true,
    frame: false,
    transparent: true,//窗口透明
    // resizable: false,
    alwaysOnTop: false,
  })

  loginWindow.loadURL(winURL)

  loginWindow.on('closed', () => {
    loginWindow = null
  })

  loginWindow.on('resize', function(){
    // console.log(loginWindow.getSize());
    // ipcMain.winW = loginWindow.getSize()[0];
    // ipcMain.winH = loginWindow.getSize()[1];
  })

}

function resizeW () {
  loginWindow.setContentSize(765,612);
    //   minWidth: 475,
    // minHeight: 600,
  // console.log(loginWindow.minWidth);

  loginWindow.center();
}

// 登录窗口 事件
app.on('ready', createWindowLogin)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (createWindowLogin === null) {
    createWindowLogin()
  }
})



//窗口最小化
ipcMain.on('window-min',function(){
  loginWindow.minimize();
})
//窗口最大化
ipcMain.on('window-max',function(){
  loginWindow.maximize()
})
ipcMain.on('window-unmax',function(){
  loginWindow.unmaximize()
})

//关闭登录窗口
ipcMain.on('window-close',function(){
  loginWindow.close();
})

// 改变窗口尺寸
ipcMain.on('window-resize', resizeW)


