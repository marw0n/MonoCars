function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const {
  TransitionGroup,
  CSSTransition
} = ReactTransitionGroup;

/* Slides data
-------------------------------------------------------------- */

const
  floorImg = 'https://i.imgur.com/gj4AbSS.png',
  defualtcarImg = 'https://i.imgur.com/wAgJX0S.png',
  l1 = 'https://i.imgur.com/8apULAz.png';
l2 = 'https://i.imgur.com/VlnOGVL.png';
l4 = 'https://i.imgur.com/nvXYY4Q.png';
l5 = 'https://i.imgur.com/xLkLg52.png';
l6 = 'https://i.imgur.com/sjCsERY.png';
l7 = 'https://i.imgur.com/GnnPh2K.png';
l8 = 'https://i.imgur.com/ILfjlvc.png';
l10 = 'https://i.imgur.com/6NUMmYZ.png';
l11 = 'https://i.imgur.com/XtXvwdy.png';
l12 = 'https://i.imgur.com/1F120Ey.png';
l13 = 'https://i.imgur.com/HODcYdo.png';
l14 = 'https://i.imgur.com/zeY0ytW.png';
l15 = 'https://i.imgur.com/WlIVdkh.png';
l16 = 'https://i.imgur.com/e45vT1V.png';
l166 = 'https://i.imgur.com/rAEzFSY.png';
l17 = 'https://i.imgur.com/Y5Dyyam.png';
lw1 = 'https://i.imgur.com/eitrdMY.png';
lw2 = 'https://i.imgur.com/vY6VCFA.png';
newdeleron = 'https://i.imgur.com/IZEI9a3.png';
newferrarif430 = 'https://i.imgur.com/UjhUSwz.png';
const slides = [{
    id: 1,
    name: "2019 Chevrole Corvette ZR1",
    desc: "Acceleration:Good / Brakes:Good / Handling:Okay",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l1,
    topSpeed: 135,
    slots: 4,
    seats: 2,
    Price: 599999,
    bckgHeight: 300,
    carShadowHeight: 300,
    shadowOpacity: 0.2
  },
  {
    id: 2,
    name: "2011 Mercedes McLaren SLR",
    desc: "Acceleration:Good / Brakes:Good / Handling:Okay",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l2,
    topSpeed: 122,
    slots: 4,
    seats: 2,
    Price: 785999,
    bckgHeight: 340,
    carShadowHeight: 200,
    shadowOpacity: 0.5
  },


  {
    id: 3,
    name: "★ 2011 Mercedes-Benz SLS AMG",
    desc: "★ Premium Only ★ Acceleration:Okay / Breaks:Bad / Handling:Okay",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: l4,
    topSpeed: 119,
    slots: 4,
    seats: 2,
    Price: 495999,
    bckgHeight: 300,
    carShadowHeight: 300,
    shadowOpacity: 0.2
  },


  {
    id: 4,
    name: "Mercedes-Benz SL65 AMG",
    desc: "Aceleration:Okay / Breaks:Okay / Handling:Okay",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l17,
    topSpeed: 116,
    slots: 4,
    seats: 4,
    Price: 325999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },

  {
    id: 21,
    name: "Ferrari F430",
    desc: "Aceleration:Okay / Breaks:Okay / Handling:Okay",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: newferrarif430,
    topSpeed: 114,
    slots: 4,
    seats: 2,
    Price: 1200000,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },






  {
    id: 6,
    name: "★ 2011 Mercedes-Benz E63 AMG",
    desc: "★ Premium Only ★ Acceleration:Okay / Breaks:Okay / Handling:Okay",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: l5,
    topSpeed: 108,
    slots: 4,
    seats: 4,
    Price: 135999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },


  {
    id: 7,
    name: "2010 Audi S5 V8",
    desc: "Acceleration:Okay / Breaks:Good / Handling:Okay",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l10,
    topSpeed: 102,
    slots: 4,
    seats: 5,
    Price: 364999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },


  {
    id: 8,
    name: "2017 Audi S5",
    desc: "Acceleration:Okay / Breaks:Okay / Handling:Good",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l11,
    topSpeed: 102,
    slots: 4,
    seats: 4,
    Price: 404999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },

  {
    id: 9,
    name: "2013 Audi RS4 Quattro",
    desc: "Acceleration:Okay / Breaks:Okay / Handling:Okay",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l6,
    topSpeed: 101,
    slots: 4,
    seats: 5,
    Price: 384999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },



  {
    id: 10,
    name: "★ 2015 Ferrari FF",
    desc: "★ Premium Only ★ Acceleration:Good / Breaks:Good / Handling:Okay",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: l8,
    topSpeed: 100,
    slots: 4,
    seats: 4,
    Price: 957999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },




  {
    id: 12,
    name: "★ 1985 Cadillac Fleetwood Brougham d'Elegance",
    desc: "★ Premium Only ★ Acceleration:Okay / Breaks:Good / Handling:Good",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: l7,
    topSpeed: 100,
    slots: 4,
    seats: 4,
    Price: 45000,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },



  {
    id: 13,
    name: "2010 Audi S4 V6T",
    desc: "Acceleration:Okay / Breaks:Okay / Handling:Good",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l12,
    topSpeed: 90,
    slots: 5,
    seats: 2,
    Price: 191999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },

  {
    id: 14,
    name: "2010 Mercedes-Benz C32 AMG",
    desc: "Acceleration:Okay / Breaks:Bad / Handling:Bad",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l13,
    topSpeed: 90,
    slots: 4,
    seats: 2,
    Price: 199999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },


  {
    id: 15,
    name: "★ 1963 Rolls-Royce Silver Cloud III",
    desc: "★ Premium Only ★ Acceleration:Bad / Breaks:Okay / Handling:Good",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: l14,
    topSpeed: 83,
    slots: 4,
    seats: 4,
    Price: 699999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },



  {
    id: 16,
    name: "1963 Mercedes-Benz 300 SEL",
    desc: "Acceleration:Bad / Breaks:Okay / Handling:Okay",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: l16,
    topSpeed: 83,
    slots: 4,
    seats: 4,
    Price: 155999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },


  {
    id: 17,
    name: "★ Aston Martin DB5",
    desc: "★ Premium Only ★ Aceleration:Bad / Breaks:Okay / Handling:Good",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: lw1,
    topSpeed: 82,
    slots: 4,
    seats: 4,
    Price: 499999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },

  {
    id: 18,
    name: "Delorean DMC-16",
    desc: "Acceleration:Bad / Breaks:Okay / Handling:Bad",
    color: "#FFFFFF",
    imgFloorUrl: floorImg,
    imgUrl: newdeleron,
    topSpeed: 75,
    slots: 4,
    seats: 2,
    Price: 500000,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },

  {
    id: 19,
    name: "★ 1959 BMW 507 Roadster",
    desc: "★ Premium Only ★ Acceleration:Bad / Breaks:Good / Handling:Good",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: l166,
    topSpeed: 71,
    slots: 4,
    seats: 2,
    Price: 1502999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },



  {
    id: 20,
    name: "★ Mercedes AMG G65",
    desc: "★ Premium Only ★ Acceleration:Good / Breaks:Okay / Handling:Good",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: lw2,
    topSpeed: 70,
    slots: 4,
    seats: 5,
    Price: 314999,
    bckgHeight: 340,
    carShadowHeight: 150,
    shadowOpacity: 0.5
  },


];



