/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 244:
/***/ (() => {


// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./node_modules/_html-loader@2.1.2@html-loader/dist/cjs.js!./worker/src/html/hello.html
// Module
var code = "<!DOCTYPE html> <html> <head> <title>欢迎使用</title> </head> <link href=\"https://fonts.geekzu.org/css2?family=Noto+Sans+TC:wght@300&display=swap\" rel=\"stylesheet\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no\"/> <style>body,html{width:100%;height:100%;margin:0;padding:0}body,div{display:flex;align-items:center;justify-content:center}*{font-family:'Noto Sans TC',sans-serif;text-align:center}.s{font-size:80px;animation:loading-fadein 4s infinite}.n{font-size:30px;animation:loading-fadein 8s infinite}@keyframes loading-fadein{0%{opacity:0}50%{opacity:.6}to{opacity:0}}</style> <body> <div> <h1 id=\"index\" class=\"s\">你好</h1> </div> </body> <script>window.get=e=>all[e%all.length],window.all=[\"欢迎！点我开始安装\",\"Welcome!Click Me To Install!\",\"Hola!¡Haga clic en mí para iniciar la instalación!\",\"你好！點擊我開始安裝！\"],document.body.addEventListener(\"click\",()=>{document.location.search=\"?step=check\"}),t=0,setInterval(()=>{const e=get(t);document.getElementById(\"index\").innerHTML=e,document.title=e,t++},4e3)</script> </html>";
// Exports
/* harmony default export */ const hello = (code);
;// CONCATENATED MODULE: ./node_modules/_html-loader@2.1.2@html-loader/dist/cjs.js!./worker/src/html/index.html
// Module
var html_code = "<!doctype html> <html lang=\"zh-cmn-Hans\"> <head> <meta charset=\"utf-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no\"/> <meta name=\"renderer\" content=\"webkit\"/> <meta name=\"force-rendering\" content=\"webkit\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"/> <title>HexoPlusPlus.Installation Helper</title> <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css\"/> <style>.m-card{max-width:768px;margin:auto;margin-bottom:20px}</style> </head> <body> <div class=\"mdui-container\"> <div class=\"mdui-toolbar\"> <a class=\"mdui-btn mdui-btn-icon\" id=\"_menu\"><i class=\"mdui-icon material-icons\">menu</i></a> <span class=\"mdui-typo-title\">HexoPlusPlus.Installation - ::VER::</span> <div class=\"mdui-toolbar-spacer\"></div> </div> </div> <div class=\"mdui-drawer mdui-drawer-close\" id=\"drawer\"> <ul class=\"mdui-list\"> <li class=\"mdui-list-item mdui-ripple\" onclick='window.location.href=\"https://hexoplusplus.js.org\"'> <i class=\"mdui-icon material-icons\">book</i> <div class=\"mdui-list-item-content\">::DOCUMENT::</div> </li> <li class=\"mdui-list-item mdui-ripple\" onclick='window.location.href=\"https://github.com/HexoPlusPlus/HexoPlusPlus\"'> <i class=\"mdui-icon material-icons\">code</i> <div class=\"mdui-list-item-content\">Github</div> </li> </ul> </div> <div class=\"mdui-card m-card\"> <div class=\"mdui-card-content mdui-typo\"> ::BODY:: </div> </div> <script src=\"https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js\"></script> <script>var inst=new mdui.Drawer(\"#drawer\");document.getElementById(\"_menu\").addEventListener(\"click\",(function(){inst.toggle()}));const setCookie=(e,t,n)=>{var i=new Date;i.setTime(i.getTime()+(n||2592e6));var r=\"expires=\"+i.toGMTString();document.cookie=e+\"=\"+t+\"; \"+r},getCookie=e=>{for(var t=e+\"=\",n=document.cookie.split(\";\"),i=0;i<n.length;i++){var r=n[i].trim();if(0==r.indexOf(t))return r.substring(t.length,r.length)}return\"\"}</script> </body> </html>";
// Exports
/* harmony default export */ const html = (html_code);
;// CONCATENATED MODULE: ./node_modules/_html-loader@2.1.2@html-loader/dist/cjs.js!./worker/src/html/src/check.html
// Module
var check_code = "<h2>日志：</h2> <div id=\"log\"></div> <script>(async()=>{window.gonext=()=>{document.location.search=\"?step=cf\"};const n=document.getElementById(\"log\");try{n.innerText+=\"[信息]此为基本检查程序，用于检查hpp基本运行环境\\n\",n.innerText+=\"[信息]正在检查所有的基本配置是否完成中...\\n\",n.innerText+=\"[信息]检查KV是否绑定...\\n\";const e=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=pcheck&s=${(new Date).valueOf()}`)).json()).ctx;n.innerText+=e.kv?\"[成功]KV是绑定了的。\":\"[失败]KV没有绑定，错误代码(-10001)\",n.innerText+=\"\\n\",n.innerText+=e.hkv?\"[警告]配置已存在，继续将覆盖其原有配置\":\"[成功]配置未存在，将进行全新安装\",n.innerText+=\"\\n\",n.innerText+=e.username?`[成功]用户名是设置了的，为${e.username}。`:\"[失败]用户名没有设置，错误代码(-10002)\",n.innerText+=\"\\n\",n.innerText+=e.password?\"[成功]密码是设置了的。\":\"[失败]密码没有设置，错误代码(-10003)\",n.innerText+=\"\\n\",e.kv&&e.username&&e.password?(n.innerText+=\"[成功]点击下一步继续\\n\",n.innerHTML+='<button class=\"mdui-btn mdui-color-theme-accent mdui-ripple\" onclick=\"gonext()\">下一步</button>'):n.innerText+=\"[失败]并不是所有的检查都是通过的，请尝试排查错误，若不知道如何排查，请点击左上角菜单寻求帮助！\"}catch(e){n.innerText+=\"[异常]脚本检测时出现了未知的异常：\\n\"+e}})()</script>";
// Exports
/* harmony default export */ const check = (check_code);
;// CONCATENATED MODULE: ./node_modules/_html-loader@2.1.2@html-loader/dist/cjs.js!./worker/src/html/src/cf.html
// Module
var cf_code = "<div style=\"min-height:calc(60vh)\"> <div id=\"dash\"> <p>你需要填写以下CloudFlare信息才能保证HPP工作正常</p> <div class=\"mdui-textfield mdui-textfield-floating-label\"> <label class=\"mdui-textfield-label\">登陆邮箱</label> <input class=\"mdui-textfield-input\" type=\"email\" id=\"Auth_Email\"/> </div> <div class=\"mdui-textfield mdui-textfield-floating-label\"> <label class=\"mdui-textfield-label\">Global Key</label> <input class=\"mdui-textfield-input\" type=\"password\" id=\"Auth_Key\"/> </div> </div> <button class=\"mdui-btn mdui-color-theme-accent mdui-ripple\" onclick=\"gologin()\" id=\"button\">登陆我的CloudFlare</button> <h2>日志：</h2> <div id=\"log\"></div> </div> <script>window.i_config={},window.setlog=document.getElementById(\"log\"),window.goAI=async()=>{document.getElementById(\"button\").disabled=!0,setlog.innerText+=\"[信息]尝试根据Account_Identifier获取用户下的Worker...\\n\",i_config.AI=document.getElementById(\"Account_Identifier\").value;try{const e=await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=cf-list-worker&mail=${i_config.Auth_Email}&key=${i_config.Auth_Key}&ai=${i_config.AI}&s=${(new Date).valueOf()}`)).json();document.getElementById(\"button\").disabled=!1,setlog.innerText+=\"[成功]请选择安装着HexoPlusPlus的Worker名\\n\",i_config.WorkerList=e.ctx.worker,document.getElementById(\"dash\").innerHTML=` <p>HexoPlusPlus安装所在的Worker名</p><select class=\"mdui-select\" id=\"Worker\" mdui-select>'\\n                        ${(()=>{let e=\"\";for(var t in i_config.WorkerList)e+=`<option value=\"${i_config.WorkerList[t]}\">${i_config.WorkerList[t]}</option>`;return e})()}\\n                        </select>`,mdui.mutation(),document.getElementById(\"button\").innerText=\"结束CloudFlare部分的安装\",document.getElementById(\"button\").onclick=()=>{goEnd()}}catch(e){setlog.innerText+=\"[异常]脚本检测时出现了未知的异常：\\n\"+n}},window.gologin=async()=>{document.getElementById(\"button\").disabled=!0,setlog.innerText=\"[信息]尝试登陆CF信息中...\\n\";try{i_config.Auth_Email=document.getElementById(\"Auth_Email\").value,i_config.Auth_Key=document.getElementById(\"Auth_Key\").value;const e=await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=cf-login&mail=${i_config.Auth_Email}&key=${i_config.Auth_Key}&s=${(new Date).valueOf()}`)).json();document.getElementById(\"button\").disabled=!1,e.ctx.login?(setlog.innerText+=\"[成功]账户登陆成功，请选择你的Account_Identifier\\n\",i_config.AIList=e.ctx.Account_Identifier,document.getElementById(\"dash\").innerHTML=` <p>您账户所用的Account_Identifier</p><select class=\"mdui-select\" id=\"Account_Identifier\" mdui-select>'\\n                        ${(()=>{let e=\"\";for(var t in i_config.AIList)e+=`<option value=\"${i_config.AIList[t]}\">${i_config.AIList[t]}</option>`;return e})()}\\n                        </select>`,mdui.mutation(),document.getElementById(\"button\").innerText=\"下一步\",document.getElementById(\"button\").onclick=()=>{goAI()}):setlog.innerText+=\"[失败]账户登陆异常，错误代码(-10004)\\n\"}catch(e){setlog.innerText+=\"[异常]脚本检测时出现了未知的异常：\\n\"+e}},window.goEnd=()=>{i_config.Worker=document.getElementById(\"Worker\").value,localStorage.setItem(\"config\",JSON.stringify({installed:!1,cors:\"*\",recaptcha:\"\",gh_token:\"\",cloudflare:{Account_Identifier:i_config.AI,Auth_Key:i_config.Auth_Key,Auth_Email:i_config.Auth_Email,Script_Name:i_config.Worker}})),document.location.search=\"?step=player\"}</script>";
// Exports
/* harmony default export */ const cf = (cf_code);
;// CONCATENATED MODULE: ./node_modules/_html-loader@2.1.2@html-loader/dist/cjs.js!./worker/src/html/src/player.html
// Module
var player_code = " <div id=\"player\" style=\"display:none\"> <div class=\"mdui-card\"> <div class=\"mdui-card-media\"> <img src=\"https://api.cyfan.top/bing?day=1\"/> <div class=\"mdui-card-media-covered mdui-card-media-covered-top\"> <div class=\"mdui-card-primary\"> <div class=\"mdui-card-primary-title\">小白</div> <div class=\"mdui-card-primary-subtitle\">【全新安装】从零开始部署Hexo，没有仓库也不要紧！</div> </div> </div> </div> <div class=\"mdui-card-actions\"> <button class=\"mdui-btn mdui-ripple\" onclick='document.location.search=\"?step=zero\"'>点我进入</button> </div> </div> <br> <div class=\"mdui-card\"> <div class=\"mdui-card-media\"> <img src=\"https://api.cyfan.top/bing?day=2\"/> <div class=\"mdui-card-media-covered mdui-card-media-covered-top\"> <div class=\"mdui-card-primary\"> <div class=\"mdui-card-primary-title\">普通</div> <div class=\"mdui-card-primary-subtitle\">【正常安装】按照正常顺序导入已有的hexo仓库</div> </div> </div> </div> <div class=\"mdui-card-actions\"> <button class=\"mdui-btn mdui-ripple\" onclick='document.location.search=\"?step=start\"'>点我进入</button> </div> </div> <br> <div class=\"mdui-card\"> <div class=\"mdui-card-media\"> <img src=\"https://api.cyfan.top/bing?day=3\"/> <div class=\"mdui-card-media-covered mdui-card-media-covered-top\"> <div class=\"mdui-card-primary\"> <div class=\"mdui-card-primary-title\">用户</div> <div class=\"mdui-card-primary-subtitle\">【导入安装】从1.x版本的HPP迁移过来</div> </div> </div> </div> <div class=\"mdui-card-actions\"> <button class=\"mdui-btn mdui-ripple\" onclick='document.location.search=\"?step=import\"'>点我进入</button> </div> </div> <br> <div class=\"mdui-card\"> <div class=\"mdui-card-media\"> <img src=\"https://api.cyfan.top/bing?day=4\"/> <div class=\"mdui-card-media-covered mdui-card-media-covered-top\"> <div class=\"mdui-card-primary\"> <div class=\"mdui-card-primary-title\">开发者</div> <div class=\"mdui-card-primary-subtitle\">【配置安装】牛逼哄哄，一步直达最后</div> </div> </div> </div> <div class=\"mdui-card-actions\"> <button class=\"mdui-btn mdui-ripple\" onclick='document.location.search=\"?step=end\"'>点我进入</button> </div> </div> </div> <h2>日志：</h2> <div id=\"log\"></div> <script>(()=>{const e=document.getElementById(\"log\");try{e.innerText=\"[信息]检测安装信息，此检查仅检查一遍...\\n\",null===localStorage.getItem(\"config\")||(()=>{try{JSON.parse(localStorage.getItem(\"config\"));return!1}catch(e){return!0}})()?(e.innerText+=\"[异常]本地安装信息异常或无法检测，请点击返回首页进行重新安装，错误代码(-10000)\\n\",e.innerText+=\"[信息]如果此错误长时间出现，请检查您的浏览器是否支持LocalStorage\\n\",window.goback=()=>{document.location.search=\"\"},document.getElementById(\"log\").innerHTML+='<button class=\"mdui-btn mdui-color-theme-accent mdui-ripple\" onclick=\"goback()\" id=\"gocheck\">返回首页</button>'):(e.innerText+=\"[正常]本地安装信息正常，请选择你的安装方式\\n\",document.getElementById(\"player\").style.display=\"unset\")}catch(t){e.innerText+=\"[异常]检测程序意外退出\\n\"+t}})()</script>";
// Exports
/* harmony default export */ const player = (player_code);
;// CONCATENATED MODULE: ./node_modules/_html-loader@2.1.2@html-loader/dist/cjs.js!./worker/src/html/src/start.html
// Module
var start_code = "<div style=\"min-height:calc(60vh)\"> <div id=\"dash\"> <div class=\"mdui-textfield mdui-textfield-floating-label\"> <label class=\"mdui-textfield-label\">输入你的GithubToken，并选择原先Hexo安装的仓库</label> <input class=\"mdui-textfield-input\" type=\"password\" id=\"gh_token\"/> <label class=\"mdui-switch\"> <input type=\"checkbox\" checked=\"checked\" id=\"org\"> <i class=\"mdui-switch-icon\"></i> 显示不直接属于自己的仓库[最多支持4900个仓库] </label><br> <label class=\"mdui-switch\"> <input type=\"checkbox\" checked=\"checked\" id=\"star\"> <i class=\"mdui-switch-icon\"></i> 同时尝试Star赞助HPP的项目 </label> </div> </div> <button class=\"mdui-btn mdui-ripple\" onclick=\"start()\" id=\"button\">检测Token有效性</button> <h2>日志：</h2> <div id=\"log\"></div> </div> <script>window.i_config={},(async()=>{const e=document.getElementById(\"log\");let n=document.getElementById(\"button\");try{window.checktotkenrepo=async()=>{n.disabled=!0,e.innerText+=\"[信息]正在尝试校验TOKEN权限...\\n\";const t=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_test&repo=${i_config.reponame}&branch=${i_config.branch}&token=${i_config.ghtoken}&s=${(new Date).valueOf()}`)).json()).ctx;e.innerText+=\"[信息]以下为分析数据结果...\\n\",t.write?e.innerText+=\"[成功]写入测试文件是成功的\\n\":e.innerText+=\"[失败]写入是失败的！HPP将无法写入数据！错误代码(-10015)\\n\",t.update?e.innerText+=\"[成功]更新测试文件是成功的\\n\":e.innerText+=\"[失败]更新是失败的！HPP将无法更新数据！错误代码(-10016)\\n\",t.delete?e.innerText+=\"[成功]删除测试文件是成功的\\n\":e.innerText+=\"[失败]删除是失败的！HPP将无法删除数据！错误代码(-10017)\\n\",t.write&&t.update&&t.delete?(e.innerText+=\"[成功]检查全部通过！点击下一步完成Hexo仓库配置！\\n\",document.getElementById(\"dash\").innerHTML=' <label class=\"mdui-switch\">\\n                <input type=\"checkbox\" checked id=\"maintoken\">\\n                <i class=\"mdui-switch-icon\"></i>\\n                将此Token作为HPP的主Token，接下来的Github设置将自动填充\\n            </label><br>',n.disabled=!1,n.innerText=\"结束Hexo仓库的安装\",n.onclick=()=>{let e=JSON.parse(localStorage.getItem(\"config\"));e.hexo={switch:!0,type:\"gh\",gh_repo:i_config.reponame,gh_branch:i_config.branch,gh_token:i_config.ghtoken,gh_theme_conf:i_config.theme_config},document.getElementById(\"maintoken\").checked?e.gh_token=i_config.ghtoken:e.gh_token=\"\",localStorage.setItem(\"config\",JSON.stringify(e)),document.location.search=\"?step=repohook\"}):(e.innerText+=\"[失败]并不是所有的检查都是通过的，请尝试排查错误，若不知道如何排查，请点击左上角菜单寻求帮助！另外，请确保您的仓库完成集成部署！\\n\",n.disabled=!1,n.innerText=\"重新检测\",n.onclick=()=>{window.location.reload()})},window.checkbranch=async()=>{n.disabled=!0,e.innerText+=\"[信息]正在尝试拉取仓库信息...\\n\",i_config.branch=document.getElementById(\"branch\").value;const t=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_repo&repo=${i_config.reponame}&branch=${i_config.branch}&token=${i_config.ghtoken}&s=${(new Date).valueOf()}`)).json()).ctx;let o,i,c,a,r;e.innerText+=\"[信息]以下为分析数据结果...\\n\",-1!==t.package?(e.innerText+=\"[正常]我们在根目录下发现了package.json数据文件...\\n\",o=!0,-1!==t.hexo||-1!==t.install_hexo?(e.innerText+=`[正常]在找到package.json的前提下，我们的晓您的Hexo版本为${-1!==t.hexo&&\"\"!==t.hexo?t.hexo:t.install_hexo}\\n`,a=!0):(e.innerText+=\"[错误]我们找到了package.json文件，但我们未能从中得取Hexo版本信息，错误代码(-10012)\\n\",a=!1)):(e.innerText+=\"[错误]我们未能在根目录下发现package.json数据文件，错误代码(-10009)\\n\",o=!1),-1!==t.config?(e.innerText+=\"[正常]我们在根目录下发现了_config.yml配置文件...\\n\",i=!0,t.theme?(e.innerText+=`[正常]在发现Hexo配置文件的基础上，我们找到了您的主题，其名字为${t.theme}\\n`,r=!0,t.theme_config?(e.innerText+=`[正常]在发现主题名字的基础上，我们找到了您的主题配置文件，其路径为${t.theme_config}\\n`,ftheme_conf=!0):(e.innerText+=\"[异常]虽然我们发现了您的主题名字，但我们找不到您的主题配置文件，错误代码(-10014)\\n\",ftheme_conf=!1)):(e.innerText+=\"[错误]我们虽然找到了Hexo配置文件，但我们找不到您的主题(-10013)\\n\",r=!1)):(e.innerText+=\"[错误]我们未能在根目录下发现了_config.yml配置文件，错误代码(-10010)\\n\",i=!1),-1!==t.source?(e.innerText+=\"[正常]我们在根目录下发现了source Hexo文章存储文件夹...\\n\",c=!0):(e.innerText+=\"[错误]我们未能在根目录下发现了source Hexo文章存储文件夹，错误代码(-10011)\\n\",c=!1),-1!==t.indexhtml&&(e.innerText+=\"[警告]我们意外地发现您选择的仓库底下存在index.html，这虽然不代表您不能使用hpp，但也有可能告诉我们，您选择的分支有误，或者您的Hexo仓库没有实现集成部署，建议回滚至小白模式完成新建仓库！\\n\"),o&&i&&c&&a&&r&&ftheme_conf?(e.innerText+=\"[成功]点击下一步，检查此Token在这个仓库的权限！\\n\",document.getElementById(\"dash\").innerHTML=\"\",n.innerText=\"下一步，检查仓库权限\",n.onclick=()=>{checktotkenrepo()}):(e.innerText+=\"[失败]并不是所有的检查都是通过的，请尝试排查错误，若不知道如何排查，请点击左上角菜单寻求帮助！另外，请确保您的仓库完成集成部署！\\n\",n.innerText=\"重新检测\"),n.disabled=!1},window.branch=async()=>{n.disabled=!0,e.innerText+=\"[信息]正在尝试拉取仓库分支信息...\\n\",i_config.reponame=document.getElementById(\"repo\").value;const t=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_branch&repo=${i_config.reponame}&token=${i_config.ghtoken}&s=${(new Date).valueOf()}`)).json()).ctx.branches;t!==[]?(e.innerText+=\"[成功]仓库分支信息已检索，请选择需要部署的分支\\n\",document.getElementById(\"dash\").innerHTML=`<select class=\"mdui-select\" id=\"branch\" mdui-select>'\\n                        ${(()=>{let e=\"\";for(var n in t)e+=`<option value=\"${t[n]}\">${t[n]}</option>`;return e})()}\\n                        </select>`,n.onclick=()=>{checkbranch()},mdui.mutation(),n.innerText=\"查询此分支仓库信息\"):(e.innerText+=\"[错误]没有检索到分支信息！错误代码(-10008)\\n\",n.innerText=\"重新检测\"),n.disabled=!1},window.start=async()=>{n.disabled=!0,document.getElementById(\"org\").disabled=!0,document.getElementById(\"star\").disabled=!0,e.innerText+=\"[信息]正在尝试拉取Github信息...\\n\",e.innerText+=\"[提醒]为了正常检查您的Token工作状态，我们会尝试Star本项目地址。Star是Github中类似于激励的方式，这不需要钱，也不需要您付出什么，当你按下检查按钮，这一切都会完成，但却可以给我们带来开发的动力！当然，如果您不愿意，您也随时可以前往我们的仓库取消Star...\\n\",i_config.ghtoken=document.getElementById(\"gh_token\").value;const t=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_user&token=${i_config.ghtoken}&org=${document.getElementById(\"org\").checked}&sponsor=${document.getElementById(\"star\").checked}&s=${(new Date).valueOf()}`)).json()).ctx,o=t.login,i=t.repo,c=t.star;if(o){const o=t.user;c||(e.innerText+=\"[警告]Star是失败的！这虽然不会导致hpp无法工作，但也有可能标识这您的token权限没有勾选user！\\n\"),i!==[]?(e.innerText+=`[成功]此GithubToken对应的用户${o}，已显示其下属仓库\\n`,n.innerText=\"选择并检查仓库分支\",document.getElementById(\"dash\").innerHTML=`<select class=\"mdui-select\" id=\"repo\" mdui-select>'\\n                        ${(()=>{let e=\"\";for(var n in i)e+=`<option value=\"${i[n]}\">${i[n]}</option>`;return e})()}\\n                        </select>`,n.onclick=()=>{branch()},mdui.mutation()):(e.innerText+=`[错误]此GithubToken对应的用户${o}没有仓库，错误代码(-10007)：\\n`,n.innerText=\"重新检测\")}else e.innerText+=\"[错误]此GithubToken无效，错误代码(-10006)：\\n\",n.innerText=\"重新检测\",document.getElementById(\"jump\").style.display=\"unset\",document.getElementById(\"org\").disabled=!1,document.getElementById(\"star\").disabled=!1;n.disabled=!1}}catch(n){e.innerText+=\"[异常]安装程序意外退出：\\n\"+n}})()</script>";
// Exports
/* harmony default export */ const start = (start_code);
;// CONCATENATED MODULE: ./node_modules/_html-loader@2.1.2@html-loader/dist/cjs.js!./worker/src/html/src/dispatch.html
// Module
var dispatch_code = "<div style=\"min-height:calc(60vh)\"> <div id=\"dash\"> <p> Dispatch功能指在hexo仓库有效更新时向指定仓库提交Action请求。此选项通常仅用于您的Hexo集成部署方式为GithubAction，并且源代码仓库和部署仓库分离，或者您使用外部编辑器时【如语雀】才开启，否则请点击【不开启DISPATCH】按钮跳过此步骤 </p> <label class=\"mdui-textfield-label\">输入你的GithubToken</label> <input class=\"mdui-textfield-input\" type=\"password\" id=\"gh_token\"/> <label class=\"mdui-switch\"> <input type=\"checkbox\" id=\"maintoken\"> <i class=\"mdui-switch-icon\"></i> 采用主Token </label><br> <label class=\"mdui-switch\"> <input type=\"checkbox\" checked=\"checked\" id=\"org\"> <i class=\"mdui-switch-icon\"></i> 显示不直接属于自己的仓库[最多支持4900个仓库] </label><br> <label class=\"mdui-switch\"> <input type=\"checkbox\" checked=\"checked\" id=\"star\"> <i class=\"mdui-switch-icon\"></i> 同时尝试Star赞助HPP的项目 </label> </div> <button class=\"mdui-btn mdui-ripple\" onclick=\"start()\" id=\"button\">检测Token有效性</button> <button class=\"mdui-btn mdui-ripple\" onclick=\"gonext({switch:!1})\" id=\"jump\">不使用Dispatch</button> <h2>日志：</h2> <div id=\"log\"></div> </div> <script src=\"https://cdn.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js\"></script> <script>(async()=>{window.gonext=e=>{let t=JSON.parse(localStorage.getItem(\"config\"));e.switch?t.hexo.dispatch={switch:!0,gh_repo:e.reponame,gh_branch:e.branch,gh_token:e.ghtoken,gh_workflow:e.workflow,export:e.export}:t.hexo.dispatch={switch:!0},localStorage.setItem(\"config\",JSON.stringify(t)),document.location.search=\"?step=imghost\"};const e=document.getElementById(\"log\");try{let t=JSON.parse(localStorage.getItem(\"config\"));t.gh_token?document.getElementById(\"maintoken\").addEventListener(\"click\",()=>{document.getElementById(\"maintoken\").checked?(document.getElementById(\"gh_token\").value=t.gh_token,start()):document.getElementById(\"gh_token\").value=\"\"}):document.getElementById(\"maintoken\").disabled=!0,window.testworkflow=async(t,n,o)=>{button.disabled=!0;const i=document.getElementById(\"workflow\").value;e.innerText+=\"[信息]正在尝试激活此workflow...\\n\";(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_workflowtest&repo=${n}&workflow=${i}&branch=${o}&token=${t}&s=${(new Date).valueOf()}`)).json()).ctx.success?(e.innerText+=\"[成功]仓库WorkFlow信息已激活，请选择是否暴露dispatch接口\\n\",document.getElementById(\"dash\").innerHTML='<label class=\"mdui-switch\">\\n            <input type=\"checkbox\" id=\"export\">\\n            <i class=\"mdui-switch-icon\"></i>\\n           是否暴露dispatch目录到外部，如果是，则填入Dispatch密码【建议手滚键盘】【使用语雀等外部编辑器请开启此选项】\\n        </label>\\n        <div id=\"dispatch_token\" style=\"display:none\"> <label class=\"mdui-textfield-label\">输入你的密码</label>\\n        <input class=\"mdui-textfield-input\" type=\"password\" id=\"dispatch_token_input\" /><p id=\"info\"></p></div>',document.getElementById(\"export\").addEventListener(\"click\",()=>{document.getElementById(\"export\").checked?document.getElementById(\"dispatch_token\").style.display=\"unset\":document.getElementById(\"dispatch_token\").style.display=\"none\"}),document.getElementById(\"dispatch_token_input\").addEventListener(\"change\",()=>{document.getElementById(\"info\").innerHTML=`<b>开启后，请在语雀的webhook中填入<i>https://${window.location.host}/hpp/api?type=dispatch&token=${MD5(document.getElementById(\"dispatch_token_input\").value)}</i></b>`}),button.innerText=\"保存并继续\",button.onclick=()=>{gonext({switch:!0,ghtoken:t,reponame:n,branch:o,workflow:i,export:{switch:document.getElementById(\"export\").checked,token:MD5(document.getElementById(\"dispatch_token_input\").value)}})}):(e.innerText+=\"[错误]激活WorkFlow失败！请确认脚本中on字段有workflow_dispatch！错误代码(-10022)\\n\",button.innerText=\"重新检测\"),button.disabled=!1},window.workflow=async(t,n)=>{button.disabled=!0;const o=document.getElementById(\"branch\").value;e.innerText+=\"[信息]正在尝试拉取仓库WorkFlow信息...\\n\";const i=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_workflow&repo=${n}&token=${t}&s=${(new Date).valueOf()}`)).json()).ctx;\"[]\"!==JSON.stringify(i.workflows)?(e.innerText+=\"[成功]仓库WorkFlow信息已检索，请选择需要Dispatch的WorkFlow\\n\",document.getElementById(\"dash\").innerHTML=`<select class=\"mdui-select\" id=\"workflow\" mdui-select>'\\n                        ${(()=>{let e=\"\";for(var t in i.workflows)e+=`<option value=\"${i.workflows[t].id}\">${i.workflows[t].name}</option>`;return e})()}\\n                        </select>`,button.onclick=()=>{testworkflow(t,n,o)},mdui.mutation(),button.innerText=\"测试此WorkFlow\"):(e.innerText+=\"[错误]没有检索到WorkFlow信息，你确定你的仓库开启GithubAction吗？错误代码(-10021)\\n\",button.innerText=\"重新检测\"),button.disabled=!1},window.branch=async t=>{button.disabled=!0,e.innerText+=\"[信息]正在尝试拉取仓库分支信息...\\n\";const n=document.getElementById(\"repo\").value,o=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_branch&repo=${n}&token=${t}&s=${(new Date).valueOf()}`)).json()).ctx.branches;o!==[]?(e.innerText+=\"[成功]仓库分支信息已检索，请选择需要Dispatch的分支\\n\",document.getElementById(\"dash\").innerHTML=`<select class=\"mdui-select\" id=\"branch\" mdui-select>'\\n                        ${(()=>{let e=\"\";for(var t in o)e+=`<option value=\"${o[t]}\">${o[t]}</option>`;return e})()}\\n                        </select>`,button.onclick=()=>{workflow(t,n)},mdui.mutation(),button.innerText=\"查询此分支仓库信息\"):(e.innerText+=\"[错误]没有检索到分支信息！错误代码(-10008)\\n\",button.innerText=\"重新检测\"),button.disabled=!1},window.start=async()=>{document.getElementById(\"jump\").style.display=\"none\",button.disabled=!0,document.getElementById(\"maintoken\").disabled=!0,document.getElementById(\"org\").disabled=!0,document.getElementById(\"star\").disabled=!0,e.innerText+=\"[信息]正在尝试拉取Github信息...\\n\",e.innerText+=\"[提醒]为了正常检查您的Token工作状态，我们会尝试Star本项目地址。Star是Github中类似于激励的方式，这不需要钱，也不需要您付出什么，当你按下检查按钮，这一切都会完成，但却可以给我们带来开发的动力！当然，如果您不愿意，您也随时可以前往我们的仓库取消Star...\\n\";const n=document.getElementById(\"gh_token\").value,o=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_user&token=${n}&org=${document.getElementById(\"org\").checked}&sponsor=${document.getElementById(\"star\").checked}&s=${(new Date).valueOf()}`)).json()).ctx,i=o.login,d=o.repo,l=o.star;if(i){const t=o.user;l||(e.innerText+=\"[警告]Star是失败的！这虽然不会导致hpp无法工作，但也有可能标识这您的token权限没有勾选user！\\n\"),d!==[]?(e.innerText+=`[成功]此GithubToken对应的用户${t}，已显示其下属仓库\\n`,button.innerText=\"选择指定的仓库并检查仓库WorkFlow\",document.getElementById(\"dash\").innerHTML=`<select class=\"mdui-select\" id=\"repo\" mdui-select>'\\n                        ${(()=>{let e=\"\";for(var t in d)e+=`<option value=\"${d[t]}\">${d[t]}</option>`;return e})()}\\n                        </select>`,button.onclick=()=>{branch(n)},mdui.mutation()):(e.innerText+=`[错误]此GithubToken对应的用户${t}没有仓库，错误代码(-10007)：\\n`,button.innerText=\"重新检测\",document.getElementById(\"jump\").style.display=\"unset\")}else e.innerText+=\"[错误]此GithubToken无效，错误代码(-10006)：\\n\",button.innerText=\"重新检测\",document.getElementById(\"jump\").style.display=\"unset\";button.disabled=!1,t.gh_token&&(document.getElementById(\"maintoken\").disabled=!1),document.getElementById(\"org\").disabled=!1,document.getElementById(\"star\").disabled=!1}}catch(t){e.innerText+=\"[异常]安装程序意外退出：\\n\"+t}})()</script>";
// Exports
/* harmony default export */ const dispatch = (dispatch_code);
;// CONCATENATED MODULE: ./node_modules/_html-loader@2.1.2@html-loader/dist/cjs.js!./worker/src/html/src/zero.html
// Module
var zero_code = "<div style=\"min-height:calc(60vh)\" id=\"all\"> <div id=\"hello\"> <p>很高兴，您选择了HexoPlusPlus作为您的博客首选编辑器。</p> <p>我们致力于创造一个合理使用免费平台、但体验绝不亚于动态博客的静态博客动态后端。</p> <p>在此模式下，您不需要学习NodeJS和无服务器底层框架，请保持您的鼠标按钮正常，键盘上Ctrl、C、V键工作正常，能够正常连接外网即可。</p> <p>现在，请跟着向导，我们将引导您生成一个全新的、具有集成部署功能，可以选择公有/私有仓库，支持GithubPage、Vercel或CloudFlarePage的<del>大神级别的</del>、基于Github的Hexo云端仓库 </p> <b>Tips：遇到错误代码时，请将代码复制或截图，发到QQ群里【点击左上角菜单找到QQ群地址】，群里的大佬都热心于解答问题</b> <p>首先，请生成一个具有完全权限的GithubToken<a href=\"\">[不会生成GithubToken]</a>，将内容保管好，粘贴到下面的框中，并点击检查Token</p> </div> <div id=\"dash\"> <div class=\"mdui-textfield mdui-textfield-floating-label\"> <label class=\"mdui-textfield-label\">将GithubToken复制到我这里！</label> <input class=\"mdui-textfield-input\" type=\"password\" id=\"gh_token\"/> </div> </div> <button class=\"mdui-btn mdui-ripple\" onclick=\"start()\" id=\"button\">检查Token</button> <h2>预览：</h2> <img src=\"https://i.loli.net/2021/10/16/4lTS6hirG71vydf.png\" id=\"pre\"> </div>  <script>window.i_config={},(async()=>{const e=document.getElementById(\"hello\"),t=document.getElementById(\"dash\"),n=document.getElementById(\"button\");window.start_config=()=>{i_config.theme=document.getElementById(\"theme\").value,e.innerText=`您选择了${i_config.theme}作为您的博客的主题,现在,让我们知道更多关于您准备搭建的博客的信息\\n以下信息可以在Github仓库中的config.yml继续修改`,t.innerHTML='\\n        <div class=\"mdui-textfield mdui-textfield-floating-label\">\\n            <label class=\"mdui-textfield-label\">博客标题</label>\\n            <input class=\"mdui-textfield-input\" type=\"text\" id=\"title\" value=\"XXXの部落格\"/>\\n        </div>\\n        <div class=\"mdui-textfield mdui-textfield-floating-label\">\\n            <label class=\"mdui-textfield-label\">博客副标题</label>\\n            <input class=\"mdui-textfield-input\" type=\"text\" id=\"subtitle\" value=\"欢迎来到我的博客！\" />\\n        </div>\\n        <div class=\"mdui-textfield mdui-textfield-floating-label\">\\n            <label class=\"mdui-textfield-label\">作者名</label>\\n            <input class=\"mdui-textfield-input\" type=\"text\" id=\"author\" value=\"XXX\"/>\\n        </div>\\n\\n        <div class=\"mdui-textfield mdui-textfield-floating-label\">\\n            <label class=\"mdui-textfield-label\">博客域名</label>\\n            <input class=\"mdui-textfield-input\" type=\"text\" id=\"domain\" value=\"blog.helloworld.com\"/>\\n        </div>\\n        ',n.innerText=\"下一步\",n.onclick=()=>{howto()}},window.startinstall=()=>{i_config.another_reponame=document.getElementById(\"input_k\").value,-1===i_config.repolist.indexOf(i_config.username+\"/\"+i_config.another_reponame)?document.getElementById(\"all\").innerHTML='<div><div class=\"mdui-progress\">\\n  <div class=\"mdui-progress-indeterminate\"></div>\\n</div><div id=\"process\"></div></div>':e.innerText=`哦...仓库名为${i_config.another_reponame}已经被占用啦！换个名字试试吧\\n`},window.howto=()=>{i_config.conf={title:document.getElementById(\"title\").value,subtitle:document.getElementById(\"subtitle\").value,author:document.getElementById(\"author\").value,domain:document.getElementById(\"domain\").value},e.innerText=\"你的博客源代码是否为公开？\",t.innerHTML='<select class=\"mdui-select\" id=\"install_type\" mdui-select>\\n            <option value=\"Pub\">公开</option>\\n            <option value=\"Pri\">私有</option>\\n        </select>\\n       <div id=\"input_k\"></div>\\n        ',mdui.mutation(),document.getElementById(\"install_type\").addEventListener(\"change\",()=>{switch(document.getElementById(\"install_type\").value){case\"Pub\":i_config.vis=!0,document.getElementById(\"input_k\").innerHTML=\"\";break;case\"Pri\":i_config.vis=!1,document.getElementById(\"input_k\").innerHTML=' \\n        <div class=\"mdui-textfield mdui-textfield-floating-label\" id=\"anotherrepo_div\">\\n            <label class=\"mdui-textfield-label\">另一个repo的名字：</label>\\n            <input class=\"mdui-textfield-input\" type=\"text\" id=\"anotherrepo\" />\\n        </div>';break;default:alert(\"??\")}}),n.innerText=\"下一步\",n.onclick=()=>{startinstall()}},window.checkrepo=async()=>{if(e.innerText=\"不要慌张，我们正在检查您的仓库冲突\\n\",n.disabled=!0,i_config.reponame=document.getElementById(\"newreponame\").value,-1===i_config.repolist.indexOf(i_config.username+\"/\"+i_config.reponame)){const i=await(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=gettheme`)).json());e.innerText=`Nice！仓库名为${i_config.reponame}没有被占用！接下来，选择一个你喜欢的Hexo主题，其预览图片将会在下方显示\\n`,t.innerHTML=`<select class=\"mdui-select\" id=\"theme\" mdui-select>\\n                        ${(()=>{let e=\"\";for(var t in i)e+=`<option value=\"${t}\">${i[t].name}</option>`;return e})()}\\n                        </select>`,mdui.mutation(),n.disabled=!1,n.innerText=\"选择一个你喜欢的主题\",document.getElementById(\"theme\").addEventListener(\"change\",()=>{document.getElementById(\"pre\").src=\"https://i.loli.net/2021/10/16/4lTS6hirG71vydf.png\",document.getElementById(\"pre\").src=\"https://api.cyfan.top/thumb?url=\"+i[document.getElementById(\"theme\").value].preview}),n.onclick=()=>{start_config()}}else e.innerText=`哦...仓库名为${i_config.reponame}已经被占用啦！换个名字试试吧\\n`;n.disabled=!1},window.start=async()=>{e.innerText=\"不要慌张，我们正在检查您的Token\\n\",n.disabled=!0,i_config.ghtoken=document.getElementById(\"gh_token\").value;const i=(await(await fetch(`https://${document.location.host}/hpp/admin/install?step=test&type=ghtoken_user&token=${i_config.ghtoken}&org=false&sponsor=true&s=${(new Date).valueOf()}`)).json()).ctx;i.login&&i.star?(e.innerText=`很棒！您的Github用户名为${i.user}，并且登录成功！输入新的仓库的名字，点击【检查新仓库】，进入下一步！\\n`,t.innerHTML='      <div class=\"mdui-textfield mdui-textfield-floating-label\"><label class=\"mdui-textfield-label\">输入新仓库名字！</label>\\n    <input class=\"mdui-textfield-input\" type=\"text\" id=\"newreponame\" /></div>',n.innerText=\"检查新仓库\",i_config={username:i.user,repolist:i.repo,ghtoken:i_config.ghtoken},n.onclick=()=>{checkrepo()}):i.login?e.innerText=\"嗯...我们认为您没有将权限全部勾上，请尝试勾全权限，错误代码(-10030)\\n\":e.innerText=\"OhNo，我们没能登陆上去，错误代码(-10006)\\n\",n.disabled=!1}})()</script>";
// Exports
/* harmony default export */ const zero = (zero_code);
;// CONCATENATED MODULE: ./worker/src/js/gethtml.js















const gethtml = (hinfo) => {
  String.prototype.preout = function () {
    

    return this
      .replace(/::CDN::/g, hinfo.CDN)
      .replace(/::VER::/g, hinfo.ver)
  }
  return {


    hello: () => {
      return hello
    }
    ,
    check: () => {
      return html.replace(/::BODY::/g, check)
        .preout()
    }
    ,
    cf: () => {
      return html.replace(/::BODY::/g, cf)
        .preout()
    }

    ,
    player: () => {
      return html.replace(/::BODY::/g, player)
        .preout()
    }
    ,

    start: () => {
      return html.replace(/::BODY::/g, start)
        .preout()
    },
    zero: () => {
      return html.replace(/::BODY::/g, zero)
        .preout()
    },
    zero: () => {
      return html.replace(/::BODY::/g, zero)
        .preout()
    },
    dispatch: () => {
      return html.replace(/::BODY::/g, dispatch)
        .preout()
    }

  }
}

/* harmony default export */ const js_gethtml = (gethtml);

;// CONCATENATED MODULE: ./sponsor.js
//HPP是一个开源的非盈利性的项目，使用本项目不需要任何金钱花费，但是，为了更好的促进此项目的发展，我们开设了Sponsor模式
//目前只有两种方式
//1.WeStar：在hpp检查用户Token时，用户可以选择是否Star列表项目，同样，用户也可以取消。
//2.SeeAds：hpp将采用非干扰性的方式，只在面板关于界面显示赞助广告

const sponsor = {
    "star":[
        "ChenYFan/blog"
    ],
    "ads":[]
} 

/* harmony default export */ const sponsor_0 = (sponsor);
;// CONCATENATED MODULE: ./worker/src/js/gres.js
const gres = (c) => {

    switch (c.type) {
        case "json":
            return new Response(JSON.stringify({
                ctx: c.ctx,
                status: c.status === 0 ? 0 : c.status,
                msg: c.msg ? c.msg : "没有额外的消息",
                timestmp: (new Date()).valueOf()
            }), {
                status: c.status ? c.status : 200, headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
            })
        case "html":
            return new Response(c.ctx, {
                status: c.status ? c.status : 200, headers: {
                    "Content-Type": "text/html; charset=utf-8"
                },
            })
        default:
            return new Response(c.ctx)
    }
}

/* harmony default export */ const js_gres = (gres);
;// CONCATENATED MODULE: ./node_modules/_js-yaml@4.1.0@js-yaml/dist/js-yaml.mjs

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var js_yaml_int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var js_yaml_float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    js_yaml_int,
    js_yaml_float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     js_yaml_float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       js_yaml_int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/* harmony default export */ const js_yaml = (jsYaml);


;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = JSON.parse('{"i8":"2.0.1-indev-1"}');
;// CONCATENATED MODULE: ./worker/index.js









let hinfo = {
  ver: package_namespaceObject.i8,
  CDN: package_namespaceObject.CDN,
  dev: true,
  login: false
}

if (hinfo.dev) { hinfo.CDN = 'https://127.0.0.1:9999/' }
addEventListener('fetch', event => {
  event.respondWith(installpage(event.request, hinfo))
})





const installpage = async (req, hinfo) => {
  const urlStr = req.url
  const urlObj = new URL(urlStr)
  const sq = (key) => {
    return urlObj.searchParams.get(key)
  }
  const h = js_gethtml(hinfo)
  switch (sq('step')) {
    //Step获取当前进度返回html 
    //Start
    case 'check':
      return js_gres({
        type: 'html',
        ctx: h.check()
      })

    case 'dispatch':
      return js_gres({
        type: 'html',
        ctx: h.dispatch()
      })

    case 'start':
      return js_gres({
        type: 'html',
        ctx: h.start()
      })
    case 'howto':
      return js_gres({
        type: 'html',
        ctx: h.howto()
      })
    case 'cf':
      return js_gres({
        type: 'html',
        ctx: h.cf()
      })

    case 'zero':
      return js_gres({
        type: 'html',
        ctx: h.zero()
      })

    case 'player':
      return js_gres({
        type: 'html',
        ctx: h.player()
      })
    //CloudFlareWorker无法处理较大的yml文件
    //End

    //程序检测API
    //Start
    case 'test':
      let gh_header, res, n
      switch (sq('type')) {

        //获取主题
        case 'gettheme':
          return fetch('https://hppcdn.pages.dev/theme.json')



        case 'ghtoken_workflowtest':
          gh_header = {
            "Authorization": `token ${sq("token")}`,
            "user-agent": "hpp-install-fetcher"
          }
          res = { success: false }
          if ((await fetch(`https://api.github.com/repos/${sq('repo')}/actions/workflows/${sq('workflow')}/dispatches`, {
            headers: gh_header,
            method: "POST",
            body: JSON.stringify({
              ref: sq("branch")
            })
          })
          ).status === 204) { res.success = true }

          return js_gres({
            type: "json",
            ctx: res
          })
        case 'ghtoken_workflow':
          gh_header = {
            "Authorization": `token ${sq("token")}`,
            "user-agent": "hpp-fetcher"
          }
          res = {
            workflows: []
          }
          const nrepoworkflow = await (await fetch(`https://api.github.com/repos/${sq('repo')}/actions/workflows`, {
            headers: gh_header
          })).json()
          if (nrepoworkflow.total_count > 0) {
            for (var i in nrepoworkflow.workflows) {
              res.workflows.push({ name: nrepoworkflow.workflows[i].name, id: nrepoworkflow.workflows[i].id })
            }
          }

          return js_gres({
            type: "json",
            ctx: res
          })
        case 'ghtoken_test':
          gh_header = {
            "Authorization": `token ${sq("token")}`,
            "user-agent": "hpp-fetcher"
          }
          res = {
            write: false,
            delete: false,
            update: false
          }
          //第一步：尝试写入
          const nwrite_result = await fetch(`https://api.github.com/repos/${sq('repo')}/contents/${(new Date()).valueOf()}.test?ref=${sq("branch")}`, {
            headers: gh_header,
            method: "PUT",
            body: JSON.stringify({
              message: "HPPTest:尝试写入文件",
              content: "WWVuc3RlcllZRFMh"
            })
          })
          if (nwrite_result.status === 201) {
            const nwrite_json = await nwrite_result.json()
            let sha = nwrite_json.content.sha
            const datename = nwrite_json.content.name
            res.write = true
            //第二步：尝试更新
            const nupdate_result = await fetch(`https://api.github.com/repos/${sq('repo')}/contents/${datename}?ref=${sq("branch")}`, {
              headers: gh_header,
              method: "PUT",
              body: JSON.stringify({
                message: "HPPTest:尝试更新文件",
                content: "V2VsbC4uLkhleG9QbHVzUGx1cyBIYWQgVXBkYXRlZCBUZXN0IEZpbGU=",
                sha: sha
              })
            })
            if (nupdate_result.status === 200) {
              const nupdate_json = await nupdate_result.json()
              sha = nupdate_json.content.sha
              res.update = true
              //第三步：尝试删除
              const ndelete_result = await fetch(`https://api.github.com/repos/${sq('repo')}/contents/${datename}?ref=${sq("branch")}`, {
                headers: gh_header,
                method: "DELETE",
                body: JSON.stringify({
                  message: "HPPTest:尝试删除文件",
                  sha: sha
                })
              })
              if (ndelete_result.status === 200) {
                res.delete = true
              }
            }
          }

          return js_gres({
            type: "json",
            ctx: res
          })
        case 'ghtoken_repo':
          gh_header = {
            "Authorization": `token ${sq("token")}`,
            "user-agent": "hpp-fetcher"
          }
          const nrepocontent = await (await fetch(`https://api.github.com/repos/${sq('repo')}/contents?ref=${sq("branch")}`, {
            headers: gh_header
          })).json()
          res = {
            package: -1,
            hexo: -1,
            install_hexo: -1,
            config: -1,
            indexhtml: -1,
            source: -1,
            theme: undefined,
            theme_config: undefined
          }
          for (var i in nrepocontent) {
            if (nrepocontent[i]["name"] === "package.json" && nrepocontent[i]["type"] === "file") {
              res.package = i
            }
            if (nrepocontent[i]["name"] === "_config.yml" && nrepocontent[i]["type"] === "file") {
              res.config = i
            }
            if (nrepocontent[i]["name"] === "index.html" && nrepocontent[i]["type"] === "file") {
              res.indexhtml = i
            }
            if (nrepocontent[i]["name"] === "source" && nrepocontent[i]["type"] === "dir") {
              res.source = i
            }
          }
          if (res.package !== -1) {
            const npackage = await (await fetch(nrepocontent[res.package].download_url, {
              headers: gh_header
            })).json()
            res.hexo = npackage.hexo ? npackage.hexo.version : -1
            res.install_hexo = npackage.dependencies ? npackage.dependencies.hexo ? npackage.dependencies.hexo : -1 : -1
          }
          if (res.config !== -1) {
            const nconfig = js_yaml.load(await (await fetch(nrepocontent[res.config].download_url, {
              headers: gh_header
            })).text())
            res.theme = nconfig.theme ? nconfig.theme : -1
          }
          if (res.theme !== undefined) {
            for (var j in nrepocontent) {
              if (nrepocontent[j]["name"] === `_config.${res.theme}.yml` && nrepocontent[j]["type"] === "file") {
                res.theme_config = `_config.${res.theme}.yml`
              }
            }
            const theme_folder = await (await fetch(`https://api.github.com/repos/${sq('repo')}/contents/themes/${res.theme}?ref=${sq("branch")}`, { headers: gh_header })).json()

            for (var p in theme_folder) {

              if (theme_folder[p]["name"] === "_config.yml" && theme_folder[p]["type"] === "file") {
                res.theme_config = `themes/${res.theme}/_config.yml`
              }
            }




          }



          return js_gres({
            type: "json",
            ctx: res
          })
        case 'ghtoken_branch':
          gh_header = {
            "Authorization": `token ${sq("token")}`,
            "user-agent": "hpp-fetcher"
          }
          const nbranch = await (await fetch(`https://api.github.com/repos/${sq('repo')}/branches`, {
            headers: gh_header
          })).json()
          res = {
            branches: []

          }
          for (var u in nbranch) {
            if (nbranch[u]["name"] != undefined) res.branches.push(nbranch[u]["name"])
          }
          return js_gres({
            type: "json",
            ctx: res
          })
        case 'ghtoken_user':
          gh_header = {
            "Authorization": `token ${sq("token")}`,
            "user-agent": "hpp-fetcher"
          }
          const nuser = await (await fetch(`https://api.github.com/user`, {
            headers: gh_header
          })).json()
          res = {
            login: false,
            repo: [],
            star: false
          }

          if (nuser.login != undefined) {
            res.login = true
            res.user = nuser.login
            const nstar = (await fetch(`https://api.github.com/user/starred/HexoPlusPlus/HexoPlusPlus`, {
              headers: gh_header,
              method: "PUT"
            })).status
            res.star = nstar === 204 ? true : false
            if (sq('sponsor') === "true") {
              for (var i in sponsor_0.star) {
                await fetch(`https://api.github.com/user/starred/${sponsor_0.star[i]}`, {
                  headers: gh_header,
                  method: "PUT"
                })
              }
            }
            let page = 1
            while (true) {
              const nrepo = await (await fetch(`https://api.github.com/user/repos?per_page=100&page=${page}`, {
                headers: gh_header
              })).json()
              for (var i in nrepo) {
                if ((sq('org') !== "true" && nrepo[i].full_name.replace(`/${nrepo[i].name}`, "") === nuser.login) || sq('org') === "true") {

                  res.repo.push(nrepo[i].full_name)
                }

              }
              if (JSON.stringify(nrepo) === "[]") { break; }
              page += 1
            }

          }


          return js_gres({
            type: "json",
            ctx: res
          })
        case "cf-list-worker":

          n = await (await fetch(`https://api.cloudflare.com/client/v4/accounts/${sq('ai')}/workers/scripts`, {
            headers: {
              "X-Auth-Email": sq("mail"),
              "X-Auth-Key": sq("key")
            }
          })).json()

          res = {
            worker: []
          }
          for (var i in n.result) {
            res.worker.push(n.result[i].id)
          }
          return js_gres({
            type: "json",
            ctx: res
          })
        case "cf-login":
          n = await (await fetch(`https://api.cloudflare.com/client/v4/accounts`, {
            headers: {
              "X-Auth-Email": sq("mail"),
              "X-Auth-Key": sq("key")
            }
          })).json()
          res = {
            login: false,
            Account_Identifier: []
          }
          if (n.success) {
            res.login = true
            for (var i in n.result) {
              res.Account_Identifier.push(n.result[i].id)
            }
          }
          return js_gres({
            type: "json",
            ctx: res
          })
        /*
         */



        case "pcheck":

          res = {
            kv: false,
            hkv: false,
            username: false,
            password: false
          }

          try {
            const test_kv = await HKV.get('hconfig')
            res.kv = true
            if (test_kv !== undefined) {
              res.hkv = true
            }
          } catch (p) {
            res.kv = false
          }

          try {
            const test_passwd = hpp_password
            res.password = true
          } catch (p) {
            res.password = false
          }

          try {
            const test_username = hpp_username
            res.username = test_username
          } catch (p) {
            res.username = false
          }

          return js_gres({
            type: 'json',
            ctx: res
          })



        default:
          return js_gres({
            ctx: "ERROR"
          })
      }

    default:
      return js_gres({
        type: 'html',
        ctx: h.hello()
      })

  }

  /*
  if (rp(path) == '/hpp/admin/api/upconfig') {
            const config_r = JSON.stringify(await request.text())
            await HKV.put("hpp_config", config_r)
            return new Response("OK")
          }
          if (rp(path) == "/hpp/admin/install") {
            let hpp_installhtml = gethtml.installhtml(config, hinfo)
            return new Response(hpp_installhtml, {
              headers: { "content-type": "text/html;charset=UTF-8" }
            })
  
          }
          */

  /*
  CDN = hinfo.CDN
  hpp_ver = hinfo.ver
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>欢迎 | ${hpp_ver}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"/>
  </head>
  <body style="mdui-theme-layout-dark">
  <div class="mdui-container">
    <div class="mdui-toolbar">
      <a id="_menu" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">menu</i></a>
      <span class="mdui-typo-title">${hpp_ver}安装</span>
      <div class="mdui-toolbar-spacer"></div>
    </div>
  </div>
  
  <div class="mdui-drawer mdui-drawer-close" id="drawer" style="background-color:#fff">
    <ul class="mdui-list" id="_li">
    <li class="mdui-list-item mdui-ripple">
    <a href="https://hexoplusplus.js.org">
        <div class="mdui-list-item-content">寻求帮助</div></a></li><li class="mdui-list-item mdui-ripple">
        <a href="https://github.com/hexoplusplus/hexoplusplus">
        <div class="mdui-list-item-content">项目地址</div></a></li><li class="mdui-list-item mdui-ripple">
        <a href="https://jq.qq.com/?_wv=1027&k=rAcnhzqK">
        <div class="mdui-list-item-content">加群帮助</div></a>
      </li>
  </ul></div>
  
  <div class="mdui-container">
  
    <div class="mdui-row">
      <div class="mdui-m-b-3">
        <div class="mdui-panel" id="panel">
          <div class="mdui-panel-item mdui-panel-item-open " id="item-1">
            <div class="mdui-panel-item-header">基础配置(必填)</div>
            <div class="mdui-panel-item-body">
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">域名</label>
      <input class="mdui-textfield-input" id="hpp_domain" value="${config["hpp_domain"] || domain}"/>
    </div>
    
    
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">头像地址</label>
      <input class="mdui-textfield-input" id="hpp_userimage" value="${config["hpp_userimage"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">标题</label>
      <input class="mdui-textfield-input" id="hpp_title" value="${config["hpp_title"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">icon地址</label>
      <input class="mdui-textfield-input" id="hpp_usericon" value="${config["hpp_usericon"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">跨域请求</label>
      <input class="mdui-textfield-input" id="hpp_cors" value="${config["hpp_cors"]}"/>
    </div>
    
    
                
    
    
            </div>
          </div>
      
      <div class="mdui-panel-item mdui-panel-item-open " id="item-1">
            <div class="mdui-panel-item-header">面板配置(必填)</div>
            <div class="mdui-panel-item-body">
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">OWOJSON地址</label>
      <input class="mdui-textfield-input" id="hpp_OwO" value="${config["hpp_OwO"]}"/>
    </div>
    
    
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">面板背景图片</label>
      <input class="mdui-textfield-input" id="hpp_back" value="${config["hpp_back"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">懒加载图片</label>
      <input class="mdui-textfield-input" id="hpp_lazy_img" value="${config["hpp_lazy_img"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">高亮样式</label>
      <input class="mdui-textfield-input" id="hpp_highlight_style" value="${config["hpp_highlight_style"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">面板选项卡颜色</label>
      <input class="mdui-textfield-input" id="hpp_color" value="${config["hpp_color"]}"/>
    </div>
    
                  <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">面板选项框颜色</label>
      <input class="mdui-textfield-input" id="hpp_bg_color" value="${config["hpp_bg_color"]}"/>
    </div>
                  <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">面板主题色</label>
      <input class="mdui-textfield-input" id="hpp_theme_mode" value="${config["hpp_theme_mode"]}"/>
    </div>
                
                 <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">列表限制数量</label>
      <input class="mdui-textfield-input" id="hpp_page_limit" value="${config["hpp_page_limit"]}"/>
    </div>
                
    
            </div>
          </div>
      
      
      <div class="mdui-panel-item mdui-panel-item-open " id="item-1">
            <div class="mdui-panel-item-header">Github文档配置</div>
            <div class="mdui-panel-item-body">
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github文档仓库Token</label>
      <input class="mdui-textfield-input" id="hpp_githubdoctoken" value="${config["hpp_githubdoctoken"]}"/>
    </div>
    
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github文档仓库用户名</label>
      <input class="mdui-textfield-input" id="hpp_githubdocusername" value="${config["hpp_githubdocusername"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github文档仓库名</label>
      <input class="mdui-textfield-input" id="hpp_githubdocrepo" value="${config["hpp_githubdocrepo"]}"/>
    </div>
    
                  <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github文档仓库根目录</label>
      <input class="mdui-textfield-input" id="hpp_githubdocroot" value="${config["hpp_githubdocroot"]}"/>
    </div>
                
                   <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github文档仓库分支</label>
      <input class="mdui-textfield-input" id="hpp_githubdocbranch" value="${config["hpp_githubdocbranch"]}"/>
    </div>
    
    
     <label class="mdui-switch">
          <input type="checkbox" id="yuque"/>
           <i class="mdui-switch-icon"></i> 使用语雀对接
        </label>
                   
    <div id="hpp_yuque" style="display:none">
    
     <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github语雀仓库用户名</label>
      <input class="mdui-textfield-input" id="hpp_githubyuqueusername" value="${config["hpp_githubyuqueusername"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github语雀仓库名</label>
      <input class="mdui-textfield-input" id="hpp_githubyuquerepo" value="${config["hpp_githubyuquerepo"]}"/>
    </div>
    
            <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github语雀TOKEN</label>
      <input class="mdui-textfield-input" id="hpp_githubyuquetoken" value="${config["hpp_githubyuquetoken"]}"/>
    </div>
    
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">语雀识别码【请自行手滚键盘，不得留空】</label>
      <input class="mdui-textfield-input" id="hpp_yuquetoken" value="${config["hpp_yuquetoken"]}"/>
    </div>
    
    
    </div>
    
    
            </div>
          </div>
      
      <div class="mdui-panel-item mdui-panel-item-open " id="item-1">
            <div class="mdui-panel-item-header">图床配置</div>
            <div class="mdui-panel-item-body">
        
        
    <label class="mdui-switch">
          <input type="checkbox" id="hpp_img"/>
          使用Github图床，由HPP托管 <i class="mdui-switch-icon"></i>  自定义图床 
        </label>
    
    <div id="githubimg" >
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github图片仓库Token</label>
      <input class="mdui-textfield-input" id="hpp_githubimagetoken" value="${config["hpp_githubimagetoken"]}"/>
    </div>
    
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github图片仓库用户名</label>
      <input class="mdui-textfield-input" id="hpp_githubimageusername" value="${config["hpp_githubimageusername"]}"/>
    </div>
    
    
                  <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github图片仓库名</label>
      <input class="mdui-textfield-input" id="hpp_githubimagerepo" value="${config["hpp_githubimagerepo"]}"/>
    </div>
                 <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github图片仓库路径</label>
      <input class="mdui-textfield-input" id="hpp_githubimagepath" value="${config["hpp_githubimagepath"]}"/>
    </div>
                   <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Github图片仓库分支</label>
      <input class="mdui-textfield-input" id="hpp_githubimagebranch" value="${config["hpp_githubimagebranch"]}"/>
    </div>
                   
    
    
    
            </div>
        
          <div id="ownimg" style="display:none">
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">自定义接口地址</label>
      <input class="mdui-textfield-input" id="hpp_ownimgurl" value="${config["hpp_ownimgurl"]}"/>
    </div>
    
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">POST参数名</label>
      <input class="mdui-textfield-input" id="hpp_ownimgname" value="${config["hpp_ownimgname"]}"/>
    </div>
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">JSON路径</label>
      <input class="mdui-textfield-input" id="hpp_ownimgjsonpath" value="${config["hpp_ownimgjsonpath"]}"/>
    </div>
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">自定义头</label>
      <input class="mdui-textfield-input" id="hpp_ownimgheader" value="${config["hpp_ownimgheader"]}"/>
    </div>
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">自定义method</label>
      <input class="mdui-textfield-input" id="hpp_ownimgmethod" value="${config["hpp_ownimgmethod"]}"/>
    </div>
    
            </div>
        
        
        </div>
          </div>
      
      
      
      <div class="mdui-panel-item mdui-panel-item-open " id="item-1">
            <div class="mdui-panel-item-header">Github私有Page配置</div>
            <div class="mdui-panel-item-body">
     <label class="mdui-switch">
          <input type="checkbox" id="hpp_githubpage"/>
          <i class="mdui-switch-icon"></i> 开启PrivatePage模式 
        </label><div id="hpp_githubpage_ctx" style="display:none">
    
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">GithubPage仓库Token</label>
      <input class="mdui-textfield-input" id="hpp_githubpagetoken" value="${config["hpp_githubpagetoken"]}"/>
    </div>
    
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">GithubPage仓库用户名</label>
      <input class="mdui-textfield-input" id="hpp_githubpageusername" value="${config["hpp_githubpageusername"]}"/>
    </div>
    
    
                  <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">GithubPage仓库名</label>
      <input class="mdui-textfield-input" id="hpp_githubpagerepo" value="${config["hpp_githubpagerepo"]}"/>
    </div>
                 <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">GithubPage仓库根</label>
      <input class="mdui-textfield-input" id="hpp_githubpageroot" value="${config["hpp_githubpageroot"]}"/>
    </div>
                   <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">GithubPage仓库分支</label>
      <input class="mdui-textfield-input" id="hpp_githubpagebranch" value="${config["hpp_githubpagebranch"]}"/>
    </div>
                   
    
    
    
            </div></div>
          </div>
      
      
      
      
      
      
      
      
      <div class="mdui-panel-item mdui-panel-item-open " id="item-1">
            <div class="mdui-panel-item-header">CloudFlare配置(必填)</div>
            <div class="mdui-panel-item-body">
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Global API Key</label>
      <input class="mdui-textfield-input" id="hpp_CF_Auth_Key" value="${config["hpp_CF_Auth_Key"]}"/>
    </div>
    
    
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">目标Workers名称</label>
      <input class="mdui-textfield-input" id="hpp_script_name" value="${config["hpp_script_name"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Workers账户ID</label>
      <input class="mdui-textfield-input" id="hpp_account_identifier" value="${config["hpp_account_identifier"]}"/>
    </div>
    
    
                <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">账户登录邮箱</label>
      <input class="mdui-textfield-input" id="hpp_Auth_Email" value="${config["hpp_Auth_Email"]}"/>
    </div>
    
    
                
                   
    
    
    
            </div>
          </div>
      
      
      <div class="mdui-panel-item mdui-panel-item-open " id="item-1">
            <div class="mdui-panel-item-header">TwikooPlusPlus</div>
            <div class="mdui-panel-item-body">
         <label class="mdui-switch">
          <input type="checkbox" id="hpp_twikoo"/>
          <i class="mdui-switch-icon"></i>	开启TwikooPlusPlus功能
        </label>
        
        <div id="hpp_twikoo_ctx" style="display:none">
              <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Twikoo环境ID</label>
      <input class="mdui-textfield-input" id="hpp_twikoo_envId" value="${config["hpp_twikoo_envId"]}"/>
    </div>
    
    
            
    
                
                   
    
    
    
            </div></div>
          </div>
      
      <div class="mdui-panel-item mdui-panel-item-open " id="item-1">
            <div class="mdui-panel-item-header">附加配置</div>
            <div class="mdui-panel-item-body">
              
    
    
             <label class="mdui-switch">
          <input type="checkbox" id="hpp_autodate"/>
          <i class="mdui-switch-icon"></i>	自动签到功能
        </label>
    
                
                   
    
    
    
            </div>
          </div>
      
      
        </div>
      </div>
    </div>
  <button class="mdui-btn mdui-btn-raised mdui-center" onclick="upload()" id="bbb">提交配置</button>
  </div>
    <div class="mdui-dialog" id="dialogerr">
      <div class="mdui-dialog-title">出错了！</div>
      <div class="mdui-dialog-content">上传失败！可能是网络原因，请重试</div>
    </div>
    
      <div class="mdui-dialog" id="dialogok">
      <div class="mdui-dialog-title">上传成功！</div>
      <div class="mdui-dialog-content">点击OK进入主面板</div>
    <div class="mdui-dialog-actions">
        <button class="mdui-btn mdui-ripple" onclick="window.location.reload()">OK</button>
      </div>
    </div>
  <script src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"></script>
  
  <script>
  document.getElementById('hpp_img').checked = ${config["hpp_img"]}
  document.getElementById('hpp_githubpage').checked = ${config["hpp_githubpage"]}
  document.getElementById('hpp_twikoo').checked = ${config["hpp_twikoo"]}
  document.getElementById('hpp_autodate').checked = ${config["hpp_autodate"]}
  document.getElementById('hpp_yuque').checked = ${config["hpp_yuque"]}
  </script>
  <script src="${CDN}install.js"></script>
  </body>
  </html>`*/

}

/* harmony default export */ const worker = ((/* unused pure expression or super */ null && (installpage)));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[244]();
/******/ 	
/******/ })()
;