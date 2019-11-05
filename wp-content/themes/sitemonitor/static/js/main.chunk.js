(window["webpackJsonpsitemonitor"] = window["webpackJsonpsitemonitor"] || []).push([["main"],{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/components/Home.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/App.js";



class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Constants.js":
/*!*************************************!*\
  !*** ./src/components/Constants.js ***!
  \*************************************/
/*! exports provided: SITE_URL, ROW_PER_PAGE, TOKEN, DEFAULT_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITE_URL", function() { return SITE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROW_PER_PAGE", function() { return ROW_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ERROR", function() { return DEFAULT_ERROR; });
const SITE_URL =  true ? 'http://sitemap_wp.test/' : undefined; //export const SITE_URL = 'http://sitemap_wp.test/';

const ROW_PER_PAGE = 10;
const TOKEN = localStorage.getItem('token');
const DEFAULT_ERROR = "Something went Wrong";

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Footer */ "./src/views/Footer.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/Footer.js";



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Header */ "./src/views/Header.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/Header.js";



class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Home */ "./src/views/Home.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/Home.js";




class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pace-progress */ "./node_modules/react-pace-progress/dist/pace.min.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pace_progress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/Layout.js";







class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const theme = {
      spacing: 8
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _views_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Login */ "./src/views/Login.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/Login.js";





class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const isAlreadyAuthenticated = localStorage.getItem('token');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, isAlreadyAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: {
        pathname: '/projects'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/Pages.js":
/*!*********************************!*\
  !*** ./src/components/Pages.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Pages */ "./src/views/Pages.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./src/components/Login.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/components/App.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/Pages.js";







class Pages extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let slug = this.props.match.params.slug;

    switch (slug) {
      case 'projects':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        });
        break;

      case 'sign-in':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        });
        break;

      default:
        if (typeof slug === 'undefined') {
          slug = "home";
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Pages__WEBPACK_IMPORTED_MODULE_1__["default"], {
          slug: slug,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pages);

/***/ }),

/***/ "./src/components/ProjectDetail.js":
/*!*****************************************!*\
  !*** ./src/components/ProjectDetail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");
/* harmony import */ var _views_ProjectDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/ProjectDetail */ "./src/views/ProjectDetail.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/ProjectDetail.js";




class ProjectsDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_ProjectDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: this.props,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProjectsDetail);

/***/ }),

/***/ "./src/components/ProjectStatus.js":
/*!*****************************************!*\
  !*** ./src/components/ProjectStatus.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");
/* harmony import */ var _views_ProjectStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/ProjectStatus */ "./src/views/ProjectStatus.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/ProjectStatus.js";




class ProjectDetailStatus extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_ProjectStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: this.props,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailStatus);

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Projects */ "./src/views/Projects.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/components/Projects.js";




class Projects extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Projects__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_ProjectDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ProjectDetail */ "./src/components/ProjectDetail.js");
/* harmony import */ var _components_ProjectStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ProjectStatus */ "./src/components/ProjectStatus.js");
/* harmony import */ var _components_Pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Pages */ "./src/components/Pages.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/index.js";






 //import './pase.js';
//import './pase.css';
//import './views/style.css';

const routing = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  exact: true,
  path: "/",
  component: _components_Pages__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  exact: true,
  path: "/projects/:id",
  component: _components_ProjectDetail__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  exact: true,
  path: "/projects/:id/:status",
  component: _components_ProjectStatus__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  exact: true,
  path: "/:slug",
  component: _components_Pages__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(routing, document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_2__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/views/CustomToolbar.js":
/*!************************************!*\
  !*** ./src/views/CustomToolbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Constants */ "./src/components/Constants.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Message */ "./src/views/Message.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-pace-progress */ "./node_modules/react-pace-progress/dist/pace.min.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_pace_progress__WEBPACK_IMPORTED_MODULE_20__);


var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/CustomToolbar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















const defaultToolbarStyles = {
  iconButton: {}
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  appBar: {
    position: 'relative',
    marginBottom: "10px"
  },
  container: {
    paddingTop: "10px"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
const Transition = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Transition(props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({
    direction: "up",
    ref: ref
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
});

function CustomToolbar() {
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
        _React$useState2 = Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

  const _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    sm_project_name: '',
    sm_domain_url: '',
    sm_sitemap_url: '',
    sm_sitemap_option: true,
    sm_robots_option: true,
    sm_admin_option: true,
    form_error_msg: "",
    isLoading: false
  }),
        _React$useState4 = Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
        state = _React$useState4[0],
        setState = _React$useState4[1];

  const handleSwitchChange = name => event => {
    setState(_objectSpread({}, state, {
      [name]: event.target.checked
    }));
  };

  const handleTextChange = event => {
    setState(_objectSpread({}, state, {
      [event.target.name]: event.target.value
    }));
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleLocationSubmit(event) {
    event.preventDefault();

    if ("" === state.sm_project_name) {
      setState(_objectSpread({}, state, {
        ['form_error_msg']: "Please Enter Project Name"
      }));
      return false;
    } else if ("" === state.sm_domain_url) {
      setState(_objectSpread({}, state, {
        ['form_error_msg']: "Please Enter Domain URL"
      }));
      return false;
    } else if ("" !== state.sm_domain_url) {
      let isValidUrl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

      if (!isValidUrl.test(state.sm_domain_url)) {
        setState(_objectSpread({}, state, {
          ['form_error_msg']: "Please Enter valid Domain URL"
        }));
        return false;
      }

      if ("" !== state.sm_sitemap_url) {
        if (!isValidUrl.test(state.sm_sitemap_url)) {
          setState(_objectSpread({}, state, {
            ['form_error_msg']: "Please Enter valid Sitemap URL"
          }));
          return false;
        }
      }
    }

    const token = localStorage.getItem('token');
    setState(_objectSpread({}, state, {
      ['isLoading']: true
    }));
    fetch("/wp-json/md-site-monitor/add_project", {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(res => {
      return res.json();
    }).then(function (response) {
      handleClose();
      window.location.href = '/projects';
    }).catch(err => {});
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: 'Add Project',
    className: "add_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullScreen: true,
    open: open,
    onClose: handleClose,
    TransitionComponent: Transition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleLocationSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    edge: "start",
    color: "inherit",
    onClick: handleClose,
    "aria-label": "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Add Project"))), state.isLoading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_pace_progress__WEBPACK_IMPORTED_MODULE_20___default.a, {
    color: "#3f51b5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }) : '', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.container,
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, state.form_error_msg ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "error",
    message: state.form_error_msg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }) : '', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    id: "sm_project_name",
    label: "Project Name *",
    name: "sm_project_name",
    onChange: handleTextChange,
    autoFocus: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    name: "sm_domain_url",
    label: "Domain URL *",
    type: "text",
    onChange: handleTextChange,
    id: "sm_domain_url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    name: "sm_sitemap_url",
    label: "Sitemap URL",
    type: "text",
    onChange: handleTextChange,
    id: "sm_domain_url",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    name: "notify_to",
    label: "Who Notify",
    type: "text",
    placeholder: "hello@multidots.com,contact@multidots.com",
    onChange: handleTextChange,
    id: "notify_to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Add Project")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(defaultToolbarStyles, {
  name: 'CustomToolbar'
})(CustomToolbar));

/***/ }),

