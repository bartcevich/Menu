exports.id = 844;
exports.ids = [844];
exports.modules = {

/***/ 7496:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8782, 23))

/***/ }),

/***/ 7246:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5748))

/***/ }),

/***/ 5748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(1089);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(8360);
// EXTERNAL MODULE: ./src/app/style.module.css
var style_module = __webpack_require__(4446);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(5870);
// EXTERNAL MODULE: ./src/components/Navigation/styles.module.scss
var styles_module = __webpack_require__(9730);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.203e1856.png","height":68,"width":101,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AWyFF+zu6+kL+ucA/i3OEgDlMRQA+RMjAC/o4AHsBQb6AYxZRPjTDQUH/vsUAPDp7wD4AQEAGxEOAP8A8ADdBfj9AXyEUPXw7h0K/v0G//T18gD//PoAAwMIAAUB7AEzEq36AZqOXfjS3gsH+wAIAPf28wD09/cA8vf8ADIU8wA1Dbf8AZR5VO6t0dUKFB0J/t/bAQE1DBEA+AHjAArp/AE16AL6lMNLxrSKkQMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(8195);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(7877);
;// CONCATENATED MODULE: ./src/components/Navigation/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Navigation = ()=>{
    const [isTop, setIsTop] = (0,react_.useState)(false);
    const [isMobile, setIsMobile] = (0,react_.useState)(false);
    const [isMenuOpen, setIsMenuOpen] = (0,react_.useState)(false);
    const [showFirstLink, setShowFirstLink] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        let lastScrollY = window.scrollY;
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            //console.log("1=", lastScrollY, currentScrollY);
            if (currentScrollY > lastScrollY) {
                setIsTop(true);
            //console.log("2=", isTop);
            } else if (currentScrollY < lastScrollY) {
                setIsTop(false);
            //console.log("3=", isTop);
            }
            lastScrollY = currentScrollY;
        };
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 743);
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        handleScroll();
        handleResize();
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [
        isTop
    ]);
    (0,react_.useEffect)(()=>{
        if (isMobile) {
            const timer = setInterval(()=>{
                setShowFirstLink((prevValue)=>!prevValue);
            }, 2000);
            return ()=>clearInterval(timer);
        }
    }, [
        isMobile
    ]);
    const handleMenuToggle = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const [openMenu1, setOpenMenu1] = (0,react_.useState)(false);
    const handleClick1 = ()=>{
        setOpenMenu1((prevValue)=>!prevValue);
    };
    const [openMenu2, setOpenMenu2] = (0,react_.useState)(false);
    const handleClick2 = ()=>{
        setOpenMenu2((prevValue)=>!prevValue);
    };
    const handleClick3 = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: `${(styles_module_default()).siteNav} ${isTop ? (styles_module_default()).top : ""} ${isMobile ? (styles_module_default()).mobile : ""}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).logoContainer,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (styles_module_default()).logo,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                alt: "image"
                            })
                        }),
                        (!isMobile || showFirstLink) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: (styles_module_default()).siteName,
                            href: "/",
                            children: [
                                "Список продуктов",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "в пару кликов"
                            ]
                        }),
                        (!isMobile || !showFirstLink) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            className: `${(styles_module_default()).siteName} ${(styles_module_default()).readyMenu}`,
                            href: "/favoriteMenu",
                            children: [
                                "Готовые варианты",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "меню для вас"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: (styles_module_default()).faSearch,
                    // onClick={handleClick3}
                    href: "/cookFromAvailable",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                        icon: free_solid_svg_icons/* faSearch */.wn1
                    })
                }),
                (!isMobile || isMenuOpen) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).mobileMenu,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: (styles_module_default()).dropdownTitle,
                            onClick: handleClick3,
                            href: "/",
                            children: "О сайте"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).dropdown,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).dropdownTitle,
                                    onClick: handleClick2,
                                    children: "Советы нутрициолога:"
                                }),
                                openMenu2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: !isMobile ? (styles_module_default()).dropdownContent : (styles_module_default()).dropdownContentMobile,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/programs",
                                            children: "Витамины - какие, когда и сколько?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "О чём молчат анализы?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "Диеты - мифы и реальность?"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (styles_module_default()).dropdown,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (styles_module_default()).dropdownTitle,
                                    onClick: handleClick1,
                                    children: "Полезные статьи:"
                                }),
                                openMenu1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: !isMobile ? (styles_module_default()).dropdownContent : (styles_module_default()).dropdownContentMobile,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/programs",
                                            children: "правильное питание"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "организация пространства на кухне"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "лайфхаки по хранению продуктов"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "советы по выбору продуктов"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(styles_module_default()).burgerMenu} ${isMenuOpen ? (styles_module_default()).active : ""}
        }`,
                    onClick: handleMenuToggle,
                    children: "☰"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navigation = (Navigation);

