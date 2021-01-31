var Common = require('./public/js/mod/common');

var Evt = require('./public/js/mod/evt');
var app = require('electron').remote.app; // .require('app');
var basePath = app.getPath('appData') + '/leanote'; // /Users/life/Library/Application Support/Libisky'; // require('nw.gui').App.dataPath;
Evt.setDataBasePath(basePath);

// 所有service, 与数据库打交道
var Service = {
	userService: require('./public/js/mod/user'),
	apiService: require('./public/js/mod/api'),
};

var db = require('./public/js/mod/db');
db.initGlobal();

// 全局变量
var ApiService = Service.apiService;
var UserService = Service.userService;
var EvtService = require('evt');
var CommonService = Common;

var gui = require('./public/js/mod/gui');