// A-I-M-U/date-manipulator v1.0.1 license: MIT
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.dateM = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var matchDate = /(dd)|(mm)|(yyyy)|(hh|:mm|ss)|(day)|(month)/gi;
  var matchTime = /(hh)|(mm)|(ss)/gi;

  function getTime(str, format, date) {
    if (!str) return undefined;
    format = format == '12' || format == '24' ? format : '24';
    var _ref = [date.getHours(), date.getMinutes(), date.getSeconds()],
        hours = _ref[0],
        min = _ref[1],
        sec = _ref[2];
    str = str.replace(matchTime, function (m) {
      if (m == 'hh') {
        if (format == '12' && (hours > 12 || hours === 0)) {
          return hours === 0 ? hours + 12 : hours - 12;
        } else {
          return hours;
        }
      }

      if (m == 'mm') {
        return min;
      }

      if (m == 'ss') {
        return sec;
      }
    });

    if (format == '12') {
      str = str + (hours > 12 ? ' PM' : ' AM');
    }

    return str;
  }

  function timePassed(begin, end) {
    if ('object' !== _typeof(begin) || 'object' !== _typeof(end)) return 0;
    if ('function' !== typeof begin.unixTime || 'function' !== typeof end.unixTime) return 0;
    return (end.unixTime() - begin.unixTime()) / 1000 / 60 / 60 / 24;
  }

  var data = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  function current(arg) {
    var _this = this,
        _getTime2;

    arg.trim();
    arg = arg.toLowerCase();
    var date;

    if (/:/.test(arg) && /(dd)|(mm)|(yyyy)/.test(arg)) {
      var _getTime;

      if (!/\s/.test(arg)) return (_getTime = getTime(arg, this.hFormat, this.date)) !== null && _getTime !== void 0 ? _getTime : arg;
      date = arg.slice(0, arg.lastIndexOf(' '));
      arg = arg.slice(arg.lastIndexOf(' '), arg.length);
    } else {
      date = arg;
      arg = null;
    }

    date = date.replace(matchDate, function (m) {
      if (m == 'dd') {
        return _this.date.getDate();
      }

      if (m == 'mm') {
        return _this.date.getMonth() + 1;
      }

      if (m == 'yyyy') {
        return _this.date.getFullYear();
      }

      if (m == 'day') {
        return data.days[_this.date.getDay()];
      }

      if (m == 'month') {
        return data.months[_this.date.getMonth()];
      }
    });
    arg = date + ((_getTime2 = getTime(arg, this.hFormat, this.date)) !== null && _getTime2 !== void 0 ? _getTime2 : '');
    return arg;
  }

  function unixTime() {
    return this.date.getTime();
  }

  function dateM() {
    var args = Array.from(arguments);
    var opt = args.pop();
    this.hFormat = 'object' === _typeof(opt) ? opt.hFormat : '24';

    if ('object' === _typeof(opt) && args.length > 1) {
      this.date = _construct(Date, _toConsumableArray(args));
    } else if (args.length == 0) {
      this.date = new Date();
    } else {
      this.date = _construct(Date, _toConsumableArray(args).concat([opt]));
    }
  }
  dateM.prototype.current = current;
  dateM.prototype.unixTime = unixTime;

  var date_m = function date_m() {
    return _construct(dateM, Array.prototype.slice.call(arguments));
  };

  date_m.timePassed = timePassed;

  return date_m;

})));
