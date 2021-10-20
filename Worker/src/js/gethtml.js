

import html_install_hello from 'html-loader!../html/hello.html'
import html_install_index from 'html-loader!../html/index.html'

import html_install_check from 'html-loader!../html/src/check.html'
import html_install_cf from 'html-loader!../html/src/cf.html'
import html_install_player from 'html-loader!../html/src/player.html'

import html_install_start from 'html-loader!../html/src/start.html'
import html_install_dispatch from 'html-loader!../html/src/dispatch.html'

import html_install_zero from 'html-loader!../html/src/zero.html'


const gethtml = (hinfo) => {
  String.prototype.preout = function () {
    

    return this
      .replace(/::CDN::/g, hinfo.CDN)
      .replace(/::VER::/g, hinfo.ver)
  }
  return {


    hello: () => {
      return html_install_hello
    }
    ,
    check: () => {
      return html_install_index
        .replace(/::BODY::/g, html_install_check)
        .preout()
    }
    ,
    cf: () => {
      return html_install_index
        .replace(/::BODY::/g, html_install_cf)
        .preout()
    }

    ,
    player: () => {
      return html_install_index
        .replace(/::BODY::/g, html_install_player)
        .preout()
    }
    ,

    start: () => {
      return html_install_index
        .replace(/::BODY::/g, html_install_start)
        .preout()
    },
    zero: () => {
      return html_install_index
        .replace(/::BODY::/g, html_install_zero)
        .preout()
    },
    zero: () => {
      return html_install_index
        .replace(/::BODY::/g, html_install_zero)
        .preout()
    },
    dispatch: () => {
      return html_install_index
        .replace(/::BODY::/g, html_install_dispatch)
        .preout()
    }

  }
}

export default gethtml
