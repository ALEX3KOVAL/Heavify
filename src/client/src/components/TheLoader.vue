<template>
  <transition
    name="fade"
    mode="out-in">
    <div
      class="loader"
    >
      <div
        id="js-logo"
        class="logo"
      >
      </div>
    </div>
  </transition>
</template>

<script>
import mojs from "@mojs/core";
import Parallax from "parallax-js";

export default {
  name: "loader",
  async mounted() {
    const COLORS = {
      white:   '#ffffff',
      black:   '#000000',
      green:   '#49F2CC',
      lightGrey: '#777',
      grey:    '#29363B',
      cyan:    'cyan',
      yellow:  '#FFE202',
      hotpink: 'deeppink',
    };
// ADD CUSTOM SHAPES
    class H extends mojs.CustomShape {
      getShape () {
        return '<path d="M 9 75.2 L 0 75.2 L 0 1.2 L 9 1.2 L 9 31.5 Q 11.8 27.4 16.1 24.7 A 17.572 17.572 0 0 1 23.225 22.191 A 22.595 22.595 0 0 1 26.2 22 A 23.225 23.225 0 0 1 31.265 22.518 Q 36.359 23.656 39.35 27.3 Q 43.475 32.326 43.688 40.409 A 33.764 33.764 0 0 1 43.7 41.3 L 43.7 75.2 L 34.7 75.2 L 34.7 42.3 Q 34.7 36.7 32.1 33.3 A 8.42 8.42 0 0 0 25.942 29.953 A 11.979 11.979 0 0 0 24.8 29.9 A 13.23 13.23 0 0 0 18.087 31.767 A 17.586 17.586 0 0 0 16.05 33.15 Q 11.9 36.4 9 40.8 L 9 75.2 Z"></path>';
      }
    }
    mojs.addShape('h', H);

    class A extends mojs.CustomShape {
      getShape () {
        return '<path d="M 39.2 27.4 L 39.2 23.2 L 47.4 23.2 L 47.4 62.6 A 12.15 12.15 0 0 0 47.502 64.236 Q 47.834 66.67 49.25 67.55 Q 51.1 68.7 53.3 68.7 L 51.4 75.7 A 17.722 17.722 0 0 1 47.135 75.228 Q 41.498 73.828 39.903 68.28 A 13.59 13.59 0 0 1 39.8 67.9 A 21.307 21.307 0 0 1 36.69 71.326 A 28.498 28.498 0 0 1 33.55 73.75 Q 29.6 76.4 23.5 76.4 Q 17 76.4 11.7 73.1 A 22.947 22.947 0 0 1 4.287 65.574 A 27.923 27.923 0 0 1 3.25 63.75 A 27.228 27.228 0 0 1 0.62 55.808 A 36.644 36.644 0 0 1 0.1 49.5 A 33.142 33.142 0 0 1 1.097 41.231 A 27.968 27.968 0 0 1 3.25 35.5 Q 6.4 29.3 11.95 25.65 A 22.297 22.297 0 0 1 23.145 22.044 A 27.388 27.388 0 0 1 24.7 22 A 22.584 22.584 0 0 1 29.494 22.491 A 18.703 18.703 0 0 1 32.85 23.55 A 26.002 26.002 0 0 1 37.137 25.844 A 22.103 22.103 0 0 1 39.2 27.4 Z M 38.4 61.9 L 38.4 34 Q 35.7 32.1 32.45 30.95 Q 29.2 29.8 25.6 29.8 A 15.924 15.924 0 0 0 20.629 30.554 A 14.024 14.024 0 0 0 17.15 32.25 A 16.301 16.301 0 0 0 12.131 37.674 A 19.962 19.962 0 0 0 11.4 39.05 A 20.663 20.663 0 0 0 9.647 44.727 A 27.678 27.678 0 0 0 9.3 49.2 Q 9.3 54.8 11.4 59.15 A 17.602 17.602 0 0 0 14.506 63.696 A 15.697 15.697 0 0 0 17.2 65.95 Q 20.9 68.4 25.5 68.4 Q 29.3 68.4 32.7 66.55 Q 36.1 64.7 38.4 61.9 Z"></path>';
      }
    }
    mojs.addShape('a', A);

    class V extends mojs.CustomShape {
      getShape () {
        return '<path d="M 31.6 75.2 L 22.2 75.2 L 1.3 25.6 L 9.5 22.2 L 27.2 65 L 44.9 22.2 L 52.6 25.6 L 31.6 75.2 Z"></path>';
      }
    }
    mojs.addShape('v', V);

    class I extends mojs.CustomShape {
      getShape() {
        return '<path d="M 12.6 75.2 L 3.6 75.2 L 3.6 23.2 L 12.6 23.2 L 12.6 75.2 Z M 3.737 12.488 A 5.973 5.973 0 0 0 8.1 14.3 A 8.175 8.175 0 0 0 9.596 14.169 A 5.647 5.647 0 0 0 12.7 12.55 Q 14.4 10.8 14.4 8 A 7.26 7.26 0 0 0 14.4 7.919 A 6.06 6.06 0 0 0 12.55 3.55 A 7.395 7.395 0 0 0 12.492 3.493 A 6.059 6.059 0 0 0 8.1 1.7 A 8.264 8.264 0 0 0 6.444 1.858 A 5.661 5.661 0 0 0 3.5 3.4 A 5.588 5.588 0 0 0 2.029 6.032 A 7.987 7.987 0 0 0 1.8 8 A 5.992 5.992 0 0 0 2.292 10.419 A 6.643 6.643 0 0 0 3.65 12.4 A 7.466 7.466 0 0 0 3.737 12.488 Z"></path>'
      }
    }

    mojs.addShape('i', I);

    class E extends mojs.CustomShape {
      getShape () {
        return '<path d="M 36.3 52.9 L 9.9 52.9 A 24.088 24.088 0 0 0 11.039 57.925 Q 12.375 61.738 15 64.3 Q 19.2 68.4 26.1 68.4 Q 30.6 68.4 34.2 67.45 Q 37.8 66.5 41.1 65 L 43.2 72.7 A 40.77 40.77 0 0 1 38.865 74.326 A 51.863 51.863 0 0 1 35.1 75.35 A 38.914 38.914 0 0 1 30.008 76.169 A 52.025 52.025 0 0 1 25 76.4 A 28.318 28.318 0 0 1 17.254 75.395 A 21.108 21.108 0 0 1 7.25 69.25 A 23.521 23.521 0 0 1 2.045 59.71 Q 0.7 55.045 0.7 49.2 A 35.359 35.359 0 0 1 1.533 41.378 A 28.84 28.84 0 0 1 3.65 35.25 A 24.642 24.642 0 0 1 8.666 28.168 A 22.887 22.887 0 0 1 11.9 25.55 A 21.048 21.048 0 0 1 22.159 22.078 A 26.205 26.205 0 0 1 24.2 22 Q 31.7 22 36.65 25.25 Q 41.6 28.5 44.1 34 A 28.185 28.185 0 0 1 46.526 43.864 A 33.434 33.434 0 0 1 46.6 46.1 A 75.204 75.204 0 0 1 46.309 52.797 A 69.426 69.426 0 0 1 46.3 52.9 Z M 9.8 45.6 L 38.3 45.6 A 24.355 24.355 0 0 0 37.896 41.015 Q 37.4 38.431 36.296 36.407 A 12.422 12.422 0 0 0 34.5 33.9 A 12.488 12.488 0 0 0 27.539 30.124 A 18.395 18.395 0 0 0 24 29.8 A 13.58 13.58 0 0 0 18.888 30.735 A 12.524 12.524 0 0 0 14.4 33.85 Q 10.6 37.9 9.8 45.6 Z"></path>';
      }
    }
    mojs.addShape('e', E);

    class F extends mojs.CustomShape {
      getShape() {
        return '<path d="M 19.6 75.2 L 10.6 75.2 L 10.6 32.9 L 2.6 32.9 L 2.6 25.1 L 10.6 25.1 L 10.6 19 A 25.495 25.495 0 0 1 11.226 13.182 Q 12.334 8.452 15.402 5.203 A 16.387 16.387 0 0 1 15.5 5.1 A 16.367 16.367 0 0 1 25.904 0.125 A 22.463 22.463 0 0 1 28.3 0 A 29.982 29.982 0 0 1 31.81 0.195 Q 33.555 0.401 35.071 0.825 A 17.884 17.884 0 0 1 35.5 0.95 Q 38.6 1.9 41.4 3.3 L 38.7 10.9 Q 36.6 9.8 34.2 8.9 A 14.172 14.172 0 0 0 30.578 8.079 A 17.356 17.356 0 0 0 28.9 8 A 10.802 10.802 0 0 0 25.871 8.405 A 8.291 8.291 0 0 0 22.15 10.65 A 8.462 8.462 0 0 0 20.203 14.019 Q 19.6 15.92 19.6 18.4 L 19.6 25.1 L 35 25.1 L 35 32.9 L 19.6 32.9 L 19.6 75.2 Z"></path>'
      }
    }
    mojs.addShape('f', F);

    class Y extends mojs.CustomShape {
      getShape() {
        return '<path d="M 2.9 96.4 L 4.9 88.9 A 9.908 9.908 0 0 0 6.065 89.474 Q 6.888 89.819 7.9 90.1 A 13.514 13.514 0 0 0 10.179 90.518 A 17.358 17.358 0 0 0 11.9 90.6 Q 16.1 90.6 19.4 87.9 A 12.003 12.003 0 0 0 21.333 85.839 Q 23.081 83.528 24.741 79.675 A 58.58 58.58 0 0 0 25.7 77.3 L 28 71.3 L 23.2 71.3 L 2.9 25.6 L 10.9 22 L 30.3 65.3 L 45.4 22.4 L 53.7 25.6 L 34.6 77.8 A 71.728 71.728 0 0 1 32.547 82.887 Q 31.445 85.326 30.278 87.314 A 30.86 30.86 0 0 1 28.3 90.3 A 24.268 24.268 0 0 1 25.422 93.511 Q 23.508 95.279 21.405 96.318 A 14.737 14.737 0 0 1 20.8 96.6 Q 16.7 98.4 11.7 98.4 Q 8.7 98.4 6.45 97.8 Q 4.2 97.2 2.9 96.4 Z"></path>'
      }
    }
    mojs.addShape('y', Y);

// VARIABLES
    const {approximate} = mojs.easing,
        shiftCurve = approximate(mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' )),
        scaleCurve = approximate(mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' )),
        charSize = 20,
        leftStep = 18,
        logo = document.getElementById('js-logo');

    console.log(logo);

    const CHAR_OPTS = {
      parent:       logo,
      isForce3d:    true,
      fill:         'white',
      radius:       charSize/2,
      stroke:       'white',
      strokeWidth:  2
    }

    const CHAR_HIDE_THEN = {
      delay: 930,
      isShowEnd: false
    }

// HELPERS
    const scale = function (curve, n) {
      return (p) => { return n*curve(p); }
    }
    const increase = function (curve, n) {
      return (p) => { return n + curve(p); }
    }

// CURVES
    const scaleC = approximate( increase( scaleCurve, 1 ) ),
        scaledCurve = ( amount ) => {
          return increase( scale( scaleCurve, amount ), 1 );
        },
        scaleCShort = approximate( scaledCurve(.75) );


// SHAPES
    const hCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:    'h',
      className: "letter",
      left:     2. * leftStep + '%',
      x:        0,
      y:        { [350] : 150, easing: shiftCurve },
      scaleY:   { 1 : 1, curve: scaleCShort },
      origin:   { '50% 100%' : '50% 0%', easing: shiftCurve },
      delay:    232,
      duration: 680,
      isShowStart: true
    }).then({
      delay:   115,
      y:       { to: 0, easing: shiftCurve },
      scaleY:  { 1: 1, curve: approximate( scaledCurve(.5) ) },
      origin: { '50% 100%' : '50% 0%', easing: shiftCurve }
    });

    const eCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:        'e',
      className: "letter",
      left:         2.2*leftStep + '%',
      delay:        350,
      duration:     465,
      strokeWidth:  2,
      x:            100,
      y:            { [-100] : 250, easing: shiftCurve },
      scaleY:       { 1: 1, curve: scaleC },
      origin:       { '50% 0%' : '50% 100%', easing: shiftCurve }
    }).then({
      duration:     407,
      x:            { to: 0, easing: shiftCurve },
      scaleX:       { 1: 1, curve: scaleCShort },
      origin:       { '100% 50%' : '0% 50%', easing: shiftCurve }
    }).then({
      duration:     700,
      y:            { to: 0, easing: shiftCurve },
      scaleY:       { 1: 1, curve: scaleCShort },
      origin:       { '50% 100%' : '50% 0%', easing: shiftCurve }
    })
    //.then(CHAR_HIDE_THEN);

    const aCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'a',
      className: "letter",
      left:       2.4*leftStep + '%',
      delay:      40,
      duration:   580,
      x:         -200,
      y:          { [250] : -100, easing: shiftCurve },
      scaleY:     { 1: 1, curve: scaleC },
      origin:     { '50% 100%' : '50% 0%', easing: shiftCurve }
    })
        .then({
          duration:   523,
          x:          { to: 0, easing: shiftCurve },
          scaleX:     { 1: 1, curve: scaleCShort },
          origin:     { '0% 50%' : '100% 50%', easing: shiftCurve }
        })
        .then({
          y:          { to: 0, easing: shiftCurve },
          // x:          { to: charSize, easing: shiftCurve },
          scaleY:     { 1: 1, curve:  approximate( scaledCurve(.5) ) },
          origin:     { '50% 0%' : '50% 100%', easing: shiftCurve }
        })
    //.then(CHAR_HIDE_THEN);

    const vCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'v',
      className: "letter",
      left:       2.6*leftStep + '%',
      delay:      116,
      duration:   523,
      x:          { 500: 0, easing: shiftCurve },
      y:          200,
      scaleX:     { 1: 1, curve: scaleC },
      origin:     { '100% 50%' : '0% 100%', easing: shiftCurve }
    })
        .then({
          delay:      116,
          y:          { to: 0, easing: shiftCurve },
          scaleY:     { 1: 1, curve: scaleCShort },
          origin:     { '50% 100%' : '50% 0%', easing: shiftCurve }
        })
    //.then({ ...CHAR_HIDE_THEN, delay: 1280 });

    const iCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'i',
      className: "letter",
      left:       2.8*leftStep + '%',
      delay:      136,
      duration:   723,
      x:          { 500: 0, easing: shiftCurve },
      y:          200,
      scaleX:     { 1: 1, curve: scaleC },
      origin:     { '100% 50%' : '0% 100%', easing: shiftCurve }
    }).then({
      delay:   115,
      y:       { to: 0, easing: shiftCurve },
      scaleY:  { 1: 1, curve: approximate( scaledCurve(.5) ) },
      origin: { '50% 100%' : '100% 40%', easing: shiftCurve }
    })
    //.then(CHAR_HIDE_THEN);

    const fCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'f',
      left:       3*leftStep + '%',
      className: "letter",
      delay:      96,
      duration:   823,
      x:          { 500: 0, easing: shiftCurve },
      y:          200,
      scaleX:     { 1: 1, curve: scaleC },
      origin:     { '100% 50%' : '0% 100%', easing: shiftCurve }
    }).then({
      delay:   105,
      y:       { to: 0, easing: shiftCurve },
      scaleY:  { 1: 1, curve: approximate( scaledCurve(.5) ) },
      origin: { '20% 70%' : '80% 10%', easing: shiftCurve }
    })
    //.then(CHAR_HIDE_THEN);

    const yCharacter = new mojs.Shape({
      ...CHAR_OPTS,
      shape:      'y',
      left:       3.2*leftStep + '%',
      delay:      216,
      className: "letter",
      duration:   723,
      x:          {600: 0, easing: shiftCurve },
      y:          -100,
      scaleX:     { 1: 1, curve: scaleC },
      origin:     { '100% 50%' : '0% 100%', easing: shiftCurve }
    }).then({
      delay:   105,
      y:       { to: 0, easing: shiftCurve },
      scaleY:  { 1: 1, curve: approximate( scaledCurve(.5) ) },
      origin: { '100% 70%' : '70% 100%', easing: shiftCurve }
    })
    //.then(CHAR_HIDE_THEN);

