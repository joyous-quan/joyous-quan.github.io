/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */
/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 90,// 粒子的数量
        "density": { //粒子的稀密程度
          "enable": true, //启用粒子的稀密程度
          "value_area": 1000 //每一个粒子占据的空间
        }
      },
      "color": {
        "value": "#ffffff" // 粒子的颜色
      },
      "shape": {
        "type": "circle",//粒子的形状 （"circle" "edge" "triangle" "polygon" "star" "image"）
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 0.8, // 粒子的透明度
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,//是否启用粒子速度
          "speed": 60,//粒子动画频率
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.5,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 4,//粒子移动速度
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {//鼠标移入效果
          "enable": true,
          "mode": "repulse" 
        },
        "onclick": { //鼠标点击效果
          "enable": true,
          "mode": "repulse"//"push", "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "",
      "background_image": "",
      "background_position": "",
      "background_repeat": "",
      "background_size": ""
    }
  }
);