// EXTERNAL MODULE: ./src/components/Footer/styles.module.scss
var Footer_styles_module = __webpack_require__(4458);
var Footer_styles_module_default = /*#__PURE__*/__webpack_require__.n(Footer_styles_module);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(8715);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_styles_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (Footer_styles_module_default()).navigation,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "О САЙТЕ"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "СОВЕТЫ НУТРИЦИОЛОГА"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/programs",
                                            children: "Витамины - какие, когда и сколько?"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "О чём молчат анализы?"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "Диеты - мифы и реальность?"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "ПОЛЕЗНЫЕ СТАТЬИ"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/programs",
                                            children: "правильное питание"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "организация пространства на кухне"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "лайфхаки по хранению продуктов"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "советы по выбору продуктов"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (Footer_styles_module_default()).text,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (Footer_styles_module_default()).textH3,
                        children: "Есть вопросы? Хотите создать сайт?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_styles_module_default()).icon,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (Footer_styles_module_default()).textH3,
                                children: "Свяжитесь с разработчиком:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "icon",
                                href: "https://t.me/elektrikcss",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: (Footer_styles_module_default()).faGithub,
                                    "aria-hidden": "true",
                                    title: "Andrei Bartsevich, Telegram",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                        icon: free_brands_svg_icons/* faTelegram */.Uv8
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "icon",
                                href: "https://www.linkedin.com/in/андрей-барцевич-935588260",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-brands fa-linkedin",
                                    "aria-hidden": "true",
                                    title: "Andrei Bartsevich, LinkedIn Profile",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                        icon: free_brands_svg_icons/* faLinkedin */.D9H
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "icon",
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa-brands fa-instagram",
                                    "aria-hidden": "true",
                                    title: "Prime99, WhatApp",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                        icon: free_brands_svg_icons/* faInstagram */.Zzi
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "icon",
                                href: "https://t.me/elektrikcss",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: (Footer_styles_module_default()).faGithub,
                                    "aria-hidden": "true",
                                    title: "Prime99, Telegram",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                        icon: free_brands_svg_icons/* faGithub */.zhw
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/context/IngredientsContext.tsx
var IngredientsContext = __webpack_require__(4700);
;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 










const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    const [count, setCount] = (0,react_.useState)(1);
    const backgroundClass = count === 1 ? (style_module_default()).background1 : count === 2 ? (style_module_default()).background2 : (style_module_default()).background3;
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(IngredientsContext/* MenuProvider */.K, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${backgroundClass}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (style_module_default()).container_button,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (style_module_default()).container_text,
                                    children: "выберите фон"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (style_module_default()).button,
                                    onClick: ()=>setCount(count < 2 ? 1 : count - 1),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                        icon: free_solid_svg_icons/* faCaretSquareLeft */.cir
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (style_module_default()).button,
                                    children: count
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (style_module_default()).button,
                                    onClick: ()=>setCount(count > 2 ? 3 : count + 1),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                        icon: free_solid_svg_icons/* faCaretSquareRight */.lLQ
                                    })
                                })
                            ]
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 4700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ MenuProvider),
/* harmony export */   d: () => (/* binding */ IngredientsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ IngredientsContext,MenuProvider auto */ 

const IngredientsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    userChoice: {},
    setUserChoice: ()=>{}
});
const MenuProvider = ({ children })=>{
    const [userChoice, setUserChoice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            userChoice,
            setUserChoice
        }), [
        userChoice,
        setUserChoice
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedIngredientHistory5 = localStorage.getItem("ingredientHistory5");
        if (savedIngredientHistory5) {
            const parsedIngredientHistory = JSON.parse(savedIngredientHistory5);
            setUserChoice(parsedIngredientHistory);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof userChoice === "object" && userChoice !== null && Object.keys(userChoice).length > 0) {
            localStorage.setItem("ingredientHistory5", JSON.stringify(userChoice));
        }
    }, [
        userChoice
    ]);
    console.log("userChoice=", userChoice);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IngredientsContext.Provider, {
        value: value,
        children: children
    });
};


/***/ }),

/***/ 4446:
/***/ ((module) => {

// Exports
module.exports = {
	"background1": "style_background1__xKFdQ",
	"background2": "style_background2__bmLXe",
	"container_button": "style_container_button__H6AZf",
	"button": "style_button__J7F4z"
};


/***/ }),

/***/ 4458:
/***/ ((module) => {

// Exports
module.exports = {
	"fontHelveticaNeueCyr": "HelveticaNeueCyr,sans-serif",
	"fontBarlow": "Barlow,sans-serif",
	"colorRedLight": "#ef233c",
	"colorRedDark": "#d90429",
	"wrapper": "styles_wrapper__DNW26",
	"navigation": "styles_navigation__voDac",
	"text": "styles_text__TT9Ba",
	"textH3": "styles_textH3__rlKHH",
	"icon": "styles_icon__p72xp"
};


/***/ }),

/***/ 9730:
/***/ ((module) => {

// Exports
module.exports = {
	"fontHelveticaNeueCyr": "HelveticaNeueCyr,sans-serif",
	"fontBarlow": "Barlow,sans-serif",
	"colorRedLight": "#ef233c",
	"colorRedDark": "#d90429",
	"siteNav": "styles_siteNav___vrCW",
	"siteName": "styles_siteName__4RuWs",
	"top": "styles_top__e_Qe4",
	"mobile": "styles_mobile__2abX7",
	"logoContainer": "styles_logoContainer__zqAg1",
	"readyMenu": "styles_readyMenu__Y9Wup",
	"dropdownTitle": "styles_dropdownTitle__e_nkq",
	"menuLinks": "styles_menuLinks__U9WWE",
	"burgerMenu": "styles_burgerMenu__iASrR",
	"mobileMenu": "styles_mobileMenu__5l3uC",
	"logo": "styles_logo__sONaQ",
	"dropdownContent": "styles_dropdownContent__N_hIO",
	"dropdownContentMobile": "styles_dropdownContentMobile__gyrZB",
	"active": "styles_active__Pyknv",
	"faSearch": "styles_faSearch__PFSnm"
};


/***/ }),

/***/ 4232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\andrei\work\codewars\shoppingCart2\Menu\src\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 8360:
/***/ (() => {



/***/ })

};
;