// LINES

    let LINE_OPTS = {
      shape:        'line',
      strokeWidth:  { 10: 0 },
      stroke:       COLORS.cyan,
      radius:       44,
      parent:       logo,
      angle:        90,
      duration:     465,
      delay:        495,
      radiusY:      0,
      strokeDasharray: '100% 100%',
      strokeDashoffset: { '100%': '-100%' },
    };

    let line1 = new mojs.Shape({
      ...LINE_OPTS,
      x:  189,
      y:  { [-20] : 160 },
      className: "letter"
    });

    let line2 = new mojs.Shape({
      ...LINE_OPTS,
      x: -175,
      y: { 200 : -20 },
      stroke: COLORS.hotpink,
      strokeDashoffset: { '-100%' : '100%' },
      delay: 290,
      className: "letter"
    });

    let line3 = new mojs.Shape({
      ...LINE_OPTS,
      radius: 53,
      y: 30,
      stroke: COLORS.yellow,
      strokeDashoffset: { '-100%': '100%' },
      delay: 804,
      angle: 0,
      className: "letter"
    });

    let StaggerShape = new mojs.stagger( mojs.Shape );

    let underlines = new StaggerShape({
      ...LINE_OPTS,
      radius: 53,
      angle:  0,
      radiusY: 0,
      y: 30,
      strokeWidth: 2,
      stroke: [ COLORS.hotpink, COLORS.yellow, COLORS.cyan, COLORS.white ],
      duration: 581,
      delay: 'stagger(1686, 145)',
      strokeDasharray: null,
      strokeDashoffset: null,
      scaleX: { 0: 1 },
      origin: '0 50%',
      quantifier: 'stroke',
      easing: 'expo.out',
      x: 1,
      isForce3d: true
    });

