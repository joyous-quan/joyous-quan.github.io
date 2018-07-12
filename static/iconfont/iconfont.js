(function(window){var svgSprite='<svg><symbol id="icon-msnui-triangle-down" viewBox="0 0 1024 1024"><path d="M895.482 257.991q24.472 0 40.275 11.216t20.392 29.059-2.039 40.784-27.020 46.392q-84.627 97.882-159.059 180.471t-147.843 163.137q-18.353 20.392-44.353 31.098t-53.529 11.216-53.020-8.667-43.843-28.549q-40.785-41.804-84.118-87.176t-86.157-91.255-84.627-91.255-79.529-87.176q-17.333-19.373-22.431-40.275t0.51-38.745 20.902-28.549 39.765-10.706h240.627q76.471 0 159.059-0.51t154.98-0.51h211.059z"  ></path></symbol><symbol id="icon-dibiaotianchong" viewBox="0 0 1024 1024"><path d="M838.42048 354.6112c0-180.849664-146.847744-327.704576-327.354368-327.752704l0-0.001024c-0.01024 0-0.021504 0-0.031744 0-0.009216 0-0.018432 0-0.028672 0-0.009216 0-0.018432 0-0.028672 0-0.01024 0-0.021504 0-0.031744 0l0 0.001024C330.437632 26.906624 183.589888 173.761536 183.589888 354.6112c14.953472 336.166912 320.779264 631.862272 327.354368 638.1824l0 0.115712c0 0 0.02048-0.02048 0.060416-0.057344 0.038912 0.037888 0.060416 0.057344 0.060416 0.057344l0-0.115712C517.641216 986.473472 823.465984 690.778112 838.42048 354.6112zM370.556928 350.181376c0-77.724672 62.815232-140.786688 140.448768-141.19424 77.633536 0.407552 140.448768 63.468544 140.448768 141.19424 0 77.737984-62.815232 140.786688-140.448768 141.19424C433.37216 490.968064 370.556928 427.91936 370.556928 350.181376z"  ></path></symbol><symbol id="icon-xiangxiazhankai" viewBox="0 0 1024 1024"><path d="M512.064 409.344 166.72 64 78.72 152 512.064 585.344 945.28 152 857.28 64Z"  ></path><path d="M512.064 783.872 166.72 438.656 78.72 526.656 512.064 960 945.28 526.656 857.28 438.72Z"  ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M225.854934 210.432687l-93.071745 0c-2.49789 0-4.523013 2.025123-4.523013 4.523013l0 93.071745c0 2.49789 2.025123 4.523013 4.523013 4.523013l93.071745 0c2.49789 0 4.523013-2.025123 4.523013-4.523013l0-93.071745C230.377948 212.45781 228.352825 210.432687 225.854934 210.432687z"  ></path><path d="M868.248703 210.432687 302.545594 210.432687c-15.182794 0-27.491121 2.025123-27.491121 4.523013l0 93.071745c0 2.49789 12.308327 4.523013 27.491121 4.523013L868.248703 312.550459c15.182794 0 27.491121-2.025123 27.491121-4.523013l0-93.071745C895.739824 212.45781 883.431497 210.432687 868.248703 210.432687z"  ></path><path d="M225.854934 461.738269l-93.071745 0c-2.49789 0-4.523013 2.025123-4.523013 4.523013l0 93.071745c0 2.49789 2.025123 4.523013 4.523013 4.523013l93.071745 0c2.49789 0 4.523013-2.025123 4.523013-4.523013l0-93.071745C230.377948 463.763392 228.352825 461.738269 225.854934 461.738269z"  ></path><path d="M868.248703 461.738269 302.545594 461.738269c-15.182794 0-27.491121 2.025123-27.491121 4.523013l0 93.071745c0 2.49789 12.308327 4.523013 27.491121 4.523013L868.248703 563.856042c15.182794 0 27.491121-2.025123 27.491121-4.523013l0-93.071745C895.739824 463.763392 883.431497 461.738269 868.248703 461.738269z"  ></path><path d="M225.854934 711.448518l-93.071745 0c-2.49789 0-4.523013 2.025123-4.523013 4.523013l0 93.071745c0 2.49789 2.025123 4.523013 4.523013 4.523013l93.071745 0c2.49789 0 4.523013-2.025123 4.523013-4.523013l0-93.071745C230.377948 713.473641 228.352825 711.448518 225.854934 711.448518z"  ></path><path d="M868.248703 711.448518 302.545594 711.448518c-15.182794 0-27.491121 2.025123-27.491121 4.523013l0 93.071745c0 2.49789 12.308327 4.523013 27.491121 4.523013L868.248703 813.56629c15.182794 0 27.491121-2.025123 27.491121-4.523013l0-93.071745C895.739824 713.473641 883.431497 711.448518 868.248703 711.448518z"  ></path></symbol><symbol id="icon-menu-down-outline" viewBox="0 0 1024 1024"><path d="M768 384v64l-256 256-256-256V384h512m-256 199.253333L625.92 469.333333H398.08L512 583.253333z" fill="" ></path></symbol><symbol id="icon-youjiantou" viewBox="0 0 1024 1024"><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z"  ></path></symbol><symbol id="icon-collection_fill" viewBox="0 0 1024 1024"><path d="M877.632 456.8c14.976-14.72 20.384-32.96 14.816-49.984-5.536-17.024-20.608-28.544-41.344-31.584l-190.24-27.84c-6.976-1.024-18.464-9.472-21.6-15.904l-85.12-173.696c-9.28-18.944-24.896-29.76-42.88-29.76-17.952 0-33.6 10.816-42.816 29.76l-85.12 173.696c-3.104 6.432-14.592 14.848-21.6 15.904l-190.24 27.84c-20.704 3.04-35.776 14.56-41.344 31.584-5.568 17.024-0.16 35.232 14.816 49.984l137.696 135.232c5.088 4.992 9.536 18.816 8.32 25.92l-32.48 190.912c-3.552 20.832 2.752 38.816 17.344 49.344 7.52 5.44 16.224 8.16 25.472 8.16 8.576 0 17.6-2.336 26.56-7.04l170.176-90.176c6.048-3.2 20.448-3.2 26.528 0l170.144 90.112c18.528 9.856 37.504 9.44 52.064-1.056 14.56-10.528 20.864-28.48 17.344-49.28l-32.48-190.976c-1.28-7.104 3.2-20.928 8.32-25.92l137.664-135.232z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)