/***/ "./src/views/Footer.js":
/*!*****************************!*\
  !*** ./src/views/Footer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/Footer.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white'
  }
}));

class FooterViews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  Copyright() {
    const classes = useStyles();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: classes.footer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      maxWidth: "sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "body2",
      color: "textSecondary",
      align: "center",
      style: {
        marginTop: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, 'Copyright © ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "inherit",
      href: "https://www.multidots.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Multidots"), ' ', new Date().getFullYear(), '.')));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.Copyright, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FooterViews);

/***/ }),

/***/ "./src/views/Header.js":
/*!*****************************!*\
  !*** ./src/views/Header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logo.png */ "./src/views/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/Header.js";













class HeaderViews extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    this.setRedirect = () => {
      this.setState({
        redirect: true
      });
    };

    this.renderRedirect = () => {
      if (this.state.redirect) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
          to: {
            pathname: '/sign-in'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        });
      }
    };

    this.Header = this.Header.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/sign-in';
  }

  Header() {
    const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
      root: {
        flexGrow: 1
      },
      menuButton: {//marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        color: "#fff",
        textDecoration: "none"
      }
    }));
    const classes = useStyles();
    const isAlreadyAuthenticated = localStorage.getItem('token');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      position: "static",
      style: {
        marginBottom: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      edge: "start",
      className: classes.menuButton,
      color: "inherit",
      "aria-label": "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      to: {
        'pathname': "/projects"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _logo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: "logo",
      width: "35px",
      height: "35px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h6",
      className: classes.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      className: classes.title,
      to: {
        'pathname': "/projects"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Site Monitor")), isAlreadyAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: this.handleLogout.bind(this),
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, this.renderRedirect(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: this.setRedirect,
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Login")))));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderViews);

/***/ }),

/***/ "./src/views/Home.js":
/*!***************************!*\
  !*** ./src/views/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeViews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/Home.js";
















function Copyright() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, 'Copyright © ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Your Website"), ' ', new Date().getFullYear(), '.');
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
const cards = [1, 2, 3];
function HomeViews() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h2",
    align: "center",
    color: "textPrimary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Multidots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h5",
    variant: "h5",
    align: "center",
    color: "textPrimary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Serving People, Solving Problems"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6",
    align: "center",
    color: "textSecondary",
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Finely Tuned Enterprise WordPress for Content Publishers!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.heroButtons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 2,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Know More")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.cardGrid,
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    spacing: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, cards.map(card => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    key: card,
    xs: 12,
    sm: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.cardMedia,
    image: "https://source.unsplash.com/random",
    title: "Image title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.cardContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "This is a media card. You can use this section to describe the content.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "View")))))))));
}

/***/ }),

/***/ "./src/views/Login.js":
/*!****************************!*\
  !*** ./src/views/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Constants */ "./src/components/Constants.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Message */ "./src/views/Message.js");
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/Login.js";
















class LoginViews extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      sm_username: '',
      sm_password: '',
      error: {
        error_message: ''
      },
      isAuthenticate: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLoginViews = this.renderLoginViews.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let sm_username = this.state.sm_username;
    let sm_password = this.state.sm_password;

    if ("" === sm_username) {
      this.setState({
        error: {
          error_message: 'Please Enter Username'
        }
      });
      return false;
    } else if ("" === sm_password) {
      this.setState({
        error: {
          error_message: 'Please Enter Password'
        }
      });
      return false;
    }

    const loginData = {
      username: sm_username,
      password: sm_password
    };
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        sm_username,
        sm_password
      })
    };
    fetch("/wp-json/md-site-monitor/login", requestOptions).then(response => response.json()).then(data => {
      if ('user_not_found' === data.code) {
        this.setState({
          error: {
            error_message: data.message
          }
        });
      } else if ('rest_no_route' === data.code || typeof data.data !== "undefined" && 403 === parseInt(data.data.status)) {
        this.setState({
          error: {
            error_message: data.message
          }
        });
      } else {
        localStorage.setItem('token', data.token);
        window.location.href = '/projects';
      }
    });
  }

  renderLoginViews() {
    const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(theme => ({
      '@global': {
        body: {
          backgroundColor: theme.palette.common.white
        }
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#3F51B6'
      },
      form: {
        width: '100%',
        // Fix IE 11 issue.
        marginTop: theme.spacing(1)
      },
      submit: {
        margin: theme.spacing(3, 0, 2)
      }
    }));
    const classes = useStyles();
    const error = this.state.error.error_message;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
      component: "main",
      maxWidth: "xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: classes.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      component: "h1",
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: classes.form,
      onSubmit: this.handleSubmit.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_14__["default"], {
      type: "error",
      message: this.state.error.error_message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "outlined",
      margin: "normal",
      fullWidth: true,
      id: "sm_username",
      label: "Username",
      name: "sm_username",
      onChange: this.handleChange.bind(this),
      autoFocus: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "outlined",
      margin: "normal",
      fullWidth: true,
      name: "sm_password",
      label: "Password",
      type: "password",
      id: "sm_password",
      onChange: this.handleChange.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "Sign In"))));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.renderLoginViews, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginViews);

