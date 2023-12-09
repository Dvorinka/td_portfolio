import {
    a as Pr
} from "./chunk-R5TEOUSI.mjs";
import {
    a as Mr,
    b as ot,
    c as _a,
    d as za,
    e as Oa,
    f as Da,
    g as Na,
    h as Ha
} from "./chunk-BIAKEFP3.mjs";
import "./chunk-WXY3Q2W6.mjs";
import {
    a as t,
    b as V
} from "./chunk-LTFW3AQD.mjs";
import {
    $ as Pa,
    A as Ia,
    F as de,
    H as n,
    K as P,
    L as ar,
    M as A,
    O as se,
    P as Ma,
    Q as Ee,
    T,
    V as N,
    Z as G,
    _ as ge,
    aa as Fa,
    b as Ge,
    ba as Aa,
    c as te,
    ca as ja,
    d as St,
    da as J,
    f as kt,
    fa as nt,
    g as D,
    ga as De,
    ha as Ba,
    i as ue,
    ia as Se,
    j as ee,
    ja as re,
    k as Y,
    ka as Z,
    l as Rt,
    la as B,
    m as he,
    n as Ir,
    o as ie,
    p as X,
    q as oe,
    r as Ta,
    s as d,
    t as O,
    u as rr,
    v as Le,
    w as La,
    x as Ea,
    y as Oe,
    z as Va
} from "./chunk-ZLFJQ64H.mjs";
import {
    b as L,
    c as C
} from "./chunk-ELYU6EKT.mjs";
var Tt = e => e;
var nr = {
    ms: e => 1e3 * e,
    s: e => e / 1e3
};

function Fr(e, r) {
    return r ? e * (1e3 / r) : 0
}
var Wa = (e, r, a) => (((1 - 3 * a + 3 * r) * e + (3 * a - 6 * r)) * e + 3 * r) * e,
    io = 1e-7,
    so = 12;

function lo(e, r, a, o, s) {
    let i, l, h = 0;
    do l = r + (a - r) / 2, i = Wa(l, o, s) - e, i > 0 ? a = l : r = l; while (Math.abs(i) > io && ++h < so);
    return l
}

function Lt(e, r, a, o) {
    if (e === r && a === o) return Tt;
    let s = i => lo(i, 0, 1, e, a);
    return i => i === 0 || i === 1 ? i : Wa(s(i), r, o)
}
var Wl = {
    ease: Lt(.25, .1, .25, 1),
    "ease-in": Lt(.42, 0, 1, 1),
    "ease-in-out": Lt(.42, 0, .58, 1),
    "ease-out": Lt(0, 0, .58, 1)
};

function Ua(e, r) {
    var a = {};
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0 && (a[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var s = 0;
        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) r.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (a[o[s]] = e[o[s]])
    }
    return a
}
var it = {};
Object.defineProperty(it, "__esModule", {
    value: !0
});
it.warning = function() {};
it.invariant = function() {};
var $l = it.__esModule,
    Yl = it.warning,
    uo = it.invariant;
var ho = 5;

function or(e, r, a) {
    let o = Math.max(r - ho, 0);
    return Fr(a - e(o), r - o)
}
var st = {
        stiffness: 100,
        damping: 10,
        mass: 1
    },
    go = (e = st.stiffness, r = st.damping, a = st.mass) => r / (2 * Math.sqrt(e * a));

function yo(e, r, a) {
    return e < r && a >= r || e > r && a <= r
}
var jr = ({
        stiffness: e = st.stiffness,
        damping: r = st.damping,
        mass: a = st.mass,
        from: o = 0,
        to: s = 1,
        velocity: i = 0,
        restSpeed: l = 2,
        restDistance: h = .5
    } = {}) => {
        i = i ? nr.s(i) : 0;
        let m = {
                done: !1,
                hasReachedTarget: !1,
                current: o,
                target: s
            },
            f = s - o,
            p = Math.sqrt(e / a) / 1e3,
            c = go(e, r, a),
            S;
        if (c < 1) {
            let v = p * Math.sqrt(1 - c * c);
            S = y => s - Math.exp(-c * p * y) * ((c * p * f - i) / v * Math.sin(v * y) + f * Math.cos(v * y))
        } else S = v => s - Math.exp(-p * v) * (f + (p * f - i) * v);
        return v => {
            m.current = S(v);
            let y = v === 0 ? i : or(S, v, m.current),
                b = Math.abs(y) <= l,
                k = Math.abs(s - m.current) <= h;
            return m.done = b && k, m.hasReachedTarget = yo(o, s, m.current), m
        }
    },
    Ga = ({
        from: e = 0,
        velocity: r = 0,
        power: a = .8,
        decay: o = .325,
        bounceDamping: s,
        bounceStiffness: i,
        changeTarget: l,
        min: h,
        max: m,
        restDistance: f = .5,
        restSpeed: p
    }) => {
        o = nr.ms(o);
        let c = {
                hasReachedTarget: !1,
                done: !1,
                current: e,
                target: e
            },
            S = w => h !== void 0 && w < h || m !== void 0 && w > m,
            v = w => h === void 0 ? m : m === void 0 || Math.abs(h - w) < Math.abs(m - w) ? h : m,
            y = a * r,
            b = e + y,
            k = l === void 0 ? b : l(b);
        c.target = k, k !== b && (y = k - e);
        let g = w => -y * Math.exp(-w / o),
            x = w => k + g(w),
            u = w => {
                let F = g(w),
                    z = x(w);
                c.done = Math.abs(F) <= f, c.current = c.done ? k : z
            },
            R, M, I = w => {
                S(c.current) && (R = w, M = jr({
                    from: c.current,
                    to: v(c.current),
                    velocity: or(x, w, c.current),
                    damping: s,
                    stiffness: i,
                    restDistance: f,
                    restSpeed: p
                }))
            };
        return I(0), w => {
            let F = !1;
            return !M && R === void 0 && (F = !0, u(w), I(w)), R !== void 0 && w > R ? (c.hasReachedTarget = !0, M(w - R)) : (c.hasReachedTarget = !1, !F && u(w), c)
        }
    },
    Ar = 10,
    bo = 1e4;

function qa(e) {
    let r, a = Ar,
        o = e(0),
        s = [o.current];
    for (; !o.done && a < bo;) o = e(a), s.push(o.done ? o.target : o.current), r === void 0 && o.hasReachedTarget && (r = a), a += Ar;
    let i = a - Ar;
    return s.length === 1 && s.push(o.current), {
        keyframes: s,
        duration: i / 1e3,
        overshootDuration: (r ?? i) / 1e3
    }
}
var xo = ["", "X", "Y", "Z"],
    wo = ["translate", "scale", "rotate", "skew"];
var Ka = {
        syntax: "<angle>",
        initialValue: "0deg",
        toDefaultUnit: e => e + "deg"
    },
    vo = {
        translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: e => e + "px"
        },
        rotate: Ka,
        scale: {
            syntax: "<number>",
            initialValue: 1,
            toDefaultUnit: Tt
        },
        skew: Ka
    },
    Co = new Map,
    So = e => `--motion-${e}`,
    Xa = ["x", "y", "z"];
wo.forEach(e => {
    xo.forEach(r => {
        Xa.push(e + r), Co.set(So(e + r), vo[e])
    })
});
var vd = new Set(Xa);
var $a = e => document.createElement("div").animate(e, {
        duration: .001
    }),
    Ya = {
        cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        partialKeyframes: () => {
            try {
                $a({
                    opacity: [1]
                })
            } catch {
                return !1
            }
            return !0
        },
        finished: () => Boolean($a({
            opacity: [0, 1]
        }).finished)
    },
    Br = {},
    ko = {};
for (let e in Ya) ko[e] = () => (Br[e] === void 0 && (Br[e] = Ya[e]()), Br[e]);

function Ja(e, r) {
    var a;
    return typeof e == "string" ? r ? ((a = r[e]) !== null && a !== void 0 || (r[e] = document.querySelectorAll(e)), e = r[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
}

function en(e) {
    let r = new WeakMap;
    return (a = {}) => {
        let o = new Map,
            s = (l = 0, h = 100, m = 0, f = !1) => {
                let p = `${l}-${h}-${m}-${f}`;
                return o.has(p) || o.set(p, e(Object.assign({
                    from: l,
                    to: h,
                    velocity: m,
                    restSpeed: f ? .05 : 2,
                    restDistance: f ? .01 : .5
                }, a))), o.get(p)
            },
            i = l => (r.has(l) || r.set(l, qa(l)), r.get(l));
        return {
            createAnimation: (l, h, m, f, p) => {
                var c, S;
                let v, y = l.length;
                if (m && y <= 2 && l.every(Ro)) {
                    let k = l[y - 1],
                        g = y === 1 ? null : l[0],
                        x = 0,
                        u = 0,
                        R = p?.generator;
                    if (R) {
                        let {
                            animation: w,
                            generatorStartTime: F
                        } = p, z = w?.startTime || F || 0, H = w?.currentTime || performance.now() - z, Q = R(H).current;
                        u = (c = g) !== null && c !== void 0 ? c : Q, (y === 1 || y === 2 && l[0] === null) && (x = or(ce => R(ce).current, H, Q))
                    } else u = (S = g) !== null && S !== void 0 ? S : parseFloat(h());
                    let M = s(u, k, x, f?.includes("scale")),
                        I = i(M);
                    v = Object.assign(Object.assign({}, I), {
                        easing: "linear"
                    }), p && (p.generator = M, p.generatorStartTime = performance.now())
                } else v = {
                    easing: "ease",
                    duration: i(s(0, 100)).overshootDuration
                };
                return v
            }
        }
    }
}
var Ro = e => typeof e != "string",
    Cd = en(jr),
    Sd = en(Ga),
    To = {
        any: 0,
        all: 1
    };

function Lo(e, r, {
    root: a,
    margin: o,
    amount: s = "any"
} = {}) {
    if (typeof IntersectionObserver > "u") return () => {};
    let i = Ja(e),
        l = new WeakMap,
        h = f => {
            f.forEach(p => {
                let c = l.get(p.target);
                if (p.isIntersecting !== Boolean(c))
                    if (p.isIntersecting) {
                        let S = r(p);
                        typeof S == "function" ? l.set(p.target, S) : m.unobserve(p.target)
                    } else c && (c(p), l.delete(p.target))
            })
        },
        m = new IntersectionObserver(h, {
            root: a,
            rootMargin: o,
            threshold: typeof s == "number" ? s : To[s]
        });
    return i.forEach(f => m.observe(f)), () => m.disconnect()
}
var ir = new WeakMap,
    Ne;

function Eo(e, r) {
    if (r) {
        let {
            inlineSize: a,
            blockSize: o
        } = r[0];
        return {
            width: a,
            height: o
        }
    }
    return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
        width: e.offsetWidth,
        height: e.offsetHeight
    }
}

function Vo({
    target: e,
    contentRect: r,
    borderBoxSize: a
}) {
    var o;
    (o = ir.get(e)) === null || o === void 0 || o.forEach(s => {
        s({
            target: e,
            contentSize: r,
            get size() {
                return Eo(e, a)
            }
        })
    })
}

function Io(e) {
    e.forEach(Vo)
}

function Mo() {
    typeof ResizeObserver < "u" && (Ne = new ResizeObserver(Io))
}

function Po(e, r) {
    Ne || Mo();
    let a = Ja(e);
    return a.forEach(o => {
        let s = ir.get(o);
        s || (s = new Set, ir.set(o, s)), s.add(r), Ne?.observe(o)
    }), () => {
        a.forEach(o => {
            let s = ir.get(o);
            s?.delete(r), s?.size || Ne?.unobserve(o)
        })
    }
}
var sr = new Set,
    Et;

function Fo() {
    Et = () => {
        let e = {
                width: C.innerWidth,
                height: C.innerHeight
            },
            r = {
                target: C,
                size: e,
                contentSize: e
            };
        sr.forEach(a => a(r))
    }, C.addEventListener("resize", Et)
}

function Ao(e) {
    return sr.add(e), Et || Fo(), () => {
        sr.delete(e), !sr.size && Et && (Et = void 0)
    }
}

function lr(e, r) {
    return typeof e == "function" ? Ao(e) : Po(e, r)
}

function _r(e, r, a) {
    e.dispatchEvent(new CustomEvent(r, {
        detail: {
            originalEvent: a
        }
    }))
}

function Za(e, r, a) {
    e.dispatchEvent(new CustomEvent(r, {
        detail: {
            originalEntry: a
        }
    }))
}
var jo = {
        isActive: e => Boolean(e.inView),
        subscribe: (e, {
            enable: r,
            disable: a
        }, {
            inViewOptions: o = {}
        }) => {
            let {
                once: s
            } = o, i = Ua(o, ["once"]);
            return Lo(e, l => {
                if (r(), Za(e, "viewenter", l), !s) return h => {
                    a(), Za(e, "viewleave", h)
                }
            }, i)
        }
    },
    Qa = (e, r, a) => o => {
        (!o.pointerType || o.pointerType === "mouse") && (a(), _r(e, r, o))
    },
    Bo = {
        isActive: e => Boolean(e.hover),
        subscribe: (e, {
            enable: r,
            disable: a
        }) => {
            let o = Qa(e, "hoverstart", r),
                s = Qa(e, "hoverend", a);
            return e.addEventListener("pointerenter", o), e.addEventListener("pointerleave", s), () => {
                e.removeEventListener("pointerenter", o), e.removeEventListener("pointerleave", s)
            }
        }
    },
    _o = {
        isActive: e => Boolean(e.press),
        subscribe: (e, {
            enable: r,
            disable: a
        }) => {
            let o = i => {
                    a(), _r(e, "pressend", i), C.removeEventListener("pointerup", o)
                },
                s = i => {
                    r(), _r(e, "pressstart", i), C.addEventListener("pointerup", o)
                };
            return e.addEventListener("pointerdown", s), () => {
                e.removeEventListener("pointerdown", s), C.removeEventListener("pointerup", o)
            }
        }
    },
    zo = {
        inView: jo,
        hover: Bo,
        press: _o
    },
    kd = ["initial", "animate", ...Object.keys(zo), "exit"];
var Oo = {
        left: e => `translateX(-${e}px)`,
        right: e => `translateX(${e}px)`,
        top: e => `translateY(-${e}px)`,
        bottom: e => `translateY(${e}px)`
    },
    zr = typeof Animation < "u" && typeof Animation.prototype.updatePlaybackRate == "function";

function lt(e) {
    let {
        slots: r,
        gap: a,
        padding: o,
        paddingPerSide: s,
        paddingTop: i,
        paddingRight: l,
        paddingBottom: h,
        paddingLeft: m,
        speed: f,
        hoverFactor: p,
        direction: c,
        alignment: S,
        sizingOptions: v,
        fadeOptions: y,
        style: b
    } = e, {
        fadeContent: k,
        overflow: g,
        fadeWidth: x,
        fadeInset: u,
        fadeAlpha: R
    } = y, {
        widthType: M,
        heightType: I
    } = v, w = s ? `${i}px ${l}px ${h}px ${m}px` : `${o}px`, F = de.current() === de.canvas, z = Ge.count(r), H = z > 0;
    c === !0 && (c = "left");
    let Q = c === "left" || c === "right",
        ce = rr(0),
        Pe = Oo[c],
        xe = Le(ce, Pe),
        Fe = ie(null),
        ye = he(() => [kt(), kt()], []),
        [Re, Te] = X({
            parent: null,
            children: null
        }),
        ut = [],
        Qe = [],
        ht = 0,
        gt = 0;
    F && (ht = z ? Math.floor(10 / z) : 0, gt = 1), !F && H && Re.parent && (ht = Math.round(Re.parent / Re.children * 2) + 1, gt = 1);
    let Ae = ue(() => {
            if (H && Fe.current) {
                let K = Q ? Fe.current.offsetWidth : Fe.current.offsetHeight,
                    le = ye[0].current ? Q ? ye[0].current.offsetLeft : ye[0].current.offsetTop : 0,
                    we = (ye[1].current ? Q ? ye[1].current.offsetLeft + ye[1].current.offsetWidth : ye[1].current.offsetTop + ye[1].current.offsetHeight : 0) - le + a;
                Te({
                    parent: K,
                    children: we
                })
            }
        }, []),
        yt = F ? {
            contentVisibility: "auto"
        } : {};
    if (H) {
        if (!F) {
            let K = ie(!0);
            ee(() => (Ae(), lr(Fe.current, ({
                contentSize: le
            }) => {
                !K.current && (le.width || le.height) && Ae(), K.current = !1
            })), [])
        }
        ut = Ge.map(r, (K, le) => {
            var me, we, fe, pe;
            let _;
            le === 0 && (_ = ye[0]), le === r.length - 1 && (_ = ye[1]);
            let Ue = {
                width: M ? (me = K.props) === null || me === void 0 ? void 0 : me.width : "100%",
                height: I ? (we = K.props) === null || we === void 0 ? void 0 : we.height : "100%"
            };
            return t(O, {
                inherit: "id",
                children: t("li", {
                    ref: _,
                    style: Ue,
                    children: St(K, {
                        style: {
                            ...(fe = K.props) === null || fe === void 0 ? void 0 : fe.style,
                            ...Ue,
                            flexShrink: 0,
                            ...yt
                        },
                        layoutId: void 0
                    }, (pe = K.props) === null || pe === void 0 ? void 0 : pe.children)
                })
            })
        })
    }
    if (!F)
        for (let K = 0; K < ht; K++) Qe = [...Qe, ...Ge.map(r, (le, me) => {
            var we, fe, pe, _;
            return t(O, {
                inherit: "id",
                children: t("li", {
                    style: {
                        display: "contents"
                    },
                    "aria-hidden": !0,
                    children: St(le, {
                        key: K + " " + me,
                        style: {
                            ...(we = le.props) === null || we === void 0 ? void 0 : we.style,
                            width: M ? (fe = le.props) === null || fe === void 0 ? void 0 : fe.width : "100%",
                            height: I ? (pe = le.props) === null || pe === void 0 ? void 0 : pe.height : "100%",
                            flexShrink: 0,
                            ...yt
                        },
                        layoutId: void 0
                    }, (_ = le.props) === null || _ === void 0 ? void 0 : _.children)
                }, K + "li" + me)
            }, K + "lg" + me)
        })];
    let q = Re.children + Re.children * Math.round(Re.parent / Re.children),
        je = ie(null),
        bt = ie(null),
        Xe = ie(0),
        xt = ie(!1),
        gr = Ia(Fe),
        $t = Ea(),
        Yt = ie(null),
        Be = ie(null);
    F || (zr ? ee(() => {
        if (!($t || !q || !f)) return Be.current = Yt.current.animate({
            transform: [Pe(0), Pe(q)]
        }, {
            duration: Math.abs(q) / f * 1e3,
            iterations: 1 / 0,
            easing: "linear"
        }), () => Be.current.cancel()
    }, [p, q, f]) : La(K => {
        if (!q || $t || zr) return;
        je.current === null && (je.current = K), K = K - je.current;
        let me = (bt.current === null ? 0 : K - bt.current) * (f / 1e3);
        xt.current && (me *= p), Xe.current += me, Xe.current = Oe(0, q, Xe.current), bt.current = K, gr && ce.set(Xe.current)
    }));
    let Zt = Q ? "to right" : "to bottom",
        Qt = x / 2,
        yr = 100 - x / 2,
        br = Uo(u, 0, Qt),
        xr = 100 - u,
        wt = `linear-gradient(${Zt}, rgba(0, 0, 0, ${R}) ${br}%, rgba(0, 0, 0, 1) ${Qt}%, rgba(0, 0, 0, 1) ${yr}%, rgba(0, 0, 0, ${R}) ${xr}%)`;
    return H ? t("section", {
        style: {
            ...tn,
            opacity: gt,
            WebkitMaskImage: k ? wt : void 0,
            MozMaskImage: k ? wt : void 0,
            maskImage: k ? wt : void 0,
            overflow: g ? "visible" : "hidden",
            padding: w
        },
        ref: Fe,
        children: V(d.ul, {
            ref: Yt,
            style: {
                ...tn,
                gap: a,
                top: c === "bottom" && rn(q) ? -q : void 0,
                left: c === "right" && rn(q) ? -q : void 0,
                placeItems: S,
                position: "relative",
                flexDirection: Q ? "row" : "column",
                ...b,
                transform: zr ? void 0 : xe,
                willChange: "transform"
            },
            onMouseEnter: () => {
                xt.current = !0, Be.current && Be.current.updatePlaybackRate(p)
            },
            onMouseLeave: () => {
                xt.current = !1, Be.current && Be.current.updatePlaybackRate(1)
            },
            children: [ut, Qe]
        })
    }) : V("section", {
        style: Do,
        children: [t("div", {
            style: No,
            children: "\u2728"
        }), t("p", {
            style: Ho,
            children: "Connect to Content"
        }), t("p", {
            style: Wo,
            children: "Add layers or components to infinitely loop on your page."
        })]
    })
}
lt.defaultProps = {
    gap: 10,
    padding: 10,
    sizingOptions: {
        widthType: !0,
        heightType: !0
    },
    fadeOptions: {
        fadeContent: !0,
        overflow: !1,
        fadeWidth: 25,
        fadeAlpha: 0,
        fadeInset: 0
    },
    direction: !0
};
P(lt, {
    slots: {
        type: n.Array,
        title: "Children",
        control: {
            type: n.ComponentInstance
        }
    },
    speed: {
        type: n.Number,
        title: "Speed",
        min: 0,
        max: 1e3,
        defaultValue: 100,
        unit: "%",
        displayStepper: !0,
        step: 5
    },
    direction: {
        type: n.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        defaultValue: "left",
        displaySegmentedControl: !0
    },
    alignment: {
        type: n.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    gap: {
        type: n.Number,
        title: "Gap"
    },
    padding: {
        title: "Padding",
        type: n.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    sizingOptions: {
        type: n.Object,
        title: "Sizing",
        controls: {
            widthType: {
                type: n.Boolean,
                title: "Width",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            },
            heightType: {
                type: n.Boolean,
                title: "Height",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            }
        }
    },
    fadeOptions: {
        type: n.Object,
        title: "Clipping",
        controls: {
            fadeContent: {
                type: n.Boolean,
                title: "Fade",
                defaultValue: !0
            },
            overflow: {
                type: n.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(e) {
                    return e.fadeContent === !0
                }
            },
            fadeWidth: {
                type: n.Number,
                title: "Width",
                defaultValue: 25,
                min: 0,
                max: 100,
                unit: "%",
                hidden(e) {
                    return e.fadeContent === !1
                }
            },
            fadeInset: {
                type: n.Number,
                title: "Inset",
                defaultValue: 0,
                min: 0,
                max: 100,
                unit: "%",
                hidden(e) {
                    return e.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: n.Number,
                title: "Opacity",
                defaultValue: 0,
                min: 0,
                max: 1,
                step: .05,
                hidden(e) {
                    return e.fadeContent === !1
                }
            }
        }
    },
    hoverFactor: {
        type: n.Number,
        title: "Hover",
        min: 0,
        max: 1,
        unit: "x",
        defaultValue: 1,
        step: .1,
        displayStepper: !0,
        description: "Slows down the speed while you are hovering."
    }
});
var tn = {
        display: "flex",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        placeItems: "center",
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textIndent: "none"
    },
    Do = {
        display: "flex",
        width: "100%",
        height: "100%",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        color: "#96F",
        background: "rgba(136, 85, 255, 0.1)",
        fontSize: 11,
        overflow: "hidden",
        padding: "20px 20px 30px 20px"
    },
    No = {
        fontSize: 32,
        marginBottom: 10
    },
    Ho = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: "center"
    },
    Wo = {
        margin: 0,
        opacity: .7,
        maxWidth: 150,
        lineHeight: 1.5,
        textAlign: "center"
    },
    Uo = (e, r, a) => Math.min(Math.max(e, r), a),
    rn = e => typeof e == "number" && !isNaN(e);
De.loadWebFontsFromSelectors(["Inter-SemiBold"]);
var Ve = [],
    Ie = ['.framer-IhjOO .framer-styles-preset-1wml6uu:not(.rich-text-wrapper), .framer-IhjOO .framer-styles-preset-1wml6uu.rich-text-wrapper h2, .framer-IhjOO .framer-styles-preset-1wml6uu.rich-text-wrapper [data-preset-tag="h2"] { --framer-font-family: "Inter-SemiBold", "Inter", sans-serif; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.4px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, #f2f2f2); --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-IhjOO .framer-styles-preset-1wml6uu:not(.rich-text-wrapper), .framer-IhjOO .framer-styles-preset-1wml6uu.rich-text-wrapper h2, .framer-IhjOO .framer-styles-preset-1wml6uu.rich-text-wrapper [data-preset-tag="h2"] { --framer-font-family: "Inter-SemiBold", "Inter", sans-serif; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.4px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, #f2f2f2); --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-IhjOO .framer-styles-preset-1wml6uu:not(.rich-text-wrapper), .framer-IhjOO .framer-styles-preset-1wml6uu.rich-text-wrapper h2, .framer-IhjOO .framer-styles-preset-1wml6uu.rich-text-wrapper [data-preset-tag="h2"] { --framer-font-family: "Inter-SemiBold", "Inter", sans-serif; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-weight: 600; --framer-letter-spacing: -0.4px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, #f2f2f2); --framer-text-decoration: none; --framer-text-transform: none; } }'],
    Me = "framer-IhjOO";
var Go = {
        DAKIwAAoa: {
            hover: !0
        }
    },
    qo = ["DAKIwAAoa"],
    Ko = {
        DAKIwAAoa: "framer-v-o95d13"
    };

function $o(e, ...r) {
    let a = {};
    return r?.forEach(o => o && Object.assign(a, e[o])), a
}
var Yo = {},
    Zo = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Qo = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
        src: e
    } : void 0,
    Xo = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "DAKIwAAoa",
        link: h,
        image: m = {
            src: new URL("https://framerusercontent.com/images/mPJ9nHVO1GAXnnhWVuSwvdBwvM0.webp").href
        },
        ...f
    }, p) {
        let S = Yo[l] || l,
            {
                baseVariant: v,
                classNames: y,
                gestureVariant: b,
                setGestureState: k,
                setVariant: g,
                transition: x,
                variants: u
            } = J({
                cycleOrder: qo,
                defaultVariant: "DAKIwAAoa",
                enabledGestures: Go,
                transitions: Zo,
                variant: S,
                variantClassNames: Ko
            }),
            R = u.join("-") + f.layoutDependency,
            M = Y();
        return t(O, {
            id: i ?? M,
            children: t(d.div, {
                initial: S,
                animate: u,
                onHoverStart: () => k({
                    isHovered: !0
                }),
                onHoverEnd: () => k({
                    isHovered: !1
                }),
                onTapStart: () => k({
                    isPressed: !0
                }),
                onTap: () => k({
                    isPressed: !1
                }),
                onTapCancel: () => k({
                    isPressed: !1
                }),
                className: A("framer-3OlPt", y),
                style: {
                    display: "contents"
                },
                children: t(Ee, {
                    href: h,
                    openInNewTab: !0,
                    children: t(Se, {
                        ...f,
                        as: "a",
                        background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 60,
                            intrinsicWidth: 60,
                            pixelHeight: 120,
                            pixelWidth: 120,
                            ...Qo(m)
                        },
                        className: `${A("framer-o95d13",a)} framer-r74xsj`,
                        "data-framer-name": "Variant 1",
                        layoutDependency: R,
                        layoutId: "DAKIwAAoa",
                        ref: p,
                        style: {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            opacity: 1,
                            ...r
                        },
                        transition: x,
                        variants: {
                            "DAKIwAAoa-hover": {
                                opacity: .8
                            }
                        },
                        ...$o({
                            "DAKIwAAoa-hover": {
                                "data-framer-name": void 0
                            }
                        }, v, b)
                    })
                })
            })
        })
    }),
    Jo = ['.framer-3OlPt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-3OlPt .framer-r74xsj { display: block; }", ".framer-3OlPt .framer-o95d13 { height: 48px; overflow: hidden; position: relative; text-decoration: none; width: 48px; will-change: transform; }", ".framer-3OlPt .framer-v-o95d13 .framer-o95d13 { cursor: pointer; }", ".framer-3OlPt.framer-v-o95d13.hover .framer-o95d13 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 48px); }"],
    It = G(Xo, Jo, "framer-3OlPt"),
    qe = It;
It.displayName = "Element/Stack Thumbnail";
It.defaultProps = {
    height: 48,
    width: 48
};
P(It, {
    fFDRfjD90: {
        title: "Link",
        type: n.Link
    },
    E626GM5v1: {
        __defaultAssetReference: "data:framer/asset-reference,mPJ9nHVO1GAXnnhWVuSwvdBwvM0.webp?originalFilename=8th70L8hfCMSHH26OxKegwlZzU.webp&preferredSize=auto",
        title: "Image",
        type: n.ResponsiveImage
    }
});
Z(It, []);
var ei = B(qe),
    ti = B(lt),
    ri = ["LAh3rQNz_"],
    ai = {
        LAh3rQNz_: "framer-v-16uipks"
    };
var ni = {},
    oi = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Mt = (e, r) => `perspective(1200px) ${r}`,
    ii = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "LAh3rQNz_",
        title: h = "Stack",
        ...m
    }, f) {
        let c = ni[l] || l,
            {
                baseVariant: S,
                classNames: v,
                gestureVariant: y,
                setGestureState: b,
                setVariant: k,
                transition: g,
                variants: x
            } = J({
                cycleOrder: ri,
                defaultVariant: "LAh3rQNz_",
                transitions: oi,
                variant: c,
                variantClassNames: ai
            }),
            u = x.join("-") + m.layoutDependency,
            R = Y();
        return t(O, {
            id: i ?? R,
            children: t(d.div, {
                initial: c,
                animate: x,
                onHoverStart: () => b({
                    isHovered: !0
                }),
                onHoverEnd: () => b({
                    isHovered: !1
                }),
                onTapStart: () => b({
                    isPressed: !0
                }),
                onTap: () => b({
                    isPressed: !1
                }),
                onTapCancel: () => b({
                    isPressed: !1
                }),
                className: A("framer-qrAvV", Me, v),
                style: {
                    display: "contents"
                },
                children: V(d.div, {
                    ...m,
                    className: A("framer-16uipks", a),
                    "data-border": !0,
                    "data-framer-name": "Stack",
                    layoutDependency: u,
                    layoutId: "LAh3rQNz_",
                    ref: f,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(238, 238, 238))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245))",
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...r
                    },
                    transition: g,
                    children: [t(re, {
                        __fromCanvasComponent: !0,
                        children: t(te, {
                            children: t(d.h3, {
                                className: "framer-styles-preset-1wml6uu",
                                "data-styles-preset": "fVxnimdqP",
                                children: "Stack"
                            })
                        }),
                        className: "framer-um9u6a",
                        layoutDependency: u,
                        layoutId: "iiSB52Iu5",
                        style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            "--framer-paragraph-spacing": "0px"
                        },
                        text: h,
                        transition: g,
                        verticalAlignment: "top",
                        withExternalLayout: !0
                    }), t(d.div, {
                        className: "framer-fs9mxl-container",
                        layoutDependency: u,
                        layoutId: "zwzzZySCY-container",
                        transition: g,
                        children: t(lt, {
                            alignment: "center",
                            direction: "left",
                            fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !0,
                                fadeInset: 0,
                                fadeWidth: 20,
                                overflow: !1
                            },
                            gap: 24,
                            height: "100%",
                            hoverFactor: .5,
                            id: "zwzzZySCY",
                            layoutId: "zwzzZySCY",
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: {
                                heightType: !0,
                                widthType: !0
                            },
                            slots: [t(d.div, {
                                className: "framer-x5kkfm-container",
                                layoutDependency: u,
                                layoutId: "Z1kJHh8A3-container",
                                transformTemplate: Mt,
                                transition: g,
                                children: t(qe, {
                                    height: "100%",
                                    id: "Z1kJHh8A3",
                                    image: {
                                        alt: "",
                                        src: "typescript.png",
                                    },
                                    layoutId: "Z1kJHh8A3",
                                    link: "#",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            }), t(d.div, {
                                className: "framer-x5kkfm-container",
                                layoutDependency: u,
                                layoutId: "Z1kJHh8A3-container",
                                transformTemplate: Mt,
                                transition: g,
                                children: t(qe, {
                                    height: "100%",
                                    id: "Z1kJHh8A3",
                                    image: {
                                        alt: "",
                                        src: "node.js.svg",
                                    },
                                    layoutId: "Z1kJHh8A3",
                                    link: "#",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            }), t(d.div, {
                                className: "framer-x5kkfm-container",
                                layoutDependency: u,
                                layoutId: "Z1kJHh8A3-container",
                                transformTemplate: Mt,
                                transition: g,
                                children: t(qe, {
                                    height: "100%",
                                    id: "Z1kJHh8A3",
                                    image: {
                                        alt: "",
                                        src: "javascript.png",
                                    },
                                    layoutId: "Z1kJHh8A3",
                                    link: "#",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            }), t(d.div, {
                                className: "framer-x5kkfm-container",
                                layoutDependency: u,
                                layoutId: "Z1kJHh8A3-container",
                                transformTemplate: Mt,
                                transition: g,
                                children: t(qe, {
                                    height: "100%",
                                    id: "Z1kJHh8A3",
                                    image: {
                                        alt: "",
                                        src: "css3.svg",
                                    },
                                    layoutId: "Z1kJHh8A3",
                                    link: "#",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            }), t(d.div, {
                                className: "framer-x5kkfm-container",
                                layoutDependency: u,
                                layoutId: "Z1kJHh8A3-container",
                                transformTemplate: Mt,
                                transition: g,
                                children: t(qe, {
                                    height: "100%",
                                    id: "Z1kJHh8A3",
                                    image: {
                                        alt: "",
                                        src: "html5.svg",
                                    },
                                    layoutId: "Z1kJHh8A3",
                                    link: "#",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            }),t(d.div, {
                                className: "framer-x5kkfm-container",
                                layoutDependency: u,
                                layoutId: "Z1kJHh8A3-container",
                                transformTemplate: Mt,
                                transition: g,
                                children: t(qe, {
                                    height: "100%",
                                    id: "Z1kJHh8A3",
                                    image: {
                                        alt: "",
                                        src: "python.svg",
                                    },
                                    layoutId: "Z1kJHh8A3",
                                    link: "#",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                }),
                            })],
                            speed: 30,
                            style: {
                                height: "100%",
                                width: "100%"
                            },
                            width: "100%"
                        })
                    })]
                })
            })
        })
    }),
    si = ['.framer-qrAvV [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-qrAvV .framer-jq4m9q { display: block; }", ".framer-qrAvV .framer-16uipks { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px 16px 16px 16px; position: relative; width: 568px; will-change: transform; }", ".framer-qrAvV .framer-um9u6a { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-qrAvV .framer-fs9mxl-container { flex: none; height: 48px; position: relative; width: 100%; }", ".framer-qrAvV .framer-x5kkfm-container, .framer-qrAvV .framer-1d2hmz7-container, .framer-qrAvV .framer-neghjf-container, .framer-qrAvV .framer-1abtdfe-container, .framer-qrAvV .framer-ndrq8e-container { height: 48px; position: relative; width: 48px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-qrAvV .framer-16uipks { gap: 0px; } .framer-qrAvV .framer-16uipks > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-qrAvV .framer-16uipks > :first-child { margin-top: 0px; } .framer-qrAvV .framer-16uipks > :last-child { margin-bottom: 0px; } }", ...Ie],
    Pt = G(ii, si, "framer-qrAvV"),
    Or = Pt;
Pt.displayName = "Stack";
Pt.defaultProps = {
    height: 118.5,
    width: 568
};
P(Pt, {
    hLaUD9GdU: {
        defaultValue: "Stack",
        displayTextArea: !1,
        title: "Title",
        type: n.String
    }
});
Z(Pt, [...ei, ...ti, ...Ve]);
var Dr = '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    dt = {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Nr = {
        ...dt,
        borderRadius: 6,
        background: "rgba(136, 85, 255, 0.3)",
        color: "#85F",
        border: "1px dashed #85F",
        flexDirection: "column"
    },
    Ft = {
        onClick: {
            type: n.EventHandler
        },
        onMouseEnter: {
            type: n.EventHandler
        },
        onMouseLeave: {
            type: n.EventHandler
        }
    },
    li = {
        type: n.Number,
        title: "Font Size",
        min: 2,
        max: 200,
        step: 1,
        displayStepper: !0
    },
    ct = {
        font: {
            type: n.Boolean,
            title: "Font",
            defaultValue: !1,
            disabledTitle: "Default",
            enabledTitle: "Custom"
        },
        fontFamily: {
            type: n.String,
            title: "Family",
            placeholder: "Inter",
            hidden: ({
                font: e
            }) => !e
        },
        fontWeight: {
            type: n.Enum,
            title: "Weight",
            options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
            hidden: ({
                font: e
            }) => !e
        }
    };
var ci = {
    100: "Thin",
    200: "Extra-light",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "Semi-bold",
    700: "Bold",
    800: "Extra-bold",
    900: "Black"
};

function At(e) {
    let {
        fontFamily: r = "Inter",
        fontSize: a = 16,
        fontWeight: o = 400,
        font: s = !1
    } = e, i = ci[o], l = `"${r} ${i}", "${r}", ${Dr}`, h = r ? {
        fontSize: a,
        fontWeight: o,
        fontFamily: l
    } : {
        fontSize: a,
        fontWeight: o
    }, m = async () => {
        await De.loadWebFontsFromSelectors([`CUSTOM;${r}`, `CUSTOM;${r} ${i}`, `GF;${r}-${i.toLowerCase()}`]).catch(f => console.error(f))
    };
    return ee(() => {
        s && m()
    }, [s, r, o]), h
}

function Hr() {
    return he(() => de.current() === de.canvas, [])
}

function Ke(e) {
    let {
        borderRadius: r,
        isMixedBorderRadius: a,
        topLeftRadius: o,
        topRightRadius: s,
        bottomRightRadius: i,
        bottomLeftRadius: l
    } = e;
    return he(() => a ? `${o}px ${s}px ${i}px ${l}px` : `${r}px`, [r, a, o, s, i, l])
}
var $e = {
    borderRadius: {
        title: "Radius",
        type: n.FusedNumber,
        toggleKey: "isMixedBorderRadius",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0
    }
};

function jt(e) {
    let {
        padding: r,
        paddingPerSide: a,
        paddingTop: o,
        paddingRight: s,
        paddingBottom: i,
        paddingLeft: l
    } = e;
    return he(() => a ? `${o}px ${s}px ${i}px ${l}px` : r, [r, a, o, s, i, l])
}
var Bt = {
    padding: {
        type: n.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding"
    }
};
var fi = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    mi = /^https?:\/\/([^\/]+)[^\?]+\??(.+)$/,
    pi = e => fi.test(String(e).toLowerCase()),
    ui = e => {
        var r;
        let [, a, o] = (r = e.replace("&amp;", "&").match(mi)) !== null && r !== void 0 ? r : [null, null, null];
        return [a, new URLSearchParams(o)]
    },
    Wr = G(function({
        url: r,
        input: a,
        button: o,
        layout: s,
        style: i,
        gap: l,
        onSubmit: h,
        ...m
    }) {
        let [f, p] = X(a.value), [c, S] = X(!1), [v, y] = X(!1), [b, k] = X(!1), g = he(() => de.current() === de.canvas, []), {
            fontFamily: x,
            fontSize: u,
            fontWeight: R
        } = At(m), M = Ke(m), I = jt(m), w = ue(Q => Q === "" || !pi(Q) ? (S(!0), !1) : !0, []), F = ue(Q => {
            S(!1), p(Q.target.value)
        }, []), z = ue(() => {
            event.preventDefault();
            let [Q, ce] = ui(r);
            !w(f) || !Q || !ce ? y(!1) : (ce.set("MERGE0", f), fetch(`https://${Q}/subscribe/post`, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: ce.toString()
            }).then(Pe => {
                k(!0), h()
            }).catch(() => {
                y(!1)
            }))
        }, [r, f]), H = ue(() => {
            y(!0)
        }, []);
        return t(d.div, {
            style: {
                ...i,
                ...dt,
                "--framer-mailchimp-placeholder-color": a.placeholderColor
            },
            children: b ? t(d.div, {
                style: {
                    height: "60px",
                    width: "60px",
                    background: o.fill,
                    color: o.color,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                transition: {
                    duration: .3
                },
                children: t("svg", {
                    xmlns: "https://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    children: t("path", {
                        d: "M 2 14 L 10 22 L 26 6",
                        fill: "transparent",
                        strokeWidth: "4",
                        stroke: "currentColor",
                        strokeLinecap: "round"
                    })
                })
            }) : V("form", {
                style: {
                    width: "100%",
                    display: "grid",
                    gap: l,
                    gridTemplateColumns: s === "vertical" ? "1fr" : "1fr max-content",
                    gridTemplateRows: s === "vertical" ? "1fr 1fr" : "1fr"
                },
                onSubmit: z,
                method: "POST",
                children: [t("div", {
                    style: {
                        position: "absolute",
                        visibility: "hidden"
                    },
                    "aria-hidden": "true",
                    children: t("input", {
                        type: "text",
                        name: "b_1487cc549a49109c00fe60a80_93cd7be172",
                        tabIndex: -1
                    })
                }), t("input", {
                    type: "email",
                    name: "email",
                    placeholder: a.placeholder,
                    value: g ? a.value : f,
                    className: "framer-mailchimp-input",
                    onChange: F,
                    style: {
                        ...nn,
                        padding: I,
                        borderRadius: M,
                        fontFamily: x,
                        fontWeight: R,
                        fontSize: u,
                        background: a.fill,
                        color: a.color,
                        boxShadow: `inset 0 0 0 1px ${c?a.error:"transparent"}`
                    }
                }), V("div", {
                    style: {
                        position: "relative"
                    },
                    children: [t(d.input, {
                        type: "submit",
                        value: o.label,
                        onClick: H,
                        style: {
                            ...nn,
                            cursor: "pointer",
                            borderRadius: M,
                            padding: I,
                            fontFamily: x,
                            fontWeight: o.fontWeight,
                            fontSize: u,
                            background: o.fill,
                            color: o.color,
                            zIndex: 1
                        },
                        transition: {
                            type: "ease",
                            duration: .3
                        },
                        whileHover: {
                            opacity: .8
                        }
                    }), v && t("div", {
                        style: {
                            borderRadius: M,
                            position: "absolute",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            left: 0,
                            top: 0,
                            zIndex: 2,
                            color: o.color,
                            background: o.fill
                        },
                        children: t(d.div, {
                            style: {
                                height: 16,
                                width: 16
                            },
                            initial: {
                                rotate: 0
                            },
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 2,
                                repeat: 1 / 0
                            },
                            children: V("svg", {
                                xmlns: "https://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                children: [t("path", {
                                    d: "M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z",
                                    fill: "currentColor",
                                    opacity: "0.2"
                                }), t("path", {
                                    d: "M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z",
                                    fill: "currentColor"
                                })]
                            })
                        })
                    })]
                })]
            })
        })
    }, [".framer-mailchimp-input::placeholder { color: var(--framer-mailchimp-placeholder-color) !important; }"]);