/* Set CSS Variables
 */
class SetCSSVariables extends React.Component {






  componentWillReceiveProps(props) {
    Object.keys(props.cssVariables).forEach(function(key) {
      document.documentElement.style.setProperty(key, props.cssVariables[key]);
    });
  }

  render() {
    return this.props.children;
  }
}



/* Slide aside
    -------------------------------------------------------------- */
_defineProperty(SetCSSVariables, "PropTypes", {
  cssVariables: PropTypes.object.isRequired,
  className: PropTypes.string
});

function SlideAside(props) {
  const activeCar = props.activeCar;
  return /*#__PURE__*/ (
    React.createElement("div", {
        className: "monocar-slide-aside"
      }, /*#__PURE__*/
      React.createElement("h5", null, "*Ranked By Speed*"), /*#__PURE__*/
      React.createElement("h1", {
          className: "monocar-slide-aside__wholename"
        }, /*#__PURE__*/
        React.createElement("span", null, "Luxury:"), /*#__PURE__*/
        React.createElement(TransitionGroup, {
            component: "span",
            className: "monocar-slide-aside__name"
          }, /*#__PURE__*/
          React.createElement(CSSTransition, {
              key: activeCar.name,
              timeout: {
                enter: 800,
                exit: 1000
              },
              className: "monocar-slide-aside__name-part",
              classNames: "monocar-slide-aside__name-part-",
              mountOnEnter: true,
              unmountOnExit: true
            }, /*#__PURE__*/

            React.createElement("span", null, activeCar.name)))), /*#__PURE__*/



      React.createElement(TransitionGroup, {
          className: "monocar-slide-aside__desc"
        }, /*#__PURE__*/
        React.createElement(CSSTransition, {
            key: activeCar.desc,
            timeout: {
              enter: 900,
              exit: 1200
            },
            className: "monocar-slide-aside__desc-text",
            classNames: "monocar-slide-aside__desc-text-",
            mountOnEnter: true,
            unmountOnExit: true
          }, /*#__PURE__*/

          React.createElement("p", null, activeCar.desc))), /*#__PURE__*/



      React.createElement("div", {
          className: "monocar-slide-aside__button"
        }, /*#__PURE__*/
        React.createElement('a', {
            href: '../'
          },
          React.createElement("button", {
            className: "button"
          }, "← Back to Homepage"), /*#__PURE__*/

          React.createElement(TransitionGroup, null, /*#__PURE__*/
            React.createElement(CSSTransition, {
                key: activeCar.color,
                timeout: {
                  enter: 800,
                  exit: 1000
                },
                mountOnEnter: true,
                unmountOnExit: true,
                classNames: "button__border-"
              }, /*#__PURE__*/

              React.createElement(SetCSSVariables, {
                  cssVariables: {
                    '--btn-color': activeCar.color
                  }
                }, /*#__PURE__*/
                React.createElement("span", {
                  className: "button__border"
                }))))))));






}