/***/ }),

/***/ "./src/views/Message.js":
/*!******************************!*\
  !*** ./src/views/Message.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedSnackbars; });
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/esm/SnackbarContent/index.js");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Warning */ "./node_modules/@material-ui/icons/Warning.js");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/Message.js";










const variantIcon = {
  success: _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_4___default.a,
  warning: _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_9___default.a,
  error: _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_5___default.a,
  info: _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_6___default.a
};
const useStyles1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(theme => ({
  success: {
    backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["green"][600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["amber"][700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();

  const className = props.className,
        message = props.message,
        onClose = props.onClose,
        variant = props.variant,
        other = Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["className", "message", "onClose", "variant"]);

  const Icon = variantIcon[variant];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes[variant], className),
    "aria-describedby": "client-snackbar",
    message: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: "client-snackbar",
      className: classes.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.icon, classes.iconVariant),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), message)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
}

MySnackbarContentWrapper.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  message: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['error', 'info', 'success', 'warning']).isRequired
};
function CustomizedSnackbars(props) {
  const type = props.type,
        message = props.message;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MySnackbarContentWrapper, {
    style: {
      marginTop: "20px"
    },
    variant: type,
    message: message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  });
}

/***/ }),

/***/ "./src/views/NotFoundPage.js":
/*!***********************************!*\
  !*** ./src/views/NotFoundPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/NotFoundPage.js";


class NotFoundPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Sorry, this page not availabel.");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/views/Pages.js":
/*!****************************!*\
  !*** ./src/views/Pages.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotFoundPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFoundPage */ "./src/views/NotFoundPage.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pace-progress */ "./node_modules/react-pace-progress/dist/pace.min.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pace_progress__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/Pages.js";




class PagesViews extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: false,
      isLoading: true
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount(props) {
    this.setState({
      isLoading: true
    });
    let slug = this.props.slug;
    fetch("/wp-json/wp/v2/pages?slug=".concat(slug)).then(response => response.json()).then(data => {
      if (Object.keys(data).length === 0) {
        fetch("/wp-json/wp/v2/posts?slug=".concat(slug)).then(response => response.json()).then(data => {
          if (Object.keys(data).length === 0) {
            this.setState({
              isLoading: false
            });
          } else {
            this.setState({
              pageData: data[0],
              isLoading: false
            });
          }
        });
      } else {
        this.setState({
          pageData: data[0],
          isLoading: false
        });
      }
    });
  }

  createMarkup(html) {
    return {
      __html: html
    };
  }

  render() {
    const is404 = this.state.pageData;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pace_progress__WEBPACK_IMPORTED_MODULE_2___default.a, {
      color: "#3f51b5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }) : false === is404 || typeof is404 === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotFoundPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "entry",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "entry-content",
      dangerouslySetInnerHTML: this.createMarkup(this.state.pageData.content.rendered),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PagesViews);

/***/ }),

/***/ "./src/views/ProjectDetail.js":
/*!************************************!*\
  !*** ./src/views/ProjectDetail.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_icons_CheckCircleRounded__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CheckCircleRounded */ "./node_modules/@material-ui/icons/CheckCircleRounded.js");
/* harmony import */ var _material_ui_icons_CheckCircleRounded__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleRounded__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_CancelRounded__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/CancelRounded */ "./node_modules/@material-ui/icons/CancelRounded.js");
/* harmony import */ var _material_ui_icons_CancelRounded__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CancelRounded__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Save */ "./node_modules/@material-ui/icons/Save.js");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-pace-progress */ "./node_modules/react-pace-progress/dist/pace.min.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_pace_progress__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/SvgIcon/SvgIcon */ "./node_modules/@material-ui/core/SvgIcon/SvgIcon.js");
/* harmony import */ var _material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SiteMapReport__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SiteMapReport */ "./src/views/SiteMapReport.js");
/* harmony import */ var _RobotsReports__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./RobotsReports */ "./src/views/RobotsReports.js");



var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/ProjectDetail.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  spacing: {
    marginBottom: theme.spacing(3)
  },
  toolbar: {
    borderBottom: "1px solid ".concat(theme.palette.divider)
  },
  toolbarTitle: {
    flex: 1
  },
  table: {
    width: 1100,
    marginLeft: 20
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  report_link: {
    float: 'right',
    margin: '10px 0px'
  },
  status_icon: {
    float: 'right',
    margin: '10px 0px'
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: _objectSpread({}, theme.typography.body2, {
    padding: theme.spacing(3, 0)
  }),
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  },
  grid_item: {
    marginTop: '10px'
  },
  status_switch: {
    marginLeft: '10px'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3F51B6',
    float: 'right',
    cursor: "pointer"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));
