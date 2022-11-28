"use strict";
(self.webpackChunkdashly = self.webpackChunkdashly || []).push([
    [694], {
        8527: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => A
            });
            var a = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
                i = {
                    _disable: [],
                    allowInput: !1,
                    allowInvalidPreload: !1,
                    altFormat: "F j, Y",
                    altInput: !1,
                    altInputClass: "form-control input",
                    animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
                    ariaDateFormat: "F j, Y",
                    autoFillDefaultTime: !0,
                    clickOpens: !0,
                    closeOnSelect: !0,
                    conjunction: ", ",
                    dateFormat: "Y-m-d",
                    defaultHour: 12,
                    defaultMinute: 0,
                    defaultSeconds: 0,
                    disable: [],
                    disableMobile: !1,
                    enableSeconds: !1,
                    enableTime: !1,
                    errorHandler: function(e) {
                        return "undefined" != typeof console && console.warn(e)
                    },
                    getWeek: function(e) {
                        var n = new Date(e.getTime());
                        n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + 3 - (n.getDay() + 6) % 7);
                        var t = new Date(n.getFullYear(), 0, 4);
                        return 1 + Math.round(((n.getTime() - t.getTime()) / 864e5 - 3 + (t.getDay() + 6) % 7) / 7)
                    },
                    hourIncrement: 1,
                    ignoredFocusElements: [],
                    inline: !1,
                    locale: "default",
                    minuteIncrement: 5,
                    mode: "single",
                    monthSelectorType: "dropdown",
                    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
                    noCalendar: !1,
                    now: new Date,
                    onChange: [],
                    onClose: [],
                    onDayCreate: [],
                    onDestroy: [],
                    onKeyDown: [],
                    onMonthChange: [],
                    onOpen: [],
                    onParseConfig: [],
                    onReady: [],
                    onValueUpdate: [],
                    onYearChange: [],
                    onPreCalendarPosition: [],
                    plugins: [],
                    position: "auto",
                    positionElement: void 0,
                    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
                    shorthandCurrentMonth: !1,
                    showMonths: 1,
                    static: !1,
                    time_24hr: !1,
                    weekNumbers: !1,
                    wrap: !1
                },
                o = {
                    weekdays: {
                        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    months: {
                        shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    firstDayOfWeek: 0,
                    ordinal: function(e) {
                        var n = e % 100;
                        if (n > 3 && n < 21) return "th";
                        switch (n % 10) {
                            case 1:
                                return "st";
                            case 2:
                                return "nd";
                            case 3:
                                return "rd";
                            default:
                                return "th"
                        }
                    },
                    rangeSeparator: " to ",
                    weekAbbreviation: "Wk",
                    scrollTitle: "Scroll to increment",
                    toggleTitle: "Click to toggle",
                    amPM: ["AM", "PM"],
                    yearAriaLabel: "Year",
                    monthAriaLabel: "Month",
                    hourAriaLabel: "Hour",
                    minuteAriaLabel: "Minute",
                    time_24hr: !1
                };
            const r = o;
            var l = function(e, n) {
                    return void 0 === n && (n = 2), ("000" + e).slice(-1 * n)
                },
                c = function(e) {
                    return !0 === e ? 1 : 0
                };

            function s(e, n) {
                var t;
                return function() {
                    var a = this,
                        i = arguments;
                    clearTimeout(t), t = setTimeout((function() {
                        return e.apply(a, i)
                    }), n)
                }
            }
            var d = function(e) {
                return e instanceof Array ? e : [e]
            };

            function u(e, n, t) {
                if (!0 === t) return e.classList.add(n);
                e.classList.remove(n)
            }

            function f(e, n, t) {
                var a = window.document.createElement(e);
                return n = n || "", t = t || "", a.className = n, void 0 !== t && (a.textContent = t), a
            }

            function m(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            }

            function g(e, n) {
                return n(e) ? e : e.parentNode ? g(e.parentNode, n) : void 0
            }

            function p(e, n) {
                var t = f("div", "numInputWrapper"),
                    a = f("input", "numInput " + e),
                    i = f("span", "arrowUp"),
                    o = f("span", "arrowDown");
                if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number" : (a.type = "text", a.pattern = "\\d*"), void 0 !== n)
                    for (var r in n) a.setAttribute(r, n[r]);
                return t.appendChild(a), t.appendChild(i), t.appendChild(o), t
            }

            function h(e) {
                try {
                    return "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
                } catch (n) {
                    return e.target
                }
            }
            var v = function() {},
                D = function(e, n, t) {
                    return t.months[n ? "shorthand" : "longhand"][e]
                },
                w = {
                    D: v,
                    F: function(e, n, t) {
                        e.setMonth(t.months.longhand.indexOf(n))
                    },
                    G: function(e, n) {
                        e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
                    },
                    H: function(e, n) {
                        e.setHours(parseFloat(n))
                    },
                    J: function(e, n) {
                        e.setDate(parseFloat(n))
                    },
                    K: function(e, n, t) {
                        e.setHours(e.getHours() % 12 + 12 * c(new RegExp(t.amPM[1], "i").test(n)))
                    },
                    M: function(e, n, t) {
                        e.setMonth(t.months.shorthand.indexOf(n))
                    },
                    S: function(e, n) {
                        e.setSeconds(parseFloat(n))
                    },
                    U: function(e, n) {
                        return new Date(1e3 * parseFloat(n))
                    },
                    W: function(e, n, t) {
                        var a = parseInt(n),
                            i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
                        return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i
                    },
                    Y: function(e, n) {
                        e.setFullYear(parseFloat(n))
                    },
                    Z: function(e, n) {
                        return new Date(n)
                    },
                    d: function(e, n) {
                        e.setDate(parseFloat(n))
                    },
                    h: function(e, n) {
                        e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
                    },
                    i: function(e, n) {
                        e.setMinutes(parseFloat(n))
                    },
                    j: function(e, n) {
                        e.setDate(parseFloat(n))
                    },
                    l: v,
                    m: function(e, n) {
                        e.setMonth(parseFloat(n) - 1)
                    },
                    n: function(e, n) {
                        e.setMonth(parseFloat(n) - 1)
                    },
                    s: function(e, n) {
                        e.setSeconds(parseFloat(n))
                    },
                    u: function(e, n) {
                        return new Date(parseFloat(n))
                    },
                    w: v,
                    y: function(e, n) {
                        e.setFullYear(2e3 + parseFloat(n))
                    }
                },
                b = {
                    D: "",
                    F: "",
                    G: "(\\d\\d|\\d)",
                    H: "(\\d\\d|\\d)",
                    J: "(\\d\\d|\\d)\\w+",
                    K: "",
                    M: "",
                    S: "(\\d\\d|\\d)",
                    U: "(.+)",
                    W: "(\\d\\d|\\d)",
                    Y: "(\\d{4})",
                    Z: "(.+)",
                    d: "(\\d\\d|\\d)",
                    h: "(\\d\\d|\\d)",
                    i: "(\\d\\d|\\d)",
                    j: "(\\d\\d|\\d)",
                    l: "",
                    m: "(\\d\\d|\\d)",
                    n: "(\\d\\d|\\d)",
                    s: "(\\d\\d|\\d)",
                    u: "(.+)",
                    w: "(\\d\\d|\\d)",
                    y: "(\\d{2})"
                },
                C = {
                    Z: function(e) {
                        return e.toISOString()
                    },
                    D: function(e, n, t) {
                        return n.weekdays.shorthand[C.w(e, n, t)]
                    },
                    F: function(e, n, t) {
                        return D(C.n(e, n, t) - 1, !1, n)
                    },
                    G: function(e, n, t) {
                        return l(C.h(e, n, t))
                    },
                    H: function(e) {
                        return l(e.getHours())
                    },
                    J: function(e, n) {
                        return void 0 !== n.ordinal ? e.getDate() + n.ordinal(e.getDate()) : e.getDate()
                    },
                    K: function(e, n) {
                        return n.amPM[c(e.getHours() > 11)]
                    },
                    M: function(e, n) {
                        return D(e.getMonth(), !0, n)
                    },
                    S: function(e) {
                        return l(e.getSeconds())
                    },
                    U: function(e) {
                        return e.getTime() / 1e3
                    },
                    W: function(e, n, t) {
                        return t.getWeek(e)
                    },
                    Y: function(e) {
                        return l(e.getFullYear(), 4)
                    },
                    d: function(e) {
                        return l(e.getDate())
                    },
                    h: function(e) {
                        return e.getHours() % 12 ? e.getHours() % 12 : 12
                    },
                    i: function(e) {
                        return l(e.getMinutes())
                    },
                    j: function(e) {
                        return e.getDate()
                    },
                    l: function(e, n) {
                        return n.weekdays.longhand[e.getDay()]
                    },
                    m: function(e) {
                        return l(e.getMonth() + 1)
                    },
                    n: function(e) {
                        return e.getMonth() + 1
                    },
                    s: function(e) {
                        return e.getSeconds()
                    },
                    u: function(e) {
                        return e.getTime()
                    },
                    w: function(e) {
                        return e.getDay()
                    },
                    y: function(e) {
                        return String(e.getFullYear()).substring(2)
                    }
                },
                M = function(e) {
                    var n = e.config,
                        t = void 0 === n ? i : n,
                        a = e.l10n,
                        r = void 0 === a ? o : a,
                        l = e.isMobile,
                        c = void 0 !== l && l;
                    return function(e, n, a) {
                        var i = a || r;
                        return void 0 === t.formatDate || c ? n.split("").map((function(n, a, o) {
                            return C[n] && "\\" !== o[a - 1] ? C[n](e, i, t) : "\\" !== n ? n : ""
                        })).join("") : t.formatDate(e, n, i)
                    }
                },
                y = function(e) {
                    var n = e.config,
                        t = void 0 === n ? i : n,
                        a = e.l10n,
                        r = void 0 === a ? o : a;
                    return function(e, n, a, o) {
                        if (0 === e || e) {
                            var l, c = o || r,
                                s = e;
                            if (e instanceof Date) l = new Date(e.getTime());
                            else if ("string" != typeof e && void 0 !== e.toFixed) l = new Date(e);
                            else if ("string" == typeof e) {
                                var d = n || (t || i).dateFormat,
                                    u = String(e).trim();
                                if ("today" === u) l = new Date, a = !0;
                                else if (t && t.parseDate) l = t.parseDate(e, d);
                                else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
                                else {
                                    for (var f = void 0, m = [], g = 0, p = 0, h = ""; g < d.length; g++) {
                                        var v = d[g],
                                            D = "\\" === v,
                                            C = "\\" === d[g - 1] || D;
                                        if (b[v] && !C) {
                                            h += b[v];
                                            var M = new RegExp(h).exec(e);
                                            M && (f = !0) && m["Y" !== v ? "push" : "unshift"]({
                                                fn: w[v],
                                                val: M[++p]
                                            })
                                        } else D || (h += ".")
                                    }
                                    l = t && t.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), m.forEach((function(e) {
                                        var n = e.fn,
                                            t = e.val;
                                        return l = n(l, t, c) || l
                                    })), l = f ? l : void 0
                                }
                            }
                            if (l instanceof Date && !isNaN(l.getTime())) return !0 === a && l.setHours(0, 0, 0, 0), l;
                            t.errorHandler(new Error("Invalid date provided: " + s))
                        }
                    }
                };

            function x(e, n, t) {
                return void 0 === t && (t = !0), !1 !== t ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(n.getTime()).setHours(0, 0, 0, 0) : e.getTime() - n.getTime()
            }
            var E = function(e, n, t) {
                    return 3600 * e + 60 * n + t
                },
                k = 864e5;

            function T(e) {
                var n = e.defaultHour,
                    t = e.defaultMinute,
                    a = e.defaultSeconds;
                if (void 0 !== e.minDate) {
                    var i = e.minDate.getHours(),
                        o = e.minDate.getMinutes(),
                        r = e.minDate.getSeconds();
                    n < i && (n = i), n === i && t < o && (t = o), n === i && t === o && a < r && (a = e.minDate.getSeconds())
                }
                if (void 0 !== e.maxDate) {
                    var l = e.maxDate.getHours(),
                        c = e.maxDate.getMinutes();
                    (n = Math.min(n, l)) === l && (t = Math.min(c, t)), n === l && t === c && (a = e.maxDate.getSeconds())
                }
                return {
                    hours: n,
                    minutes: t,
                    seconds: a
                }
            }
            t(1895);
            var I = function() {
                    return I = Object.assign || function(e) {
                        for (var n, t = 1, a = arguments.length; t < a; t++)
                            for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                        return e
                    }, I.apply(this, arguments)
                },
                S = function() {
                    for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
                    var a = Array(e),
                        i = 0;
                    for (n = 0; n < t; n++)
                        for (var o = arguments[n], r = 0, l = o.length; r < l; r++, i++) a[i] = o[r];
                    return a
                };

            function _(e, n) {
                var t = {
                    config: I(I({}, i), F.defaultConfig),
                    l10n: r
                };

                function o() {
                    var e;
                    return (null === (e = t.calendarContainer) || void 0 === e ? void 0 : e.getRootNode()).activeElement || document.activeElement
                }

                function v(e) {
                    return e.bind(t)
                }

                function w() {
                    var e = t.config;
                    !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function() {
                        if (void 0 !== t.calendarContainer && (t.calendarContainer.style.visibility = "hidden", t.calendarContainer.style.display = "block"), void 0 !== t.daysContainer) {
                            var n = (t.days.offsetWidth + 1) * e.showMonths;
                            t.daysContainer.style.width = n + "px", t.calendarContainer.style.width = n + (void 0 !== t.weekWrapper ? t.weekWrapper.offsetWidth : 0) + "px", t.calendarContainer.style.removeProperty("visibility"), t.calendarContainer.style.removeProperty("display")
                        }
                    }))
                }

                function C(e) {
                    if (0 === t.selectedDates.length) {
                        var n = void 0 === t.config.minDate || x(new Date, t.config.minDate) >= 0 ? new Date : new Date(t.config.minDate.getTime()),
                            a = T(t.config);
                        n.setHours(a.hours, a.minutes, a.seconds, n.getMilliseconds()), t.selectedDates = [n], t.latestSelectedDateObj = n
                    }
                    void 0 !== e && "blur" !== e.type && function(e) {
                        e.preventDefault();
                        var n = "keydown" === e.type,
                            a = h(e),
                            i = a;
                        void 0 !== t.amPM && a === t.amPM && (t.amPM.textContent = t.l10n.amPM[c(t.amPM.textContent === t.l10n.amPM[0])]);
                        var o = parseFloat(i.getAttribute("min")),
                            r = parseFloat(i.getAttribute("max")),
                            s = parseFloat(i.getAttribute("step")),
                            d = parseInt(i.value, 10),
                            u = e.delta || (n ? 38 === e.which ? 1 : -1 : 0),
                            f = d + s * u;
                        if (void 0 !== i.value && 2 === i.value.length) {
                            var m = i === t.hourElement,
                                g = i === t.minuteElement;
                            f < o ? (f = r + f + c(!m) + (c(m) && c(!t.amPM)), g && L(void 0, -1, t.hourElement)) : f > r && (f = i === t.hourElement ? f - r - c(!t.amPM) : o, g && L(void 0, 1, t.hourElement)), t.amPM && m && (1 === s ? f + d === 23 : Math.abs(f - d) > s) && (t.amPM.textContent = t.l10n.amPM[c(t.amPM.textContent === t.l10n.amPM[0])]), i.value = l(f)
                        }
                    }(e);
                    var i = t._input.value;
                    _(), ye(), t._input.value !== i && t._debouncedChange()
                }

                function _() {
                    if (void 0 !== t.hourElement && void 0 !== t.minuteElement) {
                        var e, n, a = (parseInt(t.hourElement.value.slice(-2), 10) || 0) % 24,
                            i = (parseInt(t.minuteElement.value, 10) || 0) % 60,
                            o = void 0 !== t.secondElement ? (parseInt(t.secondElement.value, 10) || 0) % 60 : 0;
                        void 0 !== t.amPM && (e = a, n = t.amPM.textContent, a = e % 12 + 12 * c(n === t.l10n.amPM[1]));
                        var r = void 0 !== t.config.minTime || t.config.minDate && t.minDateHasTime && t.latestSelectedDateObj && 0 === x(t.latestSelectedDateObj, t.config.minDate, !0),
                            l = void 0 !== t.config.maxTime || t.config.maxDate && t.maxDateHasTime && t.latestSelectedDateObj && 0 === x(t.latestSelectedDateObj, t.config.maxDate, !0);
                        if (void 0 !== t.config.maxTime && void 0 !== t.config.minTime && t.config.minTime > t.config.maxTime) {
                            var s = E(t.config.minTime.getHours(), t.config.minTime.getMinutes(), t.config.minTime.getSeconds()),
                                d = E(t.config.maxTime.getHours(), t.config.maxTime.getMinutes(), t.config.maxTime.getSeconds()),
                                u = E(a, i, o);
                            if (u > d && u < s) {
                                var f = function(e) {
                                    var n = Math.floor(e / 3600),
                                        t = (e - 3600 * n) / 60;
                                    return [n, t, e - 3600 * n - 60 * t]
                                }(s);
                                a = f[0], i = f[1], o = f[2]
                            }
                        } else {
                            if (l) {
                                var m = void 0 !== t.config.maxTime ? t.config.maxTime : t.config.maxDate;
                                (a = Math.min(a, m.getHours())) === m.getHours() && (i = Math.min(i, m.getMinutes())), i === m.getMinutes() && (o = Math.min(o, m.getSeconds()))
                            }
                            if (r) {
                                var g = void 0 !== t.config.minTime ? t.config.minTime : t.config.minDate;
                                (a = Math.max(a, g.getHours())) === g.getHours() && i < g.getMinutes() && (i = g.getMinutes()), i === g.getMinutes() && (o = Math.max(o, g.getSeconds()))
                            }
                        }
                        A(a, i, o)
                    }
                }

                function O(e) {
                    var n = e || t.latestSelectedDateObj;
                    n && n instanceof Date && A(n.getHours(), n.getMinutes(), n.getSeconds())
                }

                function A(e, n, a) {
                    void 0 !== t.latestSelectedDateObj && t.latestSelectedDateObj.setHours(e % 24, n, a || 0, 0), t.hourElement && t.minuteElement && !t.isMobile && (t.hourElement.value = l(t.config.time_24hr ? e : (12 + e) % 12 + 12 * c(e % 12 == 0)), t.minuteElement.value = l(n), void 0 !== t.amPM && (t.amPM.textContent = t.l10n.amPM[c(e >= 12)]), void 0 !== t.secondElement && (t.secondElement.value = l(a)))
                }

                function N(e) {
                    var n = h(e),
                        t = parseInt(n.value) + (e.delta || 0);
                    (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && ee(t)
                }

                function P(e, n, a, i) {
                    return n instanceof Array ? n.forEach((function(n) {
                        return P(e, n, a, i)
                    })) : e instanceof Array ? e.forEach((function(e) {
                        return P(e, n, a, i)
                    })) : (e.addEventListener(n, a, i), void t._handlers.push({
                        remove: function() {
                            return e.removeEventListener(n, a, i)
                        }
                    }))
                }

                function Y() {
                    De("onChange")
                }

                function j(e, n) {
                    var a = void 0 !== e ? t.parseDate(e) : t.latestSelectedDateObj || (t.config.minDate && t.config.minDate > t.now ? t.config.minDate : t.config.maxDate && t.config.maxDate < t.now ? t.config.maxDate : t.now),
                        i = t.currentYear,
                        o = t.currentMonth;
                    try {
                        void 0 !== a && (t.currentYear = a.getFullYear(), t.currentMonth = a.getMonth())
                    } catch (e) {
                        e.message = "Invalid date supplied: " + a, t.config.errorHandler(e)
                    }
                    n && t.currentYear !== i && (De("onYearChange"), q()), !n || t.currentYear === i && t.currentMonth === o || De("onMonthChange"), t.redraw()
                }

                function H(e) {
                    var n = h(e);
                    ~n.className.indexOf("arrow") && L(e, n.classList.contains("arrowUp") ? 1 : -1)
                }

                function L(e, n, t) {
                    var a = e && h(e),
                        i = t || a && a.parentNode && a.parentNode.firstChild,
                        o = we("increment");
                    o.delta = n, i && i.dispatchEvent(o)
                }

                function R(e, n, a, i) {
                    var o = ne(n, !0),
                        r = f("span", e, n.getDate().toString());
                    return r.dateObj = n, r.$i = i, r.setAttribute("aria-label", t.formatDate(n, t.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === x(n, t.now) && (t.todayDateElem = r, r.classList.add("today"), r.setAttribute("aria-current", "date")), o ? (r.tabIndex = -1, be(n) && (r.classList.add("selected"), t.selectedDateElem = r, "range" === t.config.mode && (u(r, "startRange", t.selectedDates[0] && 0 === x(n, t.selectedDates[0], !0)), u(r, "endRange", t.selectedDates[1] && 0 === x(n, t.selectedDates[1], !0)), "nextMonthDay" === e && r.classList.add("inRange")))) : r.classList.add("flatpickr-disabled"), "range" === t.config.mode && function(e) {
                        return !("range" !== t.config.mode || t.selectedDates.length < 2) && (x(e, t.selectedDates[0]) >= 0 && x(e, t.selectedDates[1]) <= 0)
                    }(n) && !be(n) && r.classList.add("inRange"), t.weekNumbers && 1 === t.config.showMonths && "prevMonthDay" !== e && i % 7 == 6 && t.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + t.config.getWeek(n) + "</span>"), De("onDayCreate", r), r
                }

                function W(e) {
                    e.focus(), "range" === t.config.mode && oe(e)
                }

                function B(e) {
                    for (var n = e > 0 ? 0 : t.config.showMonths - 1, a = e > 0 ? t.config.showMonths : -1, i = n; i != a; i += e)
                        for (var o = t.daysContainer.children[i], r = e > 0 ? 0 : o.children.length - 1, l = e > 0 ? o.children.length : -1, c = r; c != l; c += e) {
                            var s = o.children[c];
                            if (-1 === s.className.indexOf("hidden") && ne(s.dateObj)) return s
                        }
                }

                function J(e, n) {
                    var a = o(),
                        i = te(a || document.body),
                        r = void 0 !== e ? e : i ? a : void 0 !== t.selectedDateElem && te(t.selectedDateElem) ? t.selectedDateElem : void 0 !== t.todayDateElem && te(t.todayDateElem) ? t.todayDateElem : B(n > 0 ? 1 : -1);
                    void 0 === r ? t._input.focus() : i ? function(e, n) {
                        for (var a = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : t.currentMonth, i = n > 0 ? t.config.showMonths : -1, o = n > 0 ? 1 : -1, r = a - t.currentMonth; r != i; r += o)
                            for (var l = t.daysContainer.children[r], c = a - t.currentMonth === r ? e.$i + n : n < 0 ? l.children.length - 1 : 0, s = l.children.length, d = c; d >= 0 && d < s && d != (n > 0 ? s : -1); d += o) {
                                var u = l.children[d];
                                if (-1 === u.className.indexOf("hidden") && ne(u.dateObj) && Math.abs(e.$i - d) >= Math.abs(n)) return W(u)
                            }
                        t.changeMonth(o), J(B(o), 0)
                    }(r, n) : W(r)
                }

                function K(e, n) {
                    for (var a = (new Date(e, n, 1).getDay() - t.l10n.firstDayOfWeek + 7) % 7, i = t.utils.getDaysInMonth((n - 1 + 12) % 12, e), o = t.utils.getDaysInMonth(n, e), r = window.document.createDocumentFragment(), l = t.config.showMonths > 1, c = l ? "prevMonthDay hidden" : "prevMonthDay", s = l ? "nextMonthDay hidden" : "nextMonthDay", d = i + 1 - a, u = 0; d <= i; d++, u++) r.appendChild(R("flatpickr-day " + c, new Date(e, n - 1, d), 0, u));
                    for (d = 1; d <= o; d++, u++) r.appendChild(R("flatpickr-day", new Date(e, n, d), 0, u));
                    for (var m = o + 1; m <= 42 - a && (1 === t.config.showMonths || u % 7 != 0); m++, u++) r.appendChild(R("flatpickr-day " + s, new Date(e, n + 1, m % o), 0, u));
                    var g = f("div", "dayContainer");
                    return g.appendChild(r), g
                }

                function U() {
                    if (void 0 !== t.daysContainer) {
                        m(t.daysContainer), t.weekNumbers && m(t.weekNumbers);
                        for (var e = document.createDocumentFragment(), n = 0; n < t.config.showMonths; n++) {
                            var a = new Date(t.currentYear, t.currentMonth, 1);
                            a.setMonth(t.currentMonth + n), e.appendChild(K(a.getFullYear(), a.getMonth()))
                        }
                        t.daysContainer.appendChild(e), t.days = t.daysContainer.firstChild, "range" === t.config.mode && 1 === t.selectedDates.length && oe()
                    }
                }

                function q() {
                    if (!(t.config.showMonths > 1 || "dropdown" !== t.config.monthSelectorType)) {
                        var e = function(e) {
                            return !(void 0 !== t.config.minDate && t.currentYear === t.config.minDate.getFullYear() && e < t.config.minDate.getMonth()) && !(void 0 !== t.config.maxDate && t.currentYear === t.config.maxDate.getFullYear() && e > t.config.maxDate.getMonth())
                        };
                        t.monthsDropdownContainer.tabIndex = -1, t.monthsDropdownContainer.innerHTML = "";
                        for (var n = 0; n < 12; n++)
                            if (e(n)) {
                                var a = f("option", "flatpickr-monthDropdown-month");
                                a.value = new Date(t.currentYear, n).getMonth().toString(), a.textContent = D(n, t.config.shorthandCurrentMonth, t.l10n), a.tabIndex = -1, t.currentMonth === n && (a.selected = !0), t.monthsDropdownContainer.appendChild(a)
                            }
                    }
                }

                function $() {
                    var e, n = f("div", "flatpickr-month"),
                        a = window.document.createDocumentFragment();
                    t.config.showMonths > 1 || "static" === t.config.monthSelectorType ? e = f("span", "cur-month") : (t.monthsDropdownContainer = f("select", "flatpickr-monthDropdown-months"), t.monthsDropdownContainer.setAttribute("aria-label", t.l10n.monthAriaLabel), P(t.monthsDropdownContainer, "change", (function(e) {
                        var n = h(e),
                            a = parseInt(n.value, 10);
                        t.changeMonth(a - t.currentMonth), De("onMonthChange")
                    })), q(), e = t.monthsDropdownContainer);
                    var i = p("cur-year", {
                            tabindex: "-1"
                        }),
                        o = i.getElementsByTagName("input")[0];
                    o.setAttribute("aria-label", t.l10n.yearAriaLabel), t.config.minDate && o.setAttribute("min", t.config.minDate.getFullYear().toString()), t.config.maxDate && (o.setAttribute("max", t.config.maxDate.getFullYear().toString()), o.disabled = !!t.config.minDate && t.config.minDate.getFullYear() === t.config.maxDate.getFullYear());
                    var r = f("div", "flatpickr-current-month");
                    return r.appendChild(e), r.appendChild(i), a.appendChild(r), n.appendChild(a), {
                        container: n,
                        yearElement: o,
                        monthElement: e
                    }
                }

                function V() {
                    m(t.monthNav), t.monthNav.appendChild(t.prevMonthNav), t.config.showMonths && (t.yearElements = [], t.monthElements = []);
                    for (var e = t.config.showMonths; e--;) {
                        var n = $();
                        t.yearElements.push(n.yearElement), t.monthElements.push(n.monthElement), t.monthNav.appendChild(n.container)
                    }
                    t.monthNav.appendChild(t.nextMonthNav)
                }

                function z() {
                    t.weekdayContainer ? m(t.weekdayContainer) : t.weekdayContainer = f("div", "flatpickr-weekdays");
                    for (var e = t.config.showMonths; e--;) {
                        var n = f("div", "flatpickr-weekdaycontainer");
                        t.weekdayContainer.appendChild(n)
                    }
                    return G(), t.weekdayContainer
                }

                function G() {
                    if (t.weekdayContainer) {
                        var e = t.l10n.firstDayOfWeek,
                            n = S(t.l10n.weekdays.shorthand);
                        e > 0 && e < n.length && (n = S(n.splice(e, n.length), n.splice(0, e)));
                        for (var a = t.config.showMonths; a--;) t.weekdayContainer.children[a].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + n.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
                    }
                }

                function Z(e, n) {
                    void 0 === n && (n = !0);
                    var a = n ? e : e - t.currentMonth;
                    a < 0 && !0 === t._hidePrevMonthArrow || a > 0 && !0 === t._hideNextMonthArrow || (t.currentMonth += a, (t.currentMonth < 0 || t.currentMonth > 11) && (t.currentYear += t.currentMonth > 11 ? 1 : -1, t.currentMonth = (t.currentMonth + 12) % 12, De("onYearChange"), q()), U(), De("onMonthChange"), Ce())
                }

                function Q(e) {
                    return t.calendarContainer.contains(e)
                }

                function X(e) {
                    if (t.isOpen && !t.config.inline) {
                        var n = h(e),
                            a = Q(n),
                            i = !(n === t.input || n === t.altInput || t.element.contains(n) || e.path && e.path.indexOf && (~e.path.indexOf(t.input) || ~e.path.indexOf(t.altInput))) && !a && !Q(e.relatedTarget),
                            o = !t.config.ignoredFocusElements.some((function(e) {
                                return e.contains(n)
                            }));
                        i && o && (t.config.allowInput && t.setDate(t._input.value, !1, t.config.altInput ? t.config.altFormat : t.config.dateFormat), void 0 !== t.timeContainer && void 0 !== t.minuteElement && void 0 !== t.hourElement && "" !== t.input.value && void 0 !== t.input.value && C(), t.close(), t.config && "range" === t.config.mode && 1 === t.selectedDates.length && t.clear(!1))
                    }
                }

                function ee(e) {
                    if (!(!e || t.config.minDate && e < t.config.minDate.getFullYear() || t.config.maxDate && e > t.config.maxDate.getFullYear())) {
                        var n = e,
                            a = t.currentYear !== n;
                        t.currentYear = n || t.currentYear, t.config.maxDate && t.currentYear === t.config.maxDate.getFullYear() ? t.currentMonth = Math.min(t.config.maxDate.getMonth(), t.currentMonth) : t.config.minDate && t.currentYear === t.config.minDate.getFullYear() && (t.currentMonth = Math.max(t.config.minDate.getMonth(), t.currentMonth)), a && (t.redraw(), De("onYearChange"), q())
                    }
                }

                function ne(e, n) {
                    var a;
                    void 0 === n && (n = !0);
                    var i = t.parseDate(e, void 0, n);
                    if (t.config.minDate && i && x(i, t.config.minDate, void 0 !== n ? n : !t.minDateHasTime) < 0 || t.config.maxDate && i && x(i, t.config.maxDate, void 0 !== n ? n : !t.maxDateHasTime) > 0) return !1;
                    if (!t.config.enable && 0 === t.config.disable.length) return !0;
                    if (void 0 === i) return !1;
                    for (var o = !!t.config.enable, r = null !== (a = t.config.enable) && void 0 !== a ? a : t.config.disable, l = 0, c = void 0; l < r.length; l++) {
                        if ("function" == typeof(c = r[l]) && c(i)) return o;
                        if (c instanceof Date && void 0 !== i && c.getTime() === i.getTime()) return o;
                        if ("string" == typeof c) {
                            var s = t.parseDate(c, void 0, !0);
                            return s && s.getTime() === i.getTime() ? o : !o
                        }
                        if ("object" == typeof c && void 0 !== i && c.from && c.to && i.getTime() >= c.from.getTime() && i.getTime() <= c.to.getTime()) return o
                    }
                    return !o
                }

                function te(e) {
                    return void 0 !== t.daysContainer && (-1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && t.daysContainer.contains(e))
                }

                function ae(e) {
                    var n = e.target === t._input,
                        a = t._input.value.trimEnd() !== Me();
                    !n || !a || e.relatedTarget && Q(e.relatedTarget) || t.setDate(t._input.value, !0, e.target === t.altInput ? t.config.altFormat : t.config.dateFormat)
                }

                function ie(n) {
                    var a = h(n),
                        i = t.config.wrap ? e.contains(a) : a === t._input,
                        r = t.config.allowInput,
                        l = t.isOpen && (!r || !i),
                        c = t.config.inline && i && !r;
                    if (13 === n.keyCode && i) {
                        if (r) return t.setDate(t._input.value, !0, a === t.altInput ? t.config.altFormat : t.config.dateFormat), t.close(), a.blur();
                        t.open()
                    } else if (Q(a) || l || c) {
                        var s = !!t.timeContainer && t.timeContainer.contains(a);
                        switch (n.keyCode) {
                            case 13:
                                s ? (n.preventDefault(), C(), fe()) : me(n);
                                break;
                            case 27:
                                n.preventDefault(), fe();
                                break;
                            case 8:
                            case 46:
                                i && !t.config.allowInput && (n.preventDefault(), t.clear());
                                break;
                            case 37:
                            case 39:
                                if (s || i) t.hourElement && t.hourElement.focus();
                                else {
                                    n.preventDefault();
                                    var d = o();
                                    if (void 0 !== t.daysContainer && (!1 === r || d && te(d))) {
                                        var u = 39 === n.keyCode ? 1 : -1;
                                        n.ctrlKey ? (n.stopPropagation(), Z(u), J(B(1), 0)) : J(void 0, u)
                                    }
                                }
                                break;
                            case 38:
                            case 40:
                                n.preventDefault();
                                var f = 40 === n.keyCode ? 1 : -1;
                                t.daysContainer && void 0 !== a.$i || a === t.input || a === t.altInput ? n.ctrlKey ? (n.stopPropagation(), ee(t.currentYear - f), J(B(1), 0)) : s || J(void 0, 7 * f) : a === t.currentYearElement ? ee(t.currentYear - f) : t.config.enableTime && (!s && t.hourElement && t.hourElement.focus(), C(n), t._debouncedChange());
                                break;
                            case 9:
                                if (s) {
                                    var m = [t.hourElement, t.minuteElement, t.secondElement, t.amPM].concat(t.pluginElements).filter((function(e) {
                                            return e
                                        })),
                                        g = m.indexOf(a);
                                    if (-1 !== g) {
                                        var p = m[g + (n.shiftKey ? -1 : 1)];
                                        n.preventDefault(), (p || t._input).focus()
                                    }
                                } else !t.config.noCalendar && t.daysContainer && t.daysContainer.contains(a) && n.shiftKey && (n.preventDefault(), t._input.focus())
                        }
                    }
                    if (void 0 !== t.amPM && a === t.amPM) switch (n.key) {
                        case t.l10n.amPM[0].charAt(0):
                        case t.l10n.amPM[0].charAt(0).toLowerCase():
                            t.amPM.textContent = t.l10n.amPM[0], _(), ye();
                            break;
                        case t.l10n.amPM[1].charAt(0):
                        case t.l10n.amPM[1].charAt(0).toLowerCase():
                            t.amPM.textContent = t.l10n.amPM[1], _(), ye()
                    }(i || Q(a)) && De("onKeyDown", n)
                }

                function oe(e, n) {
                    if (void 0 === n && (n = "flatpickr-day"), 1 === t.selectedDates.length && (!e || e.classList.contains(n) && !e.classList.contains("flatpickr-disabled"))) {
                        for (var a = e ? e.dateObj.getTime() : t.days.firstElementChild.dateObj.getTime(), i = t.parseDate(t.selectedDates[0], void 0, !0).getTime(), o = Math.min(a, t.selectedDates[0].getTime()), r = Math.max(a, t.selectedDates[0].getTime()), l = !1, c = 0, s = 0, d = o; d < r; d += k) ne(new Date(d), !0) || (l = l || d > o && d < r, d < i && (!c || d > c) ? c = d : d > i && (!s || d < s) && (s = d));
                        Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+" + t.config.showMonths + ") > ." + n)).forEach((function(n) {
                            var o, r, d, u = n.dateObj.getTime(),
                                f = c > 0 && u < c || s > 0 && u > s;
                            if (f) return n.classList.add("notAllowed"), void["inRange", "startRange", "endRange"].forEach((function(e) {
                                n.classList.remove(e)
                            }));
                            l && !f || (["startRange", "inRange", "endRange", "notAllowed"].forEach((function(e) {
                                n.classList.remove(e)
                            })), void 0 !== e && (e.classList.add(a <= t.selectedDates[0].getTime() ? "startRange" : "endRange"), i < a && u === i ? n.classList.add("startRange") : i > a && u === i && n.classList.add("endRange"), u >= c && (0 === s || u <= s) && (r = i, d = a, (o = u) > Math.min(r, d) && o < Math.max(r, d)) && n.classList.add("inRange")))
                        }))
                    }
                }

                function re() {
                    !t.isOpen || t.config.static || t.config.inline || de()
                }

                function le(e) {
                    return function(n) {
                        var a = t.config["_" + e + "Date"] = t.parseDate(n, t.config.dateFormat),
                            i = t.config["_" + ("min" === e ? "max" : "min") + "Date"];
                        void 0 !== a && (t["min" === e ? "minDateHasTime" : "maxDateHasTime"] = a.getHours() > 0 || a.getMinutes() > 0 || a.getSeconds() > 0), t.selectedDates && (t.selectedDates = t.selectedDates.filter((function(e) {
                            return ne(e)
                        })), t.selectedDates.length || "min" !== e || O(a), ye()), t.daysContainer && (ue(), void 0 !== a ? t.currentYearElement[e] = a.getFullYear().toString() : t.currentYearElement.removeAttribute(e), t.currentYearElement.disabled = !!i && void 0 !== a && i.getFullYear() === a.getFullYear())
                    }
                }

                function ce() {
                    return t.config.wrap ? e.querySelector("[data-input]") : e
                }

                function se() {
                    "object" != typeof t.config.locale && void 0 === F.l10ns[t.config.locale] && t.config.errorHandler(new Error("flatpickr: invalid locale " + t.config.locale)), t.l10n = I(I({}, F.l10ns.default), "object" == typeof t.config.locale ? t.config.locale : "default" !== t.config.locale ? F.l10ns[t.config.locale] : void 0), b.D = "(" + t.l10n.weekdays.shorthand.join("|") + ")", b.l = "(" + t.l10n.weekdays.longhand.join("|") + ")", b.M = "(" + t.l10n.months.shorthand.join("|") + ")", b.F = "(" + t.l10n.months.longhand.join("|") + ")", b.K = "(" + t.l10n.amPM[0] + "|" + t.l10n.amPM[1] + "|" + t.l10n.amPM[0].toLowerCase() + "|" + t.l10n.amPM[1].toLowerCase() + ")", void 0 === I(I({}, n), JSON.parse(JSON.stringify(e.dataset || {}))).time_24hr && void 0 === F.defaultConfig.time_24hr && (t.config.time_24hr = t.l10n.time_24hr), t.formatDate = M(t), t.parseDate = y({
                        config: t.config,
                        l10n: t.l10n
                    })
                }

                function de(e) {
                    if ("function" != typeof t.config.position) {
                        if (void 0 !== t.calendarContainer) {
                            De("onPreCalendarPosition");
                            var n = e || t._positionElement,
                                a = Array.prototype.reduce.call(t.calendarContainer.children, (function(e, n) {
                                    return e + n.offsetHeight
                                }), 0),
                                i = t.calendarContainer.offsetWidth,
                                o = t.config.position.split(" "),
                                r = o[0],
                                l = o.length > 1 ? o[1] : null,
                                c = n.getBoundingClientRect(),
                                s = window.innerHeight - c.bottom,
                                d = "above" === r || "below" !== r && s < a && c.top > a,
                                f = window.pageYOffset + c.top + (d ? -a - 2 : n.offsetHeight + 2);
                            if (u(t.calendarContainer, "arrowTop", !d), u(t.calendarContainer, "arrowBottom", d), !t.config.inline) {
                                var m = window.pageXOffset + c.left,
                                    g = !1,
                                    p = !1;
                                "center" === l ? (m -= (i - c.width) / 2, g = !0) : "right" === l && (m -= i - c.width, p = !0), u(t.calendarContainer, "arrowLeft", !g && !p), u(t.calendarContainer, "arrowCenter", g), u(t.calendarContainer, "arrowRight", p);
                                var h = window.document.body.offsetWidth - (window.pageXOffset + c.right),
                                    v = m + i > window.document.body.offsetWidth,
                                    D = h + i > window.document.body.offsetWidth;
                                if (u(t.calendarContainer, "rightMost", v), !t.config.static)
                                    if (t.calendarContainer.style.top = f + "px", v)
                                        if (D) {
                                            var w = function() {
                                                for (var e = null, n = 0; n < document.styleSheets.length; n++) {
                                                    var t = document.styleSheets[n];
                                                    if (t.cssRules) {
                                                        try {
                                                            t.cssRules
                                                        } catch (e) {
                                                            continue
                                                        }
                                                        e = t;
                                                        break
                                                    }
                                                }
                                                return null != e ? e : (a = document.createElement("style"), document.head.appendChild(a), a.sheet);
                                                var a
                                            }();
                                            if (void 0 === w) return;
                                            var b = window.document.body.offsetWidth,
                                                C = Math.max(0, b / 2 - i / 2),
                                                M = w.cssRules.length,
                                                y = "{left:" + c.left + "px;right:auto;}";
                                            u(t.calendarContainer, "rightMost", !1), u(t.calendarContainer, "centerMost", !0), w.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + y, M), t.calendarContainer.style.left = C + "px", t.calendarContainer.style.right = "auto"
                                        } else t.calendarContainer.style.left = "auto", t.calendarContainer.style.right = h + "px";
                                else t.calendarContainer.style.left = m + "px", t.calendarContainer.style.right = "auto"
                            }
                        }
                    } else t.config.position(t, e)
                }

                function ue() {
                    t.config.noCalendar || t.isMobile || (q(), Ce(), U())
                }

                function fe() {
                    t._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(t.close, 0) : t.close()
                }

                function me(e) {
                    e.preventDefault(), e.stopPropagation();
                    var n = g(h(e), (function(e) {
                        return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
                    }));
                    if (void 0 !== n) {
                        var a = n,
                            i = t.latestSelectedDateObj = new Date(a.dateObj.getTime()),
                            o = (i.getMonth() < t.currentMonth || i.getMonth() > t.currentMonth + t.config.showMonths - 1) && "range" !== t.config.mode;
                        if (t.selectedDateElem = a, "single" === t.config.mode) t.selectedDates = [i];
                        else if ("multiple" === t.config.mode) {
                            var r = be(i);
                            r ? t.selectedDates.splice(parseInt(r), 1) : t.selectedDates.push(i)
                        } else "range" === t.config.mode && (2 === t.selectedDates.length && t.clear(!1, !1), t.latestSelectedDateObj = i, t.selectedDates.push(i), 0 !== x(i, t.selectedDates[0], !0) && t.selectedDates.sort((function(e, n) {
                            return e.getTime() - n.getTime()
                        })));
                        if (_(), o) {
                            var l = t.currentYear !== i.getFullYear();
                            t.currentYear = i.getFullYear(), t.currentMonth = i.getMonth(), l && (De("onYearChange"), q()), De("onMonthChange")
                        }
                        if (Ce(), U(), ye(), o || "range" === t.config.mode || 1 !== t.config.showMonths ? void 0 !== t.selectedDateElem && void 0 === t.hourElement && t.selectedDateElem && t.selectedDateElem.focus() : W(a), void 0 !== t.hourElement && void 0 !== t.hourElement && t.hourElement.focus(), t.config.closeOnSelect) {
                            var c = "single" === t.config.mode && !t.config.enableTime,
                                s = "range" === t.config.mode && 2 === t.selectedDates.length && !t.config.enableTime;
                            (c || s) && fe()
                        }
                        Y()
                    }
                }
                t.parseDate = y({
                    config: t.config,
                    l10n: t.l10n
                }), t._handlers = [], t.pluginElements = [], t.loadedPlugins = [], t._bind = P, t._setHoursFromDate = O, t._positionCalendar = de, t.changeMonth = Z, t.changeYear = ee, t.clear = function(e, n) {
                    void 0 === e && (e = !0);
                    void 0 === n && (n = !0);
                    t.input.value = "", void 0 !== t.altInput && (t.altInput.value = "");
                    void 0 !== t.mobileInput && (t.mobileInput.value = "");
                    t.selectedDates = [], t.latestSelectedDateObj = void 0, !0 === n && (t.currentYear = t._initialDate.getFullYear(), t.currentMonth = t._initialDate.getMonth());
                    if (!0 === t.config.enableTime) {
                        var a = T(t.config),
                            i = a.hours,
                            o = a.minutes,
                            r = a.seconds;
                        A(i, o, r)
                    }
                    t.redraw(), e && De("onChange")
                }, t.close = function() {
                    t.isOpen = !1, t.isMobile || (void 0 !== t.calendarContainer && t.calendarContainer.classList.remove("open"), void 0 !== t._input && t._input.classList.remove("active"));
                    De("onClose")
                }, t.onMouseOver = oe, t._createElement = f, t.createDay = R, t.destroy = function() {
                    void 0 !== t.config && De("onDestroy");
                    for (var e = t._handlers.length; e--;) t._handlers[e].remove();
                    if (t._handlers = [], t.mobileInput) t.mobileInput.parentNode && t.mobileInput.parentNode.removeChild(t.mobileInput), t.mobileInput = void 0;
                    else if (t.calendarContainer && t.calendarContainer.parentNode)
                        if (t.config.static && t.calendarContainer.parentNode) {
                            var n = t.calendarContainer.parentNode;
                            if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                                for (; n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
                                n.parentNode.removeChild(n)
                            }
                        } else t.calendarContainer.parentNode.removeChild(t.calendarContainer);
                    t.altInput && (t.input.type = "text", t.altInput.parentNode && t.altInput.parentNode.removeChild(t.altInput), delete t.altInput);
                    t.input && (t.input.type = t.input._type, t.input.classList.remove("flatpickr-input"), t.input.removeAttribute("readonly"));
                    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((function(e) {
                        try {
                            delete t[e]
                        } catch (e) {}
                    }))
                }, t.isEnabled = ne, t.jumpToDate = j, t.updateValue = ye, t.open = function(e, n) {
                    void 0 === n && (n = t._positionElement);
                    if (!0 === t.isMobile) {
                        if (e) {
                            e.preventDefault();
                            var a = h(e);
                            a && a.blur()
                        }
                        return void 0 !== t.mobileInput && (t.mobileInput.focus(), t.mobileInput.click()), void De("onOpen")
                    }
                    if (t._input.disabled || t.config.inline) return;
                    var i = t.isOpen;
                    t.isOpen = !0, i || (t.calendarContainer.classList.add("open"), t._input.classList.add("active"), De("onOpen"), de(n));
                    !0 === t.config.enableTime && !0 === t.config.noCalendar && (!1 !== t.config.allowInput || void 0 !== e && t.timeContainer.contains(e.relatedTarget) || setTimeout((function() {
                        return t.hourElement.select()
                    }), 50))
                }, t.redraw = ue, t.set = function(e, n) {
                    if (null !== e && "object" == typeof e)
                        for (var i in Object.assign(t.config, e), e) void 0 !== ge[i] && ge[i].forEach((function(e) {
                            return e()
                        }));
                    else t.config[e] = n, void 0 !== ge[e] ? ge[e].forEach((function(e) {
                        return e()
                    })) : a.indexOf(e) > -1 && (t.config[e] = d(n));
                    t.redraw(), ye(!0)
                }, t.setDate = function(e, n, a) {
                    void 0 === n && (n = !1);
                    void 0 === a && (a = t.config.dateFormat);
                    if (0 !== e && !e || e instanceof Array && 0 === e.length) return t.clear(n);
                    pe(e, a), t.latestSelectedDateObj = t.selectedDates[t.selectedDates.length - 1], t.redraw(), j(void 0, n), O(), 0 === t.selectedDates.length && t.clear(!1);
                    ye(n), n && De("onChange")
                }, t.toggle = function(e) {
                    if (!0 === t.isOpen) return t.close();
                    t.open(e)
                };
                var ge = {
                    locale: [se, G],
                    showMonths: [V, w, z],
                    minDate: [j],
                    maxDate: [j],
                    positionElement: [ve],
                    clickOpens: [function() {
                        !0 === t.config.clickOpens ? (P(t._input, "focus", t.open), P(t._input, "click", t.open)) : (t._input.removeEventListener("focus", t.open), t._input.removeEventListener("click", t.open))
                    }]
                };

                function pe(e, n) {
                    var a = [];
                    if (e instanceof Array) a = e.map((function(e) {
                        return t.parseDate(e, n)
                    }));
                    else if (e instanceof Date || "number" == typeof e) a = [t.parseDate(e, n)];
                    else if ("string" == typeof e) switch (t.config.mode) {
                        case "single":
                        case "time":
                            a = [t.parseDate(e, n)];
                            break;
                        case "multiple":
                            a = e.split(t.config.conjunction).map((function(e) {
                                return t.parseDate(e, n)
                            }));
                            break;
                        case "range":
                            a = e.split(t.l10n.rangeSeparator).map((function(e) {
                                return t.parseDate(e, n)
                            }))
                    } else t.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
                    t.selectedDates = t.config.allowInvalidPreload ? a : a.filter((function(e) {
                        return e instanceof Date && ne(e, !1)
                    })), "range" === t.config.mode && t.selectedDates.sort((function(e, n) {
                        return e.getTime() - n.getTime()
                    }))
                }

                function he(e) {
                    return e.slice().map((function(e) {
                        return "string" == typeof e || "number" == typeof e || e instanceof Date ? t.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                            from: t.parseDate(e.from, void 0),
                            to: t.parseDate(e.to, void 0)
                        } : e
                    })).filter((function(e) {
                        return e
                    }))
                }

                function ve() {
                    t._positionElement = t.config.positionElement || t._input
                }

                function De(e, n) {
                    if (void 0 !== t.config) {
                        var a = t.config[e];
                        if (void 0 !== a && a.length > 0)
                            for (var i = 0; a[i] && i < a.length; i++) a[i](t.selectedDates, t.input.value, t, n);
                        "onChange" === e && (t.input.dispatchEvent(we("change")), t.input.dispatchEvent(we("input")))
                    }
                }

                function we(e) {
                    var n = document.createEvent("Event");
                    return n.initEvent(e, !0, !0), n
                }

                function be(e) {
                    for (var n = 0; n < t.selectedDates.length; n++) {
                        var a = t.selectedDates[n];
                        if (a instanceof Date && 0 === x(a, e)) return "" + n
                    }
                    return !1
                }

                function Ce() {
                    t.config.noCalendar || t.isMobile || !t.monthNav || (t.yearElements.forEach((function(e, n) {
                        var a = new Date(t.currentYear, t.currentMonth, 1);
                        a.setMonth(t.currentMonth + n), t.config.showMonths > 1 || "static" === t.config.monthSelectorType ? t.monthElements[n].textContent = D(a.getMonth(), t.config.shorthandCurrentMonth, t.l10n) + " " : t.monthsDropdownContainer.value = a.getMonth().toString(), e.value = a.getFullYear().toString()
                    })), t._hidePrevMonthArrow = void 0 !== t.config.minDate && (t.currentYear === t.config.minDate.getFullYear() ? t.currentMonth <= t.config.minDate.getMonth() : t.currentYear < t.config.minDate.getFullYear()), t._hideNextMonthArrow = void 0 !== t.config.maxDate && (t.currentYear === t.config.maxDate.getFullYear() ? t.currentMonth + 1 > t.config.maxDate.getMonth() : t.currentYear > t.config.maxDate.getFullYear()))
                }

                function Me(e) {
                    var n = e || (t.config.altInput ? t.config.altFormat : t.config.dateFormat);
                    return t.selectedDates.map((function(e) {
                        return t.formatDate(e, n)
                    })).filter((function(e, n, a) {
                        return "range" !== t.config.mode || t.config.enableTime || a.indexOf(e) === n
                    })).join("range" !== t.config.mode ? t.config.conjunction : t.l10n.rangeSeparator)
                }

                function ye(e) {
                    void 0 === e && (e = !0), void 0 !== t.mobileInput && t.mobileFormatStr && (t.mobileInput.value = void 0 !== t.latestSelectedDateObj ? t.formatDate(t.latestSelectedDateObj, t.mobileFormatStr) : ""), t.input.value = Me(t.config.dateFormat), void 0 !== t.altInput && (t.altInput.value = Me(t.config.altFormat)), !1 !== e && De("onValueUpdate")
                }

                function xe(e) {
                    var n = h(e),
                        a = t.prevMonthNav.contains(n),
                        i = t.nextMonthNav.contains(n);
                    a || i ? Z(a ? -1 : 1) : t.yearElements.indexOf(n) >= 0 ? n.select() : n.classList.contains("arrowUp") ? t.changeYear(t.currentYear + 1) : n.classList.contains("arrowDown") && t.changeYear(t.currentYear - 1)
                }
                return function() {
                    t.element = t.input = e, t.isOpen = !1,
                        function() {
                            var o = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                                r = I(I({}, JSON.parse(JSON.stringify(e.dataset || {}))), n),
                                l = {};
                            t.config.parseDate = r.parseDate, t.config.formatDate = r.formatDate, Object.defineProperty(t.config, "enable", {
                                get: function() {
                                    return t.config._enable
                                },
                                set: function(e) {
                                    t.config._enable = he(e)
                                }
                            }), Object.defineProperty(t.config, "disable", {
                                get: function() {
                                    return t.config._disable
                                },
                                set: function(e) {
                                    t.config._disable = he(e)
                                }
                            });
                            var c = "time" === r.mode;
                            if (!r.dateFormat && (r.enableTime || c)) {
                                var s = F.defaultConfig.dateFormat || i.dateFormat;
                                l.dateFormat = r.noCalendar || c ? "H:i" + (r.enableSeconds ? ":S" : "") : s + " H:i" + (r.enableSeconds ? ":S" : "")
                            }
                            if (r.altInput && (r.enableTime || c) && !r.altFormat) {
                                var u = F.defaultConfig.altFormat || i.altFormat;
                                l.altFormat = r.noCalendar || c ? "h:i" + (r.enableSeconds ? ":S K" : " K") : u + " h:i" + (r.enableSeconds ? ":S" : "") + " K"
                            }
                            Object.defineProperty(t.config, "minDate", {
                                get: function() {
                                    return t.config._minDate
                                },
                                set: le("min")
                            }), Object.defineProperty(t.config, "maxDate", {
                                get: function() {
                                    return t.config._maxDate
                                },
                                set: le("max")
                            });
                            var f = function(e) {
                                return function(n) {
                                    t.config["min" === e ? "_minTime" : "_maxTime"] = t.parseDate(n, "H:i:S")
                                }
                            };
                            Object.defineProperty(t.config, "minTime", {
                                get: function() {
                                    return t.config._minTime
                                },
                                set: f("min")
                            }), Object.defineProperty(t.config, "maxTime", {
                                get: function() {
                                    return t.config._maxTime
                                },
                                set: f("max")
                            }), "time" === r.mode && (t.config.noCalendar = !0, t.config.enableTime = !0);
                            Object.assign(t.config, l, r);
                            for (var m = 0; m < o.length; m++) t.config[o[m]] = !0 === t.config[o[m]] || "true" === t.config[o[m]];
                            a.filter((function(e) {
                                return void 0 !== t.config[e]
                            })).forEach((function(e) {
                                t.config[e] = d(t.config[e] || []).map(v)
                            })), t.isMobile = !t.config.disableMobile && !t.config.inline && "single" === t.config.mode && !t.config.disable.length && !t.config.enable && !t.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                            for (m = 0; m < t.config.plugins.length; m++) {
                                var g = t.config.plugins[m](t) || {};
                                for (var p in g) a.indexOf(p) > -1 ? t.config[p] = d(g[p]).map(v).concat(t.config[p]) : void 0 === r[p] && (t.config[p] = g[p])
                            }
                            r.altInputClass || (t.config.altInputClass = ce().className + " " + t.config.altInputClass);
                            De("onParseConfig")
                        }(), se(),
                        function() {
                            if (t.input = ce(), !t.input) return void t.config.errorHandler(new Error("Invalid input element specified"));
                            t.input._type = t.input.type, t.input.type = "text", t.input.classList.add("flatpickr-input"), t._input = t.input, t.config.altInput && (t.altInput = f(t.input.nodeName, t.config.altInputClass), t._input = t.altInput, t.altInput.placeholder = t.input.placeholder, t.altInput.disabled = t.input.disabled, t.altInput.required = t.input.required, t.altInput.tabIndex = t.input.tabIndex, t.altInput.type = "text", t.input.setAttribute("type", "hidden"), !t.config.static && t.input.parentNode && t.input.parentNode.insertBefore(t.altInput, t.input.nextSibling));
                            t.config.allowInput || t._input.setAttribute("readonly", "readonly");
                            ve()
                        }(),
                        function() {
                            t.selectedDates = [], t.now = t.parseDate(t.config.now) || new Date;
                            var e = t.config.defaultDate || ("INPUT" !== t.input.nodeName && "TEXTAREA" !== t.input.nodeName || !t.input.placeholder || t.input.value !== t.input.placeholder ? t.input.value : null);
                            e && pe(e, t.config.dateFormat);
                            t._initialDate = t.selectedDates.length > 0 ? t.selectedDates[0] : t.config.minDate && t.config.minDate.getTime() > t.now.getTime() ? t.config.minDate : t.config.maxDate && t.config.maxDate.getTime() < t.now.getTime() ? t.config.maxDate : t.now, t.currentYear = t._initialDate.getFullYear(), t.currentMonth = t._initialDate.getMonth(), t.selectedDates.length > 0 && (t.latestSelectedDateObj = t.selectedDates[0]);
                            void 0 !== t.config.minTime && (t.config.minTime = t.parseDate(t.config.minTime, "H:i"));
                            void 0 !== t.config.maxTime && (t.config.maxTime = t.parseDate(t.config.maxTime, "H:i"));
                            t.minDateHasTime = !!t.config.minDate && (t.config.minDate.getHours() > 0 || t.config.minDate.getMinutes() > 0 || t.config.minDate.getSeconds() > 0), t.maxDateHasTime = !!t.config.maxDate && (t.config.maxDate.getHours() > 0 || t.config.maxDate.getMinutes() > 0 || t.config.maxDate.getSeconds() > 0)
                        }(), t.utils = {
                            getDaysInMonth: function(e, n) {
                                return void 0 === e && (e = t.currentMonth), void 0 === n && (n = t.currentYear), 1 === e && (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) ? 29 : t.l10n.daysInMonth[e]
                            }
                        }, t.isMobile || function() {
                            var e = window.document.createDocumentFragment();
                            if (t.calendarContainer = f("div", "flatpickr-calendar"), t.calendarContainer.tabIndex = -1, !t.config.noCalendar) {
                                if (e.appendChild((t.monthNav = f("div", "flatpickr-months"), t.yearElements = [], t.monthElements = [], t.prevMonthNav = f("span", "flatpickr-prev-month"), t.prevMonthNav.innerHTML = t.config.prevArrow, t.nextMonthNav = f("span", "flatpickr-next-month"), t.nextMonthNav.innerHTML = t.config.nextArrow, V(), Object.defineProperty(t, "_hidePrevMonthArrow", {
                                        get: function() {
                                            return t.__hidePrevMonthArrow
                                        },
                                        set: function(e) {
                                            t.__hidePrevMonthArrow !== e && (u(t.prevMonthNav, "flatpickr-disabled", e), t.__hidePrevMonthArrow = e)
                                        }
                                    }), Object.defineProperty(t, "_hideNextMonthArrow", {
                                        get: function() {
                                            return t.__hideNextMonthArrow
                                        },
                                        set: function(e) {
                                            t.__hideNextMonthArrow !== e && (u(t.nextMonthNav, "flatpickr-disabled", e), t.__hideNextMonthArrow = e)
                                        }
                                    }), t.currentYearElement = t.yearElements[0], Ce(), t.monthNav)), t.innerContainer = f("div", "flatpickr-innerContainer"), t.config.weekNumbers) {
                                    var n = function() {
                                            t.calendarContainer.classList.add("hasWeeks");
                                            var e = f("div", "flatpickr-weekwrapper");
                                            e.appendChild(f("span", "flatpickr-weekday", t.l10n.weekAbbreviation));
                                            var n = f("div", "flatpickr-weeks");
                                            return e.appendChild(n), {
                                                weekWrapper: e,
                                                weekNumbers: n
                                            }
                                        }(),
                                        a = n.weekWrapper,
                                        i = n.weekNumbers;
                                    t.innerContainer.appendChild(a), t.weekNumbers = i, t.weekWrapper = a
                                }
                                t.rContainer = f("div", "flatpickr-rContainer"), t.rContainer.appendChild(z()), t.daysContainer || (t.daysContainer = f("div", "flatpickr-days"), t.daysContainer.tabIndex = -1), U(), t.rContainer.appendChild(t.daysContainer), t.innerContainer.appendChild(t.rContainer), e.appendChild(t.innerContainer)
                            }
                            t.config.enableTime && e.appendChild(function() {
                                t.calendarContainer.classList.add("hasTime"), t.config.noCalendar && t.calendarContainer.classList.add("noCalendar");
                                var e = T(t.config);
                                t.timeContainer = f("div", "flatpickr-time"), t.timeContainer.tabIndex = -1;
                                var n = f("span", "flatpickr-time-separator", ":"),
                                    a = p("flatpickr-hour", {
                                        "aria-label": t.l10n.hourAriaLabel
                                    });
                                t.hourElement = a.getElementsByTagName("input")[0];
                                var i = p("flatpickr-minute", {
                                    "aria-label": t.l10n.minuteAriaLabel
                                });
                                t.minuteElement = i.getElementsByTagName("input")[0], t.hourElement.tabIndex = t.minuteElement.tabIndex = -1, t.hourElement.value = l(t.latestSelectedDateObj ? t.latestSelectedDateObj.getHours() : t.config.time_24hr ? e.hours : function(e) {
                                    switch (e % 24) {
                                        case 0:
                                        case 12:
                                            return 12;
                                        default:
                                            return e % 12
                                    }
                                }(e.hours)), t.minuteElement.value = l(t.latestSelectedDateObj ? t.latestSelectedDateObj.getMinutes() : e.minutes), t.hourElement.setAttribute("step", t.config.hourIncrement.toString()), t.minuteElement.setAttribute("step", t.config.minuteIncrement.toString()), t.hourElement.setAttribute("min", t.config.time_24hr ? "0" : "1"), t.hourElement.setAttribute("max", t.config.time_24hr ? "23" : "12"), t.hourElement.setAttribute("maxlength", "2"), t.minuteElement.setAttribute("min", "0"), t.minuteElement.setAttribute("max", "59"), t.minuteElement.setAttribute("maxlength", "2"), t.timeContainer.appendChild(a), t.timeContainer.appendChild(n), t.timeContainer.appendChild(i), t.config.time_24hr && t.timeContainer.classList.add("time24hr");
                                if (t.config.enableSeconds) {
                                    t.timeContainer.classList.add("hasSeconds");
                                    var o = p("flatpickr-second");
                                    t.secondElement = o.getElementsByTagName("input")[0], t.secondElement.value = l(t.latestSelectedDateObj ? t.latestSelectedDateObj.getSeconds() : e.seconds), t.secondElement.setAttribute("step", t.minuteElement.getAttribute("step")), t.secondElement.setAttribute("min", "0"), t.secondElement.setAttribute("max", "59"), t.secondElement.setAttribute("maxlength", "2"), t.timeContainer.appendChild(f("span", "flatpickr-time-separator", ":")), t.timeContainer.appendChild(o)
                                }
                                t.config.time_24hr || (t.amPM = f("span", "flatpickr-am-pm", t.l10n.amPM[c((t.latestSelectedDateObj ? t.hourElement.value : t.config.defaultHour) > 11)]), t.amPM.title = t.l10n.toggleTitle, t.amPM.tabIndex = -1, t.timeContainer.appendChild(t.amPM));
                                return t.timeContainer
                            }());
                            u(t.calendarContainer, "rangeMode", "range" === t.config.mode), u(t.calendarContainer, "animate", !0 === t.config.animate), u(t.calendarContainer, "multiMonth", t.config.showMonths > 1), t.calendarContainer.appendChild(e);
                            var o = void 0 !== t.config.appendTo && void 0 !== t.config.appendTo.nodeType;
                            if ((t.config.inline || t.config.static) && (t.calendarContainer.classList.add(t.config.inline ? "inline" : "static"), t.config.inline && (!o && t.element.parentNode ? t.element.parentNode.insertBefore(t.calendarContainer, t._input.nextSibling) : void 0 !== t.config.appendTo && t.config.appendTo.appendChild(t.calendarContainer)), t.config.static)) {
                                var r = f("div", "flatpickr-wrapper");
                                t.element.parentNode && t.element.parentNode.insertBefore(r, t.element), r.appendChild(t.element), t.altInput && r.appendChild(t.altInput), r.appendChild(t.calendarContainer)
                            }
                            t.config.static || t.config.inline || (void 0 !== t.config.appendTo ? t.config.appendTo : window.document.body).appendChild(t.calendarContainer)
                        }(),
                        function() {
                            t.config.wrap && ["open", "close", "toggle", "clear"].forEach((function(e) {
                                Array.prototype.forEach.call(t.element.querySelectorAll("[data-" + e + "]"), (function(n) {
                                    return P(n, "click", t[e])
                                }))
                            }));
                            if (t.isMobile) return void
                            function() {
                                var e = t.config.enableTime ? t.config.noCalendar ? "time" : "datetime-local" : "date";
                                t.mobileInput = f("input", t.input.className + " flatpickr-mobile"), t.mobileInput.tabIndex = 1, t.mobileInput.type = e, t.mobileInput.disabled = t.input.disabled, t.mobileInput.required = t.input.required, t.mobileInput.placeholder = t.input.placeholder, t.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", t.selectedDates.length > 0 && (t.mobileInput.defaultValue = t.mobileInput.value = t.formatDate(t.selectedDates[0], t.mobileFormatStr));
                                t.config.minDate && (t.mobileInput.min = t.formatDate(t.config.minDate, "Y-m-d"));
                                t.config.maxDate && (t.mobileInput.max = t.formatDate(t.config.maxDate, "Y-m-d"));
                                t.input.getAttribute("step") && (t.mobileInput.step = String(t.input.getAttribute("step")));
                                t.input.type = "hidden", void 0 !== t.altInput && (t.altInput.type = "hidden");
                                try {
                                    t.input.parentNode && t.input.parentNode.insertBefore(t.mobileInput, t.input.nextSibling)
                                } catch (e) {}
                                P(t.mobileInput, "change", (function(e) {
                                    t.setDate(h(e).value, !1, t.mobileFormatStr), De("onChange"), De("onClose")
                                }))
                            }();
                            var e = s(re, 50);
                            t._debouncedChange = s(Y, 300), t.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && P(t.daysContainer, "mouseover", (function(e) {
                                "range" === t.config.mode && oe(h(e))
                            }));
                            P(t._input, "keydown", ie), void 0 !== t.calendarContainer && P(t.calendarContainer, "keydown", ie);
                            t.config.inline || t.config.static || P(window, "resize", e);
                            void 0 !== window.ontouchstart ? P(window.document, "touchstart", X) : P(window.document, "mousedown", X);
                            P(window.document, "focus", X, {
                                capture: !0
                            }), !0 === t.config.clickOpens && (P(t._input, "focus", t.open), P(t._input, "click", t.open));
                            void 0 !== t.daysContainer && (P(t.monthNav, "click", xe), P(t.monthNav, ["keyup", "increment"], N), P(t.daysContainer, "click", me));
                            if (void 0 !== t.timeContainer && void 0 !== t.minuteElement && void 0 !== t.hourElement) {
                                var n = function(e) {
                                    return h(e).select()
                                };
                                P(t.timeContainer, ["increment"], C), P(t.timeContainer, "blur", C, {
                                    capture: !0
                                }), P(t.timeContainer, "click", H), P([t.hourElement, t.minuteElement], ["focus", "click"], n), void 0 !== t.secondElement && P(t.secondElement, "focus", (function() {
                                    return t.secondElement && t.secondElement.select()
                                })), void 0 !== t.amPM && P(t.amPM, "click", (function(e) {
                                    C(e)
                                }))
                            }
                            t.config.allowInput && P(t._input, "blur", ae)
                        }(), (t.selectedDates.length || t.config.noCalendar) && (t.config.enableTime && O(t.config.noCalendar ? t.latestSelectedDateObj : void 0), ye(!1)), w();
                    var o = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    !t.isMobile && o && de(), De("onReady")
                }(), t
            }

            function O(e, n) {
                for (var t = Array.prototype.slice.call(e).filter((function(e) {
                        return e instanceof HTMLElement
                    })), a = [], i = 0; i < t.length; i++) {
                    var o = t[i];
                    try {
                        if (null !== o.getAttribute("data-fp-omit")) continue;
                        void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = _(o, n || {}), a.push(o._flatpickr)
                    } catch (e) {
                        console.error(e)
                    }
                }
                return 1 === a.length ? a[0] : a
            }
            "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
                return O(this, e)
            }, HTMLElement.prototype.flatpickr = function(e) {
                return O([this], e)
            });
            var F = function(e, n) {
                return "string" == typeof e ? O(window.document.querySelectorAll(e), n) : e instanceof Node ? O([e], n) : O(e, n)
            };
            F.defaultConfig = {}, F.l10ns = {
                en: I({}, r),
                default: I({}, r)
            }, F.localize = function(e) {
                F.l10ns.default = I(I({}, F.l10ns.default), e)
            }, F.setDefaults = function(e) {
                F.defaultConfig = I(I({}, F.defaultConfig), e)
            }, F.parseDate = y({}), F.formatDate = M({}), F.compareDates = x, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function(e) {
                return O(this, e)
            }), Date.prototype.fp_incr = function(e) {
                return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
            }, "undefined" != typeof window && (window.flatpickr = F);
            const A = F
        },
        1895: () => {
            "function" != typeof Object.assign && (Object.assign = function(e) {
                for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                if (!e) throw TypeError("Cannot convert undefined or null to object");
                for (var a = function(n) {
                        n && Object.keys(n).forEach((function(t) {
                            return e[t] = n[t]
                        }))
                    }, i = 0, o = n; i < o.length; i++) {
                    var r = o[i];
                    a(r)
                }
                return e
            })
        }
    }
]);