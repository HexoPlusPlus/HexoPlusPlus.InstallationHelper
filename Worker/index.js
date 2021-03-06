import gethtml from './src/js/gethtml'

import sponsor from './../sponsor'
import gres from './src/js/gres'
import yaml from 'js-yaml'


import pack from '../package.json'

let hinfo = {
  ver: pack.version,
  CDN: pack.CDN,
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
  const h = gethtml(hinfo)
  switch (sq('step')) {
    //Step获取当前进度返回html 
    //Start
    case 'check':
      return gres({
        type: 'html',
        ctx: h.check()
      })

    case 'dispatch':
      return gres({
        type: 'html',
        ctx: h.dispatch()
      })

    case 'start':
      return gres({
        type: 'html',
        ctx: h.start()
      })
    case 'howto':
      return gres({
        type: 'html',
        ctx: h.howto()
      })
    case 'cf':
      return gres({
        type: 'html',
        ctx: h.cf()
      })

    case 'zero':
      return gres({
        type: 'html',
        ctx: h.zero()
      })

    case 'player':
      return gres({
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

          return gres({
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

          return gres({
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

          return gres({
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
            const nconfig = yaml.load(await (await fetch(nrepocontent[res.config].download_url, {
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



          return gres({
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
          return gres({
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
              for (var i in sponsor["star"]) {
                await fetch(`https://api.github.com/user/starred/${sponsor["star"][i]}`, {
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


          return gres({
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
          return gres({
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
          return gres({
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

          return gres({
            type: 'json',
            ctx: res
          })



        default:
          return gres({
            ctx: "ERROR"
          })
      }

    default:
      return gres({
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

export default installpage