SlideAside.PropTypes = {
  activeCar: PropTypes.object.isRequired
};


/* Slide animate values
    -------------------------------------------------------------- */

function animate(render, duration, easing, next = () => null) {
  const start = Date.now();

  (function loop() {
    const current = Date.now(),
      delta = current - start,
      step = delta / duration;

    if (step > 1) {
      render(1);
      next();
    } else {
      requestAnimationFrame(loop);
      render(easing(step * 2));
    }
  })();
}

const myEasing = BezierEasing(.4, -0.7, .1, 1.5);

class AnimValue extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "node",






      null);
    _defineProperty(this, "timeout",
      null);
    _defineProperty(this, "setValue",









      (value, step) => {
        if (!this.node) {
          return;
        }

        if (step === 1) {
          this.node.style.opacity = 1;
        } else {
          this.node.style.opacity = 0.7;
        }

        this.node.innerHTML = value.toLocaleString();
      });
  }
  animate(previousValue, newValue, applyFn) {
    window.clearTimeout(this.timeout);
    const diff = newValue - previousValue;
    const renderFunction = (step) => {
      this.timeout = setTimeout(() => {
        applyFn(this.props.transformFn(previousValue + diff * step, step), step);
      }, this.props.delay);
    };
    animate(renderFunction, this.props.duration, myEasing);
  }

  componentDidMount() {
    this.animate(0, this.props.value, this.setValue);
  }

  componentWillReceiveProps(props) {
    let previousValue = this.props.value;

    if (previousValue !== props.value) {
      this.animate(previousValue, props.value, this.setValue);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
    this.timeout = null;
  }

  render() {
    return /*#__PURE__*/ React.createElement("span", {
      className: this.props.className,
      children: "0",
      ref: node => this.node = node
    });
  }
}
_defineProperty(AnimValue, "defaultProps", {
  delay: 0,
  duration: 800,
  transformFn: value => Math.floor(value)
});


class AnimateValue extends React.Component {
  render() {
    return /*#__PURE__*/ (
      React.createElement(AnimValue, {
        className: this.props.className,
        delay: this.props.delay,
        value: this.props.value,
        transformFn: (value, step) =>
          step === 1 ? value % 1 != 0 ? value.toFixed(1) : value : Math.abs(Math.floor(value))
      }));



  }
}


let DELAY_TOP_SPEED = 0,
  DELAY_slots = 0,
  DELAY_Price = 0;


class SlideParams extends React.Component {





  componentWillReceiveProps(props) {
    if (!props.animationForward) {
      DELAY_TOP_SPEED = 0;
      DELAY_Price = 0;
    } else {
      DELAY_TOP_SPEED = 0;
      DELAY_Price = 0;
    }
  }