const IOSSwitch = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none'
      }
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: "1px solid ".concat(theme.palette.grey[400]),
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
  focusVisible: {}
}))((_ref) => {
  let classes = _ref.classes,
      props = Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["classes"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_19__["default"], Object.assign({
    focusVisibleClassName: classes.focusVisible,
    disableRipple: true,
    classes: {
      root: classes.root,
      switchBase: classes.switchBase,
      thumb: classes.thumb,
      track: classes.track,
      checked: classes.checked
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }));
});

class ProjectDetailViews extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    this.xhrRequestStatus = (project_type, project_stats) => {
      const token = localStorage.getItem('token');
      let domain_id = this.state.project_id;
      return fetch("/wp-json/md-site-monitor/projects_status", {
        method: 'POST',
        body: JSON.stringify({
          projectID: domain_id,
          projectStatus: project_stats,
          project_type: project_type
        }),
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        return res.json();
      }).then(function (response) {}).catch(err => {
        this.setState({
          isLoading: false
        });
      });
    };

    this.xhrRequestUpdateProject = () => {
      this.setState({
        isLoading: true
      });
      const token = localStorage.getItem('token');
      let domain_id = this.state.project_id;
      return fetch("/wp-json/md-site-monitor/update_project", {
        method: 'POST',
        body: JSON.stringify(this.state.projectData),
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        return res.json();
      }).then(function (response) {
        this.setState({
          isLoading: false
        });
      }).catch(err => {
        this.setState({
          isLoading: false
        });
      });
    };

    this.state = {
      fullReportData: [],
      projectData: [],
      sitemapData: [],
      robotsData: [],
      sitemapErrorMsg: 'Loading...',
      edit_data: false,
      project_id: this.props.data.match.params.id,
      update_data: [],
      error: {
        project_name: false,
        domain_url: false
      },
      isLoading: true
    };
    this.ProjectFeaturesBox = this.ProjectFeaturesBox.bind(this);
    this.editProjectData = this.editProjectData.bind(this);
  }

  componentDidMount(props) {
    this.getData();
  }

  getData() {
    let domain_id = this.state.project_id;
    let type = this.props.data.match.params.status;
    const token = localStorage.getItem('token');
    fetch("/wp-json/md-site-monitor/project_report?project_id=".concat(domain_id, "&type=all"), {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => {
      console.log(response.status);

      if (401 === parseInt(response.status)) {
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
      }

      if (403 === parseInt(response.status)) {
        window.location.href = '/projects';
      }

      return response.json();
    }).then(data => {
      if (typeof data === 'undefined' || null === data || Object.keys(data).length === 0) {
        this.setState({
          fullReportData: [],
          sitemapData: [],
          sitemapErrorMsg: 'Sitemap reports not generated yet.',
          robotsData: [],
          robotsErrorMsg: 'Robots reports not generated yet.',
          isLoading: false
        });
      } else {
        this.setState({
          fullReportData: data,
          projectData: data.project_details,
          sitemapData: data.sitemap,
          sitemapErrorMsg: Object.keys(data.sitemap).length === 0 ? 'Sitemap reports not generated yet.' : '',
          robotsData: data.robots_data,
          robotsErrorMsg: Object.keys(data.robots_data).length === 0 ? 'Robots reports not generated yet.' : '',
          isLoading: false
        });
      }
    });
  }

  handleChange(event) {
    let project_type = event.target.value;
    let project_stats = event.target.checked;
    this.xhrRequestStatus(project_type, project_stats).then(res => {
      this.getData();
    });
  }

  handleUpdate(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState((prevState, props) => ({
      projectData: _objectSpread({}, prevState.projectData, {
        [key]: value
      })
    }));
  }

  editProjectData() {
    let project_name = this.state.projectData.project_name;
    let domain_url = this.state.projectData.domain_url;
    let sitemap_url = this.state.projectData.sitemap_url;
    let isValidUrl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if ("" === project_name) {
      this.setState({
        error: {
          project_name: true,
          msg: "Please enter project name"
        }
      });
      return false;
    }

    if ("" === domain_url) {
      this.setState({
        error: {
          domain_url: true,
          msg: "Please enter domain URL"
        }
      });
      return false;
    }

    if ("" !== domain_url) {
      if (!isValidUrl.test(domain_url)) {
        this.setState({
          error: {
            domain_url: true,
            msg: "Please enter valid domain URL"
          }
        });
        return false;
      }
    }

    if ("" !== sitemap_url) {
      if (!isValidUrl.test(sitemap_url)) {
        this.setState({
          error: {
            sitemap_url: true,
            msg: "Please enter valid sitemap URL"
          }
        });
        return false;
      }
    }

    if (true === this.state.edit_data) {
      this.xhrRequestUpdateProject().then(res => {//this.getData();
      });
    }

    let value = this.state.edit_data ? false : true;
    this.setState({
      edit_data: value,
      error: {
        domain_url: false,
        project_name: false
      }
    });
  }

  cancelProjectData() {
    this.setState({
      edit_data: false
    });
    this.getData();
  }

  ProjectFeaturesBox(props) {
    let input_type = this.state.error.project_name ? "" : "error";
    const classes = useStyles();
    const sitemap_page = '/projects/' + this.state.project_id + '/' + 'sitemap';
    const robots_page = '/projects/' + this.state.project_id + '/' + 'robots';
    const reportData = props.reportData; //const classes = useStyles();

    const _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
          _React$useState2 = Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
          expanded = _React$useState2[0],
          setExpanded = _React$useState2[1];

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      item: true,
      xs: 12,
      md: 12,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      item: true,
      xs: 8,
      md: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 12,
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, "Project Details", this.state.edit_data ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: classes.avatar,
      onClick: this.cancelProjectData.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: classes.avatar,
      onClick: this.editProjectData.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: this
    }))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: classes.avatar,
      onClick: this.editProjectData.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.table,
      "aria-label": "simple table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442
      },
      __self: this
    }, "Project Name")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    }, this.state.edit_data ? this.state.error.project_name ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__["default"], {
      error: "error",
      helperText: this.state.error.msg,
      variant: "outlined",
      margin: "normal",
      value: this.state.projectData.project_name,
      id: "project_name",
      name: "project_name",
      onChange: this.handleUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__["default"], {
      variant: "outlined",
      margin: "normal",
      value: this.state.projectData.project_name,
      id: "project_name",
      name: "project_name",
      onChange: this.handleUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }) : this.state.projectData.project_name)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471
      },
      __self: this
    }, "Domain URL")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473
      },
      __self: this
    }, this.state.edit_data ? this.state.error.domain_url ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__["default"], {
      error: "error",
      helperText: this.state.error.msg,
      variant: "outlined",
      margin: "normal",
      value: this.state.projectData.domain_url,
      id: "domain_url",
      name: "domain_url",
      onChange: this.handleUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__["default"], {
      variant: "outlined",
      margin: "normal",
      value: this.state.projectData.domain_url,
      id: "domain_url",
      name: "domain_url",
      onChange: this.handleUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      target: "_blank",
      href: this.state.projectData.domain_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493
      },
      __self: this
    }, this.state.projectData.domain_url))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: this
    }, "Sitemap URL")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    }, this.state.edit_data ? this.state.error.sitemap_url ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__["default"], {
      error: "error",
      helperText: this.state.error.msg,
      variant: "outlined",
      margin: "normal",
      value: this.state.projectData.sitemap_url,
      id: "sitemap_url",
      name: "sitemap_url",
      onChange: this.handleUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_21__["default"], {
      variant: "outlined",
      margin: "normal",
      value: this.state.projectData.sitemap_url,
      id: "sitemap_url",
      name: "sitemap_url",
      onChange: this.handleUpdate.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      target: "_blank",
      href: this.state.projectData.sitemap_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }, this.state.projectData.sitemap_url)))))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 12,
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_27__["default"], {
      id: 'panel-main-sitemap-bh-header',
      expanded: expanded === "sitemap",
      onChange: handleChange("sitemap"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_24__["default"], {
      expandIcon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_25___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }),
      "aria-controls": "panel1bh-content",
      id: 'panel-sitemap-bh-header',
      className: "sitemap_Container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574
      },
      __self: this
    }, "Sitemap History")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_26__["default"], {
      id: 'exp-panel-main-sitemap-bh-header',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SiteMapReport__WEBPACK_IMPORTED_MODULE_30__["default"], {
      reportData: this.state.sitemapData,
      sitemapMsg: this.state.sitemapErrorMsg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_28__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_29__["Link"], {
      className: classes.report_link,
      to: {
        pathname: sitemap_page
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583
      },
      __self: this
    }, "View More"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
      className: classes.status_switch,
      control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IOSSwitch, {
        checked: parseInt(this.state.projectData.sitemap_status),
        onChange: this.handleChange.bind(this),
        value: "sitemap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_27__["default"], {
      id: 'panel-main-robots-bh-header',
      expanded: expanded === "robots",
      onChange: handleChange("robots"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_24__["default"], {
      expandIcon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_SvgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_25___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        },
        __self: this
      }),
      "aria-controls": "panel1bh-content",
      id: 'panel-robots-bh-header',
      className: "sitemap_Container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605
      },
      __self: this
    }, "Robots History"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_26__["default"], {
      id: 'exp-panel-main-robots-bh-header',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_RobotsReports__WEBPACK_IMPORTED_MODULE_31__["default"], {
      reportData: this.state.robotsData,
      sitemapMsg: this.state.robotsErrorMsg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_28__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_29__["Link"], {
      className: classes.report_link,
      to: {
        pathname: robots_page
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615
      },
      __self: this
    }, "View More"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
      className: classes.status_switch,
      control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IOSSwitch, {
        checked: parseInt(this.state.projectData.roborts_status),
        onChange: this.handleChange.bind(this),
        value: "roborts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      item: true,
      xs: 4,
      md: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 12,
      md: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.cardDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636
      },
      __self: this
    }, "Wp-Admin URL", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
      className: classes.status_switch,
      control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IOSSwitch, {
        checked: parseInt(this.state.projectData.admin_status),
        onChange: this.handleChange.bind(this),
        value: "admin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638
      },
      __self: this
    }), 1 === parseInt(this.state.fullReportData.admin_status) ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_CheckCircleRounded__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.status_icon,
      style: {
        color: '#43a047'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_CancelRounded__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.status_icon,
      style: {
        color: '#D3302F'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652
      },
      __self: this
    }, 1 === parseInt(this.state.fullReportData.admin_status) ? 'Custom URL set for the WP Admin.' : 'Default WP Admin URL set for the project.'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      paragraph: true,
      className: "status_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657
      },
      __self: this
    }, this.state.fullReportData.admin_status_text))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 12,
      md: 12,
      className: classes.grid_item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 665
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.cardDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 668
      },
      __self: this
    }, "SSL", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
      className: classes.status_switch,
      control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IOSSwitch, {
        checked: parseInt(this.state.projectData.https_status),
        onChange: this.handleChange.bind(this),
        value: "https",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670
      },
      __self: this
    }), 1 === parseInt(this.state.fullReportData.ssl_status) ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_CheckCircleRounded__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.status_icon,
      style: {
        color: '#43a047'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_CancelRounded__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.status_icon,
      style: {
        color: '#D3302F'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683
      },
      __self: this
    }, 1 === parseInt(this.state.fullReportData.ssl_status) ? 'Voila! site have a secure connection.' : 'Sorry, We could not found any secure connection for this project.'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      paragraph: true,
      className: "status_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688
      },
      __self: this
    }, this.state.fullReportData.ssl_status_text))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 12,
      md: 12,
      className: classes.grid_item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.cardDetails,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h5",
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699
      },
      __self: this
    }, "Captcha", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
      className: classes.status_switch,
      control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IOSSwitch, {
        checked: parseInt(this.state.projectData.captcha_status),
        onChange: this.handleChange.bind(this),
        value: "captcha",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701
      },
      __self: this
    }), 1 === parseInt(this.state.fullReportData.captcha_status) ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_CheckCircleRounded__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.status_icon,
      style: {
        color: '#43a047'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 710
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_CancelRounded__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.status_icon,
      style: {
        color: '#D3302F'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      paragraph: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714
      },
      __self: this
    }, 1 === parseInt(this.state.fullReportData.captcha_status) ? 'We have found captcha is successfully implemented on your project.' : 'Sorry! We could not found any captcha on your project.'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      paragraph: true,
      className: "status_text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 719
      },
      __self: this
    }, this.state.fullReportData.captcha_status_text)))))));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      maxWidth: "xl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733
      },
      __self: this
    }, this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_pace_progress__WEBPACK_IMPORTED_MODULE_23___default.a, {
      color: "#3f51b5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(this.ProjectFeaturesBox, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailViews);

/***/ }),

