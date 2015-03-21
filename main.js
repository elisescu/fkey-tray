var gui = require('nw.gui');
var fkey = require("fkey.js");

gui.Window.get().hide();

var tray = new gui.Tray({tooltip:'FinalKey', icon:'res/key_.png'});
var exitApplication = function() {
    console.log("Exiting.. Bye!");
    tray.remove();
    tray = null;
    gui.App.quit();
}

var connectFKey = function() {
    fkey.connect();
}

// Give it a menu
var menu = new gui.Menu();
var menuTitle = new gui.MenuItem({label:'Final Key', enabled:'false'});
var menuExit = new gui.MenuItem({label:'Exit', click:exitApplication});
var menuConnect = new gui.MenuItem({label:'connect', click:connectFKey});

menu.append(menuTitle);
menu.append(new gui.MenuItem({type:'separator'}));
menu.append(menuConnect);
menu.append(menuExit);

tray.menu = menu;
