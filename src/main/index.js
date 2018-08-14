import { app, BrowserWindow, ipcMain, Tray, Menu} from 'electron'
const path = require('path')
const iconPath = path.join(__dirname, '../../icon.ico')
const iconPathNull = path.join(__dirname, '../../empty.ico')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let loginWindow,appIcon,timer
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
//显示托盘
 function trayShow () {
  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png'

    appIcon = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    {
    label: '打开面板',
    click: function () {
      // console.log('打开面板');
      loginWindow.show();

    }
  },
  {
    label: '退出',
    click: function () {
      appIcon.destroy();
      app.quit();
    }
  }
  ])
  appIcon.setToolTip('嘿嘿，我是假TIM')
  appIcon.setContextMenu(contextMenu)
  appIcon.on('click',()=>{
    loginWindow.show();
    clearTimeout(timer)
    appIcon.setImage(iconPath);
  })
}

// 登录窗口 事件
app.on('ready', ()=>{
  createWindowLogin();
  trayShow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  if (appIcon) appIcon.destroy()
})

app.on('activate', () => {
  if (createWindowLogin === null) {
    createWindowLogin()
  }
})

//托盘图标闪动belingbeling
ipcMain.on('tray-beling',()=>{
  let flag = 0;
  clearInterval(timer);
  timer = setInterval(()=>{
    if (flag) {
    appIcon.setImage(iconPath);
    flag = 0;
  }else{
    appIcon.setImage(iconPathNull);
    flag = 1;
  }
  },400);
})
//取消闪动
ipcMain.on('no-beling',()=>{

})

//窗口最小化
ipcMain.on('window-min',function(){
  loginWindow.minimize();
  loginWindow.hide();
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
ipcMain.on('window-resize', ()=>{
  loginWindow.setContentSize(765,612);
    //   minWidth: 475,
    // minHeight: 600,
  // console.log(loginWindow.minWidth);
  loginWindow.center();
})