/***/ "./src/views/ProjectDetailSidebar.js":
/*!*******************************************!*\
  !*** ./src/views/ProjectDetailSidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/SupervisorAccount */ "./node_modules/@material-ui/icons/SupervisorAccount.js");
/* harmony import */ var _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Language */ "./node_modules/@material-ui/icons/Language.js");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Description */ "./node_modules/@material-ui/icons/Description.js");
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/ProjectDetailSidebar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  spacing: {
    marginBottom: theme.spacing(3)
  },
  toolbar: {
    borderBottom: "1px solid ".concat(theme.palette.divider)
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: _objectSpread({}, theme.typography.body2, {
    padding: theme.spacing(3, 0)
  }),
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

class ProjectDetailSidebar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.Sidebar = this.Sidebar.bind(this);
  }

  handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/sign-in';
  }

  Sidebar() {
    const overview_link = "/projects/" + this.props.project_id + "/";
    const classes = useStyles();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: "nav",
      "aria-labelledby": "nested-list-subheader",
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      className: classes.spacing,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"],
      to: {
        pathname: overview_link
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: "Overview",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"],
      to: {
        pathname: overview_link + "sitemap"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: "Sitemap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      primary: "Settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      button: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.handleLogout.bind(this),
      primary: "Logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.Sidebar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailSidebar);

/***/ }),

/***/ "./src/views/ProjectStatus.js":
/*!************************************!*\
  !*** ./src/views/ProjectStatus.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _ProjectDetailSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectDetailSidebar */ "./src/views/ProjectDetailSidebar.js");
