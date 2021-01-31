var Common = require('./public/js/mod/common');

var Evt = require('./public/js/mod/evt');
var app = require('electron').remote.app; // .require('app');
var basePath = app.getPath('appData') + '/leanote'; // /Users/life/Library/Application Support/Libisky'; // require('nw.gui').App.dataPath;
Evt.setDataBasePath(basePath);
var protocol = require('electron').protocol; // .require('protocol');
// 数据库初始化
var db = require('./public/js/mod/db');
// db.init();
db.initGlobal();
// 所有service, 与数据库打交道
var Service = {
	notebookService: require('./public/js/mod/notebook'),
	noteService: require('./public/js/mod/note'),
	userService: require('./public/js/mod/user'),
	tagService: require('./public/js/mod/tag'),
	apiService: require('./public/js/mod/api'),
	syncServie: require('./public/js/mod/sync')
};
// 全局变量
var ApiService = Service.apiService;
var UserService = Service.userService;
var SyncService = Service.syncServie;
var NoteService = Service.noteService;
var NotebookService = Service.notebookService;
var TagService = Service.tagService;
var WebService = require('./public/js/mod/web');
var FileService = require('./public/js/mod/file');
var EvtService = require('./public/js/mod/evt');
var CommonService = require('./public/js/mod/common');

// NodeJs
var NodeFs = require('fs');

// 分发服务
// route = /note/notebook
// 过时
Service.dispatch = function() {};
var gui = require('./public/js/mod/gui');
// var remote = require('remote');

var projectPath = __dirname;
