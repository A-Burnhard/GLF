"use strict";
(self.webpackChunkdashly = self.webpackChunkdashly || []).push([
    [482], {
        2756: (e, a, n) => {
            function t(e) {
                const a = e.regex,
                    n = {
                        $pattern: /[\w.\/]+/,
                        built_in: ["action", "bindattr", "collection", "component", "concat", "debugger", "each", "each-in", "get", "hash", "if", "in", "input", "link-to", "loc", "log", "lookup", "mut", "outlet", "partial", "query-params", "render", "template", "textarea", "unbound", "unless", "view", "with", "yield"]
                    },
                    t = /\[\]|\[[^\]]+\]/,
                    s = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
                    i = a.either(/""|"[^"]+"/, /''|'[^']+'/, t, s),
                    l = a.concat(a.optional(/\.|\.\/|\//), i, a.anyNumberOfTimes(a.concat(/(\.|\/)/, i))),
                    r = a.concat("(", t, "|", s, ")(?==)"),
                    c = {
                        begin: l
                    },
                    o = e.inherit(c, {
                        keywords: {
                            $pattern: /[\w.\/]+/,
                            literal: ["true", "false", "undefined", "null"]
                        }
                    }),
                    d = {
                        begin: /\(/,
                        end: /\)/
                    },
                    m = {
                        className: "attr",
                        begin: r,
                        relevance: 0,
                        starts: {
                            begin: /=/,
                            end: /=/,
                            starts: {
                                contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, o, d]
                            }
                        }
                    },
                    b = {
                        contains: [e.NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                            begin: /as\s+\|/,
                            keywords: {
                                keyword: "as"
                            },
                            end: /\|/,
                            contains: [{
                                begin: /\w+/
                            }]
                        }, m, o, d],
                        returnEnd: !0
                    },
                    g = e.inherit(c, {
                        className: "name",
                        keywords: n,
                        starts: e.inherit(b, {
                            end: /\)/
                        })
                    });
                d.contains = [g];
                const u = e.inherit(c, {
                        keywords: n,
                        className: "name",
                        starts: e.inherit(b, {
                            end: /\}\}/
                        })
                    }),
                    h = e.inherit(c, {
                        keywords: n,
                        className: "name"
                    }),
                    p = e.inherit(c, {
                        className: "name",
                        keywords: n,
                        starts: e.inherit(b, {
                            end: /\}\}/
                        })
                    });
                return {
                    name: "Handlebars",
                    aliases: ["hbs", "html.hbs", "html.handlebars", "htmlbars"],
                    case_insensitive: !0,
                    subLanguage: "xml",
                    contains: [{
                        begin: /\\\{\{/,
                        skip: !0
                    }, {
                        begin: /\\\\(?=\{\{)/,
                        skip: !0
                    }, e.COMMENT(/\{\{!--/, /--\}\}/), e.COMMENT(/\{\{!/, /\}\}/), {
                        className: "template-tag",
                        begin: /\{\{\{\{(?!\/)/,
                        end: /\}\}\}\}/,
                        contains: [u],
                        starts: {
                            end: /\{\{\{\{\//,
                            returnEnd: !0,
                            subLanguage: "xml"
                        }
                    }, {
                        className: "template-tag",
                        begin: /\{\{\{\{\//,
                        end: /\}\}\}\}/,
                        contains: [h]
                    }, {
                        className: "template-tag",
                        begin: /\{\{#/,
                        end: /\}\}/,
                        contains: [u]
                    }, {
                        className: "template-tag",
                        begin: /\{\{(?=else\}\})/,
                        end: /\}\}/,
                        keywords: "else"
                    }, {
                        className: "template-tag",
                        begin: /\{\{(?=else if)/,
                        end: /\}\}/,
                        keywords: "else if"
                    }, {
                        className: "template-tag",
                        begin: /\{\{\//,
                        end: /\}\}/,
                        contains: [h]
                    }, {
                        className: "template-variable",
                        begin: /\{\{\{/,
                        end: /\}\}\}/,
                        contains: [p]
                    }, {
                        className: "template-variable",
                        begin: /\{\{/,
                        end: /\}\}/,
                        contains: [p]
                    }]
                }
            }
            n.r(a), n.d(a, {
                default: () => t
            })
        }
    }
]);