/* harmony import */ var _SiteMapReport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SiteMapReport */ "./src/views/SiteMapReport.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-pace-progress */ "./node_modules/react-pace-progress/dist/pace.min.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_pace_progress__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/ProjectStatus.js";







class ProjectDetailViews extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitemapData: [],
      sitemapErrorMsg: "Please wait... Data will be loaded soon.",
      isLoading: true
    };
    this.ProjectStatusBox = this.ProjectStatusBox.bind(this);
  }

  componentDidMount(props) {
    let domain_id = this.props.data.match.params.id;
    let type = this.props.data.match.params.status;
    const token = localStorage.getItem('token');
    this.setState({
      isLoading: true
    });
    fetch("/wp-json/md-site-monitor/project_report?project_id=".concat(domain_id, "&type=").concat(type), {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(response => {
      if (401 === parseInt(response.status)) {
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
      }

      return response.json();
    }).then(data => {
      if (typeof data === 'undefined' || null === data || Object.keys(data).length === 0) {
        this.setState({
          sitemapData: [],
          sitemapErrorMsg: "Sitemap reports not generated yet.",
          isLoading: false
        });
      } else {
        this.setState({
          sitemapData: data,
          sitemapErrorMsg: "",
          isLoading: false
        });
      }
    });
  }

  ProjectStatusBox(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      container: true,
      item: true,
      xs: 12,
      spacing: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteMapReport__WEBPACK_IMPORTED_MODULE_4__["default"], {
      reportData: this.state.sitemapData,
      sitemapMsg: this.state.sitemapErrorMsg,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      maxWidth: "xl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pace_progress__WEBPACK_IMPORTED_MODULE_5___default.a, {
      color: "#3f51b5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.ProjectStatusBox, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProjectDetailViews);

/***/ }),

/***/ "./src/views/Projects.js":
/*!*******************************!*\
  !*** ./src/views/Projects.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Constants */ "./src/components/Constants.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var material_ui_popup_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! material-ui-popup-state */ "./node_modules/material-ui-popup-state/index.js");
/* harmony import */ var material_ui_popup_state__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/FiberManualRecord */ "./node_modules/@material-ui/icons/FiberManualRecord.js");
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-pace-progress */ "./node_modules/react-pace-progress/dist/pace.min.js");
/* harmony import */ var react_pace_progress__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_pace_progress__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style.css */ "./src/views/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _CustomToolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CustomToolbar */ "./src/views/CustomToolbar.js");

var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/Projects.js";

















const defaultToolbarSelectStyles = {
  iconButton: {},
  iconContainer: {
    marginRight: '24px'
  }
};
const IOSSwitch = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none'
      }
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: "1px solid ".concat(theme.palette.grey[400]),
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
  focusVisible: {}
}))((_ref) => {
  let classes = _ref.classes,
      props = Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["classes"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({
    focusVisibleClassName: classes.focusVisible,
    disableRipple: true,
    classes: {
      root: classes.root,
      switchBase: classes.switchBase,
      thumb: classes.thumb,
      track: classes.track,
      checked: classes.checked
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }));
});
const HtmlTooltip = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}))(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__["default"]);

