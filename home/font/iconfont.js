(function(window){var svgSprite='<svg><symbol id="icon-zhuyi" viewBox="0 0 1024 1024"><path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0z m0 955.733333C266.24 955.733333 68.266667 757.76 68.266667 512S266.24 68.266667 512 68.266667s443.733333 197.973333 443.733333 443.733333-197.973333 443.733333-443.733333 443.733333z"  ></path><path d="M471.04 733.866667h85.333333V819.2h-85.333333zM467.626667 348.16l20.48 320.853333h47.786666l23.893334-320.853333V215.04h-92.16z"  ></path></symbol><symbol id="icon-caigou" viewBox="0 0 1024 1024"><path d="M768 576c13.6 0 24.8-8.8 29.6-22.4l97.6-318.4c6.4-20.8-8-43.2-29.6-43.2H252.8l-18.4-64L216 64H64v64h104.8l18.4 64 100 361.6c1.6 4.8 4 8.8 7.2 12l-52 83.2c-6.4 5.6-10.4 14.4-10.4 23.2 0 17.6 14.4 32 32 32h568v-64H323.2l40-64H768z"  ></path><path d="M320 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M768 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path></symbol><symbol id="icon-anquanbaozhang" viewBox="0 0 1024 1024"><path d="M512 63.2L160.8 226.4v244.8c0 226.4 149.6 437.6 351.2 489.6 201.6-51.2 351.2-263.2 351.2-489.6V226.4L512 63.2z m-8 574.4l-45.6 45.6-45.6-45.6-90.4-90.4 45.6-45.6L458.4 592l204-204 45.6 45.6L504 637.6z"  ></path></symbol><symbol id="icon-danju-xianxing" viewBox="0 0 1024 1024"><path d="M800 192H640c0-70.4-57.6-128-128-128s-128 57.6-128 128H224c-17.6 0-32 14.4-32 32v704c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V224c0-17.6-14.4-32-32-32z m-288-32c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32z m256 736H256V256h64v64h384v-64h64v640z m-64-384H320v-64h384v64z m0 128H320v-64h384v64zM576 768H320v-64h256v64z"  ></path></symbol><symbol id="icon-sousuo-xianxing" viewBox="0 0 1024 1024"><path d="M384 128c140.8 0 256 115.2 256 256S524.8 640 384 640 128 524.8 128 384s115.2-256 256-256m0-64C207.2 64 64 207.2 64 384s143.2 320 320 320 320-143.2 320-320S560.8 64 384 64z m294.4 569.6l-45.6 45.6 272 272 45.6-45.6-272-272z"  ></path></symbol><symbol id="icon-liaotianduihua" viewBox="0 0 1024 1024"><path d="M510.4 63.2c-212 0-384 172-384 384 0 184.8 131.2 340 305.6 376l80 138.4 80-138.4C764.8 785.6 894.4 632 894.4 448c0-212.8-172-384.8-384-384.8zM319.2 512c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64zM512 512c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m191.2 0c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z"  ></path></symbol><symbol id="icon-xin-xianxing" viewBox="0 0 1024 1024"><path d="M928 192H96c-17.6 0-32 14.4-32 32v576c0 17.6 14.4 32 32 32h832c17.6 0 32-14.4 32-32V224c0-17.6-14.4-32-32-32z m-32 576H128V320l384 192 384-192v448zM512 448L128 256h768L512 448z"  ></path></symbol><symbol id="icon-xin" viewBox="0 0 1024 1024"><path d="M928 192H96c-17.6 0-32 14.4-32 32v576c0 17.6 14.4 32 32 32h832c17.6 0 32-14.4 32-32V224c0-17.6-14.4-32-32-32z m-32 128L512 512 128 320v-64l384 192 384-192v64z"  ></path></symbol><symbol id="icon-shoucang" viewBox="0 0 1024 1024"><path d="M519.2 807.2l255.2 133.6c12 6.4 25.6-4 23.2-16.8L748.8 640c-0.8-4.8 0.8-10.4 4.8-14.4L960 424.8c9.6-9.6 4-25.6-8.8-27.2l-284.8-41.6c-5.6-0.8-9.6-4-12-8.8l-128-257.6c-5.6-12-23.2-12-28.8 0L370.4 348c-2.4 4.8-7.2 8-12 8.8L73.6 398.4c-13.6 1.6-18.4 17.6-8.8 27.2l206.4 200.8c4 4 5.6 8.8 4.8 14.4l-48.8 284c-2.4 12.8 11.2 23.2 23.2 16.8L505.6 808c4-3.2 8.8-3.2 13.6-0.8z"  ></path></symbol><symbol id="icon-xihuan-xianxing" viewBox="0 0 1024 1024"><path d="M700 192c92.8 0 166.4 72.8 166.4 166.4 0 129.6-133.6 251.2-336.8 435.2l-17.6 16-17.6-16C291.2 609.6 157.6 488 157.6 358.4c0-92.8 72.8-166.4 166.4-166.4 52.8 0 104.8 24 140 64.8l48.8 56.8 48.8-56.8c33.6-40 86.4-64.8 138.4-64.8m0-64c-72.8 0-142.4 33.6-188 87.2C466.4 162.4 396.8 128 324 128c-128.8 0-230.4 100.8-230.4 230.4 0 157.6 142.4 287.2 357.6 482.4L512 896l60.8-55.2c215.2-196 357.6-324.8 357.6-482.4 0-128.8-100.8-230.4-230.4-230.4z"  ></path></symbol><symbol id="icon-shoucang-xianxing" viewBox="0 0 1024 1024"><path d="M512 205.6L596 376c12 24 34.4 40 60 44l188.8 27.2-136 133.6c-19.2 18.4-27.2 44.8-23.2 71.2l32 188-168-89.6c-11.2-6.4-24-8.8-37.6-8.8-12.8 0-25.6 3.2-37.6 8.8l-168.8 88.8 32-188c4.8-25.6-4-52.8-23.2-71.2l-136-132.8 188.8-27.2C393.6 416 416 400 428 376L512 205.6m0-124.8c-5.6 0-11.2 3.2-14.4 8.8L370.4 348c-2.4 4.8-7.2 8-12 8.8L73.6 398.4c-13.6 1.6-18.4 17.6-8.8 27.2l206.4 200.8c4 4 5.6 8.8 4.8 14.4l-48.8 284c-1.6 10.4 6.4 18.4 16 18.4 2.4 0 4.8-0.8 7.2-1.6L505.6 808c2.4-1.6 4.8-1.6 7.2-1.6s4.8 0.8 7.2 1.6l255.2 133.6c2.4 1.6 4.8 1.6 7.2 1.6 9.6 0 17.6-8 16-18.4l-48.8-284c-0.8-4.8 0.8-10.4 4.8-14.4l206.4-200.8c9.6-9.6 4-25.6-8.8-27.2l-284.8-41.6c-5.6-0.8-9.6-4-12-8.8L526.4 89.6c-3.2-5.6-8.8-8.8-14.4-8.8z"  ></path></symbol><symbol id="icon-xihuan" viewBox="0 0 1024 1024"><path d="M512 896l-60.8-55.2C236 645.6 93.6 516 93.6 358.4 93.6 229.6 194.4 128 324 128c72.8 0 142.4 33.6 188 87.2C557.6 162.4 627.2 128 700 128c128.8 0 230.4 100.8 230.4 230.4 0 157.6-142.4 287.2-357.6 482.4L512 896z"  ></path></symbol><symbol id="icon-yonghu" viewBox="0 0 1024 1024"><path d="M500 128.8c-95.2 5.6-173.6 83.2-180 178.4-7.2 112 80.8 205.6 191.2 205.6 106.4 0 192-86.4 192-192 0.8-110.4-92-198.4-203.2-192zM512 575.2c-128 0-383.2 64-383.2 192v96c0 17.6 14.4 32 32 32h702.4c17.6 0 32-14.4 32-32V766.4c0-127.2-255.2-191.2-383.2-191.2z"  ></path></symbol><symbol id="icon-paizhao" viewBox="0 0 1024 1024"><path d="M640 576c0 70.4-57.6 128-128 128s-128-57.6-128-128 57.6-128 128-128 128 57.6 128 128z m320-224v480c0 35.2-28.8 64-64 64H128c-35.2 0-64-28.8-64-64V352c0-35.2 28.8-64 64-64h167.2L376 192h256l80.8 96H896c35.2 0 64 28.8 64 64zM704 576c0-106.4-85.6-192-192-192S320 469.6 320 576s85.6 192 192 192 192-85.6 192-192z"  ></path></symbol><symbol id="icon-liebiaoshitucaidan" viewBox="0 0 1024 1024"><path d="M896 256H128V128h768v128z m0 192H128v128h768V448z m0 320H128v128h768V768z"  ></path></symbol><symbol id="icon-Phoneshouji" viewBox="0 0 1024 1024"><path d="M704 128v768H320V128h384m0-64H320c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64zM272 192v64h480v-64H272z m0 576h480v-64H272v64z m176 96h128v-64H448v64z"  ></path></symbol><symbol id="icon-jia" viewBox="0 0 1024 1024"><path d="M896 480H544.8V128h-65.6v352H128v66.4h351.2V896h65.6V546.4H896z"  ></path></symbol><symbol id="icon-zhengquewancheng-yuankuang" viewBox="0 0 1024 1024"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64zM428 718.4l-45.6 45.6-45.6-45.6-116-117.6 45.6-45.6L383.2 672l367.2-367.2 45.6 45.6-368 368z"  ></path></symbol><symbol id="icon-shangyiyehoutuifanhui" viewBox="0 0 1024 1024"><path d="M319.64 512.016l336.016-336.008 45.248 45.248L364.896 557.28z"  ></path><path d="M365.216 466.464l339.976 339.968-45.256 45.256-339.976-339.976z"  ></path></symbol><symbol id="icon-xiayiyeqianjinchakangengduo" viewBox="0 0 1024 1024"><path d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008z"  ></path><path d="M704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z"  ></path></symbol><symbol id="icon-xiangshangshouqi" viewBox="0 0 1024 1024"><path d="M852 660L557.6 365.6 512 320l-45.6 45.6L176 656l45.6 44.8L512 410.4l294.4 294.4z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)