// SHAPES
    let shapes = new StaggerShape({
      parent:       logo,
      left:         '100%',
      x:            [ -20, 10, 0 ],
      y:            [ -25, -5, -35 ],
      quantifier:   'shape',
      shape:        [ 'circle', 'polygon', 'rect' ],
      radius:       7,
      fill:         'none',
      stroke:       [ 'deeppink', COLORS.cyan, COLORS.yellow ],
      strokeWidth:  { 5 : 0 },
      scale:        { .75 : 1 },
      delay:        'stagger(1860, 58)',
      isTimelineLess: true
    });

// LOGO SHIFT
    let yShift = 0;
    const getYShift = () => {
      const w = window;
      const height = w.innerHeight || e.clientHeight || g.clientHeight;
      yShift = height/1.5;
    }

    getYShift();
    window.addEventListener('resize', getYShift);

    let logoShift = new mojs.Tween({
      duration: 349,
      delay:    1790,
      onUpdate: ((p) => {
        let shiftP = mojs.easing.cubic.in( p );
        let scaleP = mojs.easing.quad.in( p );
        if (document.readyState === "complete") {
          mojs.h.setPrefixedStyle(logo, "transform",
              `translate(2vw, ${ yShift*shiftP }px)
        scaleY(${ 1 + 25*scaleP })`
          );
          var scene = document.getElementById("scrolling-techniques-2");
          //@ts-ignore
          scene.setAttribute("style", "overflow: hidden;");
          //@ts-ignore
          var parallaxInstance = new Parallax(scene);
          parallaxInstance.friction(0.45, 0.2);
          parallaxInstance.invert();
        }
      }).bind(this),
    });

    const timeline = new mojs.Timeline({
      onStart () {
        mojs.h.setPrefixedStyle( logo, 'transform', 'none' );
      }
    });
    timeline
        .add(
            hCharacter,
            eCharacter,
            aCharacter,
            vCharacter,
            iCharacter,
            fCharacter,
            yCharacter,
            logoShift
            //underlines,
            //line1,
            //line2,
            //line3
        )
        .play();
  }
}
</script>

<style scoped>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow: hidden;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height:       2vh;
    width:        100vw;
    z-index:      2;
    margin-left: -60px !important;
  }
</style>