  render() {
    const {
      activeCar
    } = this.props;

    return /*#__PURE__*/ (
      React.createElement("div", {
          className: "monocar-slide-params"
        }, /*#__PURE__*/
        React.createElement("ul", {
            className: "monocar-slide-params__list"
          }, /*#__PURE__*/
          React.createElement("li", {
              className: "monocar-slide-params__item"
            }, /*#__PURE__*/
            React.createElement("div", {
                className: "monocar-slide-params__wrapper"
              }, /*#__PURE__*/
              React.createElement(AnimateValue, {
                className: "monocar-slide-params__value",
                value: activeCar.topSpeed,
                delay: DELAY_TOP_SPEED
              }), /*#__PURE__*/
              React.createElement("span", {
                className: "monocar-slide-params__sufix"
              }, "mph")), /*#__PURE__*/


            React.createElement("p", {
              className: "monocar-slide-params__name"
            }, "Top speed")), /*#__PURE__*/

          React.createElement("li", {
              className: "monocar-slide-params__item"
            }, /*#__PURE__*/
            React.createElement("div", {
                className: "monocar-slide-params__wrapper"
              }, /*#__PURE__*/
              React.createElement(AnimateValue, {
                className: "monocar-slide-params__value",
                value: activeCar.seats,
                delay: DELAY_slots
              }), /*#__PURE__*/
              React.createElement("span", {
                className: "monocar-slide-params__sufix"
              }, "Seats")), /*#__PURE__*/

            React.createElement("p", {
              className: "monocar-slide-params__name"
            }, "Seats")), /*#__PURE__*/


          React.createElement("li", {
              className: "monocar-slide-params__item"
            }, /*#__PURE__*/
            React.createElement("div", {
                className: "monocar-slide-params__wrapper"
              }, /*#__PURE__*/
              React.createElement(AnimateValue, {
                className: "monocar-slide-params__value",
                value: activeCar.slots,
                delay: DELAY_slots
              }), /*#__PURE__*/
              React.createElement("span", {
                className: "monocar-slide-params__sufix"
              }, "slots")), /*#__PURE__*/

            React.createElement("p", {
              className: "monocar-slide-params__name"
            }, "Trunk size")), /*#__PURE__*/







          React.createElement("li", {
              className: "monocar-slide-params__item"
            }, /*#__PURE__*/
            React.createElement("div", {
                className: "monocar-slide-params__wrapper"
              }, /*#__PURE__*/
              React.createElement(AnimateValue, {
                className: "monocar-slide-params__value",
                value: activeCar.Price,
                delay: DELAY_Price
              }), /*#__PURE__*/
              React.createElement("span", {
                className: "monocar-slide-params__sufix"
              }, "$$")), /*#__PURE__*/

            React.createElement("p", {
              className: "monocar-slide-params__name"
            }, "Price")))));




  }
}
_defineProperty(SlideParams, "PropTypes", {
  activeCar: PropTypes.object.isRequired,
  animationForward: PropTypes.bool.isRequired
});


class Slide extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "handleEnter",







      e => {
        this.props.setAnimationState(this.props.ANIMATION_PHASES.STOP);
      });
  }

  render() {
    const {
      activeSlide,
      animationForward
    } = this.props;

    return /*#__PURE__*/ (
      React.createElement("div", {
          className: `monocar-slide ${animationForward ? 'animation-forward' : 'animation-back'}`
        }, /*#__PURE__*/
        React.createElement(SlideAside, {
          activeCar: activeSlide
        }), /*#__PURE__*/

        React.createElement(TransitionGroup, null, /*#__PURE__*/
          React.createElement(CSSTransition, {
              key: activeSlide.name,
              timeout: {
                enter: 800,
                exit: 1000
              },
              classNames: "monocar-slide__bckg-",
              mountOnEnter: true,
              unmountOnExit: true
            }, /*#__PURE__*/

            React.createElement(SetCSSVariables, {
                cssVariables: {
                  '--car-color': activeSlide.color,
                  '--bckg-height': activeSlide.bckgHeight + 'px',
                  '--shadow-opacity': activeSlide.shadowOpacity,
                  '--car-shadow-height': activeSlide.carShadowHeight + 'px'
                }
              }, /*#__PURE__*/


              React.createElement("div", {
                  className: "monocar-slide__bckg"
                }, /*#__PURE__*/
                React.createElement("div", {
                  className: "monocar-slide__bckg-fill"
                }))))), /*#__PURE__*/





        React.createElement(TransitionGroup, null, /*#__PURE__*/
          React.createElement(CSSTransition, {
              key: activeSlide.name,
              timeout: {
                enter: 700,
                exit: 1200
              },
              classNames: "monocar-slide__img-",
              mountOnEnter: true,
              unmountOnExit: true,
              onEntered: this.handleEnter
            }, /*#__PURE__*/

            React.createElement("div", {
                className: "monocar-slide__img"
              }, /*#__PURE__*/
              React.createElement("img", {
                className: "monocar-slide__img-floor",
                src: activeSlide.imgFloorUrl,
                alt: ""
              }), /*#__PURE__*/
              React.createElement("img", {
                className: "monocar-slide__img-car",
                src: activeSlide.imgUrl,
                alt: ""
              })))), /*#__PURE__*/




        React.createElement(SlideParams, {
          activeCar: activeSlide,
          animationForward: animationForward
        })));


  }
}
_defineProperty(Slide, "PropTypes", {
  activeSlide: PropTypes.object.isRequired,
  animationForward: PropTypes.bool.isRequired,
  setAnimationState: PropTypes.func.isRequired,
  ANIMATION_PHASES: PropTypes.object.isRequired
});


