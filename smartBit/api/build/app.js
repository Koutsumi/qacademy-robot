'use strict';var a31_0x270b29=a31_0x2ff3;(function(_0x240611,_0x1cae2f){var _0x2e7596=a31_0x2ff3,_0x48979e=_0x240611();while(!![]){try{var _0x1d00ac=parseInt(_0x2e7596(0x17e))/0x1*(-parseInt(_0x2e7596(0x176))/0x2)+parseInt(_0x2e7596(0x19b))/0x3*(-parseInt(_0x2e7596(0x196))/0x4)+parseInt(_0x2e7596(0x19d))/0x5+parseInt(_0x2e7596(0x183))/0x6*(-parseInt(_0x2e7596(0x175))/0x7)+-parseInt(_0x2e7596(0x17b))/0x8+parseInt(_0x2e7596(0x190))/0x9+parseInt(_0x2e7596(0x199))/0xa;if(_0x1d00ac===_0x1cae2f)break;else _0x48979e['push'](_0x48979e['shift']());}catch(_0x1ab543){_0x48979e['push'](_0x48979e['shift']());}}}(a31_0x2cc9,0xd0382));function a31_0x2cc9(){var _0x4d72dd=['4418105nockrg','helmet','http','path','5936119hVdBPF','46472lHMJXY','static','status','conectedStudents','__esModule','8683112koiLkh','cors','./config/sentry','33qlejzi','resolve','socket','env','default','12FjEUBA','@sentry/node','FRONT_URL','defineProperty','youch','/files','call','server','./bootstrap','express','routes','exceptionHandler','Server','2096046CPKzNt','json','handshake','uploads','app','./routes','2353612Kglyhf','middlewares','init','38729650ViIHPz','disconect','3nIOgky','use'];a31_0x2cc9=function(){return _0x4d72dd;};return a31_0x2cc9();}function _interopRequireWildcard(_0x3d213e){var _0x1e2052=a31_0x2ff3;if(_0x3d213e&&_0x3d213e[_0x1e2052(0x17a)])return _0x3d213e;else{var _0x5eb0d7={};if(_0x3d213e!=null)for(var _0x432585 in _0x3d213e){Object['prototype']['hasOwnProperty'][_0x1e2052(0x189)](_0x3d213e,_0x432585)&&(_0x5eb0d7[_0x432585]=_0x3d213e[_0x432585]);}return _0x5eb0d7[_0x1e2052(0x182)]=_0x3d213e,_0x5eb0d7;}}function a31_0x2ff3(_0x1ea12e,_0x2049ad){var _0x2cc9d7=a31_0x2cc9();return a31_0x2ff3=function(_0x2ff3f5,_0xd59f3a){_0x2ff3f5=_0x2ff3f5-0x175;var _0xa14392=_0x2cc9d7[_0x2ff3f5];return _0xa14392;},a31_0x2ff3(_0x1ea12e,_0x2049ad);}function _interopRequireDefault(_0x30b8a5){var _0x47203a=a31_0x2ff3;return _0x30b8a5&&_0x30b8a5[_0x47203a(0x17a)]?_0x30b8a5:{'default':_0x30b8a5};}Object[a31_0x270b29(0x186)](exports,a31_0x270b29(0x17a),{'value':!![]}),require(a31_0x270b29(0x18b));var _express=require(a31_0x270b29(0x18c)),_express2=_interopRequireDefault(_express),_cors=require(a31_0x270b29(0x17c)),_cors2=_interopRequireDefault(_cors),_helmet=require(a31_0x270b29(0x19e)),_helmet2=_interopRequireDefault(_helmet),_youch=require(a31_0x270b29(0x187)),_youch2=_interopRequireDefault(_youch),_socketio=require('socket.io'),_socketio2=_interopRequireDefault(_socketio),_http=require(a31_0x270b29(0x19f)),_http2=_interopRequireDefault(_http),_path=require(a31_0x270b29(0x1a0)),_path2=_interopRequireDefault(_path),_node=require(a31_0x270b29(0x184)),Sentry=_interopRequireWildcard(_node);require('express-async-errors');var _routes=require(a31_0x270b29(0x195)),_routes2=_interopRequireDefault(_routes),_sentry=require(a31_0x270b29(0x17d)),_sentry2=_interopRequireDefault(_sentry);require('./database');class App{constructor(){var _0x3935d7=a31_0x270b29;this[_0x3935d7(0x194)]=_express2[_0x3935d7(0x182)][_0x3935d7(0x189)](void 0x0),this['server']=_http2['default'][_0x3935d7(0x18f)](this[_0x3935d7(0x194)]),Sentry[_0x3935d7(0x198)](_sentry2[_0x3935d7(0x182)]),this[_0x3935d7(0x180)](),this['middlewares'](),this[_0x3935d7(0x18d)](),this['exceptionHandler'](),this[_0x3935d7(0x179)]={};}[a31_0x270b29(0x180)](){var _0x52889b=a31_0x270b29;this['io']=_socketio2[_0x52889b(0x182)][_0x52889b(0x189)](void 0x0,this[_0x52889b(0x18a)]),this['io']['on']('connection',_0x2344f6=>{var _0x49e072=_0x52889b;const {student_id:_0x40375b}=_0x2344f6[_0x49e072(0x192)]['query'];this[_0x49e072(0x179)][_0x40375b]=_0x2344f6['id'],_0x2344f6['on'](_0x49e072(0x19a),()=>{var _0x5a3bfc=_0x49e072;delete this[_0x5a3bfc(0x179)][_0x40375b];});});}[a31_0x270b29(0x197)](){var _0x5cdea7=a31_0x270b29;this[_0x5cdea7(0x194)]['use'](Sentry['Handlers']['requestHandler']()),this[_0x5cdea7(0x194)][_0x5cdea7(0x19c)](_express2['default'][_0x5cdea7(0x191)]()),this[_0x5cdea7(0x194)][_0x5cdea7(0x19c)](_helmet2['default'][_0x5cdea7(0x189)](void 0x0)),this['app'][_0x5cdea7(0x19c)](_cors2[_0x5cdea7(0x182)][_0x5cdea7(0x189)](void 0x0,{'origin':process[_0x5cdea7(0x181)][_0x5cdea7(0x185)]})),this[_0x5cdea7(0x194)]['use'](_0x5cdea7(0x188),_express2[_0x5cdea7(0x182)][_0x5cdea7(0x177)](_path2[_0x5cdea7(0x182)][_0x5cdea7(0x17f)](__dirname,'..','tmp',_0x5cdea7(0x193)))),this[_0x5cdea7(0x194)]['use']((_0x30e1ca,_0x258854,_0x33ea12)=>{var _0x31979c=_0x5cdea7;_0x30e1ca['io']=this['io'],_0x30e1ca[_0x31979c(0x179)]=this[_0x31979c(0x179)],_0x33ea12();});}[a31_0x270b29(0x18d)](){var _0x393541=a31_0x270b29;this[_0x393541(0x194)][_0x393541(0x19c)](_routes2[_0x393541(0x182)]),this[_0x393541(0x194)][_0x393541(0x19c)](Sentry['Handlers']['errorHandler']());}[a31_0x270b29(0x18e)](){var _0x2492cf=a31_0x270b29;this['app'][_0x2492cf(0x19c)](async(_0x459531,_0x1c6d71,_0x249784,_0x303afd)=>{var _0x522e42=_0x2492cf;const _0x242bbf=await new(0x0,_youch2[(_0x522e42(0x182))])(_0x459531,_0x1c6d71)['toJSON']();return _0x249784[_0x522e42(0x178)](0x1f4)[_0x522e42(0x191)](_0x242bbf);});}}exports[a31_0x270b29(0x182)]=new App()[a31_0x270b29(0x18a)];