var gui = require('nw.gui');
var serialPort = require("serialport").SerialPort

// Create a tray icon
var tray = new gui.Tray({icon: 'res/key_.png' });

// Give it a menu
var menu = new gui.Menu();
var menuTitle = new gui.MenuItem({label: 'Final Key' });
var menuExit = new gui.MenuItem({label: 'Exit' });
menuExit.click = exitApplication;

menu.append(menuTitle);
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(menuExit);

tray.menu = menu;

// Remove the tray
//tray.remove();
//tray = null;

var exitApplication = function() {
    console.log("trying to exit the app");
    tray.remove();
    tray = null;
    process.exit();
}