Wr.defaultProps = {
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: 400,
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 8,
    topLeftRadius: 8,
    topRightRadius: 8,
    bottomRightRadius: 8,
    bottomLeftRadius: 8,
    gap: 15
};
P(Wr, {
    url: {
        title: "URL",
        placeholder: "https://***.us6.list-manage.com/subscribe/post?u=***",
        type: n.String,
        description: "Create a [Mailchimp](https://mailchimp.com/) account and copy your embedded form URL. [Learn more\u2026](https://www.framer.com/sites/integrations/mailchimp/)"
    },
    layout: {
        title: "Layout",
        type: n.Enum,
        options: ["horizontal", "vertical"],
        displaySegmentedControl: !0
    },
    input: {
        title: "Input",
        type: n.Object,
        controls: {
            placeholder: {
                title: "Placeholder",
                type: n.String,
                defaultValue: "email@framer.com"
            },
            placeholderColor: {
                title: " ",
                type: n.Color,
                defaultValue: "rgba(0, 0, 0, 0.3)"
            },
            value: {
                title: "Value",
                type: n.String
            },
            fill: {
                title: "Fill",
                type: n.Color,
                defaultValue: "#EBEBEB"
            },
            color: {
                title: "Text",
                type: n.Color,
                defaultValue: "#000"
            },
            error: {
                title: "Error",
                type: n.Color,
                defaultValue: "#EE4444"
            }
        }
    },
    button: {
        title: "Button",
        type: n.Object,
        controls: {
            label: {
                title: "Label",
                type: n.String,
                defaultValue: "Sign Up"
            },
            fontWeight: {
                ...ct.fontWeight,
                defaultValue: 600
            },
            fill: {
                title: "Fill",
                type: n.Color,
                defaultValue: "#000"
            },
            color: {
                title: "Text",
                type: n.Color,
                defaultValue: "#FFF"
            }
        }
    },
    ...ct,
    fontSize: {
        title: "Font Size",
        type: n.Number,
        displayStepper: !0,
        defaultValue: 16
    },
    ...Bt,
    ...$e,
    gap: {
        title: "Gap",
        type: n.Number,
        displayStepper: !0,
        min: 0
    },
    onSubmit: {
        type: n.EventHandler
    }
});
var nn = {
        WebkitAppearance: "none",
        width: "100%",
        lineHeight: "1.4em",
        outline: "none",
        border: "none"
    },
    dr = Wr;
var hi = B(dr),
    cr = ar(dr),
    gi = ["a530LLkbf"],
    yi = {
        a530LLkbf: "framer-v-h8z66e"
    };
var bi = {},
    xi = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    wi = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "a530LLkbf",
        layout: h = "horizontal",
        ...m
    }, f) {
        let c = bi[l] || l,
            {
                baseVariant: S,
                classNames: v,
                gestureVariant: y,
                setGestureState: b,
                setVariant: k,
                transition: g,
                variants: x
            } = J({
                cycleOrder: gi,
                defaultVariant: "a530LLkbf",
                transitions: xi,
                variant: c,
                variantClassNames: yi
            }),
            u = x.join("-") + m.layoutDependency,
            R = Y();
        return t(O, {
            id: i ?? R,
            children: t(d.div, {
                initial: c,
                animate: x,
                onHoverStart: () => b({
                    isHovered: !0
                }),
                onHoverEnd: () => b({
                    isHovered: !1
                }),
                onTapStart: () => b({
                    isPressed: !0
                }),
                onTap: () => b({
                    isPressed: !1
                }),
                onTapCancel: () => b({
                    isPressed: !1
                }),
                className: A("framer-U2WQh", v),
                style: {
                    display: "contents"
                },
                children: t(d.div, {
                    ...m,
                    className: A("framer-h8z66e", a),
                    "data-border": !0,
                    "data-framer-name": "Variant 1",
                    layoutDependency: u,
                    layoutId: "a530LLkbf",
                    ref: f,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(222, 222, 222))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245))",
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...r
                    },
                    transition: g,
                    children: t(d.div, {
                        className: "framer-1420789-container",
                        layoutDependency: u,
                        layoutId: "Nz2zlHI9l-container",
                        transition: g,
                        children: t(dr, {
                            borderRadius: 6,
                            bottomLeftRadius: 6,
                            bottomRightRadius: 6,
                            button: {
                                color: 'var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22)) /* {"name":"Typography"} */',
                                fill: 'var(--token-5b9801ec-2b2c-45f7-a548-e4428099a1ac, rgb(255, 255, 255)) /* {"name":"Nav Active BG"} */',
                                fontWeight: 600,
                                label: "Subscribe now"
                            },
                            font: !0,
                            fontFamily: "Inter",
                            fontSize: 14,
                            fontWeight: 400,
                            gap: 4,
                            height: "100%",
                            id: "Nz2zlHI9l",
                            input: {
                                color: 'var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(242, 242, 242)) /* {"name":"White"} */',
                                error: "rgb(255, 0, 0)",
                                fill: 'var(--token-5b9801ec-2b2c-45f7-a548-e4428099a1ac, rgb(255, 255, 255)) /* {"name":"Nav Active BG"} */',
                                placeholder: "Subscribe to the newsletter",
                                placeholderColor: 'var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(125, 127, 131)) /* {"name":"Grey"} */',
                                value: ""
                            },
                            isMixedBorderRadius: !1,
                            layout: h,
                            layoutId: "Nz2zlHI9l",
                            padding: 15,
                            paddingBottom: 12,
                            paddingLeft: 16,
                            paddingPerSide: !0,
                            paddingRight: 16,
                            paddingTop: 12,
                            style: {
                                width: "100%"
                            },
                            topLeftRadius: 6,
                            topRightRadius: 6,
                            url: "",
                            width: "100%"
                        })
                    })
                })
            })
        })
    }),
    vi = ['.framer-U2WQh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-U2WQh .framer-1tmtau9 { display: block; }", ".framer-U2WQh .framer-h8z66e { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px 16px 16px 16px; position: relative; width: 568px; will-change: transform; }", ".framer-U2WQh .framer-1420789-container { flex: none; height: auto; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-U2WQh .framer-h8z66e { gap: 0px; } .framer-U2WQh .framer-h8z66e > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-U2WQh .framer-h8z66e > :first-child { margin-top: 0px; } .framer-U2WQh .framer-h8z66e > :last-child { margin-bottom: 0px; } }"],
    _t = G(wi, vi, "framer-U2WQh"),
    Ur = _t;
_t.displayName = "Mailchimp";
_t.defaultProps = {
    height: 75,
    width: 568
};
P(_t, {
    fMrvZvys5: cr?.layout && {
        ...cr.layout,
        defaultValue: "horizontal",
        hidden: void 0,
        title: "Layout"
    }
});
Z(_t, [...hi]);
De.loadWebFontsFromSelectors(["Inter"]);
var on = [],
    sn = ['.framer-wr6pM .framer-styles-preset-21ogod:not(.rich-text-wrapper), .framer-wr6pM .framer-styles-preset-21ogod.rich-text-wrapper p, .framer-wr6pM .framer-styles-preset-21ogod.rich-text-wrapper [data-preset-tag="p"] { --framer-font-family: "Inter", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.5em; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, #7c7f82); --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-wr6pM .framer-styles-preset-21ogod:not(.rich-text-wrapper), .framer-wr6pM .framer-styles-preset-21ogod.rich-text-wrapper p, .framer-wr6pM .framer-styles-preset-21ogod.rich-text-wrapper [data-preset-tag="p"] { --framer-font-family: "Inter", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.45em; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, #7c7f82); --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-wr6pM .framer-styles-preset-21ogod:not(.rich-text-wrapper), .framer-wr6pM .framer-styles-preset-21ogod.rich-text-wrapper p, .framer-wr6pM .framer-styles-preset-21ogod.rich-text-wrapper [data-preset-tag="p"] { --framer-font-family: "Inter", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.45em; --framer-paragraph-spacing: 16px; --framer-text-alignment: left; --framer-text-color: var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, #7c7f82); --framer-text-decoration: none; --framer-text-transform: none; } }'],
    ln = "framer-wr6pM";

function ft(e) {
    let {
        styleOptions: r,
        hoverOptions: a
    } = e, {
        backgroundColor: o,
        color: s,
        borderRadius: i,
        padding: l,
        paddingPerSide: h,
        paddingTop: m,
        paddingRight: f,
        paddingBottom: p,
        paddingLeft: c
    } = r, S = h ? `${m}px ${f}px ${p}px ${c}px` : `${l}px`;
    return ki(!e.isRedirect, "https://app.lemonsqueezy.com/js/lemon.js", "lemon-squeezy-framer-component"), t(d.a, {
        href: e.url,
        className: e.isRedirect ? "" : "lemonsqueezy-button",
        target: e.isRedirect ? "_blank" : "_self",
        style: {
            fontSize: 16,
            lineHeight: 1,
            fontFamily: "Inter",
            fontWeight: 500,
            ...e.style,
            ...Si,
            ...e.fontControl,
            padding: S,
            color: s,
            backgroundColor: o,
            borderRadius: i,
            userSelect: "none",
            placeContent: Ri(e.fontControl),
            whiteSpace: "nowrap"
        },
        whileHover: {
            scale: a?.hoverScale,
            backgroundColor: a?.hoverBackgroundColor,
            color: a?.hoverColor
        },
        transition: e.hoverTransition,
        children: e.text
    })
}
ft.displayName = "Lemon Squeezy";
P(ft, {
    text: {
        title: "Text",
        type: n.String,
        defaultValue: "Buy Now"
    },
    url: {
        title: "Link",
        type: n.String,
        defaultValue: "https://makelemonade.lemonsqueezy.com/checkout/buy/0929c351-abb3-49f7-a671-ba15406517dd"
    },
    isRedirect: {
        title: "Type",
        type: n.Boolean,
        enabledTitle: "Link",
        disabledTitle: "Overlay",
        defaultValue: !0
    },
    fontControl: {
        type: n.Font,
        title: "Font",
        controls: "extended"
    },
    styleOptions: {
        type: n.Object,
        title: "Styles",
        buttonTitle: "Button, Font",
        controls: {
            backgroundColor: {
                type: n.Color,
                title: "Fill",
                defaultValue: "#40F"
            },
            color: {
                type: n.Color,
                defaultValue: "#FFF"
            },
            borderRadius: {
                type: n.Number,
                title: "Radius",
                displayStepper: !0,
                defaultValue: 50
            },
            padding: {
                title: "Padding",
                type: n.FusedNumber,
                toggleKey: "paddingPerSide",
                toggleTitles: ["Padding", "Padding per side"],
                defaultValue: 10,
                valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
                valueLabels: ["T", "R", "B", "L"],
                min: 0
            }
        }
    },
    hoverOptions: {
        type: n.Object,
        title: "Hover",
        buttonTitle: "Effect",
        optional: !0,
        description: "Learn more about the Checkout options [here](https://docs.lemonsqueezy.com/help/checkout/checkout-overlay)",
        controls: {
            hoverScale: {
                type: n.Number,
                title: "Scale",
                min: 0,
                max: 10,
                displayStepper: !0,
                step: .01,
                defaultValue: 1.1
            },
            hoverBackgroundColor: {
                type: n.Color,
                title: "Fill",
                defaultValue: "#111",
                optional: !0
            },
            hoverColor: {
                type: n.Color,
                title: "Color",
                defaultValue: "#FFF",
                optional: !0
            },
            hoverTransition: {
                type: n.Transition,
                title: "Transition",
                defaultValue: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }
            }
        }
    }
});
var Si = {
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        textDecoration: "none"
    },
    ki = (e, r, a) => {
        ee(() => {
            if (!e || document.querySelector(`#${a}`)) return;
            let o = document.createElement("script");
            o.src = r, o.id = a, o.defer = !0, o.onload = () => {
                var s;
                C.LemonSqueezy || (s = C.createLemonSqueezy) === null || s === void 0 || s.call(C)
            }, document.body.appendChild(o)
        }, [r, a, e])
    },
    Ri = e => e.textAlign === "left" ? "flex-start" : e.textAlign === "right" ? "flex-end" : "center";
