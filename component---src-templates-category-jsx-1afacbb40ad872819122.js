webpackJsonp([0x7600c7af1a80],{65:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.MediaOverlay=t.Media=void 0;var r=n(89),a=o(r),i=n(90),l=o(i);t.default=a.default,t.Media=a.default,t.MediaOverlay=l.default},55:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=o(l),s=n(56),c=o(s),f=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return u.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},u.default.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return u.default.createElement(c.default,{key:e.title,postInfo:e})})))},t}(u.default.Component);t.default=f,e.exports=t.default},56:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=o(l),s=n(35),c=o(s),f=n(22),d=o(f),p=n(34),h=(o(p),n(50)),m=(o(h),n(21)),y=o(m),b=n(24),v=(o(b),n(16)),w=o(v),g=n(65),E=o(g),_=n(68),O=o(_);n(63);var x=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.state={mobile:!0},o.handleResize=o.handleResize.bind(o),o}return i(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},t.prototype.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t,o=e.cover.startsWith("/")?"/pocket-mci"+e.cover:e.cover,r=t?162:225;return u.default.createElement(c.default,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},u.default.createElement(w.default,{style:{textDecoration:"none"},to:e.path},u.default.createElement(E.default,{style:{backgroundImage:"url("+o+")",height:r+"px"},className:"post-preview-cover"},u.default.createElement(g.MediaOverlay,null,u.default.createElement(d.default,{title:e.title})))),u.default.createElement(y.default,{expandable:n},e.excerpt,u.default.createElement(O.default,{tags:e.tags})))},t}(l.Component);t.default=x,e.exports=t.default},63:function(e,t){},250:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),u=o(l),s=n(20),c=o(s),f=n(55),d=o(f),p=n(13),h=o(p),m=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.pathContext.category,t=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"category-container"},u.default.createElement(c.default,null,u.default.createElement("title",null,'Posts in category "'+e+'" | '+h.default.siteTitle),u.default.createElement("link",{rel:"canonical",href:h.default.siteUrl+"/categories/"+e})),u.default.createElement(d.default,{postEdges:t}))},t}(u.default.Component);t.default=m;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-category-jsx-1afacbb40ad872819122.js.map