class SliderNavigation extends React.Component {





  render() {
    return /*#__PURE__*/ (
      React.createElement("div", {
          className: "monocar-slider-navigation"
        }, /*#__PURE__*/
        React.createElement("ul", {
            className: "monocar-slider-navigation__list"
          },
          this.props.carsNames.map((car) => /*#__PURE__*/

            React.createElement("li", {
                key: car.id,
                className: "monocar-slider-navigation__item"
              }, /*#__PURE__*/
              React.createElement("a", {
                  href: "#",
                  onClick: event => {
                    event.preventDefault();
                    this.props.setActiveSlide(this.props.carsNames.indexOf(car));
                  },
                  className: `monocar-slider-navigation__link ${
        this.props.carsNames[this.props.activeSlide] === car ?
        'monocar-slider-navigation__link--active ' :
        ''
        }`,
                  style: {
                    color: this.props.carsNames[this.props.activeSlide] === car ? car.color : ''
                  }
                },


                car.name))))));






  }
}
_defineProperty(SliderNavigation, "PropTypes", {
  setActiveSlide: PropTypes.func.isRequired,
  carsNames: PropTypes.array.isRequired
});



const logomonocar = 'https://i.imgur.com/QB6noJo.png',
  mouseImg = './img/mouse.svg',
  backarrow = './img/arrow.png';


/* Slider
    -------------------------------------------------------------- */

const ANIMATION_PHASES = {
  PENDING: 'PENDING',
  STOP: 'STOP'
};