var Ti = B(ft),
    Li = {
        N3FLXcRVr: {
            hover: !0,
            pressed: !0
        }
    },
    Ei = ["N3FLXcRVr", "XGy1o9eUd"],
    Vi = {
        N3FLXcRVr: "framer-v-ogttk1",
        XGy1o9eUd: "framer-v-11vyl08"
    };

function dn(e, ...r) {
    let a = {};
    return r?.forEach(o => o && Object.assign(a, e[o])), a
}
var Ii = {
        Desktop: "N3FLXcRVr",
        Mobile: "XGy1o9eUd"
    },
    Mi = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Pi = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "N3FLXcRVr",
        button: h = "Buy",
        link: m = "https://makelemonade.lemonsqueezy.com/checkout/buy/0929c351-abb3-49f7-a671-ba15406517dd",
        ...f
    }, p) {
        let S = Ii[l] || l,
            {
                baseVariant: v,
                classNames: y,
                gestureVariant: b,
                setGestureState: k,
                setVariant: g,
                transition: x,
                variants: u
            } = J({
                cycleOrder: Ei,
                defaultVariant: "N3FLXcRVr",
                enabledGestures: Li,
                transitions: Mi,
                variant: S,
                variantClassNames: Vi
            }),
            R = u.join("-") + f.layoutDependency,
            M = () => v === "XGy1o9eUd",
            I = Y();
        return t(O, {
            id: i ?? I,
            children: t(d.div, {
                initial: S,
                animate: u,
                onHoverStart: () => k({
                    isHovered: !0
                }),
                onHoverEnd: () => k({
                    isHovered: !1
                }),
                onTapStart: () => k({
                    isPressed: !0
                }),
                onTap: () => k({
                    isPressed: !1
                }),
                onTapCancel: () => k({
                    isPressed: !1
                }),
                className: A("framer-K9uk1", y),
                style: {
                    display: "contents"
                },
                children: V(d.div, {
                    ...f,
                    className: A("framer-ogttk1", a),
                    "data-border": !0,
                    "data-framer-name": "Desktop",
                    layoutDependency: R,
                    layoutId: "N3FLXcRVr",
                    ref: p,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(238, 238, 238))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245))",
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...r
                    },
                    transition: x,
                    variants: {
                        "N3FLXcRVr-hover": {
                            "--border-color": "var(--token-b0731588-6d12-493c-8302-62f9f032c7c8, rgb(219, 219, 219))"
                        }
                    },
                    ...dn({
                        "N3FLXcRVr-hover": {
                            "data-framer-name": void 0
                        },
                        "N3FLXcRVr-pressed": {
                            "data-framer-name": void 0
                        },
                        XGy1o9eUd: {
                            "data-framer-name": "Mobile"
                        }
                    }, v, b),
                    children: [t(d.div, {
                        className: "framer-jlo4rn-container",
                        layoutDependency: R,
                        layoutId: "H7fEDplJx-container",
                        transition: x,
                        children: t(ft, {
                            fontControl: {
                                fontFamily: '"Inter", sans-serif',
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                letterSpacing: "0px",
                                lineHeight: "1em"
                            },
                            height: "100%",
                            id: "H7fEDplJx",
                            isRedirect: !1,
                            layoutId: "H7fEDplJx",
                            style: {
                                width: "100%"
                            },
                            styleOptions: {
                                backgroundColor: "rgba(28, 28, 28, 0)",
                                borderRadius: 6,
                                color: 'var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22)) /* {"name":"Typography"} */',
                                padding: 10,
                                paddingBottom: 12,
                                paddingLeft: 24,
                                paddingPerSide: !0,
                                paddingRight: 24,
                                paddingTop: 12
                            },
                            text: h,
                            url: m,
                            width: "100%",
                            ...dn({
                                XGy1o9eUd: {
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    text: " "
                                }
                            }, v, b)
                        })
                    }), M() && t(d.div, {
                        className: "framer-1utt9qb",
                        "data-framer-name": "Shop Icon",
                        layoutDependency: R,
                        layoutId: "rDfWVQVGY",
                        transition: x,
                        children: t(nt, {
                            className: "framer-8elzsz",
                            "data-framer-name": "Frame",
                            layout: "position",
                            layoutDependency: R,
                            layoutId: "asu_8mpoV",
                            opacity: 1,
                            svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 16 17"><path d="M 2 6 C 2 5.264 2.597 4.667 3.333 4.667 L 12.667 4.667 C 13.403 4.667 14 5.264 14 6 L 14 13.333 C 14 14.07 13.403 14.667 12.667 14.667 L 3.333 14.667 C 2.597 14.667 2 14.07 2 13.333 Z" fill="transparent" stroke="rgb(125,127,131)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 5.333 6.667 L 5.333 4 C 5.333 2.527 6.527 1.333 8 1.333 C 9.473 1.333 10.667 2.527 10.667 4 L 10.667 6.459" fill="transparent" stroke="rgb(125,127,131)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                            svgContentId: 552734893,
                            transition: x,
                            withExternalLayout: !0
                        })
                    })]
                })
            })
        })
    }),
    Fi = ['.framer-K9uk1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-K9uk1 .framer-1bna5jw { display: block; }", ".framer-K9uk1 .framer-ogttk1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-width: 80px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 80px; will-change: transform; }", ".framer-K9uk1 .framer-jlo4rn-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-K9uk1 .framer-1utt9qb { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }", ".framer-K9uk1 .framer-8elzsz { flex: none; height: 17px; position: relative; width: 16px; }", ".framer-K9uk1 .framer-v-ogttk1 .framer-ogttk1 { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-K9uk1 .framer-ogttk1, .framer-K9uk1 .framer-1utt9qb { gap: 0px; } .framer-K9uk1 .framer-ogttk1 > *, .framer-K9uk1 .framer-1utt9qb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-K9uk1 .framer-ogttk1 > :first-child, .framer-K9uk1 .framer-1utt9qb > :first-child { margin-left: 0px; } .framer-K9uk1 .framer-ogttk1 > :last-child, .framer-K9uk1 .framer-1utt9qb > :last-child { margin-right: 0px; } }", ".framer-K9uk1.framer-v-11vyl08 .framer-ogttk1 { height: 48px; min-width: unset; width: 48px; }", ".framer-K9uk1.framer-v-11vyl08 .framer-jlo4rn-container { height: 40px; order: 0; z-index: 3; }", ".framer-K9uk1.framer-v-11vyl08 .framer-1utt9qb { order: 1; }"],
    zt = G(Pi, Fi, "framer-K9uk1"),
    Gr = zt;
zt.displayName = "Element/Lemonsqueezy Button";
zt.defaultProps = {
    height: 38,
    width: 80
};
P(zt, {
    variant: {
        options: ["N3FLXcRVr", "XGy1o9eUd"],
        optionTitles: ["Desktop", "Mobile"],
        title: "Variant",
        type: n.Enum
    },
    oaY30bxYD: {
        defaultValue: "Buy",
        title: "Button",
        type: n.String
    },
    NFFUHurEe: {
        defaultValue: "https://makelemonade.lemonsqueezy.com/checkout/buy/0929c351-abb3-49f7-a671-ba15406517dd",
        title: "Link",
        type: n.String
    }
});
Z(zt, [{
    family: "Inter",
    moduleAsset: {
        localModuleIdentifier: "local-module:canvasComponent/iCzfi2AYf:default",
        url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf"
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
    weight: "600"
}, ...Ti]);
var Ai = B(ot),
    ji = B(Gr),
    Bi = ["ALyJFZrjs", "zRTFCnP8j", "Ar36IeYHo", "fpQwz9FMR"],
    _i = {
        ALyJFZrjs: "framer-v-1owba83",
        Ar36IeYHo: "framer-v-10e6ouo",
        fpQwz9FMR: "framer-v-1n82nlh",
        zRTFCnP8j: "framer-v-1dyidk2"
    };

function fr(e, ...r) {
    let a = {};
    return r?.forEach(o => o && Object.assign(a, e[o])), a
}
var zi = {
        "Link - Desktop": "ALyJFZrjs",
        "Link - Mobile": "Ar36IeYHo",
        "Product \u2013 Desktop": "zRTFCnP8j",
        "Product \u2013 Mobile": "fpQwz9FMR"
    },
    Oi = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    qr = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
        src: e
    } : void 0,
    Di = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "ALyJFZrjs",
        title: h = "Canvas Supply",
        image: m = {
            src: new URL("https://framerusercontent.com/images/hDQUaWouoxyIThqey4W06r9HIM.webp").href
        },
        text: f = "Curating the top 1% Framer templates.",
        button: p = "View",
        link: c,
        productLinkLS: S = "https://cedricmoore.lemonsqueezy.com/checkout/buy/10b9cdbe-ee3c-42e3-9e8c-f417502491a9",
        ...v
    }, y) {
        let k = zi[l] || l,
            {
                baseVariant: g,
                classNames: x,
                gestureVariant: u,
                setGestureState: R,
                setVariant: M,
                transition: I,
                variants: w
            } = J({
                cycleOrder: Bi,
                defaultVariant: "ALyJFZrjs",
                transitions: Oi,
                variant: k,
                variantClassNames: _i
            }),
            F = w.join("-") + v.layoutDependency,
            z = () => !["zRTFCnP8j", "fpQwz9FMR"].includes(g),
            H = () => !!["zRTFCnP8j", "fpQwz9FMR"].includes(g),
            Q = Y();
        return t(O, {
            id: i ?? Q,
            children: t(d.div, {
                initial: k,
                animate: w,
                onHoverStart: () => R({
                    isHovered: !0
                }),
                onHoverEnd: () => R({
                    isHovered: !1
                }),
                onTapStart: () => R({
                    isPressed: !0
                }),
                onTap: () => R({
                    isPressed: !1
                }),
                onTapCancel: () => R({
                    isPressed: !1
                }),
                className: A("framer-18a8f", Me, ln, x),
                style: {
                    display: "contents"
                },
                children: V(d.div, {
                    ...v,
                    className: A("framer-1owba83", a),
                    "data-border": !0,
                    "data-framer-name": "Link - Desktop",
                    layoutDependency: F,
                    layoutId: "ALyJFZrjs",
                    ref: y,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(238, 238, 238))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245))",
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...r
                    },
                    transition: I,
                    ...fr({
                        Ar36IeYHo: {
                            "data-framer-name": "Link - Mobile"
                        },
                        fpQwz9FMR: {
                            "data-framer-name": "Product \u2013 Mobile"
                        },
                        zRTFCnP8j: {
                            "data-framer-name": "Product \u2013 Desktop"
                        }
                    }, g, u),
                    children: [t(Se, {
                        background: {
                            alt: "",
                            fit: "fill",
                            sizes: "64px",
                            ...qr(m)
                        },
                        className: "framer-1k0h5b3",
                        "data-framer-name": "Thumbnail",
                        layoutDependency: F,
                        layoutId: "Ewim7fn2t",
                        style: {
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6
                        },
                        transition: I,
                        ...fr({
                            Ar36IeYHo: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    sizes: "48px",
                                    ...qr(m)
                                }
                            },
                            fpQwz9FMR: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    sizes: "48px",
                                    ...qr(m)
                                }
                            }
                        }, g, u)
                    }), V(d.div, {
                        className: "framer-1l9x8kg",
                        "data-framer-name": "Text",
                        layoutDependency: F,
                        layoutId: "dU6a5FO31",
                        transition: I,
                        children: [t(re, {
                            __fromCanvasComponent: !0,
                            children: t(te, {
                                children: t(d.h3, {
                                    className: "framer-styles-preset-1wml6uu",
                                    "data-styles-preset": "fVxnimdqP",
                                    children: "Canvas Supply"
                                })
                            }),
                            className: "framer-aio3wx",
                            layoutDependency: F,
                            layoutId: "rImaAhy7I",
                            style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: h,
                            transition: I,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), t(re, {
                            __fromCanvasComponent: !0,
                            children: t(te, {
                                children: t(d.p, {
                                    className: "framer-styles-preset-21ogod",
                                    "data-styles-preset": "xZndidUCt",
                                    children: "Curating the top 1% Framer templates."
                                })
                            }),
                            className: "framer-15kd7fd",
                            layoutDependency: F,
                            layoutId: "IJRi64vuN",
                            style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: f,
                            transition: I,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })]
                    }), V(d.div, {
                        className: "framer-9xnzug",
                        "data-framer-name": "Btn Wrap",
                        layoutDependency: F,
                        layoutId: "f5mUDUnWB",
                        transition: I,
                        children: [z() && t(d.div, {
                            className: "framer-ohij5y-container",
                            layoutDependency: F,
                            layoutId: "ppOc_owAs-container",
                            transition: I,
                            children: t(ot, {
                                height: "100%",
                                id: "ppOc_owAs",
                                layoutId: "ppOc_owAs",
                                link: c,
                                title: p,
                                variant: "eUhMm5thz",
                                width: "100%",
                                ...fr({
                                    Ar36IeYHo: {
                                        variant: "wnE6MX8Fg"
                                    }
                                }, g, u)
                            })
                        }), H() && t(d.div, {
                            className: "framer-ehx9ov-container",
                            layoutDependency: F,
                            layoutId: "O6yd2e7YS-container",
                            transition: I,
                            children: t(Gr, {
                                button: p,
                                height: "100%",
                                id: "O6yd2e7YS",
                                layoutId: "O6yd2e7YS",
                                link: S,
                                variant: "N3FLXcRVr",
                                width: "100%",
                                ...fr({
                                    fpQwz9FMR: {
                                        variant: "XGy1o9eUd"
                                    }
                                }, g, u)
                            })
                        })]
                    })]
                })
            })
        })
    }),
    Ni = ['.framer-18a8f [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-18a8f .framer-1qy4ger { display: block; }", ".framer-18a8f .framer-1owba83 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px 32px 16px 16px; position: relative; width: 568px; will-change: transform; }", ".framer-18a8f .framer-1k0h5b3 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); overflow: hidden; position: relative; width: 64px; will-change: transform; }", ".framer-18a8f .framer-1l9x8kg { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-18a8f .framer-aio3wx, .framer-18a8f .framer-15kd7fd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-18a8f .framer-9xnzug { align-content: flex-end; align-items: flex-end; display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-18a8f .framer-ohij5y-container, .framer-18a8f .framer-ehx9ov-container { flex: none; height: auto; position: relative; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-18a8f .framer-1owba83, .framer-18a8f .framer-1l9x8kg, .framer-18a8f .framer-9xnzug { gap: 0px; } .framer-18a8f .framer-1owba83 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-18a8f .framer-1owba83 > :first-child { margin-left: 0px; } .framer-18a8f .framer-1owba83 > :last-child { margin-right: 0px; } .framer-18a8f .framer-1l9x8kg > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-18a8f .framer-1l9x8kg > :first-child, .framer-18a8f .framer-9xnzug > :first-child { margin-top: 0px; } .framer-18a8f .framer-1l9x8kg > :last-child, .framer-18a8f .framer-9xnzug > :last-child { margin-bottom: 0px; } .framer-18a8f .framer-9xnzug > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }", ".framer-18a8f.framer-v-10e6ouo .framer-1owba83 { align-content: flex-start; align-items: flex-start; gap: 20px; padding: 16px 16px 16px 16px; width: 375px; }", ".framer-18a8f.framer-v-10e6ouo .framer-1k0h5b3, .framer-18a8f.framer-v-1n82nlh .framer-1k0h5b3 { height: var(--framer-aspect-ratio-supported, 48px); width: 48px; }", ".framer-18a8f.framer-v-10e6ouo .framer-1l9x8kg, .framer-18a8f.framer-v-1n82nlh .framer-1l9x8kg { gap: 1px; }", ".framer-18a8f.framer-v-10e6ouo .framer-9xnzug, .framer-18a8f.framer-v-1n82nlh .framer-9xnzug { flex: none; justify-content: flex-start; width: min-content; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-18a8f.framer-v-10e6ouo .framer-1owba83, .framer-18a8f.framer-v-10e6ouo .framer-1l9x8kg { gap: 0px; } .framer-18a8f.framer-v-10e6ouo .framer-1owba83 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-18a8f.framer-v-10e6ouo .framer-1owba83 > :first-child { margin-left: 0px; } .framer-18a8f.framer-v-10e6ouo .framer-1owba83 > :last-child { margin-right: 0px; } .framer-18a8f.framer-v-10e6ouo .framer-1l9x8kg > * { margin: 0px; margin-bottom: calc(1px / 2); margin-top: calc(1px / 2); } .framer-18a8f.framer-v-10e6ouo .framer-1l9x8kg > :first-child { margin-top: 0px; } .framer-18a8f.framer-v-10e6ouo .framer-1l9x8kg > :last-child { margin-bottom: 0px; } }", ".framer-18a8f.framer-v-1n82nlh .framer-1owba83 { align-content: flex-start; align-items: flex-start; gap: 16px; padding: 16px 16px 16px 16px; width: 375px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-18a8f.framer-v-1n82nlh .framer-1owba83, .framer-18a8f.framer-v-1n82nlh .framer-1l9x8kg { gap: 0px; } .framer-18a8f.framer-v-1n82nlh .framer-1owba83 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-18a8f.framer-v-1n82nlh .framer-1owba83 > :first-child { margin-left: 0px; } .framer-18a8f.framer-v-1n82nlh .framer-1owba83 > :last-child { margin-right: 0px; } .framer-18a8f.framer-v-1n82nlh .framer-1l9x8kg > * { margin: 0px; margin-bottom: calc(1px / 2); margin-top: calc(1px / 2); } .framer-18a8f.framer-v-1n82nlh .framer-1l9x8kg > :first-child { margin-top: 0px; } .framer-18a8f.framer-v-1n82nlh .framer-1l9x8kg > :last-child { margin-bottom: 0px; } }", ...Ie, ...sn],
    Ot = G(Di, Ni, "framer-18a8f"),
    Dt = Ot;
Ot.displayName = "Link Card";
Ot.defaultProps = {
    height: 96,
    width: 568
};
P(Ot, {
    variant: {
        options: ["ALyJFZrjs", "zRTFCnP8j", "Ar36IeYHo", "fpQwz9FMR"],
        optionTitles: ["Link - Desktop", "Product \u2013 Desktop", "Link - Mobile", "Product \u2013 Mobile"],
        title: "Variant",
        type: n.Enum
    },
    DLfbKvQh7: {
        defaultValue: "Canvas Supply",
        displayTextArea: !1,
        title: "Title",
        type: n.String
    },
    Lx5HQSSNl: {
        __defaultAssetReference: "data:framer/asset-reference,hDQUaWouoxyIThqey4W06r9HIM.webp?originalFilename=hDQUaWouoxyIThqey4W06r9HIM.webp&preferredSize=auto",
        title: "Image",
        type: n.ResponsiveImage
    },
    gyj8Pvfwg: {
        defaultValue: "Curating the top 1% Framer templates.",
        displayTextArea: !1,
        title: "Text",
        type: n.String
    },
    NHu5yvPkD: {
        defaultValue: "View",
        displayTextArea: !1,
        title: "Button",
        type: n.String
    },
    ptg_Ucvm_: {
        title: "Link",
        type: n.Link
    },
    HJ4_TBMe9: {
        defaultValue: "https://cedricmoore.lemonsqueezy.com/checkout/buy/10b9cdbe-ee3c-42e3-9e8c-f417502491a9",
        placeholder: "",
        title: "Product Link (LS)",
        type: n.String
    }
});
Z(Ot, [...Ai, ...ji, ...Ve, ...on]);
var mr = () => typeof document == "object";

function Hi() {
    if (mr()) {
        if (typeof document.hidden < "u") return "visibilitychange";
        if (typeof document.msHidden < "u") return "msvisibilitychange";
        if (typeof document.webkitHidden < "u") return "webkitvisibilitychange"
    }
}

function Wi() {
    if (mr()) {
        if (typeof document.hidden < "u") return "hidden";
        if (typeof document.msHidden < "u") return "msHidden";
        if (typeof document.webkitHidden < "u") return "webkitHidden"
    }
}

function cn() {
    if (mr()) return !document[Wi()]
}

function fn() {
    if (!mr()) return;
    let [e, r] = X(cn()), a = () => r(cn());
    return ee(() => {
        let o = Hi();
        return document.addEventListener(o, a, !1), () => {
            document.removeEventListener(o, a)
        }
    }), e
}

function ae(e) {
    let {
        slots: r,
        startFrom: a,
        direction: o,
        effectsOptions: s,
        autoPlayControl: i,
        dragControl: l,
        alignment: h,
        gap: m,
        padding: f,
        paddingPerSide: p,
        paddingTop: c,
        paddingRight: S,
        paddingBottom: v,
        paddingLeft: y,
        itemAmount: b,
        fadeOptions: k,
        intervalControl: g,
        transitionControl: x,
        arrowOptions: u,
        borderRadius: R,
        progressOptions: M,
        style: I
    } = e, {
        effectsOpacity: w,
        effectsScale: F,
        effectsRotate: z,
        effectsPerspective: H,
        effectsHover: Q
    } = s, {
        fadeContent: ce,
        overflow: Pe,
        fadeWidth: xe,
        fadeInset: Fe,
        fadeAlpha: ye
    } = k, {
        showMouseControls: Re,
        arrowSize: Te,
        arrowRadius: ut,
        arrowFill: Qe,
        leftArrow: ht,
        rightArrow: gt,
        arrowShouldSpace: Ae = !0,
        arrowShouldFadeIn: yt = !1,
        arrowPosition: q,
        arrowPadding: je,
        arrowGap: bt,
        arrowPaddingTop: Xe,
        arrowPaddingRight: xt,
        arrowPaddingBottom: gr,
        arrowPaddingLeft: $t
    } = u, {
        showProgressDots: Yt,
        dotSize: Be,
        dotsInset: Zt,
        dotsRadius: Qt,
        dotsPadding: yr,
        dotsGap: br,
        dotsFill: xr,
        dotsBackground: wt,
        dotsActiveOpacity: K,
        dotsOpacity: le,
        dotsBlur: me
    } = M, we = p ? `${c}px ${S}px ${v}px ${y}px` : `${f}px`, fe = de.current() === de.canvas, pe = Ge.count(r) > 0, _ = o === "left" || o === "right", Ue = o === "right" || o === "bottom";
    if (!pe) return V("section", {
        style: Ui,
        children: [t("div", {
            style: Gi,
            children: "\u2B50\uFE0F"
        }), t("p", {
            style: qi,
            children: "Connect to Content"
        }), t("p", {
            style: Ki,
            children: "Add layers or components to make infinite auto-playing slideshows."
        })]
    });
    let vt = ie(null),
        ne = he(() => r.map(j => kt()), [r]),
        wr = ie(void 0),
        [$, zn] = X({
            parent: null,
            children: null,
            item: null,
            itemWidth: null,
            itemHeight: null
        }),
        [On, fa] = X(!1),
        [Dn, ma] = X(i),
        [Nn, pa] = X(!1),
        [Je, ua] = X(!1),
        vr = [],
        ha = 4;
    fe && (ha = 1);
    let ga = ue(() => {
        Ta.read(() => {
            if (pe && vt.current) {
                let j = r.length - 1,
                    Ce = _ ? vt.current.offsetWidth : vt.current.offsetHeight,
                    be = ne[0].current ? _ ? ne[0].current.offsetLeft : ne[0].current.offsetTop : 0,
                    at = (ne[j].current ? _ ? ne[j].current.offsetLeft + ne[j].current.offsetWidth : ne[j].current.offsetTop + ne[j].current.offsetHeight : 0) - be + m,
                    er = ne[0].current ? _ ? ne[0].current.offsetWidth : ne[0].current.offsetHeight : 0,
                    Er = ne[0].current ? ne[0].current.offsetWidth : 0,
                    Vr = ne[0].current ? ne[0].current.offsetHeight : 0;
                zn({
                    parent: Ce,
                    children: at,
                    item: er,
                    itemWidth: Er,
                    itemHeight: Vr
                })
            }
        })
    }, [pe]);
    Rt(() => {
        pe && ga()
    }, [pe, b]);
    let Cr = ie(!0);
    ee(() => lr(vt.current, ({
        contentSize: j
    }) => {
        !Cr.current && (j.width || j.height) && (ga(), ua(!0)), Cr.current = !1
    }), []), ee(() => {
        if (Je) {
            let j = setTimeout(() => ua(!1), 500);
            return () => clearTimeout(j)
        }
    }, [Je]);
    let et = r?.length,
        Xt = fe ? 0 : $?.children,
        Sr = $?.item + m,
        Hn = a * Sr,
        [ve, Ct] = X(a + et),
        [Wn, ya] = X(!1),
        ba = fn(),
        xa = Ue ? 1 : -1,
        tt = rr(Xt),
        wa = _ ? -a * ($?.itemWidth + m) : -a * ($?.itemHeight + m),
        kr = () => xa * ve * Sr,
        Rr = fe ? 0 : Le(tt, j => {
            let Ce = Oe(-Xt, -Xt * 2, j);
            return isNaN(Ce) ? 0 : Ce
        }),
        Un = Oe(0, et, ve),
        Gn = Oe(0, -et, ve);
    Rt(() => {
        $?.children !== null && !Cr.current && Je && tt.set(kr())
    }, [$, Xt, xa, Hn, ve, Sr, Je]);
    let va = () => {
            fe || !pe || !$.parent || Wn || (tt.get() !== kr() && Va(tt, kr(), x), i && Dn && (wr.current = setTimeout(() => {
                Ct(ve + 1), va()
            }, g * 1e3)))
        },
        rt = j => {
            Ct(Ue ? ve - j : ve + j)
        },
        qn = j => {
            let Ce = Oe(0, et, ve),
                be = Oe(0, -et, ve),
                _e = j - Ce,
                at = j - Math.abs(be);
            Ct(Ue ? ve - at : ve + _e)
        },
        Kn = () => {
            ya(!0)
        },
        $n = (j, {
            offset: Ce,
            velocity: be
        }) => {
            ya(!1);
            let _e = _ ? Ce.x : Ce.y,
                at = 200,
                er = _ ? be.x : be.y,
                Er = _e < -$.item / 2,
                Vr = _e > $.item / 2,
                oo = Math.abs(_e),
                tr = Math.round(oo / $.item),
                Ra = tr === 0 ? 1 : tr;
            er > at ? rt(-Ra) : er < -at ? rt(Ra) : (Er && rt(tr), Vr && rt(-tr))
        };
    ee(() => {
        if (!(!ba || Je)) return va(), () => wr.current && clearTimeout(wr.current)
    }, [vr, ba, Je]);
    let Yn = 0,
        Ca = `calc(${100/b}% - ${m}px + ${m/b}px)`;
    for (let j = 0; j < ha; j++) vr.push(...Ge.map(r, (Ce, be) => {
        let _e;
        return be === 0 && (_e = ne[0]), be === r.length - 1 && (_e = ne[1]), t(Zi, {
            ref: ne[be],
            slideKey: j + be + "lg",
            index: j,
            width: _ && b > 1 ? Ca : "100%",
            height: _ ? "100%" : b > 1 ? Ca : "100%",
            size: $,
            child: Ce,
            numChildren: r?.length,
            wrappedValue: Rr,
            childCounter: Yn++,
            gap: m,
            isCanvas: fe,
            isHorizontal: _,
            effectsOpacity: w,
            effectsScale: F,
            effectsRotate: z,
            children: j + be
        }, j + be + "lg")
    }));
    let Zn = _ ? "to right" : "to bottom",
        Sa = xe / 2,
        Qn = 100 - xe / 2,
        Xn = Yi(Fe, 0, Sa),
        Jn = 100 - Fe,
        Tr = `linear-gradient(${Zn}, rgba(0, 0, 0, ${ye}) ${Xn}%, rgba(0, 0, 0, 1) ${Sa}%, rgba(0, 0, 0, 1) ${Qn}%, rgba(0, 0, 0, ${ye}) ${Jn}%)`,
        Lr = [],
        Jt = {};
    if (Yt) {
        for (let j = 0; j < r?.length; j++) Lr.push(t(Qi, {
            dotStyle: {
                ...Ji,
                width: Be,
                height: Be,
                backgroundColor: xr
            },
            buttonStyle: Kr,
            selectedOpacity: K,
            opacity: le,
            onClick: () => qn(j),
            wrappedIndex: Un,
            wrappedIndexInverted: Gn,
            total: et,
            index: j,
            gap: br,
            padding: yr,
            isHorizontal: _,
            isInverted: Ue
        }, j));
        me > 0 && (Jt.backdropFilter = Jt.WebkitBackdropFilter = Jt.MozBackdropFilter = `blur(${me}px)`)
    }
    let eo = l ? {
            drag: _ ? "x" : "y",
            onDragStart: Kn,
            onDragEnd: $n,
            dragDirectionLock: !0,
            values: {
                x: tt,
                y: tt
            },
            dragMomentum: !1
        } : {},
        to = q === "top-left" || q === "top-mid" || q === "top-right",
        ro = q === "bottom-left" || q === "bottom-mid" || q === "bottom-right",
        ao = q === "top-left" || q === "bottom-left",
        no = q === "top-right" || q === "bottom-right",
        ka = q === "top-mid" || q === "bottom-mid" || q === "auto";
    return V("section", {
        style: {
            ...mn,
            padding: we,
            WebkitMaskImage: ce ? Tr : void 0,
            MozMaskImage: ce ? Tr : void 0,
            maskImage: ce ? Tr : void 0,
            opacity: $?.item !== null ? 1 : 0,
            userSelect: "none"
        },
        onMouseEnter: () => {
            fa(!0), Q || ma(!1)
        },
        onMouseLeave: () => {
            fa(!1), Q || ma(!0)
        },
        onMouseDown: j => {
            j.preventDefault(), pa(!0)
        },
        onMouseUp: () => pa(!1),
        children: [t("div", {
            style: {
                width: "100%",
                height: "100%",
                margin: 0,
                padding: "inherit",
                position: "absolute",
                inset: 0,
                overflow: Pe ? "visible" : "hidden",
                borderRadius: R,
                userSelect: "none",
                perspective: H
            },
            children: t(d.ul, {
                ref: vt,
                ...eo,
                style: {
                    ...mn,
                    gap: m,
                    placeItems: h,
                    x: _ ? fe ? wa : Rr : 0,
                    y: _ ? 0 : fe ? wa : Rr,
                    flexDirection: _ ? "row" : "column",
                    transformStyle: z !== 0 ? "preserve-3d" : void 0,
                    cursor: l ? Nn ? "grabbing" : "grab" : "auto",
                    userSelect: "none",
                    ...I
                },
                children: vr
            })
        }), V("fieldset", {
            style: {
                ...$i
            },
            "aria-label": "Slideshow pagination controls",
            className: "framer--slideshow-controls",
            children: [V(d.div, {
                style: {
                    position: "absolute",
                    display: "flex",
                    flexDirection: _ ? "row" : "column",
                    justifyContent: Ae ? "space-between" : "center",
                    gap: Ae ? "unset" : bt,
                    opacity: yt ? 0 : 1,
                    alignItems: "center",
                    inset: je,
                    top: Ae ? je : to ? Xe : "unset",
                    left: Ae ? je : ao ? $t : ka ? 0 : "unset",
                    right: Ae ? je : no ? xt : ka ? 0 : "unset",
                    bottom: Ae ? je : ro ? gr : "unset"
                },
                animate: yt && {
                    opacity: On ? 1 : 0
                },
                transition: x,
                children: [t(d.button, {
                    type: "button",
                    style: {
                        ...Kr,
                        backgroundColor: Qe,
                        width: Te,
                        height: Te,
                        borderRadius: ut,
                        rotate: _ ? 0 : 90,
                        display: Re ? "block" : "none",
                        pointerEvents: "auto"
                    },
                    onClick: () => rt(-1),
                    "aria-label": "Previous",
                    whileTap: {
                        scale: .9
                    },
                    transition: {
                        duration: .15
                    },
                    children: t("img", {
                        width: Te,
                        height: Te,
                        src: ht || "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                        alt: "Back Arrow"
                    })
                }), t(d.button, {
                    type: "button",
                    style: {
                        ...Kr,
                        backgroundColor: Qe,
                        width: Te,
                        height: Te,
                        borderRadius: ut,
                        rotate: _ ? 0 : 90,
                        display: Re ? "block" : "none",
                        pointerEvents: "auto"
                    },
                    onClick: () => rt(1),
                    "aria-label": "Next",
                    whileTap: {
                        scale: .9
                    },
                    transition: {
                        duration: .15
                    },
                    children: t("img", {
                        width: Te,
                        height: Te,
                        src: gt || "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                        alt: "Next Arrow"
                    })
                })]
            }), Lr.length > 1 ? t("div", {
                style: {
                    ...Xi,
                    left: _ ? "50%" : Zt,
                    top: _ ? "unset" : "50%",
                    transform: _ ? "translateX(-50%)" : "translateY(-50%)",
                    flexDirection: _ ? "row" : "column",
                    bottom: _ ? Zt : "unset",
                    borderRadius: Qt,
                    backgroundColor: wt,
                    userSelect: "none",
                    ...Jt
                },
                children: Lr
            }) : null]
        })]
    })
}
ae.defaultProps = {
    direction: "left",
    dragControl: !1,
    startFrom: 0,
    itemAmount: 1,
    infinity: !0,
    gap: 10,
    padding: 10,
    autoPlayControl: !0,
    effectsOptions: {
        effectsOpacity: 1,
        effectsScale: 1,
        effectsRotate: 0,
        effectsPerspective: 1200,
        effectsHover: !0
    },
    transitionControl: {
        type: "spring",
        stiffness: 200,
        damping: 40
    },
    fadeOptions: {
        fadeContent: !1,
        overflow: !1,
        fadeWidth: 25,
        fadeAlpha: 0,
        fadeInset: 0
    },
    arrowOptions: {
        showMouseControls: !0,
        arrowShouldFadeIn: !1,
        arrowShouldSpace: !0,
        arrowFill: "rgba(0,0,0,0.2)",
        arrowSize: 40
    },
    progressOptions: {
        showProgressDots: !0
    }
};
P(ae, {
    slots: {
        type: n.Array,
        title: "Content",
        control: {
            type: n.ComponentInstance
        }
    },
    direction: {
        type: n.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        displaySegmentedControl: !0,
        defaultValue: ae.defaultProps.direction
    },
    autoPlayControl: {
        type: n.Boolean,
        title: "Auto Play",
        defaultValue: !0
    },
    intervalControl: {
        type: n.Number,
        title: "Interval",
        defaultValue: 1.5,
        min: .5,
        max: 10,
        step: .1,
        displayStepper: !0,
        unit: "s",
        hidden: e => !e.autoPlayControl
    },
    dragControl: {
        type: n.Boolean,
        title: "Draggable",
        defaultValue: !1
    },
    startFrom: {
        type: n.Number,
        title: "Current",
        min: 0,
        max: 10,
        displayStepper: !0,
        defaultValue: ae.defaultProps.startFrom
    },
    effectsOptions: {
        type: n.Object,
        title: "Effects",
        controls: {
            effectsOpacity: {
                type: n.Number,
                title: "Opacity",
                defaultValue: ae.defaultProps.effectsOptions.effectsOpacity,
                min: 0,
                max: 1,
                step: .01,
                displayStepper: !0
            },
            effectsScale: {
                type: n.Number,
                title: "Scale",
                defaultValue: ae.defaultProps.effectsOptions.effectsScale,
                min: 0,
                max: 1,
                step: .01,
                displayStepper: !0
            },
            effectsPerspective: {
                type: n.Number,
                title: "Perspective",
                defaultValue: ae.defaultProps.effectsOptions.effectsPerspective,
                min: 200,
                max: 2e3,
                step: 1
            },
            effectsRotate: {
                type: n.Number,
                title: "Rotate",
                defaultValue: ae.defaultProps.effectsOptions.effectsRotate,
                min: -180,
                max: 180,
                step: 1
            },
            effectsHover: {
                type: n.Boolean,
                title: "On Hover",
                enabledTitle: "Play",
                disabledTitle: "Pause",
                defaultValue: ae.defaultProps.effectsOptions.effectsHover
            }
        }
    },
    alignment: {
        type: n.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    itemAmount: {
        type: n.Number,
        title: "Items",
        min: 1,
        max: 10,
        displayStepper: !0,
        defaultValue: ae.defaultProps.itemAmount
    },
    gap: {
        type: n.Number,
        title: "Gap",
        min: 0
    },
    padding: {
        title: "Padding",
        type: n.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        defaultValue: 0,
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    borderRadius: {
        type: n.Number,
        title: "Radius",
        min: 0,
        max: 500,
        displayStepper: !0,
        defaultValue: 0
    },
    transitionControl: {
        type: n.Transition,
        defaultValue: ae.defaultProps.transitionControl,
        title: "Transition"
    },
    fadeOptions: {
        type: n.Object,
        title: "Clipping",
        controls: {
            fadeContent: {
                type: n.Boolean,
                title: "Fade",
                defaultValue: !1
            },
            overflow: {
                type: n.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(e) {
                    return e.fadeContent === !0
                }
            },
            fadeWidth: {
                type: n.Number,
                title: "Width",
                defaultValue: 25,
                min: 0,
                max: 100,
                unit: "%",
                hidden(e) {
                    return e.fadeContent === !1
                }
            },
            fadeInset: {
                type: n.Number,
                title: "Inset",
                defaultValue: 0,
                min: 0,
                max: 100,
                unit: "%",
                hidden(e) {
                    return e.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: n.Number,
                title: "Opacity",
                defaultValue: 0,
                min: 0,
                max: 1,
                step: .05,
                hidden(e) {
                    return e.fadeContent === !1
                }
            }
        }
    },
    arrowOptions: {
        type: n.Object,
        title: "Arrows",
        controls: {
            showMouseControls: {
                type: n.Boolean,
                title: "Show",
                defaultValue: ae.defaultProps.arrowOptions.showMouseControls
            },
            arrowFill: {
                type: n.Color,
                title: "Fill",
                hidden: e => !e.showMouseControls,
                defaultValue: ae.defaultProps.arrowOptions.arrowFill
            },
            leftArrow: {
                type: n.Image,
                title: "Previous",
                hidden: e => !e.showMouseControls
            },
            rightArrow: {
                type: n.Image,
                title: "Next",
                hidden: e => !e.showMouseControls
            },
            arrowSize: {
                type: n.Number,
                title: "Size",
                min: 0,
                max: 200,
                displayStepper: !0,
                defaultValue: ae.defaultProps.arrowOptions.arrowSize,
                hidden: e => !e.showMouseControls
            },
            arrowRadius: {
                type: n.Number,
                title: "Radius",
                min: 0,
                max: 500,
                defaultValue: 40,
                hidden: e => !e.showMouseControls
            },
            arrowShouldFadeIn: {
                type: n.Boolean,
                title: "Fade In",
                defaultValue: !1,
                hidden: e => !e.showMouseControls
            },
            arrowShouldSpace: {
                type: n.Boolean,
                title: "Distance",
                enabledTitle: "Space",
                disabledTitle: "Group",
                defaultValue: ae.defaultProps.arrowOptions.arrowShouldSpace,
                hidden: e => !e.showMouseControls
            },
            arrowPosition: {
                type: n.Enum,
                title: "Position",
                options: ["auto", "top-left", "top-mid", "top-right", "bottom-left", "bottom-mid", "bottom-right"],
                optionTitles: ["Center", "Top Left", "Top Middle", "Top Right", "Bottom Left", "Bottom Middle", "Bottom Right"],
                hidden: e => !e.showMouseControls || e.arrowShouldSpace
            },
            arrowPadding: {
                type: n.Number,
                title: "Inset",
                min: -100,
                max: 100,
                defaultValue: 20,
                displayStepper: !0,
                hidden: e => !e.showMouseControls || !e.arrowShouldSpace
            },
            arrowPaddingTop: {
                type: n.Number,
                title: "Top",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: e => !e.showMouseControls || e.arrowShouldSpace || e.arrowPosition === "auto" || e.arrowPosition === "bottom-mid" || e.arrowPosition === "bottom-left" || e.arrowPosition === "bottom-right"
            },
            arrowPaddingBottom: {
                type: n.Number,
                title: "Bottom",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: e => !e.showMouseControls || e.arrowShouldSpace || e.arrowPosition === "auto" || e.arrowPosition === "top-mid" || e.arrowPosition === "top-left" || e.arrowPosition === "top-right"
            },
            arrowPaddingRight: {
                type: n.Number,
                title: "Right",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: e => !e.showMouseControls || e.arrowShouldSpace || e.arrowPosition === "auto" || e.arrowPosition === "top-left" || e.arrowPosition === "top-mid" || e.arrowPosition === "bottom-left" || e.arrowPosition === "bottom-mid"
            },
            arrowPaddingLeft: {
                type: n.Number,
                title: "Left",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: e => !e.showMouseControls || e.arrowShouldSpace || e.arrowPosition === "auto" || e.arrowPosition === "top-right" || e.arrowPosition === "top-mid" || e.arrowPosition === "bottom-right" || e.arrowPosition === "bottom-mid"
            },
            arrowGap: {
                type: n.Number,
                title: "Gap",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: e => !e.showMouseControls || e.arrowShouldSpace
            }
        }
    },
    progressOptions: {
        type: n.Object,
        title: "Dots",
        controls: {
            showProgressDots: {
                type: n.Boolean,
                title: "Show",
                defaultValue: !1
            },
            dotSize: {
                type: n.Number,
                title: "Size",
                min: 1,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsInset: {
                type: n.Number,
                title: "Inset",
                min: -100,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsGap: {
                type: n.Number,
                title: "Gap",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsPadding: {
                type: n.Number,
                title: "Padding",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsFill: {
                type: n.Color,
                title: "Fill",
                defaultValue: "#fff",
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsBackground: {
                type: n.Color,
                title: "Backdrop",
                defaultValue: "rgba(0,0,0,0.2)",
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsRadius: {
                type: n.Number,
                title: "Radius",
                min: 0,
                max: 200,
                defaultValue: 50,
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsOpacity: {
                type: n.Number,
                title: "Opacity",
                min: 0,
                max: 1,
                defaultValue: .5,
                step: .1,
                displayStepper: !0,
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsActiveOpacity: {
                type: n.Number,
                title: "Current",
                min: 0,
                max: 1,
                defaultValue: 1,
                step: .1,
                displayStepper: !0,
                hidden: e => !e.showProgressDots || e.showScrollbar
            },
            dotsBlur: {
                type: n.Number,
                title: "Blur",
                min: 0,
                max: 50,
                defaultValue: 0,
                step: 1,
                hidden: e => !e.showProgressDots || e.showScrollbar
            }
        }
    }
});
var mn = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        placeItems: "center",
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textIndent: "none"
    },
    Ui = {
        display: "flex",
        width: "100%",
        height: "100%",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        color: "#96F",
        background: "rgba(136, 85, 255, 0.1)",
        fontSize: 11,
        overflow: "hidden",
        padding: "20px 20px 30px 20px"
    },
    Gi = {
        fontSize: 32,
        marginBottom: 10
    },
    qi = {
        margin: 0,
        marginBottom: 10,
        fontWeight: 600,
        textAlign: "center"
    },
    Ki = {
        margin: 0,
        opacity: .7,
        maxWidth: 180,
        lineHeight: 1.5,
        textAlign: "center"
    },
    Kr = {
        border: "none",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        overflow: "hidden",
        background: "transparent",
        cursor: "pointer",
        margin: 0,
        padding: 0
    },
    $i = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        pointerEvents: "none",
        userSelect: "none",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0
    },
    Yi = (e, r, a) => Math.min(Math.max(e, r), a),
    Zi = D(function(r, a) {
        var o, s;
        let {
            slideKey: i,
            width: l,
            height: h,
            child: m,
            size: f,
            gap: p,
            wrappedValue: c,
            numChildren: S,
            childCounter: v,
            isCanvas: y,
            effects: b,
            effectsOpacity: k,
            effectsScale: g,
            effectsRotate: x,
            isHorizontal: u,
            isLast: R,
            index: M
        } = r, I = (f?.item + p) * v, w = [-f?.item, 0, f?.parent - f?.item + p, f?.parent].map(xe => xe - I), F = !y && Le(c, w, [-x, 0, 0, x]), z = !y && Le(c, w, [x, 0, 0, -x]), H = !y && Le(c, w, [k, 1, 1, k]), Q = !y && Le(c, w, [g, 1, 1, g]), ce = !y && Le(c, w, [1, 1, 0, 0]), Pe = !y && Le(c, xe => xe >= w[1] && xe <= w[2]);
        return ee(() => {
            if (Pe) return Pe.onChange(xe => {
                a.current.setAttribute("aria-hidden", !xe)
            })
        }, []), t(O, {
            inherit: "id",
            children: t("li", {
                style: {
                    display: "contents"
                },
                "aria-hidden": M !== 0,
                children: St(m, {
                    ref: a,
                    key: i + "child",
                    style: {
                        ...(o = m.props) === null || o === void 0 ? void 0 : o.style,
                        flexShrink: 0,
                        userSelect: "none",
                        width: l,
                        height: h,
                        opacity: H,
                        scale: Q,
                        originX: u ? ce : .5,
                        originY: u ? .5 : ce,
                        rotateY: u ? F : 0,
                        rotateX: u ? 0 : z
                    }
                }, (s = m.props) === null || s === void 0 ? void 0 : s.children)
            })
        })
    });

function Qi({
    selectedOpacity: e,
    opacity: r,
    total: a,
    index: o,
    wrappedIndex: s,
    wrappedIndexInverted: i,
    dotStyle: l,
    buttonStyle: h,
    gap: m,
    padding: f,
    isHorizontal: p,
    isInverted: c,
    ...S
}) {
    let v = s === o;
    c && (v = Math.abs(i) === o);
    let y = m / 2,
        b = !p && o > 0 ? y : f,
        k = !p && o !== a - 1 ? y : f,
        g = p && o !== a - 1 ? y : f,
        x = p && o > 0 ? y : f;
    return t("button", {
        "aria-label": `Scroll to page ${o+1}`,
        type: "button",
        ...S,
        style: {
            ...h,
            padding: `${b}px ${g}px ${k}px ${x}px`
        },
        children: t(d.div, {
            style: {
                ...l
            },
            initial: !1,
            animate: {
                opacity: v ? e : r
            },
            transition: {
                duration: .3
            }
        })
    })
}
var Xi = {
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        overflow: "hidden",
        position: "absolute",
        pointerEvents: "auto"
    },
    Ji = {
        borderRadius: "50%",
        background: "white",
        cursor: "pointer",
        border: "none",
        placeContent: "center",
        placeItems: "center",
        padding: 0
    };
var es = {
        ZBNkuN3Ds: {
            hover: !0
        }
    },
    ts = ["ZBNkuN3Ds"],
    rs = {
        ZBNkuN3Ds: "framer-v-1r8v4bb"
    };

function pn(e, ...r) {
    let a = {};
    return r?.forEach(o => o && Object.assign(a, e[o])), a
}
var as = {},
    ns = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    os = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "ZBNkuN3Ds",
        label: h = "Link",
        link: m,
        newTab: f = !1,
        arrow: p = !0,
        ...c
    }, S) {
        let y = as[l] || l,
            {
                baseVariant: b,
                classNames: k,
                gestureVariant: g,
                setGestureState: x,
                setVariant: u,
                transition: R,
                variants: M
            } = J({
                cycleOrder: ts,
                defaultVariant: "ZBNkuN3Ds",
                enabledGestures: es,
                transitions: ns,
                variant: y,
                variantClassNames: rs
            }),
            I = M.join("-") + c.layoutDependency,
            w = Y();
        return t(O, {
            id: i ?? w,
            children: t(d.div, {
                initial: y,
                animate: M,
                onHoverStart: () => x({
                    isHovered: !0
                }),
                onHoverEnd: () => x({
                    isHovered: !1
                }),
                onTapStart: () => x({
                    isPressed: !0
                }),
                onTap: () => x({
                    isPressed: !1
                }),
                onTapCancel: () => x({
                    isPressed: !1
                }),
                className: A("framer-zTsi7", k),
                style: {
                    display: "contents"
                },
                children: t(Ee, {
                    href: m,
                    openInNewTab: f,
                    smoothScroll: !0,
                    children: V(d.a, {
                        ...c,
                        className: `${A("framer-1r8v4bb",a)} framer-2hia6`,
                        "data-framer-name": "Default",
                        layoutDependency: I,
                        layoutId: "ZBNkuN3Ds",
                        ref: S,
                        style: {
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            ...r
                        },
                        transition: R,
                        ...pn({
                            "ZBNkuN3Ds-hover": {
                                "data-framer-name": void 0
                            }
                        }, b, g),
                        children: [t(re, {
                            __fromCanvasComponent: !0,
                            children: t(te, {
                                children: t(d.div, {
                                    style: {
                                        "--font-selector": "R0Y7SW50ZXItcmVndWxhcg==",
                                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-line-height": "24px",
                                        "--framer-text-color": "var(--extracted-tcooor)"
                                    },
                                    children: "Link"
                                })
                            }),
                            className: "framer-1je6aul",
                            "data-framer-name": "View all",
                            fonts: ["GF;Inter-regular"],
                            layoutDependency: I,
                            layoutId: "a1btwMK5o",
                            style: {
                                "--extracted-tcooor": "var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(125, 127, 131))",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: h,
                            transition: R,
                            variants: {
                                "ZBNkuN3Ds-hover": {
                                    "--extracted-tcooor": "var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22))"
                                }
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), p && t(d.div, {
                            className: "framer-2cn4rd",
                            layoutDependency: I,
                            layoutId: "wXktMIq8d",
                            transition: R,
                            children: t(nt, {
                                className: "framer-6ygvqc",
                                "data-framer-name": "arrow-right",
                                layout: "position",
                                layoutDependency: I,
                                layoutId: "amTSbZLXL",
                                opacity: 1,
                                svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 2.333 8 L 11.667 8" fill="transparent" stroke="var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(125, 127, 131))" stroke-linecap="square" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8 3.333 L 12.667 8 L 8 12.667" fill="transparent" stroke="var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(125, 127, 131))" stroke-linecap="square" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                svgContentId: 361420101,
                                transition: R,
                                withExternalLayout: !0,
                                ...pn({
                                    "ZBNkuN3Ds-hover": {
                                        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 2.333 8 L 11.667 8" fill="transparent" stroke="var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22))" stroke-linecap="square" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8 3.333 L 12.667 8 L 8 12.667" fill="transparent" stroke="var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22))" stroke-linecap="square" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                                        svgContentId: 3337068590
                                    }
                                }, b, g)
                            })
                        })]
                    })
                })
            })
        })
    }),
    is = ['.framer-zTsi7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-zTsi7 .framer-2hia6 { display: block; }", ".framer-zTsi7 .framer-1r8v4bb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-zTsi7 .framer-1je6aul { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-zTsi7 .framer-2cn4rd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-zTsi7 .framer-6ygvqc { flex: none; height: 16px; position: relative; width: 16px; }", ".framer-zTsi7 .framer-v-1r8v4bb .framer-1r8v4bb { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zTsi7 .framer-1r8v4bb, .framer-zTsi7 .framer-2cn4rd { gap: 0px; } .framer-zTsi7 .framer-1r8v4bb > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-zTsi7 .framer-1r8v4bb > :first-child, .framer-zTsi7 .framer-2cn4rd > :first-child { margin-left: 0px; } .framer-zTsi7 .framer-1r8v4bb > :last-child, .framer-zTsi7 .framer-2cn4rd > :last-child { margin-right: 0px; } .framer-zTsi7 .framer-2cn4rd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ".framer-zTsi7.framer-v-1r8v4bb.hover .framer-1r8v4bb { gap: 10px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zTsi7.framer-v-1r8v4bb.hover .framer-1r8v4bb { gap: 0px; } .framer-zTsi7.framer-v-1r8v4bb.hover .framer-1r8v4bb > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-zTsi7.framer-v-1r8v4bb.hover .framer-1r8v4bb > :first-child { margin-left: 0px; } .framer-zTsi7.framer-v-1r8v4bb.hover .framer-1r8v4bb > :last-child { margin-right: 0px; } }"],
    Nt = G(os, is, "framer-zTsi7"),
    ze = Nt;
Nt.displayName = "Element/Link";
Nt.defaultProps = {
    height: 24,
    width: 49
};
P(Nt, {
    w0MfyCyBE: {
        defaultValue: "Link",
        displayTextArea: !1,
        title: "Label",
        type: n.String
    },
    Hza07G7r_: {
        title: "Link",
        type: n.Link
    },
    Z7TMrUzhg: {
        defaultValue: !1,
        title: "New Tab",
        type: n.Boolean
    },
    dfAT8g3ip: {
        defaultValue: !0,
        title: "Arrow",
        type: n.Boolean
    }
});
Z(Nt, [{
    family: "Inter",
    moduleAsset: {
        localModuleIdentifier: "local-module:canvasComponent/W_PNJ1v4H:default",
        url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
    weight: "400"
}]);
var ss = B(ze),
    ls = B(ae),
    ds = ["s9diIEDo2"],
    cs = {
        s9diIEDo2: "framer-v-m8kw4l"
    };
var fs = {},
    ms = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    pr = e => typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
        src: e
    } : void 0,
    ps = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "s9diIEDo2",
        title: h = "Gallery",
        linkLabel: m = "View more",
        link: f,
        image1: p,
        image2: c,
        image3: S,
        image4: v,
        ...y
    }, b) {
        let g = fs[l] || l,
            {
                baseVariant: x,
                classNames: u,
                gestureVariant: R,
                setGestureState: M,
                setVariant: I,
                transition: w,
                variants: F
            } = J({
                cycleOrder: ds,
                defaultVariant: "s9diIEDo2",
                transitions: ms,
                variant: g,
                variantClassNames: cs
            }),
            z = F.join("-") + y.layoutDependency,
            H = Y();
        return t(O, {
            id: i ?? H,
            children: t(d.div, {
                initial: g,
                animate: F,
                onHoverStart: () => M({
                    isHovered: !0
                }),
                onHoverEnd: () => M({
                    isHovered: !1
                }),
                onTapStart: () => M({
                    isPressed: !0
                }),
                onTap: () => M({
                    isPressed: !1
                }),
                onTapCancel: () => M({
                    isPressed: !1
                }),
                className: A("framer-cmhi5", Me, u),
                style: {
                    display: "contents"
                },
                children: V(d.div, {
                    ...y,
                    className: A("framer-m8kw4l", a),
                    "data-border": !0,
                    "data-framer-name": "Variant 1",
                    layoutDependency: z,
                    layoutId: "s9diIEDo2",
                    ref: b,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(238, 238, 238))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245))",
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...r
                    },
                    transition: w,
                    children: [V(d.div, {
                        className: "framer-1yduzx9",
                        layoutDependency: z,
                        layoutId: "ly6zwncjt",
                        transition: w,
                        children: [t(re, {
                            __fromCanvasComponent: !0,
                            children: t(te, {
                                children: t(d.h3, {
                                    className: "framer-styles-preset-1wml6uu",
                                    "data-styles-preset": "fVxnimdqP",
                                    children: "Gallery"
                                })
                            }),
                            className: "framer-kba7p",
                            layoutDependency: z,
                            layoutId: "kWs0Bw3Xa",
                            style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: h,
                            transition: w,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), t(d.div, {
                            className: "framer-19f4lsz-container",
                            layoutDependency: z,
                            layoutId: "Q13AxkUhA-container",
                            transition: w,
                            children: t(ze, {
                                arrow: !0,
                                height: "100%",
                                id: "Q13AxkUhA",
                                label: m,
                                layoutId: "Q13AxkUhA",
                                link: f,
                                newTab: !0,
                                width: "100%"
                            })
                        })]
                    }), t(d.div, {
                        className: "framer-fbd0u2-container",
                        layoutDependency: z,
                        layoutId: "euh9yGPoo-container",
                        transition: w,
                        children: t(ae, {
                            alignment: "center",
                            arrowOptions: {
                                arrowFill: "rgba(0, 0, 0, 0.2)",
                                arrowGap: 10,
                                arrowPadding: 20,
                                arrowPaddingBottom: 0,
                                arrowPaddingLeft: 0,
                                arrowPaddingRight: 0,
                                arrowPaddingTop: 0,
                                arrowPosition: "auto",
                                arrowRadius: 40,
                                arrowShouldFadeIn: !1,
                                arrowShouldSpace: !0,
                                arrowSize: 40,
                                showMouseControls: !1
                            },
                            autoPlayControl: !0,
                            borderRadius: 6,
                            direction: "left",
                            dragControl: !0,
                            effectsOptions: {
                                effectsHover: !0,
                                effectsOpacity: 1,
                                effectsPerspective: 1200,
                                effectsRotate: 0,
                                effectsScale: 1
                            },
                            fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !1,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !0
                            },
                            gap: 16,
                            height: "100%",
                            id: "euh9yGPoo",
                            intervalControl: 3,
                            itemAmount: 1,
                            layoutId: "euh9yGPoo",
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !0,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressOptions: {
                                dotsActiveOpacity: 1,
                                dotsBackground: "rgba(124, 127, 130, 0.4)",
                                dotsBlur: 6,
                                dotsFill: 'var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22)) /* {"name":"Typography"} */',
                                dotsGap: 8,
                                dotsInset: 8,
                                dotSize: 8,
                                dotsOpacity: .4,
                                dotsPadding: 8,
                                dotsRadius: 50,
                                showProgressDots: !0
                            },
                            slots: [t(Se, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    ...pr(p)
                                },
                                className: "framer-1bp7r6f",
                                "data-framer-name": "Image 1",
                                layoutDependency: z,
                                layoutId: "spCP4nBGQ",
                                style: {
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6
                                },
                                transition: w
                            }), t(Se, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    ...pr(c)
                                },
                                className: "framer-1c1ig11",
                                "data-framer-name": "Image 2",
                                layoutDependency: z,
                                layoutId: "MIiFmxCxC",
                                style: {
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6
                                },
                                transition: w
                            }), t(Se, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    ...pr(S)
                                },
                                className: "framer-19xsvza",
                                "data-framer-name": "Image 3",
                                layoutDependency: z,
                                layoutId: "AJgHU7djm",
                                style: {
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6
                                },
                                transition: w
                            }), t(Se, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    ...pr(v)
                                },
                                className: "framer-rpm5jr",
                                "data-framer-name": "Image 4",
                                layoutDependency: z,
                                layoutId: "N4bIss9Zi",
                                style: {
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6
                                },
                                transition: w
                            })],
                            startFrom: 0,
                            style: {
                                height: "100%",
                                width: "100%"
                            },
                            transitionControl: {
                                damping: 40,
                                delay: 0,
                                duration: 1.6,
                                ease: [.87, 0, .13, 1],
                                mass: 1,
                                stiffness: 200,
                                type: "tween"
                            },
                            width: "100%"
                        })
                    })]
                })
            })
        })
    }),
    us = ['.framer-cmhi5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-cmhi5 .framer-hf66l1 { display: block; }", ".framer-cmhi5 .framer-m8kw4l { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px 16px 16px 16px; position: relative; width: 568px; will-change: transform; }", ".framer-cmhi5 .framer-1yduzx9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-cmhi5 .framer-kba7p { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-cmhi5 .framer-19f4lsz-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-cmhi5 .framer-fbd0u2-container { aspect-ratio: 2 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 268px); position: relative; width: 100%; }", ".framer-cmhi5 .framer-1bp7r6f, .framer-cmhi5 .framer-1c1ig11, .framer-cmhi5 .framer-19xsvza, .framer-cmhi5 .framer-rpm5jr { aspect-ratio: 1.68125 / 1; height: var(--framer-aspect-ratio-supported, 320px); overflow: hidden; position: relative; width: 538px; will-change: transform; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-cmhi5 .framer-m8kw4l, .framer-cmhi5 .framer-1yduzx9 { gap: 0px; } .framer-cmhi5 .framer-m8kw4l > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-cmhi5 .framer-m8kw4l > :first-child { margin-top: 0px; } .framer-cmhi5 .framer-m8kw4l > :last-child { margin-bottom: 0px; } .framer-cmhi5 .framer-1yduzx9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-cmhi5 .framer-1yduzx9 > :first-child { margin-left: 0px; } .framer-cmhi5 .framer-1yduzx9 > :last-child { margin-right: 0px; } }", ...Ie],
    Ht = G(ps, us, "framer-cmhi5"),
    $r = Ht;
Ht.displayName = "Gallery";
Ht.defaultProps = {
    height: 340,
    width: 568
};
P(Ht, {
    wswjgRnBv: {
        defaultValue: "Gallery",
        displayTextArea: !1,
        title: "Title",
        type: n.String
    },
    LQR_43fgk: {
        defaultValue: "View more",
        displayTextArea: !1,
        title: "LinkLabel",
        type: n.String
    },
    H0Oe5BFcs: {
        title: "Link",
        type: n.Link
    },
    lPnHDQB3b: {
        title: "Image 1",
        type: n.ResponsiveImage
    },
    Sqi5clFV2: {
        title: "Image 2",
        type: n.ResponsiveImage
    },
    lhkW6J5ce: {
        title: "Image 3",
        type: n.ResponsiveImage
    },
    HkJpzNqAR: {
        title: "Image 4",
        type: n.ResponsiveImage
    }
});
Z(Ht, [...ss, ...ls, ...Ve]);
var He;
(function(e) {
    e.Normal = "Off", e.Auto = "On", e.Loop = "Loop"
})(He || (He = {}));
var We;
(function(e) {
    e.High = "High Quality", e.Medium = "Medium Quality", e.Low = "Low Quality", e.Off = "Off"
})(We || (We = {}));
var Ye;
(function(e) {
    e.WebP = "webp", e.JPG = "jpg"
})(Ye || (Ye = {}));

function mt({
    url: e,
    play: r,
    shouldMute: a,
    thumbnail: o,
    isRed: s,
    onClick: i,
    onMouseEnter: l,
    onMouseLeave: h,
    onMouseDown: m,
    onMouseUp: f,
    ...p
}) {
    let c = Hr(),
        S = r !== He.Normal,
        v = c || o !== We.Off && !S,
        [y, b] = Ir(() => !0, !1),
        [k, g] = Ir(() => !0, !v),
        [x, u] = X(!1),
        R = Ke(p),
        M = R !== "0px 0px 0px 0px" && R !== "0px";
    if (e === "") return t(xs, {});
    let I = gs(e);
    if (I === void 0) return t(ws, {
        message: "Invalid Youtube URL."
    });
    let [w, F] = I, z = ys(w, o, bs() ? Ye.WebP : Ye.JPG), H = F.searchParams;
    return H.set("iv_load_policy", "3"), H.set("rel", "0"), H.set("modestbranding", "1"), H.set("playsinline", "1"), (S || v) && H.set("autoplay", "1"), S && a && H.set("mute", "1"), r === He.Loop && (H.set("loop", "1"), H.set("playlist", w)), s || H.set("color", "white"), V("article", {
        onPointerEnter: () => u(!0),
        onPointerLeave: () => u(!1),
        onPointerOver: b,
        onClick: g,
        style: {
            ...Ss,
            borderRadius: R,
            transform: M && k ? "translateZ(0.000001px)" : "unset",
            cursor: "pointer",
            overflow: "hidden"
        },
        children: [y && t("link", {
            rel: "preconnect",
            href: "https://www.youtube.com"
        }), y && t("link", {
            rel: "preconnect",
            href: "https://www.google.com"
        }), t("div", {
            style: {
                ...hn,
                background: v ? `center / cover url(${z}) no-repeat` : void 0
            }
        }), k ? t("iframe", {
            style: hn,
            src: F.href,
            frameBorder: "0",
            allow: "presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            onClick: i,
            onMouseEnter: l,
            onMouseLeave: h,
            onMouseDown: m,
            onMouseUp: f
        }) : t(vs, {
            onClick: g,
            isHovered: x,
            isRed: s
        })]
    })
}
mt.displayName = "YouTube";
P(mt, {
    url: {
        type: n.String,
        title: "Video"
    },
    play: {
        type: n.Enum,
        title: "Autoplay",
        options: Object.values(He)
    },
    shouldMute: {
        title: "Mute",
        type: n.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
        hidden(e) {
            return e.play === He.Normal
        }
    },
    thumbnail: {
        title: "Thumbnail",
        description: "Showing a thumbnail improves performance.",
        type: n.Enum,
        options: Object.values(We),
        hidden(e) {
            return e.play !== He.Normal
        }
    },
    isRed: {
        title: "Color",
        type: n.Boolean,
        enabledTitle: "Red",
        disabledTitle: "White"
    },
    ...$e,
    ...Ft
});
var hs = {
    url: "https://youtu.be/smPos0mJvh8",
    play: He.Normal,
    shouldMute: !0,
    thumbnail: We.Medium,
    isRed: !0
};
mt.defaultProps = hs;

function gs(e) {
    let r;
    try {
        r = new URL(e)
    } catch {
        let a = Yr(e);
        return [e, a]
    }
    if (r.hostname === "youtube.com" || r.hostname === "www.youtube.com" || r.hostname === "youtube-nocookie.com" || r.hostname === "www.youtube-nocookie.com") {
        let a = r.pathname.slice(1).split("/");
        if (a[0] === "watch") {
            let o = r.searchParams.get("v"),
                s = Yr(o);
            return [o, s]
        }
        if (a[0] === "embed") return [a[1], r]
    }
    if (r.hostname === "youtu.be") {
        let a = r.pathname.slice(1),
            o = Yr(a);
        return [a, o]
    }
}

function Yr(e) {
    return new URL(`https://www.youtube.com/embed/${e}`)
}

function ys(e, r, a = Ye.JPG) {
    let o = Ye.WebP ? "https://i.ytimg.com/vi_webp/" : "https://i.ytimg.com/vi/",
        s = Ye.WebP ? "webp" : "jpg";
    switch (r) {
        case We.Low:
            return `${o}${e}/hqdefault.${s}`;
        case We.Medium:
            return `${o}${e}/sddefault.${s}`;
        case We.High:
            return `${o}${e}/maxresdefault.${s}`;
        default:
            return `${o}${e}/0.${s}`
    }
}
var un;

function bs() {
    if (!C) return !0;
    if (un !== void 0) return un;
    let e = document.createElement("canvas");
    return e.getContext && e.getContext("2d") ? e.toDataURL("image/webp").indexOf("data:image/webp") == 0 : !1
}

function xs() {
    return t("div", {
        style: {
            ...Nr,
            overflow: "hidden"
        },
        children: t("div", {
            style: gn,
            children: "To embed a Youtube video, add the URL to the properties\xA0panel."
        })
    })
}

function ws({
    message: e
}) {
    return t("div", {
        className: "framerInternalUI-errorPlaceholder",
        style: {
            ...dt,
            overflow: "hidden"
        },
        children: V("div", {
            style: gn,
            children: ["Error: ", e]
        })
    })
}

function vs({
    onClick: e,
    isHovered: r,
    isRed: a
}) {
    return t("button", {
        onClick: e,
        "aria-label": "Play",
        style: Cs,
        children: V("svg", {
            height: "100%",
            version: "1.1",
            viewBox: "0 0 68 48",
            width: "100%",
            children: [t("path", {
                d: "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
                fill: r ? a ? "#f00" : "#000" : "#212121",
                fillOpacity: r && a ? 1 : .8,
                style: {
                    transition: "fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)"
                }
            }), t("path", {
                d: "M 45,24 27,14 27,34",
                fill: "#fff"
            })]
        })
    })
}
var Cs = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 68,
        height: 48,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer"
    },
    Ss = {
        position: "relative",
        width: "100%",
        height: "100%"
    },
    gn = {
        textAlign: "center",
        minWidth: 140
    },
    hn = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
    };
