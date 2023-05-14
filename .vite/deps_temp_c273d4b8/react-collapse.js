import {
  __commonJS,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/react-collapse/lib/Collapse.js
var require_Collapse = __commonJS({
  "node_modules/react-collapse/lib/Collapse.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Collapse = void 0;
    var _react = _interopRequireDefault(require_react());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Collapse = function(_React$Component) {
      _inherits(Collapse2, _React$Component);
      var _super = _createSuper(Collapse2);
      function Collapse2(props) {
        var _this;
        _classCallCheck(this, Collapse2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "timeout", void 0);
        _defineProperty(_assertThisInitialized(_this), "container", void 0);
        _defineProperty(_assertThisInitialized(_this), "content", void 0);
        _defineProperty(_assertThisInitialized(_this), "onResize", function() {
          clearTimeout(_this.timeout);
          if (!_this.container || !_this.content) {
            return;
          }
          var _this$props = _this.props, isOpened = _this$props.isOpened, checkTimeout = _this$props.checkTimeout;
          var containerHeight = Math.floor(_this.container.clientHeight);
          var contentHeight = Math.floor(_this.content.clientHeight);
          var isFullyOpened = isOpened && Math.abs(contentHeight - containerHeight) <= 1;
          var isFullyClosed = !isOpened && Math.abs(containerHeight) <= 1;
          if (isFullyOpened || isFullyClosed) {
            _this.onRest({
              isFullyOpened,
              isFullyClosed,
              isOpened,
              containerHeight,
              contentHeight
            });
          } else {
            _this.onWork({
              isFullyOpened,
              isFullyClosed,
              isOpened,
              containerHeight,
              contentHeight
            });
            _this.timeout = setTimeout(function() {
              return _this.onResize();
            }, checkTimeout);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onRest", function(_ref) {
          var isFullyOpened = _ref.isFullyOpened, isFullyClosed = _ref.isFullyClosed, isOpened = _ref.isOpened, containerHeight = _ref.containerHeight, contentHeight = _ref.contentHeight;
          if (!_this.container || !_this.content) {
            return;
          }
          var hasOpened = isOpened && _this.container.style.height === "".concat(contentHeight, "px");
          var hasClosed = !isOpened && _this.container.style.height === "0px";
          if (hasOpened || hasClosed) {
            _this.container.style.overflow = isOpened ? "initial" : "hidden";
            _this.container.style.height = isOpened ? "auto" : "0px";
            var onRest = _this.props.onRest;
            if (onRest) {
              onRest({
                isFullyOpened,
                isFullyClosed,
                isOpened,
                containerHeight,
                contentHeight
              });
            }
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onWork", function(_ref2) {
          var isFullyOpened = _ref2.isFullyOpened, isFullyClosed = _ref2.isFullyClosed, isOpened = _ref2.isOpened, containerHeight = _ref2.containerHeight, contentHeight = _ref2.contentHeight;
          if (!_this.container || !_this.content) {
            return;
          }
          var isOpenining = isOpened && _this.container.style.height === "".concat(contentHeight, "px");
          var isClosing = !isOpened && _this.container.style.height === "0px";
          if (isOpenining || isClosing) {
            return;
          }
          _this.container.style.overflow = "hidden";
          _this.container.style.height = isOpened ? "".concat(contentHeight, "px") : "0px";
          var onWork = _this.props.onWork;
          if (onWork) {
            onWork({
              isFullyOpened,
              isFullyClosed,
              isOpened,
              containerHeight,
              contentHeight
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onRefContainer", function(container) {
          _this.container = container;
        });
        _defineProperty(_assertThisInitialized(_this), "onRefContent", function(content) {
          _this.content = content;
        });
        if (props.initialStyle) {
          _this.initialStyle = props.initialStyle;
        } else {
          _this.initialStyle = props.isOpened ? {
            height: "auto",
            overflow: "initial"
          } : {
            height: "0px",
            overflow: "hidden"
          };
        }
        return _this;
      }
      _createClass(Collapse2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.onResize();
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var _this$props2 = this.props, theme = _this$props2.theme, isOpened = _this$props2.isOpened, children = _this$props2.children;
          return children !== nextProps.children || isOpened !== nextProps.isOpened || Object.keys(theme).some(function(c) {
            return theme[c] !== nextProps.theme[c];
          });
        }
      }, {
        key: "getSnapshotBeforeUpdate",
        value: function getSnapshotBeforeUpdate() {
          if (!this.container || !this.content) {
            return null;
          }
          if (this.container.style.height === "auto") {
            var contentHeight = this.content.clientHeight;
            this.container.style.height = "".concat(contentHeight, "px");
          }
          return null;
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.onResize();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearTimeout(this.timeout);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props3 = this.props, theme = _this$props3.theme, children = _this$props3.children, isOpened = _this$props3.isOpened;
          return _react["default"].createElement("div", {
            ref: this.onRefContainer,
            className: theme.collapse,
            style: this.initialStyle,
            "aria-hidden": !isOpened
          }, _react["default"].createElement("div", {
            ref: this.onRefContent,
            className: theme.content
          }, children));
        }
      }]);
      return Collapse2;
    }(_react["default"].Component);
    exports.Collapse = Collapse;
    _defineProperty(Collapse, "defaultProps", {
      theme: {
        collapse: "ReactCollapse--collapse",
        content: "ReactCollapse--content"
      },
      initialStyle: void 0,
      onRest: void 0,
      onWork: void 0,
      checkTimeout: 50
    });
  }
});

// node_modules/react-collapse/lib/UnmountClosed.js
var require_UnmountClosed = __commonJS({
  "node_modules/react-collapse/lib/UnmountClosed.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UnmountClosed = void 0;
    var _react = _interopRequireDefault(require_react());
    var _Collapse = require_Collapse();
    var _excluded = ["isOpened"];
    var _excluded2 = ["isOpened"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var UnmountClosed = function(_React$PureComponent) {
      _inherits(UnmountClosed2, _React$PureComponent);
      var _super = _createSuper(UnmountClosed2);
      function UnmountClosed2(props) {
        var _this;
        _classCallCheck(this, UnmountClosed2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "onWork", function(_ref) {
          var isOpened = _ref.isOpened, rest = _objectWithoutProperties(_ref, _excluded);
          _this.setState({
            isResting: false,
            isOpened
          });
          var onWork = _this.props.onWork;
          if (onWork) {
            onWork(_objectSpread({
              isOpened
            }, rest));
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onRest", function(_ref2) {
          var isOpened = _ref2.isOpened, rest = _objectWithoutProperties(_ref2, _excluded2);
          _this.setState({
            isResting: true,
            isOpened,
            isInitialRender: false
          });
          var onRest = _this.props.onRest;
          if (onRest) {
            onRest(_objectSpread({
              isOpened
            }, rest));
          }
        });
        _defineProperty(_assertThisInitialized(_this), "getInitialStyle", function() {
          var _this$state = _this.state, isOpened = _this$state.isOpened, isInitialRender = _this$state.isInitialRender;
          if (isInitialRender) {
            return isOpened ? {
              height: "auto",
              overflow: "initial"
            } : {
              height: "0px",
              overflow: "hidden"
            };
          }
          return {
            height: "0px",
            overflow: "hidden"
          };
        });
        _this.state = {
          isResting: true,
          isOpened: props.isOpened,
          isInitialRender: true
        };
        return _this;
      }
      _createClass(UnmountClosed2, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var isOpened = this.props.isOpened;
          if (prevProps.isOpened !== isOpened) {
            this.setState({
              isResting: false,
              isOpened,
              isInitialRender: false
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state2 = this.state, isResting = _this$state2.isResting, isOpened = _this$state2.isOpened;
          return isResting && !isOpened ? null : _react["default"].createElement(_Collapse.Collapse, _extends({}, this.props, {
            initialStyle: this.getInitialStyle(),
            onWork: this.onWork,
            onRest: this.onRest
          }));
        }
      }]);
      return UnmountClosed2;
    }(_react["default"].PureComponent);
    exports.UnmountClosed = UnmountClosed;
    _defineProperty(UnmountClosed, "defaultProps", {
      onWork: void 0,
      onRest: void 0
    });
  }
});

// node_modules/react-collapse/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-collapse/lib/index.js"(exports, module) {
    var _require = require_Collapse();
    var Collapse = _require.Collapse;
    var _require2 = require_UnmountClosed();
    var UnmountClosed = _require2.UnmountClosed;
    module.exports = UnmountClosed;
    UnmountClosed.Collapse = Collapse;
    UnmountClosed.UnmountClosed = UnmountClosed;
  }
});
export default require_lib();
//# sourceMappingURL=react-collapse.js.map
