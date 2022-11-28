"use strict";
(self.webpackChunkdashly = self.webpackChunkdashly || []).push([
    [341], {
        9622: (e, n, a) => {
            a.r(n), a.d(n, {
                default: () => d
            });
            const t = "[A-Za-z$_][0-9A-Za-z$_]*",
                s = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
                c = ["true", "false", "null", "undefined", "NaN", "Infinity"],
                r = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
                i = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
                o = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
                l = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
                b = [].concat(o, r, i);

            function d(e) {
                const n = e.regex,
                    a = t,
                    d = "<>",
                    g = "</>",
                    u = {
                        begin: /<[A-Za-z0-9\\._:-]+/,
                        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                        isTrulyOpeningTag: (e, n) => {
                            const a = e[0].length + e.index,
                                t = e.input[a];
                            if ("<" === t || "," === t) return void n.ignoreMatch();
                            let s;
                            ">" === t && (((e, {
                                after: n
                            }) => {
                                const a = "</" + e[0].slice(1);
                                return -1 !== e.input.indexOf(a, n)
                            })(e, {
                                after: a
                            }) || n.ignoreMatch());
                            (s = e.input.substring(a).match(/^\s+extends\s+/)) && 0 === s.index && n.ignoreMatch()
                        }
                    },
                    m = {
                        $pattern: t,
                        keyword: s,
                        literal: c,
                        built_in: b,
                        "variable.language": l
                    },
                    E = "\\.([0-9](_?[0-9])*)",
                    A = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
                    y = {
                        className: "number",
                        variants: [{
                            begin: `(\\b(${A})((${E})|\\.)?|(${E}))[eE][+-]?([0-9](_?[0-9])*)\\b`
                        }, {
                            begin: `\\b(${A})\\b((${E})\\b|\\.)?|(${E})\\b`
                        }, {
                            begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                        }, {
                            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                        }, {
                            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                        }, {
                            begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                        }, {
                            begin: "\\b0[0-7]+n?\\b"
                        }],
                        relevance: 0
                    },
                    f = {
                        className: "subst",
                        begin: "\\$\\{",
                        end: "\\}",
                        keywords: m,
                        contains: []
                    },
                    h = {
                        begin: "html`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, f],
                            subLanguage: "xml"
                        }
                    },
                    N = {
                        begin: "css`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, f],
                            subLanguage: "css"
                        }
                    },
                    _ = {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [e.BACKSLASH_ESCAPE, f]
                    },
                    p = {
                        className: "comment",
                        variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                            relevance: 0,
                            contains: [{
                                begin: "(?=@[A-Za-z]+)",
                                relevance: 0,
                                contains: [{
                                    className: "doctag",
                                    begin: "@[A-Za-z]+"
                                }, {
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0
                                }, {
                                    className: "variable",
                                    begin: a + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0
                                }, {
                                    begin: /(?=[^\n])\s/,
                                    relevance: 0
                                }]
                            }]
                        }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                    },
                    v = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, h, N, _, y];
                f.contains = v.concat({
                    begin: /\{/,
                    end: /\}/,
                    keywords: m,
                    contains: ["self"].concat(v)
                });
                const S = [].concat(p, f.contains),
                    w = S.concat([{
                        begin: /\(/,
                        end: /\)/,
                        keywords: m,
                        contains: ["self"].concat(S)
                    }]),
                    k = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: m,
                        contains: w
                    },
                    R = {
                        variants: [{
                            match: [/class/, /\s+/, a, /\s+/, /extends/, /\s+/, n.concat(a, "(", n.concat(/\./, a), ")*")],
                            scope: {
                                1: "keyword",
                                3: "title.class",
                                5: "keyword",
                                7: "title.class.inherited"
                            }
                        }, {
                            match: [/class/, /\s+/, a],
                            scope: {
                                1: "keyword",
                                3: "title.class"
                            }
                        }]
                    },
                    O = {
                        relevance: 0,
                        match: n.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                        className: "title.class",
                        keywords: {
                            _: [...r, ...i]
                        }
                    },
                    I = {
                        variants: [{
                            match: [/function/, /\s+/, a, /(?=\s*\()/]
                        }, {
                            match: [/function/, /\s*(?=\()/]
                        }],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        label: "func.def",
                        contains: [k],
                        illegal: /%/
                    };
                const x = {
                    match: n.concat(/\b/, (T = [...o, "super"], n.concat("(?!", T.join("|"), ")")), a, n.lookahead(/\(/)),
                    className: "title.function",
                    relevance: 0
                };
                var T;
                const C = {
                        begin: n.concat(/\./, n.lookahead(n.concat(a, /(?![0-9A-Za-z$_(])/))),
                        end: a,
                        excludeBegin: !0,
                        keywords: "prototype",
                        className: "property",
                        relevance: 0
                    },
                    M = {
                        match: [/get|set/, /\s+/, a, /(?=\()/],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [{
                            begin: /\(\)/
                        }, k]
                    },
                    B = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                    Z = {
                        match: [/const|var|let/, /\s+/, a, /\s*/, /=\s*/, /(async\s*)?/, n.lookahead(B)],
                        keywords: "async",
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [k]
                    };
                return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: m,
                    exports: {
                        PARAMS_CONTAINS: w,
                        CLASS_REFERENCE: O
                    },
                    illegal: /#(?![$_A-z])/,
                    contains: [e.SHEBANG({
                        label: "shebang",
                        binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict",
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, h, N, _, p, y, O, {
                        className: "attr",
                        begin: a + n.lookahead(":"),
                        relevance: 0
                    }, Z, {
                        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        relevance: 0,
                        contains: [p, e.REGEXP_MODE, {
                            className: "function",
                            begin: B,
                            returnBegin: !0,
                            end: "\\s*=>",
                            contains: [{
                                className: "params",
                                variants: [{
                                    begin: e.UNDERSCORE_IDENT_RE,
                                    relevance: 0
                                }, {
                                    className: null,
                                    begin: /\(\s*\)/,
                                    skip: !0
                                }, {
                                    begin: /\(/,
                                    end: /\)/,
                                    excludeBegin: !0,
                                    excludeEnd: !0,
                                    keywords: m,
                                    contains: w
                                }]
                            }]
                        }, {
                            begin: /,/,
                            relevance: 0
                        }, {
                            match: /\s+/,
                            relevance: 0
                        }, {
                            variants: [{
                                begin: d,
                                end: g
                            }, {
                                match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                            }, {
                                begin: u.begin,
                                "on:begin": u.isTrulyOpeningTag,
                                end: u.end
                            }],
                            subLanguage: "xml",
                            contains: [{
                                begin: u.begin,
                                end: u.end,
                                skip: !0,
                                contains: ["self"]
                            }]
                        }]
                    }, I, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0,
                        label: "func.def",
                        contains: [k, e.inherit(e.TITLE_MODE, {
                            begin: a,
                            className: "title.function"
                        })]
                    }, {
                        match: /\.\.\./,
                        relevance: 0
                    }, C, {
                        match: "\\$" + a,
                        relevance: 0
                    }, {
                        match: [/\bconstructor(?=\s*\()/],
                        className: {
                            1: "title.function"
                        },
                        contains: [k]
                    }, x, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, R, M, {
                        match: /\$[(.]/
                    }]
                }
            }
        }
    }
]);