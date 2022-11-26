const live2d_path="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";function loadExternalResource(e,o){return new Promise(((n,t)=>{let i;"css"===o?(i=document.createElement("link"),i.rel="stylesheet",i.href=e):"js"===o&&(i=document.createElement("script"),i.src=e),i&&(i.onload=()=>n(e),i.onerror=()=>t(e),document.head.appendChild(i))}))}screen.width>=768&&Promise.all([loadExternalResource(live2d_path+"waifu.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.js","js")]).then((()=>{initWidget({waifuPath:"https://zhangshuqiao.org/lib/waifu-tips.json",apiPath:"https://api.zsq.im/live2d",tools:["switch-model"]}),console.log(loadWidget.loadModel)})),console.log("\n  く__,.ヘヽ.        /  ,ー､ 〉\n           ＼ ', !-─‐-i  /  /´\n           ／｀ｰ'       L/／｀ヽ､\n         /   ／,   /|   ,   ,       ',\n       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i\n        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |\n          !,/7 '0'     ´0iソ|    |\n          |.从\"    _     ,,,, / |./    |\n          ﾚ'| i＞.､,,__  _,.イ /   .i   |\n            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |\n              | |/i 〈|/   i  ,.ﾍ |  i  |\n             .|/ /  ｉ：    ﾍ!    ＼  |\n              kヽ>､ﾊ    _,.ﾍ､    /､!\n              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'\n              ﾚ'ヽL__|___i,___,ンﾚ|ノ\n                  ﾄ-,/  |___./\n                  'ｰ'    !_,.:\n"),window.addEventListener("load",(()=>{console.log(`页面加载完毕消耗了${Math.round(100*performance.now())/100}ms`),document.querySelector("#waifu-tool .fa-user-circle").innerHTML='<i class="iconfont ify-self-nvshi" style="cursor: pointer; color:#0684bd;font-size: 22px;font-weight: 700;"></i>',document.querySelector("#waifu-tool .fa-camera-retro").innerHTML='<i class="iconfont ify-self-zhaoxiangji" style="cursor: pointer; color:#0684bd;font-size: 21px;font-weight: 700;"></i>',document.querySelector("#waifu-tool .fa-street-view").innerHTML='<i class="iconfont ify-self-clothes" style="cursor: pointer; color:#0684bd;font-size: 21px;font-weight: 700;"></i>',document.querySelector("#waifu-tool .fa-times").innerHTML='<i class="iconfont ify-self-guanbi" style="cursor: pointer; color:#0684bd;font-size: 19px;font-weight: 700;"></i>'}));