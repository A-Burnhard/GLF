"use strict";
(self.webpackChunkdashly = self.webpackChunkdashly || []).push([
    [383], {
        8840: (t, n, r) => {
            r.r(n), r.d(n, {
                getCSSVariable: () => i.Z,
                getGradient: () => e.Z,
                getNextSiblings: () => a.Z,
                getPreviousSiblings: () => s.Z,
                getSubstringBetween: () => u.Z,
                hexToRgbA: () => o,
                setID: () => g,
                shadeColor: () => h.Z
            });
            var e = r(7617),
                i = r(258);

            function o(t, n) {
                let r;
                if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(t)) return r = t.substring(1).split(""), 3 === r.length && (r = [r[0], r[0], r[1], r[1], r[2], r[2]]), r = "0x" + r.join(""), `rgba(${[r>>16&255,r>>8&255,255&r].join(",")}, ${n})`;
                throw new Error("Bad Hex")
            }

            function g() {
                return Date.now().toString() + Math.floor(1e3 * Math.random()).toString()
            }
            var s = r(2233),
                a = r(3646),
                u = r(3517),
                h = r(4632)
        },
        4632: (t, n, r) => {
            function e(t, n) {
                const r = t.startsWith("#") ? 1 : 0;
                let e = parseInt(t.substring(r, 3), 16),
                    i = parseInt(t.substring(r + 2, 5), 16),
                    o = parseInt(t.substring(r + 4, 7), 16);
                e = Math.round(e / n), i = Math.round(i / n), o = Math.round(o / n), e = e < 255 ? e : 255, i = i < 255 ? i : 255, o = o < 255 ? o : 255;
                return `#${1===e.toString(16).length?`0${e.toString(16)}`:e.toString(16)}${1===i.toString(16).length?`0${i.toString(16)}`:i.toString(16)}${1===o.toString(16).length?`0${o.toString(16)}`:o.toString(16)}`
            }
            r.d(n, {
                Z: () => e
            })
        }
    }
]);