class ProjectsViews extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.getData = () => {
      this.setState({
        isLoading: true,
        data: [['Loading Data...']]
      });
      this.xhrRequest(0, '').then(res => {
        if (typeof res === 'undefined' || null === res.data || 403 === res.data.status) {
          //&& 403 === res.data.status
          this.setState({
            data: [],
            isLoading: false,
            count: 0
          });
        } else {
          this.setState({
            data: res.data,
            isLoading: false,
            count: res.total
          });
        }
      });
    };

    this.changePage = (page, searchText = '') => {
      this.setState({
        isLoading: true,
        data: [['Loading Data...']]
      });
      this.xhrRequest(page, searchText).then(res => {
        if (typeof res === 'undefined' || null === res.data || 403 === res.data.status) {
          //&& 403 === res.data.status
          this.setState({
            data: [],
            isLoading: false,
            count: 0
          });
        } else {
          this.setState({
            data: res.data,
            isLoading: false,
            count: res.total
          });
        }
      });
    };

    this.xhrRequest = (page, searchText) => {
      const token = localStorage.getItem('token');
      return fetch("/wp-json/md-site-monitor/get_domains?sm_paged=".concat(page, "&sm_search=").concat(searchText), {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        if (403 === parseInt(res.status) || 401 === parseInt(res.status)) {
          localStorage.removeItem('token');
          window.location.href = '/sign-in';
        }

        if (404 === parseInt(res.status)) {
          return new Promise((resolve, reject) => {
            const data = [];
            const total = parseInt(0);
            resolve({
              data,
              total
            });
          });
        }

        return res.json();
      }).then(function (response) {
        return new Promise((resolve, reject) => {
          if ('data_not_found' === response.code) {
            const data = [];
            const total = 0;
            resolve({
              data,
              total
            });
          } else {
            const data = response.data;
            const total = parseInt(response.total_data);
            resolve({
              data,
              total
            });
          }
        });
      }).catch(err => {
        this.setState({
          isLoading: false
        });
      });
    };

    this.handleDeleteProject = (selectedRows, displayData) => {
      this.setState({
        isLoading: true,
        data: [['Loading Data...']]
      });
      const deleteData = selectedRows.data.map(function (data, idx) {
        return displayData[data.index].data[0];
      });
      this.xhrRequestDelete(deleteData).then(res => {
        this.getData();
      });
    };

    this.xhrRequestDelete = deleteData => {
      const token = localStorage.getItem('token');
      const site_url = _components_Constants__WEBPACK_IMPORTED_MODULE_4__["SITE_URL"];
      return fetch("/wp-json/md-site-monitor/delete_projects", {
        method: 'DELETE',
        body: JSON.stringify(deleteData),
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        if (404 === parseInt(res.status)) {
          return new Promise((resolve, reject) => {
            const data = [];
            const total = parseInt(0);
            resolve({
              data,
              total
            });
          });
        }

        return res.json();
      }).then(function (response) {}).catch(err => {
        this.setState({
          isLoading: false
        });
      });
    };

    this.xhrRequestStatus = (project_id, project_stats) => {
      const token = localStorage.getItem('token');
      const site_url = _components_Constants__WEBPACK_IMPORTED_MODULE_4__["SITE_URL"];
      return fetch("/wp-json/md-site-monitor/projects_status", {
        method: 'POST',
        body: JSON.stringify({
          projectID: project_id,
          projectStatus: project_stats
        }),
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        return res.json();
      }).then(function (response) {}).catch(err => {
        this.setState({
          isLoading: false
        });
      });
    };

    this.state = {
      page: 0,
      count: 11,
      rowsPerPage: _components_Constants__WEBPACK_IMPORTED_MODULE_4__["ROW_PER_PAGE"],
      data: [['Loading Data...']],
      isLoading: true,
      searchText: ''
    };
  }

  componentDidMount() {
    this.getData();
  }

  handleChange(event) {
    let project_id = event.target.value;
    let project_stats = event.target.checked;
    this.xhrRequestStatus(project_id, project_stats).then(res => {
      this.getData();
    });
  }

  render() {
    const columns = [{
      label: 'ID',
      name: 'id',
      options: {
        display: false
      }
    }, {
      label: 'Project',
      name: 'project_name',
      options: {
        sort: false,
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          let project_id = tableMeta.rowData[0];
          const project_link = '/projects/' + project_id + '/';
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            to: {
              pathname: project_link
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 261
            },
            __self: this
          }, value);
        }
      }
    }, {
      label: 'Domain URL',
      name: 'domain_url'
    }, {
      label: 'Report Status',
      name: 'cron_status',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          let status_text = "";
          let cron_status = "";

          if (typeof value != 'undefined' || null != value) {
            if (1 === value.sitemap_xml && 1 === value.admin_status && 1 === value.captcha_status && 1 === value.https_status && 1 === value.robots_status) {
              status_text = "Completed";
              cron_status = 1;
            } else if (0 === value.sitemap_xml && 0 === value.admin_status && 0 === value.captcha_status && 0 === value.https_status && 0 === value.robots_status) {
              status_text = "Pending";
              cron_status = 2;
            } else {
              status_text = "In Process";
              cron_status = 0;
            }

            if (tableMeta.rowData[4] == 0) {
              status_text = "On Hold";
              cron_status = 2;
            }
          }

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: "tooltip_container",
            variant: "popper",
            popupId: "demo-popup-popper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 296
            },
            __self: this
          }, popupState => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HtmlTooltip, {
            style: {
              backgroundColor: "#fff"
            },
            title: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 299
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({
            variant: "contained"
          }, Object(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_11__["bindToggle"])(popupState), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 303
            },
            __self: this
          }), 1 == cron_status ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12___default.a, {
            style: {
              color: '#43a047',
              fontSize: "small"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }), " ", status_text) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12___default.a, {
            style: {
              color: '#D3302F',
              fontSize: "small"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            },
            __self: this
          }), " ", status_text))));
        }
      }
    }, {
      label: 'Action',
      name: 'roborts_status',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          let project_id = tableMeta.rowData[0];

          if ('undefined' === typeof value) {} else {
            const status = 1 === parseInt(value) ? true : false;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 335
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
              control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IOSSwitch, {
                checked: status,
                onChange: this.handleChange.bind(this),
                value: project_id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 338
                },
                __self: this
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 336
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HtmlTooltip, {
              style: {
                backgroundColor: "#fff"
              },
              title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
                className: "status_tooltip",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 348
                },
                __self: this
              }, typeof tableMeta.rowData[3] != 'undefined' || null != tableMeta.rowData[3] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 350
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 351
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12___default.a, {
                style: {
                  color: tableMeta.rowData[3].sitemap_xml === 1 ? '#43a047' : '#D3302F',
                  fontSize: "small"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 351
                },
                __self: this
              }), "  Sitemap"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 352
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12___default.a, {
                style: {
                  color: tableMeta.rowData[3].admin_status === 1 ? '#43a047' : '#D3302F',
                  fontSize: "small"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 352
                },
                __self: this
              }), "  Admin URL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 353
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12___default.a, {
                style: {
                  color: tableMeta.rowData[3].robots_status === 1 ? '#43a047' : '#D3302F',
                  fontSize: "small"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 353
                },
                __self: this
              }), "  Robots"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 354
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12___default.a, {
                style: {
                  color: tableMeta.rowData[3].https_status === 1 ? '#43a047' : '#D3302F',
                  fontSize: "small"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 354
                },
                __self: this
              }), "  SSL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 355
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_12___default.a, {
                style: {
                  color: tableMeta.rowData[3].captcha_status === 1 ? '#43a047' : '#D3302F',
                  fontSize: "small"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 355
                },
                __self: this
              }), "  Captcha")) : ""),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 345
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              "aria-label": "settings",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 362
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_9___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 363
              },
              __self: this
            }))));
          }
        }
      }
    }];
    const classes = this.props.classes;
    const _this$state = this.state,
          data = _this$state.data,
          page = _this$state.page,
          count = _this$state.count,
          isLoading = _this$state.isLoading,
          rowsPerPage = _this$state.rowsPerPage;
    const options = {
      filter: false,
      filterType: 'checkbox',
      download: false,
      print: false,
      viewColumns: false,
      sort: false,
      //selectableRows: 'none',
      responsive: 'stacked',
      serverSide: true,
      rowsPerPage: rowsPerPage,
      rowsPerPageOptions: [10],
      count: count,
      page: page,
      searchText: this.state.searchText,
      customToolbarSelect: (selectedRows, displayData, setSelectedRows) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.iconContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: 'Delete Projects',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.iconButton,
        onClick: this.handleDeleteProject.bind(this, selectedRows, displayData),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      })))),
      customToolbar: () => {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CustomToolbar__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          },
          __self: this
        });
      },
      onTableChange: (action, tableState) => {
        switch (action) {
          case 'changePage':
            if (tableState.searchText == null) {
              tableState.searchText = '';
            }

            this.setState({
              searchText: tableState.searchText
            });
            this.changePage(tableState.page, tableState.searchText);
            break;

          case 'search':
            if (tableState.searchText == null) {
              tableState.searchText = '';
            }

            this.setState({
              searchText: tableState.searchText
            });
            this.changePage(tableState.page, tableState.searchText);
            break;

          default:
            return;
        }
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_pace_progress__WEBPACK_IMPORTED_MODULE_15___default.a, {
      color: "#3f51b5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mui_datatables__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        component: 'span',
        variant: 'body2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, "Project Reports"), isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {
        size: 24,
        style: {
          marginLeft: 15,
          position: 'relative',
          top: 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      })),
      data: data,
      columns: columns,
      options: options,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(defaultToolbarSelectStyles, {
  name: 'ProjectsViews'
})(ProjectsViews));