var ks = B(ze),
    Rs = B(mt),
    Ts = ["Ve42v8gb5"],
    Ls = {
        Ve42v8gb5: "framer-v-1ggy0ce"
    };
var Es = {},
    Vs = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    Is = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "Ve42v8gb5",
        title: h = "Latest Video",
        videoURL: m = "https://youtu.be/smPos0mJvh8",
        label: f = "YouTube",
        link: p,
        ...c
    }, S) {
        let y = Es[l] || l,
            {
                baseVariant: b,
                classNames: k,
                gestureVariant: g,
                setGestureState: x,
                setVariant: u,
                transition: R,
                variants: M
            } = J({
                cycleOrder: Ts,
                defaultVariant: "Ve42v8gb5",
                transitions: Vs,
                variant: y,
                variantClassNames: Ls
            }),
            I = M.join("-") + c.layoutDependency,
            w = Y();
        return t(O, {
            id: i ?? w,
            children: t(d.div, {
                initial: y,
                animate: M,
                onHoverStart: () => x({
                    isHovered: !0
                }),
                onHoverEnd: () => x({
                    isHovered: !1
                }),
                onTapStart: () => x({
                    isPressed: !0
                }),
                onTap: () => x({
                    isPressed: !1
                }),
                onTapCancel: () => x({
                    isPressed: !1
                }),
                className: A("framer-1hWgz", Me, k),
                style: {
                    display: "contents"
                },
                children: V(d.div, {
                    ...c,
                    className: A("framer-1ggy0ce", a),
                    "data-border": !0,
                    "data-framer-name": "Variant 1",
                    layoutDependency: I,
                    layoutId: "Ve42v8gb5",
                    ref: S,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(238, 238, 238))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245))",
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...r
                    },
                    transition: R,
                    children: [V(d.div, {
                        className: "framer-kik624",
                        layoutDependency: I,
                        layoutId: "kAn1wPXp5",
                        transition: R,
                        children: [t(re, {
                            __fromCanvasComponent: !0,
                            children: t(te, {
                                children: t(d.h3, {
                                    className: "framer-styles-preset-1wml6uu",
                                    "data-styles-preset": "fVxnimdqP",
                                    children: "Latest Video"
                                })
                            }),
                            className: "framer-znzlj2",
                            layoutDependency: I,
                            layoutId: "XiVfzA21M",
                            style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: h,
                            transition: R,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), t(d.div, {
                            className: "framer-1026z08-container",
                            layoutDependency: I,
                            layoutId: "ZbFVX1996-container",
                            transition: R,
                            children: t(ze, {
                                arrow: !0,
                                height: "100%",
                                id: "ZbFVX1996",
                                label: f,
                                layoutId: "ZbFVX1996",
                                link: p,
                                newTab: !0,
                                width: "100%"
                            })
                        })]
                    }), t(d.div, {
                        className: "framer-ubttsq-container",
                        layoutDependency: I,
                        layoutId: "sk2qCQV5D-container",
                        transition: R,
                        children: t(mt, {
                            borderRadius: 6,
                            bottomLeftRadius: 6,
                            bottomRightRadius: 6,
                            height: "100%",
                            id: "sk2qCQV5D",
                            isMixedBorderRadius: !1,
                            isRed: !1,
                            layoutId: "sk2qCQV5D",
                            play: "Off",
                            shouldMute: !0,
                            style: {
                                height: "100%",
                                width: "100%"
                            },
                            thumbnail: "High Quality",
                            topLeftRadius: 6,
                            topRightRadius: 6,
                            url: m,
                            width: "100%"
                        })
                    })]
                })
            })
        })
    }),
    Ms = ['.framer-1hWgz [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-1hWgz .framer-8eedj4 { display: block; }", ".framer-1hWgz .framer-1ggy0ce { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px 16px 16px 16px; position: relative; width: 568px; will-change: transform; }", ".framer-1hWgz .framer-kik624 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-1hWgz .framer-znzlj2 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-1hWgz .framer-1026z08-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-1hWgz .framer-ubttsq-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 302px); position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1hWgz .framer-1ggy0ce, .framer-1hWgz .framer-kik624 { gap: 0px; } .framer-1hWgz .framer-1ggy0ce > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-1hWgz .framer-1ggy0ce > :first-child { margin-top: 0px; } .framer-1hWgz .framer-1ggy0ce > :last-child { margin-bottom: 0px; } .framer-1hWgz .framer-kik624 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1hWgz .framer-kik624 > :first-child { margin-left: 0px; } .framer-1hWgz .framer-kik624 > :last-child { margin-right: 0px; } }", ...Ie],
    Wt = G(Is, Ms, "framer-1hWgz"),
    Zr = Wt;
Wt.displayName = "YouTube Video";
Wt.defaultProps = {
    height: 373.5,
    width: 568
};
P(Wt, {
    j5xOJDLGC: {
        defaultValue: "Latest Video",
        displayTextArea: !1,
        title: "Title",
        type: n.String
    },
    rw67F54hh: {
        defaultValue: "https://youtu.be/smPos0mJvh8",
        title: "Video URL",
        type: n.String
    },
    YaodDqYOT: {
        defaultValue: "YouTube",
        displayTextArea: !1,
        placeholder: "",
        title: "Label",
        type: n.String
    },
    pkIOfZzOw: {
        title: "Link",
        type: n.Link
    }
});
Z(Wt, [...ks, ...Rs, ...Ve]);
var Ps = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
var Fs = {
        ...Ps,
        borderRadius: 6,
        background: "rgba(149, 149, 149, 0.1)",
        border: "1px dashed rgba(149, 149, 149, 0.15)",
        color: "#a5a5a5",
        flexDirection: "column"
    },
    yn = D((e, r) => t("div", {
        style: Fs,
        ref: r
    }));
var Qr, bn = e => {
    if (!Qr) {
        let r = function(a, o) {
            return e.createElement("svg", {
                width: "100%",
                height: "1.5em",
                strokeWidth: 1.5,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "https://www.w3.org/2000/svg",
                color: "currentColor",
                ref: o,
                ...a
            }, e.createElement("path", {
                d: "M3 9.5L12 4l9 5.5M19 13v6.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V13",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        };
        Qr = e.forwardRef(r)
    }
    return Qr
};
var xn = {
        onClick: {
            type: n.EventHandler
        },
        onMouseDown: {
            type: n.EventHandler
        },
        onMouseUp: {
            type: n.EventHandler
        },
        onMouseEnter: {
            type: n.EventHandler
        },
        onMouseLeave: {
            type: n.EventHandler
        }
    },
    As = (e, r) => e.find(a => a.toLowerCase().includes(r));

function wn(e, r, a = "", o, s) {
    let i = he(() => {
        if (a == null || a?.length === 0) return null;
        let h = a.toLowerCase().replace(/-|\s/g, "");
        var m;
        return (m = s[h]) !== null && m !== void 0 ? m : As(e, h)
    }, [o, a]);
    return r ? o : i
}
var Xr = ["Accessibility", "AccessibilitySign", "AccessibilityTech", "Activity", "AddCircledOutline", "AddDatabaseScript", "AddFolder", "AddFrame", "AddHexagon", "AddKeyframe", "AddKeyframeAlt", "AddKeyframes", "AddLens", "AddPage", "AddPinAlt", "AddSelection", "AddSquare", "AddToCart", "AddUser", "Airplane", "AirplaneHelix", "AirplaneHelix45Deg", "AirplaneOff", "AirplaneRotation", "Airplay", "Alarm", "Album", "AlbumCarousel", "AlbumList", "AlbumOpen", "AlignBottomBox", "AlignCenter", "AlignJustify", "AlignLeft", "AlignLeftBox", "AlignRight", "AlignRightBox", "AlignTopBox", "Antenna", "AntennaOff", "AntennaSignal", "AppNotification", "Apple", "AppleHalf", "AppleHalfAlt", "AppleImac2021", "AppleImac2021Side", "AppleSwift", "ArSymbol", "Archery", "Archive", "AreaSearch", "ArrowArchery", "ArrowDown", "ArrowDownCircled", "ArrowLeft", "ArrowLeftCircled", "ArrowRight", "ArrowRightCircled", "ArrowSeparate", "ArrowUnion", "ArrowUnionVertical", "ArrowUp", "ArrowUpCircled", "Asana", "Attachment", "AutoFlash", "Bag", "BasketBall", "BasketBallAlt", "BasketballField", "Battery25", "Battery50", "Battery75", "BatteryCharging", "BatteryEmpty", "BatteryFull", "BatteryIndicator", "BatteryWarning", "BeachBag", "BeachBagBig", "Bell", "BellNotification", "BellOff", "Bicycle", "Bin", "BinAdd", "BinFull", "BinHalf", "BinMinus", "Bluetooth", "Bold", "BoldSquareOutline", "BookmarkCircled", "BookmarkEmpty", "BorderBl", "BorderBottom", "BorderBr", "BorderInner", "BorderLeft", "BorderOut", "BorderRight", "BorderTl", "BorderTop", "BorderTr", "BounceLeft", "BounceRight", "BowlingBall", "Box", "BoxIso", "BoxingGlove", "BubbleDownload", "BubbleError", "BubbleIncome", "BubbleOutcome", "BubbleSearch", "BubbleStar", "BubbleUpload", "BubbleWarning", "Building", "BusOutline", "BusStop", "Calculator", "Calendar", "Camera", "Cancel", "CarOutline", "Cart", "CartAlt", "Cash", "Cell4X4", "CenterAlign", "ChatAdd", "ChatBubble", "ChatBubbleCheck", "ChatBubbleCheck1", "ChatBubbleEmpty", "ChatBubbleError", "ChatBubbleQuestion", "ChatBubbleTranslate", "ChatBubbleWarning", "ChatLines", "ChatRemove", "Check", "CheckCircledOutline", "Chocolate", "Chromecast", "ChromecastActive", "Church", "ChurchAlt", "CinemaOld", "Circle", "City", "ClockOutline", "Closet", "Cloud", "CloudBookAlt", "CloudCheck", "CloudDesync", "CloudDownload", "CloudError", "CloudSunny", "CloudSync", "CloudUpload", "Code", "Codepen", "Coin", "CollageFrame", "Collapse", "ColorFilter", "ColorPicker", "ColorPickerEmpty", "Combine", "CompactDisc", "Compress", "CompressLines", "Computer", "ControlSlider", "Copy", "Copyright", "CornerBottomLeft", "CornerBottomRight", "CornerTopLeft", "CornerTopRight", "Cpu", "CpuWarning", "CrackedEgg", "CreativeCommons", "CreditCard", "CreditCard2", "Crop", "CropRotateBl", "CropRotateBr", "CropRotateTl", "CropRotateTr", "Css3", "CursorPointer", "Cut", "CutAlt", "Cycling", "DashFlag", "Dashboard", "DashboardDots", "DashboardSpeed", "DataTransferBoth", "DataTransferCheck", "DataTransferDown", "DataTransferUp", "DataTransferWarning", "DatabaseBackup", "DatabaseExport", "DatabaseMonitor", "DatabaseRestore", "DatabaseScript", "DatabaseSettings", "DatabaseStar", "DatabaseStats", "Db", "DbCheck", "DbError", "DbSearch", "DbStar", "DbWarning", "DeCompress", "DeleteCircledOutline", "DesignPencil", "Dialpad", "Display4K", "DivideSelection1", "DivideSelection2", "DocSearch", "DocSearchAlt", "DocStar", "DocStarAlt", "Dollar", "DomoticIssue", "Donate", "DoubleCheck", "DownRoundArrow", "Download", "DragHandGesture", "Drawer", "Dribbble", "Droplet", "DropletHalf", "EaseIn", "EaseInControlPoint", "EaseInOut", "EaseOut", "EaseOutControlPoint", "Edit", "EditPencil", "Egg", "Eject", "ElectronicsChip", "Emoji", "EmojiBall", "EmojiBlinkLeft", "EmojiBlinkRight", "EmojiLookBottom", "EmojiLookLeft", "EmojiLookRight", "EmojiLookTop", "EmojiQuite", "EmojiReally", "EmojiSad", "EmojiSatisfied", "EmojiSingLeft", "EmojiSingLeftNote", "EmojiSingRight", "EmojiSingRightNote", "EmojiSurprise", "EmojiSurpriseAlt", "EmojiTalkingAngry", "EmojiTalkingHappy", "EmojiThinkLeft", "EmojiThinkRight", "EmptyPage", "Enlarge", "EnlargeRoundArrow", "Euro", "EuroSquare", "EvCharge", "EvChargeAlt", "EvPlug", "EvPlugCharging", "EvPlugError", "EvStation", "Exclude", "Expand", "ExpandLines", "EyeAlt", "EyeClose", "EyeEmpty", "EyeOff", "FaceId", "Facebook", "FacebookSquared", "Farm", "FastArrowDown", "FastArrowDownBox", "FastArrowLeft", "FastArrowLeftBox", "FastArrowRight", "FastArrowRightBox", "FastArrowTop", "FastArrowUpBox", "FastBottomCircle", "FastLeftCircle", "FastRightCircle", "FastTopCircle", "Female", "Figma", "FileNotFound", "Filter", "FilterAlt", "Finder", "Fingerprint", "FingerprintCircled", "FingerprintCircledOk", "FingerprintPhone", "FingerprintScan", "FingerprintSquared", "Fishing", "Flare", "Flash", "FlashOff", "Flip", "FlipReverse", "Flower", "Fog", "Folder", "FolderAlert", "FontSize", "Football", "FootballBall", "ForwardOutline", "Frame", "FrameAlt", "FrameAltEmpty", "FrameSelect", "FrameSimple", "FrameTool", "Fridge", "Fx", "Garage", "Gas", "GasTank", "GasTankDrop", "Gift", "GitBranch", "GitCommit", "GitHub", "GitHubOutline", "GitLabFull", "GitMerge", "GlassEmpty", "GlassHalf", "GlassHalfAlt", "Glasses", "Golf", "Google", "GoogleCircled", "GoogleDocs", "GoogleDrive", "GoogleDriveCheck", "GoogleDriveSync", "GoogleDriveWarning", "GoogleHome", "GoogleOne", "Gps", "GraphDown", "GraphUp", "GridAdd", "GridMinus", "GridRemove", "Group", "Gym", "HalfMoon", "HandBrake", "Handbag", "HardDrive", "Hat", "Hd", "Hdr", "Headset", "HeadsetCharge", "HeadsetHelp", "HeadsetIssue", "HealthShield", "Healthcare", "Heart", "HeavyRain", "Heptagon", "HerSlips", "HesaWarningOutline", "Hexagon", "HexagonAlt", "HighPriority", "HistoricShield", "HistoricShieldAlt", "Home", "HomeAlt", "HomeAltSlim", "HomeAltSlimHoriz", "HomeHospital", "HomeSimple", "HomeSimpleDoor", "HomeUser", "Hospital", "HospitalSign", "Hourglass", "Html5", "Iconoir", "Import", "Industry", "InfoEmpty", "InputField", "InputSearch", "Instagram", "Intersect", "IntersectAlt", "IosSettings", "IrisScan", "Italic", "ItalicSquareOutline", "Journal", "JournalPage", "KeyAlt", "KeyAltBack", "KeyAltMinus", "KeyAltPlus", "KeyAltRemove", "Keyframe", "KeyframeAlignCenter", "KeyframePosition", "Keyframes", "KeyframesCouple", "LabelOutline", "Lamp", "Language", "Laptop", "LaptopCharging", "LaptopFix", "LaptopIssue", "LargeSuitcase", "LayoutLeft", "LayoutRight", "Leaderboard", "LeaderboardStar", "LeftRoundArrow", "Lens", "Lifebelt", "LightBulb", "LightBulbOff", "LightBulbOn", "LineSpace", "Linear", "Link", "LinkedIn", "List", "LoadActionFloppy", "Lock", "LockKey", "LogDenied", "LogIn", "LogOut", "LongArrowDownLeft", "LongArrowDownRight", "LongArrowLeftDown", "LongArrowLeftUp", "LongArrowRightDown", "LongArrowRightUp", "LongArrowRightUp1", "LongArrowUpLeft", "LongArrowUpRight", "LotOfCash", "MacControlKey", "MacDock", "MacOptionKey", "MacOsWindow", "Mail", "MailOpened", "Male", "Map", "MapIssue", "MapsArrow", "MapsArrowDiagonal", "MapsArrowIssue", "MapsGoStraight", "MapsTurnBack", "MapsTurnLeft", "MapsTurnRight", "MaskSquare", "Maximize", "Medal", "Medal1St", "Medium", "Megaphone", "Menu", "MenuScale", "Message", "MessageAlert", "MessageText", "Metro", "Mic", "MicAdd", "MicCheck", "MicMute", "MicRemove", "MicSpeaking", "MicWarning", "Minus", "Minus1", "MinusHexagon", "MinusPinAlt", "MinusSquare", "MissingFont", "ModernTv", "ModernTv4K", "MoneySquare", "MoonSat", "MoreHoriz", "MoreVert", "MouseButtonLeft", "MouseButtonRight", "MouseScrollWheel", "MoveDown", "MoveLeft", "MoveRight", "MoveRuler", "MoveUp", "Movie", "MultiBubble", "MultiMacOsWindow", "MultiWindow", "MultiplePages", "MultiplePagesAdd", "MultiplePagesDelete", "MultiplePagesEmpty", "MultiplePagesRemove", "Music1", "Music1Add", "Music2", "Music2Add", "NavArrowDown", "NavArrowLeft", "NavArrowRight", "NavArrowUp", "Navigator", "NavigatorAlt", "Network", "NetworkAlt", "NetworkLeft", "NetworkRight", "NoBattery", "NoCoin", "NoCreditCard", "NoLock", "NoSmoking", "Notes", "Octagon", "OilIndustry", "OpenInBrowser", "OpenInWindow", "OpenVpn", "OrangeHalf", "OrangeSlice", "OrangeSliceAlt", "Page", "PageFlip", "PageSearch", "PageStar", "Palette", "PanoramaEnlarge", "PanoramaReduce", "Pants", "PantsAlt", "PasswordCursor", "PasswordError", "PasswordPass", "PauseOutline", "PcMouse", "PenConnectBluetooth", "PenConnectWifi", "PenTablet", "PenTabletConnectUsb", "PenTabletConnectWifi", "Pentagon", "Percentage", "PercentageRound", "PercentageSquare", "PharmacyCircledCross", "PharmacySquaredCross", "Phone", "PhoneAdd", "PhoneDelete", "PhoneDisabled", "PhoneIncome", "PhoneOutcome", "PhonePaused", "PhoneRemove", "Pin", "PinAlt", "PizzaSlice", "Planet", "PlanetAlt", "PlanetSat", "PlayOutline", "Playlist", "PlaylistAdd", "PlaylistPlay", "PlugTypeA", "PlugTypeC", "PlugTypeG", "PlugTypeL", "Plus", "Pocket", "Position", "PositionAlign", "Pound", "PrecisionTool", "Printer", "PrinterAlt", "PrintingPage", "PriorityDown", "PriorityUp", "ProfileCircled", "Prohibition", "QuestionMark", "QuestionMarkCircle", "Rain", "ReceiveDollars", "ReceiveEuros", "ReceivePounds", "ReceiveYens", "Redo", "RedoAction", "RedoCircle", "Reduce", "ReduceRoundArrow", "Refresh", "RefreshCircular", "RefreshDouble", "ReminderHandGesture", "RemoveDatabaseScript", "RemoveEmpty", "RemoveFolder", "RemoveFrame", "RemoveFromCart", "RemoveKeyframe", "RemoveKeyframeAlt", "RemoveKeyframes", "RemovePage", "RemovePinAlt", "RemoveSelection", "RemoveSquare", "RemoveUser", "Repeat", "RepeatOnce", "ReportColumns", "Reports", "RewindOutline", "Rhombus", "RightRoundArrow", "Rings", "RotateCameraLeft", "RotateCameraRight", "RssFeed", "RssFeedSquared", "Ruler", "RulerAdd", "RulerCombine", "RulerRemove", "Running", "Sandals", "SaveActionFloppy", "SaveFloppyDisk", "ScaleFrameEnlarge", "ScaleFrameReduce", "Scanning", "Scarf", "Scissor", "ScissorAlt", "SeaAndSun", "SeaWaves", "Search", "SearchFont", "SecurityPass", "Selection", "SelectiveTool", "SendDollars", "SendEuros", "SendPounds", "SendYens", "Server", "ServerConnection", "Settings", "SettingsCloud", "SettingsProfiles", "ShareAndroid", "ShareIos", "Shield", "ShieldAdd", "ShieldAlert", "ShieldAlt", "ShieldBroken", "ShieldCheck", "ShieldCross", "ShieldDownload", "ShieldEye", "ShieldLoading", "ShieldMinus", "ShieldQuestion", "ShieldSearch", "ShieldUpload", "Shop", "ShopAlt", "ShoppingBag", "ShoppingBagAdd", "ShoppingBagAlt", "ShoppingBagArrowDown", "ShoppingBagArrowUp", "ShoppingBagCheck", "ShoppingBagIssue", "ShoppingBagRemove", "ShoppingCode", "ShoppingCodeCheck", "ShoppingCodeError", "ShortPants", "ShortPantsAlt", "Shuffle", "SimpleCart", "SingleTapGesture", "Skateboard", "Skateboarding", "SkipNextOutline", "SkipPrevOutline", "SmallShop", "SmallShopAlt", "SmartphoneDevice", "Smoking", "Snow", "SnowFlake", "Soap", "SoccerBall", "SortDown", "SortUp", "SoundHigh", "SoundLow", "SoundMin", "SoundOff", "SpockHandGesture", "Square", "StarDashed", "StarHalfDashed", "StarOutline", "StatDown", "StatUp", "StatsReport", "StatsSquareDown", "StatsSquareUp", "Stretching", "StyleBorder", "Substract", "Suggestion", "SunLight", "Swimming", "SwipeDownGesture", "SwipeLeftGesture", "SwipeRightGesture", "SwipeUpGesture", "SwitchOffOutline", "SwitchOnOutline", "SystemRestart", "SystemShut", "Table", "Table2Columns", "TableRows", "Telegram", "TelegramCircled", "TennisBall", "TennisBallAlt", "TerminalOutline", "TerminalSimple", "Text", "TextAlt", "TextSize", "ThreeStars", "Thunderstorm", "TikTok", "Timer", "TimerOff", "Tower", "TowerCheck", "TowerNoAccess", "TowerWarning", "Trademark", "TrainOutline", "Tram", "TransitionBottom", "TransitionLeft", "TransitionRight", "TransitionTop", "Translate", "Trash", "Treadmill", "Trekking", "Trello", "Triangle", "TriangleFlag", "TriangleFlagCircle", "TriangleFlagFull", "Trophy", "Tunnel", "Tv", "TvFix", "TvIssue", "Twitter", "TwitterVerifiedBadge", "Type", "UmbrellaFull", "Underline", "Undo", "UndoAction", "UndoCircle", "Union", "UnionAlt", "UnionHorizAlt", "Unity", "Unity5", "UpRoundArrow", "Upload", "UploadSquareOutline", "Usb", "User", "UserBag", "UserCart", "UserCircleAlt", "UserScan", "UserSquareAlt", "VerifiedBadge", "VerifiedUser", "VideoCamera", "VideoCameraOff", "ViewColumns2", "ViewColumns3", "ViewGrid", "ViewStructureDown", "ViewStructureUp", "Voice", "VoiceCircled", "VoiceCircledLock", "VoiceError", "VoiceOk", "VoicePhone", "VoiceScan", "VoiceSquared", "VrSymbol", "Waist", "Walking", "WarningSquareOutline", "WebWindow", "WebWindowClose", "Weight", "WeightAlt", "WhiteFlag", "Wifi", "WifiIssue", "WifiOff", "WifiSignalNone", "Wind", "WrapText", "Wristwatch", "Yen", "YenSquare", "Yoga", "YouTube", "ZoomIn", "ZoomOut"],
    js = "https://framer.com/m/iconoir-icons/",
    Bs = Xr.reduce((e, r) => (e[r.toLowerCase()] = r, e), {});

function ke(e) {
    let {
        color: r,
        selectByList: a,
        iconSearch: o,
        iconSelection: s,
        onClick: i,
        onMouseDown: l,
        onMouseUp: h,
        onMouseEnter: m,
        onMouseLeave: f,
        mirrored: p
    } = e, c = ie(!1), S = wn(Xr, a, o, s, Bs), [v, y] = X(S === "Home" ? bn(oe) : null);
    async function b() {
        try {
            let u = await import(`${js}${S}.js@0.0.11`);
            c.current && y(u.default(oe))
        } catch {
            c.current && y(null)
        }
    }
    ee(() => (c.current = !0, b(), () => {
        c.current = !1
    }), [S]);
    let g = de.current() === de.canvas ? t(yn, {}) : null;
    return t("div", {
        style: {
            display: "contents"
        },
        onClick: i,
        onMouseEnter: m,
        onMouseLeave: f,
        onMouseDown: l,
        onMouseUp: h,
        children: v ? t(v, {
            size: "100$%",
            style: {
                width: "100%",
                height: "100%",
                transform: p ? "scale(-1, 1)" : void 0
            },
            color: r
        }) : g
    })
}
ke.displayName = "Iconoir";
ke.defaultProps = {
    width: 24,
    height: 24,
    iconSelection: "Home",
    iconSearch: "Home",
    color: "#66F",
    selectByList: !0,
    mirrored: !1
};
P(ke, {
    selectByList: {
        type: n.Boolean,
        title: "Select",
        enabledTitle: "List",
        disabledTitle: "Search",
        defaultValue: ke.defaultProps.selectByList
    },
    iconSelection: {
        type: n.Enum,
        options: Xr,
        defaultValue: ke.defaultProps.iconSelection,
        title: "Name",
        hidden: ({
            selectByList: e
        }) => !e,
        description: "Find every icon name on the [Iconoir site](https://iconoir.com/)"
    },
    iconSearch: {
        type: n.String,
        title: "Name",
        placeholder: "Menu, Wifi, Box\u2026",
        hidden: ({
            selectByList: e
        }) => e
    },
    mirrored: {
        type: n.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: ke.defaultProps.mirrored
    },
    color: {
        type: n.Color,
        title: "Color",
        defaultValue: ke.defaultProps.color
    },
    ...xn
});
var _s = B(ke),
    ur = ar(ke),
    zs = {
        dZzSEmCTU: {
            hover: !0
        }
    },
    Os = ["dZzSEmCTU"],
    Ds = {
        dZzSEmCTU: "framer-v-1hsttu5"
    };

function vn(e, ...r) {
    let a = {};
    return r?.forEach(o => o && Object.assign(a, e[o])), a
}
var Ns = {},
    Hs = {
        default: {
            damping: 60,
            delay: 0,
            duration: .4,
            ease: [.16, 1, .3, 1],
            mass: 1,
            stiffness: 500,
            type: "tween"
        }
    },
    Ws = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "dZzSEmCTU",
        platform: h = "Twitter",
        link: m,
        ...f
    }, p) {
        let S = Ns[l] || l,
            {
                baseVariant: v,
                classNames: y,
                gestureVariant: b,
                setGestureState: k,
                setVariant: g,
                transition: x,
                variants: u
            } = J({
                cycleOrder: Os,
                defaultVariant: "dZzSEmCTU",
                enabledGestures: zs,
                transitions: Hs,
                variant: S,
                variantClassNames: Ds
            }),
            R = u.join("-") + f.layoutDependency,
            M = Y();
        return t(O, {
            id: i ?? M,
            children: t(d.div, {
                initial: S,
                animate: u,
                onHoverStart: () => k({
                    isHovered: !0
                }),
                onHoverEnd: () => k({
                    isHovered: !1
                }),
                onTapStart: () => k({
                    isPressed: !0
                }),
                onTap: () => k({
                    isPressed: !1
                }),
                onTapCancel: () => k({
                    isPressed: !1
                }),
                className: A("framer-Bh8pf", y),
                style: {
                    display: "contents"
                },
                children: t(Ee, {
                    href: m,
                    openInNewTab: !0,
                    children: t(d.a, {
                        ...f,
                        className: `${A("framer-1hsttu5",a)} framer-b1jmrt`,
                        "data-border": !0,
                        "data-framer-name": "Variant 1",
                        layoutDependency: R,
                        layoutId: "dZzSEmCTU",
                        ref: p,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(222, 222, 222))",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245))",
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6,
                            ...r
                        },
                        transition: x,
                        variants: {
                            "dZzSEmCTU-hover": {
                                "--border-color": "var(--token-b0731588-6d12-493c-8302-62f9f032c7c8, rgb(219, 219, 219))"
                            }
                        },
                        ...vn({
                            "dZzSEmCTU-hover": {
                                "data-framer-name": void 0
                            }
                        }, v, b),
                        children: t(d.div, {
                            className: "framer-kkw9yl-container",
                            layoutDependency: R,
                            layoutId: "h2yDyqro7-container",
                            transition: x,
                            children: t(ke, {
                                color: 'var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(125, 127, 131)) /* {"name":"Grey"} */',
                                height: "100%",
                                iconSearch: "Home",
                                iconSelection: h,
                                id: "h2yDyqro7",
                                layoutId: "h2yDyqro7",
                                mirrored: !1,
                                selectByList: !0,
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                width: "100%",
                                ...vn({
                                    "dZzSEmCTU-hover": {
                                        color: 'var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22)) /* {"name":"Typography"} */'
                                    }
                                }, v, b)
                            })
                        })
                    })
                })
            })
        })
    }),
    Us = ['.framer-Bh8pf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Bh8pf .framer-b1jmrt { display: block; }", ".framer-Bh8pf .framer-1hsttu5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 80px; justify-content: center; overflow: hidden; padding: 12px 12px 12px 12px; position: relative; text-decoration: none; width: 80px; will-change: transform; }", ".framer-Bh8pf .framer-kkw9yl-container { flex: none; height: 24px; position: relative; width: 24px; }", ".framer-Bh8pf .framer-v-1hsttu5 .framer-1hsttu5 { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Bh8pf .framer-1hsttu5 { gap: 0px; } .framer-Bh8pf .framer-1hsttu5 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-Bh8pf .framer-1hsttu5 > :first-child { margin-top: 0px; } .framer-Bh8pf .framer-1hsttu5 > :last-child { margin-bottom: 0px; } }"],
    Ut = G(Ws, Us, "framer-Bh8pf"),
    Ze = Ut;
Ut.displayName = "Social";
Ut.defaultProps = {
    height: 80,
    width: 80
};
P(Ut, {
    oWQLpSg7c: ur?.iconSelection && {
        ...ur.iconSelection,
        defaultValue: "Twitter",
        hidden: void 0,
        title: "Platform"
    },
    y0aKRK9eU: {
        title: "Link",
        type: n.Link
    }
});
Z(Ut, [..._s]);

function pt({
    label: e,
    content: r,
    fill: a,
    color: o,
    style: s,
    onClick: i,
    ...l
}) {
    let {
        fontFamily: h,
        fontSize: m,
        fontWeight: f
    } = At(l), p = Ke(l), c = jt(l), S = ue(() => {
        var v;
        (v = L.clipboard) === null || v === void 0 || v.writeText(r), i?.()
    }, [i, r]);
    return t(d.button, {
        style: {
            border: "none",
            outline: "none",
            resize: "none",
            width: "max-content",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            letterSpacing: "-0.2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: a,
            borderRadius: p,
            cursor: "pointer",
            padding: c,
            fontFamily: h,
            fontWeight: f,
            fontSize: m,
            color: o,
            ...s
        },
        onClick: S,
        whileHover: {
            opacity: .8
        },
        whileTap: {
            scale: .9
        },
        transition: {
            type: "ease",
            duration: .3
        },
        ...l,
        children: e
    })
}
pt.defaultProps = {
    label: "Copy to clipboard",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: 500,
    padding: 15,
    borderRadius: 8
};
P(pt, {
    content: {
        type: n.String,
        title: "Content",
        displayTextArea: !0,
        description: "When clicked, this content will be copied to the clipboard."
    },
    label: {
        type: n.String,
        title: "Label"
    },
    fill: {
        type: n.Color,
        title: "Fill"
    },
    color: {
        type: n.Color,
        title: "Text"
    },
    ...ct,
    fontSize: {
        title: "Font Size",
        type: n.Number,
        displayStepper: !0,
        defaultValue: 16
    },
    ...Bt,
    ...$e,
    ...Ft
});
var Gs = B(pt),
    qs = {
        gEs5eli09: {
            hover: !0,
            pressed: !0
        }
    },
    Ks = ["gEs5eli09", "sOz82d3ct"],
    $s = {
        gEs5eli09: "framer-v-b7zj9q",
        sOz82d3ct: "framer-v-5rpvvr"
    };

function Cn(e, ...r) {
    let a = {};
    return r?.forEach(o => o && Object.assign(a, e[o])), a
}
var Ys = {
        "Copied State": "sOz82d3ct",
        "Default State": "gEs5eli09"
    },
    Zs = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.12, .23, .5, 1],
            mass: 1,
            stiffness: 500,
            type: "tween"
        }
    },
    Qs = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "gEs5eli09",
        email: h = "john@doe.design",
        ...m
    }, f) {
        let c = Ys[l] || l,
            {
                baseVariant: S,
                classNames: v,
                gestureVariant: y,
                setGestureState: b,
                setVariant: k,
                transition: g,
                variants: x
            } = J({
                cycleOrder: Ks,
                defaultVariant: "gEs5eli09",
                enabledGestures: qs,
                transitions: Zs,
                variant: c,
                variantClassNames: $s
            }),
            u = x.join("-") + m.layoutDependency,
            {
                activeVariantCallback: R,
                delay: M
            } = Pa(S),
            I = R(async (...z) => {
                k("sOz82d3ct")
            }),
            w = R(async (...z) => {
                await M(() => k("gEs5eli09"), 2e3)
            });
        ja(S, {
            sOz82d3ct: w
        });
        let F = Y();
        return t(O, {
            id: i ?? F,
            children: t(d.div, {
                initial: c,
                animate: x,
                onHoverStart: () => b({
                    isHovered: !0
                }),
                onHoverEnd: () => b({
                    isHovered: !1
                }),
                onTapStart: () => b({
                    isPressed: !0
                }),
                onTap: () => b({
                    isPressed: !1
                }),
                onTapCancel: () => b({
                    isPressed: !1
                }),
                className: A("framer-jB8Rt", v),
                style: {
                    display: "contents"
                },
                children: V(d.div, {
                    ...m,
                    className: A("framer-b7zj9q", a),
                    "data-border": !0,
                    "data-framer-name": "Default State",
                    "data-highlight": !0,
                    layoutDependency: u,
                    layoutId: "gEs5eli09",
                    onTap: I,
                    ref: f,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(238, 238, 238))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-b51ef5c2-aa9a-430c-a5f7-c49146f35812, rgb(253, 253, 252))",
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...r
                    },
                    transition: g,
                    variants: {
                        "gEs5eli09-hover": {
                            "--border-color": 'var(--token-b0731588-6d12-493c-8302-62f9f032c7c8, rgb(219, 219, 219)) /* {"name":"Borders Hover"} */',
                            backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(28, 28, 28))"
                        },
                        "gEs5eli09-pressed": {
                            backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(28, 28, 28))"
                        },
                        sOz82d3ct: {
                            backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(28, 28, 28))"
                        }
                    },
                    ...Cn({
                        "gEs5eli09-hover": {
                            "data-framer-name": void 0
                        },
                        "gEs5eli09-pressed": {
                            "data-framer-name": void 0
                        },
                        sOz82d3ct: {
                            "data-framer-name": "Copied State"
                        }
                    }, S, y),
                    children: [t(d.div, {
                        className: "framer-1ss0cx3",
                        "data-framer-name": "Icon",
                        layoutDependency: u,
                        layoutId: "RllQU65JF",
                        transition: g,
                        children: t(nt, {
                            className: "framer-ln953",
                            "data-framer-name": "Default",
                            fill: "rgba(0,0,0,1)",
                            intrinsicHeight: 16,
                            intrinsicWidth: 16,
                            layoutDependency: u,
                            layoutId: "QhBp9YO6f",
                            svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
<path opacity="0.64" d="M4 2.5H9C9.82843 2.5 10.5 3.17157 10.5 4V5.5H7C6.17157 5.5 5.5 6.17157 5.5 7V10.5H4C3.17157 10.5 2.5 9.82843 2.5 9V4C2.5 3.17157 3.17157 2.5 4 2.5Z" stroke="#7D7F83" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="#7D7F83" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                            transition: g,
                            withExternalLayout: !0
                        })
                    }), t(d.div, {
                        className: "framer-1qrbsqd-container",
                        layoutDependency: u,
                        layoutId: "t2lTSED0u-container",
                        transition: g,
                        children: t(pt, {
                            borderRadius: 6,
                            bottomLeftRadius: 6,
                            bottomRightRadius: 6,
                            color: 'var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22)) /* {"name":"Black"} */',
                            content: h,
                            fill: "rgba(28, 28, 28, 0)",
                            font: !0,
                            fontFamily: "Inter",
                            fontSize: 14,
                            fontWeight: 600,
                            height: "100%",
                            id: "t2lTSED0u",
                            isMixedBorderRadius: !1,
                            label: "E-Mail",
                            layoutId: "t2lTSED0u",
                            padding: 16,
                            paddingBottom: 12,
                            paddingLeft: 40,
                            paddingPerSide: !0,
                            paddingRight: 20,
                            paddingTop: 12,
                            style: {
                                width: "100%"
                            },
                            topLeftRadius: 6,
                            topRightRadius: 6,
                            width: "100%",
                            ...Cn({
                                sOz82d3ct: {
                                    color: 'var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(124, 127, 130)) /* {"name":"Grey"} */',
                                    label: "Copied!"
                                }
                            }, S, y)
                        })
                    })]
                })
            })
        })
    }),
    Xs = ['.framer-jB8Rt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-jB8Rt .framer-1jhoo86 { display: block; }", ".framer-jB8Rt .framer-b7zj9q { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 40px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 112px; }", ".framer-jB8Rt .framer-1ss0cx3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: flex-start; left: 19px; overflow: visible; padding: 0px 0px 0px 0px; pointer-events: auto; position: absolute; top: calc(48.78048780487807% - 20px / 2); width: 20px; }", ".framer-jB8Rt .framer-ln953 { flex: none; height: 18px; position: relative; width: 18px; }", ".framer-jB8Rt .framer-1qrbsqd-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }", ".framer-jB8Rt .framer-v-b7zj9q .framer-b7zj9q { cursor: pointer; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-jB8Rt .framer-b7zj9q, .framer-jB8Rt .framer-1ss0cx3 { gap: 0px; } .framer-jB8Rt .framer-b7zj9q > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-jB8Rt .framer-b7zj9q > :first-child, .framer-jB8Rt .framer-1ss0cx3 > :first-child { margin-left: 0px; } .framer-jB8Rt .framer-b7zj9q > :last-child, .framer-jB8Rt .framer-1ss0cx3 > :last-child { margin-right: 0px; } .framer-jB8Rt .framer-1ss0cx3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }"],
    Gt = G(Qs, Xs, "framer-jB8Rt"),
    Jr = Gt;
Gt.displayName = "Element/Email Clip Button";
Gt.defaultProps = {
    height: 40,
    width: 112
};
P(Gt, {
    variant: {
        options: ["gEs5eli09", "sOz82d3ct"],
        optionTitles: ["Default State", "Copied State"],
        title: "Variant",
        type: n.Enum
    },
    pkNMuMrfs: {
        defaultValue: "john@doe.design",
        displayTextArea: !0,
        title: "Email",
        type: n.String
    }
});
Z(Gt, [...Gs]);
var Js = /(https?:\/\/[^ ]*)/;

function qt(e) {
    let {
        theme: r,
        url: a
    } = e, s = ue(() => {
        if (a.length < 5) return null;
        let i = a.includes("iframe") ? a.match(Js)[1].replace('"', "") : a,
            l = new URL(i);
        return l.pathname.includes("embed") || (l.pathname = `/embed${l.pathname}`), l.search = `theme=${r}`, l.toString()
    }, [r, a])();
    return t("iframe", {
        style: {
            height: "100%",
            width: "100%"
        },
        frameBorder: 0,
        src: s
    })
}
qt.defaultProps = {
    url: "https://ko-fi.com/tomasdvorak",
    width: 280,
    height: 350,
    theme: 1
};
P(qt, {
    url: {
        type: n.String,
        title: "URL"
    },
    theme: {
        type: n.Enum,
        displaySegmentedControl: !0,
        options: [1, 0],
        optionTitles: ["On", "Off"]
    }
});
var el = B(ze),
    tl = B(qt),
    rl = ["z1McO2bD5"],
    al = {
        z1McO2bD5: "framer-v-1rs0kcr"
    };
var nl = {},
    ol = {
        default: {
            damping: 60,
            delay: 0,
            duration: .3,
            ease: [.44, 0, .56, 1],
            mass: 1,
            stiffness: 500,
            type: "spring"
        }
    },
    il = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "z1McO2bD5",
        title: h = "Spotify",
        ...m
    }, f) {
        let c = nl[l] || l,
            {
                baseVariant: S,
                classNames: v,
                gestureVariant: y,
                setGestureState: b,
                setVariant: k,
                transition: g,
                variants: x
            } = J({
                cycleOrder: rl,
                defaultVariant: "z1McO2bD5",
                transitions: ol,
                variant: c,
                variantClassNames: al
            }),
            u = x.join("-") + m.layoutDependency,
            R = Y();
        return t(O, {
            id: i ?? R,
            children: t(d.div, {
                initial: c,
                animate: x,
                onHoverStart: () => b({
                    isHovered: !0
                }),
                onHoverEnd: () => b({
                    isHovered: !1
                }),
                onTapStart: () => b({
                    isPressed: !0
                }),
                onTap: () => b({
                    isPressed: !1
                }),
                onTapCancel: () => b({
                    isPressed: !1
                }),
                className: A("framer-atGTO", Me, v),
                style: {
                    display: "contents"
                },
                children: V(d.div, {
                    ...m,
                    className: A("framer-1rs0kcr", a),
                    "data-border": !0,
                    "data-framer-name": "Variant 1",
                    layoutDependency: u,
                    layoutId: "z1McO2bD5",
                    ref: f,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "var(--token-b7046cab-a803-4f27-934d-bf5b26201782, rgb(238, 238, 238))",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245))",
                        borderBottomLeftRadius: 6,
                        borderBottomRightRadius: 6,
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        ...r
                    },
                    transition: g,
                    children: [V(d.div, {
                        className: "framer-1f4cmzy",
                        layoutDependency: u,
                        layoutId: "neXbbWrra",
                        transition: g,
                        children: [t(re, {
                            __fromCanvasComponent: !0,
                            children: t(te, {
                                children: t(d.h3, {
                                    className: "framer-styles-preset-1wml6uu",
                                    "data-styles-preset": "fVxnimdqP",
                                    children: "Spotify"
                                })
                            }),
                            className: "framer-1csjsqh",
                            layoutDependency: u,
                            layoutId: "qgzk8SSKM",
                            style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: h,
                            transition: g,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), t(d.div, {
                            className: "framer-wwwd7r-container",
                            layoutDependency: u,
                            layoutId: "by8wXII3j-container",
                            transition: g,
                            children: t(ze, {
                                arrow: !0,
                                height: "100%",
                                id: "by8wXII3j",
                                label: "Ko-Fi",
                                layoutId: "by8wXII3j",
                                link: "https://ko-fi.com/tomasdvorak",
                                newTab: !0,
                                width: "100%"
                            })
                        })]
                    }),]
                })
            })
        })
    }),
    sl = ['.framer-atGTO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-atGTO .framer-1ikrgct { display: block; }", ".framer-atGTO .framer-1rs0kcr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px 16px 16px 16px; position: relative; width: 568px; will-change: transform; }", ".framer-atGTO .framer-1f4cmzy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-atGTO .framer-1csjsqh { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-atGTO .framer-wwwd7r-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-atGTO .framer-47jwyi-container { flex: none; height: 80px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-atGTO .framer-1rs0kcr, .framer-atGTO .framer-1f4cmzy { gap: 0px; } .framer-atGTO .framer-1rs0kcr > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-atGTO .framer-1rs0kcr > :first-child { margin-top: 0px; } .framer-atGTO .framer-1rs0kcr > :last-child { margin-bottom: 0px; } .framer-atGTO .framer-1f4cmzy > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-atGTO .framer-1f4cmzy > :first-child { margin-left: 0px; } .framer-atGTO .framer-1f4cmzy > :last-child { margin-right: 0px; } }", ...Ie],
    Kt = G(il, sl, "framer-atGTO"),
    ea = Kt;
Kt.displayName = "Podcast (Spotify)";
Kt.defaultProps = {
    height: 152,
    width: 568
};
P(Kt, {
    d2dutqm0U: {
        defaultValue: "Spotify",
        displayTextArea: !1,
        title: "Title",
        type: n.String
    }
});
Z(Kt, [...el, ...tl, ...Ve]);
De.loadWebFontsFromSelectors([]);
var Sn = [],
    kn = [".framer-WicrH .framer-styles-preset-825om3:not(.rich-text-wrapper), .framer-WicrH .framer-styles-preset-825om3.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, #f2f2f2); --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, #7c7f82); --framer-link-text-decoration: none; }"],
    Rn = "framer-WicrH";
var dl = B(ot),
    cl = B(Jr),
    fl = B(Dt),
    ml = B(Zr),
    pl = B($r),
    ul = B(ea),
    hl = B(Ze),
    gl = B(Ur),
    yl = B(Or),
    bl = B(Mr);
var Tn = {
        CFj56cLu6: "(max-width: 809px)",
        MFnG1vrDU: "(min-width: 810px) and (max-width: 1199px)",
        WQLkyLRf1: "(min-width: 1200px)"
    },
    Ln = () => typeof document < "u",
    En = {
        CFj56cLu6: "framer-v-1pskqnr",
        MFnG1vrDU: "framer-v-rqvu1i",
        WQLkyLRf1: "framer-v-72rtr7"
    };
Ln() && Aa("WQLkyLRf1", Tn, En);
var xl = {
        Desktop: "WQLkyLRf1",
        Phone: "CFj56cLu6",
        Tablet: "MFnG1vrDU"
    },
    wl = {
        default: {
            duration: 0
        }
    },
    Vn = {
        delay: 0,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    vl = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: Vn,
        x: 0,
        y: 48
    },
    W = (e, r) => `perspective(1200px) ${r}`,
    ta = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Vn,
        x: 0,
        y: 0
    },
    U = {
        opacity: .001,
        rotate: 0,
        scale: .96,
        x: 0,
        y: 48
    },
    In = {
        delay: .1,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    Cl = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: In,
        x: 0,
        y: 48
    },
    ra = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: In,
        x: 0,
        y: 0
    },
    Mn = {
        delay: .2,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    Sl = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: Mn,
        x: 0,
        y: 48
    },
    aa = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Mn,
        x: 0,
        y: 0
    },
    Pn = {
        delay: .3,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    kl = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: Pn,
        x: 0,
        y: 48
    },
    na = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Pn,
        x: 0,
        y: 0
    },
    Fn = {
        delay: .4,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    Rl = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: Fn,
        x: 0,
        y: 48
    },
    oa = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Fn,
        x: 0,
        y: 0
    },
    An = {
        delay: .5,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    Tl = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: An,
        x: 0,
        y: 48
    },
    ia = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: An,
        x: 0,
        y: 0
    },
    jn = {
        delay: .6,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    Ll = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: jn,
        x: 0,
        y: 48
    },
    sa = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: jn,
        x: 0,
        y: 0
    },
    Bn = {
        delay: .7,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    El = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: Bn,
        x: 0,
        y: 48
    },
    la = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: Bn,
        x: 0,
        y: 0
    },
    _n = {
        delay: .8,
        duration: .6,
        ease: [.16, 1, .3, 1],
        type: "tween"
    },
    Vl = {
        opacity: 0,
        rotate: 0,
        scale: .96,
        transition: _n,
        x: 0,
        y: 48
    },
    da = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        transition: _n,
        x: 0,
        y: 0
    },
    ca = Pr(),
    Il = D(function({
        id: e,
        style: r,
        className: a,
        width: o,
        height: s,
        layoutId: i,
        variant: l = "WQLkyLRf1",
        ...h
    }, m) {
        let p = xl[l] || l;
        Rt(() => {
            let g = Pr();
            if (document.title = g.title || "", g.viewport) {
                var x;
                (x = document.querySelector('meta[name="viewport"]')) === null || x === void 0 || x.setAttribute("content", g.viewport)
            }
            g.bodyClassName && (Array.from(document.body.classList).filter(u => u.startsWith("framer-body-")).map(u => document.body.classList.remove(u)), document.body.classList.add(g.bodyClassName))
        }, []);
        let [c, S] = Fa(p, Tn, !1), v = void 0, y = wl.default, b = () => c === "CFj56cLu6" ? !Ln() : !0, k = Y();
        return t(Ma.Provider, {
            value: {
                primaryVariantId: "WQLkyLRf1",
                variantClassNames: En
            },
            children: t(O, {
                id: i ?? k,
                children: V(d.div, {
                    className: A("framer-8swEc", Oa, Ha, Rn),
                    style: {
                        display: "contents"
                    },
                    children: [V(d.div, {
                        ...h,
                        className: A("framer-72rtr7", a),
                        ref: m,
                        style: {
                            ...r
                        },
                        children: [t(d.main, {
                            className: "framer-13f2r9g",
                            "data-framer-name": "Main",
                            name: "Main",
                            children: V(d.div, {
                                className: "framer-17zjt6",
                                "data-framer-name": "Container Small",
                                name: "Container Small",
                                children: [V(d.header, {
                                    className: "framer-1udszpt",
                                    "data-framer-name": "Intro",
                                    name: "Intro",
                                    children: [t(Ee, {
                                        href: {
                                            webPageId: "augiA20Il"
                                        },
                                        openInNewTab: !1,
                                        children: t(d.a, {
                                            className: "framer-rns6o5 framer-lux5qc",
                                            "data-framer-name": "Component/Name & Job",
                                            name: "Component/Name & Job",
                                            children: t(Se, {
                                                background: {
                                                    alt: "Image of C\xE9dric Moore",
                                                    fit: "fill",
                                                    intrinsicHeight: 200,
                                                    intrinsicWidth: 200,
                                                    pixelHeight: 200,
                                                    pixelWidth: 200,
                                                    src: "lFcgmnSNMxgS8b8a78iKsMuURd0.webp"
                                                },
                                                className: "framer-1nntpmr",
                                                "data-framer-name": "Portrait",
                                                name: "Portrait"
                                            })
                                        })
                                    }), V(d.div, {
                                        className: "framer-167ra2i",
                                        "data-framer-name": "Text Wrap",
                                        name: "Text Wrap",
                                        children: [t(re, {
                                            __fromCanvasComponent: !0,
                                            children: t(te, {
                                                children: t("h1", {
                                                    className: "framer-styles-preset-3nqyhf",
                                                    "data-styles-preset": "YAP816Y5n",
                                                    style: {
                                                        "--framer-text-alignment": "center"
                                                    },
                                                    children: "Tomáš Dvořák"
                                                })
                                            }),
                                            className: "framer-ijgd1l",
                                            "data-framer-name": "Name",
                                            name: "Name",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), t(re, {
                                            __fromCanvasComponent: !0,
                                            children: t(te, {
                                                children: t("h2", {
                                                    className: "framer-styles-preset-1521une",
                                                    "data-styles-preset": "ZuGlwtIl8",
                                                    style: {
                                                        "--framer-text-alignment": "center"
                                                    },
                                                    children: "A self taught programmer, whitehat hacker and pentester."
                                                })
                                            }),
                                            className: "framer-6e8eci",
                                            "data-framer-name": "Lead",
                                            name: "Lead",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })]
                                    }), V(d.div, {
                                        className: "framer-el55e5",
                                        "data-framer-name": "Button Row",
                                        name: "Button Row",
                                        children: [t(se, {
                                            className: "framer-i47o8l-container",
                                            children: t(ot, {
                                                height: "100%",
                                                id: "CnaI10BRu",
                                                layoutId: "CnaI10BRu",
                                                link: "www.tdvorak.site",
                                                title: "Website",
                                                variant: "eUhMm5thz",
                                                width: "100%"
                                            })
                                        }), t(se, {
                                            className: "framer-1no5zkr-container",
                                            children: t(Jr, {
                                                email: "contact@tdvorak.site",
                                                height: "100%",
                                                id: "SQeh11hpL",
                                                layoutId: "SQeh11hpL",
                                                variant: "gEs5eli09",
                                                width: "100%"
                                            })
                                        })]
                                    })]
                                }), V(d.div, {
                                    className: "framer-1usem3u",
                                    children: [t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "n8j19j",
                                                animate: T("animate", "n8j19j", ta, "1pskqnr"),
                                                initial: T("initial", "n8j19j", U, "1pskqnr"),
                                                transformTemplate: N("n8j19j", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "1ksx98e",
                                                animate: T("animate", "1ksx98e", ta, "rqvu1i"),
                                                initial: T("initial", "1ksx98e", U, "rqvu1i"),
                                                transformTemplate: N("1ksx98e", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "8qgos4", aa, "72rtr7"),
                                            className: "framer-8qgos4-container",
                                            "data-framer-appear-id": "8qgos4",
                                            exit: Sl,
                                            initial: T("initial", "8qgos4", U, "72rtr7"),
                                            transformTemplate: N("8qgos4", W),
                                            children: t(ge, {
                                                breakpoint: c,
                                                overrides: {
                                                    CFj56cLu6: {
                                                        text: "More information about me!",
                                                        variant: "Ar36IeYHo"
                                                    }
                                                },
                                                children: t(Dt, {
                                                    button: "View",
                                                    height: "100%",
                                                    id: "YzU_mvjSo",
                                                    image: {
                                                        alt: "",
                                                        src: "logo.png",
                                                    },
                                                    layoutId: "YzU_mvjSo",
                                                    link: "https://tdvorak.site",
                                                    productLinkLS: "",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    text: "More information about me!",
                                                    title: "Personal Portfolio",
                                                    variant: "ALyJFZrjs",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                        
                                    }),t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "10ups1o",
                                                animate: T("animate", "10ups1o", ra, "1pskqnr"),
                                                initial: T("initial", "10ups1o", U, "1pskqnr"),
                                                transformTemplate: N("10ups1o", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "s1v2zz",
                                                animate: T("animate", "s1v2zz", ra, "rqvu1i"),
                                                initial: T("initial", "s1v2zz", U, "rqvu1i"),
                                                transformTemplate: N("s1v2zz", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "8qgos4", aa, "72rtr7"),
                                            className: "framer-8qgos4-container",
                                            "data-framer-appear-id": "8qgos4",
                                            exit: Sl,
                                            initial: T("initial", "8qgos4", U, "72rtr7"),
                                            transformTemplate: N("8qgos4", W),
                                            children: t(ge, {
                                                breakpoint: c,
                                                overrides: {
                                                    CFj56cLu6: {
                                                        text: "More information about my photography!",
                                                        variant: "Ar36IeYHo"
                                                    }
                                                },
                                                children: t(Dt, {
                                                    button: "View",
                                                    height: "100%",
                                                    id: "YzU_mvjSo",
                                                    image: {
                                                        alt: "",
                                                        src: "logo.png",
                                                    },
                                                    layoutId: "YzU_mvjSo",
                                                    link: "https://dv0rinka.site",
                                                    productLinkLS: "",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    text: "More information about my photography!",
                                                    title: "Personal Photography Web",
                                                    variant: "ALyJFZrjs",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                        
                                    }),t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "1cyg5ov",
                                                animate: T("animate", "1cyg5ov", aa, "1pskqnr"),
                                                initial: T("initial", "1cyg5ov", U, "1pskqnr"),
                                                transformTemplate: N("1cyg5ov", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "qg4usi",
                                                animate: T("animate", "qg4usi", aa, "rqvu1i"),
                                                initial: T("initial", "qg4usi", U, "rqvu1i"),
                                                transformTemplate: N("qg4usi", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "8qgos4", aa, "72rtr7"),
                                            className: "framer-8qgos4-container",
                                            "data-framer-appear-id": "8qgos4",
                                            exit: Sl,
                                            initial: T("initial", "8qgos4", U, "72rtr7"),
                                            transformTemplate: N("8qgos4", W),
                                            children: t(ge, {
                                                breakpoint: c,
                                                overrides: {
                                                    CFj56cLu6: {
                                                        text: "",
                                                        variant: "Ar36IeYHo"
                                                    }
                                                },
                                                children: t(Dt, {
                                                    button: "View",
                                                    height: "100%",
                                                    id: "YzU_mvjSo",
                                                    image: {
                                                        alt: "",
                                                        src: "linkedin.png",
                                                    },
                                                    layoutId: "YzU_mvjSo",
                                                    link: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-dvo%C5%99%C3%A1k-542bb7294/",
                                                    productLinkLS: "",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    text: "",
                                                    title: "LinkedIn",
                                                    variant: "ALyJFZrjs",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                        
                                    }), t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "f0t7rd",
                                                animate: T("animate", "f0t7rd", na, "1pskqnr"),
                                                initial: T("initial", "f0t7rd", U, "1pskqnr"),
                                                transformTemplate: N("f0t7rd", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "179dbc",
                                                animate: T("animate", "179dbc", na, "rqvu1i"),
                                                initial: T("initial", "179dbc", U, "rqvu1i"),
                                                transformTemplate: N("179dbc", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "8qgos4", aa, "72rtr7"),
                                            className: "framer-8qgos4-container",
                                            "data-framer-appear-id": "8qgos4",
                                            exit: Sl,
                                            initial: T("initial", "8qgos4", U, "72rtr7"),
                                            transformTemplate: N("8qgos4", W),
                                            children: t(ge, {
                                                breakpoint: c,
                                                overrides: {
                                                    CFj56cLu6: {
                                                        text: "",
                                                        variant: "Ar36IeYHo"
                                                    }
                                                },
                                                children: t(Dt, {
                                                    button: "View",
                                                    height: "100%",
                                                    id: "YzU_mvjSo",
                                                    image: {
                                                        alt: "",
                                                        src: "instagram.png",
                                                    },
                                                    layoutId: "YzU_mvjSo",
                                                    link: "https://www.instagram.com/dv0rinka_photos/",
                                                    productLinkLS: "",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    text: "",
                                                    title: "Photography Instagram",
                                                    variant: "ALyJFZrjs",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                        
                                    }), t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "f0t7rd",
                                                animate: T("animate", "f0t7rd", na, "1pskqnr"),
                                                initial: T("initial", "f0t7rd", U, "1pskqnr"),
                                                transformTemplate: N("f0t7rd", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "179dbc",
                                                animate: T("animate", "179dbc", na, "rqvu1i"),
                                                initial: T("initial", "179dbc", U, "rqvu1i"),
                                                transformTemplate: N("179dbc", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "8qgos4", aa, "72rtr7"),
                                            className: "framer-8qgos4-container",
                                            "data-framer-appear-id": "8qgos4",
                                            exit: Sl,
                                            initial: T("initial", "8qgos4", U, "72rtr7"),
                                            transformTemplate: N("8qgos4", W),
                                            children: t(ge, {
                                                breakpoint: c,
                                                overrides: {
                                                    CFj56cLu6: {
                                                        text: "",
                                                        variant: "Ar36IeYHo"
                                                    }
                                                },
                                                children: t(Dt, {
                                                    button: "View",
                                                    height: "100%",
                                                    id: "YzU_mvjSo",
                                                    image: {
                                                        alt: "",
                                                        src: "instagram.png",
                                                    },
                                                    layoutId: "YzU_mvjSo",
                                                    link: "https://www.instagram.com/dv0rinka_/",
                                                    productLinkLS: "",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    text: "",
                                                    title: "Private Instagram",
                                                    variant: "ALyJFZrjs",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                        
                                    }), t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "f0t7rd",
                                                animate: T("animate", "f0t7rd", na, "1pskqnr"),
                                                initial: T("initial", "f0t7rd", U, "1pskqnr"),
                                                transformTemplate: N("f0t7rd", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "179dbc",
                                                animate: T("animate", "179dbc", na, "rqvu1i"),
                                                initial: T("initial", "179dbc", U, "rqvu1i"),
                                                transformTemplate: N("179dbc", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "8qgos4", aa, "72rtr7"),
                                            className: "framer-8qgos4-container",
                                            "data-framer-appear-id": "8qgos4",
                                            exit: Sl,
                                            initial: T("initial", "8qgos4", U, "72rtr7"),
                                            transformTemplate: N("8qgos4", W),
                                            children: t(ge, {
                                                breakpoint: c,
                                                overrides: {
                                                    CFj56cLu6: {
                                                        text: "",
                                                        variant: "Ar36IeYHo"
                                                    }
                                                },
                                                children: t(Dt, {
                                                    button: "View",
                                                    height: "100%",
                                                    id: "YzU_mvjSo",
                                                    image: {
                                                        alt: "",
                                                        src: "youtube.png",
                                                    },
                                                    layoutId: "YzU_mvjSo",
                                                    link: "https://www.youtube.com/@Bc.Dvorinka/",
                                                    productLinkLS: "",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    text: "",
                                                    title: "YouTube",
                                                    variant: "ALyJFZrjs",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                        
                                    }), t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "f0t7rd",
                                                animate: T("animate", "f0t7rd", na, "1pskqnr"),
                                                initial: T("initial", "f0t7rd", U, "1pskqnr"),
                                                transformTemplate: N("f0t7rd", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "179dbc",
                                                animate: T("animate", "179dbc", na, "rqvu1i"),
                                                initial: T("initial", "179dbc", U, "rqvu1i"),
                                                transformTemplate: N("179dbc", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "8qgos4", aa, "72rtr7"),
                                            className: "framer-8qgos4-container",
                                            "data-framer-appear-id": "8qgos4",
                                            exit: Sl,
                                            initial: T("initial", "8qgos4", U, "72rtr7"),
                                            transformTemplate: N("8qgos4", W),
                                            children: t(ge, {
                                                breakpoint: c,
                                                overrides: {
                                                    CFj56cLu6: {
                                                        text: "",
                                                        variant: "Ar36IeYHo"
                                                    }
                                                },
                                                children: t(Dt, {
                                                    button: "View",
                                                    height: "100%",
                                                    id: "YzU_mvjSo",
                                                    image: {
                                                        alt: "",
                                                        src: "github.png",
                                                    },
                                                    layoutId: "YzU_mvjSo",
                                                    link: "https://github.com/BcDvorinka",
                                                    productLinkLS: "",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    text: "",
                                                    title: "GitHub",
                                                    variant: "ALyJFZrjs",
                                                    width: "100%"
                                                })
                                            })
                                        })
                                        
                                    }), t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "f0t7rd",
                                                animate: T("animate", "f0t7rd", na, "1pskqnr"),
                                                initial: T("initial", "f0t7rd", U, "1pskqnr"),
                                                transformTemplate: N("f0t7rd", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "179dbc",
                                                animate: T("animate", "179dbc", na, "rqvu1i"),
                                                initial: T("initial", "179dbc", U, "rqvu1i"),
                                                transformTemplate: N("179dbc", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "19640wv", ia, "72rtr7"),
                                            className: "framer-19640wv-container",
                                            "data-framer-appear-id": "19640wv",
                                            exit: Tl,
                                            initial: T("initial", "19640wv", U, "72rtr7"),
                                            transformTemplate: N("19640wv", W),
                                            children: t(ea, {
                                                height: "100%",
                                                id: "uO1tBJ6t4",
                                                layoutId: "uO1tBJ6t4",
                                                style: {
                                                    width: "100%"
                                                },
                                                title: "Support Me",
                                                width: "100%"
                                            })
                                        })
                                    }), t(ge, {
                                        breakpoint: c,
                                        overrides: {
                                            CFj56cLu6: {
                                                "data-framer-appear-id": "14929pd",
                                                animate: T("animate", "14929pd", sa, "1pskqnr"),
                                                initial: T("initial", "14929pd", U, "1pskqnr"),
                                                transformTemplate: N("14929pd", W)
                                            },
                                            MFnG1vrDU: {
                                                "data-framer-appear-id": "1ntvyc2",
                                                animate: T("animate", "1ntvyc2", sa, "rqvu1i"),
                                                initial: T("initial", "1ntvyc2", U, "rqvu1i"),
                                                transformTemplate: N("1ntvyc2", W)
                                            }
                                        },
                                        children: t(se, {
                                            animate: T("animate", "j6wumi", da, "72rtr7"),
                                            className: "framer-j6wumi-container",
                                            "data-framer-appear-id": "j6wumi",
                                            exit: Vl,
                                            initial: T("initial", "j6wumi", U, "72rtr7"),
                                            transformTemplate: N("j6wumi", W),
                                            children: t(Or, {
                                                height: "100%",
                                                id: "r9pUDDRT7",
                                                layoutId: "r9pUDDRT7",
                                                style: {
                                                    width: "100%"
                                                },
                                                title: "Skills",
                                                width: "100%"
                                            })
                                        })
                                    })]
                                }), t(d.div, {
                                    className: "framer-bgjajc",
                                    "data-framer-name": "Footer",
                                    name: "Footer",
                                    children: V(d.div, {
                                        className: "framer-1hxhvhp",
                                        "data-framer-name": "Inner",
                                        name: "Inner",
                                        children: [V(d.div, {
                                            className: "framer-khenr0",
                                            "data-framer-name": "Child",
                                            name: "Child",
                                            children: [t(Ba, {
                                                __fromCanvasComponent: !0,
                                                alignment: "left",
                                                className: "framer-1abw0yc",
                                                "data-framer-name": "Proudly built in",
                                                fonts: ["GF;Inter-regular"],
                                                name: "Proudly built in",
                                                rawHTML: "<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='font-size: 0'><span style=''>Made With Love</span><br></span></span>",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), t(re, {
                                                __fromCanvasComponent: !0,
                                                children: t(te, {
                                                    children: t("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7SW50ZXItcmVndWxhcg==",
                                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                            "--framer-font-size": "14px",
                                                            "--framer-line-height": "24px",
                                                            "--framer-text-alignment": "left",
                                                            "--framer-text-color": "var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(125, 127, 131))"
                                                        },
                                                        children: t(Ee, {
                                                            href: "",
                                                            openInNewTab: !0,
                                                            smoothScroll: !1,
                                                            children: t("a", {
                                                                className: "framer-styles-preset-825om3",
                                                                "data-styles-preset": "eOSHOegwe",
                                                                children: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-1gifdd2",
                                                "data-framer-name": "Link",
                                                fonts: ["GF;Inter-regular"],
                                                name: "Link",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        }), b() && t(d.div, {
                                            className: "framer-1jtaaet hidden-1pskqnr",
                                            "data-border": !0,
                                            "data-framer-name": "Divider",
                                            name: "Divider"
                                        }), V(d.div, {
                                            className: "framer-1yahfrm",
                                            "data-framer-name": "Child",
                                            name: "Child",
                                            children: [t(re, {
                                                __fromCanvasComponent: !0,
                                                children: t(te, {
                                                    children: t("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7SW50ZXItcmVndWxhcg==",
                                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                            "--framer-font-size": "14px",
                                                            "--framer-line-height": "24px",
                                                            "--framer-text-alignment": "left",
                                                            "--framer-text-color": "var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, rgb(22, 22, 22))"
                                                        },
                                                        children: "Made by"
                                                    })
                                                }),
                                                className: "framer-1j7nkd9",
                                                "data-framer-name": "Let\u2019s chat",
                                                fonts: ["GF;Inter-regular"],
                                                name: "Let\u2019s chat",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            }), t(re, {
                                                __fromCanvasComponent: !0,
                                                children: t(te, {
                                                    children: t("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7SW50ZXItcmVndWxhcg==",
                                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                            "--framer-font-size": "14px",
                                                            "--framer-line-height": "24px",
                                                            "--framer-text-alignment": "left",
                                                            "--framer-text-color": "var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(125, 127, 131))"
                                                        },
                                                        children: t(Ee, {
                                                            href: "www.tdvorak.site",
                                                            openInNewTab: !0,
                                                            smoothScroll: !1,
                                                            children: t("a", {
                                                                className: "framer-styles-preset-825om3",
                                                                "data-styles-preset": "eOSHOegwe",
                                                                children: "Tomáš Dvořák"
                                                            })
                                                        })
                                                    })
                                                }),
                                                className: "framer-nf3u4",
                                                "data-framer-name": "Link",
                                                fonts: ["GF;Inter-regular"],
                                                name: "Link",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })]
                                        }), b() && t(d.div, {
                                            className: "framer-yxk5ln hidden-1pskqnr",
                                            "data-border": !0,
                                            "data-framer-name": "Divider",
                                            name: "Divider"
                                        }), t(d.div, {
                                            className: "framer-1oj4dmr",
                                            "data-framer-name": "Child",
                                            name: "Child",
                                            children: t(re, {
                                                __fromCanvasComponent: !0,
                                                children: t(te, {
                                                    children: t("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7SW50ZXItcmVndWxhcg==",
                                                            "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                                                            "--framer-font-size": "14px",
                                                            "--framer-line-height": "24px",
                                                            "--framer-text-alignment": "left",
                                                            "--framer-text-color": "var(--token-1ed6d5d5-e471-4369-8639-00688ededc9f, rgb(125, 127, 131))"
                                                        },
                                                        children: "\xA92024 Tomáš Dvořák"
                                                    })
                                                }),
                                                className: "framer-108agn1",
                                                "data-framer-name": "Text",
                                                fonts: ["GF;Inter-regular"],
                                                name: "Text",
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), V(d.div, {
                            className: "framer-c16e4c",
                            "data-framer-name": "Background Pattern",
                            name: "Background Pattern",
                            children: [t(d.div, {
                                className: "framer-g8fgki",
                                "data-framer-name": "Overlay",
                                name: "Overlay"
                            }), t(se, {
                                className: "framer-167dajp-container",
                                children: t(Mr, {
                                    back: 'var(--token-b51ef5c2-aa9a-430c-a5f7-c49146f35812, rgb(253, 253, 252)) /* {"name":"Page Background"} */',
                                    diagonal: !0,
                                    direction: "left",
                                    duration: 5,
                                    front: 'var(--token-62be83f1-0097-4872-b224-94c7b2aa11d6, rgb(245, 245, 245)) /* {"name":"UI Background"} */',
                                    height: "100%",
                                    id: "OyJ3DSy4b",
                                    layoutId: "OyJ3DSy4b",
                                    patternType: "paper",
                                    radius: 0,
                                    scale: 10,
                                    shouldAnimate: !1,
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            })]
                        })]
                    }), t("div", {
                        id: "overlay"
                    })]
                })
            })
        })
    }),
    Ml = ['.framer-8swEc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${ca.bodyClassName} { background: var(--token-b51ef5c2-aa9a-430c-a5f7-c49146f35812, rgb(253, 253, 252)); }`, ".framer-8swEc .framer-lux5qc { display: block; }", ".framer-8swEc .framer-72rtr7 { align-content: flex-start; align-items: flex-start; background-color: var(--token-b51ef5c2-aa9a-430c-a5f7-c49146f35812, #fdfdfc); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }", ".framer-8swEc .framer-13f2r9g { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 58px; height: min-content; justify-content: flex-start; overflow: visible; padding: 100px 0px 160px 0px; position: relative; width: 1px; z-index: 3; }", ".framer-8swEc .framer-17zjt6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 640px; overflow: visible; padding: 0px 36px 0px 36px; position: relative; width: 100%; }", ".framer-8swEc .framer-1udszpt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 12px 0px 12px; position: relative; width: 100%; }", ".framer-8swEc .framer-rns6o5 { align-content: center; align-items: center; border-bottom-left-radius: 500px; border-bottom-right-radius: 500px; border-top-left-radius: 500px; border-top-right-radius: 500px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; will-change: transform; }", ".framer-8swEc .framer-1nntpmr { aspect-ratio: 1 / 1; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: 100px; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 100px); }", ".framer-8swEc .framer-167ra2i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 400px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-8swEc .framer-ijgd1l, .framer-8swEc .framer-6e8eci { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-8swEc .framer-el55e5, .framer-8swEc .framer-1hxhvhp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-8swEc .framer-i47o8l-container, .framer-8swEc .framer-1no5zkr-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-8swEc .framer-1usem3u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-8swEc .framer-1ssddvx-container, .framer-8swEc .framer-1gsprdc-container, .framer-8swEc .framer-8qgos4-container, .framer-8swEc .framer-1d16e5h-container, .framer-8swEc .framer-1zjkj7-container, .framer-8swEc .framer-j6wumi-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 100%; z-index: 1; }", ".framer-8swEc .framer-alfqzx-container, .framer-8swEc .framer-19640wv-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 100%; }", ".framer-8swEc .framer-3azpxj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; z-index: 1; }", ".framer-8swEc .framer-1vxivxb-container, .framer-8swEc .framer-blions-container, .framer-8swEc .framer-1tsvo1b-container, .framer-8swEc .framer-1rvybrp-container, .framer-8swEc .framer-1ll459u-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-8swEc .framer-bgjajc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; }", ".framer-8swEc .framer-khenr0, .framer-8swEc .framer-1oj4dmr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", '.framer-8swEc .framer-1abw0yc { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-text-alignment: left; --framer-text-color: var(--token-02a6872c-fbac-4181-a8b8-1dcaa68ff80d, #161616); --framer-text-decoration: none; --framer-text-transform: none; -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }', ".framer-8swEc .framer-1gifdd2, .framer-8swEc .framer-1j7nkd9, .framer-8swEc .framer-nf3u4, .framer-8swEc .framer-108agn1 { --framer-paragraph-spacing: 0px; -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-8swEc .framer-1jtaaet, .framer-8swEc .framer-yxk5ln { --border-bottom-width: 1px; --border-color: #7c7f82; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: var(--framer-aspect-ratio-supported, 5px); opacity: 0.4; overflow: hidden; position: relative; width: 5px; will-change: transform; }", ".framer-8swEc .framer-1yahfrm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-8swEc .framer-c16e4c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 75vh; justify-content: center; left: 0px; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }", '.framer-8swEc .framer-g8fgki { background: linear-gradient(0deg, var(--token-b51ef5c2-aa9a-430c-a5f7-c49146f35812, #fdfdfc) /* {"name":"Page Background"} */ 0%, rgba(22, 22, 22, 0) 100%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 2; }', ".framer-8swEc .framer-167dajp-container { flex: none; height: 100%; position: relative; width: 100%; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-8swEc .framer-72rtr7, .framer-8swEc .framer-13f2r9g, .framer-8swEc .framer-17zjt6, .framer-8swEc .framer-1udszpt, .framer-8swEc .framer-rns6o5, .framer-8swEc .framer-167ra2i, .framer-8swEc .framer-el55e5, .framer-8swEc .framer-1usem3u, .framer-8swEc .framer-3azpxj, .framer-8swEc .framer-bgjajc, .framer-8swEc .framer-1hxhvhp, .framer-8swEc .framer-khenr0, .framer-8swEc .framer-1yahfrm, .framer-8swEc .framer-1oj4dmr, .framer-8swEc .framer-c16e4c { gap: 0px; } .framer-8swEc .framer-72rtr7 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-8swEc .framer-72rtr7 > :first-child, .framer-8swEc .framer-el55e5 > :first-child, .framer-8swEc .framer-3azpxj > :first-child, .framer-8swEc .framer-1hxhvhp > :first-child, .framer-8swEc .framer-khenr0 > :first-child, .framer-8swEc .framer-1yahfrm > :first-child, .framer-8swEc .framer-1oj4dmr > :first-child, .framer-8swEc .framer-c16e4c > :first-child { margin-left: 0px; } .framer-8swEc .framer-72rtr7 > :last-child, .framer-8swEc .framer-el55e5 > :last-child, .framer-8swEc .framer-3azpxj > :last-child, .framer-8swEc .framer-1hxhvhp > :last-child, .framer-8swEc .framer-khenr0 > :last-child, .framer-8swEc .framer-1yahfrm > :last-child, .framer-8swEc .framer-1oj4dmr > :last-child, .framer-8swEc .framer-c16e4c > :last-child { margin-right: 0px; } .framer-8swEc .framer-13f2r9g > * { margin: 0px; margin-bottom: calc(58px / 2); margin-top: calc(58px / 2); } .framer-8swEc .framer-13f2r9g > :first-child, .framer-8swEc .framer-17zjt6 > :first-child, .framer-8swEc .framer-1udszpt > :first-child, .framer-8swEc .framer-rns6o5 > :first-child, .framer-8swEc .framer-167ra2i > :first-child, .framer-8swEc .framer-1usem3u > :first-child, .framer-8swEc .framer-bgjajc > :first-child { margin-top: 0px; } .framer-8swEc .framer-13f2r9g > :last-child, .framer-8swEc .framer-17zjt6 > :last-child, .framer-8swEc .framer-1udszpt > :last-child, .framer-8swEc .framer-rns6o5 > :last-child, .framer-8swEc .framer-167ra2i > :last-child, .framer-8swEc .framer-1usem3u > :last-child, .framer-8swEc .framer-bgjajc > :last-child { margin-bottom: 0px; } .framer-8swEc .framer-17zjt6 > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-8swEc .framer-1udszpt > *, .framer-8swEc .framer-bgjajc > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-8swEc .framer-rns6o5 > *, .framer-8swEc .framer-167ra2i > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-8swEc .framer-el55e5 > *, .framer-8swEc .framer-3azpxj > *, .framer-8swEc .framer-1hxhvhp > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-8swEc .framer-1usem3u > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-8swEc .framer-khenr0 > *, .framer-8swEc .framer-1yahfrm > *, .framer-8swEc .framer-1oj4dmr > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-8swEc .framer-c16e4c > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", "@media (min-width: 1200px) { .framer-8swEc .hidden-72rtr7 { display: none !important; } }", `@media (min-width: 810px) and (max-width: 1199px) { .framer-8swEc .hidden-rqvu1i { display: none !important; } .${ca.bodyClassName} { background: var(--token-b51ef5c2-aa9a-430c-a5f7-c49146f35812, rgb(253, 253, 252)); } .framer-8swEc .framer-72rtr7 { flex-direction: column; width: 810px; } .framer-8swEc .framer-13f2r9g { flex: none; padding: 160px 0px 160px 0px; width: 100%; } .framer-8swEc .framer-17zjt6 { gap: 56px; padding: 0px 24px 0px 24px; } .framer-8swEc .framer-1nntpmr { height: 88px; width: var(--framer-aspect-ratio-supported, 88px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-8swEc .framer-72rtr7, .framer-8swEc .framer-17zjt6 { gap: 0px; } .framer-8swEc .framer-72rtr7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-8swEc .framer-72rtr7 > :first-child, .framer-8swEc .framer-17zjt6 > :first-child { margin-top: 0px; } .framer-8swEc .framer-72rtr7 > :last-child, .framer-8swEc .framer-17zjt6 > :last-child { margin-bottom: 0px; } .framer-8swEc .framer-17zjt6 > * { margin: 0px; margin-bottom: calc(56px / 2); margin-top: calc(56px / 2); } }}`, `@media (max-width: 809px) { .framer-8swEc .hidden-1pskqnr { display: none !important; } .${ca.bodyClassName} { background: var(--token-b51ef5c2-aa9a-430c-a5f7-c49146f35812, rgb(253, 253, 252)); } .framer-8swEc .framer-72rtr7 { flex-direction: column; width: 390px; } .framer-8swEc .framer-13f2r9g { flex: none; padding: 66px 0px 48px 0px; width: 100%; } .framer-8swEc .framer-17zjt6 { gap: 48px; padding: 0px 24px 0px 24px; } .framer-8swEc .framer-1udszpt { padding: 0px 0px 0px 0px; } .framer-8swEc .framer-1nntpmr { height: var(--framer-aspect-ratio-supported, 80px); width: 80px; } .framer-8swEc .framer-3azpxj { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(100px, 1fr)); grid-template-rows: repeat(2, min-content); justify-content: start; } .framer-8swEc .framer-1vxivxb-container, .framer-8swEc .framer-blions-container, .framer-8swEc .framer-1tsvo1b-container, .framer-8swEc .framer-1rvybrp-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-8swEc .framer-1ll459u-container { align-self: start; flex: none; grid-column: auto / span 2; justify-self: start; width: 100%; } .framer-8swEc .framer-1hxhvhp { flex-direction: column; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-8swEc .framer-72rtr7, .framer-8swEc .framer-17zjt6, .framer-8swEc .framer-3azpxj, .framer-8swEc .framer-1hxhvhp { gap: 0px; } .framer-8swEc .framer-72rtr7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-8swEc .framer-72rtr7 > :first-child, .framer-8swEc .framer-17zjt6 > :first-child, .framer-8swEc .framer-1hxhvhp > :first-child { margin-top: 0px; } .framer-8swEc .framer-72rtr7 > :last-child, .framer-8swEc .framer-17zjt6 > :last-child, .framer-8swEc .framer-1hxhvhp > :last-child { margin-bottom: 0px; } .framer-8swEc .framer-17zjt6 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-8swEc .framer-3azpxj > *, .framer-8swEc .framer-3azpxj > :first-child, .framer-8swEc .framer-3azpxj > :last-child { margin: 0px; } .framer-8swEc .framer-1hxhvhp > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }}`, ...za, ...Na, ...kn],
    hr = G(Il, Ml, "framer-8swEc"),
    du = hr;
hr.displayName = "Home";
hr.defaultProps = {
    height: 2266,
    width: 1200
};
Z(hr, [{
    family: "Inter",
    moduleAsset: {
        localModuleIdentifier: "local-module:screen/augiA20Il:default",
        url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
    weight: "400"
}, ...dl, ...cl, ...fl, ...ml, ...pl, ...ul, ...hl, ...gl, ...yl, ...bl, ..._a, ...Da, ...Sn]);
var cu = {
    exports: {
        default: {
            type: "reactComponent",
            name: "FrameraugiA20Il",
            slots: [],
            annotations: {
                framerIntrinsicWidth: "1200",
                framerResponsiveScreen: "",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"MFnG1vrDU":{"layout":["fixed","auto"]},"CFj56cLu6":{"layout":["fixed","auto"]}}}',
                framerContractVersion: "1",
                framerIntrinsicHeight: "2266"
            }
        },
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {
    cu as __FramerMetadata__, du as
    default
};
//# sourceMappingURL=bK9vYovY0W4AnPMJgoM-V5ecDu58uceZ-3X-O_-ra-8.WFPDH3MV.mjs.map