class Slider extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      activeSlide: 0,
      animationForward: true,
      slidesCount: slides.length,
      animationState: null
    });
    _defineProperty(this, "slider",


      {
        header: '',
        content: ''
      });
    _defineProperty(this, "setAnimationState",





      animationState => this.setState({
        animationState
      }));
    _defineProperty(this, "setActiveSlide",

      slideId => {
        this.setState({
          activeSlide: slideId,
          animationForward: this.state.activeSlide < slideId ? true : false
        });


        this.setAnimationState(ANIMATION_PHASES.PENDING);
      });
    _defineProperty(this, "timeout",

      null);
    _defineProperty(this, "handleScroll",

      e => {
        let sliderHeight = this.slider.content.clientHeight,
          headerHeight = this.slider.header.clientHeight;

        if (window.innerHeight < sliderHeight + headerHeight) {
          return; // do not handle scroll effect when window height is smaller than slider plus header height
        }

        e.preventDefault();

        window.clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          if (e.deltaY < 0 && this.state.activeSlide !== 0) {
            this.setActiveSlide(this.state.activeSlide - 1);
          }
          if (e.deltaY > 0 && this.state.activeSlide !== this.state.slidesCount - 1) {
            this.setActiveSlide(this.state.activeSlide + 1);
          }
        }, 50);
      });
  }
  componentDidMount() {
    this.setState({
      activeSlide: 0
    });

    if (window.location.href.indexOf("?=2019ChevroleCorvetteZR1") > -1) {
      this.setActiveSlide(this.state.activeSlide + 0);

    }

    if (window.location.href.indexOf("?=2011MercedesMcLarenSLR") > -1) {
      this.setActiveSlide(this.state.activeSlide + 1);

    }

    if (window.location.href.indexOf("?=2011MercedesBenzSLSAMG") > -1) {
      this.setActiveSlide(this.state.activeSlide + 2);

    }

    if (window.location.href.indexOf("?=MercedesBenzSL65AMG") > -1) {
      this.setActiveSlide(this.state.activeSlide + 3);

    }

    if (window.location.href.indexOf("?=FerrariF430") > -1) {
      this.setActiveSlide(this.state.activeSlide + 4);

    }

    if (window.location.href.indexOf("?=2011MercedesBenzE63AMG") > -1) {
      this.setActiveSlide(this.state.activeSlide + 5);

    }

    if (window.location.href.indexOf("?=2010AudiS5V8") > -1) {
      this.setActiveSlide(this.state.activeSlide + 6);

    }

    if (window.location.href.indexOf("?=2017AudiS5") > -1) {
      this.setActiveSlide(this.state.activeSlide + 7);

    }

    if (window.location.href.indexOf("?=2013AudiRS4Quattro") > -1) {
      this.setActiveSlide(this.state.activeSlide + 8);

    }

    if (window.location.href.indexOf("?=2015FerrariFF") > -1) {
      this.setActiveSlide(this.state.activeSlide + 9);

    }

    if (window.location.href.indexOf("?=1985CadillacFleetwoodBrougham") > -1) {
      this.setActiveSlide(this.state.activeSlide + 10);

    }

    if (window.location.href.indexOf("?=2010AudiS4V6T") > -1) {
      this.setActiveSlide(this.state.activeSlide + 11);

    }

    if (window.location.href.indexOf("?=2010MercedesBenzC32AMG") > -1) {
      this.setActiveSlide(this.state.activeSlide + 12);

    }

    if (window.location.href.indexOf("?=1963RollsRoyceSilverCloud") > -1) {
      this.setActiveSlide(this.state.activeSlide + 13);

    }

    if (window.location.href.indexOf("?=1963MercedesBenz300SEL") > -1) {
      this.setActiveSlide(this.state.activeSlide + 14);

    }

    if (window.location.href.indexOf("?=AstonMartinDB5") > -1) {
      this.setActiveSlide(this.state.activeSlide + 15);

    }


    if (window.location.href.indexOf("?=DeloreanDMC16") > -1) {
      this.setActiveSlide(this.state.activeSlide + 16);

    }

    if (window.location.href.indexOf("?=1959BMW507Roadster") > -1) {
      this.setActiveSlide(this.state.activeSlide + 17);

    }

    if (window.location.href.indexOf("?=MercedesAMGG65") > -1) {
      this.setActiveSlide(this.state.activeSlide + 18);

    }


    this.setAnimationState(ANIMATION_PHASES.PENDING);
    this.slider.header = document.querySelector('.monocar-header');
    this.slider.content = document.querySelector('.monocar-slider');
    document.body.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    document.body.removeEventListener('wheel', this.handleScroll);
    window.clearTimeout(this.timeout);
    this.timeout = null;
  }

  render() {
    return /*#__PURE__*/ (
      React.createElement("div", {
          className: "monocar-slider"
        }, /*#__PURE__*/
        React.createElement(SliderNavigation, {
          activeSlide: this.state.activeSlide,
          setActiveSlide: this.setActiveSlide,
          carsNames: slides.map(slide => ({
            id: slide.id,
            name: slide.name,
            color: slide.color
          }))
        }), /*#__PURE__*/



        React.createElement(Slide, {
          animationForward: this.state.animationForward,
          activeSlide: slides[this.state.activeSlide],
          animationState: this.state.animationState,
          setAnimationState: this.setAnimationState,
          ANIMATION_PHASES: ANIMATION_PHASES
        }), /*#__PURE__*/


      ));



  }
}



/* Header
    -------------------------------------------------------------- */
function Header() {
  return /*#__PURE__*/ (
    React.createElement("div", {
        className: "monocar-header"
      }, /*#__PURE__*/
      React.createElement("div", {
          className: "monocar-header__logo"
        }, /*#__PURE__*/
        React.createElement('a', {
            href: '../'
          },
          React.createElement("img", {
            src: logomonocar,
            alt: ""
          }))), /*#__PURE__*/

      React.createElement("div", {
          className: "monocar-header__nav"
        }, /*#__PURE__*/
        React.createElement('a', {
            href: './'
          },
          React.createElement("img", {
            src: backarrow,
            alt: ""
          })))));



}


/* App
    -------------------------------------------------------------- */
class App extends React.Component {
  render() {
    return /*#__PURE__*/ (
      React.createElement("div", {
          className: "container"
        }, /*#__PURE__*/
        React.createElement(Header, null), /*#__PURE__*/
        React.createElement(Slider, null)));


  }
}


ReactDOM.render( /*#__PURE__*/ React.createElement(App, null), document.getElementById("root"));