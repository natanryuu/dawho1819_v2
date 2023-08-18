'use strict';
function ownKeys(t, e) {
  var n,
    o = Object.keys(t);
  return (
    Object.getOwnPropertySymbols &&
      ((n = Object.getOwnPropertySymbols(t)),
      e &&
        (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
      o.push.apply(o, n)),
    o
  );
}
function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? ownKeys(Object(n), !0).forEach(function (e) {
          _defineProperty(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : ownKeys(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
  }
  return t;
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _typeof(e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return 'Map' ===
      (n = 'Object' === n && e.constructor ? e.constructor.name : n) ||
      'Set' === n
      ? Array.from(e)
      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      ? _arrayLikeToArray(e, t)
      : void 0;
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function _iterableToArrayLimit(e, t) {
  var n =
    null == e
      ? null
      : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
  if (null != n) {
    var o,
      r,
      a = [],
      i = !0,
      s = !1;
    try {
      for (
        n = n.call(e);
        !(i = (o = n.next()).done) && (a.push(o.value), !t || a.length !== t);
        i = !0
      );
    } catch (e) {
      (s = !0), (r = e);
    } finally {
      try {
        i || null == n.return || n.return();
      } finally {
        if (s) throw r;
      }
    }
    return a;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
Array.prototype.indexOf ||
  (Array.prototype.indexOf = function (e, t) {
    var n,
      o = Object(this),
      r = o.length >>> 0,
      t = Number(t) || 0;
    if (null === this) throw new TypeError('"this" is null or not defined');
    if (0 == r) return -1;
    if (r <= (t = Math.abs(t) === 1 / 0 ? 0 : t)) return -1;
    for (n = Math.max(0 <= t ? t : r - Math.abs(t), 0); n < r; ) {
      if (o.hasOwnProperty(n) && o[n] === e) return n;
      n += 1;
    }
    return -1;
  }),
  Function.prototype.bind ||
    (Function.prototype.bind = function (e) {
      var t, n, o, r;
      if ('function' != typeof this)
        throw new TypeError(
          'Function.prototype.bind - what is trying to be bound is not callable'
        );
      return (
        (t = Array.prototype.slice.call(arguments, 1)),
        (o = function () {}),
        (r = function () {
          return n.apply(
            this instanceof o ? this : e,
            t.concat(Array.prototype.slice.call(arguments))
          );
        }),
        (n = this).prototype && (o.prototype = this.prototype),
        (r.prototype = new o()),
        r
      );
    }),
  String.prototype.endsWith ||
    (String.prototype.endsWith = function (e) {
      return -1 !== this.indexOf(e, this.length - e.length);
    }),
  document.getElementsByClassName ||
    (document.getElementsByClassName = function (e) {
      return this.querySelectorAll('.' + e);
    }),
  (window.hasOwnProperty =
    window.hasOwnProperty || Object.prototype.hasOwnProperty),
  (function (z) {
    var e,
      c = (z._bw =
        z._bw ||
        function () {
          c.callMethods.apply(c, arguments);
        });
    if (
      ((z.ga =
        z.ga ||
        function () {
          (e.q = e.q || []).push(arguments);
        }),
      ((e = z.ga).l = +new Date()),
      (z.bw = z._bw),
      c && c.init)
    )
      throw new Error('Loading multiple times for pixel.js');
    (c.init = !0),
      (c.modules = {}),
      (c.resolvedModules = {}),
      (c.getModules = function (e) {
        return (
          c.resolvedModules[e] || (c.resolvedModules[e] = c.modules[e]()),
          c.resolvedModules[e]
        );
      }),
      (c.ensureModuleRegistered = function (e, t) {
        c.modules[e] || (c.modules[e] = t);
      }),
      c.ensureModuleRegistered('utils', function () {
        return (
          function () {
            function n(e, t) {
              try {
                z._bw
                  .getModules('eventsLogging')
                  .sendError({ from: e, message: t }, 1e-4);
              } catch (e) {}
            }
            function s() {
              return (
                'c' +
                z._bw.it +
                'x' +
                'xxxxxxxxx'.replace(/[x]/g, function () {
                  return ((16 * Math.random()) | 0).toString(16);
                })
              );
            }
            var v, y, l, b, _, w, r, d, a, i, p, E, k, T, g, I, c, e, o;
            function f(e) {
              '[object Array]' !== l.call(e) ||
                e.sent ||
                ((e.sent = !0), v.callMethods.apply(v, e));
            }
            function m(e) {
              var t = 0,
                n = z[e],
                o = 0;
              if (0 < v.pixelIdList.length) {
                for (; t < n.length; ) n[t].sent || o++, t++;
                if (((t = 0), 1 < o)) {
                  for (var r, a, i, s = n, c = 0, u = []; c < s.length; )
                    '[object Array]' !== l.call(s[c]) ||
                      s[c].sent ||
                      ((s[c].sent = !0), u.push(s[c])),
                      c++;
                  for (a in (r = u.reduce(function (e, t) {
                    return (e[(a = t[0])] = e[a] || []), e[a].push(t), e;
                  }, {})))
                    if (((i = r[a]), 'trackSingle' === a))
                      v.callMethods.apply(v, ['trackSingleCompact', i]);
                    else
                      for (c = 0; c < i.length; c++)
                        v.callMethods.apply(v, i[c]);
                } else for (; t < n.length; ) f(n[t]), t++;
              } else
                for (; t < n.length; ) {
                  if ('init' === n[t][0]) return f(n[t]), void m(e);
                  t++;
                }
            }
            function h() {
              var e = v.getModules('utils'),
                t = v.getModules('storageUtils');
              return {
                pixel_version: v.version,
                url: e.getUrl(),
                referrer: e.getReferrer(),
                is_in_iframe: e.inIframe(),
                ga_id: v.gid,
                first_party_cookie: v.fp,
                fbp: t.getCookie('_fbp'),
                fbc: t.getCookie('_fbc'),
              };
            }
            function x(e, t, n, o, r) {
              var a = new (v.getModules('initParamList').createParamlist)();
              return (
                o && a.addRange(o),
                a.append('advertiser_id', e),
                a.append('browser', h()),
                a.append('event_name', t),
                a.append('init_time', v.it),
                a.append('ubid', v.ubid),
                a.append('custom_data', n),
                a.append('develop_mode', v.developMode),
                a.append('gt', v.gt),
                a.append('aggt', v.aggt),
                a.appendList('api_event_names', r),
                _ ||
                  (1948 < a.toQueryString().length &&
                    a.truncate('referral', 1e3, '__T'),
                  1948 < a.toQueryString().length &&
                    a.truncate('url', 1e3, '__T')),
                a
              );
            }
            function u(e) {
              var t = e.url || '',
                e = e.logNoiseEvent || function () {},
                t = -1 < t.indexOf('//gtm-msr.appspot.com');
              return t && e('gtm-msr'), t;
            }
            function P(e) {
              var t = e.userAgent || '',
                e = e.logNoiseEvent || function () {},
                t =
                  new RegExp(/(Googlebot\/[0-9]+.[0-9]+)/).test(t) &&
                  -1 < t.indexOf('www.google.com/bot.html');
              return t && e('Google Bot'), t;
            }
            function M(e) {
              var t = e.userAgent || '',
                e = e.logNoiseEvent || function () {},
                t =
                  -1 < t.indexOf('AdsBot-Google') &&
                  -1 < t.indexOf('www.google.com/adsbot.html');
              return t && e('AdsBot-Google'), t;
            }
            function S(e) {
              var t = e.userAgent || '',
                e = e.logNoiseEvent || function () {},
                t =
                  -1 < t.indexOf('AdsBot-Google-Mobile') &&
                  -1 < t.indexOf('www.google.com/mobile/adsbot.html');
              return t && e('AdsBot-Google-Mobile'), t;
            }
            function C(e, t) {
              function n(e) {
                t('noise', e);
              }
              var o = !1;
              try {
                var r,
                  a = navigator.userAgent,
                  i = {
                    gtm: u({ url: e.getUrl(), logNoiseEvent: n }),
                    googleBot: P({ userAgent: a, logNoiseEvent: n }),
                    googleAdsBot: M({ userAgent: a, logNoiseEvent: n }),
                    googleMobileAdsBot: S({ userAgent: a, logNoiseEvent: n }),
                  };
                for (r in i) i[r] && (o = !0);
              } catch (e) {
                t('isGoogleBotOrGTM error', e.message);
              }
              return o;
            }
            function O(e) {
              var t = navigator.userAgent,
                t =
                  -1 < t.indexOf('Baiduspider') &&
                  -1 < t.indexOf('www.baidu.com/search/spider.html');
              return t && e('noise', 'Baiduspider'), t;
            }
            function A(e) {
              var t = navigator.userAgent,
                t =
                  -1 < t.indexOf('Applebot') &&
                  -1 < t.indexOf('www.apple.com/go/applebot');
              return t && e('noise', 'Applebot'), t;
            }
            function L(e) {
              var t = -1 < navigator.userAgent.indexOf('CloudWatchSynthetics');
              return t && e('noise', 'CloudWatchSynthetics'), t;
            }
            function N(e) {
              var t = navigator.userAgent,
                t =
                  -1 < t.indexOf('Yahoo Ad monitoring') &&
                  -1 <
                    t.indexOf(
                      'help.yahoo.com/kb/yahoo-ad-monitoring-SLN24857.html'
                    );
              return t && e('noise', 'Yahoo-Ad-monitoring'), t;
            }
            function j(e, t) {
              return !!C(e, t) || !!O(t) || !!A(t) || !!L(t) || !!N(t);
            }
            function R(e, t) {
              return e.slice(e.length - 1 - t).join('.');
            }
            function B(e, t, n) {
              var o,
                r = new Date(Date.now() + Math.round(7776e6)).toUTCString();
              document.cookie =
                e +
                '=' +
                t +
                ';expires=' +
                r +
                ';domain=.' +
                n +
                ';' +
                ((e = z.chrome),
                (t = z.navigator),
                (r = t.vendor),
                (n = void 0 !== z.opr),
                (o = -1 < t.userAgent.indexOf('Edge')),
                (t = t.userAgent.match('CriOS')) ||
                null == e ||
                'Google Inc.' !== r ||
                !1 != n ||
                !1 != o
                  ? ''
                  : 'SameSite=Lax;') +
                'path=/';
            }
            function G(e, t, n) {
              var o,
                r,
                a,
                i,
                s = !1,
                c = document.getElementsByTagName('script')[0];
              function u(e) {
                s || ((s = !0), t(e), clearTimeout(o));
              }
              'function' == typeof z.postMessage &&
              'object' === _typeof(z.localStorage)
                ? ((r = 'message'),
                  (i = function e(t) {
                    var n, o, r;
                    t &&
                      'string' == typeof t.origin &&
                      0 <= t.origin.indexOf('//img.scupio.com') &&
                      t.data &&
                      'string' == typeof t.data &&
                      ((t = t.data || t.message),
                      (n = 'message'),
                      (r = e),
                      (o = z).removeEventListener
                        ? o.removeEventListener(n, r, !1)
                        : o.detachEvent && o.detachEvent('on' + n, r),
                      u(t));
                  }),
                  (a = z).addEventListener
                    ? a.addEventListener(r, i, !1)
                    : a.attachEvent && a.attachEvent('on' + r, i),
                  ((a = document.createElement('iframe')).src = d + e),
                  ((r = a.style).display = 'none'),
                  (r.position = 'absolute'),
                  (r.visibility = 'hidden'),
                  c.parentNode.insertBefore(a, c))
                : u(null),
                (o = setTimeout(u, n));
            }
            function D(e, t) {
              return (t >>> e) | (t << (32 - e));
            }
            function F(e, t) {
              return (e[15 & t] +=
                (D(17, (n = e[(t + 14) & 15])) ^ D(19, n) ^ (n >>> 10)) +
                e[(t + 9) & 15] +
                (D(7, (n = e[(t + 1) & 15])) ^ D(18, n) ^ (n >>> 3)));
              var n;
            }
            function q(e, t) {
              var n = (65535 & e) + (65535 & t);
              return (
                ((e = (e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
              );
            }
            function U() {
              for (
                var e = void 0,
                  t = void 0,
                  n = void 0,
                  o = void 0,
                  r = void 0,
                  a = void 0,
                  i = void 0,
                  s = void 0,
                  c = void 0,
                  u = void 0,
                  n = E[0],
                  o = E[1],
                  r = E[2],
                  a = E[3],
                  i = E[4],
                  s = E[5],
                  c = E[6],
                  u = E[7],
                  l = 0;
                l < 16;
                l++
              )
                g[l] =
                  T[3 + (l << 2)] |
                  (T[2 + (l << 2)] << 8) |
                  (T[1 + (l << 2)] << 16) |
                  (T[l << 2] << 24);
              for (l = 0; l < 64; l++)
                (e =
                  u +
                  (D(6, i) ^ D(11, i) ^ D(25, i)) +
                  ((i & s) ^ (~i & c)) +
                  p[l]),
                  (e += l < 16 ? g[l] : F(g, l)),
                  (t =
                    (D(2, n) ^ D(13, n) ^ D(22, n)) +
                    ((n & o) ^ (n & r) ^ (o & r))),
                  (u = c),
                  (c = s),
                  (s = i),
                  (i = q(a, e)),
                  (a = r),
                  (r = o),
                  (o = n),
                  (n = q(e, t));
              (E[0] += n),
                (E[1] += o),
                (E[2] += r),
                (E[3] += a),
                (E[4] += i),
                (E[5] += s),
                (E[6] += c),
                (E[7] += u);
            }
            function W(e, t) {
              (k[0] = k[1] = 0),
                (E[0] = 1779033703),
                (E[1] = 3144134277),
                (E[2] = 1013904242),
                (E[3] = 2773480762),
                (E[4] = 1359893119),
                (E[5] = 2600822924),
                (E[6] = 528734635),
                (E[7] = 1541459225);
              var n = e,
                o = e.length,
                r = void 0,
                a = 0,
                i = (k[0] >> 3) & 63,
                s = 63 & o;
              for (
                (k[0] += o << 3) < o << 3 && k[1]++, k[1] += o >> 29, r = 0;
                r + 63 < o;
                r += 64
              ) {
                for (var c = i; c < 64; c++) T[c] = n.charCodeAt(a++);
                U(), (i = 0);
              }
              for (c = 0; c < s; c++) T[c] = n.charCodeAt(a++);
              var u = (k[0] >> 3) & 63;
              if (((T[u++] = 128), u <= 56))
                for (var l = u; l < 56; l++) T[l] = 0;
              else {
                for (l = u; l < 64; l++) T[l] = 0;
                U();
                for (u = 0; u < 56; u++) T[u] = 0;
              }
              if (
                ((T[56] = (k[1] >>> 24) & 255),
                (T[57] = (k[1] >>> 16) & 255),
                (T[58] = (k[1] >>> 8) & 255),
                (T[59] = 255 & k[1]),
                (T[60] = (k[0] >>> 24) & 255),
                (T[61] = (k[0] >>> 16) & 255),
                (T[62] = (k[0] >>> 8) & 255),
                (T[63] = 255 & k[0]),
                U(),
                !t)
              ) {
                for (var d = '', p = 0; p < 8; p++)
                  for (var g = 28; 0 <= g; g -= 4)
                    d += I.charAt((E[p] >>> g) & 15);
                return d;
              }
              for (var f = t, m = 0, h = 0; h < 8; h++)
                for (var v = 28; 0 <= v; v -= 4)
                  f[m++] = I.charCodeAt((E[h] >>> v) & 15);
            }
            function Y(e) {
              var t = document.createElement('iframe');
              return (
                (t.src = 'https://img.scupio.com/html/fbi.html?' + e),
                ((e = t.style).display = 'none'),
                (e.position = 'absolute'),
                (e.visibility = 'hidden'),
                t
              );
            }
            ((e = this).inIframe = function () {
              try {
                return z.self !== z.top;
              } catch (e) {
                return !0;
              }
            }),
              (e.getUrl = function () {
                var e;
                try {
                  'about:blank' === (e = z.top.location.href) &&
                    (e = z.location.href);
                } catch (e) {
                  n('getUrl', e.message);
                }
                return e || z.location.href;
              }),
              (e.getSubDomain = function (e, t) {
                return e.slice(e.length - 1 - t).join('.');
              }),
              (e.getReferrer = function () {
                var e,
                  t = '';
                try {
                  (e = z.top) &&
                    e.document &&
                    e.document.referrer &&
                    (t = e.document.referrer);
                } catch (e) {
                  n('getReferrer', e.message);
                }
                return t;
              }),
              (e.getMetadata = function () {
                for (
                  var e,
                    t,
                    n = /^(og:)/,
                    o = document.getElementsByTagName('title'),
                    r = document.getElementsByTagName('meta'),
                    a = document.querySelector(
                      'script[type="application/ld+json"]'
                    ),
                    i = {
                      Meta: { title: 0 < o.length ? o[0].text : '' },
                      OpenGraph: {},
                      'JSON-LD': a && a.text,
                    },
                    s = 0,
                    c = r.length;
                  s < c;
                  s++
                )
                  (e =
                    (t = r[s]).getAttribute('name') ||
                    t.getAttribute('property')),
                    (t = t.getAttribute('content')),
                    e &&
                      ((e = e.toLowerCase()),
                      n.test(e) ? (i.OpenGraph[e] = t) : (i.Meta[e] = t));
                return i;
              }),
              (e.now = function () {
                return Number(new Date());
              }),
              (e.getParamFromUrl = function (e, t) {
                var n;
                try {
                  if ((n = RegExp('[?|&]' + t + '=(.+?)(&|$)').exec(e)))
                    return decodeURIComponent(n[1]);
                } catch (e) {}
                return '';
              }),
              (e.generateFirstPartyCookie = s),
              (e.getBridgewellFirstPartyCookie = function (e, t) {
                var n = z._bw.getModules('storageUtils'),
                  o = '';
                try {
                  var r = n.getCookie(t),
                    a = _slicedToArray(n.getCookieSetByKey(e), 2),
                    i = a[0],
                    o = a[1];
                  0 === i.size
                    ? ('' !== r
                        ? (o = r)
                        : ((o = s()), n.setLoopDomainCookie(t, o)),
                      n.setLoopDomainCookie(e, o))
                    : '' === r
                    ? (n.resetNoneAttributeCookie(e),
                      n.setLoopDomainCookie(e, o),
                      n.setLoopDomainCookie(t, o))
                    : (1 < i.size && n.resetNoneAttributeCookie(e),
                      o !== r && (n.setLoopDomainCookie(e, r), (o = r)));
                } catch (e) {
                  (a = 'utils-getBridgewellFirstPartyCookie'), (t = e);
                  try {
                    z._bw.getModules('eventsLogging').logError(a, t);
                  } catch (e) {}
                }
                return o;
              }),
              (e.insertBeforeScriptNode = function (e) {
                var t = document.getElementsByTagName('script')[0];
                t.parentNode.insertBefore(e, t);
              }),
              (e = this),
              (v = z._bw),
              (y = v.getModules('eventsLogging')),
              (l = Object.prototype.toString),
              (b = y.logBotEvent),
              (_ =
                10 <=
                (function () {
                  var e,
                    t,
                    n = 10;
                  try {
                    (-1 === (e = z.navigator.userAgent).indexOf('MSIE') &&
                      !document.documentMode) ||
                      ('Microsoft Internet Explorer' === navigator.appName
                        ? (t = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})'))
                        : 'Netscape' === navigator.appName &&
                          (t = new RegExp(
                            'Trident/.*rv:([0-9]{1,}[.0-9]{0,})'
                          )),
                      t && null !== t.exec(e) && (n = parseFloat(RegExp.$1)));
                  } catch (e) {}
                  return n;
                })()),
              (e.flushQueue = function (e) {
                for (; e.length; ) v.callMethods.apply(v, e.shift());
              }),
              (e.isAutoConfig = function (e) {
                return -1 === v.disabledAutoConfigList.indexOf(e);
              }),
              (e.generateBaseParamList = function (e) {
                var t = new (v.getModules('initParamList').createParamlist)();
                return t.append('user_data', e.userData), t;
              }),
              (e.packageParam = x),
              (e.makeUpThirdPartyData = function (e) {
                var t = e.thirdPartyTrackingData,
                  n = e.customData,
                  o = e.pixelId,
                  r = e.eventName,
                  a = [],
                  i = [],
                  s = [],
                  c = [],
                  u = [],
                  l = 0,
                  d = n.value;
                if (t) {
                  if (n.contents)
                    for (
                      var p = /^-?\d+\.?\d*$/, g = 0;
                      g < n.contents.length;
                      g++
                    )
                      a.push(n.contents[g].item_id.toString()),
                        i.push(n.contents[g].quantity),
                        s.push(n.contents[g].price),
                        c.push(n.contents[g].item_name),
                        u.push(n.contents[g].categories),
                        p.test(n.contents[g].quantity) &&
                          p.test(n.contents[g].price) &&
                          (l +=
                            Number(n.contents[g].quantity) *
                            Number(n.contents[g].price));
                  if (t.google && t.google[0])
                    for (g = 0; g < t.google.length; g++) {
                      var f = t.google[g],
                        m = f.conversion_labels;
                      if (m) {
                        m =
                          m[
                            (n.tags && n.tags[0]) ||
                              (function (e, t) {
                                if (
                                  ((e = e.split('-')[0]),
                                  (t = {
                                    AddToCart: 'cart',
                                    InitiateCheckout: 'checkout',
                                    Purchase: 'buy',
                                    CompleteRegistration: 'signup',
                                    Lead: 'lead',
                                    AddToWishlist: 'addtowishlist',
                                    AddPaymentInfo: 'addpaymentinfo',
                                  }[t]))
                                )
                                  return t + '_' + e;
                              })(o, r)
                          ];
                        m &&
                          ((f.parameter = f.parameter || {}),
                          (f.parameter.send_to = m),
                          (0 < l || d) &&
                            ((f.parameter.currency = n.currency || 'TWD'),
                            (f.parameter.value = d || l)),
                          (f.parameter.transaction_id =
                            n.transaction_id || ''));
                      } else if (
                        ((0 < l || d) && (f.parameter.value = d || l),
                        n.contents)
                      ) {
                        var h = [],
                          v = {};
                        for (g = 0; g < a.length; g++)
                          (v.id = a[g]),
                            f.google_business_vertical &&
                              (v.google_business_vertical =
                                f.google_business_vertical),
                            h.push(v);
                        f.parameter.items = h;
                      }
                    }
                  if (t.facebook && t.facebook[0]) {
                    var y = [
                      'ViewContent',
                      'Purchase',
                      'AddToCart',
                      'InitiateCheckout',
                      'AddToWishlist',
                      'AddPaymentInfo',
                      'Subscribe',
                    ];
                    for (g = 0; g < t.facebook.length; g++) {
                      var b = t.facebook[g];
                      n.contents &&
                        ((b.parameter.content_ids = a),
                        (b.parameter.content_type = 'product')),
                        n.tags && n.tags[0] && (b.parameter.cv = n.tags[0]),
                        (0 < l || d) &&
                          0 <= y.indexOf(b.event_name) &&
                          ((b.parameter.currency = n.currency || 'TWD'),
                          (b.parameter.value = d || l));
                    }
                    c && c[0] && (b.parameter.content_name = c[0]),
                      u &&
                        u[0] &&
                        u[0][0] &&
                        (b.parameter.content_category = u[0][0]);
                  }
                  if (t.yahoo && t.yahoo[0])
                    for (g = 0; g < t.yahoo.length; g++) {
                      var _ = t.yahoo[g];
                      n.contents &&
                        (_.parameter.properties.qstrings.product_id =
                          a.join(',')),
                        (0 < l || d) &&
                          (_.parameter.properties.qstrings.gv = d || l);
                    }
                  if (t.line_dpa && t.line_dpa[0])
                    for (g = 0; g < t.line_dpa.length; g++) {
                      var w = t.line_dpa[g];
                      n.contents &&
                        ((w.parameter.itemIds = a),
                        (w.parameter.price = s.join(',')),
                        (w.parameter.quantity = i.join(','))),
                        (w.parameter.currency = n.currency || 'TWD');
                    }
                }
                return t;
              }),
              (e.sendEvent = function (t, e, n, o, r, a) {
                var i = 'ajax-sendEvent@v2.12.1',
                  s = 'https://pixel-api.scupio.com/v0/event',
                  c = v.getModules('utils'),
                  u = c.makeUpThirdPartyData,
                  l = _ ? 'POST' : 'GET',
                  o = x(t, e, n, o),
                  d = y.logError,
                  p = {
                    success: function (e) {
                      v.developMode && console.log(e),
                        e &&
                          (e.cookie_matching_tags &&
                            c.cookieMatching(e.cookie_matching_tags),
                          e.third_party_tracking_data &&
                            c.trackThirdPartyEvent(
                              t,
                              e.third_party_tracking_data,
                              !1,
                              d
                            ),
                          e.efxc && c.metaCookieMatching());
                    },
                    fail: function (e, t) {
                      d(i, 'fail: ' + t.statusText);
                    },
                    ontimeout: function () {
                      d(i, 'timeout of 5000 ms');
                    },
                    onerror: function (e, t) {
                      d(i, 'error: ' + t.statusText);
                    },
                    onabort: function () {
                      d(i, 'abort');
                    },
                  };
                if (!j(c, b)) {
                  if (navigator && navigator.sendBeacon && r)
                    try {
                      for (
                        var g = new FormData(),
                          f = o._paramList,
                          m = u({
                            thirdPartyTrackingData: a,
                            customData: n,
                            pixelId: t,
                            eventName: e,
                          }),
                          h = 0;
                        h < f.length;
                        h++
                      )
                        g.append(f[h].name, f[h].value);
                      return (
                        a.facebook &&
                          a.facebook[0] &&
                          g.append('fbeid', a.facebook[0].parameter.event_id),
                        m && c.trackThirdPartyEvent(t, m, r, d),
                        void navigator.sendBeacon(
                          'https://pixel-api.scupio.com/v0/event',
                          g
                        )
                      );
                    } catch (e) {
                      d('sendBeacon', e);
                    }
                  c.ajax(
                    s,
                    { data: o.toQueryString(), method: l, timeout: 5e3 },
                    p
                  );
                }
              }),
              (e.sendCompactEvent = function (e, t) {
                var n,
                  o = v.getModules('initParamList').createParamlist,
                  r = v.getModules('utils'),
                  o = new o(),
                  a = 'ajax-sendCompactEvent@v2.12.1',
                  i = _ ? 'POST' : 'GET',
                  s = y.logError,
                  c = [],
                  u = [];
                for (
                  t && o.addRange(t),
                    o.append('browser', h()),
                    o.append('init_time', v.it),
                    o.append('ubid', v.ubid),
                    o.append('develop_mode', v.developMode),
                    o.append('gt', v.gt),
                    o.append('aggt', v.aggt),
                    n = 0;
                  n < e.length;
                  n++
                )
                  c.push({
                    advertiser_id: e[n][0],
                    event_name: e[n][1],
                    custom_data: e[n][2],
                  }),
                    u.push(e[n][0]);
                o.append('event_data', c),
                  (t = {
                    success: function (e) {
                      v.developMode && console.log(e),
                        e &&
                          (e.cookie_matching_tags &&
                            r.cookieMatching(e.cookie_matching_tags),
                          e.third_party_tracking_data &&
                            r.trackThirdPartyEvent(
                              u[0],
                              e.third_party_tracking_data,
                              !1,
                              s
                            ),
                          e.efxc && r.metaCookieMatching());
                    },
                    fail: function (e, t) {
                      s(a, 'fail: ' + t.statusText);
                    },
                    ontimeout: function () {
                      s(a, 'timeout of 5000 ms');
                    },
                    onerror: function (e, t) {
                      s(a, 'error: ' + t.statusText);
                    },
                    onabort: function () {
                      s(a, 'abort');
                    },
                  }),
                  j(r, b) ||
                    r.ajax(
                      'https://pixel-api.scupio.com/v1/event',
                      { data: o.toQueryString(), method: i, timeout: 5e3 },
                      t
                    );
              }),
              (e.sendTrackingApi = function (e, t, n, o, r, a) {
                var i = 'ajax-sendTrackingApi@v2.12.1',
                  s = v.getModules('utils'),
                  c = _ ? 'POST' : 'GET',
                  e = x(e, t, o, r, n),
                  u = y.logError,
                  t = {
                    success: function (e) {
                      v.developMode && console.log(e),
                        e && a(e.api_third_party_tracking_data);
                    },
                    fail: function (e, t) {
                      u(i, 'fail: ' + t.statusText);
                    },
                    ontimeout: function () {
                      u(i, 'timeout of 5000 ms');
                    },
                    onerror: function (e, t) {
                      u(i, 'error: ' + t.statusText);
                    },
                    onabort: function () {
                      u(i, 'abort');
                    },
                  };
                j(s, b) ||
                  s.ajax(
                    'https://pixel-api.scupio.com/v0/trackingapi',
                    { data: e.toQueryString(), method: c, timeout: 5e3 },
                    t
                  );
              }),
              (e.useGET = function () {
                _ = !1;
              }),
              (e.hackPush = function (t) {
                var e = (z[t] = z[t] || []);
                e.ready ||
                  (m(t),
                  (e.push = function (e) {
                    Array.prototype.push.apply(this, [e]),
                      !(function (e) {
                        var t = 0,
                          n = z[e];
                        if (!n.allsent) {
                          for (; t < n.length; ) {
                            if ('[object Array]' === l.call(n[t]) && !n[t].sent)
                              return;
                            t++;
                          }
                          n.allsent = !0;
                        }
                        return 1;
                      })(t)
                        ? m(t)
                        : f(e);
                  }),
                  (e.ready = !0));
              }),
              (e.flushHackPushedDataLayer = m),
              (e.isGTM = u),
              (e.isGoogleAdsBot = M),
              (e.isGoogleBot = P),
              (e.isGoogleBotOrGTM = C),
              (e.isGoogleMobileAdsBot = S),
              (e.isBaiduSpider = O),
              (e.isAppleBot = A),
              (e.isAmazonBot = L),
              (e.isYahooBot = N),
              (e.isBot = j),
              (e = this),
              (w = z._bw),
              (e.trackGoogleEvent = function (e, t, n, o) {
                var r = document.getElementsByTagName('script')[0],
                  a = document.createElement('script'),
                  i = (z.dataLayer = z.dataLayer || []);
                function s() {
                  i.push(arguments);
                }
                (a.src = 'https://www.googletagmanager.com/gtag/js?id=' + e),
                  (a.async = !0),
                  r.parentNode.insertBefore(a, r),
                  s('js', new Date()),
                  o
                    ? (s('config', e, { allow_enhanced_conversions: !0 }),
                      s('set', 'user_data', o))
                    : s('config', e),
                  t && s('event', t, n);
              }),
              (e.trackFbEvent = function (e, t, n, o, r, a) {
                var i = w.getModules('utils'),
                  s = w.getModules('storageUtils'),
                  c = new (w.getModules('initParamList').createParamlist)(),
                  u = document.createElement('img'),
                  l = document.getElementsByTagName('script')[0];
                if (
                  (delete n.event_id,
                  c.append('id', e),
                  c.append('ev', t),
                  c.append('dl', i.getUrl()),
                  c.append('rl', i.getReferrer()),
                  c.append('if', i.inIframe()),
                  c.append('ts', new Date().valueOf()),
                  c.append('cd', n),
                  c.append('eid', o),
                  '' === (e = s.getCookie('_fbp')))
                ) {
                  for (
                    var d,
                      p = '' + Math.round(2147483647 * Math.random()),
                      g = z.location.hostname.split('.'),
                      f =
                        'number' == typeof Date.now()
                          ? Date.now()
                          : new Date().getTime(),
                      m = 0;
                    m < g.length;
                    m++
                  )
                    (d = R(g, m)), B('_fbp', ['fb', m, f, p].join('.'), d);
                  e = s.getCookie('_fbp');
                }
                c.append('fbp', e);
                var h,
                  v,
                  t = z.location.href,
                  y = (i = w.getModules('utils'))
                    .getParamFromUrl(t, 'fbclid')
                    .trim(),
                  b = z.location.hostname.split('.'),
                  _ =
                    'number' == typeof Date.now()
                      ? Date.now()
                      : new Date().getTime();
                if (
                  !(
                    '' !=
                      (y =
                        '' == y
                          ? i
                              .getParamFromUrl(document.referrer, 'fbclid')
                              .trim()
                          : y) && 500 < y.length
                  ) &&
                  '' != y
                )
                  for (h = 0; h < b.length; h++)
                    (v = R(b, h)), B('_fbc', ['fb', h, _, y].join('.'), v);
                if (
                  ('' !== (n = s.getCookie('_fbc')) && c.append('fbc', n),
                  (o = 'https://www.facebook.com/tr/?' + c.toQueryString()),
                  r)
                )
                  try {
                    navigator.sendBeacon(o);
                  } catch (e) {
                    a('sendBeacon', e);
                  }
                else
                  (u.src = o),
                    (u.style.display = 'none'),
                    l.parentNode.insertBefore(u, l);
              }),
              (e.trackTagtooEvent = function (e) {
                var t = document.createElement('script'),
                  n = document.getElementsByTagName('script')[0];
                (z.tagtoo_advertiser_id = e),
                  (t.type = 'text/javascript'),
                  (t.async = !0),
                  (t.src = 'https://ad.tagtoo.co/media/ad/track.js'),
                  n.parentNode.insertBefore(t, n);
              }),
              (e.trackLineAPEvents = function (e, t, n) {
                var o, r, a;
                (o = z),
                  (r = document),
                  (a = r.createElement('script')),
                  (r = r.getElementsByTagName('script')[0]),
                  (o._ltq = o._ltq || []),
                  (o._lt =
                    o._lt ||
                    function () {
                      o._ltq.push(arguments);
                    }),
                  (a.async = 1),
                  (a.src =
                    'https://d.line-scdn.net/n/line_tag/public/release/v1/lt.js'),
                  r.parentNode.insertBefore(a, r),
                  z._lt('init', { customerType: 'lap', tagId: e }),
                  n ? z._lt('send', t, n, [e]) : z._lt('send', t, [e]);
              }),
              (e.trackYahooEvents = function (e, t) {
                var n, o, r, a, i, s, c;
                t &&
                  'projectId' in t &&
                  ((n = z),
                  (o = document),
                  (r = 'dotq'),
                  (i = o.createElement('script')),
                  (s = n[r]),
                  (o = o.getElementsByTagName('script')[0]),
                  (c = o.parentNode),
                  (n[r] = n[r] || []),
                  n[r].push({
                    projectId: t.projectId,
                    properties: { pixelId: e },
                  }),
                  (i.src = 'https://s.yimg.com/wi/ytc.js'),
                  (i.async = !0),
                  (i.onload = i.onreadystatechange =
                    function () {
                      if (
                        !this.readyState ||
                        'complete' == this.readyState ||
                        'loaded' == this.readyState
                      )
                        try {
                          (a = YAHOO.ywa.I13N.fireBeacon),
                            (n[r] = []),
                            (n[r].push = function (e) {
                              a([e]);
                            }),
                            a(s);
                        } catch (e) {}
                    }),
                  c.insertBefore(i, o),
                  'properties' in t &&
                    'qstrings' in t.properties &&
                    z.dotq.push(t));
              }),
              (e.trackLineDPAEvents = function (e, t, n) {
                var o, r, a;
                (o = z),
                  (r = document),
                  (a = r.createElement('script')),
                  (r = r.getElementsByTagName('script')[0]),
                  (o._ltq = o._ltq || []),
                  (o._lt =
                    o._lt ||
                    function () {
                      o._ltq.push(arguments);
                    }),
                  (a.async = 1),
                  (a.src =
                    'https://d.line-scdn.net/n/line_tag/public/release/v1/lt.js'),
                  r.parentNode.insertBefore(a, r),
                  z._lt('init', { customerType: 'lap', tagId: e }),
                  n
                    ? z._lt('send', t, n, { dpa: !0 }, [e])
                    : z._lt('send', t, [e]);
              }),
              (e.trackThirdPartyEvent = function (e, t, n, o) {
                var r,
                  a,
                  i,
                  s,
                  c,
                  u = w.getModules('utils'),
                  l = t.google || [],
                  d = t.facebook || [],
                  p = t.tagtoo || [],
                  g = t.line || [],
                  f = t.yahoo || [],
                  m = t.line_dpa || [];
                for (
                  w.googleUserDataTable && (r = w.googleUserDataTable[e]),
                    c = 0;
                  c < l.length;
                  c++
                )
                  (i = (a = l[c]).event_name),
                    (s = a.parameter),
                    u.shouldSendGoogleEvent(i, s) &&
                      u.trackGoogleEvent(a.account_id, i, s, r);
                for (c = 0; c < d.length; c++)
                  (i = (a = d[c]).event_name),
                    u.shouldSendFbEvent(e, i) &&
                      u.trackFbEvent(
                        a.account_id,
                        i,
                        a.parameter,
                        a.parameter.event_id,
                        n,
                        o
                      );
                for (c = 0; c < p.length; c++)
                  (a = p[c]), u.trackTagtooEvent(a.account_id);
                for (c = 0; c < g.length; c++)
                  (a = g[c]),
                    u.trackLineAPEvents(
                      a.account_id,
                      a.event_name,
                      a.parameter
                    );
                for (c = 0; c < f.length; c++)
                  (a = f[c]), u.trackYahooEvents(a.account_id, a.parameter);
                for (c = 0; c < m.length; c++)
                  (a = m[c]),
                    u.trackLineDPAEvents(
                      a.account_id,
                      a.event_name,
                      a.parameter
                    );
              }),
              (e.shouldSendFbEvent = function (e, t) {
                var n = w.getModules('configStore'),
                  o = n.getFacebookEventConfig(e),
                  r = o.shouldSendFbUniqueEvent;
                return (
                  'object' !== _typeof(o) ||
                  t !== o.uniqueEvent ||
                  (n.setShouldSendFbUniqueEvent(e, !1), r)
                );
              }),
              (e.shouldSendGoogleEvent = function (e, t) {
                return void 0 === e || !(void 0 === t);
              }),
              (e = this),
              (r = z._bw),
              (d = 'https://img.scupio.com/html/ls.html?mid='),
              (a = {
                LOCAL_STORAGE_ID: 'sclsid',
                GYM_TRIP_ID: 'gym_tripid',
                GYM_TRIP_RAKUTEN_ID: 'af_gid',
                GYM_AGG_ID: 'bwaggid',
              }),
              (i = { STORAGE_UTILS: 'storageUtils', UTILS: 'utils' }),
              (e.getUBID = function (n, e) {
                function t(e) {
                  var t;
                  (t = e),
                    r
                      .getModules(i.STORAGE_UTILS)
                      .setFirstPartyLocalStorageItem(a.LOCAL_STORAGE_ID, t),
                    n(e);
                }
                var o = r
                  .getModules(i.STORAGE_UTILS)
                  .getFirstPartyLocalStorageItem(a.LOCAL_STORAGE_ID);
                o ? n(o) : G(0, t, e || 2e3);
              }),
              (e.processGYMTripId = function () {
                var e = r.getModules(i.STORAGE_UTILS),
                  t = r.getModules(i.UTILS);
                (r.gt =
                  r.gt ||
                  t.getParamFromUrl(z.location.search, a.GYM_TRIP_ID) ||
                  t.getParamFromUrl(t.getReferrer(), a.GYM_TRIP_ID) ||
                  e.getCookie(a.GYM_TRIP_RAKUTEN_ID) ||
                  e.getCookie(a.GYM_TRIP_ID)),
                  e.setCookie(a.GYM_TRIP_ID, r.gt),
                  (r.aggt =
                    r.aggt ||
                    t.getParamFromUrl(z.location.search, a.GYM_AGG_ID) ||
                    t.getParamFromUrl(t.getReferrer(), a.GYM_AGG_ID) ||
                    e.getCookie(a.GYM_AGG_ID)),
                  e.setCookie(a.GYM_AGG_ID, r.aggt);
              }),
              (e = this),
              (p = [
                1116352408, 1899447441, 3049323471, 3921009573, 961987163,
                1508970993, 2453635748, 2870763221, 3624381080, 310598401,
                607225278, 1426881987, 1925078388, 2162078206, 2614888103,
                3248222580, 3835390401, 4022224774, 264347078, 604807628,
                770255983, 1249150122, 1555081692, 1996064986, 2554220882,
                2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
                113926993, 338241895, 666307205, 773529912, 1294757372,
                1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
                3600352804, 4094571909, 275423344, 430227734, 506948616,
                659060556, 883997877, 958139571, 1322822218, 1537002063,
                1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
                2428436474, 2756734187, 3204031479, 3329325298,
              ]),
              (E = new Array(8)),
              (k = new Array(2)),
              (T = new Array(64)),
              (g = new Array(16)),
              (I = '0123456789abcdef'),
              (e.sha256hash = function (e) {
                var t =
                    !(1 < arguments.length && void 0 !== arguments[1]) ||
                    arguments[1],
                  n = arguments[2];
                if (null == e) return null;
                var o = e;
                return W(
                  (o = t
                    ? (function (e) {
                        for (
                          var t, n = '', o = void 0, r = 0;
                          r < e.length;
                          r++
                        )
                          (o = e.charCodeAt(r)),
                            (t = r + 1 < e.length ? e.charCodeAt(r + 1) : 0),
                            55296 <= o &&
                              o <= 56319 &&
                              56320 <= t &&
                              t <= 57343 &&
                              ((o = 65536 + ((1023 & o) << 10) + (1023 & t)),
                              r++),
                            o <= 127
                              ? (n += String.fromCharCode(o))
                              : o <= 2047
                              ? (n += String.fromCharCode(
                                  192 | ((o >>> 6) & 31),
                                  128 | (63 & o)
                                ))
                              : o <= 65535
                              ? (n += String.fromCharCode(
                                  224 | ((o >>> 12) & 15),
                                  128 | ((o >>> 6) & 63),
                                  128 | (63 & o)
                                ))
                              : o <= 2097151 &&
                                (n += String.fromCharCode(
                                  240 | ((o >>> 18) & 7),
                                  128 | ((o >>> 12) & 63),
                                  128 | ((o >>> 6) & 63),
                                  128 | (63 & o)
                                ));
                        return n;
                      })(e)
                    : o),
                  n
                );
              }),
              (e = this),
              (c = z._bw),
              (e.cookieMatching = function (e) {
                for (
                  var t = 'ajax-cookieMatching',
                    n = e || [],
                    o = n.length,
                    e = c.getModules('eventsLogging'),
                    r = c.getModules('utils'),
                    a = e.logError,
                    i = {
                      fail: function () {
                        a(t, 'fail');
                      },
                      ontimeout: function () {
                        a(t, 'timeout');
                      },
                      onerror: function () {
                        a(t, 'error');
                      },
                      onabort: function () {
                        a(t, 'abort');
                      },
                    },
                    s = 0;
                  s < o;
                  s++
                )
                  try {
                    r.ajax(
                      n[s].base_url,
                      { method: 'GET', timeout: 5e3, data: n[s].parameters },
                      i
                    );
                  } catch (e) {
                    a(t, 'error');
                  }
              }),
              (e.metaCookieMatching = function () {
                var e = c.getModules('utils'),
                  t = Y(
                    'id=588795092476391&ev=PageView&noscript=1&cb=' +
                      Math.random()
                  );
                e.insertBeforeScriptNode(t);
              }),
              (e.createBWIframeWithQuery = Y),
              (this.ajax = function (e, t, o) {
                if ('string' != typeof e || void 0 === t) return !1;
                var n,
                  r,
                  a,
                  i = new XMLHttpRequest(),
                  s = '',
                  c = 'function',
                  u = t.data,
                  l = Object.prototype.hasOwnProperty;
                if (
                  ((t.method = t.method || 'POST'),
                  (e = e + '?cb=' + Math.random()),
                  'string' != typeof u)
                )
                  for (n in u)
                    l.call(u, n) &&
                      (s && (s += '&'),
                      'string' == typeof u[n]
                        ? (s += n + '=' + encodeURIComponent(u[n]))
                        : (s +=
                            n +
                            '=' +
                            encodeURIComponent(JSON.stringify(u[n]))));
                else s = u;
                switch (t.method) {
                  case 'POST':
                    i.open(t.method, e, !0),
                      i.setRequestHeader(
                        'Content-Type',
                        'application/x-www-form-urlencoded; charset=UTF-8'
                      ),
                      i.setRequestHeader(
                        'Accept',
                        'application/json, text/javascript, */*'
                      ),
                      (i.withCredentials = !0),
                      (i.timeout = t.timeout || 1e3),
                      (i.onload = function (e) {
                        if (200 === i.status) {
                          var t = e.srcElement || e.target,
                            n = '';
                          if (o && _typeof(o.success) === c) {
                            try {
                              n = JSON.parse(t.response);
                            } catch (e) {}
                            n ? o.success(n) : o.success();
                          }
                        } else o && _typeof(o.fail) === c && o.fail(e, i);
                      }),
                      (i.onerror = function (e) {
                        o && _typeof(o.onerror) === c && o.onerror(e, i);
                      }),
                      (i.onabort = function (e) {
                        o && _typeof(o.onabort) === c && o.onabort(e);
                      }),
                      (i.ontimeout = function (e) {
                        o && _typeof(o.ontimeout) === c && o.ontimeout(e);
                      }),
                      i.send(s);
                    break;
                  case 'GET':
                    (r = document.createElement('script')),
                      (a = document.getElementsByTagName('script')[0]),
                      (r.src = e + '&' + s),
                      (r.async = 'boolean' != typeof t.async || t.async),
                      a.parentNode.insertBefore(r, a);
                }
              }),
              (e = this),
              (o = {}),
              (function o(r, a, i) {
                function s(t, e) {
                  if (!a[t]) {
                    if (!r[t]) {
                      var n = 'function' == typeof require && require;
                      if (!e && n) return n(t, !0);
                      if (c) return c(t, !0);
                      e = new Error("Cannot find module '" + t + "'");
                      throw ((e.code = 'MODULE_NOT_FOUND'), e);
                    }
                    n = a[t] = { exports: {} };
                    r[t][0].call(
                      n.exports,
                      function (e) {
                        return s(r[t][1][e] || e);
                      },
                      n,
                      n.exports,
                      o,
                      r,
                      a,
                      i
                    );
                  }
                  return a[t].exports;
                }
                for (
                  var c = 'function' == typeof require && require, e = 0;
                  e < i.length;
                  e++
                )
                  s(i[e]);
                return s;
              })(
                {
                  1: [
                    function (e, t, n) {
                      n.ENDPOINT = 'https://u.scupio.com/event';
                    },
                    {},
                  ],
                  2: [
                    function (e, t, n) {
                      Object.defineProperty(n, '__esModule', { value: !0 }),
                        (n.EventLogger = void 0);
                      var a =
                          Object.assign ||
                          function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n,
                                o = arguments[t];
                              for (n in o)
                                Object.prototype.hasOwnProperty.call(o, n) &&
                                  (e[n] = o[n]);
                            }
                            return e;
                          },
                        o = function (e, t, n) {
                          return t && s(e.prototype, t), n && s(e, n), e;
                        },
                        r = e('ajax'),
                        r = r && r.__esModule ? r : { default: r },
                        i = e('./../config');
                      function s(e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var o = t[n];
                          (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o);
                        }
                      }
                      var c = r.default.ajax;
                      function u(e, t) {
                        var n = this;
                        if (!(n instanceof u))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          );
                        (this.tagName = e),
                          (this.samplingRatio = (t && t.samplingRatio) || 1);
                      }
                      o(u, [
                        {
                          key: 'logInfo',
                          value: function (e, t, n) {
                            this.logWithPrefix('INFO', e, t, n);
                          },
                        },
                        {
                          key: 'logDebug',
                          value: function (e, t, n) {
                            this.logWithPrefix('DEBUG', e, t, n);
                          },
                        },
                        {
                          key: 'logWarning',
                          value: function (e, t, n) {
                            this.logWithPrefix('WARNING', e, t, n);
                          },
                        },
                        {
                          key: 'logError',
                          value: function (e, t, n) {
                            this.logWithPrefix('ERR', e, t, n);
                          },
                        },
                        {
                          key: 'logWithPrefix',
                          value: function (e, t, n, o) {
                            var e = (e || 'INFO') + '_' + this.tagName,
                              r = Math.random(),
                              o = o && o.samplingRatio;
                            r < (o = o || 0 === o ? o : this.samplingRatio) &&
                              ((r = e),
                              (o = a(
                                { from: t },
                                'string' == typeof n ? { message: n } : n
                              )),
                              (e =
                                'tag=' +
                                r +
                                '&log=' +
                                encodeURIComponent(JSON.stringify(o))),
                              c(i.ENDPOINT, { method: 'GET', data: e }));
                          },
                        },
                      ]),
                        (n.EventLogger = u);
                    },
                    { './../config': 1, ajax: 4 },
                  ],
                  3: [
                    function (n, e, t) {
                      !function (e) {
                        var t = n('./eventLogger');
                        e.EventLogger = t.EventLogger;
                      }.call(this, 'undefined' != typeof global ? global : o);
                    },
                    { './eventLogger': 2 },
                  ],
                  4: [
                    function (e, t, n) {
                      this.ajax = function (e, t, o) {
                        if ('string' != typeof e || void 0 === t) return !1;
                        var n,
                          r,
                          a,
                          i = new XMLHttpRequest(),
                          s = '',
                          c = 'function',
                          u = t.data,
                          l = Object.prototype.hasOwnProperty;
                        if (
                          ((t.method = t.method || 'POST'),
                          (e = e + '?cb=' + Math.random()),
                          'string' != typeof u)
                        )
                          for (n in u)
                            l.call(u, n) &&
                              (s && (s += '&'),
                              'string' == typeof u[n]
                                ? (s += n + '=' + encodeURIComponent(u[n]))
                                : (s +=
                                    n +
                                    '=' +
                                    encodeURIComponent(JSON.stringify(u[n]))));
                        else s = u;
                        switch (t.method) {
                          case 'POST':
                            i.open(t.method, e, !0),
                              i.setRequestHeader(
                                'Content-Type',
                                'application/x-www-form-urlencoded; charset=UTF-8'
                              ),
                              i.setRequestHeader(
                                'Accept',
                                'application/json, text/javascript, */*'
                              ),
                              (i.withCredentials = !0),
                              (i.timeout = t.timeout || 1e3),
                              (i.onload = function (e) {
                                if (200 === i.status) {
                                  var t = e.srcElement || e.target,
                                    n = '';
                                  if (o && _typeof(o.success) === c) {
                                    try {
                                      n = JSON.parse(t.response);
                                    } catch (e) {}
                                    n ? o.success(n) : o.success();
                                  }
                                } else o && _typeof(o.fail) === c && o.fail(e);
                              }),
                              (i.onerror = function (e) {
                                o && _typeof(o.onerror) === c && o.onerror(e);
                              }),
                              (i.onabort = function (e) {
                                o && _typeof(o.onabort) === c && o.onabort(e);
                              }),
                              (i.ontimeout = function (e) {
                                o &&
                                  _typeof(o.ontimeout) === c &&
                                  o.ontimeout(e);
                              }),
                              i.send(s);
                            break;
                          case 'GET':
                            (r = document.createElement('script')),
                              (a = document.getElementsByTagName('script')[0]),
                              (r.src = e + '&' + s),
                              (r.async =
                                'boolean' != typeof t.async || t.async),
                              a.parentNode.insertBefore(r, a);
                        }
                      };
                    },
                    {},
                  ],
                },
                {},
                [3]
              ),
              (e.EventLogger = o.EventLogger);
          }.bind((e = {}))(),
          e
        );
        var e;
      }),
      c.ensureModuleRegistered('storageUtils', function () {
        return (
          function () {
            var o, r, e;
            (e = this),
              (o = z.localStorage),
              (r =
                'object' === _typeof(o) &&
                null !== o &&
                'function' == typeof o.getItem &&
                'function' == typeof o.setItem),
              (e.getFirstPartyLocalStorageItem = function (e) {
                var t = '';
                try {
                  r && (t = o.getItem(e) || '');
                } catch (e) {}
                return t;
              }),
              (e.setFirstPartyLocalStorageItem = function (e, t) {
                var n = null != t;
                try {
                  r &&
                    n &&
                    0 <
                      (t = 'string' != typeof t ? JSON.stringify(t) : t)
                        .length &&
                    o.setItem(e, t);
                } catch (e) {}
              }),
              (e.removeFirstPartyLocalStorageItem = function (e) {
                try {
                  r && o.removeItem(e);
                } catch (e) {}
              }),
              ((e = this).getCookieSetByKey = function (e) {
                var t,
                  n,
                  o,
                  r = '',
                  a = new Set();
                try {
                  for (
                    n = (t = document.cookie.split(';')).length - 1;
                    0 <= n;

                  )
                    0 === (o = decodeURIComponent(t[n].trim())).indexOf(e) &&
                      '=' === o.charAt(e.length) &&
                      ((r = o.substring(e.length + 1, o.length)),
                      (r = decodeURIComponent(r)),
                      a.add(r)),
                      --n;
                } catch (e) {}
                return [a, r];
              }),
              (e.resetNoneAttributeCookie = function (e) {
                z._bw
                  .getModules('storageUtils')
                  .setCookie(e, '__deleted__', -864e6);
              }),
              (e.setLoopDomainCookie = function (e, t) {
                for (
                  var n,
                    o = z._bw.getModules('storageUtils'),
                    r = z._bw.getModules('utils'),
                    a = document.domain.split('.'),
                    i = 0;
                  i < a.length;
                  i++
                )
                  (n = r.getSubDomain(a, i)), o.setCookie(e, t, 864e6, '/', n);
              }),
              ((e = this).getCookie = function (e) {
                var t,
                  n,
                  o,
                  r = '';
                try {
                  for (
                    n = (t = document.cookie.split(';')).length - 1;
                    0 <= n;

                  )
                    0 === (o = decodeURIComponent(t[n].trim())).indexOf(e) &&
                      '=' === o.charAt(e.length) &&
                      (r = o.substring(e.length + 1, o.length)),
                      --n;
                } catch (e) {}
                return decodeURIComponent(r);
              }),
              (e.setCookie = function (e, t, n, o, r, a) {
                if (e && t)
                  try {
                    var i = encodeURIComponent(e) + '=' + encodeURIComponent(t),
                      s = '';
                    'number' == typeof n &&
                      ((s = new Date()).setSeconds(s.getSeconds() + n),
                      (s = '; expires=' + s.toUTCString())),
                      (o = o ? '; path=' + o : '; path=/'),
                      (r = r ? '; domain=' + r : ''),
                      (a = a ? '; secure=true' : ''),
                      (document.cookie = [i, s, o, r, a].join(''));
                  } catch (e) {}
              });
          }.bind((e = {}))(),
          e
        );
        var e;
      }),
      c.ensureModuleRegistered('configStore', function () {
        return (
          function () {
            var e, n, o;
            (e = this),
              ((n = {})[(o = 'facebookEvent')] = {}),
              (e.initFbEventConfig = function (e) {
                n[o][e] = n[o][e] || {
                  uniqueEvent: '',
                  shouldSendFbUniqueEvent: !0,
                };
              }),
              (e.getFacebookEventConfig = function (e) {
                return n[o][e];
              }),
              (e.setShouldSendFbUniqueEvent = function (e, t) {
                'boolean' == typeof t && (n[o][e].shouldSendFbUniqueEvent = t);
              }),
              (e.setFacebookEventConfig = function (e, t) {
                n[o][e] = t;
              });
          }.bind((e = {}))(),
          e
        );
        var e;
      }),
      c.ensureModuleRegistered('initParamList', function () {
        return (
          function () {
            function e() {
              this._paramList = [];
            }
            var t, a;
            (t = this),
              (a = 'deep'),
              (e.prototype.append = function (e, t) {
                return this._append(encodeURIComponent(e), t, a), this;
              }),
              (e.prototype.appendList = function (e, t) {
                var n,
                  o = '[';
                if (!t) return this;
                for (n = 0; n < t.length; n++)
                  (o = o + '"' + t[n] + '"'), t.length - 1 !== n && (o += ',');
                return (
                  (o += ']'), this._append(encodeURIComponent(e), o, a), this
                );
              }),
              (e.prototype._appendPrimitive = function (e, t) {
                null != t && this._paramList.push({ name: e, value: t });
              }),
              (e.prototype._appendObject = function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) &&
                    ('[object Array]' ===
                      Object.prototype.toString.call(t[n]) ||
                    '[object String]' ===
                      Object.prototype.toString.call(t[n]) ||
                    '[object Number]' === Object.prototype.toString.call(t[n])
                      ? this._append(
                          e + '[' + encodeURIComponent(n) + ']',
                          t[n],
                          'shallow'
                        )
                      : this._append(
                          e + '[' + encodeURIComponent(n) + ']',
                          t[n],
                          a
                        ));
              }),
              (e.prototype._append = function (e, t, n) {
                var o, r;
                (n = n || a),
                  (r = _typeof((o = t))),
                  null == o ||
                  'number' === r ||
                  'boolean' === r ||
                  'string' === r
                    ? this._appendPrimitive(e, t)
                    : n === a
                    ? this._appendObject(e, t)
                    : this._appendPrimitive(
                        e,
                        ((o = t),
                        'undefined' != typeof JSON &&
                        null !== JSON &&
                        JSON.stringify
                          ? JSON.stringify(o)
                          : Object.prototype.toString.call(o))
                      );
              }),
              (e.prototype.each = function (e) {
                for (var t, n = 0, o = this._paramList.length; n < o; n++)
                  (t = e(this._paramList[n].name, this._paramList[n].value)) &&
                    (this._paramList[n] = t);
              }),
              (e.prototype.addRange = function (e) {
                var n = this;
                e.each(function (e, t) {
                  return n._append(e, t);
                });
              }),
              (e.prototype.toQueryString = function () {
                var n = [];
                return (
                  this.each(function (e, t) {
                    n.push(e + '=' + encodeURIComponent(t));
                  }),
                  n.join('&')
                );
              }),
              (e.prototype.truncate = function (n, o, r) {
                this.each(function (e, t) {
                  if (e === n && 'string' == typeof t && t.length > o)
                    return (
                      (r = r || '__T'),
                      { name: e, value: (t = t.substr(0, o) + r) }
                    );
                });
              }),
              (t.createParamlist = e);
          }.bind((e = {}))(),
          e
        );
        var e;
      }),
      c.ensureModuleRegistered('eventsLogging', function () {
        return (
          function () {
            function n(e, t) {
              t = new (a.getModules('utils').EventLogger)(u, {
                samplingRatio: t,
              });
              try {
                t.logError(e.from, {
                  url: encodeURIComponent(z.location.href),
                  desc: e.message,
                });
              } catch (e) {}
            }
            function r(e) {
              var t = z.console;
              l && t && t.warn && t.warn('[Bridgewell Tracking Code] - ' + e);
            }
            function o(e, t) {
              s ? n({ from: e, message: t }, c) : n({ from: e, message: t }),
                i && r(t);
            }
            var e, a, i, s, c, u, l, d;
            (e = this),
              (a = z._bw),
              (c = 0.1),
              (l = s = !(i = !(u = 'pixelEvent'))),
              (d = {
                duplicatePixelId: 'duplicatePixelId',
                invalidMethod: 'invalidMethod',
                invalidPixelId: 'invalidPixelId',
                invalidEventName: 'invalidEventName',
                invalidUserData: 'invalidUserData',
                invalidCustomData: 'invalidCustomData',
                invalidConsentAction: 'invalidConsentAction',
                invalidParam: 'invalidParam',
                invalidParamValue: 'invalidParamValue',
                noMethodParam: 'noMethodParam',
                notAnyPixelId: 'notAnyPixelId',
                nonInitializePixelId: 'nonInitializePixelId',
                invalidSetType: 'invalidSetType',
                invalidOption: 'invalidOption',
                autoinitFailed: 'autoinitFail',
              }),
              (e.enableVerboseDebugLogging = function () {
                i = !0;
              }),
              (e.disableAllLogging = function () {
                l = !1;
              }),
              (e.disableSampling = function () {
                s = !1;
              }),
              (e.sendError = n),
              (e.logError = o),
              (e.logUserError = function (e) {
                r(
                  (function (e) {
                    var t = ' must be a string type.',
                      n = ' must be an object type.';
                    switch (e.type) {
                      case d.duplicatePixelId:
                        return 'Duplicate pixel id: "' + e.pixelId + '".';
                      case d.invalidMethod:
                        return (
                          '"bw(\'' +
                          e.method +
                          '\', ...);" is an invalid bw command.'
                        );
                      case d.invalidPixelId:
                        return 'The pixel id: ' + e.pixelId + t;
                      case d.invalidEventName:
                        return 'The event name: ' + e.eventName + t;
                      case d.invalidCustomData:
                        return 'The custom data: ' + e.customData + n;
                      case d.invalidUserData:
                        return 'The user data: ' + e.userData + n;
                      case d.invalidConsentAction:
                        return (
                          'The action: ' +
                          e.action +
                          " for \"bw('consent', '" +
                          e.action +
                          '\', ...);" is an invalid action. Valid actions are "revoke" and "grant".'
                        );
                      case d.invalidParam:
                        return (
                          'Parameter: "' +
                          e.param +
                          '" must be a ' +
                          e.validationType +
                          ' type.'
                        );
                      case d.invalidParamValue:
                        return (
                          'Parameter: "' +
                          e.param +
                          '" is an invalid value. Valid values are "' +
                          e.validationValue
                            .join('", "')
                            .replace(/,([^,]*)$/, ', and$1') +
                          '".'
                        );
                      case d.noMethodParam:
                        return (
                          'You must provide other parameters for "bw(\'' +
                          e.method +
                          '\', ...)".'
                        );
                      case d.notAnyPixelId:
                        return 'Not initialize any pixel id, please initialize a pixel id first and then call "bw(\'track\', ...);" or "bw(\'track\', ...);"';
                      case d.nonInitializePixelId:
                        return (
                          'The pixel id: "' +
                          e.pixelId +
                          '" is not initialized first.'
                        );
                      case d.invalidSetType:
                        return (
                          'The type of set: ' + e.setType + ' does not exist.'
                        );
                      case d.invalidOption:
                        return 'The type of option should be boolean.';
                      default:
                        return o(e.from, e.message), 'Invalid User Error.';
                    }
                  })(e)
                );
              }),
              (e.logBotEvent = function (e, t, n) {
                var o = a.getModules('utils'),
                  e = { from: e, message: t },
                  n = new o.EventLogger(u, { samplingRatio: s ? n || c : 1 });
                try {
                  n.logInfo(e.from, {
                    url: encodeURIComponent(o.getUrl()),
                    desc: e.message,
                  });
                } catch (e) {}
                i && r(t);
              }),
              (e.errorType = d);
          }.bind((e = {}))(),
          e
        );
        var e;
      }),
      c.ensureModuleRegistered('supportedMethods', function () {
        return (
          function () {
            function t(e, t, n) {
              var o,
                r = g.pixelIds,
                a = g.getModules('configStore'),
                i = r[e];
              return (
                void 0 === g.googleUserDataTable &&
                  (g.googleUserDataTable = {}),
                (t = t || {}),
                !!c(e) &&
                  ('[object Object]' !== f.call(t) &&
                    (v({ type: h.invalidUserData, pixelId: e, userData: t }),
                    (t = {})),
                  void 0 === i
                    ? (g.pixelIdList.push(
                        (o = { id: e, userData: {}, eventCount: 0 })
                      ),
                      (r[e] = o))
                    : (o = i),
                  0 < Object.keys(t).length &&
                    (void 0 !== t.em &&
                      'string' == typeof t.em &&
                      ((p = t.em.trim().toLowerCase()),
                      (r = p),
                      /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i.test(
                        r
                      )
                        ? ((t.em = m.sha256hash(p)),
                          (g.googleUserDataTable[e] = { email: p }))
                        : s(p)
                        ? ((t.em = p),
                          (g.googleUserDataTable[e] = {
                            sha256_email_address: p,
                          }))
                        : (t.em = null)),
                    !0 === t.hashUlid &&
                      void 0 !== t.ulid &&
                      'string' == typeof t.ulid &&
                      (t.ulid = m.sha256hash(t.ulid)),
                    void 0 !== t.ph &&
                      'string' == typeof t.ph &&
                      ((p = t.ph.trim().toLowerCase()),
                      (i = p),
                      /^\d+$/.test(i)
                        ? ((t.ph = m.sha256hash(p)),
                          (g.googleUserDataTable[e] = _objectSpread(
                            _objectSpread({}, g.googleUserDataTable[e]),
                            {},
                            { phone_number: '+' + p }
                          )))
                        : s(p)
                        ? (t.ph = p)
                        : (t.ph = null)),
                    delete t.hashUlid,
                    (o.userData = t)),
                  n ? a.setFacebookEventConfig(e, n) : a.initFbEventConfig(e),
                  g.flushPushedQueues(),
                  !0)
              );
            }
            function c(e) {
              if ('string' == typeof e) return 1;
              v({ type: h.invalidPixelId, pixelId: e });
            }
            function u(e) {
              if ('string' == typeof e) return 1;
              v({ type: h.invalidEventName, eventName: e });
            }
            function l(e) {
              if (void 0 !== g.pixelIds[e] || (t(e), void 0 !== g.pixelIds[e]))
                return 1;
              v({ type: h.autoinitFailed, pixelId: e });
            }
            function d(e) {
              return '[object Object]' !== f.call(e)
                ? (v({ type: h.invalidCustomData, customData: e }), {})
                : e;
            }
            function r(e, t, n, o) {
              var r = (o = 'object' !== _typeof(o) ? {} : o).useBeacon || !1,
                o = o.thirdPartyTrackingData || {};
              return (
                (n = n || {}),
                !!(c(e) && u(t) && l(e)) &&
                  ((n = d(n)),
                  m.sendEvent(
                    e,
                    t,
                    n,
                    m.generateBaseParamList(g.pixelIds[e]),
                    r,
                    o
                  ),
                  !0)
              );
            }
            function s(e) {
              return /^[A-Fa-f0-9]{64}$|^[A-Fa-f0-9]{32}$/.test(e);
            }
            var e, p, g, o, f, m, n, h, v, a, i;
            (e = this),
              (g = z._bw),
              (o = Object.prototype.hasOwnProperty),
              (f = Object.prototype.toString),
              (m = g.getModules('utils')),
              (n = g.getModules('eventsLogging')),
              (h = n.errorType),
              (v = n.logUserError),
              (a = { autoConfig: 'autoConfig' }),
              (i = { revoke: 'revoke', grant: 'grant' }),
              (e.init = t),
              (e.set = function () {
                var e = Array.prototype.slice.call(arguments),
                  t = e.shift(),
                  n = {};
                o.call(a, t) || v({ type: h.invalidSetType, setType: t }),
                  (n.autoConfig = function (e, t) {
                    var n = g.disabledAutoConfigList,
                      o = n.indexOf(t);
                    'boolean' != typeof e
                      ? v({ type: h.invalidOption })
                      : 'string' != typeof t
                      ? v({ type: h.invalidPixelId, pixelId: t })
                      : (-1 !== o && n.splice(o, 1), e || n.push(t));
                  }),
                  (n = n[t]) && n.apply(this, e);
              }),
              (e.consent = function (e) {
                if (o.call(i, e))
                  switch (e) {
                    case i.revoke:
                      g.isLocked = !0;
                      break;
                    case i.grant:
                      delete g.isLocked, m.flushQueue(g.queueLocked);
                  }
                else v({ type: h.invalidConsentAction, action: e });
              }),
              (e.track = function (e, t) {
                var n,
                  o,
                  r = g.pixelIdList,
                  a = r.length;
                if (((t = t || {}), !a))
                  return v({ type: h.notAnyPixelId }), !1;
                if (!u(e)) return !1;
                for (t = d(t), n = 0; n < a; n++)
                  (o = r[n]),
                    m.sendEvent(o.id, e, t, m.generateBaseParamList(o));
                return !0;
              }),
              (e.trackCustom = function (e, t, n, o) {
                return (
                  ((n =
                    n && 'object' === _typeof(n) ? n : {}).custom_event_name =
                    t),
                  r(e, 'custom', n, o)
                );
              }),
              (e.trackSingle = r),
              (e.trackSingleCompact = function (e) {
                for (
                  var t, n, o, r, a = g.pixelIds, i = [], s = 0;
                  s < e.length;
                  s++
                )
                  (n = (r = e[s])[1]),
                    (o = r[2]),
                    (r = r[3] || {}),
                    c(n) && u(o) && l(n)
                      ? ((r = d(r)),
                        (t = m.generateBaseParamList(a[n])),
                        i.push([n, o, r]))
                      : (e.splice(s, 1), s--);
                m.sendCompactEvent(i, t);
              }),
              (e.prepareThirdPartyData = function (e, t, n, o) {
                var r = m.generateBaseParamList(g.pixelIds[e]);
                return (
                  (o = o || {}),
                  !(!c(e) || !l(e)) &&
                    ((o = d(o)),
                    m.sendTrackingApi(e, 'PageView', t, o, r, n),
                    !0)
                );
              }),
              (e.debug = function (e) {
                'boolean' != typeof e
                  ? v({ type: h.invalidOption })
                  : (g.developMode = e);
              });
          }.bind((e = {}))(),
          e
        );
        var e;
      }),
      c.ensureModuleRegistered('main', function () {
        return (
          (o = c.getModules('supportedMethods')),
          (e = c.getModules('utils')),
          (t = '_bwq'),
          (n = c.getModules('storageUtils')),
          (r = c.getModules('eventsLogging')),
          (a = r.errorType),
          (i = r.logUserError),
          (s = {
            init: 'init',
            set: 'set',
            consent: 'consent',
            track: 'track',
            trackSingle: 'trackSingle',
            trackSingleCompact: 'trackSingleCompact',
            trackCustom: 'trackCustom',
            prepareThirdPartyData: 'prepareThirdPartyData',
            debug: 'debug',
          }),
          (c.version = '2.12.1'),
          (c.it = e.now()),
          (c.gid = n.getCookie('_bwgaid')),
          z.ga(function (e) {
            e = e.get('clientId');
            n.setCookie('_bwgaid', e);
          }),
          (c.ubid = ''),
          e.getUBID(function (e) {
            c.ubid = e;
          }),
          e.processGYMTripId(),
          (c.fp = e.getBridgewellFirstPartyCookie('__BWfp', '__BWtransf')),
          (c.metadata = e.getMetadata()),
          (c.developMode = !1),
          (c.queue = c.queue || []),
          (c.queueLocked = []),
          (c.pixelIds = {}),
          (c.pixelIdList = []),
          (c.disabledAutoConfigList = []),
          (c.callMethods = function () {
            var e = Object.prototype.hasOwnProperty,
              t = Array.prototype.slice.call(arguments),
              n = t.shift();
            e.call(s, n)
              ? t.length
                ? c.isLocked && n !== s.consent
                  ? c.queueLocked.push(arguments)
                  : o[n].apply(this, t)
                : i({ type: a.noMethodParam, method: n })
              : i({ type: a.invalidMethod, method: n });
          }),
          (c.flushPushedQueues = function () {
            (z[t] = z[t] || []), e.flushHackPushedDataLayer(t);
          }),
          e.flushQueue(c.queue),
          e.hackPush(t),
          {}
        );
        var o, e, t, n, r, a, i, s;
      }),
      c.getModules('main');
  })(window);
