const _0x579c7e=_0x3b48;(function(_0x1267a8,_0x17ec86){const _0x3b5778=_0x3b48,_0x10844b=_0x1267a8();while(!![]){try{const _0x386824=-parseInt(_0x3b5778(0x19a))/0x1*(parseInt(_0x3b5778(0x1b1))/0x2)+-parseInt(_0x3b5778(0x18b))/0x3*(parseInt(_0x3b5778(0x19d))/0x4)+-parseInt(_0x3b5778(0x1a2))/0x5+parseInt(_0x3b5778(0x198))/0x6*(parseInt(_0x3b5778(0x171))/0x7)+parseInt(_0x3b5778(0x183))/0x8+-parseInt(_0x3b5778(0x187))/0x9+parseInt(_0x3b5778(0x15d))/0xa;if(_0x386824===_0x17ec86)break;else _0x10844b['push'](_0x10844b['shift']());}catch(_0x2159ad){_0x10844b['push'](_0x10844b['shift']());}}}(_0x2c00,0x4dceb));const User=require('../Models/userModel'),jwt=require(_0x579c7e(0x173)),path=require('path'),dotenv=require(_0x579c7e(0x1a1))['config']({'path':path[_0x579c7e(0x16a)](__dirname,_0x579c7e(0x15e))}),{promisify}=require('util'),sendEmail=require(_0x579c7e(0x1a9)),crypto=require(_0x579c7e(0x1a6)),cloudinary=require('../utils/Cloudinary'),signToken=_0x371624=>{const _0x34176f=_0x579c7e;return jwt[_0x34176f(0x195)]({'id':_0x371624},process[_0x34176f(0x186)][_0x34176f(0x162)],{'expiresIn':process[_0x34176f(0x186)]['JWT_EXPIRES_IN']});},createSendToken=(_0x706aaa,_0xce8821,_0x1e65d9)=>{const _0x19c8bc=_0x579c7e,_0x569869=signToken(_0x706aaa['_id']),_0x239122={'expires':new Date(Date[_0x19c8bc(0x181)]()+process[_0x19c8bc(0x186)][_0x19c8bc(0x188)]*0x18*0x3c*0x3c*0x3e8),'httpOnly':!![]};_0x1e65d9['cookie']('jwt',_0x569869,_0x239122),_0x706aaa['password']=undefined,_0x1e65d9[_0x19c8bc(0x19c)](_0xce8821)[_0x19c8bc(0x189)]({'status':_0x19c8bc(0x160),'token':_0x569869,'user':_0x706aaa});},filterObj=(_0x26e15d,..._0x38b553)=>{let _0x5e6320={};return Object['keys'](_0x26e15d)['forEach'](_0x4ec893=>{const _0x4fd314=_0x3b48;if(_0x38b553[_0x4fd314(0x180)](_0x4ec893))_0x5e6320[_0x4ec893]=_0x26e15d[_0x4ec893];}),_0x5e6320;},defaultAvatarUrl=_0x579c7e(0x17b);function _0x2c00(){const _0x55a898=['Succes','verify','forgotPassword','iat','correctPassword','findById','2vumbYw','Token\x20send\x20to\x20email','params','5030620eluLAo','../config.env','findByIdAndUpdate','success','Fail','JWT_SECRET','user','updateMe','message','<p>Forgot\x20your\x20password?\x20Submit\x20a\x20PATCH\x20request\x20with\x20your\x20new\x20password\x20and\x20passwordConfirm.\x20Click\x20the\x20button\x20to\x20resetpassword\x20page.:\x20<a\x20href=\x22','secure_url','sha256','createHash','join','loggedout','update','You\x20are\x20not\x20Logged!!\x20Please\x20log\x20in\x20to\x20get\x20access','Your\x20current\x20password\x20is\x20wrong','passwordCurrent','the\x20user\x20belonging\x20to\x20the\x20token\x20doesn\x27t\x20exsists','7qGjSnH','passwordConfirm','jsonwebtoken','changedPasswordAfter','Please\x20provide\x20email\x20and\x20password','authorization','token','digest','email','There\x20is\x20no\x20user\x20with\x20this\x20email','https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg','+password','body','\x22\x20style=\x22\x20display:\x20inline-block;\x20margin:10px;\x20padding:10px;\x20background-color:\x20rgb(65,\x2060,\x2060,\x200.5);\x20border-radius:5px;\x20text-decoration:none;\x20color:white;\x20font-size:20px\x22>Reset\x20Password.</a><p>','save','includes','now','Bearer','2382472LQiPov','passwordResetToken','avatars','env','1238112CWfOlP','JWT_COOKIE_EXPIRES_IN','json','Your\x20password\x20reset\x20token\x20valid\x20for\x2010\x20mins','3JBYDYO','name','public_id','User\x20recently\x20cahnged\x20the\x20password,\x20Please\x20login\x20again','cookies','phoneNumber','hex','updatePassword','createPasswordResetToken','password','sign','headers','upload','1267326AQNojI','fail','104718kpSbgu','uploader','status','1142588NARXeQ','findOne','avatar','logout','dotenv','827300LIDgaz','http://`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/PRODUCT`/user/resetPassword/','Login\x20in\x20unsuccessfull','Token\x20is\x20invalid\x20or\x20Expired!!','crypto','jwt','log','../utils/Email','select'];_0x2c00=function(){return _0x55a898;};return _0x2c00();}function _0x3b48(_0x19d1d5,_0x4926ad){const _0x2c0065=_0x2c00();return _0x3b48=function(_0x3b4868,_0x3ca672){_0x3b4868=_0x3b4868-0x15d;let _0x33b672=_0x2c0065[_0x3b4868];return _0x33b672;},_0x3b48(_0x19d1d5,_0x4926ad);}exports['signup']=async(_0x4678b6,_0x3795ae)=>{const _0x40ad20=_0x579c7e;try{const _0x3da929=await User['create']({'name':_0x4678b6['body'][_0x40ad20(0x18c)],'email':_0x4678b6[_0x40ad20(0x17d)][_0x40ad20(0x179)],'phoneNumber':_0x4678b6[_0x40ad20(0x17d)][_0x40ad20(0x190)],'password':_0x4678b6[_0x40ad20(0x17d)][_0x40ad20(0x194)],'passwordConfirm':_0x4678b6[_0x40ad20(0x17d)][_0x40ad20(0x172)],'avatar':{'url':_0x4678b6[_0x40ad20(0x17d)][_0x40ad20(0x19f)]||defaultAvatarUrl}});createSendToken(_0x3da929,0xc9,_0x3795ae);}catch(_0x4afab9){_0x3795ae[_0x40ad20(0x19c)](0x190)[_0x40ad20(0x189)]({'message':_0x4afab9[_0x40ad20(0x165)]});}},exports['login']=async(_0x25214e,_0x1dc635)=>{const _0x52cb3b=_0x579c7e;try{const {email:_0x10f087,password:_0x18a115}=_0x25214e['body'];if(!_0x10f087||!_0x18a115)throw new Error(_0x52cb3b(0x175));const _0x5e254b=await User['findOne']({'email':_0x10f087})['select'](_0x52cb3b(0x17c));if(!_0x5e254b||!await _0x5e254b[_0x52cb3b(0x1af)](_0x18a115,_0x5e254b[_0x52cb3b(0x194)]))throw new Error('Incorect\x20email\x20or\x20password');createSendToken(_0x5e254b,0xc8,_0x1dc635);}catch(_0xa5044){_0x1dc635[_0x52cb3b(0x19c)](0x190)[_0x52cb3b(0x189)]({'message':_0x52cb3b(0x1a4)});}},exports[_0x579c7e(0x1a0)]=(_0x61f494,_0x4afd4f)=>{const _0x53ba15=_0x579c7e;_0x4afd4f['cookie'](_0x53ba15(0x1a7),_0x53ba15(0x16b),{'expires':new Date(Date[_0x53ba15(0x181)]()+0xa*0x64),'httpOnly':!![]}),_0x4afd4f[_0x53ba15(0x19c)](0xc8)[_0x53ba15(0x189)]({'status':'success'});},exports['protect']=async(_0x247439,_0x2b6049,_0x36a126)=>{const _0x3c1702=_0x579c7e;try{let _0x5615e9;if(_0x247439[_0x3c1702(0x196)][_0x3c1702(0x176)]&&_0x247439['headers']['authorization']['startsWith'](_0x3c1702(0x182)))_0x5615e9=_0x247439[_0x3c1702(0x196)]['authorization']['split']('\x20')[0x1];else _0x247439[_0x3c1702(0x18f)][_0x3c1702(0x1a7)]&&_0x247439['cookies'][_0x3c1702(0x1a7)]!==_0x3c1702(0x16b)&&(_0x5615e9=_0x247439[_0x3c1702(0x18f)][_0x3c1702(0x1a7)]);if(!_0x5615e9)throw new Error(_0x3c1702(0x16d));const _0x3ce0fd=await promisify(jwt[_0x3c1702(0x1ac)])(_0x5615e9,process[_0x3c1702(0x186)]['JWT_SECRET']),_0x45f9da=await User[_0x3c1702(0x1b0)](_0x3ce0fd['id']);if(!_0x45f9da)throw new Error(_0x3c1702(0x170));if(_0x45f9da[_0x3c1702(0x174)](_0x3ce0fd['iat']))throw new Error(_0x3c1702(0x18e));_0x247439[_0x3c1702(0x163)]=_0x45f9da,_0x36a126();}catch(_0x38fb82){_0x2b6049[_0x3c1702(0x19c)](0x191)[_0x3c1702(0x189)]({'status':_0x3c1702(0x199),'message':_0x38fb82['message']});}},exports[_0x579c7e(0x164)]=async(_0x200175,_0x361d99,_0x571b68)=>{const _0xec5fad=_0x579c7e;try{const _0x24378e=filterObj(_0x200175[_0xec5fad(0x17d)],_0xec5fad(0x18c),_0xec5fad(0x190),_0xec5fad(0x19f));console[_0xec5fad(0x1a8)](_0x24378e),console[_0xec5fad(0x1a8)](_0x200175[_0xec5fad(0x17d)][_0xec5fad(0x19f)]);if(_0x200175['body'][_0xec5fad(0x19f)]!==undefined){const _0x325a9a=await cloudinary[_0xec5fad(0x19b)][_0xec5fad(0x197)](_0x200175['body'][_0xec5fad(0x19f)],{'folder':_0xec5fad(0x185),'width':0x96,'height':0x96,'crop':'scale','responsive_breakpoints':{'create_derived':!![],'bytes_step':0x4e20,'min_width':0xc8,'max_width':0xc8}});_0x24378e[_0xec5fad(0x19f)]={'public_id':_0x325a9a[_0xec5fad(0x18d)],'url':_0x325a9a[_0xec5fad(0x167)]};}const _0x4507d1=await User[_0xec5fad(0x15f)](_0x200175[_0xec5fad(0x163)]['id'],_0x24378e,{'new':!![],'runValidators':!![],'useFindAndModify':![]});_0x361d99[_0xec5fad(0x19c)](0xc8)[_0xec5fad(0x189)]({'status':_0xec5fad(0x1ab),'data':{'user':_0x4507d1}});}catch(_0x2108bb){_0x361d99['status'](0x191)['json']({'status':_0xec5fad(0x161),'message':_0x2108bb[_0xec5fad(0x165)]});}},exports[_0x579c7e(0x192)]=async(_0x3e6751,_0x16c067,_0x1d4eb7)=>{const _0x7560=_0x579c7e;try{const _0x1f5eff=await User['findById'](_0x3e6751[_0x7560(0x163)]['id'])[_0x7560(0x1aa)](_0x7560(0x17c));if(!await _0x1f5eff[_0x7560(0x1af)](_0x3e6751['body'][_0x7560(0x16f)],_0x1f5eff[_0x7560(0x194)]))throw new Error(_0x7560(0x16e));_0x1f5eff[_0x7560(0x194)]=_0x3e6751[_0x7560(0x17d)][_0x7560(0x194)],_0x1f5eff['passwordConfirm']=_0x3e6751[_0x7560(0x17d)][_0x7560(0x172)],await _0x1f5eff[_0x7560(0x17f)](),createSendToken(_0x1f5eff,0xc8,_0x16c067);}catch(_0x3336d2){_0x16c067[_0x7560(0x19c)](0x194)[_0x7560(0x189)]({'status':_0x7560(0x199),'message':_0x3336d2[_0x7560(0x165)]});}},exports[_0x579c7e(0x1ad)]=async(_0x48f910,_0x23883e,_0x2323ab)=>{const _0x439ef3=_0x579c7e,_0x49cd9a=await User[_0x439ef3(0x19e)]({'email':_0x48f910[_0x439ef3(0x17d)][_0x439ef3(0x179)]});!_0x49cd9a&&_0x23883e[_0x439ef3(0x19c)](0x190)[_0x439ef3(0x189)]({'error':_0x439ef3(0x17a)});const _0x3e05cd=_0x49cd9a[_0x439ef3(0x193)]();await _0x49cd9a[_0x439ef3(0x17f)]({'validateBeforeSave':![]});const _0x17491a=_0x439ef3(0x1a3)+_0x3e05cd,_0x840a1=_0x439ef3(0x166)+_0x17491a+_0x439ef3(0x17e);try{await sendEmail({'email':_0x49cd9a[_0x439ef3(0x179)],'subject':_0x439ef3(0x18a),'message':_0x840a1}),_0x23883e[_0x439ef3(0x19c)](0xc8)[_0x439ef3(0x189)]({'status':_0x439ef3(0x160),'message':_0x439ef3(0x1b2)});}catch(_0x4335dc){return _0x49cd9a['passwordResetToken']=undefined,_0x49cd9a['passwordResetExpires']=undefined,await _0x49cd9a[_0x439ef3(0x17f)]({'validateBeforeSave':![]}),_0x23883e[_0x439ef3(0x19c)](0x190)[_0x439ef3(0x189)]({'error':_0x4335dc['message']}),_0x2323ab();}},exports['resetPassword']=async(_0x1ffb1a,_0x3d16ff,_0x341384)=>{const _0x5bacc9=_0x579c7e;try{const _0x55aa72=crypto[_0x5bacc9(0x169)](_0x5bacc9(0x168))[_0x5bacc9(0x16c)](_0x1ffb1a[_0x5bacc9(0x1b3)][_0x5bacc9(0x177)])[_0x5bacc9(0x178)](_0x5bacc9(0x191)),_0x588c30=await User[_0x5bacc9(0x19e)]({'passwordResetToken':_0x55aa72,'passwordResetExpires':{'$gt':Date[_0x5bacc9(0x181)]()}});if(!_0x588c30)throw new Error(_0x5bacc9(0x1a5));_0x588c30[_0x5bacc9(0x194)]=_0x1ffb1a[_0x5bacc9(0x17d)][_0x5bacc9(0x194)],_0x588c30['passwordConfirm']=_0x1ffb1a['body']['passwordConfirm'],_0x588c30[_0x5bacc9(0x184)]=undefined,_0x588c30['passwordResetExpires']=undefined,await _0x588c30[_0x5bacc9(0x17f)](),createSendToken(_0x588c30,0xc8,_0x3d16ff);}catch(_0x4e07d4){return _0x3d16ff['status'](0x190)[_0x5bacc9(0x189)]({'status':_0x5bacc9(0x199),'error':_0x4e07d4[_0x5bacc9(0x165)]}),_0x341384();}},exports['isLoggedIn']=async(_0x402c3e,_0x19f78e,_0x3b0dce)=>{const _0x219afa=_0x579c7e;try{if(_0x402c3e[_0x219afa(0x18f)][_0x219afa(0x1a7)]){const _0x498c5c=await promisify(jwt[_0x219afa(0x1ac)])(_0x402c3e[_0x219afa(0x18f)][_0x219afa(0x1a7)],process[_0x219afa(0x186)][_0x219afa(0x162)]),_0x4d5581=await User['findById'](_0x498c5c['id']);if(!_0x4d5581)return _0x3b0dce();if(_0x4d5581[_0x219afa(0x174)](_0x498c5c[_0x219afa(0x1ae)]))return _0x3b0dce();return _0x19f78e[_0x219afa(0x19c)](0xc8)[_0x219afa(0x189)]({'status':_0x219afa(0x160),'user':_0x4d5581}),_0x3b0dce();}}catch(_0x15e62f){return _0x3b0dce();}_0x3b0dce();};