/***/ }),

/***/ "./src/views/RobotsReports.js":
/*!************************************!*\
  !*** ./src/views/RobotsReports.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RobotsHistoryReport; });
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/RobotsReports.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    marginTop: "50px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  diff_links: {
    backgroundColor: "yellow",
    marginBottom: "5px"
  }
}));
function RobotsHistoryReport(props) {
  const reportData = props.reportData;
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
        _React$useState2 = Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        expanded = _React$useState2[0],
        setExpanded = _React$useState2[1];

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, Object.keys(reportData).length == 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.sitemapMsg) : reportData.map(Data => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: 'panel-main-' + Data.id + 'bh-header',
    expanded: expanded === Data.id,
    onChange: handleChange(Data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }),
    "aria-controls": "panel1bh-content",
    id: 'panel' + Data.id + 'bh-header',
    className: "sitemap_Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: Data.robots_text_class,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Data.robots_diff_text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "sitemap_date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "sitemap_date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, Data.date))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: 'exp-panel-main-' + Data.id + 'bh-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Data.robots_data_diff.map(diff => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.diff_links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, diff)))))));
}

/***/ }),

/***/ "./src/views/SiteMapReport.js":
/*!************************************!*\
  !*** ./src/views/SiteMapReport.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMapReport; });
/* harmony import */ var _var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/views/SiteMapReport.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    marginTop: "50px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  diff_links: {
    backgroundColor: "yellow",
    marginBottom: "5px"
  }
}));
function SiteMapReport(props) {
  const reportData = props.reportData;
  const classes = useStyles();

  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
        _React$useState2 = Object(_var_vagrant_md_www_sitemap_wp_public_html_wp_content_themes_sitemonitor_react_src_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        expanded = _React$useState2[0],
        setExpanded = _React$useState2[1];

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, Object.keys(reportData).length == 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.sitemapMsg) : reportData.map(Data => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: 'panel-main-' + Data.id + 'bh-header',
    expanded: expanded === Data.id,
    onChange: handleChange(Data.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }),
    "aria-controls": "panel1bh-content",
    id: 'panel' + Data.id + 'bh-header',
    className: "sitemap_Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: Data.sitemap_text_class,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Data.sitemap_diff_text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "sitemap_date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "sitemap_date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, Data.date))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: 'exp-panel-main-' + Data.id + 'bh-header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Data.sitemap_diff_data.map(diff => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.diff_links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, diff)))))));
}

/***/ }),

/***/ "./src/views/logo.png":
/*!****************************!*\
  !*** ./src/views/logo.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.3d149670.png";

/***/ }),

/***/ "./src/views/style.css":
/*!*****************************!*\
  !*** ./src/views/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/vagrant-md/www/sitemap_wp/public_html/wp-content/themes/sitemonitor/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map