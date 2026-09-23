// .stitch/tools/verify-entry.tsx
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { MemoryRouter } from "react-router-dom";

// src/lib/useBodyClass.ts
import { useLayoutEffect } from "react";
function useBodyClass(className) {
  useLayoutEffect(() => {
    const previous = document.body.className;
    document.body.className = className;
    return () => {
      document.body.className = previous;
    };
  }, [className]);
}

// src/screens/Splash.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var BODY_CLASS = "bg-surface font-body-md text-body-md text-on-surface antialiased";
function Splash() {
  useBodyClass(BODY_CLASS);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("main", { className: "flex flex-col relative w-full min-h-screen bg-surface pt-safe pb-safe", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full relative select-none overflow-hidden items-center justify-center", style: { minHeight: "calc(100vh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))" }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-80 h-80 rounded-full bg-secondary-fixed/20 blur-3xl transform -translate-y-4" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center px-margin-mobile", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center w-64 h-64", children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "absolute inset-0 w-full h-full text-secondary",
            fill: "none",
            viewBox: "0 0 200 200",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", opacity: "0.22", r: "82", stroke: "currentColor", strokeDasharray: "2 6", strokeWidth: "0.75" }),
              /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", opacity: "0.18", r: "70", stroke: "currentColor", strokeWidth: "1.2" }),
              /* @__PURE__ */ jsx("path", { d: "M42,100 C42,68 68,42 100,42 C132,42 158,68 158,100 C158,132 132,158 100,158 C72,158 48,136 43,109", opacity: "0.22", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2.5" }),
              /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", fill: "currentColor", opacity: "0.04", r: "54" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "relative font-headline-xl text-[68px] leading-none font-semibold text-primary-container tracking-widest pl-2", children: "\uACB0" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center space-x-2 my-space-sm opacity-40", children: /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-secondary" }) }),
      /* @__PURE__ */ jsx("p", { className: "font-headline-md text-headline-md text-outline tracking-[0.28em] font-normal pl-1 text-center", children: "\uB0B4 \uACB0\uC744 \uC77D\uB2E4" })
    ] })
  ] }) }) });
}

// src/screens/Login.tsx
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var BODY_CLASS2 = "bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col antialiased selection:bg-secondary-fixed";
function Login() {
  useBodyClass(BODY_CLASS2);
  return /* @__PURE__ */ jsx2(Fragment2, { children: /* @__PURE__ */ jsx2("main", { className: "flex-1 flex flex-col relative w-full pb-safe bg-surface min-h-screen pt-safe", children: /* @__PURE__ */ jsxs2("div", { className: "flex flex-col w-full px-margin-mobile pb-space-lg select-none", children: [
    /* @__PURE__ */ jsx2("div", { className: "w-full flex items-center justify-between py-space-sm", children: /* @__PURE__ */ jsx2(
      "button",
      {
        "aria-label": "\uB2EB\uAE30",
        className: "w-10 h-10 -ml-space-xs rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high/60 active:scale-95 transition-all",
        onClick: () => history.back(),
        type: "button",
        children: /* @__PURE__ */ jsx2("span", { className: "material-symbols-outlined text-[24px]", children: "close" })
      }
    ) }),
    /* @__PURE__ */ jsx2("div", { className: "flex flex-col items-center justify-center pt-space-md pb-space-xl text-center relative", children: /* @__PURE__ */ jsxs2("div", { className: "flex flex-col items-center justify-center pt-space-lg pb-space-md", children: [
      /* @__PURE__ */ jsx2("img", { src: "/assets/img03.png", alt: "\uACB0 \xB7 \uB0B4 \uACB0\uC744 \uC77D\uB2E4", className: "h-20 w-auto object-contain mb-space-sm select-none" }),
      /* @__PURE__ */ jsx2("p", { className: "font-body-md text-body-md text-on-surface-variant font-normal leading-relaxed text-center", children: "\uB098\uB97C \uC628\uC804\uD788 \uB9C8\uC8FC\uD558\uB294 \uC815\uBC00 AI \uBA85\uB9AC \uC9C4\uB2E8" }),
      /* @__PURE__ */ jsx2("p", { className: "font-label-sm text-label-sm text-outline tracking-wider pt-1", children: "\uCC9C\uAC04\uACFC \uC9C0\uC9C0\uAC00 \uBE5A\uC5B4\uB0B4\uB294 \uC0B6\uC758 \uADA4\uC801\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694" })
    ] }) }),
    /* @__PURE__ */ jsxs2("div", { className: "w-full max-w-sm mx-auto flex flex-col gap-space-sm", children: [
      /* @__PURE__ */ jsxs2("button", { className: "w-full h-13 py-3 px-space-md rounded-xl bg-[#FEE500] text-[#191919] font-title-md text-title-md flex items-center justify-center relative shadow-sm hover:brightness-95 active:scale-[0.99] transition-all", type: "button", children: [
        /* @__PURE__ */ jsx2("span", { className: "absolute left-space-md flex items-center justify-center", children: /* @__PURE__ */ jsx2("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2("path", { d: "M12 3C6.48 3 2 6.58 2 11c0 2.85 1.88 5.35 4.73 6.72-.21.77-.76 2.79-.87 3.22-.14.53.19.53.41.38.17-.11 2.74-1.87 3.86-2.63.61.09 1.23.14 1.87.14 5.52 0 10-3.58 10-8s-4.48-8-10-8z" }) }) }),
        /* @__PURE__ */ jsx2("span", { className: "", children: "\uCE74\uCE74\uC624\uB85C \uC2DC\uC791\uD558\uAE30" })
      ] }),
      /* @__PURE__ */ jsxs2("button", { className: "w-full h-13 py-3 px-space-md rounded-xl bg-[#03C75A] text-[#FFFFFF] font-title-md text-title-md flex items-center justify-center relative shadow-sm hover:brightness-95 active:scale-[0.99] transition-all", type: "button", children: [
        /* @__PURE__ */ jsx2("span", { className: "absolute left-space-md flex items-center justify-center", children: /* @__PURE__ */ jsx2("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2("path", { d: "M16.273 12.845 7.37 0H0v24h7.727V11.155L16.63 24H24V0h-7.727v12.845z" }) }) }),
        /* @__PURE__ */ jsx2("span", { className: "", children: "\uB124\uC774\uBC84\uB85C \uC2DC\uC791\uD558\uAE30" })
      ] }),
      /* @__PURE__ */ jsxs2("button", { className: "w-full h-13 py-3 px-space-md rounded-xl bg-surface-container-lowest text-[#1F2937] font-title-md text-title-md flex items-center justify-center relative shadow-sm hover:bg-surface-container-low active:scale-[0.99] transition-all border border-outline-variant/60", type: "button", children: [
        /* @__PURE__ */ jsx2("span", { className: "absolute left-space-md flex items-center justify-center", children: /* @__PURE__ */ jsxs2("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx2("path", { d: "M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.67v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.16z", fill: "#4285F4" }),
          /* @__PURE__ */ jsx2("path", { d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.4 7.34 24 12 24z", fill: "#34A853" }),
          /* @__PURE__ */ jsx2("path", { d: "M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z", fill: "#FBBC05" }),
          /* @__PURE__ */ jsx2("path", { d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.6 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z", fill: "#EA4335" })
        ] }) }),
        /* @__PURE__ */ jsx2("span", { className: "", children: "Google\uB85C \uC2DC\uC791\uD558\uAE30" })
      ] })
    ] }),
    /* @__PURE__ */ jsx2("div", { className: "mt-space-lg flex justify-center items-center", children: /* @__PURE__ */ jsxs2("button", { className: "group inline-flex items-center gap-1 font-body-md text-body-md text-on-surface-variant hover:text-primary py-space-xs px-space-sm rounded-full transition-colors", type: "button", children: [
      /* @__PURE__ */ jsx2("span", { className: "", children: "\uB458\uB7EC\uBCF4\uAE30" }),
      /* @__PURE__ */ jsx2("span", { className: "material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform text-outline", children: "arrow_forward" })
    ] }) }),
    /* @__PURE__ */ jsxs2("div", { className: "mt-space-xl text-center space-y-space-sm px-space-md", children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-center gap-2 text-outline-variant", children: [
        /* @__PURE__ */ jsx2("span", { className: "w-1 h-1 rounded-full bg-outline-variant" }),
        /* @__PURE__ */ jsx2("span", { className: "w-8 h-px bg-outline-variant/60" }),
        /* @__PURE__ */ jsx2("span", { className: "w-1 h-1 rounded-full bg-outline-variant" })
      ] }),
      /* @__PURE__ */ jsxs2("p", { className: "font-label-md text-label-md text-outline leading-relaxed max-w-xs mx-auto", children: [
        "\uB85C\uADF8\uC778 \uC2DC",
        " ",
        /* @__PURE__ */ jsx2("a", { className: "underline underline-offset-2 text-on-surface hover:text-primary transition-colors", href: "#", children: "\uC774\uC6A9\uC57D\uAD00" }),
        " ",
        "\uBC0F",
        " ",
        /* @__PURE__ */ jsx2("a", { className: "underline underline-offset-2 text-on-surface hover:text-primary transition-colors", href: "#", children: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68" }),
        "\uC5D0 \uB3D9\uC758\uD558\uAC8C \uB429\uB2C8\uB2E4"
      ] }),
      /* @__PURE__ */ jsx2("p", { className: "font-label-sm text-label-sm text-outline/60 pt-space-xs", children: "\uACB0 \xB7 \uB0B4 \uACB0\uC744 \uC77D\uB2E4" })
    ] })
  ] }) }) });
}

// src/screens/LoginSheet.tsx
import { Fragment as Fragment3, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var BODY_CLASS3 = "bg-on-surface/40 font-body-md text-body-md text-on-surface min-h-screen flex flex-col justify-end";
function LoginSheet() {
  useBodyClass(BODY_CLASS3);
  return /* @__PURE__ */ jsx3(Fragment3, { children: /* @__PURE__ */ jsx3("main", { className: "flex flex-col relative w-full bg-surface rounded-t-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.08),0_2px_6px_-1px_rgba(19,27,46,0.03)] pb-safe", children: /* @__PURE__ */ jsxs3("div", { className: "flex flex-col w-full relative", children: [
    /* @__PURE__ */ jsxs3("div", { "aria-hidden": "true", className: "w-full px-margin-mobile pt-space-md pb-space-xl opacity-30 blur-[1px] select-none pointer-events-none", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between mb-space-md", children: [
        /* @__PURE__ */ jsxs3("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-label-sm text-label-sm text-secondary tracking-widest uppercase", children: "\uBA85\uC2DD \uC6D0\uAD6D \uBD84\uC11D" }),
          /* @__PURE__ */ jsx3("h2", { className: "font-headline-md text-headline-md text-on-surface", children: "\uAE40\uC11C\uC5F0 \uB2D8\uC758 \uC0AC\uC8FC" })
        ] }),
        /* @__PURE__ */ jsx3("span", { className: "px-3 py-1 bg-surface-container rounded-full font-label-md text-label-md text-on-surface-variant", children: "\uAC11\uBAA9(\u7532\u6728) \uC77C\uAC04" })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "grid grid-cols-4 gap-2 mb-space-md", children: [
        /* @__PURE__ */ jsxs3("div", { className: "bg-surface-container-low p-2 rounded-lg flex flex-col items-center", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-label-sm text-label-sm text-on-surface-variant mb-1", children: "\uC2DC\uC8FC (\u6642)" }),
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md mb-1", children: "\u4E19" }),
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md", children: "\u5BC5" })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "bg-surface-container-low p-2 rounded-lg flex flex-col items-center ring-1 ring-secondary/30", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-label-sm text-label-sm text-secondary font-semibold mb-1", children: "\uC77C\uC8FC (\u65E5)" }),
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary mb-1", children: "\u7532" }),
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary", children: "\u5B50" })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "bg-surface-container-low p-2 rounded-lg flex flex-col items-center", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-label-sm text-label-sm text-on-surface-variant mb-1", children: "\uC6D4\uC8FC (\u6708)" }),
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md mb-1", children: "\u620A" }),
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md", children: "\u8FB0" })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: "bg-surface-container-low p-2 rounded-lg flex flex-col items-center", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-label-sm text-label-sm text-on-surface-variant mb-1", children: "\uB144\uC8FC (\u5E74)" }),
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md mb-1", children: "\u5E9A" }),
          /* @__PURE__ */ jsx3("div", { className: "w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md", children: "\u5348" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "p-space-md bg-surface-container-low rounded-xl mb-4", children: [
        /* @__PURE__ */ jsx3("div", { className: "h-4 bg-surface-container-highest rounded w-3/4 mb-2" }),
        /* @__PURE__ */ jsx3("div", { className: "h-3 bg-surface-container-highest rounded w-full mb-1.5" }),
        /* @__PURE__ */ jsx3("div", { className: "h-3 bg-surface-container-highest rounded w-5/6" })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "absolute inset-0 bg-[#131b2e]/65 backdrop-blur-[2px] z-10 transition-opacity duration-300" }),
    /* @__PURE__ */ jsx3(LoginSheetDrawer, {})
  ] }) }) });
}
function LoginSheetDrawer({
  onDismiss,
  className = "",
  title = "\uACB0\uACFC\uB97C \uC800\uC7A5\uD560\uAE4C\uC694?",
  subtitle = "\uB85C\uADF8\uC778\uD558\uBA74 \uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uBCFC \uC218 \uC788\uC5B4\uC694"
}) {
  return /* @__PURE__ */ jsxs3("div", { className: `relative z-20 w-full bg-surface rounded-t-[28px] shadow-[0_-8px_32px_rgba(19,27,46,0.18)] flex flex-col px-margin-mobile pt-3 pb-space-lg transition-transform duration-300${className && ` ${className}`}`, children: [
    /* @__PURE__ */ jsx3("div", { "aria-hidden": "true", className: "w-10 h-1 rounded-full bg-surface-container-highest mx-auto mb-4" }),
    /* @__PURE__ */ jsxs3("div", { className: "text-center mb-space-md", children: [
      /* @__PURE__ */ jsx3("h3", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight", children: title }),
      /* @__PURE__ */ jsx3("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1", children: subtitle })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-2.5 mb-space-lg", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-3.5 p-3 rounded-xl bg-surface-container-low transition-colors", children: [
        /* @__PURE__ */ jsx3("div", { className: "w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm flex-shrink-0", children: /* @__PURE__ */ jsx3("span", { className: "material-symbols-outlined text-[20px]", children: "bookmark" }) }),
        /* @__PURE__ */ jsxs3("div", { className: "flex flex-col min-w-0", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-title-md text-title-md text-primary-container leading-snug", children: "\uC0AC\uC8FC \uACB0\uACFC \uC800\uC7A5" }),
          /* @__PURE__ */ jsx3("span", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "\uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uC5F4\uC5B4\uBCF4\uB294 \uB0B4 \uC0AC\uC8FC \uC6D0\uAD6D" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-3.5 p-3 rounded-xl bg-surface-container-low transition-colors", children: [
        /* @__PURE__ */ jsx3("div", { className: "w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm flex-shrink-0", children: /* @__PURE__ */ jsx3("span", { className: "material-symbols-outlined text-[20px]", children: "group_add" }) }),
        /* @__PURE__ */ jsxs3("div", { className: "flex flex-col min-w-0", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-title-md text-title-md text-primary-container leading-snug", children: "\uAC00\uC871\xB7\uCE5C\uAD6C \uC0AC\uC8FC \uCD94\uAC00" }),
          /* @__PURE__ */ jsx3("span", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "\uC18C\uC911\uD55C \uC778\uC5F0\uB4E4\uC758 \uBA85\uC2DD \uBCF4\uAD00 \uBC0F \uAD81\uD569" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-3.5 p-3 rounded-xl bg-surface-container-low transition-colors", children: [
        /* @__PURE__ */ jsx3("div", { className: "w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm flex-shrink-0", children: /* @__PURE__ */ jsx3("span", { className: "material-symbols-outlined text-[20px]", children: "notifications" }) }),
        /* @__PURE__ */ jsxs3("div", { className: "flex flex-col min-w-0", children: [
          /* @__PURE__ */ jsx3("span", { className: "font-title-md text-title-md text-primary-container leading-snug", children: "\uC624\uB298\uC758 \uC6B4\uC138 \uC54C\uB9BC" }),
          /* @__PURE__ */ jsx3("span", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "\uB9E4\uC77C \uC544\uCE68 \uC804\uD574\uC9C0\uB294 \uB9DE\uCDA4 \uAE30\uC6B4 \uC548\uB0B4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-2.5 w-full", children: [
      /* @__PURE__ */ jsxs3("button", { className: "w-full h-12 rounded-xl bg-[#FEE500] text-[#191919] font-title-md text-title-md flex items-center justify-center relative shadow-sm active:scale-[0.99] transition-transform", type: "button", children: [
        /* @__PURE__ */ jsx3("span", { className: "absolute left-4 flex items-center justify-center text-[#191919]", children: /* @__PURE__ */ jsx3("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx3("path", { d: "M12 3C6.477 3 2 6.48 2 10.773c0 2.76 1.83 5.176 4.606 6.554l-.94 3.483c-.08.3.264.542.52.37l4.167-2.766c.532.057 1.077.087 1.647.087 5.523 0 10-3.48 10-7.774C22 6.48 17.523 3 12 3z" }) }) }),
        /* @__PURE__ */ jsx3("span", { className: "", children: "\uCE74\uCE74\uC624\uB85C \uC2DC\uC791\uD558\uAE30" })
      ] }),
      /* @__PURE__ */ jsxs3("button", { className: "w-full h-12 rounded-xl bg-[#03C75A] text-on-primary font-title-md text-title-md flex items-center justify-center relative shadow-sm active:scale-[0.99] transition-transform", type: "button", children: [
        /* @__PURE__ */ jsx3("span", { className: "absolute left-4 flex items-center justify-center text-white", children: /* @__PURE__ */ jsx3("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx3("path", { d: "M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" }) }) }),
        /* @__PURE__ */ jsx3("span", { className: "", children: "\uB124\uC774\uBC84\uB85C \uC2DC\uC791\uD558\uAE30" })
      ] }),
      /* @__PURE__ */ jsxs3("button", { className: "w-full h-12 rounded-xl bg-surface-container-lowest text-primary-container font-title-md text-title-md flex items-center justify-center relative shadow-[0_2px_8px_rgba(19,27,46,0.06)] active:scale-[0.99] transition-transform", type: "button", children: [
        /* @__PURE__ */ jsx3("span", { className: "absolute left-4 flex items-center justify-center", children: /* @__PURE__ */ jsxs3("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx3("path", { d: "M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.88c2.27-2.09 3.66-5.17 3.66-9.14z", fill: "#4285F4" }),
          /* @__PURE__ */ jsx3("path", { d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.04c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.25 21.36 7.33 24 12 24z", fill: "#34A853" }),
          /* @__PURE__ */ jsx3("path", { d: "M5.28 14.28c-.25-.72-.38-1.49-.38-2.28s.13-1.56.38-2.28V6.59H1.25C.45 8.19 0 10.04 0 12s.45 3.81 1.25 5.41l4.03-3.13z", fill: "#FBBC05" }),
          /* @__PURE__ */ jsx3("path", { d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.64 1.25 6.59l4.03 3.13c.95-2.83 3.6-4.97 6.72-4.97z", fill: "#EA4335" })
        ] }) }),
        /* @__PURE__ */ jsx3("span", { className: "", children: "Google\uB85C \uC2DC\uC791\uD558\uAE30" })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "flex justify-center mt-3 mb-1", children: /* @__PURE__ */ jsx3("button", { className: "py-2.5 px-4 font-body-md text-body-md text-on-surface-variant hover:text-on-surface active:opacity-70 transition-opacity", type: "button", onClick: onDismiss, children: "\uB098\uC911\uC5D0 \uD560\uAC8C\uC694" }) }),
    /* @__PURE__ */ jsxs3("p", { className: "font-label-sm text-label-sm text-center text-outline leading-relaxed px-4 pb-2", children: [
      "\uB85C\uADF8\uC778 \uC2DC",
      " ",
      /* @__PURE__ */ jsx3("a", { className: "underline underline-offset-2 text-on-surface-variant hover:text-primary-container", href: "#", children: "\uC774\uC6A9\uC57D\uAD00" }),
      " ",
      "\uBC0F",
      " ",
      /* @__PURE__ */ jsx3("a", { className: "underline underline-offset-2 text-on-surface-variant hover:text-primary-container", href: "#", children: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68" }),
      "\uC5D0 \uB3D9\uC758\uD558\uAC8C \uB429\uB2C8\uB2E4"
    ] })
  ] });
}

// src/screens/TermsAgreement.tsx
import { useEffect } from "react";

// src/lib/dom.ts
var byId = (id) => document.getElementById(id);
var query = (selector, root = document) => root.querySelector(selector);
var queryAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));

// src/screens/TermsAgreement.tsx
import { Fragment as Fragment4, jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var BODY_CLASS4 = "bg-surface font-body-md text-body-md text-on-surface flex flex-col antialiased selection:bg-secondary-fixed";
var termsState = {
  term1: false,
  term2: false,
  term3: false,
  term4: false
};
var termKeys = () => Object.keys(termsState);
function toggleItem(key) {
  termsState[key] = !termsState[key];
  renderState();
}
function toggleAllAgreements() {
  const allActive = Object.values(termsState).every(Boolean);
  const targetState = !allActive;
  termKeys().forEach((k) => {
    termsState[k] = targetState;
  });
  renderState();
}
function renderState() {
  termKeys().forEach((key) => {
    const isChecked = termsState[key];
    const box = byId("check-box-" + key);
    const icon = byId("check-icon-" + key);
    if (isChecked) {
      box.className = "w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shrink-0 transition-colors shadow-sm";
      icon.className = "material-symbols-outlined text-[16px] text-surface-container-lowest";
    } else {
      box.className = "w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors";
      icon.className = "material-symbols-outlined text-[16px] text-outline";
    }
  });
  const allChecked = Object.values(termsState).every(Boolean);
  const allBox = byId("all-checkbox");
  const allIcon = byId("all-check-icon");
  const allCard = byId("all-agree-card");
  if (allChecked) {
    allBox.className = "w-7 h-7 rounded-full bg-secondary flex items-center justify-center transition-colors duration-200 shadow-sm";
    allIcon.className = "material-symbols-outlined text-[18px] text-on-secondary transition-transform duration-200 scale-100";
    allCard.className = "w-full rounded-xl bg-secondary-fixed/30 p-space-md shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99] select-none flex items-center justify-between";
  } else {
    allBox.className = "w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center transition-colors duration-200";
    allIcon.className = "material-symbols-outlined text-[18px] text-outline transition-transform duration-200 scale-90";
    allCard.className = "w-full rounded-xl bg-surface-container p-space-md shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99] select-none flex items-center justify-between";
  }
  const requiredPassed = termsState.term1 && termsState.term2 && termsState.term3;
  const submitBtn = byId("submit-btn");
  const helperText = byId("helper-text");
  if (requiredPassed) {
    submitBtn.disabled = false;
    submitBtn.className = "w-full py-4 rounded-xl font-title-md text-title-md transition-all duration-300 flex items-center justify-center gap-2 bg-primary-container text-surface-container-lowest shadow-md active:scale-[0.98] cursor-pointer";
    helperText.textContent = "\uBAA8\uB4E0 \uD544\uC218 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC168\uC2B5\uB2C8\uB2E4";
    helperText.className = "font-label-md text-label-md text-secondary font-medium transition-colors";
  } else {
    submitBtn.disabled = true;
    submitBtn.className = "w-full py-4 rounded-xl font-title-md text-title-md transition-all duration-300 flex items-center justify-center gap-2 bg-surface-container-highest text-outline shadow-none cursor-not-allowed select-none";
    helperText.textContent = "\uD544\uC218 \uC57D\uAD00\uC5D0 \uBAA8\uB450 \uB3D9\uC758\uD558\uC2DC\uBA74 \uACC4\uC18D \uC9C4\uD589\uD560 \uC218 \uC788\uC5B4\uC694";
    helperText.className = "font-label-md text-label-md text-on-surface-variant transition-colors";
  }
}
var modalEls = () => ({
  modal: byId("policy-modal"),
  modalContent: byId("modal-content"),
  modalTitle: byId("modal-title"),
  modalText: byId("modal-text")
});
function openModal(title, content) {
  const { modal, modalContent, modalTitle, modalText } = modalEls();
  modalTitle.textContent = title;
  modalText.textContent = content;
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100");
  modalContent.classList.remove("translate-y-full");
  modalContent.classList.add("translate-y-0");
}
function closeModal() {
  const { modal, modalContent } = modalEls();
  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0", "pointer-events-none");
  modalContent.classList.remove("translate-y-0");
  modalContent.classList.add("translate-y-full");
}
function handleNextStep() {
  if (!termsState.term1 || !termsState.term2 || !termsState.term3) return;
  const submitBtn = byId("submit-btn");
  submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span><span>\uC0AC\uC8FC \uC6D0\uAD6D\uC73C\uB85C \uC774\uB3D9 \uC911...</span>';
  submitBtn.classList.add("opacity-90");
  setTimeout(function() {
    if (typeof history !== "undefined" && typeof history.pushState === "function") {
      console.log("Terms completed. Advancing to birth details screen.");
    }
  }, 700);
}
function TermsAgreement() {
  useBodyClass(BODY_CLASS4);
  useEffect(() => {
    const modal = byId("policy-modal");
    modal.addEventListener("click", function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    renderState();
  }, []);
  return /* @__PURE__ */ jsxs4(Fragment4, { children: [
    /* @__PURE__ */ jsx4("header", { className: "fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]", children: /* @__PURE__ */ jsx4("div", { className: "h-14 px-margin-mobile flex items-center justify-between", children: /* @__PURE__ */ jsx4("button", { "aria-label": "Go back", className: "min-w-[44px] min-h-[44px] w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors", onClick: () => history.back(), children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back" }) }) }) }),
    /* @__PURE__ */ jsx4("main", { className: "flex flex-col relative w-full pt-14 pb-safe bg-surface min-h-screen", children: /* @__PURE__ */ jsxs4("div", { className: "flex flex-col w-full px-margin-mobile pb-space-xl", children: [
      /* @__PURE__ */ jsxs4("div", { className: "pt-space-md pb-space-lg flex flex-col items-start relative", children: [
        /* @__PURE__ */ jsx4("h1", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight", children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574 \uC8FC\uC138\uC694" }),
        /* @__PURE__ */ jsx4("p", { className: "font-body-md text-body-md text-on-surface-variant mt-2", children: "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574 \uD544\uC694\uD574\uC694" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "w-full rounded-xl bg-surface-container p-space-md shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99] select-none flex items-center justify-between", id: "all-agree-card", onClick: () => toggleAllAgreements(), children: [
        /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-3.5", children: [
          /* @__PURE__ */ jsx4("div", { className: "w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center transition-colors duration-200", id: "all-checkbox", children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[18px] text-outline transition-transform duration-200 scale-90", id: "all-check-icon", children: "check" }) }),
          /* @__PURE__ */ jsxs4("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx4("span", { className: "font-title-md text-title-md text-primary-container leading-tight", children: "\uC57D\uAD00 \uC804\uCCB4 \uB3D9\uC758" }),
            /* @__PURE__ */ jsx4("span", { className: "font-label-md text-label-md text-on-surface-variant mt-0.5", children: "\uC120\uD0DD \uD56D\uBAA9\uC5D0 \uB300\uD55C \uB3D9\uC758\uB3C4 \uD3EC\uD568\uB429\uB2C8\uB2E4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-outline-variant text-[20px]", children: "verified" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "w-full my-space-md flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx4("div", { className: "h-[1px] flex-1 bg-surface-container-highest" }),
        /* @__PURE__ */ jsx4("span", { className: "font-label-sm text-label-sm text-outline-variant px-1 font-headline-md italic", children: "\uB3D9\uC758 \uD56D\uBAA9" }),
        /* @__PURE__ */ jsx4("div", { className: "h-[1px] flex-1 bg-surface-container-highest" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-1 w-full bg-surface-container-lowest rounded-xl p-space-sm shadow-sm", children: [
        /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between py-3 px-space-xs rounded-lg hover:bg-surface-container-low transition-colors", children: [
          /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0", onClick: () => toggleItem("term1"), children: [
            /* @__PURE__ */ jsx4("div", { className: "w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors", id: "check-box-term1", children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[16px] text-outline", id: "check-icon-term1", children: "check" }) }),
            /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 min-w-0", children: [
              /* @__PURE__ */ jsx4("span", { className: "font-label-md text-label-md px-1.5 py-0.5 rounded bg-primary-container text-surface-container-lowest font-medium shrink-0", children: "[\uD544\uC218]" }),
              /* @__PURE__ */ jsx4("span", { className: "font-body-md text-body-md text-on-surface truncate", children: "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00" })
            ] })
          ] }),
          /* @__PURE__ */ jsx4(
            "button",
            {
              "aria-label": "\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00 \uC0C1\uC138\uBCF4\uAE30",
              className: "w-9 h-9 flex items-center justify-center rounded-full text-outline hover:text-on-surface hover:bg-surface-container transition-colors shrink-0 ml-1",
              onClick: () => openModal("\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00", "\uC81C 1 \uC870 (\uBAA9\uC801)\n\uBCF8 \uC57D\uAD00\uC740 \u2018\uACB0 \xB7 \uB0B4 \uACB0\uC744 \uC77D\uB2E4\u2019(\uC774\uD558 \u2018\uC11C\uBE44\uC2A4\u2019)\uAC00 \uC81C\uACF5\uD558\uB294 \uC0AC\uC8FC \uBD84\uC11D, \uC77C\uC9C4 \uC548\uB0B4 \uBC0F \uB77C\uC774\uD504 \uCF54\uCE6D \uC815\uBCF4 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uC870\uAC74\uACFC \uC6B4\uC601\uC5D0 \uAD00\uD55C \uC81C\uBC18 \uC0AC\uD56D\uC744 \uADDC\uC815\uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\n\n\uC81C 2 \uC870 (\uD68C\uC6D0\uC758 \uC758\uBB34)\n\uD68C\uC6D0\uC740 \uBA85\uB9AC\uD559\uC801 \uBD84\uC11D\uC744 \uC704\uD55C \uC815\uD655\uD55C \uC0DD\uB144\uC6D4\uC77C\uC2DC \uC815\uBCF4\uB97C \uAE30\uC7AC\uD558\uC5EC\uC57C \uD558\uBA70, \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uC5EC\uC11C\uB294 \uC544\uB2C8 \uB429\uB2C8\uB2E4."),
              type: "button",
              children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[20px]", children: "chevron_right" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between py-3 px-space-xs rounded-lg hover:bg-surface-container-low transition-colors", children: [
          /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0", onClick: () => toggleItem("term2"), children: [
            /* @__PURE__ */ jsx4("div", { className: "w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors", id: "check-box-term2", children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[16px] text-outline", id: "check-icon-term2", children: "check" }) }),
            /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 min-w-0", children: [
              /* @__PURE__ */ jsx4("span", { className: "font-label-md text-label-md px-1.5 py-0.5 rounded bg-primary-container text-surface-container-lowest font-medium shrink-0", children: "[\uD544\uC218]" }),
              /* @__PURE__ */ jsx4("span", { className: "font-body-md text-body-md text-on-surface truncate", children: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758" })
            ] })
          ] }),
          /* @__PURE__ */ jsx4(
            "button",
            {
              "aria-label": "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758 \uC0C1\uC138\uBCF4\uAE30",
              className: "w-9 h-9 flex items-center justify-center rounded-full text-outline hover:text-on-surface hover:bg-surface-container transition-colors shrink-0 ml-1",
              onClick: () => openModal("\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9", "1. \uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\n- \uD544\uC218\uD56D\uBAA9: \uCD9C\uC0DD\uC5F0\uC6D4\uC77C, \uCD9C\uC0DD\uC2DC\uAC04, \uC131\uBCC4, \uC591\uB825/\uC74C\uB825 \uAD6C\uBD84, \uB2C9\uB124\uC784\n\n2. \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uBAA9\uC801\n- \uC74C\uC591\uC624\uD589 \uBC0F \uC0AC\uC8FC\uD314\uC790 \uB9CC\uC138\uB825 \uC0B0\uCD9C, \uB9DE\uCDA4\uD615 \uBA85\uB9AC \uC778\uC0AC\uC774\uD2B8 \uC0DD\uC131\n\n3. \uBCF4\uC720 \uBC0F \uC774\uC6A9 \uAE30\uAC04\n- \uD68C\uC6D0 \uD0C8\uD1F4 \uC2DC\uAE4C\uC9C0 \uB610\uB294 \uBC95\uC815 \uBCF4\uC720 \uAE30\uAC04 \uC900\uC218 \uD6C4 \uC9C0\uCCB4 \uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4."),
              type: "button",
              children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[20px]", children: "chevron_right" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between py-3 px-space-xs rounded-lg hover:bg-surface-container-low transition-colors", children: [
          /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0", onClick: () => toggleItem("term3"), children: [
            /* @__PURE__ */ jsx4("div", { className: "w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors", id: "check-box-term3", children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[16px] text-outline", id: "check-icon-term3", children: "check" }) }),
            /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 min-w-0", children: [
              /* @__PURE__ */ jsx4("span", { className: "font-label-md text-label-md px-1.5 py-0.5 rounded bg-primary-container text-surface-container-lowest font-medium shrink-0", children: "[\uD544\uC218]" }),
              /* @__PURE__ */ jsx4("span", { className: "font-body-md text-body-md text-on-surface truncate", children: "\uB9CC 14\uC138 \uC774\uC0C1\uC785\uB2C8\uB2E4" })
            ] })
          ] }),
          /* @__PURE__ */ jsx4("div", { className: "w-9 h-9 flex items-center justify-center text-outline-variant shrink-0 ml-1", children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[18px]", children: "verified_user" }) })
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "flex flex-col py-3 px-space-xs rounded-lg hover:bg-surface-container-low transition-colors", children: [
          /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between w-full", children: [
            /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0", onClick: () => toggleItem("term4"), children: [
              /* @__PURE__ */ jsx4("div", { className: "w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors", id: "check-box-term4", children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[16px] text-outline", id: "check-icon-term4", children: "check" }) }),
              /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsx4("span", { className: "font-label-md text-label-md px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium shrink-0", children: "[\uC120\uD0DD]" }),
                /* @__PURE__ */ jsx4("span", { className: "font-body-md text-body-md text-on-surface truncate", children: "\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758" })
              ] })
            ] }),
            /* @__PURE__ */ jsx4(
              "button",
              {
                "aria-label": "\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758 \uC0C1\uC138\uBCF4\uAE30",
                className: "w-9 h-9 flex items-center justify-center rounded-full text-outline hover:text-on-surface hover:bg-surface-container transition-colors shrink-0 ml-1",
                onClick: () => openModal("\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758", "1. \uD61C\uD0DD \uBC0F \uC808\uAE30\uBCC4 \uC6B4\uC138 \uC54C\uB9BC\n- \uC0C8\uB85C\uC6B4 \uC808\uAE30 \uC804\uD658, \uC624\uD589 \uB9DE\uCDA4 \uBCF5\uCC44 \uCFE0\uD3F0, \uB300\uC6B4 \uBD84\uC11D \uC774\uBCA4\uD2B8 \uC18C\uC2DD\uC744 \uD478\uC2DC \uBC0F \uBB38\uC790 \uBA54\uC2DC\uC9C0\uB85C \uBC1C\uC1A1\uD569\uB2C8\uB2E4.\n\n2. \uCCA0\uD68C \uAD8C\uB9AC\n- \uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0\uC740 \uC124\uC815 \uD654\uBA74\uC5D0\uC11C \uC5B8\uC81C\uB4E0\uC9C0 \uC790\uC720\uB86D\uAC8C \uCCA0\uD68C\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
                type: "button",
                children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[20px]", children: "chevron_right" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx4("p", { className: "font-body-sm text-body-sm text-on-surface-variant pl-9 pr-2 mt-1", children: "\uC808\uAE30 \uBCC0\uD654\uC5D0 \uB530\uB978 \uB9DE\uCDA4 \uC77C\uC9C4, \uD2B9\uBCC4 \uB9AC\uD3EC\uD2B8 \uBC0F \uD61C\uD0DD \uC548\uB0B4 (\uC571 \uD478\uC2DC, \uBB38\uC790)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "mt-space-lg p-space-md rounded-xl bg-surface-container-low flex items-start gap-3 shadow-sm", children: [
        /* @__PURE__ */ jsx4("div", { className: "w-1 self-stretch rounded-full bg-secondary shrink-0" }),
        /* @__PURE__ */ jsxs4("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx4("span", { className: "font-title-md text-title-md text-primary-container font-headline-md", children: "\uAC1C\uC778\uC815\uBCF4\uC758 \uC21C\uD658\uACFC \uBCF4\uC804" }),
          /* @__PURE__ */ jsx4("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1", children: "\uC785\uB825\uD558\uC2E0 \uBA85\uB9AC \uC6D0\uAD6D \uB370\uC774\uD130\uB294 \uC624\uC9C1 \uBCF8\uC778\uC758 \uC131\uCC30\uACFC \uC77C\uC0C1 \uB9AC\uB4EC \uBD84\uC11D\uC744 \uC704\uD574\uC11C\uB9CC \uC815\uAC08\uD558\uAC8C \uD65C\uC6A9\uB429\uB2C8\uB2E4." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "mt-space-xl pt-space-md flex flex-col items-center gap-2.5", children: [
        /* @__PURE__ */ jsx4("p", { className: "font-label-md text-label-md text-on-surface-variant transition-colors", id: "helper-text", children: "\uD544\uC218 \uC57D\uAD00\uC5D0 \uBAA8\uB450 \uB3D9\uC758\uD558\uC2DC\uBA74 \uACC4\uC18D \uC9C4\uD589\uD560 \uC218 \uC788\uC5B4\uC694" }),
        /* @__PURE__ */ jsxs4(
          "button",
          {
            className: "w-full py-4 rounded-xl font-title-md text-title-md transition-all duration-300 flex items-center justify-center gap-2 bg-surface-container-highest text-outline shadow-none cursor-not-allowed select-none",
            disabled: true,
            id: "submit-btn",
            onClick: () => handleNextStep(),
            children: [
              /* @__PURE__ */ jsx4("span", { className: "", children: "\uB3D9\uC758\uD558\uACE0 \uC2DC\uC791\uD558\uAE30" }),
              /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[20px]", children: "arrow_forward" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300", id: "policy-modal", children: /* @__PURE__ */ jsxs4("div", { className: "w-full max-w-md bg-surface-container-lowest rounded-t-2xl p-space-lg shadow-xl transform translate-y-full transition-transform duration-300 flex flex-col max-h-[75vh]", id: "modal-content", children: [
        /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between pb-space-sm border-b border-surface-container", children: [
          /* @__PURE__ */ jsx4("h3", { className: "font-title-lg text-title-lg text-primary-container font-headline-md truncate", id: "modal-title", children: "\uC57D\uAD00 \uC0C1\uC138" }),
          /* @__PURE__ */ jsx4("button", { "aria-label": "\uB2EB\uAE30", className: "w-9 h-9 rounded-full flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container", onClick: () => closeModal(), children: /* @__PURE__ */ jsx4("span", { className: "material-symbols-outlined text-[22px]", children: "close" }) })
        ] }),
        /* @__PURE__ */ jsx4("div", { className: "py-space-md overflow-y-auto flex-1 font-body-md text-body-md text-on-surface-variant whitespace-pre-line leading-relaxed", children: /* @__PURE__ */ jsx4("p", { id: "modal-text" }) }),
        /* @__PURE__ */ jsx4("div", { className: "pt-space-sm", children: /* @__PURE__ */ jsx4("button", { className: "w-full py-3.5 rounded-lg bg-primary-container text-surface-container-lowest font-title-md text-title-md text-center hover:opacity-95 transition-opacity", onClick: () => closeModal(), children: "\uD655\uC778\uD588\uC2B5\uB2C8\uB2E4" }) })
      ] }) })
    ] }) })
  ] });
}

// src/screens/SignupComplete.tsx
import { useEffect as useEffect2 } from "react";
import { Fragment as Fragment5, jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var BODY_CLASS5 = "bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-secondary-container selection:text-on-secondary-container";
function SignupComplete() {
  useBodyClass(BODY_CLASS5);
  useEffect2(() => {
    const primaryBtn = byId("btn-start");
    if (primaryBtn) {
      primaryBtn.addEventListener("click", () => {
        primaryBtn.classList.add("opacity-80");
        setTimeout(() => primaryBtn.classList.remove("opacity-80"), 200);
      });
    }
  }, []);
  return /* @__PURE__ */ jsx5(Fragment5, { children: /* @__PURE__ */ jsx5("main", { className: "flex-1 flex flex-col relative w-full bg-surface pt-safe pb-safe", children: /* @__PURE__ */ jsxs5("div", { className: "flex flex-col w-full px-6 pt-10 pb-8 items-center justify-between min-w-0", children: [
    /* @__PURE__ */ jsxs5("div", { className: "w-full max-w-sm flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxs5("div", { className: "relative w-32 h-32 flex items-center justify-center my-2", children: [
        /* @__PURE__ */ jsx5("div", { className: "absolute inset-0 rounded-full bg-secondary-fixed/30 blur-xl animate-pulse" }),
        /* @__PURE__ */ jsxs5("svg", { className: "absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]", viewBox: "0 0 128 128", children: [
          /* @__PURE__ */ jsx5("circle", { cx: "64", cy: "64", fill: "none", opacity: "0.35", r: "58", stroke: "#775a19", strokeDasharray: "3 5", strokeWidth: "1" }),
          /* @__PURE__ */ jsx5("circle", { cx: "64", cy: "6", fill: "#775a19", opacity: "0.7", r: "3" })
        ] }),
        /* @__PURE__ */ jsx5("div", { className: "relative w-24 h-24 rounded-full bg-surface-container-low shadow-sm flex items-center justify-center p-1.5", children: /* @__PURE__ */ jsxs5("div", { className: "w-full h-full rounded-full bg-surface-container-lowest flex flex-col items-center justify-center shadow-inner relative overflow-hidden", children: [
          /* @__PURE__ */ jsx5("div", { className: "absolute -right-2 -bottom-2 w-12 h-12 rounded-full bg-secondary-fixed/20 pointer-events-none" }),
          /* @__PURE__ */ jsx5("span", { className: "font-headline-xl-mobile text-headline-xl-mobile text-primary-container font-bold tracking-tight select-none", children: "\uACB0" }),
          /* @__PURE__ */ jsx5("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-0.5 opacity-80" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx5("h1", { className: "font-headline-xl-mobile text-headline-xl-mobile text-primary-container font-bold tracking-tight mt-5 mb-2", children: "\uD658\uC601\uD574\uC694" }),
      /* @__PURE__ */ jsx5("p", { className: "font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed", children: "\uC774\uC81C \uACB0\uACFC\uB97C \uC800\uC7A5\uD558\uACE0 \uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uBCFC \uC218 \uC788\uC5B4\uC694" }),
      /* @__PURE__ */ jsxs5("div", { className: "flex items-center justify-center gap-2 my-6 opacity-60", children: [
        /* @__PURE__ */ jsx5("div", { className: "w-8 h-[1px] bg-outline-variant" }),
        /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-[14px] text-secondary", children: "stars" }),
        /* @__PURE__ */ jsx5("div", { className: "w-8 h-[1px] bg-outline-variant" })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "w-full space-y-3", children: [
        /* @__PURE__ */ jsxs5("div", { className: "bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 shadow-sm transition-all duration-300 active:scale-[0.99] text-left", children: [
          /* @__PURE__ */ jsx5("div", { className: "w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary", children: /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-2xl", style: { fontVariationSettings: "'FILL' 1" }, children: "auto_stories" }) }),
          /* @__PURE__ */ jsxs5("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx5("div", { className: "font-title-md text-title-md text-primary-container truncate font-semibold", children: "\uB0B4 \uC0AC\uC8FC \uC800\uC7A5" }),
            /* @__PURE__ */ jsx5("div", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "\uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694" })
          ] }),
          /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-outline-variant text-xl", children: "chevron_right" })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 shadow-sm transition-all duration-300 active:scale-[0.99] text-left", children: [
          /* @__PURE__ */ jsx5("div", { className: "w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary", children: /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-2xl", style: { fontVariationSettings: "'FILL' 1" }, children: "diversity_1" }) }),
          /* @__PURE__ */ jsxs5("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx5("div", { className: "font-title-md text-title-md text-primary-container truncate font-semibold", children: "\uAC00\uC871\xB7\uCE5C\uAD6C \uCD94\uAC00" }),
            /* @__PURE__ */ jsx5("div", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "\uAD81\uD569\uB3C4 \uBCFC \uC218 \uC788\uC5B4\uC694" })
          ] }),
          /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-outline-variant text-xl", children: "chevron_right" })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 shadow-sm transition-all duration-300 active:scale-[0.99] text-left", children: [
          /* @__PURE__ */ jsx5("div", { className: "w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary", children: /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-2xl", style: { fontVariationSettings: "'FILL' 1" }, children: "wb_twilight" }) }),
          /* @__PURE__ */ jsxs5("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx5("div", { className: "font-title-md text-title-md text-primary-container truncate font-semibold", children: "\uC624\uB298\uC758 \uC6B4\uC138 \uC54C\uB9BC" }),
            /* @__PURE__ */ jsx5("div", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "\uB9E4\uC77C \uC544\uCE68 \uBC1B\uC544\uBCF4\uC138\uC694" })
          ] }),
          /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-outline-variant text-xl", children: "chevron_right" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "w-full max-w-sm flex flex-col items-center pt-8 mt-4", children: [
      /* @__PURE__ */ jsxs5("button", { className: "w-full bg-primary-container text-on-primary py-4 px-6 rounded-xl font-label-lg text-label-lg font-medium shadow-md hover:opacity-95 active:scale-[0.98] transition flex items-center justify-center gap-2 group cursor-pointer", id: "btn-start", type: "button", children: [
        /* @__PURE__ */ jsx5("span", { children: "\uB0B4 \uC0AC\uC8FC \uBCF4\uB7EC \uAC00\uAE30" }),
        /* @__PURE__ */ jsx5("span", { className: "material-symbols-outlined text-lg transition-transform group-hover:translate-x-1", children: "arrow_forward" })
      ] }),
      /* @__PURE__ */ jsx5("button", { className: "w-full text-center py-3 mt-1 font-body-sm text-body-sm text-outline hover:text-on-surface transition cursor-pointer", id: "btn-later", type: "button", children: "\uB098\uC911\uC5D0 \uD560\uAC8C\uC694" })
    ] })
  ] }) }) });
}

// src/screens/HomeGuest.tsx
import { useEffect as useEffect3, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment as Fragment6, jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var BODY_CLASS6 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";
function HomeGuest() {
  useBodyClass(BODY_CLASS6);
  const navigate = useNavigate();
  const [loginSheetOpen, setLoginSheetOpen] = useState(false);
  const openLoginSheet = () => setLoginSheetOpen(true);
  const closeLoginSheet = () => setLoginSheetOpen(false);
  useEffect3(() => {
    if (!loginSheetOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeLoginSheet();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [loginSheetOpen]);
  useEffect3(() => {
    const scrollContainer = query(".overflow-x-auto");
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", (evt) => {
        if (evt.deltaY !== 0) {
          scrollContainer.scrollLeft += evt.deltaY;
        }
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs6(Fragment6, { children: [
    /* @__PURE__ */ jsx6("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_6px_rgba(19,27,46,0.03)] pt-safe", children: /* @__PURE__ */ jsxs6("div", { className: "h-16 px-margin flex items-center justify-between", children: [
      /* @__PURE__ */ jsx6("div", { className: "flex items-center gap-space-sm", children: /* @__PURE__ */ jsx6("div", { className: "flex items-center", children: /* @__PURE__ */ jsx6("img", { src: "/assets/img11.png", alt: "\uACB0 \xB7 \uB0B4 \uACB0\uC744 \uC77D\uB2E4 \uB85C\uACE0", className: "h-8 w-auto object-contain" }) }) }),
      /* @__PURE__ */ jsx6("div", { className: "flex items-center gap-space-xs", children: /* @__PURE__ */ jsxs6("button", { "aria-label": "\uC54C\uB9BC", className: "relative w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors rounded-full", type: "button", children: [
        /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[24px]", children: "notifications" }),
        /* @__PURE__ */ jsx6("span", { className: "absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-secondary border border-surface" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx6("main", { className: "flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface", children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ jsxs6("div", { className: "px-margin pt-space-xs pb-space-sm flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-space-xs", children: [
          /* @__PURE__ */ jsx6("div", { className: "w-2 h-2 rounded-full bg-secondary" }),
          /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-on-surface-variant tracking-wider", children: "\uCC9C\uBB38\uB9CC\uC138\uB825 \u5929\u6587\u842C\u6B72\u66C6 \uAE30\uBC18" })
        ] }),
        /* @__PURE__ */ jsxs6("button", { className: "px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary-container font-label-lg text-label-lg active:scale-95 transition-transform flex items-center gap-1 shadow-sm", type: "button", onClick: () => navigate("/login"), children: [
          /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[16px] text-secondary", children: "login" }),
          /* @__PURE__ */ jsx6("span", { className: "", children: "\uB85C\uADF8\uC778" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "px-margin space-y-space-xl", children: [
        /* @__PURE__ */ jsxs6("div", { className: "relative overflow-hidden rounded-xl bg-primary-container text-surface-container-lowest p-space-lg shadow-xl", children: [
          /* @__PURE__ */ jsx6("div", { className: "absolute -right-12 -top-10 w-48 h-48 pointer-events-none opacity-20", children: /* @__PURE__ */ jsxs6("svg", { className: "w-full h-full text-secondary-fixed", fill: "none", viewBox: "0 0 200 200", children: [
            /* @__PURE__ */ jsx6("circle", { cx: "100", cy: "100", r: "90", stroke: "currentColor", strokeDasharray: "4 4", strokeWidth: "1" }),
            /* @__PURE__ */ jsx6("circle", { cx: "100", cy: "100", r: "72", stroke: "currentColor", strokeWidth: "1.5" }),
            /* @__PURE__ */ jsx6("circle", { cx: "100", cy: "100", r: "45", stroke: "currentColor", strokeWidth: "1" }),
            /* @__PURE__ */ jsx6("line", { stroke: "currentColor", strokeWidth: "0.75", x1: "100", x2: "100", y1: "10", y2: "190" }),
            /* @__PURE__ */ jsx6("line", { stroke: "currentColor", strokeWidth: "0.75", x1: "10", x2: "190", y1: "100", y2: "100" }),
            /* @__PURE__ */ jsx6("circle", { cx: "100", cy: "55", fill: "#3E7B5C", r: "4" }),
            /* @__PURE__ */ jsx6("circle", { cx: "145", cy: "100", fill: "#B33927", r: "4" }),
            /* @__PURE__ */ jsx6("circle", { cx: "100", cy: "145", fill: "#C5A059", r: "4" }),
            /* @__PURE__ */ jsx6("circle", { cx: "55", cy: "100", fill: "#DDE1E8", r: "4" }),
            /* @__PURE__ */ jsx6("circle", { cx: "100", cy: "100", r: "6", stroke: "#C5A059", strokeWidth: "2" })
          ] }) }),
          /* @__PURE__ */ jsxs6("div", { className: "relative z-10 flex flex-col items-start space-y-space-md", children: [
            /* @__PURE__ */ jsxs6("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md", children: [
              /* @__PURE__ */ jsx6("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary-fixed" }),
              /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-secondary-fixed tracking-wide", children: "2026 \uC815\uBC00 \uC2E0\uB144 \uBC0F \uD3C9\uC0DD \uC0AC\uC8FC" })
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "space-y-space-xs", children: [
              /* @__PURE__ */ jsxs6("h1", { className: "font-headline-lg-mobile text-headline-lg-mobile text-surface-bright tracking-tight leading-snug", children: [
                "\uB0B4 \uC0AC\uC8FC,",
                /* @__PURE__ */ jsx6("br", {}),
                "1\uBD84\uC774\uBA74 \uC54C \uC218 \uC788\uC5B4\uC694"
              ] }),
              /* @__PURE__ */ jsx6("p", { className: "font-body-md text-body-md text-primary-fixed-dim", children: "\uD68C\uC6D0\uAC00\uC785 \uC5C6\uC774 \uC0DD\uB144\uC6D4\uC77C\uB85C \uBC14\uB85C \uD655\uC778\uD574 \uBCF4\uC138\uC694" })
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "w-full grid grid-cols-4 gap-space-xs pt-space-xs", children: [
              /* @__PURE__ */ jsxs6("div", { className: "bg-surface-container-lowest/10 rounded-lg p-2 flex flex-col items-center", children: [
                /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-primary-fixed-dim", children: "\uC2DC\uC8FC(\u6642)" }),
                /* @__PURE__ */ jsx6("span", { className: "font-headline-md text-headline-md text-secondary-fixed", children: "\u6642" })
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: "bg-surface-container-lowest/10 rounded-lg p-2 flex flex-col items-center", children: [
                /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-primary-fixed-dim", children: "\uC77C\uC8FC(\u65E5)" }),
                /* @__PURE__ */ jsx6("span", { className: "font-headline-md text-headline-md text-secondary-fixed", children: "\u65E5" })
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: "bg-surface-container-lowest/10 rounded-lg p-2 flex flex-col items-center", children: [
                /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-primary-fixed-dim", children: "\uC6D4\uC8FC(\u6708)" }),
                /* @__PURE__ */ jsx6("span", { className: "font-headline-md text-headline-md text-secondary-fixed", children: "\u6708" })
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: "bg-surface-container-lowest/10 rounded-lg p-2 flex flex-col items-center", children: [
                /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-primary-fixed-dim", children: "\uB144\uC8FC(\u5E74)" }),
                /* @__PURE__ */ jsx6("span", { className: "font-headline-md text-headline-md text-secondary-fixed", children: "\u5E74" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("button", { className: "w-full mt-space-xs py-3.5 px-space-md rounded-lg bg-secondary-container text-on-secondary-fixed font-title-md text-title-md flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md", type: "button", onClick: openLoginSheet, children: [
              /* @__PURE__ */ jsx6("span", { className: "", children: "\uBB34\uB8CC\uB85C \uB0B4 \uC0AC\uC8FC \uBCF4\uAE30" }),
              /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[20px]", children: "arrow_forward" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "space-y-space-sm", children: [
          /* @__PURE__ */ jsxs6("div", { className: "flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-space-xs", children: [
              /* @__PURE__ */ jsx6("span", { className: "font-headline-md text-headline-md text-primary-container", children: "\uC774\uB7F0 \uAC8C \uAD81\uAE08\uD558\uC168\uB098\uC694?" }),
              /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-secondary tracking-widest", children: "\u7591\u554F" })
            ] }),
            /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD575\uC2EC \uBA85\uB9AC \uC9C4\uB2E8" })
          ] }),
          /* @__PURE__ */ jsxs6("div", { className: "flex gap-space-sm overflow-x-auto pb-2 scrollbar-none -mx-margin px-margin", children: [
            /* @__PURE__ */ jsxs6("div", { className: "min-w-[210px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between space-y-space-md", children: [
              /* @__PURE__ */ jsxs6("div", { className: "space-y-space-xs", children: [
                /* @__PURE__ */ jsx6("div", { className: "w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed", children: /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[18px]", children: "psychology" }) }),
                /* @__PURE__ */ jsx6("h2", { className: "font-title-md text-title-md text-on-surface pt-1", children: "\uB098\uB294 \uC5B4\uB5A4 \uC0AC\uB78C\uC77C\uAE4C?" }),
                /* @__PURE__ */ jsx6("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\uC624\uD589\uC758 \uBAA9(\u6728)\uACFC \uC77C\uAC04\uC73C\uB85C \uD0D0\uC0C9\uD558\uB294 \uD0C0\uACE0\uB09C \uAE30\uC9C8\uACFC \uC7A0\uC7AC \uC5ED\uB7C9" })
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: "inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold", children: [
                /* @__PURE__ */ jsx6("span", { className: "", children: "\uBCF8\uC6D0 \uC131\uD5A5 \uC54C\uC544\uBCF4\uAE30" }),
                /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[14px]", children: "chevron_right" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "min-w-[210px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between space-y-space-md", children: [
              /* @__PURE__ */ jsxs6("div", { className: "space-y-space-xs", children: [
                /* @__PURE__ */ jsx6("div", { className: "w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-on-error-container", children: /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[18px]", children: "local_fire_department" }) }),
                /* @__PURE__ */ jsx6("h2", { className: "font-title-md text-title-md text-on-surface pt-1", children: "\uC62C\uD574 \uC6B4\uC740 \uC5B4\uB5A8\uAE4C?" }),
                /* @__PURE__ */ jsx6("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "2026 \uBCD1\uC624(\u4E19\u5348)\uB144 \uB300\uC6B4\uACFC \uC138\uC6B4\uC774 \uC804\uD558\uB294 \uC7AC\uBB3C\xB7\uC774\uC9C1\uC758 \uD750\uB984" })
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: "inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold", children: [
                /* @__PURE__ */ jsx6("span", { className: "", children: "2026 \uC138\uC6B4 \uD750\uB984" }),
                /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[14px]", children: "chevron_right" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "min-w-[210px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between space-y-space-md", children: [
              /* @__PURE__ */ jsxs6("div", { className: "space-y-space-xs", children: [
                /* @__PURE__ */ jsx6("div", { className: "w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container", children: /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[18px]", children: "favorite" }) }),
                /* @__PURE__ */ jsx6("h2", { className: "font-title-md text-title-md text-on-surface pt-1", children: "\uC774 \uC0AC\uB78C\uACFC \uC798 \uB9DE\uC744\uAE4C?" }),
                /* @__PURE__ */ jsx6("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\uCC9C\uAC04\uD569\uACFC \uC9C0\uC9C0\uC0BC\uD569\uC73C\uB85C \uD480\uC5B4\uB0B4\uB294 \uC0C1\uD638 \uBCF4\uC644\uC801 \uC624\uD589 \uAD81\uD569" })
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: "inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold", children: [
                /* @__PURE__ */ jsx6("span", { className: "", children: "\uC778\uC5F0 \uBC0F \uD569\uCDA9 \uBD84\uC11D" }),
                /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[14px]", children: "chevron_right" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "space-y-space-sm", children: [
          /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs6("div", { className: "flex items-baseline gap-space-xs", children: [
              /* @__PURE__ */ jsx6("span", { className: "font-headline-md text-headline-md text-primary-container", children: "\uC624\uB298\uC758 \uC6B4\uC138" }),
              /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-secondary tracking-widest", children: "\u65E5\u8FB0" })
            ] }),
            /* @__PURE__ */ jsx6("span", { className: "font-label-md text-label-md text-on-surface-variant bg-surface-container px-2 py-0.5 rounded", children: "2026\uB144 5\uC6D4 18\uC77C" })
          ] }),
          /* @__PURE__ */ jsxs6("div", { className: "relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm", children: [
            /* @__PURE__ */ jsxs6("div", { "aria-hidden": "true", className: "filter blur-[6px] select-none opacity-40 space-y-space-md pointer-events-none", children: [
              /* @__PURE__ */ jsxs6("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsx6("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-serif text-primary-container", children: "88\uC810 \xB7 \u5927\u5409" }),
                /* @__PURE__ */ jsx6("span", { className: "px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm", children: "\uB9CC\uC0AC\uD615\uD1B5" })
              ] }),
              /* @__PURE__ */ jsx6("p", { className: "font-body-md text-body-md text-on-surface", children: "\uB3D9\uBC29\uC5D0\uC11C \uADC0\uC778\uC774 \uB3C4\uC6B0\uB2C8 \uBB38\uC11C\uC5D0 \uC11C\uBA85\uD558\uAC70\uB098 \uC911\uC694\uD55C \uACB0\uB2E8\uC744 \uB0B4\uB9AC\uAE30\uC5D0 \uB354\uC5C6\uC774 \uCCAD\uBA85\uD55C \uAE30\uC6B4\uC774 \uAE43\uB4E0 \uB0A0\uC785\uB2C8\uB2E4. \uBD89\uC740 \uBE5B \uC18C\uD488\uC744 \uC9C0\uB2C8\uBA74 \uB73B\uBC16\uC758 \uC7AC\uC131(\u8CA1\u661F)\uC774 \uC77C\uC5B4\uB0A9\uB2C8\uB2E4." }),
              /* @__PURE__ */ jsxs6("div", { className: "grid grid-cols-2 gap-space-sm pt-space-xs", children: [
                /* @__PURE__ */ jsxs6("div", { className: "p-2 bg-surface-container rounded-lg", children: [
                  /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD589\uC6B4\uC758 \uC0C9\uC0C1" }),
                  /* @__PURE__ */ jsx6("p", { className: "font-title-md text-title-md text-on-surface", children: "\uCCAD\uB85D\uC0C9 (\u6728)" })
                ] }),
                /* @__PURE__ */ jsxs6("div", { className: "p-2 bg-surface-container rounded-lg", children: [
                  /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD589\uC6B4\uC758 \uC22B\uC790" }),
                  /* @__PURE__ */ jsx6("p", { className: "font-title-md text-title-md text-on-surface", children: "3, 8" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "absolute inset-0 flex flex-col items-center justify-center p-space-md text-center bg-surface-container-lowest/70 backdrop-blur-[2px]", children: [
              /* @__PURE__ */ jsx6("div", { className: "w-11 h-11 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-sm shadow-md", children: /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[22px]", children: "lock" }) }),
              /* @__PURE__ */ jsx6("h3", { className: "font-title-md text-title-md text-on-surface mb-1", children: "\uC0DD\uB144\uC6D4\uC77C\uC744 \uC785\uB825\uD558\uBA74 \uC624\uB298\uC758 \uC6B4\uC138\uB97C \uBCFC \uC218 \uC788\uC5B4\uC694" }),
              /* @__PURE__ */ jsx6("p", { className: "font-body-sm text-body-sm text-on-surface-variant max-w-[260px] mb-space-md", children: "\uBCF8\uC778\uC758 \uC77C\uC8FC(\u65E5\u67F1)\uC640 \uB2F9\uC77C\uC758 \uAE30\uC6B4 \uAC04 \uC0C1\uC0DD\uC0C1\uADF9\uC744 \uC815\uD655\uD788 \uACC4\uC0B0\uD569\uB2C8\uB2E4" }),
              /* @__PURE__ */ jsxs6("button", { className: "px-space-md py-2.5 rounded-lg bg-primary-container text-surface-container-lowest font-label-lg text-label-lg flex items-center gap-1.5 active:scale-95 transition-all shadow-md", type: "button", onClick: openLoginSheet, children: [
                /* @__PURE__ */ jsx6("span", { className: "", children: "\uC0DD\uB144\uC6D4\uC77C \uC785\uB825\uD558\uACE0 \uBB34\uB8CC\uB85C \uBCF4\uAE30" }),
                /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[16px]", children: "arrow_forward" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "space-y-space-md", children: [
          /* @__PURE__ */ jsxs6("div", { className: "flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-space-xs", children: [
              /* @__PURE__ */ jsx6("span", { className: "font-headline-md text-headline-md text-primary-container", children: "\uC774\uB807\uAC8C \uBD84\uC11D\uD574 \uB4DC\uB824\uC694" }),
              /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-secondary tracking-widest", children: "\u50B3\u7D71 \u547D\u7406" })
            ] }),
            /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC815\uD1B5 \uD574\uC11D \uCCB4\uACC4" })
          ] }),
          /* @__PURE__ */ jsxs6("div", { className: "space-y-space-sm", children: [
            /* @__PURE__ */ jsxs6("div", { className: "bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md", children: [
              /* @__PURE__ */ jsx6("div", { className: "w-10 h-10 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center text-secondary", children: /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[22px]", children: "explore" }) }),
              /* @__PURE__ */ jsxs6("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-secondary font-bold", children: "STEP 01" }),
                  /* @__PURE__ */ jsx6("h4", { className: "font-title-md text-title-md text-on-surface", children: "\uC815\uD655\uD55C \uB9CC\uC138\uB825 \uACC4\uC0B0" })
                ] }),
                /* @__PURE__ */ jsx6("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\uD55C\uAD6D\uCC9C\uBB38\uC5F0\uAD6C\uC6D0 \uAE30\uC900 24\uC808\uAE30\uC640 \uCD9C\uC0DD\uC9C0 \uC9C4\uD0DC\uC591\uC2DC(\u771E\u592A\u967D\u6642) \uC2DC\uCC28\uB97C \uBD84 \uB2E8\uC704\uAE4C\uC9C0 \uC815\uBC00 \uBCF4\uC815\uD569\uB2C8\uB2E4." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md", children: [
              /* @__PURE__ */ jsx6("div", { className: "w-10 h-10 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center text-secondary", children: /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[22px]", children: "view_column" }) }),
              /* @__PURE__ */ jsxs6("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-secondary font-bold", children: "STEP 02" }),
                  /* @__PURE__ */ jsx6("h4", { className: "font-title-md text-title-md text-on-surface", children: "\uC0AC\uC8FC \uC6D0\uAD6D \uBC0F \uC624\uD589 \uADE0\uD615 \uD310\uBCC4" })
                ] }),
                /* @__PURE__ */ jsx6("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\uCC9C\uAC04\uACFC \uC9C0\uC9C0 8\uAE00\uC790\uC758 \uC0C1\uD638\uC791\uC6A9\uACFC \uC2ED\uC2E0(\u5341\u795E), \uC624\uD589(\uBAA9\xB7\uD654\xB7\uD1A0\xB7\uAE08\xB7\uC218)\uC758 \uACFC\uC720\uBD88\uAE09\uC744 \uAC00\uB2A0\uD569\uB2C8\uB2E4." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("div", { className: "bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md", children: [
              /* @__PURE__ */ jsx6("div", { className: "w-10 h-10 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center text-secondary", children: /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[22px]", children: "auto_awesome" }) }),
              /* @__PURE__ */ jsxs6("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-secondary font-bold", children: "STEP 03" }),
                  /* @__PURE__ */ jsx6("h4", { className: "font-title-md text-title-md text-on-surface", children: "\uACE0\uC804 \uAE30\uBC18\uC758 \uD604\uB300\uC801 AI \uC870\uC5B8" })
                ] }),
                /* @__PURE__ */ jsx6("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\u300A\uC790\uD3C9\uC9C4\uC804\u300B, \u300A\uC801\uCC9C\uC218\u300B \uB4F1 \uAC80\uC99D\uB41C \uBA85\uB9AC\uD559 \uBB38\uD5CC\uC744 \uD559\uC2B5\uD55C AI\uAC00 \uD604\uC2E4\uC801\uC774\uACE0 \uC815\uC81C\uB41C \uC5B8\uC5B4\uB85C \uD574\uC11D\uD569\uB2C8\uB2E4." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "relative bg-surface-container-low rounded-xl p-space-md shadow-sm overflow-hidden", children: [
          /* @__PURE__ */ jsx6("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-secondary" }),
          /* @__PURE__ */ jsxs6("div", { className: "pl-2 space-y-space-xs", children: [
            /* @__PURE__ */ jsx6("p", { className: "font-body-sm text-body-sm text-on-surface italic leading-relaxed", children: "\u201C\uC790\uC2E0\uC758 \uAE30\uC6B4\uACFC \uADF8\uB987\uC744 \uBC14\uB85C \uC54C\uC544 \uB098\uC544\uAC10\uACFC \uBB3C\uB7EC\uB0A8\uC744 \uB3C4\uBAA8\uD558\uB294 \uC9C0\uD61C\u201D" }),
            /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-on-surface-variant block font-sans", children: "\u2014 \u300A\uC790\uD3C9\uC9C4\uC804 \u5B50\u5E73\u771E\u8A6E\u300B \uACA9\uAD6D\uB860(\u683C\u5C40\u8AD6) \uC911\uC5D0\uC11C" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "bg-surface-container rounded-lg p-space-sm flex items-center justify-center gap-2 text-center", children: [
          /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[18px] text-secondary", children: "verified" }),
          /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC808\uAE30\xB7\uCD9C\uC0DD\uC9C0 \uC9C4\uD0DC\uC591\uC2DC \uC815\uBC00 \uBCF4\uC815 \uC54C\uACE0\uB9AC\uC998 \uC801\uC6A9" })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "text-center space-y-1 pb-space-lg", children: [
          /* @__PURE__ */ jsx6("p", { className: "font-label-sm text-label-sm text-on-surface-variant/80", children: "\uBCF8 \uC11C\uBE44\uC2A4\uB294 \uC778\uC0DD\uC758 \uC790\uAE30\uC131\uCC30\uC744 \uB3D5\uAE30 \uC704\uD55C \uCC38\uACE0\uC6A9 \uBA85\uB9AC \uCF58\uD150\uCE20\uC785\uB2C8\uB2E4." }),
          /* @__PURE__ */ jsx6("p", { className: "font-label-sm text-label-sm text-on-surface-variant/60 font-sans", children: "\xA9 2026 \uACB0 \uC5F0\uAD6C\uC6D0. All rights reserved." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx6("nav", { className: "fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)] border-t border-outline-variant/30", "data-active-classes": "text-primary-container font-semibold", children: /* @__PURE__ */ jsxs6("div", { className: "flex justify-around items-center h-16 px-gutter", children: [
      /* @__PURE__ */ jsxs6(
        "a",
        {
          "aria-current": "page",
          className: "flex flex-col items-center justify-center min-w-[56px] h-14 transition-colors text-primary-container font-semibold",
          "data-path": "\uD648",
          href: "#",
          children: [
            /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[24px]", children: "home" }),
            /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm mt-1", children: "\uD648" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs6("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "\uB0B4-\uC0AC\uC8FC", href: "#", children: [
        /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[24px]", children: "auto_stories" }),
        /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB0B4 \uC0AC\uC8FC" })
      ] }),
      /* @__PURE__ */ jsxs6("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "ai-\uC0C1\uB2F4", href: "#", children: [
        /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[24px]", children: "forum" }),
        /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm mt-1", children: "AI \uC0C1\uB2F4" })
      ] }),
      /* @__PURE__ */ jsxs6("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "\uB354\uBCF4\uAE30", href: "#", children: [
        /* @__PURE__ */ jsx6("span", { className: "material-symbols-outlined text-[24px]", children: "more_horiz" }),
        /* @__PURE__ */ jsx6("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB354\uBCF4\uAE30" })
      ] })
    ] }) }),
    loginSheetOpen && /* @__PURE__ */ jsxs6("div", { className: "fixed inset-0 z-[60] flex flex-col justify-end", role: "dialog", "aria-modal": "true", children: [
      /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-[#131b2e]/65 backdrop-blur-[2px] animate-fade-in", onClick: closeLoginSheet }),
      /* @__PURE__ */ jsx6("div", { className: "relative max-h-full overflow-y-auto rounded-t-[28px] bg-surface pb-safe animate-sheet-up", children: /* @__PURE__ */ jsx6(
        LoginSheetDrawer,
        {
          title: "\uB85C\uADF8\uC778\uD558\uACE0 \uBB34\uB8CC\uB85C \uC0AC\uC8FC \uBCF4\uAE30",
          subtitle: "\uAC04\uD3B8 \uB85C\uADF8\uC778 \uD6C4 \uBC14\uB85C \uB0B4 \uC0AC\uC8FC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694",
          onDismiss: closeLoginSheet
        }
      ) })
    ] })
  ] });
}

// src/screens/Home.tsx
import { useEffect as useEffect4 } from "react";
import { Fragment as Fragment7, jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var BODY_CLASS7 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";
function Home() {
  useBodyClass(BODY_CLASS7);
  useEffect4(() => {
    queryAll('a[href="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  }, []);
  return /* @__PURE__ */ jsxs7(Fragment7, { children: [
    /* @__PURE__ */ jsx7("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_6px_rgba(19,27,46,0.03)] pt-safe", children: /* @__PURE__ */ jsxs7("div", { className: "h-16 px-margin flex items-center justify-between", children: [
      /* @__PURE__ */ jsx7("div", { className: "flex items-center gap-space-sm", children: /* @__PURE__ */ jsx7("div", { className: "flex items-center", children: /* @__PURE__ */ jsx7("img", { src: "/assets/img11.png", alt: "\uACB0 \xB7 \uB0B4 \uACB0\uC744 \uC77D\uB2E4 \uB85C\uACE0", className: "h-9 w-auto object-contain" }) }) }),
      /* @__PURE__ */ jsx7("div", { className: "flex items-center gap-space-xs", children: /* @__PURE__ */ jsxs7("button", { "aria-label": "\uC54C\uB9BC", className: "relative w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors rounded-full", type: "button", children: [
        /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[24px]", children: "notifications" }),
        /* @__PURE__ */ jsx7("span", { className: "absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-secondary border border-surface" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx7("main", { className: "flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface", children: /* @__PURE__ */ jsxs7("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ jsxs7("section", { className: "px-margin pt-space-md pb-space-lg flex flex-col gap-space-sm", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs7("span", { className: "font-label-md text-label-md text-secondary tracking-widest uppercase flex items-center gap-1.5 font-medium", children: [
            /* @__PURE__ */ jsx7("span", { className: "inline-block w-1.5 h-1.5 rounded-full bg-secondary" }),
            "2025\uB144 5\uC6D4 18\uC77C (\uC77C)"
          ] }),
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container shadow-sm", children: [
            /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[14px] text-secondary", children: "wb_sunny" }),
            /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-primary-container font-semibold", children: "\uC624\uB298\uC758 \uC77C\uC9C4" }),
            /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-medium", children: "\u5DF1\u5DF3 (\uAE30\uC0AC\uC77C)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "mt-1", children: [
          /* @__PURE__ */ jsx7("h1", { className: "font-headline-xl-mobile text-headline-xl-mobile text-primary-container tracking-tight font-serif", children: "\uC548\uB155\uD558\uC138\uC694, \uC9C4\uD558\uB2D8" }),
          /* @__PURE__ */ jsx7("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1", children: "\uB530\uB73B\uD55C \uB300\uC9C0 \uC704\uC5D0 \uD53C\uC5B4\uB09C \uBCD5\uCC98\uB7FC, \uC0C8\uB85C\uC6B4 \uAE30\uD68C\uAC00 \uC628\uD654\uD558\uAC8C \uC5F4\uB9AC\uB294 \uB0A0\uC785\uB2C8\uB2E4." })
        ] })
      ] }),
      /* @__PURE__ */ jsx7("section", { className: "px-margin mb-space-xl", children: /* @__PURE__ */ jsxs7("div", { className: "relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-md p-space-lg flex flex-col gap-space-md", children: [
        /* @__PURE__ */ jsx7("div", { className: "absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-5 pointer-events-none flex items-center justify-center text-primary-container", children: /* @__PURE__ */ jsxs7("svg", { className: "w-full h-full fill-none stroke-current", strokeWidth: "1.5", viewBox: "0 0 100 100", children: [
          /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "50", r: "45", strokeDasharray: "3 3" }),
          /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "50", r: "32" }),
          /* @__PURE__ */ jsx7("line", { x1: "50", x2: "50", y1: "5", y2: "95" }),
          /* @__PURE__ */ jsx7("line", { x1: "5", x2: "95", y1: "50", y2: "50" })
        ] }) }),
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between relative z-10", children: [
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-space-xs", children: [
            /* @__PURE__ */ jsx7("span", { className: "w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-secondary", children: /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[18px]", children: "auto_awesome" }) }),
            /* @__PURE__ */ jsx7("span", { className: "font-title-md text-title-md text-primary-container font-serif", children: "\uC624\uB298\uC758 \uC77C\uC77C \uC6B4\uC138" })
          ] }),
          /* @__PURE__ */ jsx7("span", { className: "px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm", children: "\uC815\uBC00 \uBA85\uB9AC \uC54C\uACE0\uB9AC\uC998" })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "flex items-baseline justify-between py-1 relative z-10", children: [
          /* @__PURE__ */ jsxs7("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxs7("span", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container font-serif", children: [
              "88",
              /* @__PURE__ */ jsx7("span", { className: "font-title-md text-title-md text-secondary", children: "\uC810" })
            ] }),
            /* @__PURE__ */ jsx7("span", { className: "px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-semibold", children: "\uB300\uAE38(\u5927\u5409)" })
          ] }),
          /* @__PURE__ */ jsxs7("div", { "aria-label": "\uC6B4\uC138 \uC9C0\uC218 4.5\uC810", className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx7("span", { className: "w-2.5 h-2.5 rounded-full bg-secondary" }),
            /* @__PURE__ */ jsx7("span", { className: "w-2.5 h-2.5 rounded-full bg-secondary" }),
            /* @__PURE__ */ jsx7("span", { className: "w-2.5 h-2.5 rounded-full bg-secondary" }),
            /* @__PURE__ */ jsx7("span", { className: "w-2.5 h-2.5 rounded-full bg-secondary" }),
            /* @__PURE__ */ jsx7("span", { className: "w-2.5 h-2.5 rounded-full bg-surface-container-highest" })
          ] })
        ] }),
        /* @__PURE__ */ jsx7("div", { className: "relative z-10 p-3.5 rounded-lg bg-surface-container-low", children: /* @__PURE__ */ jsx7("p", { className: "font-body-md text-body-md text-on-surface leading-relaxed", children: "\uC0DD\uAC01\uC9C0 \uBABB\uD55C \uADC0\uC778\uC758 \uB3C4\uC6C0\uC73C\uB85C \uC815\uCCB4\uB418\uC5C8\uB358 \uC0AC\uC548\uC774 \uC2DC\uC6D0\uD558\uAC8C \uD480\uB9AC\uB294 \uD615\uAD6D\uC785\uB2C8\uB2E4. \uC624\uB298\uC740 \uBCF8\uC778\uC758 \uC8FC\uAD00\uC744 \uD655\uACE0\uD788 \uC138\uC6B0\uACE0 \uACB0\uB2E8\uB825 \uC788\uAC8C \uD589\uB3D9\uD558\uAE30\uC5D0 \uCD5C\uC801\uC758 \uC2DC\uAE30\uC785\uB2C8\uB2E4." }) }),
        /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-3 gap-2 relative z-10 pt-1", children: [
          /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container text-center", children: [
            /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD589\uC6B4\uC758 \uC0C9" }),
            /* @__PURE__ */ jsx7("span", { className: "font-body-sm text-body-sm text-primary-container font-medium mt-0.5", children: "\uC9D9\uC740 \uB0A8\uC0C9" })
          ] }),
          /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container text-center", children: [
            /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD589\uC6B4\uC758 \uC22B\uC790" }),
            /* @__PURE__ */ jsx7("span", { className: "font-body-sm text-body-sm text-primary-container font-medium mt-0.5", children: "7" })
          ] }),
          /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container text-center", children: [
            /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD589\uC6B4\uC758 \uBC29\uC704" }),
            /* @__PURE__ */ jsx7("span", { className: "font-body-sm text-body-sm text-primary-container font-medium mt-0.5", children: "\uB0A8\uB3D9\uCABD" })
          ] })
        ] }),
        /* @__PURE__ */ jsx7("div", { className: "pt-2 flex items-center justify-end relative z-10", children: /* @__PURE__ */ jsxs7("a", { className: "inline-flex items-center gap-1 font-label-lg text-label-lg text-secondary font-semibold hover:text-on-secondary-container transition-colors py-1", href: "#", children: [
          /* @__PURE__ */ jsx7("span", { className: "", children: "\uC2DC\uAC04\uB300\uBCC4 \uC6B4\uC138 \uC0C1\uC138 \uBCF4\uAE30" }),
          /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[16px]", children: "arrow_forward" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx7("section", { className: "px-margin mb-space-xl", children: /* @__PURE__ */ jsxs7("div", { className: "rounded-xl bg-primary-container text-surface p-space-lg shadow-lg relative overflow-hidden", children: [
        /* @__PURE__ */ jsx7("div", { className: "absolute -right-10 -top-10 w-40 h-40 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsxs7("svg", { className: "w-full h-full fill-none stroke-surface-bright", strokeWidth: "1.2", viewBox: "0 0 100 100", children: [
          /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "50", r: "48", strokeDasharray: "4 2" }),
          /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "50", r: "38" }),
          /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "50", r: "24" }),
          /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "50", r: "10" }),
          /* @__PURE__ */ jsx7("line", { x1: "50", x2: "50", y1: "0", y2: "100" }),
          /* @__PURE__ */ jsx7("line", { x1: "0", x2: "100", y1: "50", y2: "50" }),
          /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "12", fill: "currentColor", r: "3" }),
          /* @__PURE__ */ jsx7("circle", { cx: "88", cy: "50", fill: "currentColor", r: "3" }),
          /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "88", fill: "currentColor", r: "3" }),
          /* @__PURE__ */ jsx7("circle", { cx: "12", cy: "50", fill: "currentColor", r: "3" })
        ] }) }),
        /* @__PURE__ */ jsxs7("div", { className: "relative z-10 flex flex-col gap-space-sm", children: [
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-secondary-fixed text-[18px]", children: "verified" }),
              /* @__PURE__ */ jsx7("span", { className: "font-label-md text-label-md text-primary-fixed uppercase tracking-wider", children: "\uC9C4\uD558\uB2D8\uC758 \uC6D0\uAD6D \uC77C\uC8FC(\u65E5\u67F1)" })
            ] }),
            /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface/10 text-secondary-fixed", children: "\u967D\u706B \xB7 \u967D\u706B" })
          ] }),
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-3.5 my-1", children: [
            /* @__PURE__ */ jsxs7("div", { className: "w-14 h-14 rounded-lg bg-surface-container-lowest/10 flex flex-col items-center justify-center text-surface-bright shadow-inner", children: [
              /* @__PURE__ */ jsx7("span", { className: "font-headline-md text-headline-md font-serif leading-none tracking-tight", children: "\u4E19\u5348" }),
              /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-secondary-fixed mt-1", children: "\uBCD1\uC624" })
            ] }),
            /* @__PURE__ */ jsxs7("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx7("span", { className: "font-title-md text-title-md text-surface-bright font-serif", children: "\uC5F4\uC815\uC801\uC778 \uBD89\uC740 \uB9D0\uC758 \uAE30\uC6B4" }),
              /* @__PURE__ */ jsx7("span", { className: "font-body-sm text-body-sm text-primary-fixed-dim mt-0.5", children: "\uC21C\uC218 \uC624\uD589: \uD654(\u706B) \uC655\uC131\uACA9" })
            ] })
          ] }),
          /* @__PURE__ */ jsx7("p", { className: "font-body-md text-body-md text-surface-bright/90 bg-surface/5 p-3 rounded-lg leading-relaxed", children: "\u201C\uBD88\uAF43\uCC98\uB7FC \uBC88\uC9C0\uB294 \uCD94\uC9C4\uB825\uACFC \uAC00\uC2DD \uC5C6\uB294 \uC815\uC9C1\uD568\uC744 \uD488\uC740 \uD0C0\uACE0\uB09C \uB9AC\uB354\uC758 \uC0C1\u201D" }),
          /* @__PURE__ */ jsxs7("div", { className: "pt-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-primary-fixed-dim", children: "\uC624\uD589 \uADE0\uD615 \uBC0F \uC2ED\uC2E0 \uC815\uBC00 \uD574\uC124" }),
            /* @__PURE__ */ jsxs7("a", { className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-semibold hover:bg-secondary-fixed-dim transition-colors shadow-sm", href: "#", children: [
              /* @__PURE__ */ jsx7("span", { className: "", children: "\uB0B4 \uC0AC\uC8FC \uC6D0\uC2DD \uBCF4\uAE30" }),
              /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[14px]", children: "chevron_right" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs7("section", { className: "mb-space-xl", children: [
        /* @__PURE__ */ jsxs7("div", { className: "px-margin flex items-end justify-between mb-space-sm", children: [
          /* @__PURE__ */ jsxs7("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx7("h2", { className: "font-headline-md text-headline-md text-primary-container font-serif tracking-tight", children: "\uCD94\uCC9C \uB9AC\uD3EC\uD2B8" }),
            /* @__PURE__ */ jsx7("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uBCD1\uD654 \uC6D0\uAD6D\uC5D0 \uC815\uBC00 \uC870\uC728\uB41C \uC2EC\uCE35 \uD574\uC11D\uC11C" })
          ] }),
          /* @__PURE__ */ jsxs7("a", { className: "font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-0.5", href: "#", children: [
            "\uC804\uCCB4\uBCF4\uAE30",
            /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[14px]", children: "chevron_right" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "flex gap-space-sm overflow-x-auto px-margin pb-2 pt-1 scroll-smooth", children: [
          /* @__PURE__ */ jsxs7("div", { className: "w-60 shrink-0 rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxs7("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between mb-space-sm", children: [
                /* @__PURE__ */ jsx7("span", { className: "w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary-container", children: /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[20px]", children: "explore" }) }),
                /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded-full bg-error-container text-on-error-container", children: "32% \uD560\uC778" })
              ] }),
              /* @__PURE__ */ jsx7("h3", { className: "font-title-md text-title-md text-primary-container font-serif", children: "\uC774\uC9C1\uC6B4 \uB9AC\uD3EC\uD2B8" }),
              /* @__PURE__ */ jsx7("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2", children: "\uC0C8\uB85C\uC6B4 \uC9C1\uBB34 \uC801\uC131\uACFC \uAE38\uD55C \uC774\uB3D9 \uC2DC\uAE30\uB97C \uB300\uC6B4 \uD750\uB984\uC73C\uB85C \uBD84\uC11D\uD569\uB2C8\uB2E4." })
            ] }),
            /* @__PURE__ */ jsxs7("div", { className: "mt-space-md pt-space-xs flex items-baseline justify-between", children: [
              /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm line-through text-outline", children: "19,000\uC6D0" }),
              /* @__PURE__ */ jsx7("span", { className: "font-title-lg text-title-lg text-primary-container font-semibold", children: "12,900\uC6D0" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs7("div", { className: "w-60 shrink-0 rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxs7("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between mb-space-sm", children: [
                /* @__PURE__ */ jsx7("span", { className: "w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary", children: /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[20px]", children: "all_inclusive" }) }),
                /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded-full bg-error-container text-on-error-container", children: "32% \uD560\uC778" })
              ] }),
              /* @__PURE__ */ jsx7("h3", { className: "font-title-md text-title-md text-primary-container font-serif", children: "\uC778\uC5F0 \uAD81\uD569 \uB9AC\uD3EC\uD2B8" }),
              /* @__PURE__ */ jsx7("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2", children: "\uC624\uD589\uC758 \uD569\uACFC \uCDA9, \uC74C\uC591 \uC870\uD654\uB85C \uBCF4\uB294 \uB450 \uC0AC\uB78C\uC758 \uAE4A\uC740 \uC778\uC5F0\uACFC \uACB0\uC2E4." })
            ] }),
            /* @__PURE__ */ jsxs7("div", { className: "mt-space-md pt-space-xs flex items-baseline justify-between", children: [
              /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm line-through text-outline", children: "28,000\uC6D0" }),
              /* @__PURE__ */ jsx7("span", { className: "font-title-lg text-title-lg text-primary-container font-semibold", children: "18,900\uC6D0" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs7("div", { className: "w-60 shrink-0 rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxs7("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between mb-space-sm", children: [
                /* @__PURE__ */ jsx7("span", { className: "w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary", children: /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[20px]", children: "savings" }) }),
                /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded-full bg-error-container text-on-error-container", children: "36% \uD560\uC778" })
              ] }),
              /* @__PURE__ */ jsx7("h3", { className: "font-title-md text-title-md text-primary-container font-serif", children: "\uC7AC\uBB3C\uC6B4 \uC2EC\uCE35 \uBD84\uC11D" }),
              /* @__PURE__ */ jsx7("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2", children: "\uD0C0\uACE0\uB09C \uC7AC\uBB3C \uCC3D\uACE0(\uC7AC\uACE0\uADC0\uC778)\uC758 \uC720\uBB34\uC640 \uD3C9\uC0DD \uC790\uC0B0 \uC0C1\uC2B9\uAE30 \uD30C\uC545." })
            ] }),
            /* @__PURE__ */ jsxs7("div", { className: "mt-space-md pt-space-xs flex items-baseline justify-between", children: [
              /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm line-through text-outline", children: "25,000\uC6D0" }),
              /* @__PURE__ */ jsx7("span", { className: "font-title-lg text-title-lg text-primary-container font-semibold", children: "15,900\uC6D0" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs7("section", { className: "px-margin mb-space-xl flex flex-col gap-space-sm", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between mb-1", children: [
          /* @__PURE__ */ jsx7("h2", { className: "font-headline-md text-headline-md text-primary-container font-serif tracking-tight", children: "\uCD5C\uADFC \uBCF8 \uB9AC\uD3EC\uD2B8" }),
          /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uCD1D 2\uAC74 \uBCF4\uAD00 \uC911" })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsx7("div", { className: "w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[20px]", children: "calendar_today" }) }),
            /* @__PURE__ */ jsxs7("div", { className: "flex flex-col min-w-0", children: [
              /* @__PURE__ */ jsx7("h4", { className: "font-title-md text-title-md text-primary-container truncate font-serif", children: "2027\uB144 \uC2E0\uB144\uC6B4\uC138 (\uC815\uBBF8\uB144 \uD480\uC774)" }),
              /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-2 mt-0.5", children: [
                /* @__PURE__ */ jsxs7("span", { className: "font-label-sm text-label-sm text-on-tertiary-container font-medium flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx7("span", { className: "w-1.5 h-1.5 rounded-full bg-on-tertiary-container inline-block" }),
                  "\uC5F4\uB78C \uC644\uB8CC (PDF \uC800\uC7A5\uB428)"
                ] }),
                /* @__PURE__ */ jsx7("span", { className: "text-outline-variant font-label-sm", children: "\xB7" }),
                /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC5B4\uC81C \uC870\uD68C" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs7("a", { className: "shrink-0 px-3 py-1.5 rounded-lg bg-surface-container text-primary-container font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-0.5", href: "#", children: [
            "\uB2E4\uC2DC\uBCF4\uAE30",
            /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[14px]", children: "arrow_forward" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-3 min-w-0", children: [
            /* @__PURE__ */ jsx7("div", { className: "w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0", children: /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[20px]", children: "psychology" }) }),
            /* @__PURE__ */ jsxs7("div", { className: "flex flex-col min-w-0", children: [
              /* @__PURE__ */ jsx7("h4", { className: "font-title-md text-title-md text-primary-container truncate font-serif", children: "\uC9C1\uC5C5\xB7\uCEE4\uB9AC\uC5B4 \uB300\uC6B4 \uC2EC\uCE35 \uBD84\uC11D" }),
              /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-2 mt-0.5", children: [
                /* @__PURE__ */ jsxs7("span", { className: "font-label-sm text-label-sm text-secondary font-medium flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx7("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary inline-block" }),
                  "\uBD84\uC11D \uC9C4\uD589 \uC911 80%"
                ] }),
                /* @__PURE__ */ jsx7("span", { className: "text-outline-variant font-label-sm", children: "\xB7" }),
                /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "3\uC77C \uC804" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs7("a", { className: "shrink-0 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-0.5 shadow-sm", href: "#", children: [
            "\uC774\uC5B4\uBCF4\uAE30",
            /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[14px]", children: "arrow_forward" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx7("section", { className: "px-margin mb-space-xl", children: /* @__PURE__ */ jsxs7("div", { className: "p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm", children: [
        /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5", children: "format_quote" }),
        /* @__PURE__ */ jsxs7("p", { className: "font-body-sm text-body-sm text-on-surface-variant italic", children: [
          '"\uC6B4\uBA85(\u904B\u547D)\uC740 \uC815\uD574\uC9C4 \uC885\uCC29\uC5ED\uC774 \uC544\uB2CC, \uB0B4 \uCC9C\uC131\uC744 \uBC14\uB974\uAC8C \uC54C\uACE0 \uBC14\uB78C\uC758 \uAE38\uC744 \uC77D\uC5B4 \uB098\uC544\uAC00\uB294 \uC9C0\uD61C\uB85C\uC6B4 \uC5EC\uC815\uC785\uB2C8\uB2E4."',
          /* @__PURE__ */ jsx7("span", { className: "block mt-1 font-label-sm text-label-sm not-italic text-secondary", children: "\u2015 \uC801\uCC9C\uC218(\u6EF4\u5929\u9AD3) \uC6D0\uBB38 \uD574\uC11D \uC911" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs7("footer", { className: "px-margin pt-space-sm pb-space-lg flex flex-col items-center text-center gap-1.5", children: [
        /* @__PURE__ */ jsx7("div", { className: "w-8 h-0.5 bg-outline-variant/40 rounded-full mb-2" }),
        /* @__PURE__ */ jsx7("p", { className: "font-label-sm text-label-sm text-outline", children: "\uBCF8 \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC6B4\uC138\uC640 \uBA85\uB9AC \uBD84\uC11D\uC740 \uC790\uD3C9\uC9C4\uC804 \uBC0F \uACE0\uC804 \uBB38\uD5CC\uC744 \uAE30\uBC18\uC73C\uB85C \uD55C \uCC38\uACE0\uC6A9 \uCF58\uD150\uCE20\uC785\uB2C8\uB2E4." }),
        /* @__PURE__ */ jsx7("p", { className: "font-label-sm text-label-sm text-outline-variant mt-0.5", children: "\xA9 2026 \uACB0 \uC5F0\uAD6C\uC6D0." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx7("nav", { className: "fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)] border-t border-outline-variant/30", "data-active-classes": "text-primary-container font-semibold", children: /* @__PURE__ */ jsxs7("div", { className: "flex justify-around items-center h-16 px-gutter", children: [
      /* @__PURE__ */ jsxs7(
        "a",
        {
          "aria-current": "page",
          className: "flex flex-col items-center justify-center min-w-[56px] h-14 transition-colors text-primary-container font-semibold",
          "data-path": "\uD648",
          href: "#",
          children: [
            /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[24px]", children: "home" }),
            /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm mt-1", children: "\uD648" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs7("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "\uB0B4-\uC0AC\uC8FC", href: "#", children: [
        /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[24px]", children: "auto_stories" }),
        /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB0B4 \uC0AC\uC8FC" })
      ] }),
      /* @__PURE__ */ jsxs7("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "ai-\uC0C1\uB2F4", href: "#", children: [
        /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[24px]", children: "forum" }),
        /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm mt-1", children: "AI \uC0C1\uB2F4" })
      ] }),
      /* @__PURE__ */ jsxs7("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "\uB354\uBCF4\uAE30", href: "#", children: [
        /* @__PURE__ */ jsx7("span", { className: "material-symbols-outlined text-[24px]", children: "more_horiz" }),
        /* @__PURE__ */ jsx7("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB354\uBCF4\uAE30" })
      ] })
    ] }) })
  ] });
}

// src/screens/SajuInput.tsx
import { Fragment as Fragment8, jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var BODY_CLASS8 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";
function setGender(gender) {
  const fBtn = byId("gender-f");
  const mBtn = byId("gender-m");
  if (gender === "f") {
    fBtn.className = "h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all shadow-sm bg-primary-container text-on-primary";
    mBtn.className = "h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all text-on-surface-variant hover:text-on-surface";
  } else {
    mBtn.className = "h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all shadow-sm bg-primary-container text-on-primary";
    fBtn.className = "h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all text-on-surface-variant hover:text-on-surface";
  }
}
function setCalendarType(type) {
  const solar = byId("cal-solar");
  const lunar = byId("cal-lunar");
  const leap = byId("cal-leap");
  const activeClasses = "px-2.5 py-1 rounded-full bg-primary-container text-on-primary shadow-sm transition-all";
  const inactiveClasses = "px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all";
  solar.className = type === "solar" ? activeClasses : inactiveClasses;
  lunar.className = type === "lunar" ? activeClasses : inactiveClasses;
  leap.className = type === "leap" ? activeClasses : inactiveClasses;
}
function toggleTimeUnknown(isChecked) {
  const box = byId("time-picker-box");
  const hint = byId("time-hint");
  if (isChecked) {
    box.classList.add("opacity-40", "pointer-events-none");
    hint.classList.add("text-secondary", "font-medium");
  } else {
    box.classList.remove("opacity-40", "pointer-events-none");
    hint.classList.remove("text-secondary", "font-medium");
  }
}
function handleSajuSubmit() {
  const btn = byId("submit-saju-btn");
  btn.innerHTML = `
    <span class="material-symbols-outlined animate-spin text-[22px]">progress_activity</span>
    <span class="tracking-wide">\uCC9C\uAC04\uACFC \uC9C0\uC9C0 \uBD84\uC11D \uC911...</span>
  `;
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = `
      <span class="material-symbols-outlined text-secondary-fixed text-[22px]" style="font-variation-settings: 'FILL' 1;">
        sparkles
      </span>
      <span class="tracking-wide">\uB0B4 \uC0AC\uC8FC \uBCF4\uAE30</span>
    `;
    btn.disabled = false;
  }, 1200);
}
function SajuInput() {
  useBodyClass(BODY_CLASS8);
  return /* @__PURE__ */ jsxs8(Fragment8, { children: [
    /* @__PURE__ */ jsx8("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe", children: /* @__PURE__ */ jsxs8("div", { className: "h-16 px-margin flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-space-sm", children: [
        /* @__PURE__ */ jsx8("div", { className: "w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-surface-container", children: /* @__PURE__ */ jsx8("img", { alt: "Profile", className: "w-8 h-8 rounded-full object-cover", src: "/assets/img01.png" }) }),
        /* @__PURE__ */ jsxs8("div", { className: "flex items-baseline gap-space-xs", children: [
          /* @__PURE__ */ jsx8("span", { className: "font-headline-md text-headline-md text-on-surface tracking-tight font-semibold", children: "\uACB0" }),
          /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm text-secondary tracking-wider uppercase font-semibold", children: "GYEOL \xB7 \u547D\u7406" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx8("span", { className: "font-title-md text-title-md text-on-surface-variant px-space-xs hidden sm:inline-block", children: "Saju Home" }),
        /* @__PURE__ */ jsx8("button", { "aria-label": "\uB3C4\uC6C0\uB9D0 \uC548\uB0B4", className: "w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors", type: "button", children: /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[22px]", children: "auto_awesome" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx8("main", { className: "flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface", children: /* @__PURE__ */ jsx8("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ jsxs8("div", { className: "w-full max-w-[480px] mx-auto px-margin-mobile flex flex-col gap-space-lg pb-space-xl", children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex flex-col items-center text-center pt-space-md", children: [
        /* @__PURE__ */ jsxs8("div", { className: "relative flex items-center justify-center mb-space-md", children: [
          /* @__PURE__ */ jsx8("div", { className: "absolute w-28 h-28 rounded-full bg-secondary-container/40 blur-xl" }),
          /* @__PURE__ */ jsx8("div", { className: "relative w-20 h-20 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center p-space-xs", children: /* @__PURE__ */ jsx8("img", { alt: "\uACB0 \uC5E0\uBE14\uB7FC", className: "w-16 h-16 object-contain rounded-md", src: "/assets/img01.png" }) })
        ] }),
        /* @__PURE__ */ jsx8("h1", { className: "font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight mb-space-xs", children: "\uACB0 \xB7 \uB0B4 \uACB0\uC744 \uC77D\uB2E4" }),
        /* @__PURE__ */ jsxs8("p", { className: "font-body-sm text-body-sm text-on-surface-variant max-w-[320px] leading-relaxed", children: [
          "\uC0DD\uB144\uC6D4\uC77C\uC2DC\uC5D0 \uAE43\uB4E0 \uC74C\uC591\uC624\uD589(\u9670\u967D\u4E94\u884C)\uC758 \uAE30\uC6B4\uC73C\uB85C",
          /* @__PURE__ */ jsx8("br", {}),
          "\uD0C0\uACE0\uB09C \uBCF8\uC131\uACFC \uC778\uC0DD\uC758 \uACE0\uC720\uD55C \uACB0\uC744 \uC9DA\uC5B4\uB0C5\uB2C8\uB2E4"
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-space-xs mt-space-md bg-surface-container-low px-space-md py-1.5 rounded-full shadow-sm", children: [
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx8("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: "#3E7B5C" } }),
            /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm text-on-surface", children: "\uBAA9 \u6728" })
          ] }),
          /* @__PURE__ */ jsx8("span", { className: "text-outline-variant font-label-sm", children: "\xB7" }),
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx8("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: "#C84B31" } }),
            /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm text-on-surface", children: "\uD654 \u706B" })
          ] }),
          /* @__PURE__ */ jsx8("span", { className: "text-outline-variant font-label-sm", children: "\xB7" }),
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx8("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: "#D99B26" } }),
            /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm text-on-surface", children: "\uD1A0 \u571F" })
          ] }),
          /* @__PURE__ */ jsx8("span", { className: "text-outline-variant font-label-sm", children: "\xB7" }),
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx8("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: "#94A3B8" } }),
            /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm text-on-surface", children: "\uAE08 \u91D1" })
          ] }),
          /* @__PURE__ */ jsx8("span", { className: "text-outline-variant font-label-sm", children: "\xB7" }),
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx8("span", { className: "w-2 h-2 rounded-full", style: { backgroundColor: "#131B2E" } }),
            /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm text-on-surface", children: "\uC218 \u6C34" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: "bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg", children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-space-xs", children: [
          /* @__PURE__ */ jsxs8("label", { className: "flex items-center gap-1.5 font-title-md text-title-md text-on-surface", htmlFor: "user-name", children: [
            /* @__PURE__ */ jsx8("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
            /* @__PURE__ */ jsx8("span", { className: "", children: "\uC774\uB984 (\uC131\uD568)" })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
            /* @__PURE__ */ jsx8("input", { className: "w-full h-12 px-4 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest transition-all", id: "user-name", placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 (\uC608: \uAE40\uD558\uB298)", type: "text", defaultValue: "\uAE40\uD558\uB298" }),
            " ",
            /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] pointer-events-none", children: "edit" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-space-xs", children: [
          /* @__PURE__ */ jsxs8("label", { className: "flex items-center gap-1.5 font-title-md text-title-md text-on-surface", children: [
            /* @__PURE__ */ jsx8("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
            /* @__PURE__ */ jsx8("span", { className: "", children: "\uC131\uBCC4" })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "grid grid-cols-2 p-1 bg-surface-container-low rounded-lg gap-1", children: [
            /* @__PURE__ */ jsxs8(
              "button",
              {
                className: "h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all shadow-sm bg-primary-container text-on-primary",
                id: "gender-f",
                onClick: () => setGender("f"),
                type: "button",
                children: [
                  /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[18px]", children: "female" }),
                  /* @__PURE__ */ jsx8("span", { className: "", children: "\uC5EC\uC131" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs8(
              "button",
              {
                className: "h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all text-on-surface-variant hover:text-on-surface",
                id: "gender-m",
                onClick: () => setGender("m"),
                type: "button",
                children: [
                  /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[18px]", children: "male" }),
                  /* @__PURE__ */ jsx8("span", { className: "", children: "\uB0A8\uC131" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-space-xs", children: [
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs8("label", { className: "flex items-center gap-1.5 font-title-md text-title-md text-on-surface", children: [
              /* @__PURE__ */ jsx8("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
              /* @__PURE__ */ jsx8("span", { className: "", children: "\uC0DD\uB144\uC6D4\uC77C" })
            ] }),
            /* @__PURE__ */ jsxs8("div", { className: "flex items-center bg-surface-container-low p-0.5 rounded-full text-label-sm font-label-sm", children: [
              /* @__PURE__ */ jsx8(
                "button",
                {
                  className: "px-2.5 py-1 rounded-full bg-primary-container text-on-primary shadow-sm transition-all",
                  id: "cal-solar",
                  onClick: () => setCalendarType("solar"),
                  type: "button",
                  children: "\uC591\uB825"
                }
              ),
              /* @__PURE__ */ jsx8(
                "button",
                {
                  className: "px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all",
                  id: "cal-lunar",
                  onClick: () => setCalendarType("lunar"),
                  type: "button",
                  children: "\uC74C\uB825"
                }
              ),
              /* @__PURE__ */ jsx8(
                "button",
                {
                  className: "px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all",
                  id: "cal-leap",
                  onClick: () => setCalendarType("leap"),
                  type: "button",
                  children: "\uC724\uB2EC"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "grid grid-cols-3 gap-2 mt-1", children: [
            /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs8("select", { defaultValue: "1996", className: "w-full h-12 pl-3 pr-7 appearance-none rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all", children: [
                /* @__PURE__ */ jsx8("option", { value: "1994", children: "1994\uB144" }),
                /* @__PURE__ */ jsx8("option", { value: "1995", children: "1995\uB144" }),
                /* @__PURE__ */ jsx8("option", { value: "1996", children: "1996\uB144" }),
                /* @__PURE__ */ jsx8("option", { value: "1997", children: "1997\uB144" }),
                /* @__PURE__ */ jsx8("option", { value: "1998", children: "1998\uB144" })
              ] }),
              " ",
              /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] pointer-events-none", children: "expand_more" })
            ] }),
            /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs8("select", { defaultValue: "10", className: "w-full h-12 pl-3 pr-7 appearance-none rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all", children: [
                /* @__PURE__ */ jsx8("option", { value: "08", children: "8\uC6D4" }),
                /* @__PURE__ */ jsx8("option", { value: "09", children: "9\uC6D4" }),
                /* @__PURE__ */ jsx8("option", { value: "10", children: "10\uC6D4" }),
                /* @__PURE__ */ jsx8("option", { value: "11", children: "11\uC6D4" }),
                /* @__PURE__ */ jsx8("option", { value: "12", children: "12\uC6D4" })
              ] }),
              " ",
              /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] pointer-events-none", children: "expand_more" })
            ] }),
            /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs8("select", { defaultValue: "24", className: "w-full h-12 pl-3 pr-7 appearance-none rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all", children: [
                /* @__PURE__ */ jsx8("option", { value: "22", children: "22\uC77C" }),
                /* @__PURE__ */ jsx8("option", { value: "23", children: "23\uC77C" }),
                /* @__PURE__ */ jsx8("option", { value: "24", children: "24\uC77C" }),
                /* @__PURE__ */ jsx8("option", { value: "25", children: "25\uC77C" }),
                /* @__PURE__ */ jsx8("option", { value: "26", children: "26\uC77C" })
              ] }),
              " ",
              /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] pointer-events-none", children: "expand_more" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs8("p", { className: "font-label-sm text-label-sm text-secondary mt-1 flex items-center gap-1", children: [
            /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[14px]", children: "info" }),
            "\uC815\uD655\uD55C \uC6D0\uAD6D \uD480\uC774\uB97C \uC704\uD574 \uC2E4\uC81C \uD0DC\uC5B4\uB09C \uB0A0(\uC591\uB825/\uC74C\uB825)\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4."
          ] })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-space-xs", children: [
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs8("label", { className: "flex items-center gap-1.5 font-title-md text-title-md text-on-surface", children: [
              /* @__PURE__ */ jsx8("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
              /* @__PURE__ */ jsx8("span", { className: "", children: "\uD0DC\uC5B4\uB09C \uC2DC\uAC04" })
            ] }),
            /* @__PURE__ */ jsxs8("label", { className: "flex items-center gap-1.5 cursor-pointer", children: [
              /* @__PURE__ */ jsx8("input", { className: "w-4 h-4 rounded text-primary-container accent-[#131B2E]", id: "time-unknown", onChange: (event) => toggleTimeUnknown(event.currentTarget.checked), type: "checkbox" }),
              /* @__PURE__ */ jsx8("span", { className: "font-label-md text-label-md text-on-surface-variant", children: "\uC2DC\uAC04 \uBAA8\uB984" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "relative transition-opacity duration-200", id: "time-picker-box", children: [
            /* @__PURE__ */ jsxs8("select", { defaultValue: "t5", className: "w-full h-12 pl-4 pr-10 appearance-none rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all", children: [
              /* @__PURE__ */ jsx8("option", { value: "t1", children: "\uC790\uC2DC (\u5B50\u6642) 23:30 ~ 01:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t2", children: "\uCD95\uC2DC (\u4E11\u6642) 01:30 ~ 03:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t3", children: "\uC778\uC2DC (\u5BC5\u6642) 03:30 ~ 05:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t4", children: "\uBB18\uC2DC (\u536F\u6642) 05:30 ~ 07:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t5", children: "\uC9C4\uC2DC (\u8FB0\u6642) 07:30 ~ 09:29 (\uC624\uC804 07:30)" }),
              /* @__PURE__ */ jsx8("option", { value: "t6", children: "\uC0AC\uC2DC (\u5DF3\u6642) 09:30 ~ 11:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t7", children: "\uC624\uC2DC (\u5348\u6642) 11:30 ~ 13:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t8", children: "\uBBF8\uC2DC (\u672A\u6642) 13:30 ~ 15:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t9", children: "\uC2E0\uC2DC (\u7533\u6642) 15:30 ~ 17:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t10", children: "\uC720\uC2DC (\u9149\u6642) 17:30 ~ 19:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t11", children: "\uC220\uC2DC (\u620C\u6642) 19:30 ~ 21:29" }),
              /* @__PURE__ */ jsx8("option", { value: "t12", children: "\uD574\uC2DC (\u4EA5\u6642) 21:30 ~ 23:29" })
            ] }),
            " ",
            /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] pointer-events-none", children: "schedule" })
          ] }),
          /* @__PURE__ */ jsx8("p", { className: "font-label-sm text-label-sm text-on-surface-variant mt-1", id: "time-hint", children: "\uC2DC\uAC04\uC744 \uBAB0\uB77C\uB3C4 \uB144\xB7\uC6D4\xB7\uC77C \uC0BC\uC8FC(\u4E09\u67F1)\uB85C \uC778\uC0DD\uC758 \uD070 \uD2C0\uC744 \uC628\uC804\uD788 \uBD84\uC11D\uD569\uB2C8\uB2E4." })
        ] }),
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-space-xs", children: [
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs8("label", { className: "flex items-center gap-1.5 font-title-md text-title-md text-on-surface", children: [
              /* @__PURE__ */ jsx8("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
              /* @__PURE__ */ jsx8("span", { className: "", children: "\uCD9C\uC0DD\uC9C0 (\uC120\uD0DD)" })
            ] }),
            /* @__PURE__ */ jsxs8("span", { className: "px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1", children: [
              /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[12px]", children: "tune" }),
              "\uC9C4\uD0DC\uC591\uC2DC \uBCF4\uC815"
            ] })
          ] }),
          /* @__PURE__ */ jsxs8("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs8("select", { defaultValue: "seoul", className: "w-full h-12 pl-4 pr-10 appearance-none rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all", children: [
              /* @__PURE__ */ jsx8("option", { value: "seoul", children: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC" }),
              /* @__PURE__ */ jsx8("option", { value: "gyeonggi", children: "\uACBD\uAE30\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "busan", children: "\uBD80\uC0B0\uAD11\uC5ED\uC2DC" }),
              /* @__PURE__ */ jsx8("option", { value: "incheon", children: "\uC778\uCC9C\uAD11\uC5ED\uC2DC" }),
              /* @__PURE__ */ jsx8("option", { value: "daegu", children: "\uB300\uAD6C\uAD11\uC5ED\uC2DC" }),
              /* @__PURE__ */ jsx8("option", { value: "daejeon", children: "\uB300\uC804\uAD11\uC5ED\uC2DC" }),
              /* @__PURE__ */ jsx8("option", { value: "gwangju", children: "\uAD11\uC8FC\uAD11\uC5ED\uC2DC" }),
              /* @__PURE__ */ jsx8("option", { value: "ulsan", children: "\uC6B8\uC0B0\uAD11\uC5ED\uC2DC" }),
              /* @__PURE__ */ jsx8("option", { value: "gangwon", children: "\uAC15\uC6D0\uD2B9\uBCC4\uC790\uCE58\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "chungbuk", children: "\uCDA9\uCCAD\uBD81\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "chungnam", children: "\uCDA9\uCCAD\uB0A8\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "jeonbuk", children: "\uC804\uBD81\uD2B9\uBCC4\uC790\uCE58\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "jeonnam", children: "\uC804\uB77C\uB0A8\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "gyeongbuk", children: "\uACBD\uC0C1\uBD81\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "gyeongnam", children: "\uACBD\uC0C1\uB0A8\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "jeju", children: "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4" }),
              /* @__PURE__ */ jsx8("option", { value: "overseas", children: "\uD574\uC678 (\uC678\uAD6D \uCD9C\uC0DD)" })
            ] }),
            " ",
            /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] pointer-events-none", children: "location_on" })
          ] }),
          /* @__PURE__ */ jsx8("p", { className: "font-label-sm text-label-sm text-on-surface-variant mt-1", children: "\uD55C\uAD6D \uD45C\uC900\uC2DC(\uB3D9\uACBD 135\uB3C4)\uC640 \uC2E4\uC81C \uC9C0\uC5ED \uACBD\uB3C4 \uCC28\uC774\uB97C \uC790\uB3D9 \uBCF4\uC815\uD558\uC5EC \uC815\uBC00\uD55C \uC2DC\uC8FC(\u6642\u67F1)\uB97C \uACC4\uC0B0\uD569\uB2C8\uB2E4." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: "bg-surface-container-low rounded-xl p-space-md flex gap-space-sm items-start shadow-sm", children: [
        /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-secondary text-[22px] flex-shrink-0 mt-0.5", children: "menu_book" }),
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ jsx8("span", { className: "font-title-md text-title-md text-on-surface", children: "\uBA85\uB9AC\uD559(\u547D\u7406\u5B78)\uC758 \uC9C0\uD61C" }),
          /* @__PURE__ */ jsx8("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\u201C\uBA85(\u547D)\uC740 \uD558\uB298\uC774 \uB0B4\uB9B0 \uC9C0\uB3C4\uC774\uBA70, \uC6B4(\u904B)\uC740 \uB0B4\uAC00 \uBC1F\uC544 \uB098\uC544\uAC00\uB294 \uAE38\uC774\uB2E4.\u201D \uD0C4\uC0DD\uC758 \uCC30\uB098\uC5D0 \uC0C8\uACA8\uC9C4 \uCC9C\uAC04\uACFC \uC9C0\uC9C0\uC758 \uBC30\uCE58\uB97C \uD1B5\uD574 \uB2F9\uC2E0\uC758 \uACE0\uC720\uD55C \uACB0\uC744 \uBC1C\uACAC\uD574\uBCF4\uC138\uC694." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: "flex flex-col gap-space-sm mt-space-xs", children: [
        /* @__PURE__ */ jsxs8(
          "button",
          {
            className: "w-full h-14 rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all relative overflow-hidden",
            id: "submit-saju-btn",
            onClick: () => handleSajuSubmit(),
            type: "button",
            children: [
              /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-secondary-fixed text-[22px]", style: { fontVariationSettings: "'FILL' 1" }, children: "arrow_back_ios_new" }),
              /* @__PURE__ */ jsx8("span", { className: "tracking-wide", children: "\uB0B4 \uC0AC\uC8FC \uBCF4\uAE30" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-center gap-1.5 text-center font-label-md text-label-md text-on-surface-variant", children: [
          /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[16px] text-outline", children: "lock" }),
          /* @__PURE__ */ jsx8("span", { className: "", children: "\uC785\uB825\uD558\uC2E0 \uAC1C\uC778\uC815\uBCF4\uB294 \uC0AC\uC8FC \uBD84\uC11D \uC678 \uB2E4\uB978 \uC6A9\uB3C4\uB85C \uC800\uC7A5\uB418\uAC70\uB098 \uD65C\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx8("nav", { className: "fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)]", "data-active-classes": "text-primary-container font-semibold", children: /* @__PURE__ */ jsxs8("div", { className: "flex justify-around items-center h-16 px-gutter", children: [
      /* @__PURE__ */ jsxs8(
        "a",
        {
          "aria-current": "page",
          className: "flex flex-col items-center justify-center min-w-[56px] h-14 transition-colors text-primary-container font-semibold",
          "data-path": "home",
          href: "#",
          children: [
            /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[22px]", style: { fontVariationSettings: "'FILL' 1" }, children: "home" }),
            /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm mt-1", children: "\uD648" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs8("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "saju-result", href: "#", children: [
        /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[22px]", children: "auto_stories" }),
        /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB0B4 \uC0AC\uC8FC" })
      ] }),
      /* @__PURE__ */ jsxs8("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "ai-chat", href: "#", children: [
        /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[22px]", children: "forum" }),
        /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm mt-1", children: "AI \uC0C1\uB2F4" })
      ] }),
      /* @__PURE__ */ jsxs8("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "more", href: "#", children: [
        /* @__PURE__ */ jsx8("span", { className: "material-symbols-outlined text-[22px]", children: "more_horiz" }),
        /* @__PURE__ */ jsx8("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB354\uBCF4\uAE30" })
      ] })
    ] }) })
  ] });
}

// src/screens/SajuOptions.tsx
import { Fragment as Fragment9, jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var BODY_CLASS9 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed";
function toggleSwitch(btn) {
  const isChecked = btn.getAttribute("aria-checked") === "true";
  const nextState = !isChecked;
  btn.setAttribute("aria-checked", String(nextState));
  const thumb = query("span", btn);
  if (nextState) {
    btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none";
    thumb.className = "translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
  } else {
    btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-surface-container-high transition-colors duration-200 ease-in-out focus:outline-none";
    thumb.className = "translate-x-0.5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
  }
}
function selectOption(type) {
  const yajaLabel = byId("opt-yaja");
  const jojaLabel = byId("opt-joja");
  const yajaRadio = byId("radio-yaja");
  const jojaRadio = byId("radio-joja");
  if (type === "yaja") {
    yajaLabel.classList.add("bg-surface-container-low/50");
    jojaLabel.classList.remove("bg-surface-container-low/50");
    yajaRadio.className = "w-5 h-5 rounded-full bg-primary-container flex items-center justify-center transition-all";
    yajaRadio.innerHTML = '<div class="w-2 h-2 rounded-full bg-surface"></div>';
    jojaRadio.className = "w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center transition-all";
    jojaRadio.innerHTML = '<div class="w-2 h-2 rounded-full bg-transparent"></div>';
  } else {
    jojaLabel.classList.add("bg-surface-container-low/50");
    yajaLabel.classList.remove("bg-surface-container-low/50");
    jojaRadio.className = "w-5 h-5 rounded-full bg-primary-container flex items-center justify-center transition-all";
    jojaRadio.innerHTML = '<div class="w-2 h-2 rounded-full bg-surface"></div>';
    yajaRadio.className = "w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center transition-all";
    yajaRadio.innerHTML = '<div class="w-2 h-2 rounded-full bg-transparent"></div>';
  }
}
function resetDefaults() {
  const icon = byId("reset-icon");
  if (icon) {
    icon.classList.add("-rotate-180");
    setTimeout(() => icon.classList.remove("-rotate-180"), 500);
  }
  const switches = queryAll('button[role="switch"]');
  switches.forEach((btn) => {
    btn.setAttribute("aria-checked", "true");
    btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none";
    const thumb = query("span", btn);
    if (thumb) {
      thumb.className = "translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
    }
  });
  selectOption("yaja");
}
function SajuOptions() {
  useBodyClass(BODY_CLASS9);
  return /* @__PURE__ */ jsxs9(Fragment9, { children: [
    /* @__PURE__ */ jsx9("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(19,27,46,0.03)] pt-safe", children: /* @__PURE__ */ jsxs9("div", { className: "h-16 px-margin-mobile flex items-center justify-between", children: [
      /* @__PURE__ */ jsx9(
        "button",
        {
          "aria-label": "\uB4A4\uB85C \uAC00\uAE30",
          className: "w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-primary-container hover:bg-surface-container transition-colors",
          onClick: () => history.back(),
          type: "button",
          children: /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back_ios_new" })
        }
      ),
      /* @__PURE__ */ jsx9("div", { className: "flex-1 text-center px-space-xs", children: /* @__PURE__ */ jsx9("h1", { className: "font-headline-md text-headline-md text-primary-container tracking-tight truncate", children: "\uC0AC\uC8FC \uACC4\uC0B0 \uC635\uC158" }) }),
      /* @__PURE__ */ jsx9("div", { className: "w-11 h-11 shrink-0" })
    ] }) }),
    /* @__PURE__ */ jsx9("main", { className: "flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen", children: /* @__PURE__ */ jsxs9("div", { className: "flex flex-col w-full px-margin-mobile pb-12 pt-space-md space-y-6", children: [
      /* @__PURE__ */ jsx9("div", { className: "relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)]", children: /* @__PURE__ */ jsxs9("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx9("div", { className: "w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-secondary text-[20px]", style: { fontVariationSettings: "'FILL' 1" }, children: "explore" }) }),
        /* @__PURE__ */ jsxs9("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx9("p", { className: "font-title-md text-title-md text-on-surface", children: "\uC124\uC815\uC744 \uBC14\uAFB8\uBA74 \uC0AC\uC8FC \uACB0\uACFC\uAC00 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC5B4\uC694" }),
          /* @__PURE__ */ jsx9("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed", children: "\uC804\uD1B5 \uBA85\uB9AC\uD559 \uD574\uC11D \uAE30\uC900\uC5D0 \uB530\uB77C \uC2DC\uC8FC(\u6642\u67F1)\uC640 \uC808\uAE30 \uAE30\uC900\uC774 \uC7AC\uACC4\uC0B0\uB429\uB2C8\uB2E4." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs9("section", { className: "flex flex-col space-y-2", children: [
        /* @__PURE__ */ jsxs9("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsx9("h2", { className: "font-title-lg text-title-lg text-primary-container tracking-tight", children: "\uC815\uBC00 \uC2DC\uAC04 \uBCF4\uC815" }),
          /* @__PURE__ */ jsx9("span", { className: "font-label-sm text-label-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded-full", children: "\uC815\uBC00\uB3C4 \uC0C1\uD5A5" })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "rounded-xl bg-surface-container-lowest p-space-md shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] space-y-4", children: [
          /* @__PURE__ */ jsxs9("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs9("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx9("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC9C4\uD0DC\uC591\uC2DC \uBCF4\uC815" }),
                /* @__PURE__ */ jsx9("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" })
              ] }),
              /* @__PURE__ */ jsx9("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-0.5", children: "\uCD9C\uC0DD\uC9C0 \uACBD\uB3C4\uB97C \uBC18\uC601\uD574 \uC2DC\uAC04\uC744 \uBCF4\uC815\uD574\uC694" })
            ] }),
            /* @__PURE__ */ jsx9(
              "button",
              {
                "aria-checked": "true",
                className: "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none",
                onClick: (event) => toggleSwitch(event.currentTarget),
                role: "switch",
                type: "button",
                children: /* @__PURE__ */ jsx9("span", { className: "translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx9("div", { className: "h-px w-full bg-surface-container-high" }),
          /* @__PURE__ */ jsxs9("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs9("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx9("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ jsx9("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC11C\uBA38\uD0C0\uC784 \uBCF4\uC815" }) }),
              /* @__PURE__ */ jsx9("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-0.5", children: "1948~1960\uB144, 1987~1988\uB144 \uCD9C\uC0DD\uC790\uC5D0\uAC8C \uC801\uC6A9\uB3FC\uC694" })
            ] }),
            /* @__PURE__ */ jsx9(
              "button",
              {
                "aria-checked": "true",
                className: "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none",
                onClick: (event) => toggleSwitch(event.currentTarget),
                role: "switch",
                type: "button",
                children: /* @__PURE__ */ jsx9("span", { className: "translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs9("section", { className: "flex flex-col space-y-2", children: [
        /* @__PURE__ */ jsxs9("div", { className: "px-1", children: [
          /* @__PURE__ */ jsx9("h2", { className: "font-title-lg text-title-lg text-primary-container tracking-tight", children: "\uC790\uC2DC \uAE30\uC900" }),
          /* @__PURE__ */ jsx9("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-0.5", children: "\uC790\uC2DC(23:00~01:00) \uCD9C\uC0DD\uC790\uC758 \uB0A0\uC9DC \uBCC0\uACBD \uAE30\uC900\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4." })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: "rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] overflow-hidden", children: [
          /* @__PURE__ */ jsxs9("label", { className: "flex items-start p-space-md gap-3 cursor-pointer bg-surface-container-low/50 transition-colors", id: "opt-yaja", onClick: () => selectOption("yaja"), children: [
            /* @__PURE__ */ jsx9("div", { className: "pt-0.5", children: /* @__PURE__ */ jsx9("div", { className: "w-5 h-5 rounded-full bg-primary-container flex items-center justify-center transition-all", id: "radio-yaja", children: /* @__PURE__ */ jsx9("div", { className: "w-2 h-2 rounded-full bg-surface" }) }) }),
            /* @__PURE__ */ jsxs9("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx9("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC57C\uC790\uC2DC (23\uC2DC\uBD80\uD130 \uB2E4\uC74C \uB0A0)" }),
                /* @__PURE__ */ jsx9("span", { className: "font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container", children: "\uAD8C\uC7A5" })
              ] }),
              /* @__PURE__ */ jsx9("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed", children: "\uC624\uD6C4 11\uC2DC(23\uC2DC)\uB97C \uAE30\uC810\uC73C\uB85C \uB2E4\uC74C \uB0A0\uC758 \uC77C\uC8FC(\u65E5\u67F1)\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4. (\uB300\uB2E4\uC218 \uD604\uB300 \uC5ED\uD559 \uAD8C\uC7A5)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx9("div", { className: "h-px w-full bg-surface-container-high" }),
          /* @__PURE__ */ jsxs9("label", { className: "flex items-start p-space-md gap-3 cursor-pointer transition-colors", id: "opt-joja", onClick: () => selectOption("joja"), children: [
            /* @__PURE__ */ jsx9("div", { className: "pt-0.5", children: /* @__PURE__ */ jsx9("div", { className: "w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center transition-all", id: "radio-joja", children: /* @__PURE__ */ jsx9("div", { className: "w-2 h-2 rounded-full bg-transparent" }) }) }),
            /* @__PURE__ */ jsxs9("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx9("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx9("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC870\uC790\uC2DC (0\uC2DC\uBD80\uD130 \uB2F9\uC77C)" }) }),
              /* @__PURE__ */ jsx9("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed", children: "\uC790\uC815(00:00)\uC744 \uAE30\uC900\uC73C\uB85C \uB0A0\uC9DC\uAC00 \uBCC0\uACBD\uB418\uBA70 23\uC2DC\uB300\uB294 \uB2F9\uC77C \uC77C\uC8FC\uB85C \uBD05\uB2C8\uB2E4." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs9("section", { className: "flex flex-col space-y-2", children: [
        /* @__PURE__ */ jsx9("div", { className: "px-1", children: /* @__PURE__ */ jsx9("h2", { className: "font-title-lg text-title-lg text-primary-container tracking-tight", children: "\uC808\uAE30 \uAE30\uC900" }) }),
        /* @__PURE__ */ jsxs9("div", { className: "rounded-xl bg-surface-container-lowest p-space-md shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx9("div", { className: "w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container", children: /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[18px]", children: "wb_twilight" }) }),
            /* @__PURE__ */ jsxs9("div", { children: [
              /* @__PURE__ */ jsx9("p", { className: "font-title-md text-title-md text-on-surface", children: "\uC808\uAE30\uB825 \uAE30\uC900 \uC2DC\uC810" }),
              /* @__PURE__ */ jsx9("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uD55C\uAD6D\uCC9C\uBB38\uC5F0\uAD6C\uC6D0 \uAE30\uC900 (\uC790\uB3D9 \uC801\uC6A9)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx9("span", { className: "font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-full", children: "\uAE30\uBCF8\uAC12" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs9("div", { className: "rounded-xl bg-surface-container-low p-space-md flex items-center gap-3", children: [
        /* @__PURE__ */ jsx9("div", { className: "w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 text-secondary font-headline-md text-headline-md", children: "\u6613" }),
        /* @__PURE__ */ jsxs9("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx9("p", { className: "font-label-lg text-label-lg text-on-surface", children: "\uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uB9CC\uC138\uB825 \uC54C\uACE0\uB9AC\uC998" }),
          /* @__PURE__ */ jsx9("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-0.5", children: "\uB3D9\uC591 \uCC9C\uBB38 \uC5ED\uBC95\uACFC \uD45C\uC900 \uC9C0\uB9AC \uB370\uC774\uD130\uB97C \uC885\uD569\uD558\uC5EC 1\uBD84 \uB2E8\uC704 \uC624\uCC28 \uC5C6\uC774 \uC0B0\uCD9C\uD569\uB2C8\uB2E4." })
        ] })
      ] }),
      /* @__PURE__ */ jsx9("div", { className: "pt-space-sm pb-space-lg flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxs9("button", { className: "inline-flex items-center gap-1.5 py-2.5 px-4 rounded-full text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all text-body-sm font-body-sm", onClick: () => resetDefaults(), type: "button", children: [
        /* @__PURE__ */ jsx9("span", { className: "material-symbols-outlined text-[18px] transition-transform duration-500", id: "reset-icon", children: "restart_alt" }),
        /* @__PURE__ */ jsx9("span", { className: "", children: "\uAE30\uBCF8\uAC12\uC73C\uB85C \uB418\uB3CC\uB9AC\uAE30" })
      ] }) })
    ] }) })
  ] });
}

// src/screens/SajuResult.tsx
import { useEffect as useEffect5 } from "react";
import { Fragment as Fragment10, jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
var BODY_CLASS10 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";
function SajuResult() {
  useBodyClass(BODY_CLASS10);
  useEffect5(() => {
    const tabs = queryAll("#sajuTabs button");
    const heading = byId("tabHeading");
    const paragraph = byId("tabParagraph");
    const tabData = {
      personality: {
        title: "\uD0C0\uACE0\uB09C \uAE30\uC9C8\uACFC \uB300\uC778\uAD00\uACC4\uC758 \uD750\uB984",
        content: `
          <p>\uB2F9\uC2E0\uC758 \uC77C\uAC04 \uBCD1\uD654\uB294 \uC778\uBAA9(\u5BC5\u6728)\uC744 \uC544\uB798\uC5D0 \uB450\uC5B4 <strong>'\uBAA9\uC0DD\uD654(\u6728\u751F\u706B)'</strong>\uC758 \uB9C8\uB974\uC9C0 \uC54A\uB294 \uC5F0\uB8CC\uB97C \uC9C0\uB2C8\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC678\uBD80 \uD658\uACBD\uC774 \uB0C9\uB7AD\uD574\uC9C0\uB354\uB77C\uB3C4 \uC2A4\uC2A4\uB85C \uC0AC\uAE30\uB97C \uBD81\uB3CB\uC6B0\uACE0 \uB2E4\uC2DC \uC77C\uC5B4\uC124 \uC218 \uC788\uB294 \uAC15\uC778\uD55C \uD68C\uBCF5\uD0C4\uB825\uC131\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.</p>
          <p class="text-on-surface-variant text-body-sm">\uB300\uC778\uAD00\uACC4\uC5D0\uC11C\uB294 \uBCA0\uD478\uB294 \uB370 \uC778\uC0C9\uD558\uC9C0 \uC54A\uACE0 \uC194\uC9C1\uB2F4\uBC31\uD558\uC5EC \uC8FC\uBCC0\uC5D0 \uC0AC\uB78C\uC774 \uB04A\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD0C0\uC778\uC758 \uC791\uC740 \uACB0\uC810\uC5D0\uB3C4 \uC628\uC720\uD568\uC744 \uD488\uC744 \uB54C \uC874\uACBD\uC774 \uB4A4\uB530\uB985\uB2C8\uB2E4.</p>
        `
      },
      wealth: {
        title: "\uC7AC\uBB3C\uC6B4(\u8CA1\u904B)\uACFC \uCD95\uC801\uC758 \uBC29\uD5A5",
        content: `
          <p>\uC6D4\uC8FC\uC758 <strong>\uC2DD\uC2E0(\u620A\u620C)</strong>\uC774 \uB9E4\uC6B0 \uD0C4\uD0C4\uD558\uAC8C \uC790\uB9AC\uD558\uC5EC, \uC544\uC774\uB514\uC5B4\uC640 \uCC3D\uC758\uC801 \uC7AC\uB2A5\uC774 \uACE7 \uC7AC\uC0B0\uC73C\uB85C \uD658\uC6D0\uB418\uB294 <em>'\uC2DD\uC2E0\uC0DD\uC7AC(\u98DF\u795E\u751F\u8CA1)'</em>\uC758 \uC804\uD615\uC801 \uBA85\uC2DD\uC785\uB2C8\uB2E4.</p>
          <p class="text-on-surface-variant text-body-sm">\uB2E8\uAE30 \uD22C\uC790\uB098 \uD22C\uAE30\uC801 \uD22C\uC790\uB294 \uD53C\uD558\uACE0, \uC790\uC2E0\uC758 \uC804\uBB38 \uAE30\uC220\uC774\uB098 \uD50C\uB7AB\uD3FC \uC0AC\uC5C5\uCC98\uB7FC \uC9C0\uC2DD \uC790\uC0B0\uC744 \uC2DC\uC2A4\uD15C\uD654\uD560 \uB54C \uBD80\uC758 \uADF8\uB987\uC774 \uADF9\uB300\uD654\uB429\uB2C8\uB2E4.</p>
        `
      },
      career: {
        title: "\uC9C1\uC5C5 \uC801\uC131\uACFC \uCC9C\uC9C1(\u5929\u8077)",
        content: `
          <p>\uBA85\uC2DD\uC5D0 <strong>\uD3B8\uAD00(\u58EC\u6C34)</strong>\uACFC <strong>\uC2DD\uC2E0(\u620A\u571F)</strong>\uC774 \uACF5\uC874\uD558\uC5EC, \uB300\uC911\uC744 \uC0C1\uB300\uB85C \uD55C \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158, \uAD50\uC721, \uBBF8\uB514\uC5B4 \uAE30\uD68D, \uB514\uC790\uC778 \uBE0C\uB79C\uB529 \uBD84\uC57C\uC5D0\uC11C \uB3C5\uBCF4\uC801 \uC5ED\uB7C9\uC744 \uBC1C\uD718\uD569\uB2C8\uB2E4.</p>
          <p class="text-on-surface-variant text-body-sm">\uC870\uC9C1 \uB0B4\uBD80\uC758 \uB2F5\uB2F5\uD55C \uADDC\uC728\uBCF4\uB2E4\uB294 \uC7AC\uB7C9\uAD8C\uC774 \uB113\uACE0 \uC131\uACFC\uAC00 \uD22C\uBA85\uD558\uAC8C \uB4DC\uB7EC\uB098\uB294 \uC9C1\uBB34 \uD658\uACBD\uC5D0\uC11C \uB2A5\uB960\uC774 200% \uBC30\uAC00\uB429\uB2C8\uB2E4.</p>
        `
      },
      love: {
        title: "\uC778\uC5F0\uBC95\uACFC \uC5F0\uC560\xB7\uACB0\uD63C \uD750\uB984",
        content: `
          <p>\uB144\uC9C0\uC758 <strong>\uC790\uC218(\u5B50\u6C34) \uC815\uAD00</strong>\uACFC \uC2DC\uC8FC\uC758 <strong>\uC784\uC218(\u58EC\u6C34)</strong>\uAC00 \uC870\uD654\uB97C \uC774\uB8E8\uC5B4, \uC9C0\uC801\uC774\uACE0 \uCC28\uBD84\uD558\uBA70 \uBCF8\uC778\uC758 \uC5F4\uC815\uC744 \uBB35\uBB35\uD788 \uBC1B\uC544\uC8FC\uB294 \uC548\uC815\uC801\uC778 \uB3D9\uBC18\uC790\uC640\uC758 \uAD81\uD569\uC774 \uAE38\uD569\uB2C8\uB2E4.</p>
          <p class="text-on-surface-variant text-body-sm">\uC11C\uB85C\uC758 \uB3C5\uB9BD\uC801 \uC601\uC5ED\uC744 \uC874\uC911\uD574 \uC904 \uB54C \uAD00\uACC4\uAC00 \uC624\uB798 \uC9C0\uC18D\uB418\uBA70, 2025\uB144 \uAC00\uC744~\uACA8\uC6B8 \uC988\uC74C \uC758\uBBF8 \uC788\uB294 \uB9CC\uB0A8\uC758 \uAE30\uC6B4\uC774 \uC9D9\uC5B4\uC9D1\uB2C8\uB2E4.</p>
        `
      },
      flow: {
        title: "2025 \uC744\uC0AC\uB144(\u4E59\u5DF3\u5E74) \uD55C \uD574\uC758 \uCD1D\uC6B4",
        content: `
          <p>2025\uB144\uC740 \uBAA9\uD654(\u6728\u706B)\uC758 \uAE30\uC6B4\uC774 \uB354\uC6B1 \uAC70\uC138\uC9C0\uB294 \uD574\uB85C, <strong>\uC0C8\uB85C\uC6B4 \uB3C4\uC804\uACFC \uB3C4\uC57D\uC758 \uBD84\uAE30\uC810</strong>\uC774 \uC5F4\uB9BD\uB2C8\uB2E4. \uC900\uBE44\uD574 \uC628 \uD504\uB85C\uC81D\uD2B8\uB97C \uC138\uC0C1 \uBC16\uC73C\uB85C \uAEBC\uB0B4\uAE30\uC5D0 \uCD5C\uC801\uAE30\uC785\uB2C8\uB2E4.</p>
          <p class="text-on-surface-variant text-body-sm">\uB2E4\uB9CC \uC5D0\uB108\uC9C0\uAC00 \uACFC\uC5F4\uB420 \uC218 \uC788\uC73C\uBBC0\uB85C \uBC88\uC544\uC6C3\uC744 \uACBD\uACC4\uD558\uACE0 \uC218(\u6C34)\uC640 \uAE08(\u91D1)\uC758 \uAE30\uC6B4\uC778 \uD734\uC2DD\uACFC \uBA85\uC0C1\uC744 \uBC18\uB4DC\uC2DC \uBCD1\uD589\uD558\uC2ED\uC2DC\uC624.</p>
        `
      }
    };
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.className = "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all";
        });
        tab.className = "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-primary-container text-on-primary shadow-sm transition-all";
        const key = tab.getAttribute("data-tab");
        if (key && tabData[key]) {
          heading.textContent = tabData[key].title;
          paragraph.innerHTML = tabData[key].content;
        }
      });
    });
    const accordionBtn = byId("deepReadingBtn");
    const classicalBox = byId("classicalCallout");
    const accordionIcon = byId("deepReadingIcon");
    const accordionText = byId("deepReadingText");
    if (accordionBtn && classicalBox) {
      accordionBtn.addEventListener("click", () => {
        const isHidden = classicalBox.classList.contains("hidden");
        if (isHidden) {
          classicalBox.classList.remove("hidden");
          accordionIcon.textContent = "expand_less";
          accordionText.textContent = "\uC6D0\uC804 \uACE0\uC804\uD574\uC124 \uC811\uAE30";
        } else {
          classicalBox.classList.add("hidden");
          accordionIcon.textContent = "expand_more";
          accordionText.textContent = "\uBA85\uB9AC\uD559 \uC6D0\uC804 \uACE0\uC804\uD574\uC124 \uB354\uBCF4\uAE30";
        }
      });
    }
    const modalTrigger = byId("askAiModalTrigger");
    if (modalTrigger) {
      modalTrigger.addEventListener("click", () => {
        alert("\uAE40\uD558\uB298\uB2D8\uC758 \uC0AC\uC8FC\uBA85\uC2DD(\uBCD1\uC778\uC77C\uC8FC) \uB370\uC774\uD130\uB97C \uCEE8\uD14D\uC2A4\uD2B8\uB85C \uBD88\uB7EC\uC640 \uC2E4\uC2DC\uAC04 AI \uB300\uD654\uB97C \uC5F0\uACB0\uD569\uB2C8\uB2E4.");
      });
    }
    const profiles = { self: { name: "\uAE40\uD558\uB298\uB2D8\uC758 \uC0AC\uC8FC\uBA85\uC2DD", badge: "\u5764\u547D \xB7 \uC5EC\uBA85", birth: "1996. 10. 24 (\uC591\uB825) \u8FB0\u6642", dayMaster: "\u2018\uBCD1\uD654(\u4E19\u706B)\u2019", desc: '\uD0DC\uC5B4\uB09C \uB0A0\uC758 \uC77C\uAC04(\u65E5\u5E72) <strong class="text-secondary font-medium">\u2018\uBCD1\uD654(\u4E19\u706B)\u2019</strong>\uB97C \uD488\uC5B4 \uC138\uC0C1\uC744 \uBE44\uCD94\uB294 \uB530\uB73B\uD55C \uD0DC\uC591\uACFC \uAC19\uC740 \uBA85\uC6B4\uC785\uB2C8\uB2E4.', persona: "\u967D\u706B\uC758 \uAE30\uC9C8", ctaText: "\uB0B4 \uBCD1\uD654(\u4E19\u706B) \uC6D0\uAD6D\uC744 \uAE30\uBC18\uC73C\uB85C \uC2E4\uC2DC\uAC04 \uC2EC\uCE35 \uC0C1\uB2F4" }, husband: { name: "\uBC15\uBBFC\uC6B0\uB2D8\uC758 \uC0AC\uC8FC\uBA85\uC2DD", badge: "\u4E7E\u547D \xB7 \uB0A8\uBA85", birth: "1994. 03. 12 (\uC591\uB825) \u5B50\u6642", dayMaster: "\u2018\uC784\uC218(\u58EC\u6C34)\u2019", desc: '\uD0DC\uC5B4\uB09C \uB0A0\uC758 \uC77C\uAC04(\u65E5\u5E72) <strong class="text-secondary font-medium">\u2018\uC784\uC218(\u58EC\u6C34)\u2019</strong>\uB97C \uD488\uC5B4 \uB113\uC740 \uBC14\uB2E4\uCC98\uB7FC \uC720\uC5F0\uD558\uACE0 \uC9C0\uD61C\uB85C\uC6B4 \uBA85\uC6B4\uC785\uB2C8\uB2E4.', persona: "\u967D\u6C34\uC758 \uAE30\uC9C8", ctaText: "\uBC15\uBBFC\uC6B0\uB2D8\uC758 \uC784\uC218(\u58EC\u6C34) \uC6D0\uAD6D\uC744 \uAE30\uBC18\uC73C\uB85C \uC2E4\uC2DC\uAC04 \uC2EC\uCE35 \uC0C1\uB2F4" }, firstchild: { name: "\uBC15\uC11C\uC544\uB2D8\uC758 \uC0AC\uC8FC\uBA85\uC2DD", badge: "\u5764\u547D \xB7 \uC5EC\uBA85", birth: "2023. 07. 05 (\uC591\uB825) \u5DF3\u6642", dayMaster: "\u2018\uAC11\uBAA9(\u7532\u6728)\u2019", desc: '\uD0DC\uC5B4\uB09C \uB0A0\uC758 \uC77C\uAC04(\u65E5\u5E72) <strong class="text-secondary font-medium">\u2018\uAC11\uBAA9(\u7532\u6728)\u2019</strong>\uC744 \uD488\uC5B4 \uACE7\uAC8C \uBED7\uC5B4 \uC624\uB974\uB294 \uD070 \uB098\uBB34\uC640 \uAC19\uC740 \uC131\uC7A5\uD615 \uBA85\uC6B4\uC785\uB2C8\uB2E4.', persona: "\u967D\u6728\uC758 \uAE30\uC9C8", ctaText: "\uBC15\uC11C\uC544\uB2D8\uC758 \uAC11\uBAA9(\u7532\u6728) \uC6D0\uAD6D\uC744 \uAE30\uBC18\uC73C\uB85C \uC2E4\uC2DC\uAC04 \uC2EC\uCE35 \uC0C1\uB2F4" } };
    const chipButtons = queryAll(".profile-chip");
    const headerCard = query("main > div.flex.flex-col > div.w-full.bg-surface-container-lowest:nth-of-type(2)");
    const nameHeading = headerCard ? query("h1", headerCard) : null;
    const badgeSpan = headerCard ? query("span.inline-flex", headerCard) : null;
    const birthSpan = headerCard ? queryAll("span.font-label-sm", headerCard)[1] : null;
    const descP = headerCard ? query("p", headerCard) : null;
    const ctaSub = query("#askAiModalTrigger span.text-on-primary-container");
    chipButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        chipButtons.forEach((b) => {
          b.className = "profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all shrink-0 shadow-sm";
          const labelSpans = queryAll("span", b);
          if (labelSpans[2]) labelSpans[2].className = "text-[10px] text-on-surface-variant/70 font-normal";
        });
        btn.className = "profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-primary-container text-white shadow-sm font-semibold transition-all shrink-0";
        const activeSpans = queryAll("span", btn);
        if (activeSpans[2]) activeSpans[2].className = "text-[10px] text-white/70 font-normal";
        const profileKey = btn.getAttribute("data-profile-id");
        const data = profileKey ? profiles[profileKey] : null;
        if (data && nameHeading && descP) {
          nameHeading.textContent = data.name;
          if (badgeSpan) badgeSpan.textContent = data.badge;
          if (birthSpan) birthSpan.textContent = data.birth;
          descP.innerHTML = data.desc;
          if (ctaSub) ctaSub.textContent = data.ctaText;
        }
      });
    });
    const addBtn = byId("addProfileBtn");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        alert("\uC0C8 \uAC00\uC871/\uC9C0\uC778 \uC0AC\uC8FC \uD504\uB85C\uD544 \uB4F1\uB85D \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.");
      });
    }
    const manageBtn = byId("manageProfilesBtn");
    if (manageBtn) {
      manageBtn.addEventListener("click", () => {
        alert("\uC800\uC7A5\uB41C \uC0AC\uC8FC \uD504\uB85C\uD544 \uBAA9\uB85D \uAD00\uB9AC(\uC218\uC815/\uC21C\uC11C\uBCC0\uACBD) \uCC3D\uC744 \uC5FD\uB2C8\uB2E4.");
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs10(Fragment10, { children: [
    /* @__PURE__ */ jsx10("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe", children: /* @__PURE__ */ jsxs10("div", { className: "h-16 px-margin flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-space-sm", children: [
        /* @__PURE__ */ jsx10("div", { className: "w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-surface-container", children: /* @__PURE__ */ jsx10("img", { alt: "Profile", className: "w-8 h-8 rounded-full object-cover", src: "/assets/img01.png" }) }),
        /* @__PURE__ */ jsxs10("div", { className: "flex items-baseline gap-space-xs", children: [
          /* @__PURE__ */ jsx10("span", { className: "font-headline-md text-headline-md text-on-surface tracking-tight", children: "\uB0B4 \uC0AC\uC8FC" }),
          /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-secondary tracking-wider uppercase font-semibold", children: "\u547D\u7406" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx10("span", { className: "font-title-md text-title-md text-on-surface-variant px-space-xs hidden sm:inline-block", children: "\uC0AC\uC8FC \uBD84\uC11D \uACB0\uACFC" }),
        /* @__PURE__ */ jsx10("button", { "aria-label": "\uB3C4\uC6C0\uB9D0 \uC548\uB0B4", className: "w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors", type: "button", children: /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[22px]", children: "auto_awesome" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx10("main", { className: "flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface", children: /* @__PURE__ */ jsxs10("div", { className: "flex flex-col w-full px-margin-mobile pb-space-xl", children: [
      /* @__PURE__ */ jsx10("div", { className: "w-full pt-1 pb-3 mb-1 border-b border-surface-container-highest/60", children: /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 flex-1", id: "profileChipList", children: [
          /* @__PURE__ */ jsxs10("button", { type: "button", className: "profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-primary-container text-white shadow-sm font-semibold transition-all shrink-0", "data-profile-id": "self", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#C84B31] shrink-0" }),
            /* @__PURE__ */ jsx10("span", { className: "", children: "\uB098" }),
            /* @__PURE__ */ jsx10("span", { className: "text-[10px] text-white/70 font-normal", children: "\uBCD1\uD654" })
          ] }),
          /* @__PURE__ */ jsxs10("button", { type: "button", className: "profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all shrink-0 shadow-sm", "data-profile-id": "husband", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#1D3557] shrink-0" }),
            /* @__PURE__ */ jsx10("span", { className: "", children: "\uB0A8\uD3B8" }),
            /* @__PURE__ */ jsx10("span", { className: "text-[10px] text-on-surface-variant/70 font-normal", children: "\uC784\uC218" })
          ] }),
          /* @__PURE__ */ jsxs10("button", { type: "button", className: "profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all shrink-0 shadow-sm", "data-profile-id": "firstchild", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#2D6A4F] shrink-0" }),
            /* @__PURE__ */ jsx10("span", { className: "", children: "\uCCAB\uC9F8" }),
            /* @__PURE__ */ jsx10("span", { className: "text-[10px] text-on-surface-variant/70 font-normal", children: "\uAC11\uBAA9" })
          ] }),
          /* @__PURE__ */ jsxs10("button", { type: "button", className: "flex items-center gap-1 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-highest transition-all shrink-0", id: "addProfileBtn", children: [
            /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[16px]", children: "add" }),
            /* @__PURE__ */ jsx10("span", { className: "", children: "\uCD94\uAC00" })
          ] })
        ] }),
        /* @__PURE__ */ jsx10(
          "button",
          {
            type: "button",
            "aria-label": "\uD504\uB85C\uD544 \uAD00\uB9AC",
            className: "w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shrink-0",
            id: "manageProfilesBtn",
            children: /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[18px]", children: "tune" })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs10("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md mt-space-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex flex-col gap-space-xs", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-space-xs", children: [
              /* @__PURE__ */ jsx10("span", { className: "inline-flex items-center px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm", children: "\u5764\u547D \xB7 \uC5EC\uBA85" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-secondary tracking-wide", children: "1996. 10. 24 (\uC591\uB825) \u8FB0\u6642" })
            ] }),
            /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-secondary text-[18px]", children: "wb_sunny" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-baseline gap-space-xs mt-1", children: [
            /* @__PURE__ */ jsx10("h1", { className: "font-headline-md text-headline-md text-on-surface font-semibold tracking-tight", children: "\uAE40\uD558\uB298\uB2D8\uC758 \uC0AC\uC8FC\uBA85\uC2DD" }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface-variant", children: "\u56DB\u67F1\u547D\u5F0F" })
          ] }),
          /* @__PURE__ */ jsxs10("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: [
            "\uD0DC\uC5B4\uB09C \uB0A0\uC758 \uC77C\uAC04(\u65E5\u5E72)",
            " ",
            /* @__PURE__ */ jsx10("strong", { className: "text-secondary font-medium", children: "\u2018\uBCD1\uD654(\u4E19\u706B)\u2019" }),
            "\uB97C \uD488\uC5B4 \uC138\uC0C1\uC744 \uBE44\uCD94\uB294 \uB530\uB73B\uD55C \uD0DC\uC591\uACFC \uAC19\uC740 \uBA85\uC6B4\uC785\uB2C8\uB2E4."
          ] })
        ] }),
        /* @__PURE__ */ jsx10("div", { className: "absolute -right-3 -bottom-4 opacity-5 pointer-events-none select-none text-[84px] font-headline-xl text-primary", children: "\u547D" })
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between mb-space-sm", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-space-xs", children: [
            /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[18px] text-secondary", children: "view_column" }),
            /* @__PURE__ */ jsx10("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC0AC\uC8FC\uC6D0\uAD6D\uD45C" })
          ] }),
          /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full", children: "\uC6B0\u2192\uC88C \uC21C\uC11C(\u6642\xB7\u65E5\xB7\u6708\xB7\u5E74)" })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "grid grid-cols-4 gap-space-xs", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex flex-col items-center gap-space-xs p-1.5 rounded-lg bg-surface-container-low", children: [
            /* @__PURE__ */ jsxs10("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-on-surface-variant block", children: "\uC2DC\uC8FC(\u6642)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-on-surface-variant/70", children: "\uB9D0\uB144\xB7\uC790\uB140" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5", children: "\uD3B8\uAD00(\u6C34)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#1D3557] leading-none", children: "\u58EC" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant mt-0.5", children: "\uC784\uC218" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5", children: "\uC2DD\uC2E0(\u571F)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#D99B26] leading-none", children: "\u8FB0" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant mt-0.5", children: "\uC9C4\uD1A0 \xB7 \u9F8D" })
            ] }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant/80 text-center", children: "\uAD00\uB300(\u51A0\u5E36)" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex flex-col items-center gap-space-xs p-1.5 rounded-lg bg-secondary-container/20 relative shadow-sm", children: [
            /* @__PURE__ */ jsx10("div", { className: "absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 bg-secondary text-on-secondary rounded-full font-label-sm text-[9px] whitespace-nowrap shadow-sm", children: "\uB098\xB7\uBCF8\uC6D0" }),
            /* @__PURE__ */ jsxs10("div", { className: "text-center mt-1", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm font-semibold text-secondary block", children: "\uC77C\uC8FC(\u65E5)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-secondary/80", children: "\uC911\uB144\xB7\uC790\uC544" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "w-full aspect-square rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center p-1 text-center shadow-md", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-secondary font-semibold leading-none mb-0.5", children: "\uBCF8\uC6D0(\u706B)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-bold text-[#C84B31] leading-none", children: "\u4E19" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-secondary font-medium mt-0.5", children: "\uBCD1\uD654 (\uD0DC\uC591)" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "w-full aspect-square rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center p-1 text-center shadow-md", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5", children: "\uD3B8\uC778(\u6728)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#2D6A4F] leading-none", children: "\u5BC5" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant mt-0.5", children: "\uC778\uBAA9 \xB7 \u864E" })
            ] }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-secondary font-semibold text-center", children: "\uC7A5\uC0DD(\u9577\u751F)" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex flex-col items-center gap-space-xs p-1.5 rounded-lg bg-surface-container-low", children: [
            /* @__PURE__ */ jsxs10("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-on-surface-variant block", children: "\uC6D4\uC8FC(\u6708)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-on-surface-variant/70", children: "\uCCAD\uB144\xB7\uC0AC\uD68C" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5", children: "\uC2DD\uC2E0(\u571F)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#D99B26] leading-none", children: "\u620A" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant mt-0.5", children: "\uBB34\uD1A0" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5", children: "\uC2DD\uC2E0(\u571F)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#D99B26] leading-none", children: "\u620C" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant mt-0.5", children: "\uC220\uD1A0 \xB7 \u72AC" })
            ] }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant/80 text-center", children: "\uBB18(\u5893)" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex flex-col items-center gap-space-xs p-1.5 rounded-lg bg-surface-container-low", children: [
            /* @__PURE__ */ jsxs10("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-on-surface-variant block", children: "\uB144\uC8FC(\u5E74)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-on-surface-variant/70", children: "\uCD08\uB144\xB7\uC870\uC0C1" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5", children: "\uBE44\uACAC(\u706B)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#C84B31] leading-none", children: "\u4E19" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant mt-0.5", children: "\uBCD1\uD654" })
            ] }),
            /* @__PURE__ */ jsxs10("div", { className: "w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5", children: "\uC815\uAD00(\u6C34)" }),
              /* @__PURE__ */ jsx10("span", { className: "font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#1D3557] leading-none", children: "\u5B50" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant mt-0.5", children: "\uC790\uC218 \xB7 \u9F20" })
            ] }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant/80 text-center", children: "\uD0DC(\u80CE)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-around mt-space-sm pt-2 bg-surface-container-low/50 rounded-lg", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#2D6A4F]" }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant", children: "\uBAA9(\u6728)" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#C84B31]" }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant", children: "\uD654(\u706B)" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#D99B26]" }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant", children: "\uD1A0(\u571F)" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#8D99AE]" }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant", children: "\uAE08(\u91D1)" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#1D3557]" }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant", children: "\uC218(\u6C34)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex flex-col gap-0.5 mb-space-sm", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx10("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC624\uD589(\u4E94\u884C) \uC5D0\uB108\uC9C0 \uBD84\uD3EC" }),
            /* @__PURE__ */ jsx10("span", { className: "px-2 py-0.5 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm font-semibold", children: "\uD654\xB7\uD1A0 \uBC1C\uB2EC\uACA9" })
          ] }),
          /* @__PURE__ */ jsx10("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uBD88(\u706B)\uACFC \uD759(\u571F)\uC758 \uAE30\uC6B4\uC774 \uD48D\uBD80\uD558\uC5EC \uB530\uB73B\uD558\uACE0 \uB108\uB978 \uB4E4\uD310\uC758 \uD615\uAD6D\uC785\uB2C8\uB2E4." })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "w-full h-3 rounded-full overflow-hidden flex bg-surface-container shadow-inner mb-space-sm", children: [
          /* @__PURE__ */ jsx10("div", { className: "bg-[#C84B31] h-full", style: { width: "35%" }, title: "\uD654 35%" }),
          /* @__PURE__ */ jsx10("div", { className: "bg-[#D99B26] h-full", style: { width: "30%" }, title: "\uD1A0 30%" }),
          /* @__PURE__ */ jsx10("div", { className: "bg-[#2D6A4F] h-full", style: { width: "15%" }, title: "\uBAA9 15%" }),
          /* @__PURE__ */ jsx10("div", { className: "bg-[#1D3557] h-full", style: { width: "15%" }, title: "\uC218 15%" }),
          /* @__PURE__ */ jsx10("div", { className: "bg-[#8D99AE] h-full", style: { width: "5%" }, title: "\uAE08 5%" })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "flex flex-col gap-space-xs", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between text-body-sm", children: [
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 w-20", children: [
              /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#C84B31]" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface font-medium", children: "\uD654 (\u706B)" })
            ] }),
            /* @__PURE__ */ jsx10("div", { className: "flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx10("div", { className: "bg-[#C84B31] h-full rounded-full", style: { width: "70%" } }) }),
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1.5 w-16 justify-end", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface", children: "35%" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-[#C84B31] bg-[#C84B31]/10 px-1 py-0.2 rounded font-semibold", children: "\uAC15\uD568" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between text-body-sm", children: [
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 w-20", children: [
              /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#D99B26]" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface font-medium", children: "\uD1A0 (\u571F)" })
            ] }),
            /* @__PURE__ */ jsx10("div", { className: "flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx10("div", { className: "bg-[#D99B26] h-full rounded-full", style: { width: "60%" } }) }),
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1.5 w-16 justify-end", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface", children: "30%" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-[#D99B26] bg-[#D99B26]/10 px-1 py-0.2 rounded font-semibold", children: "\uC6D0\uB9CC" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between text-body-sm", children: [
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 w-20", children: [
              /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#2D6A4F]" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface font-medium", children: "\uBAA9 (\u6728)" })
            ] }),
            /* @__PURE__ */ jsx10("div", { className: "flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx10("div", { className: "bg-[#2D6A4F] h-full rounded-full", style: { width: "30%" } }) }),
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1.5 w-16 justify-end", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface", children: "15%" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant bg-surface-container px-1 py-0.2 rounded", children: "\uC801\uC815" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between text-body-sm", children: [
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 w-20", children: [
              /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#1D3557]" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface font-medium", children: "\uC218 (\u6C34)" })
            ] }),
            /* @__PURE__ */ jsx10("div", { className: "flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx10("div", { className: "bg-[#1D3557] h-full rounded-full", style: { width: "30%" } }) }),
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1.5 w-16 justify-end", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface", children: "15%" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-on-surface-variant bg-surface-container px-1 py-0.2 rounded", children: "\uC801\uC815" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between text-body-sm", children: [
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2 w-20", children: [
              /* @__PURE__ */ jsx10("span", { className: "w-2 h-2 rounded-full bg-[#8D99AE]" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface font-medium", children: "\uAE08 (\u91D1)" })
            ] }),
            /* @__PURE__ */ jsx10("div", { className: "flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx10("div", { className: "bg-[#8D99AE] h-full rounded-full", style: { width: "10%" } }) }),
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1.5 w-16 justify-end", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-label-md text-label-md text-on-surface", children: "5%" }),
              /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-[10px] text-error bg-error-container/40 px-1 py-0.2 rounded font-semibold", children: "\uBD80\uC871" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-xs", children: [
          /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[18px] text-secondary mt-0.5", children: "lightbulb" }),
          /* @__PURE__ */ jsxs10("p", { className: "font-body-sm text-body-sm text-on-surface leading-snug", children: [
            /* @__PURE__ */ jsx10("strong", { className: "text-secondary font-medium", children: "\uAC1C\uC6B4(\u958B\u904B) \uC870\uC5B8:" }),
            " ",
            "\uBD80\uC871\uD55C",
            " ",
            /* @__PURE__ */ jsx10("span", { className: "font-semibold text-on-surface", children: "\uAE08(\u91D1)" }),
            "\uC758 \uAE30\uC6B4\uC744 \uBCF4\uC644\uD558\uAE30 \uC704\uD574 \uD770\uC0C9 \uACC4\uC5F4\uC758 \uC637\uCC28\uB9BC, \uAE08\uC18D \uC7A5\uC2E0\uAD6C, \uADF8\uB9AC\uACE0 \uBA85\uD655\uD558\uACE0 \uB2E8\uD638\uD55C \uC758\uC0AC\uACB0\uC815 \uC2B5\uAD00\uC774 \uC6B4\uC744 \uB192\uC5EC\uC90D\uB2C8\uB2E4."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between mb-space-xs", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-space-xs", children: [
            /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-secondary text-[20px]", children: "psychology_alt" }),
            /* @__PURE__ */ jsx10("h2", { className: "font-headline-md text-headline-md text-on-surface font-semibold", children: "\uB098\uB294 \uC5B4\uB5A4 \uC0AC\uB78C\uC77C\uAE4C?" })
          ] }),
          /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-secondary tracking-widest uppercase", children: "\u967D\u706B\uC758 \uAE30\uC9C8" })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "space-y-space-sm mt-space-sm", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-5 h-5 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center font-label-sm text-[11px] font-bold shrink-0 mt-0.5", children: "1" }),
            /* @__PURE__ */ jsxs10("p", { className: "font-body-md text-body-md text-on-surface leading-relaxed", children: [
              "\uC5B4\uB460\uC744 \uAC77\uC5B4\uB0B4\uB294",
              " ",
              /* @__PURE__ */ jsx10("strong", { className: "font-medium text-on-surface", children: "\uD55C\uB0AE\uC758 \uD0DC\uC591" }),
              "\uCC98\uB7FC \uB9E4\uC0AC\uC5D0 \uB2F9\uB2F9\uD558\uACE0 \uC628\uD654\uD558\uBA70, \uC8FC\uC704 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uD658\uD55C \uC0DD\uAE30\uC640 \uC628\uAE30\uB97C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uAC74\uB124\uB294 \uC874\uC7AC\uC785\uB2C8\uB2E4."
            ] })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-5 h-5 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center font-label-sm text-[11px] font-bold shrink-0 mt-0.5", children: "2" }),
            /* @__PURE__ */ jsxs10("p", { className: "font-body-md text-body-md text-on-surface leading-relaxed", children: [
              "\uBAA9(\u6728)\uC758 \uC9C0\uC6D0\uC744 \uBC1B\uB294 \uC9C1\uAD00\uB825\uACFC \uCC3D\uC758\uB825\uC774 \uB6F0\uC5B4\uB098 \uB9C9\uD78C \uD750\uB984 \uC18D\uC5D0\uC11C\uB3C4",
              " ",
              /* @__PURE__ */ jsx10("strong", { className: "font-medium text-on-surface", children: "\uC0C8\uB85C\uC6B4 \uAE38\uC744 \uAC1C\uCC99" }),
              "\uD574 \uB0B4\uB294 \uAE30\uD68D\uC790\uD615 \uCC9C\uC131\uC744 \uC9C0\uB154\uC2B5\uB2C8\uB2E4."
            ] })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx10("span", { className: "w-5 h-5 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center font-label-sm text-[11px] font-bold shrink-0 mt-0.5", children: "3" }),
            /* @__PURE__ */ jsxs10("p", { className: "font-body-md text-body-md text-on-surface leading-relaxed", children: [
              "\uD654\uB824\uD55C \uBD88\uAF43\uC774 \uB54C\uB54C\uB85C \uC870\uAE09\uD55C \uB9C8\uC74C\uC73C\uB85C \uBC88\uC9C8 \uC218 \uC788\uC73C\uB2C8, \uC911\uC694\uD55C \uC21C\uAC04",
              " ",
              /* @__PURE__ */ jsx10("strong", { className: "font-medium text-on-surface", children: "\uBC18 \uBC15\uC790 \uC26C\uC5B4\uAC00\uB294 \uACB0\uB2E8\uC758 \uC5EC\uC720" }),
              "\uB97C \uCDE8\uD560 \uB54C \uB354\uC6B1 \uC644\uBCBD\uD574\uC9D1\uB2C8\uB2E4."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "flex flex-wrap gap-1.5 mt-space-md pt-space-xs", children: [
          /* @__PURE__ */ jsx10("span", { className: "px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium", children: "#\uC5F4\uC815\uC801_\uCD94\uC9C4\uB825" }),
          /* @__PURE__ */ jsx10("span", { className: "px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium", children: "#\uC628\uD654\uD55C_\uD3EC\uC6A9\uC131" }),
          /* @__PURE__ */ jsx10("span", { className: "px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium", children: "#\uBE5B\uB098\uB294_\uD1B5\uCC30" }),
          /* @__PURE__ */ jsx10("span", { className: "px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium", children: "#\uC790\uC720\uB85C\uC6B4_\uC9C0\uC131" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "w-full mb-space-md", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between pb-space-xs overflow-x-auto no-scrollbar gap-2", id: "sajuTabs", children: [
          /* @__PURE__ */ jsx10("button", { className: "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-primary-container text-on-primary shadow-sm transition-all", "data-tab": "personality", children: "\uAE30\uC9C8 \xB7 \uC131\uACA9" }),
          /* @__PURE__ */ jsx10("button", { className: "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all", "data-tab": "wealth", children: "\uC7AC\uBB3C\uC6B4(\u8CA1\u904B)" }),
          /* @__PURE__ */ jsx10("button", { className: "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all", "data-tab": "career", children: "\uC9C1\uC5C5 \xB7 \uAD00\uC6B4" }),
          /* @__PURE__ */ jsx10("button", { className: "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all", "data-tab": "love", children: "\uC5F0\uC560 \xB7 \uC778\uC5F0" }),
          /* @__PURE__ */ jsx10("button", { className: "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all", "data-tab": "flow", children: "2025 \uC6B4\uC138" })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mt-space-xs", id: "tabContentCard", children: [
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-space-xs mb-space-xs", children: [
            /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-secondary text-[20px]", children: "auto_stories" }),
            /* @__PURE__ */ jsx10("h3", { className: "font-title-md text-title-md text-on-surface", id: "tabHeading", children: "\uD0C0\uACE0\uB09C \uAE30\uC9C8\uACFC \uB300\uC778\uAD00\uACC4\uC758 \uD750\uB984" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "font-body-md text-body-md text-on-surface space-y-space-xs leading-relaxed", id: "tabParagraph", children: [
            /* @__PURE__ */ jsxs10("p", { className: "", children: [
              "\uB2F9\uC2E0\uC758 \uC77C\uAC04 \uBCD1\uD654\uB294 \uC778\uBAA9(\u5BC5\u6728)\uC744 \uC544\uB798\uC5D0 \uB450\uC5B4",
              " ",
              /* @__PURE__ */ jsx10("strong", { children: "'\uBAA9\uC0DD\uD654(\u6728\u751F\u706B)'" }),
              "\uC758 \uB9C8\uB974\uC9C0 \uC54A\uB294 \uC5F0\uB8CC\uB97C \uC9C0\uB2C8\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC678\uBD80 \uD658\uACBD\uC774 \uB0C9\uB7AD\uD574\uC9C0\uB354\uB77C\uB3C4 \uC2A4\uC2A4\uB85C \uC0AC\uAE30\uB97C \uBD81\uB3CB\uC6B0\uACE0 \uB2E4\uC2DC \uC77C\uC5B4\uC124 \uC218 \uC788\uB294 \uAC15\uC778\uD55C \uD68C\uBCF5\uD0C4\uB825\uC131\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."
            ] }),
            /* @__PURE__ */ jsx10("p", { className: "text-on-surface-variant text-body-sm", children: "\uB300\uC778\uAD00\uACC4\uC5D0\uC11C\uB294 \uBCA0\uD478\uB294 \uB370 \uC778\uC0C9\uD558\uC9C0 \uC54A\uACE0 \uC194\uC9C1\uB2F4\uBC31\uD558\uC5EC \uC8FC\uBCC0\uC5D0 \uC0AC\uB78C\uC774 \uB04A\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uB54C\uB85C\uB294 \uD0C0\uC778\uC758 \uBE44\uBC00\uC774\uB098 \uC0AC\uC18C\uD55C \uB2E8\uC810\uC5D0 \uAD00\uB300\uD574\uC838\uC57C \uB354 \uD070 \uC2E0\uB9DD\uC744 \uC5BB\uAC8C \uB429\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ jsxs10("button", { className: "mt-space-sm w-full py-2 flex items-center justify-center gap-1 text-secondary font-label-md text-label-md hover:bg-secondary-container/10 rounded-lg transition-colors", id: "deepReadingBtn", type: "button", children: [
            /* @__PURE__ */ jsx10("span", { id: "deepReadingText", className: "", children: "\uBA85\uB9AC\uD559 \uC6D0\uC804 \uACE0\uC804\uD574\uC124 \uB354\uBCF4\uAE30" }),
            /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[18px]", id: "deepReadingIcon", children: "expand_more" })
          ] }),
          /* @__PURE__ */ jsxs10("div", { className: "hidden mt-space-sm p-space-sm bg-surface-container-low rounded-lg relative", id: "classicalCallout", children: [
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1.5 mb-1 text-secondary font-label-sm text-label-sm font-semibold", children: [
              /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[16px]", children: "menu_book" }),
              /* @__PURE__ */ jsx10("span", { className: "", children: "\uC801\uCC9C\uC218(\u6EF4\u5929\u9AD3) \uC6D0\uBB38 \uD574\uC11D" })
            ] }),
            /* @__PURE__ */ jsxs10("p", { className: "font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed", children: [
              '"\u4E19\u706B\u731B\u70C8, \u6B3A\u971C\u4FAE\u96EA. \u80FD\u935B\u5E9A\u91D1, \u9022\u8F9B\u53CD\u602F."',
              /* @__PURE__ */ jsx10("br", {}),
              " ",
              "(\uBCD1\uD654\uB294 \uB9F9\uB82C\uD558\uC5EC \uC11C\uB9AC\uC640 \uB208\uC744 \uC5C5\uC2E0\uC5EC\uAE30\uACE0, \uB2E8\uB2E8\uD55C \uACBD\uAE08\uC744 \uC81C\uB828\uD558\uB098 \uC720\uC5F0\uD55C \uC2E0\uAE08\uC744 \uB9CC\uB098\uBA74 \uD654\uD569\uD55C\uB2E4.)"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx10("div", { className: "w-full mt-space-xs mb-space-sm", children: /* @__PURE__ */ jsxs10("button", { className: "w-full bg-primary-container text-on-primary p-space-md rounded-xl shadow-md flex items-center justify-between group active:scale-[0.99] transition-transform", id: "askAiModalTrigger", type: "button", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-space-sm text-left", children: [
          /* @__PURE__ */ jsx10("div", { className: "w-10 h-10 rounded-full bg-surface-container-lowest/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-secondary-fixed text-[24px]", children: "psychology" }) }),
          /* @__PURE__ */ jsxs10("div", { children: [
            /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx10("span", { className: "font-title-md text-title-md text-white font-semibold", children: "AI \uC0AC\uC8FC\uC5D0\uAC8C \uC9C1\uC811 \uBB3B\uAE30" }),
              /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[18px] text-secondary-fixed", children: "auto_awesome" })
            ] }),
            /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm text-on-primary-container block mt-0.5", children: "\uB0B4 \uBCD1\uD654(\u4E19\u706B) \uC6D0\uAD6D\uC744 \uAE30\uBC18\uC73C\uB85C \uC2E4\uC2DC\uAC04 \uC2EC\uCE35 \uC0C1\uB2F4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-white text-[22px] group-hover:translate-x-1 transition-transform", children: "chevron_right" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx10("nav", { className: "fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)]", "data-active-classes": "text-primary-container font-semibold", children: /* @__PURE__ */ jsxs10("div", { className: "flex justify-around items-center h-16 px-gutter", children: [
      /* @__PURE__ */ jsxs10("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "home", href: "#", children: [
        /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[22px]", children: "home" }),
        /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm mt-1", children: "\uD648" })
      ] }),
      /* @__PURE__ */ jsxs10("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-primary-container font-semibold transition-colors", "data-path": "my-saju", href: "#", children: [
        /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[22px]", children: "calendar_month" }),
        /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB0B4 \uC0AC\uC8FC" })
      ] }),
      /* @__PURE__ */ jsxs10("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "ai-chat", href: "#", children: [
        /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[22px]", children: "forum" }),
        /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm mt-1", children: "AI \uC0C1\uB2F4" })
      ] }),
      /* @__PURE__ */ jsxs10("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "more", href: "#", children: [
        /* @__PURE__ */ jsx10("span", { className: "material-symbols-outlined text-[22px]", children: "more_horiz" }),
        /* @__PURE__ */ jsx10("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB354\uBCF4\uAE30" })
      ] })
    ] }) })
  ] });
}

// src/screens/DaeunFlow.tsx
import { Fragment as Fragment11, jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
var BODY_CLASS11 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";
function DaeunFlow() {
  useBodyClass(BODY_CLASS11);
  return /* @__PURE__ */ jsxs11(Fragment11, { children: [
    /* @__PURE__ */ jsx11("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe", children: /* @__PURE__ */ jsxs11("div", { className: "h-16 px-margin flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx11("button", { "aria-label": "\uB4A4\uB85C\uAC00\uAE30", className: "w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface", type: "button", children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back" }) }),
        /* @__PURE__ */ jsx11("h1", { className: "font-headline-md text-headline-md text-on-surface tracking-tight ml-1", children: "\uB300\uC6B4 \uD750\uB984" })
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx11("button", { "aria-label": "\uB3C4\uC6C0\uB9D0 \uC548\uB0B4", className: "w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors", type: "button", children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[20px]", children: "help_outline" }) }),
        /* @__PURE__ */ jsx11("button", { "aria-label": "\uACF5\uC720\uD558\uAE30", className: "w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors", type: "button", children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[20px]", children: "share" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx11("main", { className: "flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface", children: /* @__PURE__ */ jsxs11("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ jsxs11("div", { className: "relative w-full px-margin pt-space-md pb-space-xs", children: [
        " ",
        /* @__PURE__ */ jsxs11("div", { className: "bg-surface-container-low rounded-xl p-space-md shadow-sm flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-space-sm min-w-0", children: [
            /* @__PURE__ */ jsx11("div", { className: "w-10 h-10 rounded-full bg-primary-container text-secondary-container flex items-center justify-center shrink-0 shadow-sm", children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[20px]", style: { fontVariationSettings: "'FILL' 1" }, children: "cyclone" }) }),
            /* @__PURE__ */ jsxs11("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-space-xs", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uAE40\uD558\uB298 \uB2D8" }),
                /* @__PURE__ */ jsx11("span", { className: "px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm", children: "\uC21C\uD589 2\uC6B4" })
              ] }),
              /* @__PURE__ */ jsx11("p", { className: "font-label-md text-label-md text-on-surface-variant mt-0.5 truncate", children: "\uB300\uC6B4\uC218 2 \xB7 10\uB144 \uC8FC\uAE30 \uD658\uACBD \uBCC0\uD654" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs11("div", { className: "text-right shrink-0 pl-space-xs", children: [
            /* @__PURE__ */ jsx11("span", { className: "block font-label-sm text-label-sm text-secondary tracking-widest uppercase", children: "CURRENT" }),
            /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-primary-container font-semibold", children: "32-41\uC138" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx11("section", { className: "px-margin mt-space-md", children: /* @__PURE__ */ jsxs11("div", { className: "bg-surface-container-lowest rounded-xl p-space-md shadow-sm", children: [
        /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between mb-space-sm", children: [
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-wider block", children: "TRAJECTORY" }),
            /* @__PURE__ */ jsx11("h2", { className: "font-headline-md text-headline-md text-on-surface mt-0.5", children: "\uD3C9\uC0DD \uC6B4\uC138 \uD750\uB984\uB3C4" })
          ] }),
          /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container", children: [
            /* @__PURE__ */ jsx11("span", { className: "w-2 h-2 rounded-full bg-secondary animate-pulse" }),
            /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm font-medium", children: "\uD604\uC7AC: 88\uC810 (\uB300\uB3C4\uC57D\uAE30)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "relative w-full mt-space-sm", children: [
          " ",
          /* @__PURE__ */ jsxs11("svg", { className: "w-full h-44 overflow-visible", preserveAspectRatio: "none", viewBox: "0 0 360 170", children: [
            /* @__PURE__ */ jsxs11("defs", { children: [
              /* @__PURE__ */ jsxs11("linearGradient", { id: "currentColGrad", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ jsx11("stop", { offset: "0%", stopColor: "#fed488", stopOpacity: "0.35" }),
                /* @__PURE__ */ jsx11("stop", { offset: "100%", stopColor: "#fed488", stopOpacity: "0.0" })
              ] }),
              /* @__PURE__ */ jsxs11("linearGradient", { id: "chartLineGrad", x1: "0", x2: "0", y1: "0", y2: "1", children: [
                /* @__PURE__ */ jsx11("stop", { offset: "0%", stopColor: "#131B2E", stopOpacity: "0.18" }),
                /* @__PURE__ */ jsx11("stop", { offset: "100%", stopColor: "#131B2E", stopOpacity: "0.0" })
              ] }),
              /* @__PURE__ */ jsx11("filter", { height: "200%", id: "auraGlow", width: "200%", x: "-50%", y: "-50%", children: /* @__PURE__ */ jsx11("feDropShadow", { dx: "0", dy: "2", floodColor: "#775a19", floodOpacity: "0.35", stdDeviation: "3" }) })
            ] }),
            /* @__PURE__ */ jsx11("line", { stroke: "#efeeea", strokeDasharray: "3 3", strokeWidth: "1", x1: "20", x2: "345", y1: "35", y2: "35" }),
            /* @__PURE__ */ jsx11("line", { stroke: "#efeeea", strokeDasharray: "3 3", strokeWidth: "1", x1: "20", x2: "345", y1: "80", y2: "80" }),
            /* @__PURE__ */ jsx11("line", { stroke: "#efeeea", strokeDasharray: "3 3", strokeWidth: "1", x1: "20", x2: "345", y1: "125", y2: "125" }),
            /* @__PURE__ */ jsx11("rect", { fill: "url(#currentColGrad)", height: "120", rx: "6", width: "60", x: "125", y: "15" }),
            /* @__PURE__ */ jsx11("path", { d: "M 30,118 \n                   C 65,115 75,95 95,90 \n                   C 115,85 130,48 155,42 \n                   C 185,35 195,25 218,22 \n                   C 245,20 260,60 280,68 \n                   C 305,76 325,82 335,85 \n                   L 335,135 L 30,135 Z", fill: "url(#chartLineGrad)" }),
            /* @__PURE__ */ jsx11("path", { d: "M 30,118 \n                   C 65,115 75,95 95,90 \n                   C 115,85 130,48 155,42 \n                   C 185,35 195,25 218,22 \n                   C 245,20 260,60 280,68 \n                   C 305,76 325,82 335,85", fill: "none", stroke: "#131B2E", strokeLinecap: "round", strokeWidth: "2.5" }),
            " ",
            /* @__PURE__ */ jsx11("circle", { cx: "30", cy: "118", fill: "#ffffff", r: "3.5", stroke: "#76777d", strokeWidth: "2" }),
            /* @__PURE__ */ jsx11("circle", { cx: "95", cy: "90", fill: "#ffffff", r: "3.5", stroke: "#76777d", strokeWidth: "2" }),
            /* @__PURE__ */ jsx11("circle", { className: "animate-ping", cx: "155", cy: "42", fill: "#fed488", fillOpacity: "0.45", r: "10" }),
            /* @__PURE__ */ jsx11("circle", { cx: "155", cy: "42", fill: "#131B2E", filter: "url(#auraGlow)", r: "6", stroke: "#ffdea5", strokeWidth: "2.5" }),
            /* @__PURE__ */ jsx11("circle", { cx: "155", cy: "42", fill: "#ffffff", r: "2" }),
            /* @__PURE__ */ jsx11("circle", { cx: "218", cy: "22", fill: "#775a19", r: "4.5", stroke: "#fed488", strokeWidth: "1.5" }),
            /* @__PURE__ */ jsx11("circle", { cx: "280", cy: "68", fill: "#ffffff", r: "3.5", stroke: "#76777d", strokeWidth: "2" }),
            /* @__PURE__ */ jsx11("circle", { cx: "335", cy: "85", fill: "#ffffff", r: "3.5", stroke: "#76777d", strokeWidth: "2" }),
            /* @__PURE__ */ jsxs11("g", { transform: "translate(118, 5)", children: [
              /* @__PURE__ */ jsx11("rect", { fill: "#131B2E", height: "20", rx: "4", width: "74" }),
              /* @__PURE__ */ jsx11("text", { fill: "#ffdea5", fontFamily: "Noto Sans", fontSize: "9", fontWeight: "600", textAnchor: "middle", x: "37", y: "14", children: "\uD604\uC7AC \uB300\uC6B4 (88\uC810)" })
            ] }),
            /* @__PURE__ */ jsx11("text", { fill: "#76777d", fontFamily: "Noto Sans", fontSize: "10", textAnchor: "middle", x: "30", y: "152", children: "12\uC138~" }),
            /* @__PURE__ */ jsx11("text", { fill: "#76777d", fontFamily: "Noto Sans", fontSize: "10", textAnchor: "middle", x: "95", y: "152", children: "22\uC138~" }),
            /* @__PURE__ */ jsx11("text", { fill: "#131B2E", fontFamily: "Noto Sans", fontSize: "11", fontWeight: "700", textAnchor: "middle", x: "155", y: "152", children: "32\uC138~" }),
            /* @__PURE__ */ jsx11("text", { fill: "#775a19", fontFamily: "Noto Sans", fontSize: "10", fontWeight: "600", textAnchor: "middle", x: "218", y: "152", children: "42\uC138~\u2605" }),
            /* @__PURE__ */ jsx11("text", { fill: "#76777d", fontFamily: "Noto Sans", fontSize: "10", textAnchor: "middle", x: "280", y: "152", children: "52\uC138~" }),
            /* @__PURE__ */ jsx11("text", { fill: "#76777d", fontFamily: "Noto Sans", fontSize: "10", textAnchor: "middle", x: "335", y: "152", children: "62\uC138~" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "mt-space-xs pt-space-xs flex items-center justify-between text-on-surface-variant", children: [
          /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[15px] text-secondary", children: "trending_up" }),
            /* @__PURE__ */ jsx11("span", { className: "font-label-md text-label-md", children: "32\uC138 \uAE30\uC810\uC73C\uB85C \uC0C1\uC2B9\uACE1\uC120 \uC9C4\uC785 \xB7 42\uC138 \uACBD\uC9C4\uB300\uC6B4 \uCD5C\uC815\uC810" })
          ] }),
          /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-secondary font-semibold", children: "\uBAA9\uD654\uD1B5\uBA85(\u6728\u706B\u901A\u660E)" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs11("section", { className: "mt-space-lg w-full", children: [
        /* @__PURE__ */ jsxs11("div", { className: "px-margin flex items-baseline justify-between mb-space-xs", children: [
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-wider block", children: "TIMELINE" }),
            /* @__PURE__ */ jsx11("h2", { className: "font-headline-md text-headline-md text-on-surface", children: "10\uB144 \uB300\uC6B4 \uC8FC\uAE30 (\u5927\u904B\u5E72\u652F)" })
          ] }),
          /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC88C\uC6B0\uB85C \uB118\uACA8\uBCF4\uAE30" })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "flex gap-space-sm overflow-x-auto px-margin pt-space-xs pb-space-md snap-x scroll-smooth", style: { scrollbarWidth: "none" }, children: [
          /* @__PURE__ */ jsxs11("button", { className: "snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95", type: "button", children: [
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant", children: "12 - 21\uC138" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC9C0\uB0A8" })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "my-space-sm flex justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#C84B31" }, children: "\u4E01" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC815\uD654(\u706B)" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#D99B26" }, children: "\u4E11" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uCD95\uD1A0(\u571F)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface block", children: "\uC815\uCD95 (\u4E01\u4E11)" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC2DD\uC2E0 / \uC815\uC7AC" })
              ] })
            ] }),
            /* @__PURE__ */ jsx11("div", { className: "mt-space-sm pt-space-xs text-center", children: /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant truncate block", children: "\uD559\uBB38 \uD0D0\uAD6C\uAE30" }) })
          ] }),
          /* @__PURE__ */ jsxs11("button", { className: "snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95", type: "button", children: [
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant", children: "22 - 31\uC138" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC9C0\uB0A8" })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "my-space-sm flex justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#D99B26" }, children: "\u620A" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uBB34\uD1A0(\u571F)" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#3E7B5C" }, children: "\u5BC5" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC778\uBAA9(\u6728)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface block", children: "\uBB34\uC778 (\u620A\u5BC5)" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC815\uAD00 / \uBE44\uACAC" })
              ] })
            ] }),
            /* @__PURE__ */ jsx11("div", { className: "mt-space-sm pt-space-xs text-center", children: /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant truncate block", children: "\uC0AC\uD68C \uC785\uBB38\xB7\uC218\uB828" }) })
          ] }),
          /* @__PURE__ */ jsxs11("button", { className: "snap-start shrink-0 w-40 rounded-xl p-space-sm bg-primary-container text-on-primary text-left shadow-md flex flex-col justify-between relative transition-transform active:scale-95", type: "button", children: [
            /* @__PURE__ */ jsx11("span", { className: "absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold shadow-sm", children: "\uC9C4\uD589\uC911 (3\uB144\uCC28)" }),
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-white/10 text-secondary-fixed", children: "32 - 41\uC138" }),
                /* @__PURE__ */ jsxs11("span", { className: "font-label-sm text-label-sm text-secondary-container flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[13px]", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
                  "\uD604\uC7AC"
                ] })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "my-space-sm flex justify-center gap-2", children: [
                /* @__PURE__ */ jsxs11("div", { className: "w-12 h-14 rounded-lg bg-white/10 flex flex-col items-center justify-center shadow-inner", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight text-secondary-container", children: "\u5DF1" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-primary-fixed-dim", children: "\uD1A0(\u571F)" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "w-12 h-14 rounded-lg bg-white/10 flex flex-col items-center justify-center shadow-inner", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#95d4b0" }, children: "\u536F" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-primary-fixed-dim", children: "\uBAA9(\u6728)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-white block", children: "\uAE30\uBB18 (\u5DF1\u536F)" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-secondary-fixed", children: "\uC0C1\uAD00 / \uC815\uC778 \uC870\uD654" })
              ] })
            ] }),
            /* @__PURE__ */ jsx11("div", { className: "mt-space-sm pt-space-xs text-center bg-white/5 rounded-lg py-1", children: /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-secondary-container font-medium block", children: "\uB3C4\uC57D \uBC0F \uACB0\uC2E4 \uC2DC\uC791" }) })
          ] }),
          /* @__PURE__ */ jsxs11("button", { className: "snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95", type: "button", children: [
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container/40 text-on-secondary-container font-semibold", children: "42 - 51\uC138" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-secondary font-medium", children: "\uD669\uAE08\uAE30" })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "my-space-sm flex justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#94A3B8" }, children: "\u5E9A" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uACBD\uAE08(\u91D1)" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#D99B26" }, children: "\u8FB0" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC9C4\uD1A0(\u571F)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface block", children: "\uACBD\uC9C4 (\u5E9A\u8FB0)" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC815\uC7AC / \uAC81\uC7AC" })
              ] })
            ] }),
            /* @__PURE__ */ jsx11("div", { className: "mt-space-sm pt-space-xs text-center", children: /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-secondary font-semibold truncate block", children: "\uC778\uC0DD \uCD5C\uACE0 \uC804\uC131\uAE30" }) })
          ] }),
          /* @__PURE__ */ jsxs11("button", { className: "snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95", type: "button", children: [
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant", children: "52 - 61\uC138" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC608\uC815" })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "my-space-sm flex justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#94A3B8" }, children: "\u8F9B" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC2E0\uAE08(\u91D1)" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#C84B31" }, children: "\u5DF3" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC0AC\uD654(\u706B)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface block", children: "\uC2E0\uC0AC (\u8F9B\u5DF3)" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD3B8\uC7AC / \uC815\uAD00" })
              ] })
            ] }),
            /* @__PURE__ */ jsx11("div", { className: "mt-space-sm pt-space-xs text-center", children: /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant truncate block", children: "\uC548\uC815\uC801 \uC790\uC0B0 \uC644\uC131" }) })
          ] }),
          /* @__PURE__ */ jsxs11("button", { className: "snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95", type: "button", children: [
            /* @__PURE__ */ jsxs11("div", { children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant", children: "62 - 71\uC138" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC608\uC815" })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "my-space-sm flex justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#1E293B" }, children: "\u58EC" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC784\uC218(\u6C34)" })
                ] }),
                /* @__PURE__ */ jsxs11("div", { className: "w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx11("span", { className: "font-headline-md text-headline-md leading-tight", style: { color: "#C84B31" }, children: "\u5348" }),
                  /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC624\uD654(\u706B)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface block", children: "\uC784\uC624 (\u58EC\u5348)" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD3B8\uAD00 / \uD3B8\uC778" })
              ] })
            ] }),
            /* @__PURE__ */ jsx11("div", { className: "mt-space-sm pt-space-xs text-center", children: /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant truncate block", children: "\uC5EC\uC720\uC640 \uBA85\uC608 \uC804\uC218" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx11("section", { className: "px-margin mt-space-sm mb-space-md", children: /* @__PURE__ */ jsxs11("div", { className: "bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md", children: [
        /* @__PURE__ */ jsxs11("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs11("div", { children: [
            /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-space-xs mb-1", children: [
              /* @__PURE__ */ jsx11("span", { className: "px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold", children: "\uD604\uC7AC \uBD84\uC11D \uC911" }),
              /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "2025 ~ 2034\uB144 (\uB9CC 32~41\uC138)" })
            ] }),
            /* @__PURE__ */ jsx11("h3", { className: "font-headline-md text-headline-md text-on-surface", children: "\u5DF1\u536F(\uAE30\uBB18) \uB300\uC6B4 \uC885\uD569 \uC2EC\uCE35 \uBD84\uC11D" })
          ] }),
          /* @__PURE__ */ jsx11("div", { className: "w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shrink-0", children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[20px]", style: { fontVariationSettings: "'FILL' 1" }, children: "menu_book" }) })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "p-space-md rounded-lg bg-surface-container-low", children: [
          /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-2 mb-1.5", children: [
            /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[18px] text-secondary", children: "eco" }),
            /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface", children: "\uB300\uC6B4\uC758 \uBCF8\uC9C8: \uC724\uD1A0\uC0DD\uBAA9(\u6F64\u571F\u751F\u6728)" })
          ] }),
          /* @__PURE__ */ jsx11("p", { className: "font-body-md text-body-md text-on-surface-variant leading-relaxed", children: "\uCD09\uCD09\uD55C \uC804\uB2F5\uC758 \uD759(\u5DF1\u571F)\uC774 \uD30C\uB987\uD55C \uBD04\uB098\uBB34(\u536F\u6728)\uC758 \uBFCC\uB9AC\uB97C \uD3EC\uADFC\uD788 \uD488\uC5B4\uC8FC\uB294 \uD615\uC0C1\uC785\uB2C8\uB2E4. \uC9C0\uB09C 10\uB144\uAC04 \uC313\uC544\uC628 \uB0B4\uBA74\uC758 \uC528\uC557\uACFC \uBB34\uD615\uC758 \uC7AC\uB2A5\uC774 \uBE44\uB85C\uC18C \uC0AC\uD68C\uC801 \uACB0\uC2E4\uACFC \uC2E4\uC9C8\uC801\uC778 \uC9C0\uC704\uB85C \uD53C\uC5B4\uC624\uB974\uB294 \uB3C4\uC57D\uC758 10\uB144\uC785\uB2C8\uB2E4." })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "space-y-space-sm", children: [
          /* @__PURE__ */ jsxs11("div", { className: "p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm", children: [
            /* @__PURE__ */ jsx11("div", { className: "w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm", style: { color: "#3E7B5C" }, children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[20px]", children: "workspace_premium" }) }),
            /* @__PURE__ */ jsxs11("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC9C1\uC5C5 \xB7 \uC0AC\uD68C\uC6B4" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-medium", children: "\uC0C1\uC2B9 \uADA4\uB3C4" })
              ] }),
              /* @__PURE__ */ jsx11("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed", children: "\uB3C5\uC790\uC801 \uC804\uBB38\uC131\uC744 \uC778\uC815\uBC1B\uC544 \uD504\uB85C\uC81D\uD2B8\uC758 \uD575\uC2EC \uC8FC\uB3C4\uAD8C\uC744 \uC950\uAC8C \uB429\uB2C8\uB2E4. \uB0A8\uC744 \uB530\uB974\uAE30\uBCF4\uB2E4 \uBCF8\uC778\uC758 \uAE30\uD68D\uACFC \uC544\uC774\uB514\uC5B4\uB85C \uD300\uC744 \uC774\uB04C\uC5B4\uAC08 \uB54C \uAC00\uC7A5 \uD070 \uC6B4\uC758 \uC870\uB825\uC744 \uBC1B\uC2B5\uB2C8\uB2E4." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs11("div", { className: "p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm", children: [
            /* @__PURE__ */ jsx11("div", { className: "w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm", style: { color: "#D99B26" }, children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[20px]", children: "account_balance" }) }),
            /* @__PURE__ */ jsxs11("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC7AC\uBB3C \xB7 \uC790\uC0B0\uC6B4" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-medium", children: "\uBB38\uC11C\uD654 \uCD94\uCC9C" })
              ] }),
              /* @__PURE__ */ jsx11("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed", children: "\uB2E8\uAE30 \uD22C\uAE30\uD615 \uC774\uC775\uBCF4\uB2E4\uB294 \uBD80\uB3D9\uC0B0, \uC9C0\uC2DD\uC7AC\uC0B0\uAD8C \uB4F1 \uC548\uC804\uD55C '\uBB38\uC11C(\u5370\u7DAC)' \uD615\uD0DC\uB85C \uC790\uC0B0\uC744 \uBB36\uC5B4\uB450\uB294 \uAC83\uC774 \uB9E4\uC6B0 \uC720\uB9AC\uD569\uB2C8\uB2E4. 36\uC138 \uC804\uD6C4\uB85C \uC2E4\uBB3C \uC790\uC0B0 \uCDE8\uB4DD \uC6B4\uC774 \uAC15\uD558\uAC8C \uB4E4\uC5B4\uC635\uB2C8\uB2E4." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs11("div", { className: "p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm", children: [
            /* @__PURE__ */ jsx11("div", { className: "w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm", style: { color: "#565e74" }, children: /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[20px]", children: "self_improvement" }) }),
            /* @__PURE__ */ jsxs11("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx11("span", { className: "font-title-md text-title-md text-on-surface", children: "\uAC74\uAC15 \xB7 \uB9C8\uC74C\uAC00\uC9D0" }),
                /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium", children: "\uCCB4\uB825 \uC548\uBC30" })
              ] }),
              /* @__PURE__ */ jsx11("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed", children: "\uC131\uC7A5 \uC695\uAD6C\uAC00 \uAC15\uD574\uC9C8\uC218\uB85D \uAC04(\u6728)\uACFC \uC18C\uD654\uAE30(\u571F)\uC758 \uD53C\uB85C\uAC00 \uB204\uC801\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADDC\uCE59\uC801\uC778 \uC0B0\uCC45\uACFC \uBA85\uC0C1\uC73C\uB85C \uACFC\uB3C4\uD55C \uC2E0\uACBD \uC608\uBBFC\uC744 \uC644\uD654\uD558\uB294 \uC0DD\uD65C \uC2B5\uAD00\uC774 \uD544\uC218\uC801\uC785\uB2C8\uB2E4." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs11("div", { className: "relative p-space-md rounded-lg bg-surface-container-high overflow-hidden", children: [
          /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-space-xs mb-1.5 text-secondary", children: [
            /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[18px]", children: "history_edu" }),
            /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm tracking-wider uppercase font-semibold", children: "\uACE0\uC804 \uBA85\uB9AC \uC870\uC5B8 \xB7 \uC801\uCC9C\uC218(\u9069\u5929\u9AD3)" })
          ] }),
          /* @__PURE__ */ jsx11("blockquote", { className: "font-headline-md text-headline-md text-on-surface italic leading-relaxed", children: "\u201C\uBB18\uBAA9\uC774 \uBE44\uC625\uD55C \uD1A0\uC591\uC744 \uB9CC\uB098 \uADF8 \uBFCC\uB9AC\uB97C \uAE4A\uAC8C \uB0B4\uB9AC\uB2C8, \uC870\uAE09\uD574\uD558\uC9C0 \uC54A\uC544\uB3C4 \uC2DC\uC808\uC758 \uC778\uC5F0\uC740 \uC800\uC808\uB85C \uD53C\uC5B4\uB09C\uB2E4.\u201D" }),
          /* @__PURE__ */ jsx11("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-space-xs", children: "\uB208\uC55E\uC758 \uC131\uACFC\uB97C \uC11C\uB458\uB7EC \uC7AC\uCD09\uD558\uAE30\uBCF4\uB2E4, \uAE30\uCD08\uB97C \uB2E8\uB2E8\uD788 \uB2E4\uC9C0\uB294 \uC0AC\uB78C\uC5D0\uAC8C 42\uC138 \uB300\uC6B4\uC758 \uAC70\uB300\uD55C \uC601\uD654(\u69AE\u83EF)\uAC00 \uC628\uC804\uD788 \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx11("section", { className: "px-margin mb-space-lg", children: /* @__PURE__ */ jsxs11("div", { className: "p-space-md rounded-xl bg-primary-container text-on-primary shadow-md flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs11("div", { className: "min-w-0 pr-space-sm", children: [
          /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm text-secondary-container block mb-0.5", children: "AI \uB9DE\uCDA4 \uBA85\uB9AC \uC0C1\uB2F4" }),
          /* @__PURE__ */ jsx11("h4", { className: "font-title-md text-title-md text-white truncate", children: "\uD604\uC7AC \uAE30\uBB18 \uB300\uC6B4, \uC62C\uD574(\u4E59\u5DF3\uB144)\uB294 \uC5B4\uB5A8\uAE4C?" }),
          /* @__PURE__ */ jsx11("p", { className: "font-body-sm text-body-sm text-primary-fixed-dim mt-0.5 truncate", children: "\uB300\uC6B4\uACFC \uC138\uC6B4(1\uB144 \uC6B4)\uC758 \uC870\uD654 \uC2EC\uCE35 \uC9C8\uBB38\uD558\uAE30" })
        ] }),
        /* @__PURE__ */ jsxs11("button", { className: "shrink-0 px-space-md py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-title-md text-title-md font-semibold hover:bg-secondary-fixed transition-colors flex items-center gap-1 shadow-sm", type: "button", children: [
          /* @__PURE__ */ jsx11("span", { className: "", children: "\uC9C8\uBB38\uD558\uAE30" }),
          /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[18px]", children: "arrow_forward" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx11("nav", { className: "fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)]", "data-active-classes": "text-primary-container font-semibold", children: /* @__PURE__ */ jsxs11("div", { className: "flex justify-around items-center h-16 px-gutter", children: [
      /* @__PURE__ */ jsxs11("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "home", href: "#", children: [
        /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[22px]", children: "home" }),
        /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm mt-1", children: "\uD648" })
      ] }),
      /* @__PURE__ */ jsxs11("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-primary-container font-semibold transition-colors", "data-path": "my-saju", href: "#", children: [
        /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[22px]", style: { fontVariationSettings: "'FILL' 1" }, children: "calendar_view_week" }),
        /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB0B4 \uC0AC\uC8FC" })
      ] }),
      /* @__PURE__ */ jsxs11("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "ai-chat", href: "#", children: [
        /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[22px]", children: "chat" }),
        /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm mt-1", children: "AI \uC0C1\uB2F4" })
      ] }),
      /* @__PURE__ */ jsxs11("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "more", href: "#", children: [
        /* @__PURE__ */ jsx11("span", { className: "material-symbols-outlined text-[22px]", children: "more_horiz" }),
        /* @__PURE__ */ jsx11("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB354\uBCF4\uAE30" })
      ] })
    ] }) })
  ] });
}

// src/screens/SavedSaju.tsx
import { useEffect as useEffect6 } from "react";
import { Fragment as Fragment12, jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
var BODY_CLASS12 = "bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen";
function SavedSaju() {
  useBodyClass(BODY_CLASS12);
  useEffect6(() => {
    const swipedCard = query(".-translate-x-32");
    if (swipedCard) {
      swipedCard.addEventListener("click", () => {
        if (swipedCard.classList.contains("-translate-x-32")) {
          swipedCard.classList.remove("-translate-x-32");
        } else {
          swipedCard.classList.add("-translate-x-32");
        }
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs12(Fragment12, { children: [
    /* @__PURE__ */ jsx12("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(19,27,46,0.03)] pt-safe", children: /* @__PURE__ */ jsxs12("div", { className: "h-14 px-margin-mobile flex items-center justify-between relative", children: [
      /* @__PURE__ */ jsx12(
        "button",
        {
          "aria-label": "\uB4A4\uB85C \uAC00\uAE30",
          className: "w-11 h-11 -ml-space-xs flex items-center justify-center text-on-primary-fixed active:opacity-60 transition-opacity",
          onClick: () => history.back(),
          type: "button",
          children: /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back_ios_new" })
        }
      ),
      /* @__PURE__ */ jsx12("div", { className: "absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none max-w-[60%]", children: /* @__PURE__ */ jsx12("h1", { className: "font-headline-md text-headline-md text-on-primary-fixed tracking-tight truncate", children: "\uC800\uC7A5\uB41C \uC0AC\uC8FC" }) }),
      /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-end gap-space-sm", children: [
        /* @__PURE__ */ jsx12("button", { className: "min-w-[44px] h-11 px-space-xs flex items-center justify-center font-label-lg text-label-lg text-secondary active:opacity-60 transition-opacity", type: "button", children: "\uD3B8\uC9D1" }),
        /* @__PURE__ */ jsx12("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-on-primary text-[18px]", children: "person" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx12("main", { className: "flex flex-col relative w-full pt-14 bg-surface pb-safe flex-1", children: /* @__PURE__ */ jsxs12("div", { className: "flex flex-col w-full px-margin-mobile pb-space-xl", children: [
      /* @__PURE__ */ jsxs12("section", { className: "mt-space-md mb-space-lg flex flex-col gap-space-xs", children: [
        /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-space-xs", children: [
            /* @__PURE__ */ jsx12("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
            /* @__PURE__ */ jsx12("span", { className: "font-label-md text-label-md text-secondary tracking-widest", children: "\uBA85\uC2DD \uBCF4\uAD00\uD568" })
          ] }),
          /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md", children: [
            /* @__PURE__ */ jsx12("span", { children: "\uC800\uC7A5 \uC778\uC6D0" }),
            /* @__PURE__ */ jsx12("span", { className: "font-title-md text-on-surface text-[12px] leading-none", children: "3" }),
            /* @__PURE__ */ jsx12("span", { className: "text-outline-variant", children: "/" }),
            /* @__PURE__ */ jsx12("span", { className: "text-on-surface-variant text-[11px] leading-none", children: "5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs12("p", { className: "font-headline-md text-headline-md text-on-primary-fixed mt-1", children: [
          "\uC18C\uC911\uD55C \uC778\uC5F0\uB4E4\uC758 \uC0AC\uC8FC\uB97C \uBCF4\uAD00\uD558\uACE0",
          /* @__PURE__ */ jsx12("br", {}),
          "\uC5B8\uC81C\uB4E0 \uC6B4\uACFC \uAD81\uD569\uC744 \uC0B4\uD3B4\uBCF4\uC138\uC694."
        ] })
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: "flex flex-col gap-space-md w-full", id: "profile-container", children: [
        /* @__PURE__ */ jsx12("div", { className: "relative w-full rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] overflow-hidden transition-all duration-300 active:scale-[0.995]", children: /* @__PURE__ */ jsxs12("div", { className: "p-space-md flex items-center justify-between gap-space-sm", children: [
          /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-space-md min-w-0", children: [
            /* @__PURE__ */ jsxs12("div", { className: "relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#fbf6ec]", children: [
              /* @__PURE__ */ jsx12("div", { className: "w-3.5 h-3.5 rounded-full bg-[#c28e2e] shadow-sm flex items-center justify-center", children: /* @__PURE__ */ jsx12("span", { className: "w-1 h-1 rounded-full bg-[#fbf6ec]/80" }) }),
              /* @__PURE__ */ jsx12("span", { className: "absolute -bottom-1 text-[9px] font-label-sm text-[#785a1a] bg-[#f5ecda] px-1.5 py-0.2 rounded-full", children: "\uD1A0(\u571F)" })
            ] }),
            /* @__PURE__ */ jsxs12("div", { className: "flex flex-col min-w-0", children: [
              /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-space-xs mb-0.5", children: [
                /* @__PURE__ */ jsx12("span", { className: "px-1.5 py-0.5 rounded bg-primary-container text-surface font-label-sm text-label-sm", children: "\uB098" }),
                /* @__PURE__ */ jsx12("h2", { className: "font-headline-md text-headline-md text-on-surface truncate", children: "\uAE40\uC9C4\uD558" }),
                /* @__PURE__ */ jsxs12("div", { className: "px-2 py-0.5 rounded-full bg-surface-container text-on-primary-fixed font-headline-md text-[13px] tracking-wide ml-1", children: [
                  "\u620A\u7533",
                  " ",
                  /* @__PURE__ */ jsx12("span", { className: "font-body-sm text-[11px] text-on-surface-variant font-normal", children: "\uBB34\uC2E0" })
                ] })
              ] }),
              /* @__PURE__ */ jsx12("p", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "1994.08.24 14:15 \xB7 \uC5EC\uC131 (\uC591\uB825)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx12("div", { className: "flex items-center flex-shrink-0 text-on-surface-variant pl-1", children: /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[20px] text-outline-variant", children: "chevron_right" }) })
        ] }) }),
        /* @__PURE__ */ jsxs12("div", { className: "relative w-full overflow-hidden rounded-xl bg-surface-container-high", children: [
          /* @__PURE__ */ jsxs12("div", { className: "absolute inset-y-0 right-0 flex items-stretch", children: [
            /* @__PURE__ */ jsxs12("button", { "aria-label": "\uC0AC\uC8FC \uC815\uBCF4 \uC218\uC815", className: "w-16 bg-surface-container-highest text-on-primary-fixed flex flex-col items-center justify-center gap-0.5 active:bg-surface-dim transition-colors", type: "button", children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[20px]", children: "edit_note" }),
              /* @__PURE__ */ jsx12("span", { className: "font-label-sm text-label-sm", children: "\uC218\uC815" })
            ] }),
            /* @__PURE__ */ jsxs12("button", { "aria-label": "\uC0AC\uC8FC \uD504\uB85C\uD544 \uC0AD\uC81C", className: "w-16 bg-[#ba1a1a] text-on-error flex flex-col items-center justify-center gap-0.5 active:opacity-90 transition-opacity", type: "button", children: [
              /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[20px]", children: "delete" }),
              /* @__PURE__ */ jsx12("span", { className: "font-label-sm text-label-sm", children: "\uC0AD\uC81C" })
            ] })
          ] }),
          /* @__PURE__ */ jsx12("div", { className: "relative w-full bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] -translate-x-32 transition-transform duration-300", children: /* @__PURE__ */ jsxs12("div", { className: "p-space-md flex items-center justify-between gap-space-sm", children: [
            /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsxs12("div", { className: "relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#edf2f9]", children: [
                /* @__PURE__ */ jsx12("div", { className: "w-3.5 h-3.5 rounded-full bg-[#2b5876] shadow-sm flex items-center justify-center", children: /* @__PURE__ */ jsx12("span", { className: "w-1 h-1 rounded-full bg-[#edf2f9]/80" }) }),
                /* @__PURE__ */ jsx12("span", { className: "absolute -bottom-1 text-[9px] font-label-sm text-[#1e3b4d] bg-[#dbe5f1] px-1.5 py-0.2 rounded-full", children: "\uC218(\u6C34)" })
              ] }),
              /* @__PURE__ */ jsxs12("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-space-xs mb-0.5", children: [
                  /* @__PURE__ */ jsx12("h2", { className: "font-headline-md text-headline-md text-on-surface truncate", children: "\uC774\uB3C4\uC724" }),
                  /* @__PURE__ */ jsxs12("div", { className: "px-2 py-0.5 rounded-full bg-surface-container text-on-primary-fixed font-headline-md text-[13px] tracking-wide ml-1", children: [
                    "\u58EC\u5B50",
                    " ",
                    /* @__PURE__ */ jsx12("span", { className: "font-body-sm text-[11px] text-on-surface-variant font-normal", children: "\uC784\uC790" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx12("p", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "1992.11.03 08:30 \xB7 \uB0A8\uC131 (\uC74C\uB825)" })
              ] })
            ] }),
            /* @__PURE__ */ jsx12("div", { className: "flex items-center flex-shrink-0 text-on-surface-variant pl-1", children: /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[18px] text-outline-variant", children: "swipe_left" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx12("div", { className: "relative w-full rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] overflow-hidden transition-all duration-300 active:scale-[0.995]", children: /* @__PURE__ */ jsxs12("div", { className: "p-space-md flex items-center justify-between gap-space-sm", children: [
          /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-space-md min-w-0", children: [
            /* @__PURE__ */ jsxs12("div", { className: "relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#fbedeb]", children: [
              /* @__PURE__ */ jsx12("div", { className: "w-3.5 h-3.5 rounded-full bg-[#b84a39] shadow-sm flex items-center justify-center", children: /* @__PURE__ */ jsx12("span", { className: "w-1 h-1 rounded-full bg-[#fbedeb]/80" }) }),
              /* @__PURE__ */ jsx12("span", { className: "absolute -bottom-1 text-[9px] font-label-sm text-[#872d1f] bg-[#f7d7d2] px-1.5 py-0.2 rounded-full", children: "\uD654(\u706B)" })
            ] }),
            /* @__PURE__ */ jsxs12("div", { className: "flex flex-col min-w-0", children: [
              /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-space-xs mb-0.5", children: [
                /* @__PURE__ */ jsx12("h2", { className: "font-headline-md text-headline-md text-on-surface truncate", children: "\uBC15\uC11C\uC5F0" }),
                /* @__PURE__ */ jsxs12("div", { className: "px-2 py-0.5 rounded-full bg-surface-container text-on-primary-fixed font-headline-md text-[13px] tracking-wide ml-1", children: [
                  "\u4E19\u5BC5",
                  " ",
                  /* @__PURE__ */ jsx12("span", { className: "font-body-sm text-[11px] text-on-surface-variant font-normal", children: "\uBCD1\uC778" })
                ] })
              ] }),
              /* @__PURE__ */ jsx12("p", { className: "font-body-sm text-body-sm text-on-surface-variant truncate", children: "1998.05.19 19:40 \xB7 \uC5EC\uC131 (\uC591\uB825)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx12("div", { className: "flex items-center flex-shrink-0 text-on-surface-variant pl-1", children: /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[20px] text-outline-variant", children: "chevron_right" }) })
        ] }) }),
        /* @__PURE__ */ jsxs12("button", { className: "group relative w-full rounded-xl py-5 px-space-md flex flex-col items-center justify-center gap-1.5 bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all active:scale-[0.99]", type: "button", children: [
          /* @__PURE__ */ jsx12("div", { className: "w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary shadow-sm group-hover:scale-105 transition-transform", children: /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[20px]", children: "add" }) }),
          /* @__PURE__ */ jsxs12("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsx12("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC0AC\uC8FC \uCD94\uAC00\uD558\uAE30" }),
            /* @__PURE__ */ jsx12("span", { className: "font-body-sm text-body-sm text-outline-variant mt-0.5", children: "\uAC00\uC871, \uC5F0\uC778, \uB3D9\uB8CC\uC758 \uC0AC\uC8FC\uB97C \uB4F1\uB85D\uD574\uBCF4\uC138\uC694" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs12("footer", { className: "mt-space-lg mb-space-sm flex flex-col items-center justify-center gap-space-xs text-center", children: [
        /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-1 text-outline", children: [
          /* @__PURE__ */ jsx12("span", { className: "material-symbols-outlined text-[15px]", children: "info" }),
          /* @__PURE__ */ jsx12("span", { className: "font-label-md text-label-md text-outline", children: "\uCD5C\uB300 5\uAC1C\uAE4C\uC9C0 \uC0AC\uC8FC\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uC5B4\uC694" })
        ] }),
        /* @__PURE__ */ jsx12("p", { className: "font-body-sm text-body-sm text-outline-variant text-[12px] max-w-[260px] leading-relaxed", children: "\uC800\uC7A5\uB41C \uC0AC\uC8FC\uB294 \uAD81\uD569, \uB300\uC6B4 \uD480\uC774, \uC2E0\uB144 \uC6B4\uC138 \uB4F1\uC5D0\uC11C \uBE60\uB974\uAC8C \uC120\uD0DD\uD558\uC5EC \uBD88\uB7EC\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4." })
      ] })
    ] }) })
  ] });
}

// src/screens/AiChat.tsx
import { Fragment as Fragment13, jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
var BODY_CLASS13 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";
function toggleAccordion(id, btn) {
  const target = byId(id);
  const arrow = query("#accordion-arrow", btn);
  const isExpanded = btn.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    target.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    arrow.classList.remove("rotate-180");
  } else {
    target.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
    arrow.classList.add("rotate-180");
  }
}
function prefillInput(text) {
  const input = byId("chat-input");
  input.value = text ?? "";
  input.focus();
}
function showFeedback(msg) {
  const toast = byId("toast");
  const toastText = byId("toast-text");
  toastText.textContent = msg;
  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");
  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 2400);
}
function handleSend(e) {
  e.preventDefault();
  const input = byId("chat-input");
  const question = input.value.trim();
  if (!question) return;
  showFeedback("\uBA85\uB9AC \uC5D4\uC9C4\uC774 \uC0AC\uC8FC \uC6D0\uAD6D\uC744 \uC870\uD68C \uC911\uC785\uB2C8\uB2E4...");
  input.value = "";
}
function AiChat() {
  useBodyClass(BODY_CLASS13);
  return /* @__PURE__ */ jsxs13(Fragment13, { children: [
    /* @__PURE__ */ jsx13("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe", children: /* @__PURE__ */ jsxs13("div", { className: "h-16 px-margin flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx13(
          "button",
          {
            "aria-label": "\uB4A4\uB85C \uAC00\uAE30",
            className: "w-11 h-11 -ml-2 flex items-center justify-center text-on-surface hover:text-primary transition-colors",
            onClick: () => history.back(),
            type: "button",
            children: /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[24px]", children: "arrow_back" })
          }
        ),
        /* @__PURE__ */ jsxs13("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx13("div", { className: "flex items-baseline gap-space-xs", children: /* @__PURE__ */ jsx13("span", { className: "font-headline-md text-headline-md text-on-surface tracking-tight", children: "AI \uC0C1\uB2F4" }) }),
          /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC2EC\uCE35 \uBB38\uB2F5 \uBC0F \uC0AC\uC8FC \uD574\uC11D" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx13("button", { "aria-label": "\uC0C1\uB2F4 \uC815\uBCF4 \uBCF4\uAE30", className: "w-11 h-11 flex items-center justify-center text-secondary hover:text-on-surface transition-colors", type: "button", children: /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[22px]", children: "auto_awesome" }) }),
        /* @__PURE__ */ jsx13("button", { "aria-label": "\uB354\uBCF4\uAE30", className: "w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors", type: "button", children: /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[22px]", children: "more_vert" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx13("main", { className: "flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface", children: /* @__PURE__ */ jsxs13("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ jsx13("div", { className: "sticky top-16 z-30 bg-surface/95 backdrop-blur-md px-margin-mobile py-space-sm shadow-sm", children: /* @__PURE__ */ jsxs13("div", { className: "flex items-center justify-between gap-space-sm max-w-lg mx-auto", children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-full", children: [
          /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx13("span", { className: "w-2 h-2 rounded-full bg-error", title: "\uD654(\u706B) - \uBCD1\uD654" }),
            /* @__PURE__ */ jsx13("span", { className: "w-2 h-2 rounded-full bg-on-tertiary-container", title: "\uBAA9(\u6728) - \uC778\uBAA9" })
          ] }),
          /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-on-surface-variant font-medium", children: "\uC77C\uC8FC" }),
          /* @__PURE__ */ jsx13("span", { className: "font-label-md text-label-md text-primary-container font-semibold", children: "\u4E19\u5BC5(\uBCD1\uC778)" }),
          /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-on-surface-variant hidden sm:inline", children: "\xB7 \uBD89\uC740 \uD638\uB791\uC774" })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-1 bg-secondary-fixed/40 px-space-sm py-1 rounded-full", children: [
          /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[14px] text-secondary", style: { fontVariationSettings: "'FILL' 1" }, children: "arrow_back_ios_new" }),
          /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-secondary font-semibold", children: "\uBB34\uB8CC \uC9C8\uBB38 2\uD68C" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs13("div", { className: "flex flex-col px-margin-mobile pt-space-md pb-44 space-y-space-lg max-w-lg mx-auto w-full", children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex justify-center items-center gap-space-sm py-1", children: [
          /* @__PURE__ */ jsx13("div", { className: "h-px bg-surface-container-highest flex-1 max-w-[60px]" }),
          /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-outline", children: "2024\uB144 \uAC11\uC9C4\uB144(\u7532\u8FB0\u5E74) \uC2EC\uCE35 \uBB38\uB2F5" }),
          /* @__PURE__ */ jsx13("div", { className: "h-px bg-surface-container-highest flex-1 max-w-[60px]" })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "flex items-start gap-space-sm", children: [
          /* @__PURE__ */ jsx13("div", { className: "flex-shrink-0 w-9 h-9 rounded-full bg-primary-container shadow-sm flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx13("img", { alt: "AI \uC0AC\uC8FC \uBA85\uB9AC\uC0C1\uB2F4\uC18C \uC2EC\uBCFC", className: "w-full h-full object-cover", src: "/assets/img09.png" }) }),
          /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-1 max-w-[85%]", children: [
            /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-space-xs ml-1", children: [
              /* @__PURE__ */ jsx13("span", { className: "font-label-md text-label-md text-on-surface font-semibold", children: "AI \uC0AC\uC8FC \uBA85\uB9AC\uC0C1\uB2F4\uC0AC" }),
              /* @__PURE__ */ jsx13("span", { className: "bg-secondary-fixed/60 text-secondary font-label-sm text-label-sm px-1.5 py-0.5 rounded-full", children: "\uACF5\uC778\uBA85\uB9AC" })
            ] }),
            /* @__PURE__ */ jsxs13("div", { className: "bg-surface-container-lowest p-space-md rounded-xl rounded-tl-none shadow-sm text-on-surface space-y-2", children: [
              /* @__PURE__ */ jsxs13("p", { className: "font-body-md text-body-md leading-relaxed text-on-surface", children: [
                "\uAE40\uD558\uB298\uB2D8\uC758",
                " ",
                /* @__PURE__ */ jsx13("span", { className: "text-secondary font-semibold", children: "\uBCD1\uD654(\u4E19\u706B)" }),
                " ",
                "\uC77C\uAC04\uACFC",
                " ",
                /* @__PURE__ */ jsx13("span", { className: "text-on-tertiary-container font-semibold", children: "\uBAA9\uC0DD\uD654(\u6728\u751F\u706B)" }),
                " ",
                "\uC6D0\uAD6D\uC744 \uAE30\uBC18\uC73C\uB85C \uB2F5\uBCC0\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."
              ] }),
              /* @__PURE__ */ jsx13("p", { className: "font-body-md text-body-md leading-relaxed text-on-surface-variant", children: "\uC0AC\uC8FC \uBA85\uC2DD\uC5D0\uC11C \uC62C\uD574 \uD558\uBC18\uAE30 \uBC0F \uB0B4\uB144 \uCD08 \uAD81\uAE08\uD558\uC2E0 \uC810\uC774\uB098 \uD604\uC7AC \uACE0\uBBFC\uD558\uACE0 \uACC4\uC2E0 \uC0AC\uC548\uC744 \uD3B8\uD558\uAC8C \uBB3C\uC5B4\uBCF4\uC138\uC694." })
            ] }),
            /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-outline ml-1", children: "\uC624\uC804 10:24" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "flex flex-col items-end gap-1 ml-auto max-w-[82%]", children: [
          /* @__PURE__ */ jsx13("div", { className: "bg-primary-container text-on-primary p-space-md rounded-xl rounded-tr-none shadow-sm", children: /* @__PURE__ */ jsx13("p", { className: "font-body-md text-body-md leading-relaxed", children: "\uC62C\uD574 \uD558\uBC18\uAE30\uB098 \uB0B4\uB144 \uCD08\uC5D0 \uC774\uC9C1\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uB294\uB370, \uC81C \uC0AC\uC8FC \uD750\uB984\uC0C1 \uC9C1\uC7A5\uC744 \uC62E\uACA8\uB3C4 \uAD1C\uCC2E\uC744\uAE4C\uC694?" }) }),
          /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-outline mr-1", children: "\uC624\uC804 10:25" })
        ] }),
        /* @__PURE__ */ jsxs13("div", { className: "flex items-start gap-space-sm", children: [
          /* @__PURE__ */ jsx13("div", { className: "flex-shrink-0 w-9 h-9 rounded-full bg-primary-container shadow-sm flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx13("img", { alt: "AI \uC0AC\uC8FC \uBA85\uB9AC\uC0C1\uB2F4\uC18C \uC2EC\uBCFC", className: "w-full h-full object-cover", src: "/assets/img09.png" }) }),
          /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-2 max-w-[88%] w-full", children: [
            /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-space-xs ml-1", children: [
              /* @__PURE__ */ jsx13("span", { className: "font-label-md text-label-md text-on-surface font-semibold", children: "AI \uC0AC\uC8FC \uBA85\uB9AC\uC0C1\uB2F4\uC0AC" }),
              /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-secondary", children: "\uC6D0\uAD6D \uC815\uBC00 \uB300\uC870\uC644\uB8CC" })
            ] }),
            /* @__PURE__ */ jsxs13("div", { className: "bg-surface-container-lowest p-space-md rounded-xl rounded-tl-none shadow-sm space-y-space-md", children: [
              /* @__PURE__ */ jsxs13("div", { className: "bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-xs", children: [
                /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[20px] text-secondary mt-0.5", children: "menu_book" }),
                /* @__PURE__ */ jsxs13("div", { className: "font-body-sm text-body-sm text-on-surface leading-relaxed", children: [
                  /* @__PURE__ */ jsx13("span", { className: "font-semibold text-secondary", children: "\uD558\uBC18\uAE30 \uD750\uB984 \uC694\uC57D:" }),
                  " ",
                  "\uACB0\uC2E4\uC744 \uB9FA\uB294 \uD1A0(\u571F) \uC2DD\uC0C1\uACFC \uAE08(\u91D1) \uC7AC\uC131\uC758 \uC6B4\uC774 \uC11C\uC11C\uD788 \uD0DC\uB3D9\uD558\uB294 \uAE38\uBAA9\uC785\uB2C8\uB2E4."
                ] })
              ] }),
              /* @__PURE__ */ jsxs13("div", { className: "space-y-space-sm font-body-md text-body-md leading-relaxed text-on-surface", children: [
                /* @__PURE__ */ jsxs13("p", { className: "", children: [
                  "\uD558\uB298\uB2D8\uC758 \uC77C\uAC04",
                  " ",
                  /* @__PURE__ */ jsx13("span", { className: "font-semibold text-primary-container", children: "\uBCD1\uD654(\u4E19\u706B)" }),
                  "\uB294 \uC801\uADF9\uC801\uC778 \uCD94\uC9C4\uB825\uACFC \uAC1C\uCC99 \uC815\uC2E0\uC774 \uD0C1\uC6D4\uD55C \uAC15\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4."
                ] }),
                /* @__PURE__ */ jsxs13("p", { className: "", children: [
                  "\uD558\uC9C0\uB9CC \uC62C\uD574\uB294 \uCD08\uC870\uD558\uAC8C \uC11C\uB450\uB974\uAE30\uBCF4\uB2E4,",
                  " ",
                  /* @__PURE__ */ jsx13("strong", { className: "font-semibold text-secondary", children: "11\uC6D4 \uC774\uD6C4(\uD574\uC6D4\xB7\u4EA5\u6708)" }),
                  " ",
                  "\uD3B8\uAD00\uACFC \uC815\uAD00\uC758 \uAE30\uC6B4\uC774 \uC548\uC815\uC801\uC73C\uB85C \uC790\uB9AC \uC7A1\uC744 \uB54C \uC81C\uC548\uC744 \uC218\uB77D\uD558\uAC70\uB098 \uC774\uC9C1\uC744 \uD655\uC815 \uC9D3\uB294 \uAC83\uC774 \uBA85\uB9AC\uD559\uC801\uC73C\uB85C \uD6E8\uC52C \uC720\uB9AC\uD569\uB2C8\uB2E4."
                ] }),
                /* @__PURE__ */ jsxs13("p", { className: "text-on-surface-variant font-body-sm text-body-sm", children: [
                  "\u2728 \uD2B9\uD788",
                  " ",
                  /* @__PURE__ */ jsx13("span", { className: "font-medium text-on-surface", children: "\uAE30\uD68D, \uC2E0\uC0AC\uC5C5 \uBE0C\uB79C\uB529, \uB300\uC678 \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158" }),
                  " ",
                  "\uB4F1 \uC2DC\uC57C\uB97C \uB113\uAC8C \uC4F0\uB294 \uBD84\uC57C\uB85C\uC758 \uD655\uC7A5\uC744 \uCD94\uCC9C\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."
                ] })
              ] }),
              /* @__PURE__ */ jsxs13("div", { className: "bg-surface-container-low rounded-lg overflow-hidden transition-all duration-300", children: [
                /* @__PURE__ */ jsxs13(
                  "button",
                  {
                    "aria-controls": "saju-basis",
                    "aria-expanded": "false",
                    className: "w-full flex items-center justify-between p-space-sm text-left hover:bg-surface-container transition-colors",
                    onClick: (event) => toggleAccordion("saju-basis", event.currentTarget),
                    type: "button",
                    children: [
                      /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[18px] text-secondary", children: "calculate" }),
                        /* @__PURE__ */ jsx13("span", { className: "font-title-md text-title-md text-on-surface text-[14px]", children: "\uBA85\uB9AC\uD559 \uD574\uC11D \uADFC\uAC70 (\uC6D0\uAD6D \uBD84\uC11D)" })
                      ] }),
                      /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[20px] text-outline transition-transform duration-200", id: "accordion-arrow", children: "expand_more" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs13("div", { className: "hidden p-space-sm pt-0 space-y-2 text-on-surface-variant font-body-sm text-body-sm", id: "saju-basis", children: [
                  /* @__PURE__ */ jsx13("div", { className: "h-px bg-surface-container-highest w-full my-1" }),
                  /* @__PURE__ */ jsxs13("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs13("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx13("span", { className: "text-secondary font-semibold", children: "\u30FB" }),
                      /* @__PURE__ */ jsxs13("div", { children: [
                        /* @__PURE__ */ jsx13("span", { className: "font-semibold text-on-surface", children: "\uC77C\uAC04(\u65E5\u5E72): \u4E19\u706B" }),
                        /* @__PURE__ */ jsx13("p", { className: "text-on-surface-variant text-[12px] leading-snug", children: "\uB3C5\uB9BD\uC2EC\uACFC \uC2E4\uD589\uB825\uC774 \uB192\uC73C\uB098 \uC9C0\uC9C0 \uC778\uBAA9(\u5BC5\u6728) \uC7A5\uC0DD(\u9577\u751F) \uC601\uD5A5\uC73C\uB85C \uC0C8\uB85C\uC6B4 \uD658\uACBD \uC801\uC751\uB825\uC774 \uB9E4\uC6B0 \uB6F0\uC5B4\uB0A9\uB2C8\uB2E4." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs13("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx13("span", { className: "text-secondary font-semibold", children: "\u30FB" }),
                      /* @__PURE__ */ jsxs13("div", { children: [
                        /* @__PURE__ */ jsx13("span", { className: "font-semibold text-on-surface", children: "\uB300\uC6B4 \uBC0F \uC138\uC6B4 \uC791\uC6A9" }),
                        /* @__PURE__ */ jsx13("p", { className: "text-on-surface-variant text-[12px] leading-snug", children: "\uAC11\uC9C4\uB144(\u7532\u8FB0\u5E74) \uCC9C\uAC04 \uD3B8\uC778\uACFC \uC9C0\uC9C0 \uC2DD\uC2E0 \uC791\uC6A9\uC73C\uB85C \uC548\uC8FC\uD558\uAE30\uBCF4\uB2E4 \uC0C8\uB85C\uC6B4 \uC601\uC5ED \uD0D0\uC0C9 \uC695\uAD6C\uAC00 \uAC15\uD574\uC9C0\uB294 \uC2DC\uAE30\uC785\uB2C8\uB2E4." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs13("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx13("span", { className: "text-secondary font-semibold", children: "\u30FB" }),
                      /* @__PURE__ */ jsxs13("div", { children: [
                        /* @__PURE__ */ jsx13("span", { className: "font-semibold text-on-surface", children: "\uC624\uD589 \uBCF4\uC644(\u91D1 \uBCF4\uCDA9)" }),
                        /* @__PURE__ */ jsx13("p", { className: "text-on-surface-variant text-[12px] leading-snug", children: "\uBD80\uC871\uD55C \uAE08(\u91D1) \uAE30\uC6B4\uC744 \uBCF4\uC644\uD558\uAE30 \uC704\uD574 \uC5F0\uBD09 \uD611\uC0C1\uACFC \uACC4\uC57D \uC870\uAC74\uC744 \uBA85\uBB38\uD654\uD558\uB294 \uAC83\uC774 \uAC1C\uC6B4(\u958B\u904B)\uC758 \uD575\uC2EC \uC804\uB7B5\uC785\uB2C8\uB2E4." })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-space-xs pt-1", children: [
                /* @__PURE__ */ jsxs13("button", { className: "flex items-center gap-1 bg-surface-container-high hover:bg-surface-container-highest px-space-sm py-1.5 rounded-lg text-on-surface transition-colors font-label-md text-label-md", onClick: () => showFeedback("\uB2F5\uBCC0\uC774 \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."), type: "button", children: [
                  /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[15px]", children: "content_copy" }),
                  /* @__PURE__ */ jsx13("span", { className: "", children: "\uB2F5\uBCC0 \uBCF5\uC0AC" })
                ] }),
                /* @__PURE__ */ jsxs13("button", { className: "flex items-center gap-1 bg-surface-container-high hover:bg-surface-container-highest px-space-sm py-1.5 rounded-lg text-on-surface transition-colors font-label-md text-label-md", onClick: () => showFeedback("\uC0C1\uB2F4 \uB0B4\uC5ED\uC774 \uBCF4\uAD00\uD568\uC5D0 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4."), type: "button", children: [
                  /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[15px]", children: "bookmark" }),
                  /* @__PURE__ */ jsx13("span", { className: "", children: "\uBCF4\uAD00\uD568\uC5D0 \uC800\uC7A5" })
                ] }),
                /* @__PURE__ */ jsxs13("button", { className: "flex items-center gap-1 bg-surface-container-high hover:bg-surface-container-highest px-space-sm py-1.5 rounded-lg text-secondary transition-colors font-label-md text-label-md ml-auto", onClick: () => prefillInput("11\uC6D4 \uC774\uC9C1 \uC6B4\uC5D0 \uB300\uD574 \uB354 \uC790\uC138\uD788 \uC54C\uB824\uC8FC\uC138\uC694."), type: "button", children: [
                  /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[15px]", children: "add_circle" }),
                  /* @__PURE__ */ jsx13("span", { className: "", children: "\uB354 \uC790\uC138\uD788 \uBB3B\uAE30" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-outline ml-1", children: "\uC624\uC804 10:25" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs13("div", { className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-primary-container text-on-primary px-space-md py-space-sm rounded-full shadow-lg font-label-md text-label-md flex items-center gap-space-xs opacity-0 pointer-events-none transition-all duration-300", id: "toast", children: [
        /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[16px] text-secondary-fixed", children: "check_circle" }),
        /* @__PURE__ */ jsx13("span", { id: "toast-text", className: "", children: "\uC54C\uB9BC \uB0B4\uC6A9" })
      ] }),
      /* @__PURE__ */ jsx13("div", { className: "fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-xl shadow-lg pb-safe", children: /* @__PURE__ */ jsxs13("div", { className: "max-w-lg mx-auto w-full flex flex-col", children: [
        /* @__PURE__ */ jsxs13("div", { className: "px-margin-mobile pt-space-sm pb-1 flex items-center gap-space-xs overflow-x-auto no-scrollbar", children: [
          /* @__PURE__ */ jsx13(
            "button",
            {
              className: "flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm",
              "data-prompt": "\uC62C\uD574 \uC774\uC9C1\uD574\uB3C4 \uB420\uAE4C\uC694?",
              onClick: (event) => prefillInput(event.currentTarget.dataset.prompt),
              type: "button",
              children: "\uC62C\uD574 \uC774\uC9C1\uD574\uB3C4 \uB420\uAE4C\uC694? \u{1F4BC}"
            }
          ),
          /* @__PURE__ */ jsx13(
            "button",
            {
              className: "flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm",
              "data-prompt": "\uC7AC\uBB3C\uC6B4\uC740 \uC5B8\uC81C \uC88B\uC544\uC9C0\uB098\uC694?",
              onClick: (event) => prefillInput(event.currentTarget.dataset.prompt),
              type: "button",
              children: "\uC7AC\uBB3C\uC6B4\uC740 \uC5B8\uC81C \uC88B\uC544\uC838\uC694? \u{1F4B0}"
            }
          ),
          /* @__PURE__ */ jsx13(
            "button",
            {
              className: "flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm",
              "data-prompt": "\uB098\uB791 \uC0AC\uC8FC\uC0C1 \uC798 \uB9DE\uB294 \uAD81\uD569\uC758 \uC0AC\uB78C\uC740 \uC5B4\uB5A4 \uC624\uD589\uC778\uAC00\uC694?",
              onClick: (event) => prefillInput(event.currentTarget.dataset.prompt),
              type: "button",
              children: "\uB098\uB791 \uC798 \uB9DE\uB294 \uAD81\uD569\uC740? \u{1F33F}"
            }
          ),
          /* @__PURE__ */ jsx13(
            "button",
            {
              className: "flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm",
              "data-prompt": "\uC81C \uC0AC\uC8FC\uC5D0\uC11C \uBD80\uC871\uD55C \uAE08(\u91D1) \uAE30\uC6B4\uC744 \uCC44\uC6B0\uB294 \uC0DD\uD65C \uC2B5\uAD00\uC774 \uC788\uC744\uAE4C\uC694?",
              onClick: (event) => prefillInput(event.currentTarget.dataset.prompt),
              type: "button",
              children: "\uBD80\uC871\uD55C \uAE08(\u91D1) \uCC44\uC6B0\uB294 \uBC95 \u{1FA99}"
            }
          )
        ] }),
        /* @__PURE__ */ jsx13("div", { className: "px-margin-mobile pt-1 pb-space-xs", children: /* @__PURE__ */ jsxs13("form", { className: "flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-full shadow-md", onSubmit: (event) => handleSend(event), children: [
          /* @__PURE__ */ jsx13(
            "button",
            {
              "aria-label": "\uCD94\uAC00 \uC635\uC158",
              className: "w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors",
              onClick: () => showFeedback("\uC0AC\uC8FC \uC6D0\uAD6D \uCD94\uAC00 \uC5F4\uB78C \uAE30\uB2A5\uC774 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4."),
              type: "button",
              children: /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[20px]", children: "add" })
            }
          ),
          /* @__PURE__ */ jsx13("input", { autoComplete: "off", className: "flex-1 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none px-1", id: "chat-input", placeholder: "\uC0AC\uC8FC\uC640 \uAD00\uB828\uD574 \uAD81\uAE08\uD55C \uC810\uC744 \uC9C8\uBB38\uD574\uBCF4\uC138\uC694...", type: "text" }),
          /* @__PURE__ */ jsx13(
            "button",
            {
              "aria-label": "\uC74C\uC131 \uC9C8\uBB38",
              className: "w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors",
              onClick: () => showFeedback("\uC74C\uC131 \uC778\uC2DD \uB9C8\uC774\uD06C\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4."),
              type: "button",
              children: /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[18px]", children: "mic" })
            }
          ),
          /* @__PURE__ */ jsx13("button", { "aria-label": "\uBA54\uC2DC\uC9C0 \uC804\uC1A1", className: "w-8 h-8 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center hover:opacity-90 active:scale-95 transition-all shadow-sm", type: "submit", children: /* @__PURE__ */ jsx13("span", { className: "material-symbols-outlined text-[18px]", children: "arrow_upward" }) })
        ] }) }),
        /* @__PURE__ */ jsx13("div", { className: "px-margin-mobile pb-space-xs text-center", children: /* @__PURE__ */ jsx13("span", { className: "font-label-sm text-label-sm text-outline tracking-tight", children: "\uACB0 \uBA85\uB9AC\uD559 \uACE0\uC804 \uD574\uC11D\uACFC \uC0AC\uC8FC \uC6D0\uAD6D \uD1B5\uACC4\uB97C \uAE30\uBC18\uC73C\uB85C \uC81C\uACF5\uB418\uB294 \uCC38\uACE0\uC6A9 \uC0C1\uB2F4\uC785\uB2C8\uB2E4." }) })
      ] }) })
    ] }) })
  ] });
}

// src/screens/ReportStore.tsx
import { useEffect as useEffect7 } from "react";
import { Fragment as Fragment14, jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
var BODY_CLASS14 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";
function ReportStore() {
  useBodyClass(BODY_CLASS14);
  useEffect7(() => {
    const modal = byId("report-modal");
    const modalCard = byId("modal-card");
    const closeBtn = byId("modal-close");
    const titleElem = byId("modal-title");
    const descElem = byId("modal-desc");
    const badgeElem = byId("modal-badge");
    const priceElem = byId("modal-price");
    const origPriceElem = byId("modal-orig-price");
    function openModal2(data) {
      titleElem.textContent = data.title ?? null;
      descElem.textContent = data.desc ?? null;
      badgeElem.textContent = data.badge ?? null;
      priceElem.textContent = data.price ?? null;
      origPriceElem.textContent = data.orig ?? null;
      modal.classList.remove("opacity-0", "pointer-events-none");
      modal.classList.add("opacity-100");
      modalCard.classList.remove("translate-y-full");
      modalCard.classList.add("translate-y-0");
    }
    function closeModal2() {
      modal.classList.add("opacity-0", "pointer-events-none");
      modal.classList.remove("opacity-100");
      modalCard.classList.add("translate-y-full");
      modalCard.classList.remove("translate-y-0");
    }
    queryAll(".report-card").forEach(function(card) {
      const btn = query(".open-detail-btn", card);
      const clickHandler = function(e) {
        e.stopPropagation();
        openModal2({
          title: card.dataset.title,
          badge: card.dataset.badge,
          desc: card.dataset.desc,
          price: card.dataset.price,
          orig: card.dataset.orig
        });
      };
      if (btn) btn.addEventListener("click", clickHandler);
      card.addEventListener("click", clickHandler);
    });
    if (closeBtn) closeBtn.addEventListener("click", closeModal2);
    if (modal) {
      modal.addEventListener("click", function(e) {
        if (e.target === modal) closeModal2();
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs14(Fragment14, { children: [
    /* @__PURE__ */ jsx14("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe", children: /* @__PURE__ */ jsxs14("div", { className: "h-16 px-margin flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-space-sm", children: [
        /* @__PURE__ */ jsx14("div", { className: "w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-surface-container", children: /* @__PURE__ */ jsx14("img", { alt: "Profile", className: "w-8 h-8 rounded-full object-cover", src: "/assets/img01.png" }) }),
        /* @__PURE__ */ jsx14("div", { className: "flex items-baseline gap-space-xs", children: /* @__PURE__ */ jsx14("span", { className: "font-headline-md text-headline-md text-on-surface tracking-tight", children: "\uD504\uB9AC\uBBF8\uC5C4 \uB9AC\uD3EC\uD2B8" }) })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx14("span", { className: "font-title-md text-title-md text-on-surface-variant px-space-xs hidden sm:inline-block", children: "\uC0AC\uC8FC \uBD84\uC11D \uACB0\uACFC" }),
        /* @__PURE__ */ jsx14("button", { "aria-label": "\uB3C4\uC6C0\uB9D0 \uC548\uB0B4", className: "w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors", type: "button", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[22px]", children: "auto_awesome" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx14("main", { className: "flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface", children: /* @__PURE__ */ jsxs14("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ jsx14("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-primary-container/40 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300", id: "report-modal", children: /* @__PURE__ */ jsxs14("div", { className: "bg-surface-container-lowest w-full max-w-md rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl transform translate-y-full transition-transform duration-300 max-h-[751px] overflow-y-auto", id: "modal-card", children: [
        /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between pb-4", children: [
          /* @__PURE__ */ jsxs14("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm", children: [
            /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[14px]", children: "auto_stories" }),
            /* @__PURE__ */ jsx14("span", { id: "modal-badge", className: "", children: "\uC2EC\uCE35 \uB9AC\uD3EC\uD2B8 \uC548\uB0B4" })
          ] }),
          /* @__PURE__ */ jsx14("button", { className: "w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface", id: "modal-close", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[18px]", children: "close" }) })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "mt-2", children: [
          /* @__PURE__ */ jsx14("h3", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container", id: "modal-title", children: "\uB9AC\uD3EC\uD2B8 \uC0C1\uC138" }),
          /* @__PURE__ */ jsx14("p", { className: "font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed", id: "modal-desc", children: "\uC0C1\uC138 \uD574\uC124 \uB0B4\uC6A9\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4." })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "mt-5 p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5", children: [
          /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between text-on-surface-variant font-label-md text-label-md", children: [
            /* @__PURE__ */ jsx14("span", { className: "", children: "\uC81C\uACF5 \uD615\uD0DC" }),
            /* @__PURE__ */ jsx14("span", { className: "text-on-surface font-title-md text-title-md", children: "\uACE0\uD654\uC9C8 PDF \uB2E4\uC6B4\uB85C\uB4DC + \uC571 \uB0B4 \uC0C1\uC2DC \uC5F4\uB78C" })
          ] }),
          /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between text-on-surface-variant font-label-md text-label-md", children: [
            /* @__PURE__ */ jsx14("span", { className: "", children: "\uBD84\uB7C9" }),
            /* @__PURE__ */ jsx14("span", { className: "text-on-surface font-title-md text-title-md", children: "\uC57D 10\uD398\uC774\uC9C0 \uB0B4\uC678" })
          ] }),
          /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between text-on-surface-variant font-label-md text-label-md", children: [
            /* @__PURE__ */ jsx14("span", { className: "", children: "\uC5F4\uB78C \uD61C\uD0DD" }),
            /* @__PURE__ */ jsx14("span", { className: "text-secondary font-title-md text-title-md", children: "\uC804\uC6A9 AI \uC0C1\uB2F4 \uC9C8\uBB38\uAD8C 3\uD68C \uD3EC\uD568" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "mt-6 flex items-center justify-between pt-2", children: [
          /* @__PURE__ */ jsxs14("div", { children: [
            /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-outline line-through", id: "modal-orig-price", children: "\uC815\uAC00 25,000\uC6D0" }),
            /* @__PURE__ */ jsx14("p", { className: "font-headline-md text-headline-md text-primary-container", id: "modal-price", children: "15,900\uC6D0" })
          ] }),
          /* @__PURE__ */ jsxs14("button", { className: "px-6 py-3.5 rounded-lg bg-primary-container text-surface-bright font-title-md text-title-md shadow-md active:scale-95 transition-transform flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx14("span", { className: "", children: "\uB9AC\uD3EC\uD2B8 \uC5F4\uB78C\uD558\uAE30" }),
            /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[18px]", children: "arrow_forward" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs14("div", { className: "px-margin-mobile pt-3 pb-8 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs14("header", { className: "relative overflow-hidden rounded-2xl bg-surface-container-lowest p-6 shadow-[0_4px_24px_-4px_rgba(19,27,46,0.06)]", children: [
          /* @__PURE__ */ jsxs14("div", { className: "relative z-10 flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs14("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm tracking-wider uppercase", children: [
                /* @__PURE__ */ jsx14("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
                "PREMIUM SAJU REPORT"
              ] }),
              /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-secondary text-[22px]", children: "all_inclusive" })
            ] }),
            /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxs14("h1", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container leading-tight", children: [
                "\uC778\uC0DD\uC758 \uC911\uB300\uD55C \uACB0\uC815\uC744 \uC704\uD55C",
                /* @__PURE__ */ jsx14("br", {}),
                "\uB9DE\uCDA4 \uC2EC\uCE35 \uB9AC\uD3EC\uD2B8"
              ] }),
              /* @__PURE__ */ jsx14("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\uC778\uACF5\uC9C0\uB2A5\uACFC \uC815\uD1B5 \uBA85\uB9AC\uD559 \uACE0\uC804 \uC6D0\uC804(\uC790\uD3C9\uC9C4\uC804\xB7\uC801\uCC9C\uC218)\uC758 \uC815\uBC00 \uB300\uC870\uB97C \uD1B5\uD55C \uACE0\uD574\uC0C1\uB3C4 \uC0AC\uC8FC \uBD84\uC11D\uC11C" })
            ] }),
            /* @__PURE__ */ jsxs14("div", { className: "mt-2 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-low text-primary-container shadow-sm self-start", children: [
              /* @__PURE__ */ jsx14("span", { className: "w-2 h-2 rounded-full bg-error animate-pulse" }),
              /* @__PURE__ */ jsxs14("span", { className: "font-label-md text-label-md", children: [
                /* @__PURE__ */ jsx14("strong", { className: "font-title-md text-title-md text-on-surface", children: "\uAE40\uD558\uB298" }),
                "\uB2D8\uC758",
                " ",
                /* @__PURE__ */ jsx14("span", { className: "text-secondary font-medium", children: "\uBCD1\uD654(\u4E19\u706B)" }),
                " ",
                "\uC6D0\uAD6D \uB9DE\uCDA4 \uBD84\uC11D \uAC00\uB2A5"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx14("div", { className: "absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsx14("div", { className: "relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)]", children: /* @__PURE__ */ jsxs14("div", { className: "relative h-44 w-full bg-cover bg-center", "data-alt": "A luxurious close-up of a traditional Korean calligraphy desk with aged mulberry Hanji paper, celestial star charts inked in deep indigo and antique gold leaf accents, illuminated by soft morning sunlight in a serene study.", style: { backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHZhmXqnLUKn47YP0kfYVnjqDGcFEleJz_q4p5Hw7zcFGKpXyFrxvp3NpmilZo1veYuHHYcdX5mGbtU0mOZZS-xmAbsYdF0SGHznliwLsPr9Q57vq_80hDBPHNc9y0eXeDOgTre5WRHYcCWzBJjrQfiyS8sjarxKI9FVmJ2T7zcKLzSCkm798CyaHYpkrfova8pBLAzVWBFiaGnYhPQ6or_TVUbcARn1oKYMZvQmw2t8jSp_kMlulb4w')" }, children: [
          /* @__PURE__ */ jsx14("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent" }),
          /* @__PURE__ */ jsxs14("div", { className: "absolute bottom-4 left-4 right-4 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxs14("div", { className: "text-surface-bright", children: [
              /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider", children: "\uCC9C\uBB38\uACFC \uBA85\uB9AC\uC758 \uC870\uD654" }),
              /* @__PURE__ */ jsx14("p", { className: "font-headline-md text-headline-md text-surface-bright leading-tight mt-0.5", children: "\uB2E8 \uD55C \uAD8C\uC758 \uC628\uC804\uD55C \uAE38\uC7A1\uC774" })
            ] }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm", children: [
              /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[14px]", children: "verified" }),
              /* @__PURE__ */ jsx14("span", { className: "", children: "\uC815\uD1B5 \uC0AC\uC8FC \uC57D 10p" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx14("span", { className: "font-headline-md text-headline-md text-primary-container", children: "\uC8FC\uC81C\uBCC4 \uC2EC\uCE35 \uB9AC\uD3EC\uD2B8" }),
            /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm", children: "\uCD1D 2\uC885" })
          ] }),
          /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-secondary font-medium", children: "\uC2E4\uC2DC\uAC04 AI \uC0DD\uC131 (\uC57D 1\uBD84)" })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs14(
            "article",
            {
              className: "report-card relative flex flex-col rounded-2xl bg-surface-container-lowest p-5 shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] transition-all active:scale-[0.99]",
              "data-badge": "\uC9C1\uC7A5\uC778 \uBCA0\uC2A4\uD2B8",
              "data-desc": "\uC0AC\uC8FC \uC6D0\uAD6D \uB0B4 \uAD00\uC131(\u5B98\u661F)\uACFC \uC778\uC131(\u5370\u661F)\uC758 \uC5D0\uB108\uC9C0\uB97C \uD574\uB3C5\uD558\uC5EC \uB2F9\uC2E0\uC758 \uC228\uACA8\uC9C4 \uC9C1\uC5C5 \uC801\uC131\uACFC \uAC00\uC7A5 \uC720\uB9AC\uD55C \uC774\uC9C1 \uCD5C\uC801\uAE30(\uC6D4\uBCC4 \uD0C0\uC774\uBC0D)\uB97C \uC9DA\uC5B4\uB4DC\uB9BD\uB2C8\uB2E4. \uC0C8 \uC9C1\uC7A5\uC5D0\uC11C\uC758 \uC0C1\uC0AC\xB7\uB3D9\uB8CC \uC778\uC5F0\uC218 \uBC0F \uCEE4\uB9AC\uC5B4 \uB3C4\uC57D \uC804\uB7B5\uC744 \uC815\uBC00\uD558\uAC8C \uC548\uB0B4\uD569\uB2C8\uB2E4.",
              "data-orig": "\uC815\uAC00 19,000\uC6D0 (32% \uD560\uC778)",
              "data-price": "12,900\uC6D0",
              "data-title": "\uC774\uC9C1\uC6B4 \uB9AC\uD3EC\uD2B8 (\uC9C1\uC7A5\xB7\uCEE4\uB9AC\uC5B4 \uC2EC\uCE35 \uBD84\uC11D)",
              children: [
                /* @__PURE__ */ jsxs14("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx14("div", { className: "w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary shadow-sm", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[26px]", children: "explore" }) }),
                    /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm", children: "\uC9C1\uC7A5\uC778 \uBCA0\uC2A4\uD2B8" }),
                        /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC18C\uC7A5\uC6A9 PDF" })
                      ] }),
                      /* @__PURE__ */ jsx14("h2", { className: "font-title-lg text-title-lg text-primary-container mt-0.5 leading-snug", children: "\uC774\uC9C1\uC6B4 \uB9AC\uD3EC\uD2B8 (\uC9C1\uC7A5\xB7\uCEE4\uB9AC\uC5B4)" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx14("span", { className: "text-secondary font-headline-md text-headline-md select-none", children: "\u5B98" })
                ] }),
                /* @__PURE__ */ jsx14("p", { className: "font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed", children: "\uC801\uC131\uACFC \uC774\uC9C1 \uCD5C\uC801\uAE30(\uC6D4\uBCC4 \uD0C0\uC774\uBC0D), \uC0C1\uC0AC\xB7\uB3D9\uB8CC \uC778\uC5F0\uC218 \uBC0F \uCEE4\uB9AC\uC5B4 \uB3C4\uC57D \uC804\uB7B5 \uBD84\uC11D" }),
                /* @__PURE__ */ jsxs14("div", { className: "flex flex-wrap gap-1.5 mt-3", children: [
                  /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface-variant", children: "#\uC774\uC9C1 \uD0C0\uC774\uBC0D" }),
                  /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface-variant", children: "#\uC870\uC9C1 \uC801\uD569\uB3C4" }),
                  /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface-variant", children: "#\uC9C1\uC7A5 \uB0B4 \uADC0\uC778" })
                ] }),
                /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between mt-4 pt-3 bg-surface-container-low/50 px-3 py-2 rounded-xl", children: [
                  /* @__PURE__ */ jsxs14("div", { className: "flex items-baseline gap-1.5", children: [
                    /* @__PURE__ */ jsx14("span", { className: "font-label-md text-label-md text-error font-medium", children: "32%" }),
                    /* @__PURE__ */ jsx14("span", { className: "font-headline-md text-headline-md text-primary-container", children: "12,900\uC6D0" }),
                    /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-outline line-through", children: "19,000\uC6D0" })
                  ] }),
                  /* @__PURE__ */ jsxs14("button", { className: "open-detail-btn px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-primary-container font-label-lg text-label-lg shadow-sm hover:bg-surface-container active:scale-95 transition-all flex items-center gap-1", type: "button", children: [
                    /* @__PURE__ */ jsx14("span", { className: "", children: "\uC790\uC138\uD788 \uBCF4\uAE30" }),
                    /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[16px]", children: "chevron_right" })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs14(
            "article",
            {
              className: "report-card relative flex flex-col rounded-2xl bg-surface-container-lowest p-5 shadow-[0_8px_28px_-4px_rgba(19,27,46,0.08)] ring-0 transition-all active:scale-[0.99]",
              "data-badge": "\uCD94\uCC9C \uC885\uD569",
              "data-desc": "\uCD08\uB144\xB7\uC911\uB144\xB7\uB9D0\uB144\uC758 \uD3C9\uC0DD \uB300\uC6B4 \uD750\uB984\uACFC \uC7AC\uBB3C, \uAC74\uAC15, \uC9C1\uC5C5, \uC778\uC5F0\uC744 \uC544\uC6B0\uB974\uB294 \uC0AC\uC8FC \uC6D0\uAD6D \uCD1D\uCCB4\uC801 \uBD84\uC11D. \uBCF8\uC778\uC758 \uC120\uCC9C\uC801 \uAE30\uC9C8\uACFC \uC778\uC0DD \uC804\uD658\uC810 \uD0C0\uC774\uBC0D\uC744 \uC2EC\uCE35 \uD574\uC124\uD569\uB2C8\uB2E4.",
              "data-orig": "\uC815\uAC00 30,000\uC6D0 (35% \uD560\uC778)",
              "data-price": "19,900\uC6D0",
              "data-title": "\uC885\uD569 \uC6B4\uC138 \uB9AC\uD3EC\uD2B8 (\uD3C9\uC0DD \uC0AC\uC8FC \uC6D0\uAD6D \uCD1D\uD3C9)",
              children: [
                /* @__PURE__ */ jsxs14("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx14("div", { className: "w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-sm", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[26px]", children: "menu_book" }) }),
                    /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-md bg-secondary text-surface-bright font-label-sm text-label-sm", children: "\uCD94\uCC9C \uC885\uD569" }),
                        /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-secondary font-medium", children: "\uC778\uAE30 1\uC704" })
                      ] }),
                      /* @__PURE__ */ jsx14("h2", { className: "font-title-lg text-title-lg text-primary-container mt-0.5 leading-snug", children: "\uC885\uD569 \uC6B4\uC138 \uB9AC\uD3EC\uD2B8 (\uD3C9\uC0DD \uC0AC\uC8FC \uC6D0\uAD6D \uCD1D\uD3C9)" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx14("span", { className: "text-secondary font-headline-md text-headline-md select-none", children: "\u547D" })
                ] }),
                /* @__PURE__ */ jsx14("p", { className: "font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed", children: "\uCD08\uB144\xB7\uC911\uB144\xB7\uB9D0\uB144\uC758 \uD3C9\uC0DD \uB300\uC6B4 \uD750\uB984\uACFC \uC7AC\uBB3C, \uAC74\uAC15, \uC9C1\uC5C5, \uC778\uC5F0\uC744 \uC544\uC6B0\uB974\uB294 \uC0AC\uC8FC \uC6D0\uAD6D \uCD1D\uCCB4\uC801 \uBD84\uC11D" }),
                /* @__PURE__ */ jsxs14("div", { className: "flex flex-wrap gap-1.5 mt-3", children: [
                  /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-md bg-secondary-container/40 font-label-sm text-label-sm text-on-secondary-container", children: "#\uD3C9\uC0DD\uCD1D\uC6B4" }),
                  /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-md bg-secondary-container/40 font-label-sm text-label-sm text-on-secondary-container", children: "#\uB300\uC6B4\uD750\uB984" }),
                  /* @__PURE__ */ jsx14("span", { className: "px-2 py-0.5 rounded-md bg-secondary-container/40 font-label-sm text-label-sm text-on-secondary-container", children: "#\uC885\uD569\uC6B4\uC138\uAC00\uC774\uB4DC" })
                ] }),
                /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between mt-4 pt-3 bg-surface-container-low/50 px-3 py-2 rounded-xl", children: [
                  /* @__PURE__ */ jsxs14("div", { className: "flex items-baseline gap-1.5", children: [
                    /* @__PURE__ */ jsx14("span", { className: "font-label-md text-label-md text-error font-medium", children: "35%" }),
                    /* @__PURE__ */ jsx14("span", { className: "font-headline-md text-headline-md text-primary-container", children: "19,900\uC6D0" }),
                    /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-outline line-through", children: "30,000\uC6D0" })
                  ] }),
                  /* @__PURE__ */ jsxs14("button", { className: "open-detail-btn px-3.5 py-1.5 rounded-lg bg-primary-container text-surface-bright font-label-lg text-label-lg shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-1", type: "button", children: [
                    /* @__PURE__ */ jsx14("span", { className: "", children: "\uC790\uC138\uD788 \uBCF4\uAE30" }),
                    /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[16px]", children: "chevron_right" })
                  ] })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "p-5 rounded-2xl bg-surface-container-low border-l-4 border-secondary flex flex-col gap-2 shadow-sm", children: [
          /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold", children: "\uBA85\uB9AC\uC815\uC885(\u547D\u7406\u6B63\u5B97) \uC6D0\uBB38 \uBC1C\uCDCC" }),
          /* @__PURE__ */ jsx14("p", { className: "font-body-sm text-body-sm text-on-surface italic leading-relaxed", children: "\u201C\uC9C0\uD53C\uC9C0\uAE30\uBA74 \uBC31\uC804\uBD88\uD0DC\uB77C. \uBA85(\u547D)\uC744 \uC544\uB294 \uC790\uB294 \uD558\uB298\uC744 \uC6D0\uB9DD\uD558\uC9C0 \uC54A\uACE0, \uAE30\uBBF8(\u6A5F\u5FAE)\uB97C \uC0B4\uD53C\uB294 \uC790\uB294 \uB54C\uB97C \uB193\uCE58\uC9C0 \uC544\uB2C8\uD55C\uB2E4.\u201D" })
        ] }),
        /* @__PURE__ */ jsxs14("section", { className: "rounded-2xl bg-surface-container-lowest p-5 shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-secondary text-[20px]", children: "shield_with_heart" }),
            /* @__PURE__ */ jsx14("h3", { className: "font-title-md text-title-md text-primary-container", children: "\uB9AC\uD3EC\uD2B8 \uAD6C\uB9E4 \uBCF4\uC7A5 & \uD61C\uD0DD" })
          ] }),
          /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-3.5", children: [
            /* @__PURE__ */ jsxs14("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx14("div", { className: "w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0 mt-0.5", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[18px]", children: "menu_book" }) }),
              /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx14("p", { className: "font-title-md text-title-md text-on-surface", children: "\uC57D 10\uD398\uC774\uC9C0 \uBD84\uB7C9 \uC601\uAD6C \uC18C\uC7A5" }),
                /* @__PURE__ */ jsx14("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uACE0\uD574\uC0C1\uB3C4 PDF \uB2E4\uC6B4\uB85C\uB4DC \uBC0F \uC571 \uBCF4\uAD00\uD568\uC5D0\uC11C \uD3C9\uC0DD \uBB34\uC81C\uD55C \uB2E4\uC2DC\uBCF4\uAE30" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx14("div", { className: "w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0 mt-0.5", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[18px]", children: "verified_user" }) }),
              /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx14("p", { className: "font-title-md text-title-md text-on-surface", children: "\uC815\uD1B5 \uBA85\uB9AC\uD559 \uBC15\uC0AC\uC9C4 \uAC10\uC218" }),
                /* @__PURE__ */ jsx14("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uC790\uD3C9\uC9C4\uC804\xB7\uC801\uCC9C\uC218 \uC815\uD1B5 \uD574\uC11D \uBAA8\uB378\uC744 \uC801\uC6A9\uD55C \uAC80\uC99D\uB41C \uC2EC\uCE35 \uC0B0\uCD9C \uC54C\uACE0\uB9AC\uC998" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs14("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx14("div", { className: "w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0 mt-0.5", children: /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[18px]", children: "chat" }) }),
              /* @__PURE__ */ jsxs14("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx14("p", { className: "font-title-md text-title-md text-on-surface", children: "AI \uC0C1\uB2F4 \uCD94\uAC00 \uC9C8\uBB38\uAD8C 3\uD68C \uC99D\uC815" }),
                /* @__PURE__ */ jsx14("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uB9AC\uD3EC\uD2B8 \uC5F4\uB78C \uC911 \uAD81\uAE08\uD55C \uC0AC\uD56D\uC744 \uC804\uC6A9 \uB300\uD654\uCC3D\uC5D0\uC11C \uAE4A\uC774 \uC788\uAC8C \uC9C8\uBB38 \uAC00\uB2A5" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs14("footer", { className: "flex flex-col items-center justify-center gap-1.5 pt-2 pb-6 px-4 text-center", children: [
          /* @__PURE__ */ jsx14("p", { className: "font-body-sm text-body-sm text-on-surface-variant font-medium", children: "\uBCF8 \uC11C\uBE44\uC2A4\uB294 \uCC38\uACE0\uC6A9 \uCF58\uD150\uCE20\uC785\uB2C8\uB2E4" }),
          /* @__PURE__ */ jsx14("p", { className: "font-label-sm text-label-sm text-outline max-w-xs leading-normal", children: "\uBA85\uB9AC\uD559\uC801 \uD574\uC11D\uC740 \uD1B5\uACC4\uC640 \uACE0\uC804 \uC774\uB860\uC5D0 \uAE30\uBC18\uD558\uBA70 \uAC1C\uC778\uC758 \uC120\uD0DD\uACFC \uD658\uACBD\uC5D0 \uB530\uB77C \uACB0\uACFC\uAC00 \uB2E4\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB514\uC9C0\uD138 \uCF58\uD150\uCE20 \uD2B9\uC131\uC0C1 \uB9AC\uD3EC\uD2B8 \uC5F4\uB78C \uBC0F \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC \uC774\uD6C4\uC5D0\uB294 \uCCAD\uC57D\uCCA0\uD68C\uAC00 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }),
          /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm text-outline-variant mt-1", children: "\xA9 2026 \uACB0 \uC5F0\uAD6C\uC6D0. All rights reserved." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx14("nav", { className: "fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)]", "data-active-classes": "text-primary-container font-semibold", children: /* @__PURE__ */ jsxs14("div", { className: "flex justify-around items-center h-16 px-gutter", children: [
      /* @__PURE__ */ jsxs14("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "home", href: "#", children: [
        /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[22px]", children: "home" }),
        /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm mt-1", children: "\uD648" })
      ] }),
      /* @__PURE__ */ jsxs14("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "my-saju", href: "#", children: [
        /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[22px]", children: "view_column" }),
        /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB0B4 \uC0AC\uC8FC" })
      ] }),
      /* @__PURE__ */ jsxs14("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "ai-chat", href: "#", children: [
        /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[22px]", children: "forum" }),
        /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm mt-1", children: "AI \uC0C1\uB2F4" })
      ] }),
      /* @__PURE__ */ jsxs14("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-primary-container font-semibold transition-colors", "data-path": "more", href: "#", children: [
        /* @__PURE__ */ jsx14("span", { className: "material-symbols-outlined text-[22px]", children: "more_horiz" }),
        /* @__PURE__ */ jsx14("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB354\uBCF4\uAE30" })
      ] })
    ] }) })
  ] });
}

// src/screens/Checkout.tsx
import { useEffect as useEffect8 } from "react";
import { Fragment as Fragment15, jsx as jsx15, jsxs as jsxs15 } from "react/jsx-runtime";
var BODY_CLASS15 = "bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen";
function Checkout() {
  useBodyClass(BODY_CLASS15);
  useEffect8(() => {
    const paymentItems = queryAll(".payment-method-item");
    paymentItems.forEach((item) => {
      item.addEventListener("click", () => {
        paymentItems.forEach((pi) => {
          pi.classList.remove("bg-surface-container-high");
          pi.classList.add("bg-surface-container-lowest");
          const ind = query(".radio-indicator", pi);
          ind.classList.remove("bg-primary-container", "text-on-primary");
          ind.classList.add("bg-surface-container", "text-transparent");
        });
        item.classList.remove("bg-surface-container-lowest");
        item.classList.add("bg-surface-container-high");
        const activeInd = query(".radio-indicator", item);
        activeInd.classList.remove("bg-surface-container", "text-transparent");
        activeInd.classList.add("bg-primary-container", "text-on-primary");
      });
    });
    const agreeAllBtn = byId("agree-all-btn");
    const agreeAllCheck = byId("agree-all-check");
    const subBoxes = queryAll(".sub-check-box");
    const subLabels = queryAll(".sub-check-label");
    let allChecked = true;
    function updateState(checked) {
      allChecked = checked;
      if (checked) {
        agreeAllCheck.classList.remove("bg-surface-container", "text-transparent");
        agreeAllCheck.classList.add("bg-primary-container", "text-on-primary");
        subBoxes.forEach((b) => {
          b.classList.remove("bg-surface-container", "text-transparent");
          b.classList.add("bg-primary-container", "text-on-primary");
        });
      } else {
        agreeAllCheck.classList.add("bg-surface-container", "text-transparent");
        agreeAllCheck.classList.remove("bg-primary-container", "text-on-primary");
        subBoxes.forEach((b) => {
          b.classList.add("bg-surface-container", "text-transparent");
          b.classList.remove("bg-primary-container", "text-on-primary");
        });
      }
    }
    agreeAllBtn.addEventListener("click", () => {
      updateState(!allChecked);
    });
    subLabels.forEach((label) => {
      label.addEventListener("click", (e) => {
        e.preventDefault();
        const box = query(".sub-check-box", label);
        const isCurrentChecked = box.classList.contains("bg-primary-container");
        if (isCurrentChecked) {
          box.classList.remove("bg-primary-container", "text-on-primary");
          box.classList.add("bg-surface-container", "text-transparent");
          agreeAllCheck.classList.add("bg-surface-container", "text-transparent");
          agreeAllCheck.classList.remove("bg-primary-container", "text-on-primary");
          allChecked = false;
        } else {
          box.classList.remove("bg-surface-container", "text-transparent");
          box.classList.add("bg-primary-container", "text-on-primary");
          const allNow = Array.from(subBoxes).every((b) => b.classList.contains("bg-primary-container"));
          if (allNow) {
            agreeAllCheck.classList.remove("bg-surface-container", "text-transparent");
            agreeAllCheck.classList.add("bg-primary-container", "text-on-primary");
            allChecked = true;
          }
        }
      });
    });
    const payBtn = byId("pay-submit-btn");
    payBtn.addEventListener("click", () => {
      const anyUnchecked = Array.from(subBoxes).some((b) => !b.classList.contains("bg-primary-container"));
      if (anyUnchecked) {
        alert("\uD544\uC218 \uC57D\uAD00\uC5D0 \uBAA8\uB450 \uB3D9\uC758\uD574 \uC8FC\uC138\uC694.");
        return;
      }
      payBtn.classList.add("opacity-75", "pointer-events-none");
      payBtn.innerHTML = `
        <span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
        <span class="font-title-md text-title-md text-on-primary font-semibold">\uACB0\uC81C \uC2B9\uC778 \uC9C4\uD589 \uC911...</span>
      `;
      setTimeout(() => {
        alert("\uC548\uC804\uD558\uAC8C \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. AI \uC2EC\uCE35 \uB9AC\uD3EC\uD2B8 \uC0DD\uC131\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4.");
        payBtn.classList.remove("opacity-75", "pointer-events-none");
        payBtn.innerHTML = `
          <span class="material-symbols-outlined text-[18px] text-secondary-container">lock</span>
          <span class="font-title-md text-title-md text-on-primary font-semibold">12,900\uC6D0 \uACB0\uC81C\uD558\uAE30</span>
        `;
      }, 1500);
    });
  }, []);
  return /* @__PURE__ */ jsxs15(Fragment15, { children: [
    /* @__PURE__ */ jsx15("header", { className: "fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe", children: /* @__PURE__ */ jsxs15("div", { className: "h-16 px-gutter-mobile flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs15("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx15(
          "button",
          {
            "aria-label": "\uB4A4\uB85C \uAC00\uAE30",
            className: "w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors",
            onClick: () => history.back(),
            type: "button",
            children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back" })
          }
        ),
        /* @__PURE__ */ jsx15("img", { alt: "Brand logo. - Primary color: #131b2e\n- Font: notoSerif\n- Mode: light\n- Roundness: rounded-md\n", className: "h-8 w-auto object-contain", src: "/assets/img06.png" })
      ] }),
      /* @__PURE__ */ jsx15("h1", { className: "absolute left-1/2 -translate-x-1/2 font-headline-md text-headline-md text-primary-container pointer-events-none select-none", children: "\uACB0\uC81C\uD558\uAE30" }),
      /* @__PURE__ */ jsxs15("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx15(
          "button",
          {
            "aria-label": "\uB2EB\uAE30",
            className: "w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors",
            onClick: () => history.back(),
            type: "button",
            children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[20px]", children: "close" })
          }
        ),
        /* @__PURE__ */ jsx15("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-on-primary text-[18px]", children: "person" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx15("main", { className: "flex flex-col relative w-full pt-16 bg-surface pb-safe flex-1", children: /* @__PURE__ */ jsxs15("div", { className: "flex flex-col w-full px-margin-mobile pb-36 space-y-space-lg", children: [
      /* @__PURE__ */ jsxs15("div", { className: "flex items-center justify-between pt-space-xs", children: [
        /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-space-xs", children: [
          /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-secondary text-[18px]", children: "auto_awesome" }),
          /* @__PURE__ */ jsx15("span", { className: "font-label-md text-label-md text-secondary tracking-widest uppercase", children: "Celestial Ordinance" })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx15("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
          /* @__PURE__ */ jsx15("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uBCF4\uC548 \uC554\uD638\uD654 \uC5F0\uACB0\uB428" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col space-y-space-md relative overflow-hidden", children: [
        /* @__PURE__ */ jsx15("div", { className: "absolute -right-4 -bottom-6 opacity-5 pointer-events-none select-none text-primary", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[120px]", children: "cyclone" }) }),
        /* @__PURE__ */ jsxs15("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs15("div", { className: "inline-flex items-center space-x-1.5 bg-primary-container text-secondary-container px-2.5 py-1 rounded-full shadow-sm", children: [
            /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[13px]", children: "stars" }),
            /* @__PURE__ */ jsx15("span", { className: "font-label-sm text-label-sm", children: "\uD504\uB9AC\uBBF8\uC5C4 AI \uC2EC\uCE35 \uBD84\uC11D" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { className: "inline-flex items-center space-x-1 bg-surface-container px-2 py-0.5 rounded-full", children: [
            /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-on-surface-variant text-[12px]", children: "menu_book" }),
            /* @__PURE__ */ jsx15("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "PDF \uC18C\uC7A5 \xB7 40P" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx15("h2", { className: "font-headline-md text-headline-md text-on-surface leading-tight", children: "\uC774\uC9C1\uC6B4 \uC2EC\uCE35 \uB9AC\uD3EC\uD2B8 (2025~2026)" }),
          /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-1.5 text-on-surface-variant", children: [
            /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[15px] text-secondary", children: "person_outline" }),
            /* @__PURE__ */ jsx15("span", { className: "font-body-sm text-body-sm", children: "\uAE40\uC11C\uC5F0 \uB2D8 \uB9DE\uCDA4 \uBA85\uB9AC \uC815\uBC00 \uD574\uC11D" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "bg-surface-container-low rounded-lg p-space-sm space-y-1.5", children: [
          /* @__PURE__ */ jsxs15("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-secondary text-[16px] mt-0.5", children: "check_circle" }),
            /* @__PURE__ */ jsx15("span", { className: "font-body-sm text-body-sm text-on-surface", children: "\uC0AC\uC8FC \uC6D0\uAD6D \uBC0F 10\uB144 \uB300\uC6B4\xB7\uC138\uC6B4 \uC815\uBC00 \uBD84\uC11D" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-secondary text-[16px] mt-0.5", children: "check_circle" }),
            /* @__PURE__ */ jsx15("span", { className: "font-body-sm text-body-sm text-on-surface", children: "\uC2DC\uAE30\uBCC4 \uC774\uC9C1 \uC131\uACF5 \uD655\uB960 & \uCEE4\uB9AC\uC5B4 \uC804\uB7B5 \uC218\uB85D" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "flex items-baseline justify-between pt-space-xs", children: [
          /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx15("span", { className: "font-body-md text-body-md line-through text-outline", children: "39,000\uC6D0" }),
            /* @__PURE__ */ jsx15("span", { className: "bg-secondary-container text-on-secondary-container font-label-md text-label-md px-1.5 py-0.5 rounded font-semibold", children: "67% \uD560\uC778" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { className: "flex items-baseline space-x-1", children: [
            /* @__PURE__ */ jsx15("span", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight font-semibold", children: "12,900" }),
            /* @__PURE__ */ jsx15("span", { className: "font-body-md text-body-md text-primary-container", children: "\uC6D0" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: "w-full bg-surface-container-low rounded-xl p-space-sm flex items-center space-x-space-md shadow-sm", children: [
        /* @__PURE__ */ jsx15("div", { className: "relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow", children: /* @__PURE__ */ jsx15("img", { className: "w-full h-full object-cover", "data-alt": "Close-up of an elegant luxury Korean fortune telling book printed on textured cream hanji paper with gold foil typography and subtle astronomical constellations under warm soft sunlight", src: "/assets/img07.jpg" }) }),
        /* @__PURE__ */ jsxs15("div", { className: "flex flex-col justify-center min-w-0 flex-1 space-y-0.5", children: [
          /* @__PURE__ */ jsx15("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-wider", children: "Algorithmic Clarity" }),
          /* @__PURE__ */ jsx15("h3", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uC790\uD3C9\uC9C4\uC804 \uAE30\uBC18 AI \uBA85\uB9AC \uD574\uC11D\uC11C" }),
          /* @__PURE__ */ jsx15("p", { className: "font-body-sm text-body-sm text-on-surface-variant line-clamp-1", children: "\uACB0\uC81C \uC644\uB8CC \uC989\uC2DC \uC0DD\uC131\uB418\uC5B4 \uD3C9\uC0DD \uC5F4\uB78C \uAC00\uB2A5\uD569\uB2C8\uB2E4." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: "space-y-space-sm", children: [
        /* @__PURE__ */ jsxs15("div", { className: "space-y-0.5 px-0.5", children: [
          /* @__PURE__ */ jsx15("h3", { className: "font-title-lg text-title-lg text-on-surface font-semibold", children: "\uACB0\uC81C \uC218\uB2E8" }),
          /* @__PURE__ */ jsx15("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uC6D0\uD558\uC2DC\uB294 \uACB0\uC81C \uBC29\uC2DD\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694" })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "space-y-2", id: "payment-options", children: [
          /* @__PURE__ */ jsxs15("label", { className: "payment-method-item flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200", "data-value": "kakaopay", children: [
            /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-space-md", children: [
              /* @__PURE__ */ jsx15("div", { className: "w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-inner flex-shrink-0", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[20px]", children: "chat_bubble" }) }),
              /* @__PURE__ */ jsxs15("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx15("span", { className: "font-title-md text-title-md text-on-surface", children: "\uCE74\uCE74\uC624\uD398\uC774" }),
                /* @__PURE__ */ jsx15("span", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uCE74\uCE74\uC624\uD398\uC774\uBA38\uB2C8 / \uCE74\uB4DC \uAC04\uD3B8\uACB0\uC81C" })
              ] })
            ] }),
            /* @__PURE__ */ jsx15("div", { className: "radio-indicator w-5 h-5 rounded-full bg-primary-container flex items-center justify-center text-on-primary", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[14px]", children: "check" }) })
          ] }),
          /* @__PURE__ */ jsxs15("label", { className: "payment-method-item flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200", "data-value": "tosspay", children: [
            /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-space-md", children: [
              /* @__PURE__ */ jsx15("div", { className: "w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container flex-shrink-0", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[20px]", children: "send" }) }),
              /* @__PURE__ */ jsxs15("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx15("span", { className: "font-title-md text-title-md text-on-surface", children: "\uD1A0\uC2A4\uD398\uC774" }),
                /* @__PURE__ */ jsx15("span", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uACC4\uC88C \uBC0F \uD1A0\uC2A4\uBA38\uB2C8 1\uCD08 \uACB0\uC81C" })
              ] })
            ] }),
            /* @__PURE__ */ jsx15("div", { className: "radio-indicator w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-transparent", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[14px]", children: "check" }) })
          ] }),
          /* @__PURE__ */ jsxs15("label", { className: "payment-method-item flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200", "data-value": "naverpay", children: [
            /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-space-md", children: [
              /* @__PURE__ */ jsx15("div", { className: "w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary-container flex-shrink-0", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[20px]", children: "savings" }) }),
              /* @__PURE__ */ jsxs15("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx15("span", { className: "font-title-md text-title-md text-on-surface", children: "\uB124\uC774\uBC84\uD398\uC774" }),
                /* @__PURE__ */ jsx15("span", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uB124\uC774\uBC84\uD398\uC774 \uD3EC\uC778\uD2B8 \uCD5C\uB300 3% \uC801\uB9BD" })
              ] })
            ] }),
            /* @__PURE__ */ jsx15("div", { className: "radio-indicator w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-transparent", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[14px]", children: "check" }) })
          ] }),
          /* @__PURE__ */ jsxs15("label", { className: "payment-method-item flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200", "data-value": "card", children: [
            /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-space-md", children: [
              /* @__PURE__ */ jsx15("div", { className: "w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface flex-shrink-0", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[20px]", children: "credit_card" }) }),
              /* @__PURE__ */ jsxs15("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx15("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC2E0\uC6A9\xB7\uCCB4\uD06C\uCE74\uB4DC" }),
                /* @__PURE__ */ jsx15("span", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uBAA8\uB4E0 \uAD6D\uB0B4 \uCE74\uB4DC\uC0AC \uBB34\uC774\uC790 \uD560\uBD80 \uC9C0\uC6D0" })
              ] })
            ] }),
            /* @__PURE__ */ jsx15("div", { className: "radio-indicator w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-transparent", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[14px]", children: "check" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: "space-y-space-sm", children: [
        /* @__PURE__ */ jsx15("h3", { className: "font-title-lg text-title-lg text-on-surface font-semibold px-0.5", children: "\uC57D\uAD00 \uB3D9\uC758" }),
        /* @__PURE__ */ jsxs15("div", { className: "bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm", children: [
          /* @__PURE__ */ jsxs15("div", { className: "flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg cursor-pointer transition-colors", id: "agree-all-btn", children: [
            /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-2.5", children: [
              /* @__PURE__ */ jsx15("div", { className: "w-5 h-5 rounded bg-primary-container text-on-primary flex items-center justify-center transition-colors", id: "agree-all-check", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[16px]", children: "check" }) }),
              /* @__PURE__ */ jsx15("span", { className: "font-title-md text-title-md text-on-surface font-semibold", children: "\uC8FC\uBB38 \uBC0F \uC57D\uAD00 \uC804\uCCB4 \uB3D9\uC758" })
            ] }),
            /* @__PURE__ */ jsx15("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold", children: "\uD544\uC218 \uB3D9\uC758" })
          ] }),
          /* @__PURE__ */ jsxs15("div", { className: "space-y-2.5 pt-1 px-1", children: [
            /* @__PURE__ */ jsxs15("div", { className: "flex items-center justify-between text-on-surface-variant", children: [
              /* @__PURE__ */ jsxs15("label", { className: "sub-check-label flex items-center space-x-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ jsx15("div", { className: "sub-check-box w-4 h-4 rounded bg-primary-container text-on-primary flex items-center justify-center text-[12px] transition-colors", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[12px]", children: "check" }) }),
                /* @__PURE__ */ jsxs15("span", { className: "font-body-sm text-body-sm text-on-surface", children: [
                  "\uACB0\uC81C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758",
                  " ",
                  /* @__PURE__ */ jsx15("span", { className: "text-error font-medium", children: "(\uD544\uC218)" })
                ] })
              ] }),
              /* @__PURE__ */ jsx15("button", { className: "font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface px-1 py-0.5 rounded hover:bg-surface-container", type: "button", children: "\uBCF4\uAE30" })
            ] }),
            /* @__PURE__ */ jsxs15("div", { className: "flex items-center justify-between text-on-surface-variant", children: [
              /* @__PURE__ */ jsxs15("label", { className: "sub-check-label flex items-center space-x-2 cursor-pointer select-none", children: [
                /* @__PURE__ */ jsx15("div", { className: "sub-check-box w-4 h-4 rounded bg-primary-container text-on-primary flex items-center justify-center text-[12px] transition-colors", children: /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[12px]", children: "check" }) }),
                /* @__PURE__ */ jsxs15("span", { className: "font-body-sm text-body-sm text-on-surface", children: [
                  "\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758",
                  " ",
                  /* @__PURE__ */ jsx15("span", { className: "text-error font-medium", children: "(\uD544\uC218)" })
                ] })
              ] }),
              /* @__PURE__ */ jsx15("button", { className: "font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface px-1 py-0.5 rounded hover:bg-surface-container", type: "button", children: "\uBCF4\uAE30" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: "w-full bg-surface-container-high rounded-xl p-space-md space-y-1.5 shadow-sm", children: [
        /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-1.5 text-secondary", children: [
          /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[18px]", children: "info" }),
          /* @__PURE__ */ jsx15("span", { className: "font-title-md text-title-md text-on-surface font-semibold", children: "\uB9AC\uD3EC\uD2B8 \uC0DD\uC131\uC774 \uC2DC\uC791\uB418\uBA74 \uD658\uBD88\uC774 \uBD88\uAC00\uD569\uB2C8\uB2E4" })
        ] }),
        /* @__PURE__ */ jsxs15("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: [
          "\uB514\uC9C0\uD138 \uB9DE\uCDA4 \uCF58\uD150\uCE20 \uD2B9\uC131\uC0C1 AI \uBD84\uC11D \uBC0F \uBB38\uC11C \uC0DD\uC131\uC774 \uC2DC\uC791\uB41C \uD6C4\uC5D0\uB294 \uCCAD\uC57D \uCCA0\uD68C \uBC0F \uD658\uBD88\uC774 \uC81C\uD55C\uB429\uB2C8\uB2E4. \uC0DD\uC131 \uC911 \uBB38\uC81C \uBC1C\uC0DD\uC774\uB098 \uBB38\uC758\uC0AC\uD56D\uC740",
          " ",
          /* @__PURE__ */ jsx15("button", { className: "text-on-surface underline font-medium", type: "button", children: "\uACE0\uAC1D\uC13C\uD130" }),
          "\uB97C \uC774\uC6A9\uD574 \uC8FC\uC138\uC694."
        ] })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: "flex items-center justify-center space-x-3 py-space-xs text-on-surface-variant opacity-80", children: [
        /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[16px]", children: "verified_user" }),
          /* @__PURE__ */ jsx15("span", { className: "font-label-sm text-label-sm", children: "\uD55C\uAD6D\uBA85\uB9AC\uD559\uD68C \uB370\uC774\uD130 \uAC80\uC99D" })
        ] }),
        /* @__PURE__ */ jsx15("span", { className: "text-outline-variant", children: "\u2022" }),
        /* @__PURE__ */ jsxs15("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[16px]", children: "lock" }),
          /* @__PURE__ */ jsx15("span", { className: "font-label-sm text-label-sm", children: "\uAC1C\uC778\uC815\uBCF4 \uC548\uC804 \uD3D0\uAE30" })
        ] })
      ] }),
      /* @__PURE__ */ jsx15("div", { className: "fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md pb-safe pt-space-sm px-margin-mobile shadow-[0_-8px_24px_rgba(19,27,46,0.06)]", children: /* @__PURE__ */ jsxs15("div", { className: "max-w-[480px] mx-auto flex flex-col space-y-space-xs", children: [
        /* @__PURE__ */ jsxs15("div", { className: "flex items-baseline justify-between px-1", children: [
          /* @__PURE__ */ jsx15("span", { className: "font-label-lg text-label-lg text-on-surface-variant", children: "\uCD1D \uACB0\uC81C \uAE08\uC561" }),
          /* @__PURE__ */ jsxs15("div", { className: "flex items-baseline space-x-0.5", children: [
            /* @__PURE__ */ jsx15("span", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container font-semibold", children: "12,900" }),
            /* @__PURE__ */ jsx15("span", { className: "font-title-md text-title-md text-primary-container", children: "\uC6D0" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs15("button", { className: "w-full bg-primary-container text-on-primary hover:bg-inverse-surface active:scale-[0.99] transition-all duration-150 py-3.5 px-space-md rounded-lg flex items-center justify-center space-x-2 shadow-md", id: "pay-submit-btn", type: "button", children: [
          /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[18px] text-secondary-container", children: "lock" }),
          /* @__PURE__ */ jsx15("span", { className: "font-title-md text-title-md text-on-primary font-semibold", children: "12,900\uC6D0 \uACB0\uC81C\uD558\uAE30" })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "flex items-center justify-center space-x-1 pb-1 text-on-surface-variant", children: [
          /* @__PURE__ */ jsx15("span", { className: "material-symbols-outlined text-[13px] text-secondary", children: "shield" }),
          /* @__PURE__ */ jsx15("span", { className: "font-label-sm text-label-sm", children: "\uC548\uC804\uD55C 256-bit SSL \uC554\uD638\uD654 \uACB0\uC81C \uC2DC\uC2A4\uD15C" })
        ] })
      ] }) })
    ] }) })
  ] });
}

// src/screens/ReportLoading.tsx
import { useEffect as useEffect9 } from "react";
import { Fragment as Fragment16, jsx as jsx16, jsxs as jsxs16 } from "react/jsx-runtime";
var BODY_CLASS16 = "bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col antialiased selection:bg-secondary-fixed";
function ReportLoading() {
  useBodyClass(BODY_CLASS16);
  useEffect9(() => {
    const numEl = byId("progress-number");
    const barEl = byId("progress-bar-fill");
    const circleEl = byId("celestial-circle");
    let val = 72;
    const interval = setInterval(() => {
      if (val < 78) {
        val += 1;
        if (numEl) numEl.textContent = String(val);
        if (barEl) barEl.style.width = val + "%";
        if (circleEl) {
          const offset = 440 - 440 * (val / 100);
          circleEl.style.strokeDashoffset = String(offset);
        }
      } else {
        clearInterval(interval);
      }
    }, 4500);
    const btn = byId("exit-notify-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        if (window.history && window.history.length > 1) {
          window.history.back();
        } else {
          alert("\uC54C\uB9BC \uC124\uC815\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCC3D\uC744 \uB2EB\uC73C\uC154\uB3C4 \uC548\uC804\uD569\uB2C8\uB2E4.");
        }
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs16(Fragment16, { children: [
    /* @__PURE__ */ jsx16("header", { className: "fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)]", children: /* @__PURE__ */ jsxs16("div", { className: "h-14 px-margin-mobile flex items-center justify-between", children: [
      /* @__PURE__ */ jsx16("button", { "aria-label": "Close", className: "w-11 h-11 -ml-space-xs flex items-center justify-center rounded-full text-on-surface hover:text-on-surface-variant transition-colors", onClick: () => history.back(), children: /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-[24px]", children: "close" }) }),
      /* @__PURE__ */ jsx16("h1", { className: "font-headline-md text-headline-md text-on-surface font-medium truncate tracking-tight", children: "\uB9AC\uD3EC\uD2B8 \uC0DD\uC131 \uC911" }),
      /* @__PURE__ */ jsx16("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-on-primary text-[18px]", children: "person" }) })
    ] }) }),
    /* @__PURE__ */ jsx16("main", { className: "flex-1 flex flex-col relative w-full pt-14 pb-safe bg-surface min-h-screen", children: /* @__PURE__ */ jsxs16("div", { className: "flex flex-col w-full px-margin-mobile pb-space-xl", children: [
      /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-center my-space-md", children: /* @__PURE__ */ jsxs16("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant", children: [
        /* @__PURE__ */ jsx16("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary animate-ping" }),
        /* @__PURE__ */ jsx16("span", { className: "font-label-md text-label-md tracking-wider text-secondary", children: "\uC815\uBC00 \uC2EC\uCE35 \uB9AC\uD3EC\uD2B8 \uC0DD\uC131 \uC911" })
      ] }) }),
      /* @__PURE__ */ jsxs16("div", { className: "relative flex items-center justify-center py-space-md my-space-xs", children: [
        /* @__PURE__ */ jsx16("div", { className: "absolute w-44 h-44 rounded-full bg-secondary-fixed-dim/20 blur-2xl pointer-events-none" }),
        /* @__PURE__ */ jsxs16("div", { className: "relative w-48 h-48 flex items-center justify-center", children: [
          /* @__PURE__ */ jsxs16("svg", { className: "absolute inset-0 w-full h-full -rotate-90", viewBox: "0 0 160 160", children: [
            /* @__PURE__ */ jsx16("circle", { className: "text-surface-variant opacity-60", cx: "80", cy: "80", fill: "none", r: "70", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "4" }),
            /* @__PURE__ */ jsx16("circle", { className: "text-secondary transition-all duration-1000 ease-out", cx: "80", cy: "80", fill: "none", id: "celestial-circle", r: "70", stroke: "currentColor", strokeDasharray: "440", strokeDashoffset: "123", strokeLinecap: "round", strokeWidth: "4.5", style: { strokeDashoffset: "96.8" } })
          ] }),
          /* @__PURE__ */ jsx16("div", { className: "absolute inset-2.5 rounded-full bg-surface-container-low/40 flex items-center justify-center", children: /* @__PURE__ */ jsxs16("div", { className: "w-28 h-28 rounded-full bg-surface-container-lowest shadow-sm flex flex-col items-center justify-center relative overflow-hidden", children: [
            /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-secondary text-[16px] animate-pulse mb-0.5", style: { fontVariationSettings: '"FILL" 1' }, children: "arrow_back_ios_new" }),
            /* @__PURE__ */ jsx16("span", { className: "font-headline-xl text-headline-xl text-primary-container leading-none select-none tracking-tighter", children: "\uACB0" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "flex flex-col items-center text-center mt-space-sm mb-space-lg", children: [
        /* @__PURE__ */ jsx16("h2", { className: "font-headline-xl-mobile text-headline-xl-mobile text-primary-container tracking-tight", children: "\uB9AC\uD3EC\uD2B8\uB97C \uB9CC\uB4E4\uACE0 \uC788\uC5B4\uC694" }),
        /* @__PURE__ */ jsxs16("p", { className: "font-body-md text-body-md text-on-surface-variant mt-1.5 flex items-center gap-1.5 justify-center", children: [
          /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-[18px] text-secondary", children: "hourglass_top" }),
          /* @__PURE__ */ jsx16("span", { className: "", children: "\uC57D 5\uBD84 \uC815\uB3C4 \uAC78\uB824\uC694. \uC644\uB8CC\uB418\uBA74 \uC54C\uB824\uB4DC\uB9B4\uAC8C\uC694" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md", children: [
        /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-between mb-2.5", children: [
          /* @__PURE__ */ jsxs16("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-secondary text-[18px]", children: "auto_graph" }),
            /* @__PURE__ */ jsx16("span", { className: "font-label-lg text-label-lg text-on-surface", children: "\uBD84\uC11D \uC9C4\uD589\uB960" })
          ] }),
          /* @__PURE__ */ jsxs16("div", { className: "flex items-baseline gap-0.5", children: [
            /* @__PURE__ */ jsx16("span", { className: "font-headline-md text-headline-md text-primary-container font-semibold", id: "progress-number", children: "78" }),
            /* @__PURE__ */ jsx16("span", { className: "font-label-md text-label-md text-secondary font-medium", children: "%" })
          ] })
        ] }),
        /* @__PURE__ */ jsx16("div", { className: "w-full h-2.5 bg-surface-container rounded-full overflow-hidden relative", children: /* @__PURE__ */ jsx16("div", { className: "h-full bg-primary-container rounded-full transition-all duration-700 ease-out relative", id: "progress-bar-fill", style: { width: "78%" }, children: /* @__PURE__ */ jsx16("div", { className: "absolute right-0 top-0 bottom-0 w-3 bg-secondary-fixed-dim rounded-full opacity-80 animate-pulse" }) }) })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md", children: [
        /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-between pb-space-sm mb-space-sm", children: [
          /* @__PURE__ */ jsx16("span", { className: "font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold", children: "Stage Checklist" }),
          /* @__PURE__ */ jsx16("span", { className: "font-label-md text-label-md text-secondary", children: "4\uB2E8\uACC4 \uC911 3\uB2E8\uACC4" })
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsxs16("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx16("div", { className: "w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-secondary text-[16px]", style: { fontVariationSettings: "'FILL' 1" }, children: "check" }) }),
            /* @__PURE__ */ jsxs16("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx16("p", { className: "font-title-md text-title-md text-on-surface", children: "\uC0AC\uC8FC \uC6D0\uAD6D \uBD84\uC11D \uC644\uB8CC" }),
                /* @__PURE__ */ jsx16("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "00:45" })
              ] }),
              /* @__PURE__ */ jsx16("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uB144\uC6D4\uC77C\uC2DC \uC0AC\uC8FC\uD314\uC790 \uBC0F \uC624\uD589\uC758 \uC870\uD654 \uACC4\uC0B0" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs16("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx16("div", { className: "w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-secondary text-[16px]", style: { fontVariationSettings: "'FILL' 1" }, children: "check" }) }),
            /* @__PURE__ */ jsxs16("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx16("p", { className: "font-title-md text-title-md text-on-surface", children: "\uB300\uC6B4 \uD750\uB984 \uACC4\uC0B0 \uC644\uB8CC" }),
                /* @__PURE__ */ jsx16("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "01:30" })
              ] }),
              /* @__PURE__ */ jsx16("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "10\uB144 \uB2E8\uC704 \uB300\uC6B4 \uC8FC\uAE30 \uBC0F \uC138\uC6B4 \uAE30\uC6B4 \uB3C4\uCD9C" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs16("div", { className: "flex items-start gap-3 bg-surface-container-low rounded-lg p-2.5 -mx-1", children: [
            /* @__PURE__ */ jsx16("div", { className: "w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shrink-0 mt-0.5 animate-spin", children: /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-on-primary text-[14px]", children: "sync" }) }),
            /* @__PURE__ */ jsxs16("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx16("p", { className: "font-title-md text-title-md text-primary-container font-semibold", children: "\uC2EC\uCE35 \uD574\uC11D \uC791\uC131 \uC911..." }),
                /* @__PURE__ */ jsx16("span", { className: "font-label-sm text-label-sm text-secondary font-semibold", children: "\uC9C4\uD589 \uC911" })
              ] }),
              /* @__PURE__ */ jsx16("p", { className: "font-body-sm text-body-sm text-on-surface mt-0.5", children: "\uC0DD\uB144\uC6D4\uC77C \uAE30\uBC18 \uB9DE\uCDA4 AI \uC870\uC5B8 \uB3C4\uCD9C \uC911" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs16("div", { className: "flex items-start gap-3 opacity-50", children: [
            /* @__PURE__ */ jsx16("div", { className: "w-6 h-6 rounded-full bg-surface-container flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-on-surface-variant text-[14px]", children: "more_horiz" }) }),
            /* @__PURE__ */ jsxs16("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx16("p", { className: "font-title-md text-title-md text-on-surface-variant", children: "\uB9AC\uD3EC\uD2B8 \uAD6C\uC131 \uC911" }),
                /* @__PURE__ */ jsx16("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uB300\uAE30" })
              ] }),
              /* @__PURE__ */ jsx16("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uCD1D\uD3C9 \uC694\uC57D \uBC0F \uC2DC\uAC01\uD654 \uB370\uC774\uD130 \uBC14\uC778\uB529" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "w-full bg-surface-container-low rounded-xl p-space-md mb-space-lg flex items-start gap-3", children: [
        /* @__PURE__ */ jsx16("div", { className: "w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary", children: /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-[18px]", children: "notifications_active" }) }),
        /* @__PURE__ */ jsxs16("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx16("p", { className: "font-label-lg text-label-lg text-primary-container mb-0.5", children: "\uC548\uC2EC\uD558\uACE0 \uD654\uBA74\uC744 \uB2EB\uC73C\uC154\uB3C4 \uB429\uB2C8\uB2E4" }),
          /* @__PURE__ */ jsx16("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\uD654\uBA74\uC744 \uBC97\uC5B4\uB098\uC154\uB3C4 \uBD84\uC11D\uC740 \uBA48\uCD94\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB9AC\uD3EC\uD2B8\uAC00 \uC644\uC131\uB418\uBA74 \uD478\uC2DC \uC54C\uB9BC\uC73C\uB85C \uAC00\uC7A5 \uBA3C\uC800 \uC804\uD574\uB4DC\uB9B4\uAC8C\uC694." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "flex flex-col items-center gap-space-xs mt-auto", children: [
        /* @__PURE__ */ jsxs16("button", { className: "w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-transform", id: "exit-notify-btn", type: "button", children: [
          /* @__PURE__ */ jsx16("span", { className: "material-symbols-outlined text-[18px]", children: "notifications" }),
          /* @__PURE__ */ jsx16("span", { className: "", children: "\uC54C\uB9BC \uBC1B\uACE0 \uB098\uAC00\uAE30" })
        ] }),
        /* @__PURE__ */ jsxs16("p", { className: "font-body-sm text-body-sm text-on-surface-variant text-center pt-1", children: [
          "\uC644\uB8CC\uB41C \uB9AC\uD3EC\uD2B8\uB294",
          " ",
          /* @__PURE__ */ jsx16("span", { className: "text-on-surface font-medium", children: "[\uB0B4 \uC0AC\uC8FC]" }),
          " ",
          "\uBCF4\uAD00\uD568\uC5D0\uC11C \uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        ] })
      ] })
    ] }) })
  ] });
}

// src/screens/CareerMoveReport.tsx
import { Fragment as Fragment17, jsx as jsx17, jsxs as jsxs17 } from "react/jsx-runtime";
var BODY_CLASS17 = "bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen";
function downloadReport() {
  alert("\uAE40\uC11C\uC5F0 \uB2D8\uC758 \uC774\uC9C1\uC6B4 \uB9AC\uD3EC\uD2B8(PDF)\uAC00 \uC548\uC804\uD558\uAC8C \uB2E4\uC6B4\uB85C\uB4DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
}
function sendMailReport() {
  alert("\uB4F1\uB85D\uD558\uC2E0 \uACC4\uC815 \uBA54\uC77C\uD568\uC73C\uB85C \uC815\uBC00 \uBD84\uC11D \uC804\uBB38\uC774 \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
}
function CareerMoveReport() {
  useBodyClass(BODY_CLASS17);
  return /* @__PURE__ */ jsxs17(Fragment17, { children: [
    /* @__PURE__ */ jsxs17("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(19,27,46,0.04)]", children: [
      /* @__PURE__ */ jsxs17("div", { className: "h-14 px-gutter flex items-center justify-between relative", children: [
        /* @__PURE__ */ jsx17("button", { "aria-label": "\uB4A4\uB85C \uAC00\uAE30", className: "w-11 h-11 -ml-space-xs flex items-center justify-center rounded-full text-primary-container active:scale-95 transition-transform", onClick: () => history.back(), children: /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back" }) }),
        /* @__PURE__ */ jsx17("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none", children: /* @__PURE__ */ jsx17("h1", { className: "font-headline-md text-headline-md text-primary-container tracking-tight", children: "\uC774\uC9C1\uC6B4 \uB9AC\uD3EC\uD2B8" }) }),
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
          /* @__PURE__ */ jsx17("button", { "aria-label": "\uB9AC\uD3EC\uD2B8 \uB0B4\uBCF4\uB0B4\uAE30", className: "w-11 h-11 flex items-center justify-center rounded-full text-secondary active:scale-95 transition-transform hover:text-on-secondary-container", children: /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[22px]", children: "download" }) }),
          /* @__PURE__ */ jsx17("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-on-primary text-[18px]", children: "person" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx17("div", { className: "w-full h-[2px] bg-surface-container", children: /* @__PURE__ */ jsx17("div", { className: "h-full bg-secondary-container w-1/3 transition-all duration-300", id: "reading-progress-bar" }) })
    ] }),
    /* @__PURE__ */ jsx17("main", { className: "flex flex-col relative w-full pt-14 bg-surface pb-safe min-h-screen", children: /* @__PURE__ */ jsxs17("div", { className: "flex flex-col w-full relative", children: [
      /* @__PURE__ */ jsxs17("div", { className: "sticky top-14 z-40 w-full bg-surface-container-low px-margin py-space-xs flex items-center justify-between shadow-sm", children: [
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
          /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[15px] text-secondary", children: "auto_stories" }),
          /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md text-on-surface-variant", children: "\uB3C5\uC11C \uC9C4\uD589\uB3C4" })
        ] }),
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-sm flex-1 max-w-[180px] ml-space-md", children: [
          /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx17("div", { className: "bg-secondary h-full rounded-full w-[38%] transition-all duration-300" }) }),
          /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md text-secondary font-semibold", children: "38%" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs17("div", { className: "px-margin flex flex-col gap-space-xl pb-28 pt-space-lg", children: [
        /* @__PURE__ */ jsxs17("section", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx17("div", { className: "w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-space-md shadow-sm relative", children: /* @__PURE__ */ jsx17("div", { className: "absolute inset-1 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-inner", children: /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-secondary text-[28px]", style: { fontVariationSettings: "'FILL' 1" }, children: "stars" }) }) }),
          /* @__PURE__ */ jsxs17("div", { className: "inline-flex items-center gap-space-xs px-space-md py-1 bg-surface-container rounded-full text-secondary font-label-md text-label-md mb-space-sm", children: [
            /* @__PURE__ */ jsx17("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
            "AI \uC815\uBC00 \uBA85\uB9AC \uB9AC\uD3EC\uD2B8 \xB7 \uC774\uC9C1 & \uCEE4\uB9AC\uC5B4\uD3B8"
          ] }),
          /* @__PURE__ */ jsxs17("h1", { className: "font-headline-xl-mobile text-headline-xl-mobile text-primary-container tracking-tight mt-space-xs mb-space-md", children: [
            "\uC0C8\uB85C\uC6B4 \uAE38\uC744 \uC5EC\uB294 \uB54C",
            /* @__PURE__ */ jsx17("br", {}),
            " ",
            /* @__PURE__ */ jsx17("span", { className: "text-secondary font-headline-lg-mobile text-headline-lg-mobile", children: "\uAE40\uC11C\uC5F0 \uB2D8\uC758 \uC774\uC9C1\uC6B4 \uC2EC\uCE35 \uBCF4\uACE0\uC11C" })
          ] }),
          /* @__PURE__ */ jsx17("p", { className: "font-body-md text-body-md text-on-surface-variant max-w-xs mb-space-lg", children: "\uCC9C\uAC04\uC758 \uD070 \uB098\uBB34\uAC00 \uBFCC\uB9AC\uB97C \uB0B4\uB824 \uBE44\uB85C\uC18C \uD478\uB978 \uC232\uC744 \uC774\uB8E8\uB294 \uBA85\uB9AC\uC801 \uBD84\uAE30\uC810\uC758 \uAE30\uB85D" }),
          /* @__PURE__ */ jsxs17("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-lg text-left shadow-sm", children: [
            /* @__PURE__ */ jsxs17("div", { className: "flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low px-space-md py-space-xs rounded-lg", children: [
              /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md text-on-surface-variant", children: "\uBC1C\uD589 \uB4F1\uB85D\uBC88\uD638" }),
              /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md font-semibold text-primary-container", children: "#SR-88412 \xB7 2025. 02. 24" })
            ] }),
            /* @__PURE__ */ jsxs17("div", { className: "grid grid-cols-1 gap-space-sm pt-space-xs", children: [
              /* @__PURE__ */ jsxs17("div", { className: "flex justify-between items-center text-left", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-label-lg text-label-lg text-on-surface-variant", children: "\uBD84\uC11D \uB300\uC0C1" }),
                /* @__PURE__ */ jsx17("span", { className: "font-title-md text-title-md text-primary-container", children: "\uAE40\uC11C\uC5F0 (\uC5EC\uBA85)" })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "flex justify-between items-center text-left", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-label-lg text-label-lg text-on-surface-variant", children: "\uC0DD\uB144\uC6D4\uC77C\uC2DC" }),
                /* @__PURE__ */ jsx17("span", { className: "font-body-md text-body-md text-on-surface", children: "1994\uB144 10\uC6D4 24\uC77C 08:30 (\uC74C\uB825)" })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "flex justify-between items-center text-left", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-label-lg text-label-lg text-on-surface-variant", children: "\uC0AC\uC8FC \uC6D0\uAD6D \uC77C\uC8FC" }),
                /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
                  /* @__PURE__ */ jsx17("span", { className: "px-2 py-0.5 rounded bg-surface-container-highest text-primary-container font-semibold font-label-md text-label-md", children: "\uAC11\uC790(\u7532\u5B50)\uC77C\uC8FC" }),
                  /* @__PURE__ */ jsx17("span", { className: "font-body-sm text-body-sm text-secondary", children: "\uCCAD\uC544\uD55C \uC9C0\uD61C\uBAA9" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs17("div", { className: "w-full flex items-center justify-center my-space-lg gap-space-md", children: [
            /* @__PURE__ */ jsx17("div", { className: "h-[1px] bg-surface-container-highest flex-1" }),
            /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-1.5 text-secondary-container", children: [
              /* @__PURE__ */ jsx17("span", { className: "w-1 h-1 rounded-full bg-secondary" }),
              /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[16px] text-secondary", children: "wb_twilight" }),
              /* @__PURE__ */ jsx17("span", { className: "w-1 h-1 rounded-full bg-secondary" })
            ] }),
            /* @__PURE__ */ jsx17("div", { className: "h-[1px] bg-surface-container-highest flex-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs17("section", { className: "w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm", id: "toc", children: [
          /* @__PURE__ */ jsxs17("div", { className: "flex items-center justify-between mb-space-md", children: [
            /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
              /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-secondary text-[20px]", children: "menu_book" }),
              /* @__PURE__ */ jsx17("h2", { className: "font-title-lg text-title-lg text-primary-container", children: "\uB9AC\uD3EC\uD2B8 \uBAA9\uCC28 (Index)" })
            ] }),
            /* @__PURE__ */ jsx17("span", { className: "font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded-full text-on-surface-variant", children: "\uCD1D 4\uC7A5 (\uC57D 10\uD398\uC774\uC9C0)" })
          ] }),
          /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-space-xs", children: [
            /* @__PURE__ */ jsxs17("a", { className: "flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group", href: "#chapter-1", children: [
              /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-sm min-w-0", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md font-bold text-secondary", children: "01" }),
                /* @__PURE__ */ jsx17("span", { className: "font-body-md text-body-md text-on-surface group-hover:text-primary-container truncate", children: "\uC81C 1\uC7A5. \uD0C0\uACE0\uB09C \uC9C1\uC5C5\uC801 \uAE30\uC9C8\uACFC \uCC9C\uC9C1\uC758 \uACB0" })
              ] }),
              /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[18px] text-outline-variant", children: "chevron_right" })
            ] }),
            /* @__PURE__ */ jsxs17("a", { className: "flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group", href: "#chapter-2", children: [
              /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-sm min-w-0", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md font-bold text-secondary", children: "02" }),
                /* @__PURE__ */ jsx17("span", { className: "font-body-md text-body-md text-on-surface group-hover:text-primary-container truncate", children: "\uC81C 2\uC7A5. 2025~2026\uB144 \uB300\uC6B4\uACFC \uC9C1\uC5C5 \uC774\uB3D9\uC218" })
              ] }),
              /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[18px] text-outline-variant", children: "chevron_right" })
            ] }),
            /* @__PURE__ */ jsxs17("a", { className: "flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group", href: "#chapter-3", children: [
              /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-sm min-w-0", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md font-bold text-secondary", children: "03" }),
                /* @__PURE__ */ jsx17("span", { className: "font-body-md text-body-md text-on-surface group-hover:text-primary-container truncate", children: "\uC81C 3\uC7A5. \uCD5C\uC801\uC758 \uC774\uC9C1 \uD0C0\uC774\uBC0D & \uC720\uB9AC\uD55C \uBC29\uC704" })
              ] }),
              /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[18px] text-outline-variant", children: "chevron_right" })
            ] }),
            /* @__PURE__ */ jsxs17("a", { className: "flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group", href: "#chapter-4", children: [
              /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-sm min-w-0", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md font-bold text-secondary", children: "04" }),
                /* @__PURE__ */ jsx17("span", { className: "font-body-md text-body-md text-on-surface group-hover:text-primary-container truncate", children: "\uC81C 4\uC7A5. \uC0C8\uB85C\uC6B4 \uC870\uC9C1\uACFC\uC758 \uAD81\uD569 \uBC0F \uCEE4\uB9AC\uC5B4 \uC870\uC5B8" })
              ] }),
              /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[18px] text-outline-variant", children: "chevron_right" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs17("article", { className: "flex flex-col gap-space-md scroll-mt-24", id: "chapter-1", children: [
          /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
            /* @__PURE__ */ jsx17("span", { className: "px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm", children: "CHAPTER 01" }),
            /* @__PURE__ */ jsx17("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-wider", children: "Inherent Aptitude" })
          ] }),
          /* @__PURE__ */ jsx17("h2", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight", children: "\uC81C 1\uC7A5. \uD0C0\uACE0\uB09C \uC9C1\uC5C5\uC801 \uAE30\uC9C8\uACFC \uCC9C\uC9C1\uC758 \uACB0" }),
          /* @__PURE__ */ jsxs17("div", { className: "bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md", children: [
            /* @__PURE__ */ jsxs17("p", { className: "font-body-lg text-body-lg text-on-surface leading-relaxed", children: [
              "\uBA85\uB9AC\uD559\uC801\uC73C\uB85C \uAE40\uC11C\uC5F0 \uB2D8\uC740 \uAC70\uB300\uD55C \uACE7\uC740 \uB098\uBB34\uC778",
              " ",
              /* @__PURE__ */ jsx17("strong", { className: "font-semibold text-primary-container", children: "\uAC11\uBAA9(\u7532\u6728)" }),
              "\uC774 \uB9D1\uACE0 \uAE4A\uC740 \uC0D8\uBB3C\uC778",
              " ",
              /* @__PURE__ */ jsx17("strong", { className: "font-semibold text-primary-container", children: "\uC790\uC218(\u5B50\u6C34)" }),
              "\uC758 \uC778\uC131(\u5370\u661F)\uC744 \uD488\uACE0 \uC788\uB294 \uD615\uAD6D\uC785\uB2C8\uB2E4. \uBCF8\uB798 \uC0AC\uC720\uAC00 \uAE4A\uACE0 \uC9C1\uAD00\uB825\uC774 \uB6F0\uC5B4\uB098\uBA70, \uB2E8\uC21C \uBC18\uBCF5 \uC5C5\uBB34\uBCF4\uB2E4\uB294 \uAC70\uC2DC\uC801 \uAE30\uD68D\uACFC \uC804\uBB38 \uC601\uC5ED \uAD6C\uCD95\uC5D0\uC11C \uB3C5\uBCF4\uC801\uC778 \uAE30\uB7C9\uC744 \uBC1C\uD718\uD569\uB2C8\uB2E4."
            ] }),
            /* @__PURE__ */ jsxs17("blockquote", { className: "bg-surface-container-low rounded-lg p-space-md flex gap-space-sm my-space-xs", children: [
              /* @__PURE__ */ jsx17("div", { className: "w-1 bg-secondary rounded-full flex-shrink-0" }),
              /* @__PURE__ */ jsx17("p", { className: "font-body-md text-body-md text-secondary font-medium italic", children: "\u201C\uB098\uBB34\uAC00 \uB2E8\uB2E8\uD55C \uBFCC\uB9AC\uB97C \uB0B4\uB9AC\uB4EF, \uC9C0\uAE08 \uACAA\uB294 \uACE0\uBBFC\uC740 \uC131\uC7A5\uC758 \uD55C\uACC4\uAC00 \uC544\uB2C8\uB77C \uC0C8\uB85C\uC6B4 \uBE44\uC625\uD55C \uD1A0\uC591\uC73C\uB85C \uBED7\uC5B4\uAC00\uAE30 \uC704\uD55C \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC0DD\uBA85\uB825\uC758 \uBC1C\uD604\uC785\uB2C8\uB2E4.\u201D" })
            ] }),
            /* @__PURE__ */ jsx17("p", { className: "font-body-md text-body-md text-on-surface-variant leading-relaxed", children: "\uAE30\uC874\uC758 \uD2C0\uC5D0 \uC548\uC8FC\uD558\uAE30\uBCF4\uB2E4\uB294 \uC790\uC728\uC131\uC774 \uBCF4\uC7A5\uB418\uB294 \uD658\uACBD\uC5D0\uC11C \uC9C4\uCDE8\uC801\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8\uB97C \uC8FC\uB3C4\uD560 \uB54C \uC2EC\uB9AC\uC801 \uB9CC\uC871\uACFC \uACBD\uC81C\uC801 \uACB0\uC2E4\uC774 \uB3D9\uC2DC\uC5D0 \uB530\uB985\uB2C8\uB2E4." }),
            /* @__PURE__ */ jsxs17("div", { className: "mt-space-sm pt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm", children: [
              /* @__PURE__ */ jsxs17("div", { className: "flex justify-between items-center mb-space-xs", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-title-md text-title-md text-primary-container", children: "\uC624\uD589(\u4E94\u884C) \uC5D0\uB108\uC9C0 \uBD84\uD3EC\uB3C4" }),
                /* @__PURE__ */ jsx17("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC0AC\uC8FC \uC6D0\uAD6D \uAE30\uC900" })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxs17("div", { className: "flex justify-between font-label-md text-label-md", children: [
                  /* @__PURE__ */ jsxs17("span", { className: "text-on-surface font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx17("span", { className: "w-2 h-2 rounded-full bg-primary-container" }),
                    "\u6728 (\uB098\uBB34 / \uCD94\uC9C4\uB825)"
                  ] }),
                  /* @__PURE__ */ jsx17("span", { className: "text-primary-container font-semibold", children: "32% \xB7 \uAC15\uD568" })
                ] }),
                /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx17("div", { className: "bg-primary-container h-full rounded-full w-[32%]" }) })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxs17("div", { className: "flex justify-between font-label-md text-label-md", children: [
                  /* @__PURE__ */ jsxs17("span", { className: "text-on-surface font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx17("span", { className: "w-2 h-2 rounded-full bg-secondary" }),
                    "\u706B (\uBD88 / \uD45C\uD604\uB825)"
                  ] }),
                  /* @__PURE__ */ jsx17("span", { className: "text-secondary font-semibold", children: "18% \xB7 \uBCF4\uD1B5" })
                ] }),
                /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx17("div", { className: "bg-secondary h-full rounded-full w-[18%]" }) })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxs17("div", { className: "flex justify-between font-label-md text-label-md", children: [
                  /* @__PURE__ */ jsxs17("span", { className: "text-on-surface-variant flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx17("span", { className: "w-2 h-2 rounded-full bg-outline" }),
                    "\u571F (\uD759 / \uD3EC\uC6A9\uC131)"
                  ] }),
                  /* @__PURE__ */ jsx17("span", { className: "text-on-surface-variant", children: "8% \xB7 \uC57D\uD568" })
                ] }),
                /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx17("div", { className: "bg-outline h-full rounded-full w-[8%]" }) })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxs17("div", { className: "flex justify-between font-label-md text-label-md", children: [
                  /* @__PURE__ */ jsxs17("span", { className: "text-on-surface font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx17("span", { className: "w-2 h-2 rounded-full bg-surface-tint" }),
                    "\u91D1 (\uC1E0 / \uACB0\uB2E8\uB825)"
                  ] }),
                  /* @__PURE__ */ jsx17("span", { className: "text-on-surface font-semibold", children: "17% \xB7 \uADE0\uD615" })
                ] }),
                /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx17("div", { className: "bg-surface-tint h-full rounded-full w-[17%]" }) })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsxs17("div", { className: "flex justify-between font-label-md text-label-md", children: [
                  /* @__PURE__ */ jsxs17("span", { className: "text-on-surface font-semibold flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx17("span", { className: "w-2 h-2 rounded-full bg-primary-container" }),
                    "\u6C34 (\uBB3C / \uC9C0\uD61C)"
                  ] }),
                  /* @__PURE__ */ jsx17("span", { className: "text-primary-container font-semibold", children: "25% \xB7 \uC655\uC131" })
                ] }),
                /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx17("div", { className: "bg-primary-container h-full rounded-full w-[25%]" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs17("article", { className: "flex flex-col gap-space-md scroll-mt-24", id: "chapter-2", children: [
          /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
            /* @__PURE__ */ jsx17("span", { className: "px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm", children: "CHAPTER 02" }),
            /* @__PURE__ */ jsx17("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-wider", children: "Career Transition Flow" })
          ] }),
          /* @__PURE__ */ jsx17("h2", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight", children: "\uC81C 2\uC7A5. 2025~2026\uB144 \uB300\uC6B4\uACFC \uC138\uC6B4\uC758 \uC9C1\uC5C5 \uC774\uB3D9\uC218" }),
          /* @__PURE__ */ jsxs17("div", { className: "bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md", children: [
            /* @__PURE__ */ jsxs17("p", { className: "font-body-lg text-body-lg text-on-surface leading-relaxed", children: [
              "\uB2E4\uAC00\uC624\uB294 \uC744\uC0AC(\u4E59\u5DF3)\uB144\uACFC \uBCD1\uC624(\u4E19\u5348)\uB144\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uB530\uC2A4\uD55C",
              " ",
              /* @__PURE__ */ jsx17("strong", { className: "font-semibold text-primary-container", children: "\uD654(\u706B) \uAE30\uC6B4\uC758 \uC720\uC785" }),
              "\uC740, \uAE34 \uC751\uCD95\uAE30\uB97C \uBCF4\uB0B8 \uCC28\uAC00\uC6B4 \uAC11\uBAA9\uC5D0\uAC8C \uCEE4\uB2E4\uB780 \uAF43\uC744 \uD53C\uC6B0\uAC8C \uD558\uB294 \uACC4\uC808\uC801 \uC804\uD658\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uCE68\uCCB4\uB418\uC5C8\uB358 \uAD00\uC131(\u5B98\u661F)\uACFC \uC2DD\uC0C1(\u98DF\u50B7)\uC774 \uAC15\uD558\uAC8C \uD0C0\uC624\uB974\uBA70 \uC678\uBD80 \uD5E4\uB4DC\uD5CC\uD130 \uC81C\uC548\uC774\uB098 \uC720\uB825 \uC778\uC0AC\uC758 \uC2A4\uCE74\uC6B0\uD2B8 \uC774\uB3D9\uC218\uAC00 \uAE09\uACA9\uD788 \uC0C1\uC2B9\uD569\uB2C8\uB2E4."
            ] }),
            /* @__PURE__ */ jsxs17("div", { className: "relative w-full h-44 rounded-lg overflow-hidden my-space-xs shadow-inner", children: [
              /* @__PURE__ */ jsx17("img", { className: "w-full h-full object-cover", "data-alt": "A serene minimalist Korean ink painting landscape depicting a lone strong pine tree on a cliff overlooking misty mountains with a golden morning sun rising in deep navy and warm ivory tones.", src: "/assets/img05.jpg" }),
              /* @__PURE__ */ jsx17("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-space-md", children: /* @__PURE__ */ jsx17("span", { className: "font-label-sm text-label-sm text-surface-bright tracking-wide", children: "\uB3C4\uC57D\uC758 \uC9D5\uD6C4 \xB7 2025 \uD558\uBC18\uAE30 \uBCC0\uACE1\uC810" }) })
            ] }),
            /* @__PURE__ */ jsxs17("div", { className: "bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-md", children: [
              /* @__PURE__ */ jsxs17("div", { className: "flex items-center justify-between pb-space-xs", children: [
                /* @__PURE__ */ jsx17("span", { className: "font-title-md text-title-md text-primary-container", children: "\uC2DC\uAE30\uBCC4 \uC774\uC9C1 \uC131\uACF5 \uD655\uB960 \uBC0F \uAE30\uC6B4 \uBD84\uC11D" }),
                /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-secondary text-[20px]", children: "trending_up" })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-space-md", children: [
                /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg", children: [
                  /* @__PURE__ */ jsxs17("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
                      /* @__PURE__ */ jsx17("span", { className: "w-2 h-2 rounded-full bg-outline" }),
                      /* @__PURE__ */ jsx17("span", { className: "font-title-md text-title-md text-on-surface", children: "2025\uB144 \uC0C1\uBC18\uAE30" })
                    ] }),
                    /* @__PURE__ */ jsx17("span", { className: "font-headline-md text-headline-md text-on-surface font-semibold", children: "75%" })
                  ] }),
                  /* @__PURE__ */ jsx17("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uC900\uBE44 \uBC0F \uC2DC\uC7A5 \uD0D0\uC0C9\uAE30 \xB7 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uC7AC\uC815\uBE44\uC640 \uB124\uD2B8\uC6CC\uD0B9\uC5D0 \uC801\uD569" }),
                  /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-1", children: /* @__PURE__ */ jsx17("div", { className: "bg-on-surface-variant h-full rounded-full w-[75%]" }) })
                ] }),
                /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg shadow-sm relative overflow-hidden", children: [
                  /* @__PURE__ */ jsx17("div", { className: "absolute top-0 right-0 px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-bl-lg font-bold", children: "\uCD5C\uC801\uC758 \uACE8\uB4E0\uD0C0\uC784" }),
                  /* @__PURE__ */ jsxs17("div", { className: "flex justify-between items-center pr-16", children: [
                    /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
                      /* @__PURE__ */ jsx17("span", { className: "w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" }),
                      /* @__PURE__ */ jsx17("span", { className: "font-title-md text-title-md text-primary-container font-bold", children: "2025\uB144 \uD558\uBC18\uAE30" })
                    ] }),
                    /* @__PURE__ */ jsx17("span", { className: "font-headline-md text-headline-md text-secondary font-bold", children: "94%" })
                  ] }),
                  /* @__PURE__ */ jsx17("p", { className: "font-body-sm text-body-sm text-on-surface font-medium", children: "\uC5F0\uBD09 \uD611\uC0C1 \uBC0F \uC9C0\uC704 \uB3C4\uC57D \uCD5C\uC0C1 \xB7 \uB3D9\uB0A8(\u6771\u5357)\uBC29\uD5A5\uC758 \uC0C8\uB85C\uC6B4 \uD130\uC804 \uC720\uB825" }),
                  /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden mt-1", children: /* @__PURE__ */ jsx17("div", { className: "bg-secondary h-full rounded-full w-[94%]" }) })
                ] }),
                /* @__PURE__ */ jsxs17("div", { className: "flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg", children: [
                  /* @__PURE__ */ jsxs17("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
                      /* @__PURE__ */ jsx17("span", { className: "w-2 h-2 rounded-full bg-surface-tint" }),
                      /* @__PURE__ */ jsx17("span", { className: "font-title-md text-title-md text-on-surface", children: "2026\uB144 \uC0C1\uBC18\uAE30" })
                    ] }),
                    /* @__PURE__ */ jsx17("span", { className: "font-headline-md text-headline-md text-on-surface font-semibold", children: "82%" })
                  ] }),
                  /* @__PURE__ */ jsx17("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uC0C8 \uC870\uC9C1 \uC548\uCC29\uAE30 \xB7 \uAD8C\uD55C \uD655\uB300 \uBC0F \uD575\uC2EC \uD504\uB85C\uC81D\uD2B8\uC758 \uC8FC\uB3C4\uC801 \uC644\uC218" }),
                  /* @__PURE__ */ jsx17("div", { className: "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-1", children: /* @__PURE__ */ jsx17("div", { className: "bg-surface-tint h-full rounded-full w-[82%]" }) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs17("article", { className: "flex flex-col gap-space-md scroll-mt-24", id: "chapter-3", children: [
          /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
            /* @__PURE__ */ jsx17("span", { className: "px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm", children: "CHAPTER 03" }),
            /* @__PURE__ */ jsx17("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-wider", children: "Timing & Direction" })
          ] }),
          /* @__PURE__ */ jsx17("h2", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight", children: "\uC81C 3\uC7A5. \uCD5C\uC801\uC758 \uC774\uC9C1 \uD0C0\uC774\uBC0D & \uC720\uB9AC\uD55C \uBC29\uC704" }),
          /* @__PURE__ */ jsxs17("div", { className: "bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md", children: [
            /* @__PURE__ */ jsxs17("p", { className: "font-body-lg text-body-lg text-on-surface leading-relaxed", children: [
              "\uAE40\uC11C\uC5F0 \uB2D8\uC5D0\uAC8C \uAC00\uC7A5 \uAE38(\u5409)\uD55C \uC774\uB3D9 \uBC29\uD5A5\uC740 \uC0DD\uAE30(\u751F\u6C23)\uB97C \uD488\uC740",
              " ",
              /* @__PURE__ */ jsx17("strong", { className: "font-semibold text-primary-container", children: "\uB3D9\uB0A8\uCABD(\u6771\u5357)" }),
              "\uACFC \uACB0\uC2E4\uC758 \uAE30\uC6B4\uC774 \uB2FF\uB294",
              " ",
              /* @__PURE__ */ jsx17("strong", { className: "font-semibold text-primary-container", children: "\uB0A8\uCABD(\u5357)" }),
              "\uC785\uB2C8\uB2E4. \uBC18\uBA74 \uACA8\uC6B8 \uC218\uAE30\uC6B4\uC774 \uACFC\uD55C \uC11C\uBD81\uBC29 \uC774\uB3D9\uC740 \uD53C\uD558\uB294 \uAC83\uC774 \uC774\uB86D\uC2B5\uB2C8\uB2E4."
            ] }),
            /* @__PURE__ */ jsxs17("div", { className: "grid grid-cols-1 gap-space-sm", children: [
              /* @__PURE__ */ jsxs17("div", { className: "bg-surface-container-low p-space-md rounded-lg flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-sm", children: [
                  /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-secondary text-[22px]", children: "explore" }),
                  /* @__PURE__ */ jsxs17("div", { children: [
                    /* @__PURE__ */ jsx17("p", { className: "font-title-md text-title-md text-primary-container", children: "\uC720\uB9AC\uD55C \uBC29\uC704 (\u5409\u65B9)" }),
                    /* @__PURE__ */ jsx17("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uD604 \uAC70\uC8FC\uC9C0 \uAE30\uC900 \uB3D9\uB0A8\uD5A5 \uBC0F \uB0A8\uBD80 \uD14C\uD06C \uBCA8\uD2B8" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx17("span", { className: "px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold", children: "\uB300\uAE38(\u5927\u5409)" })
              ] }),
              /* @__PURE__ */ jsxs17("div", { className: "bg-surface-container-low p-space-md rounded-lg flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-sm", children: [
                  /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-secondary text-[22px]", children: "event_available" }),
                  /* @__PURE__ */ jsxs17("div", { children: [
                    /* @__PURE__ */ jsx17("p", { className: "font-title-md text-title-md text-primary-container", children: "\uACC4\uC57D \uBC0F \uC785\uC0AC \uC801\uAE30" }),
                    /* @__PURE__ */ jsx17("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "2025\uB144 9\uC6D4 ~ 11\uC6D4 (\uAC00\uC744 \uAE08\uD654\uAD50\uC5ED\uAE30)" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx17("span", { className: "px-2 py-0.5 rounded bg-surface-container-highest text-primary-container font-label-sm text-label-sm font-semibold", children: "\uCD5C\uC0C1\uAE30" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs17("article", { className: "flex flex-col gap-space-md scroll-mt-24", id: "chapter-4", children: [
          /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-xs", children: [
            /* @__PURE__ */ jsx17("span", { className: "px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm", children: "CHAPTER 04" }),
            /* @__PURE__ */ jsx17("span", { className: "font-label-sm text-label-sm text-secondary uppercase tracking-wider", children: "Compatibility & Strategy" })
          ] }),
          /* @__PURE__ */ jsx17("h2", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight", children: "\uC81C 4\uC7A5. \uC0C8\uB85C\uC6B4 \uC870\uC9C1\uACFC\uC758 \uAD81\uD569 \uBC0F \uCEE4\uB9AC\uC5B4 \uC870\uC5B8" }),
          /* @__PURE__ */ jsxs17("div", { className: "bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md", children: [
            /* @__PURE__ */ jsx17("p", { className: "font-body-lg text-body-lg text-on-surface leading-relaxed", children: "\uC218\uC0DD\uBAA9(\u6C34\u751F\u6728)\uC758 \uC9C0\uD61C\uB97C \uC874\uC911\uD558\uACE0 \uC790\uC728\uC801 \uAE30\uD68D \uAD8C\uD55C\uC744 \uC704\uC784\uD558\uB294 \uC218\uD3C9\uC801 \uAE30\uC5C5 \uBB38\uD654\uC5D0\uC11C \uC7A0\uC7AC\uB825\uC774 \uADF9\uB300\uD654\uB429\uB2C8\uB2E4. \uACBD\uC9C1\uB41C \uC0C1\uBA85\uD558\uBCF5 \uC870\uC9C1\uBCF4\uB2E4\uB294 \uC804\uBB38 \uC5F0\uAD6C\xB7\uAE30\uD68D\uD615 \uC870\uC9C1\uC744 \uC801\uADF9 \uAD8C\uC7A5\uD569\uB2C8\uB2E4." }),
            /* @__PURE__ */ jsxs17("blockquote", { className: "bg-surface-container-low rounded-lg p-space-md flex gap-space-sm my-space-xs", children: [
              /* @__PURE__ */ jsx17("div", { className: "w-1 bg-secondary rounded-full flex-shrink-0" }),
              /* @__PURE__ */ jsx17("p", { className: "font-body-md text-body-md text-secondary font-medium italic", children: "\u201C\uC131\uAE09\uD55C \uC218\uD3C9 \uC774\uB3D9\uBCF4\uB2E4 \uC790\uC2E0\uC758 \uC9C1\uBB34 \uC804\uBB38\uC131\uC744 \uD55C \uB2E8\uACC4 \uACA9\uC0C1\uC2DC\uD0AC \uC218 \uC788\uB294 \uB9AC\uB354\uC2ED \uB864\uC744 \uBAA9\uD45C\uB85C \uC0BC\uC73C\uC2ED\uC2DC\uC624.\u201D" })
            ] }),
            /* @__PURE__ */ jsxs17("div", { className: "flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg", children: [
              /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md text-on-surface-variant", children: "\uB9AC\uD3EC\uD2B8 \uCD1D \uBD84\uB7C9" }),
              /* @__PURE__ */ jsx17("span", { className: "font-label-md text-label-md font-semibold text-primary-container", children: "\uC57D 10\uD398\uC774\uC9C0 \uC694\uC57D\uBCF8 \uC644\uACB0" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx17("a", { "aria-label": "\uBAA9\uCC28 \uBC14\uB85C\uAC00\uAE30", className: "fixed right-margin bottom-28 z-40 w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg active:scale-95 transition-transform", href: "#toc", children: /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[24px]", children: "list_alt" }) }),
      /* @__PURE__ */ jsxs17("aside", { className: "fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md pb-safe pt-space-sm px-margin shadow-[0_-4px_24px_rgba(19,27,46,0.06)] flex flex-col gap-space-xs", children: [
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-space-sm w-full", children: [
          /* @__PURE__ */ jsxs17("button", { className: "flex-1 h-12 rounded-lg bg-surface-container-high text-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-xs active:scale-[0.98] transition-transform", onClick: () => downloadReport(), children: [
            /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[20px]", children: "download" }),
            "PDF\uB85C \uC800\uC7A5"
          ] }),
          /* @__PURE__ */ jsxs17("button", { className: "flex-1 h-12 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform", onClick: () => sendMailReport(), children: [
            /* @__PURE__ */ jsx17("span", { className: "material-symbols-outlined text-[20px]", children: "mail" }),
            "\uBA54\uC77C\uB85C \uBC1B\uAE30"
          ] })
        ] }),
        /* @__PURE__ */ jsx17("div", { className: "py-space-xs text-center", children: /* @__PURE__ */ jsxs17("p", { className: "font-label-sm text-label-sm text-on-surface-variant", children: [
          "\uBCF8 \uB9AC\uD3EC\uD2B8\uB294 \uC601\uAD6C \uC18C\uC7A5 \uAC00\uB2A5\uD558\uBA70",
          " ",
          /* @__PURE__ */ jsx17("span", { className: "font-semibold text-primary-container", children: "[\uB0B4 \uC0AC\uC8FC]" }),
          " ",
          "\uBCF4\uAD00\uD568\uC5D0 \uC790\uB3D9 \uC800\uC7A5\uB429\uB2C8\uB2E4."
        ] }) })
      ] })
    ] }) })
  ] });
}

// src/screens/More.tsx
import { Fragment as Fragment18, jsx as jsx18, jsxs as jsxs18 } from "react/jsx-runtime";
var BODY_CLASS18 = "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";
function More() {
  useBodyClass(BODY_CLASS18);
  return /* @__PURE__ */ jsxs18(Fragment18, { children: [
    /* @__PURE__ */ jsx18("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe", children: /* @__PURE__ */ jsxs18("div", { className: "h-16 px-margin flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-sm", children: [
        /* @__PURE__ */ jsx18("h1", { className: "font-headline-md text-headline-md text-on-surface tracking-tight", children: "\uB354\uBCF4\uAE30" }),
        /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-secondary tracking-wider uppercase font-semibold", children: "\u547D\u7406" })
      ] }),
      /* @__PURE__ */ jsx18("div", { className: "flex items-center gap-space-xs", children: /* @__PURE__ */ jsx18("button", { "aria-label": "\uC124\uC815 \uB3C4\uC6C0\uB9D0", className: "w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors", type: "button", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[22px]", children: "settings" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx18("main", { className: "flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface", children: /* @__PURE__ */ jsx18("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ jsxs18("div", { className: "w-full max-w-[480px] mx-auto px-margin-mobile py-space-sm flex flex-col gap-space-lg", children: [
      /* @__PURE__ */ jsxs18("div", { className: "relative overflow-hidden bg-primary-container text-on-primary rounded-xl p-margin shadow-md", children: [
        /* @__PURE__ */ jsx18("div", { className: "absolute -right-8 -top-8 w-44 h-44 pointer-events-none opacity-20", children: /* @__PURE__ */ jsxs18("svg", { className: "w-full h-full stroke-secondary-fixed fill-none", strokeWidth: "0.75", viewBox: "0 0 100 100", children: [
          /* @__PURE__ */ jsx18("circle", { cx: "50", cy: "50", r: "46", strokeDasharray: "2 3" }),
          /* @__PURE__ */ jsx18("circle", { cx: "50", cy: "50", r: "36" }),
          /* @__PURE__ */ jsx18("circle", { cx: "50", cy: "50", r: "22", strokeDasharray: "1 2" }),
          /* @__PURE__ */ jsx18("line", { x1: "50", x2: "50", y1: "4", y2: "96" }),
          /* @__PURE__ */ jsx18("line", { x1: "4", x2: "96", y1: "50", y2: "50" }),
          /* @__PURE__ */ jsx18("circle", { className: "fill-secondary-fixed", cx: "50", cy: "50", r: "4" })
        ] }) }),
        /* @__PURE__ */ jsxs18("div", { className: "relative z-10 flex flex-col gap-space-md", children: [
          /* @__PURE__ */ jsxs18("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-sm", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-14 h-14 rounded-full bg-surface-container-highest/20 flex items-center justify-center p-0.5 shadow-sm", children: /* @__PURE__ */ jsxs18("div", { className: "w-full h-full rounded-full bg-primary-container flex items-center justify-center relative overflow-hidden", children: [
                /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-secondary-fixed-dim text-[28px]", style: { fontVariationSettings: "'FILL' 1" }, children: "stars" }),
                /* @__PURE__ */ jsx18("span", { className: "absolute text-[8px] font-label-sm text-secondary-fixed-dim/60 -bottom-0.5", children: "\u547D" })
              ] }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-xs", children: [
                  /* @__PURE__ */ jsx18("h2", { className: "font-headline-md text-headline-md text-on-primary tracking-tight", children: "\uAE40\uC9C4\uD558 \uB2D8" }),
                  /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-secondary-fixed/20 text-secondary-fixed tracking-wider", children: "\uBCF8\uC778" })
                ] }),
                /* @__PURE__ */ jsx18("p", { className: "font-body-sm text-body-sm text-on-primary-container mt-0.5", children: "1994\uB144 6\uC6D4 15\uC77C (\uC591\uB825) \xB7 \u5348\u6642 (12:30)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs18("button", { className: "flex items-center gap-0.5 font-label-sm text-label-sm text-secondary-fixed hover:text-secondary-fixed-dim transition-colors py-1 px-2 rounded-lg hover:bg-surface-container-highest/10", type: "button", children: [
              /* @__PURE__ */ jsx18("span", { className: "", children: "\uC218\uC815" }),
              /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[16px]", children: "edit" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs18("div", { className: "flex items-center justify-between bg-surface-container-highest/10 rounded-lg px-3.5 py-2.5 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-sm", children: [
              /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error text-on-error shadow-sm", children: [
                /* @__PURE__ */ jsx18("span", { className: "w-2 h-2 rounded-full bg-on-error" }),
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md font-semibold tracking-wide", children: "\u4E19\u5348" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm opacity-90", children: "(\uBCD1\uC624\uC77C\uC8FC)" })
              ] }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-secondary-fixed font-medium", children: "\u967D\u706B \xB7 \uD654(\u706B)\uC758 \uBD88\uAF43" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-primary-container", children: "\uC5F4\uC815\uC801\uC778 \uBD89\uC740 \uB9D0\uC758 \uAE30\uC6B4" })
              ] })
            ] }),
            /* @__PURE__ */ jsx18("span", { className: "font-body-sm text-body-sm text-on-primary-container italic font-headline-md opacity-80", children: "\u65E5\u67F1" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs18("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsx18("span", { className: "font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider", children: "\uB0B4 \uB9AC\uD3EC\uD2B8" }),
          /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant font-headline-md", children: "\u5831\u544A\u66F8" })
        ] }),
        /* @__PURE__ */ jsxs18("div", { className: "bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col", children: [
          /* @__PURE__ */ jsxs18("a", { className: "flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors", href: "#", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "auto_stories" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uAD6C\uB9E4\uD55C \uB9AC\uD3EC\uD2B8" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD3C9\uC0DD \uB300\uC6B4 \uBC0F 2026 \uC2E0\uB144 \uC0C1\uC138 \uD480\uC774" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-xs shrink-0", children: [
              /* @__PURE__ */ jsx18("span", { className: "px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold", children: "3\uAC74" }),
              /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-on-surface-variant text-[20px]", children: "chevron_right" })
            ] })
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "h-[1px] bg-surface-container w-full mx-space-md" }),
          /* @__PURE__ */ jsxs18("a", { className: "flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors", href: "#", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "receipt_long" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uACB0\uC81C \uB0B4\uC5ED" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uAD6C\uB9E4 \uC601\uC218\uC99D \uBC0F \uC8FC\uBB38 \uC0C1\uC138 \uD655\uC778" })
              ] })
            ] }),
            /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-on-surface-variant text-[20px] shrink-0", children: "chevron_right" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs18("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsx18("span", { className: "font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider", children: "\uBA85\uB9AC \uC815\uBC00 \uC124\uC815" }),
          /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant font-headline-md", children: "\u8A2D\u5B9A" })
        ] }),
        /* @__PURE__ */ jsxs18("div", { className: "bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col", children: [
          /* @__PURE__ */ jsxs18("a", { className: "flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors", href: "#", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "notifications_none" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uC54C\uB9BC \uC124\uC815" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC624\uB298\uC758 \uC77C\uC9C4, \uC808\uAE30 \uBCC0\uACBD, \uB9DE\uCDA4 \uC6B4\uC138 \uC870\uC5B8" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-xs shrink-0", children: [
              /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-secondary font-medium", children: "\uC624\uC804 8\uC2DC" }),
              /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-on-surface-variant text-[20px]", children: "chevron_right" })
            ] })
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "h-[1px] bg-surface-container w-full mx-space-md" }),
          /* @__PURE__ */ jsxs18("a", { className: "flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors", href: "#", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "tune" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uC0AC\uC8FC \uACC4\uC0B0 \uC635\uC158" }),
                  /* @__PURE__ */ jsx18("span", { className: "px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm", children: "\uD559\uD30C\uBCC4" })
                ] }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant truncate", children: "\uC9C4\uD0DC\uC591\uC2DC \uBCF4\uC815 \uC801\uC6A9 \xB7 \uC57C\uC790\uC2DC/\uC870\uC790\uC2DC \uAD6C\uBD84" })
              ] })
            ] }),
            /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-on-surface-variant text-[20px] shrink-0", children: "chevron_right" })
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "h-[1px] bg-surface-container w-full mx-space-md" }),
          /* @__PURE__ */ jsxs18("a", { className: "flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors", href: "#", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "group" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uC800\uC7A5\uB41C \uBA85\uC2DD \uAD00\uB9AC" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uB098, \uBD80\uBAA8\uB2D8, \uBC30\uC6B0\uC790 \uCD1D 3\uBA85 \uB4F1\uB85D\uB428" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-xs shrink-0", children: [
              /* @__PURE__ */ jsx18("span", { className: "px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm", children: "3\uBA85" }),
              /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-on-surface-variant text-[20px]", children: "chevron_right" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ jsxs18("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsx18("span", { className: "font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider", children: "\uACE0\uAC1D\uC9C0\uC6D0 \uBC0F \uC548\uB0B4" }),
          /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant font-headline-md", children: "\u60C5\u5831" })
        ] }),
        /* @__PURE__ */ jsxs18("div", { className: "bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col", children: [
          /* @__PURE__ */ jsxs18("a", { className: "flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors", href: "#", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "campaign" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC815\uD1B5 \uBA85\uB9AC\uD559 \uBAA8\uB378 v2.1 \uC5C5\uB370\uC774\uD2B8 \uC18C\uC2DD" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsx18("span", { className: "w-1.5 h-1.5 rounded-full bg-error" }),
              /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-on-surface-variant text-[20px]", children: "chevron_right" })
            ] })
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "h-[1px] bg-surface-container w-full mx-space-md" }),
          /* @__PURE__ */ jsxs18("a", { className: "flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors", href: "#", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "support_agent" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "1:1 \uBB38\uC758 \uBC0F \uC81C\uC548" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD3C9\uC77C 10:00 ~ 18:00 (\uB2F5\uBCC0 \uC54C\uB9BC \uC218\uC2E0)" })
              ] })
            ] }),
            /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-on-surface-variant text-[20px] shrink-0", children: "chevron_right" })
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "h-[1px] bg-surface-container w-full mx-space-md" }),
          /* @__PURE__ */ jsxs18("a", { className: "flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors", href: "#", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "policy" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uC774\uC6A9\uC57D\uAD00 \uBC0F \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uC0DD\uB144\uC6D4\uC77C \uB370\uC774\uD130 \uC554\uD638\uD654 \uBCF4\uAD00 \uC815\uCC45" })
              ] })
            ] }),
            /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-on-surface-variant text-[20px] shrink-0", children: "chevron_right" })
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "h-[1px] bg-surface-container w-full mx-space-md" }),
          /* @__PURE__ */ jsxs18("div", { className: "flex items-center justify-between p-space-md", children: [
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md min-w-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0", children: /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[20px]", children: "scan" }) }),
              /* @__PURE__ */ jsxs18("div", { className: "flex flex-col min-w-0", children: [
                /* @__PURE__ */ jsx18("span", { className: "font-title-md text-title-md text-on-surface truncate", children: "\uC571 \uBC84\uC804" }),
                /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant", children: "\uD55C\uAD6D\uCC9C\uBB38\uC5F0\uAD6C\uC6D0 \uC5ED\uC11C \uC54C\uACE0\uB9AC\uC998 \uD0D1\uC7AC" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low shrink-0", children: [
              /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-on-surface-variant font-medium", children: "v1.4.2" }),
              /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-secondary font-semibold", children: "\uCD5C\uC2E0" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "bg-surface-container-low rounded-xl p-space-md flex gap-space-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsx18("div", { className: "w-1 rounded-full bg-secondary shrink-0" }),
        /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx18("p", { className: "font-body-sm text-body-sm text-on-surface italic leading-relaxed", children: "\u201C\uBA85(\u547D)\uC740 \uC815\uD574\uC9C4 \uC6B4\uBA85\uC774 \uC544\uB2C8\uC694, \uC790\uC2E0\uC758 \uAE30\uC6B4\uACFC \uADF8\uB987\uC744 \uBC14\uB85C \uC54C\uC544 \uB098\uC544\uAC10\uACFC \uBB3C\uB7EC\uB0A8\uC744 \uB3C4\uBAA8\uD558\uB294 \uC9C0\uD61C\uC785\uB2C8\uB2E4.\u201D" }),
          /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm text-secondary tracking-wider font-headline-md", children: "\u2014 \u300A\uC790\uD3C9\uC9C4\uC804(\u5B50\u5E73\u771E\u8A6E)\u300B" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "flex flex-col items-center gap-space-sm pt-space-xs pb-space-lg text-center", children: [
        /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-space-md font-label-md text-label-md text-on-surface-variant", children: [
          /* @__PURE__ */ jsx18("button", { className: "hover:text-on-surface transition-colors py-1", type: "button", children: "\uB85C\uADF8\uC544\uC6C3" }),
          /* @__PURE__ */ jsx18("span", { className: "opacity-30", children: "\xB7" }),
          /* @__PURE__ */ jsx18("button", { className: "hover:text-error transition-colors py-1", type: "button", children: "\uD68C\uC6D0\uD0C8\uD1F4" })
        ] }),
        /* @__PURE__ */ jsx18("p", { className: "font-label-sm text-label-sm text-on-surface-variant/80 max-w-[340px] leading-relaxed", children: "\uBCF8 \uC11C\uBE44\uC2A4\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC6B4\uC138\uC640 \uBA85\uB9AC \uBD84\uC11D\uC740 \uC790\uD3C9\uC9C4\uC804 \uBC0F \uACE0\uC804 \uBB38\uD5CC\uC744 \uAE30\uBC18\uC73C\uB85C \uD55C \uC790\uC544 \uD0D0\uC0C9\uC6A9 \uCC38\uACE0 \uCF58\uD150\uCE20\uC785\uB2C8\uB2E4." }),
        /* @__PURE__ */ jsx18("p", { className: "font-label-sm text-label-sm text-on-surface-variant/60 tracking-wider", children: "\xA9 2026 \uACB0 \uC5F0\uAD6C\uC6D0. All rights reserved." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx18("nav", { className: "fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)]", "data-active-classes": "text-primary-container font-semibold", children: /* @__PURE__ */ jsxs18("div", { className: "flex justify-around items-center h-16 px-gutter", children: [
      /* @__PURE__ */ jsxs18("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "home", href: "#", children: [
        /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[22px]", children: "home" }),
        /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm mt-1", children: "\uD648" })
      ] }),
      /* @__PURE__ */ jsxs18("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "my-saju", href: "#", children: [
        /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[22px]", children: "auto_stories" }),
        /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB0B4 \uC0AC\uC8FC" })
      ] }),
      /* @__PURE__ */ jsxs18("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors", "data-path": "ai-chat", href: "#", children: [
        /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[22px]", children: "forum" }),
        /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm mt-1", children: "AI \uC0C1\uB2F4" })
      ] }),
      /* @__PURE__ */ jsxs18("a", { className: "flex flex-col items-center justify-center min-w-[56px] h-14 text-primary-container font-semibold transition-colors", "data-path": "more", href: "#", children: [
        /* @__PURE__ */ jsx18("span", { className: "material-symbols-outlined text-[22px]", children: "more_horiz" }),
        /* @__PURE__ */ jsx18("span", { className: "font-label-sm text-label-sm mt-1", children: "\uB354\uBCF4\uAE30" })
      ] })
    ] }) })
  ] });
}

// src/screens/AccountDelete.tsx
import { useEffect as useEffect10 } from "react";
import { Fragment as Fragment19, jsx as jsx19, jsxs as jsxs19 } from "react/jsx-runtime";
var BODY_CLASS19 = "bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col";
function AccountDelete() {
  useBodyClass(BODY_CLASS19);
  useEffect10(() => {
    const radioGroup = queryAll('input[name="withdrawal_reason"]');
    const otherCard = byId("other-input-container");
    const agreeCheckbox = byId("agree-checkbox");
    const deleteBtn = byId("delete-btn");
    radioGroup.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (e.target.value === "other") {
          otherCard.classList.remove("hidden");
        } else {
          otherCard.classList.add("hidden");
        }
        updateButtonState();
      });
    });
    agreeCheckbox.addEventListener("change", () => {
      updateButtonState();
    });
    function updateButtonState() {
      const isChecked = agreeCheckbox.checked;
      const hasReason = Array.from(radioGroup).some((r) => r.checked);
      if (isChecked && hasReason) {
        deleteBtn.removeAttribute("disabled");
        deleteBtn.className = "w-full py-3.5 px-space-lg rounded-xl bg-error/10 text-error font-title-md text-title-md hover:bg-error/20 transition-all active:scale-[0.99] flex items-center justify-center shadow-sm cursor-pointer";
      } else {
        deleteBtn.setAttribute("disabled", "true");
        deleteBtn.className = "w-full py-3.5 px-space-lg rounded-xl bg-surface-container-high text-outline font-title-md text-title-md transition-all active:scale-[0.99] flex items-center justify-center cursor-not-allowed";
      }
    }
    deleteBtn.addEventListener("click", () => {
      if (!deleteBtn.hasAttribute("disabled")) {
        if (confirm("\uC815\uB9D0\uB85C \uD0C8\uD1F4\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uC9C4\uD558\uB2D8\uC758 \uBAA8\uB4E0 \uBA85\uB9AC\uD559 \uB370\uC774\uD130\uAC00 \uC989\uC2DC \uC0AD\uC81C\uB429\uB2C8\uB2E4.")) {
          alert("\uADF8\uB3D9\uC548 \uACB0(\u7D50)\uACFC \uD568\uAED8\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4. \uD56D\uC0C1 \uD3C9\uC548\uD55C \uC6B4\uC758 \uD750\uB984\uC774 \uD568\uAED8\uD558\uAE30\uB97C \uBC14\uB78D\uB2C8\uB2E4.");
          history.back();
        }
      }
    });
  }, []);
  return /* @__PURE__ */ jsxs19(Fragment19, { children: [
    /* @__PURE__ */ jsx19("header", { className: "fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)]", children: /* @__PURE__ */ jsxs19("div", { className: "h-14 px-margin-mobile flex items-center justify-between relative", children: [
      /* @__PURE__ */ jsx19("button", { "aria-label": "\uB3CC\uC544\uAC00\uAE30", className: "w-11 h-11 -ml-space-xs flex items-center justify-center text-on-surface hover:text-on-surface-variant transition-colors focus:outline-none", onClick: () => history.back(), children: /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back" }) }),
      /* @__PURE__ */ jsx19("h1", { className: "absolute inset-x-0 mx-auto text-center pointer-events-none font-headline-md text-headline-md text-on-surface", children: "\uD68C\uC6D0 \uD0C8\uD1F4" }),
      /* @__PURE__ */ jsx19("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-on-primary text-[18px]", children: "person" }) })
    ] }) }),
    /* @__PURE__ */ jsx19("main", { className: "flex flex-col relative w-full px-margin-mobile pt-14 pb-safe bg-surface min-h-screen", children: /* @__PURE__ */ jsxs19("div", { className: "flex flex-col w-full pb-10", children: [
      /* @__PURE__ */ jsxs19("section", { className: "flex flex-col pt-space-md pb-space-lg text-center items-center", children: [
        /* @__PURE__ */ jsx19("div", { className: "w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center mb-space-sm shadow-sm", children: /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-secondary text-[22px]", children: "all_inclusive" }) }),
        /* @__PURE__ */ jsx19("span", { className: "font-label-md text-secondary tracking-widest uppercase mb-1", children: "\uC778\uC5F0\uC758 \uB9E4\uB4ED" }),
        /* @__PURE__ */ jsxs19("h2", { className: "font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2", children: [
          "\uC9C4\uD558\uB2D8\uACFC \uB9FA\uC740 \uC18C\uC911\uD55C \uC778\uC5F0,",
          /* @__PURE__ */ jsx19("br", {}),
          "\uC774\uB300\uB85C \uB5A0\uB098\uBCF4\uB0B4\uC2DC\uACA0\uC5B4\uC694?"
        ] }),
        /* @__PURE__ */ jsxs19("p", { className: "font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed", children: [
          "\uC0AC\uC8FC \uBA85\uC2DD\uC758 \uD750\uB984\uC744 \uD568\uAED8 \uC9DA\uC5B4\uC628 \uC2DC\uAC04\uB4E4\uC774",
          /* @__PURE__ */ jsx19("br", {}),
          " ",
          "\uD5DB\uB418\uC9C0 \uC54A\uB3C4\uB85D \uD0C8\uD1F4 \uC804 \uC720\uC758\uC0AC\uD56D\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694."
        ] })
      ] }),
      /* @__PURE__ */ jsxs19("div", { className: "w-full h-32 rounded-xl overflow-hidden mb-space-lg relative bg-surface-container-low shadow-sm", children: [
        /* @__PURE__ */ jsx19("img", { className: "w-full h-full object-cover opacity-85", "data-alt": "A serene minimalist Korean traditional Hanji paper texture background, faint celestial star maps and soft golden ink calligraphy strokes, peaceful contemplative ambient lighting, quiet modern Korean aesthetic, warm off-white and charcoal navy palette", src: "/assets/img08.jpg" }),
        /* @__PURE__ */ jsx19("div", { className: "absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" }),
        /* @__PURE__ */ jsxs19("div", { className: "absolute bottom-3 left-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx19("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
          /* @__PURE__ */ jsx19("span", { className: "font-label-sm text-on-surface-variant font-medium", children: "\uC790\uC5F0\uC758 \uC21C\uD658\uCC98\uB7FC \uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uC5F4\uB824 \uC788\uC2B5\uB2C8\uB2E4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx19("div", { className: "bg-error-container/40 rounded-xl p-space-md mb-space-lg shadow-sm", children: /* @__PURE__ */ jsxs19("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx19("div", { className: "w-9 h-9 rounded-full bg-error-container flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-on-error-container text-[20px]", children: "warning" }) }),
        /* @__PURE__ */ jsxs19("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx19("h3", { className: "font-title-md text-title-md text-on-error-container mb-1", children: "\uD0C8\uD1F4 \uC2DC \uB370\uC774\uD130\uAC00 \uC989\uC2DC \uC0AD\uC81C\uB418\uBA70 \uBCF5\uAD6C \uBD88\uAC00\uD569\uB2C8\uB2E4" }),
          /* @__PURE__ */ jsx19("p", { className: "font-body-sm text-body-sm text-on-error-container/80 leading-relaxed", children: "\uC800\uC7A5\uB41C \uC0AC\uC8FC \uBA85\uC2DD\uACFC \uD480\uC774 \uAE30\uB85D\uC740 \uBA85\uB9AC\uD559\uC801 \uBCF4\uC548 \uAE30\uC900\uC5D0 \uB530\uB77C \uC601\uAD6C \uD30C\uAE30\uB418\uC5B4 \uB2E4\uC2DC \uCC3E\uC544\uBD50 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs19("div", { className: "bg-surface-container-lowest rounded-xl p-space-md mb-space-lg shadow-sm", children: [
        /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between pb-space-sm mb-space-sm", children: [
          /* @__PURE__ */ jsx19("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC18C\uBA78 \uC608\uC815 \uC790\uC0B0 \uBC0F \uB0B4\uC5ED" }),
          /* @__PURE__ */ jsx19("span", { className: "font-label-md text-error bg-error-container/50 px-2 py-0.5 rounded-full", children: "\uC804\uCCB4 \uC0AD\uC81C" })
        ] }),
        /* @__PURE__ */ jsxs19("div", { className: "space-y-space-sm", children: [
          /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between p-3 bg-surface-container-low rounded-lg", children: [
            /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx19("div", { className: "w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container", children: /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-[19px]", children: "calendar_month" }) }),
              /* @__PURE__ */ jsxs19("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx19("span", { className: "font-title-md text-body-md text-on-surface font-medium", children: "\uC800\uC7A5\uB41C \uC0AC\uC8FC \uC815\uBCF4" }),
                /* @__PURE__ */ jsx19("span", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uBCF8\uC778 \uBC0F \uC778\uC5F0 \uBA85\uC2DD (\uCD1D 5\uAC74) \uC601\uAD6C \uC0AD\uC81C" })
              ] })
            ] }),
            /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-outline-variant text-[18px]", children: "delete_sweep" })
          ] }),
          /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between p-3 bg-surface-container-low rounded-lg", children: [
            /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx19("div", { className: "w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container", children: /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-[19px]", children: "history_edu" }) }),
              /* @__PURE__ */ jsxs19("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx19("span", { className: "font-title-md text-body-md text-on-surface font-medium", children: "\uAD6C\uB9E4\uD55C \uC2EC\uCE35 \uB9AC\uD3EC\uD2B8" }),
                /* @__PURE__ */ jsx19("span", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uD3C9\uC0DD \uC2E0\uB144\uC6B4\uC138 \uB4F1 \uC5F4\uB78C \uAD8C\uD55C 3\uAC74 \uC18C\uBA78" })
              ] })
            ] }),
            /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-outline-variant text-[18px]", children: "lock_reset" })
          ] }),
          /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between p-3 bg-surface-container-low rounded-lg", children: [
            /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx19("div", { className: "w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container", children: /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-[19px]", children: "chat_bubble" }) }),
              /* @__PURE__ */ jsxs19("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx19("span", { className: "font-title-md text-body-md text-on-surface font-medium", children: "AI \uBA85\uB9AC\uD559 \uC0C1\uB2F4 \uAE30\uB85D" }),
                /* @__PURE__ */ jsx19("span", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uBB38\uB2F5 \uB300\uD654 \uBC0F \uC6B4\uC138 \uC9C8\uC758 \uC804\uCCB4 \uB370\uC774\uD130 \uC99D\uBC1C" })
              ] })
            ] }),
            /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-outline-variant text-[18px]", children: "cloud_off" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs19("div", { className: "bg-surface-container-high/60 rounded-xl p-space-md mb-space-lg flex gap-3 items-start", children: [
        /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0", children: "bookmark_added" }),
        /* @__PURE__ */ jsxs19("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx19("p", { className: "font-title-md text-body-md text-on-surface font-semibold mb-1", children: "\uAD6C\uB9E4\uD55C \uB9AC\uD3EC\uD2B8\uB294 \uBBF8\uB9AC \uAE30\uAE30\uC5D0 \uC800\uC7A5\uD574 \uB450\uC168\uB098\uC694?" }),
          /* @__PURE__ */ jsx19("p", { className: "font-body-sm text-body-sm text-on-surface-variant leading-relaxed", children: "\uD0C8\uD1F4\uAC00 \uC644\uB8CC\uB418\uBA74 \uAD6C\uB9E4\uD558\uC2E0 \uACE0\uC720 \uBA85\uC2DD \uB9AC\uD3EC\uD2B8\uB97C \uB2E4\uC2DC \uB0B4\uB824\uBC1B\uC73C\uC2E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uBCF4\uAD00\uD568\uC5D0\uC11C PDF\uB85C \uBBF8\uB9AC \uC800\uC7A5\uD574 \uB450\uC2DC\uBA74 \uC5B8\uC81C\uB4E0 \uB2E4\uC2DC \uBCF4\uC2E4 \uC218 \uC788\uC5B4\uC694." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs19("section", { className: "mb-space-lg", children: [
        /* @__PURE__ */ jsxs19("div", { className: "mb-space-sm", children: [
          /* @__PURE__ */ jsx19("h3", { className: "font-headline-md text-headline-md text-on-surface mb-1", children: "\uD0C8\uD1F4\uD558\uC2DC\uB294 \uC774\uC720\uB97C \uB4E4\uB824\uC8FC\uC138\uC694" }),
          /* @__PURE__ */ jsx19("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uBCF4\uB0B4\uC8FC\uC2E0 \uC18C\uC911\uD55C \uC131\uCC30\uC740 \uB354 \uC870\uD654\uB85C\uC6B4 '\uACB0'\uC744 \uB9CC\uB4DC\uB294 \uBC11\uAC70\uB984\uC774 \uB429\uB2C8\uB2E4." })
        ] }),
        /* @__PURE__ */ jsxs19("div", { className: "space-y-2 mt-space-sm", id: "reason-group", children: [
          /* @__PURE__ */ jsxs19("label", { className: "reason-card flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl cursor-pointer shadow-sm transition-all hover:bg-surface-container", children: [
            /* @__PURE__ */ jsx19("span", { className: "font-body-md text-body-md text-on-surface font-medium", children: "\uC0AC\uC8FC \uD480\uC774 \uD574\uC11D\uC774 \uAE30\uB300\uC5D0 \uBABB \uBBF8\uCCD0\uC694" }),
            /* @__PURE__ */ jsx19("input", { className: "sr-only peer", name: "withdrawal_reason", type: "radio", defaultValue: "unsatisfied" }),
            /* @__PURE__ */ jsx19("div", { className: "w-5 h-5 rounded-full bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsx19("div", { className: "w-2 h-2 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100 transition-opacity" }) })
          ] }),
          /* @__PURE__ */ jsxs19("label", { className: "reason-card flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl cursor-pointer shadow-sm transition-all hover:bg-surface-container", children: [
            /* @__PURE__ */ jsx19("span", { className: "font-body-md text-body-md text-on-surface font-medium", children: "\uC790\uC8FC \uC5F4\uC5B4\uBCF4\uAC70\uB098 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uC694" }),
            /* @__PURE__ */ jsx19("input", { className: "sr-only peer", name: "withdrawal_reason", type: "radio", defaultValue: "rarely_used" }),
            /* @__PURE__ */ jsx19("div", { className: "w-5 h-5 rounded-full bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsx19("div", { className: "w-2 h-2 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100 transition-opacity" }) })
          ] }),
          /* @__PURE__ */ jsxs19("label", { className: "reason-card flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl cursor-pointer shadow-sm transition-all hover:bg-surface-container", children: [
            /* @__PURE__ */ jsx19("span", { className: "font-body-md text-body-md text-on-surface font-medium", children: "\uCF58\uD150\uCE20 \uBC0F \uD480\uC774 \uAC00\uACA9\uC774 \uB2E4\uC18C \uBD80\uB2F4\uB3FC\uC694" }),
            /* @__PURE__ */ jsx19("input", { className: "sr-only peer", name: "withdrawal_reason", type: "radio", defaultValue: "price" }),
            /* @__PURE__ */ jsx19("div", { className: "w-5 h-5 rounded-full bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsx19("div", { className: "w-2 h-2 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100 transition-opacity" }) })
          ] }),
          /* @__PURE__ */ jsxs19("label", { className: "reason-card flex flex-col p-space-md bg-surface-container-lowest rounded-xl cursor-pointer shadow-sm transition-all hover:bg-surface-container", id: "other-reason-card", children: [
            /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between w-full", children: [
              /* @__PURE__ */ jsx19("span", { className: "font-body-md text-body-md text-on-surface font-medium", children: "\uAE30\uD0C0 \uC0AC\uC720" }),
              /* @__PURE__ */ jsx19("input", { className: "sr-only peer", id: "radio-other", name: "withdrawal_reason", type: "radio", defaultValue: "other" }),
              /* @__PURE__ */ jsx19("div", { className: "w-5 h-5 rounded-full bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsx19("div", { className: "w-2 h-2 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100 transition-opacity" }) })
            ] }),
            /* @__PURE__ */ jsx19("div", { className: "hidden mt-3 w-full", id: "other-input-container", children: /* @__PURE__ */ jsx19("textarea", { className: "w-full p-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none resize-none", placeholder: "\uC790\uC720\uB86D\uAC8C \uC870\uC5B8\uC744 \uB0A8\uACA8\uC8FC\uC2DC\uBA74 \uAE4A\uC774 \uACBD\uCCAD\uD558\uACA0\uC2B5\uB2C8\uB2E4.", rows: 2 }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx19("div", { className: "mb-space-xl", children: /* @__PURE__ */ jsxs19("label", { className: "flex items-start gap-3 p-space-md bg-surface-container-high/40 rounded-xl cursor-pointer shadow-sm select-none", children: [
        /* @__PURE__ */ jsx19("input", { className: "sr-only peer", id: "agree-checkbox", type: "checkbox" }),
        /* @__PURE__ */ jsx19("div", { className: "w-6 h-6 rounded-md bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center text-on-primary shrink-0 transition-colors mt-0.5", children: /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-[18px] opacity-0 peer-checked:opacity-100 transition-opacity", children: "check" }) }),
        /* @__PURE__ */ jsxs19("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx19("span", { className: "font-title-md text-title-md text-on-surface", children: "\uC720\uC758\uC0AC\uD56D \uBC0F \uB370\uC774\uD130 \uC601\uAD6C \uD30C\uAE30\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4" }),
          /* @__PURE__ */ jsx19("span", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uBAA8\uB4E0 \uC0AC\uC8FC \uAE30\uB85D\uACFC \uB9AC\uD3EC\uD2B8 \uC5F4\uB78C \uAD8C\uD55C\uC774 \uC18C\uBA78\uB428\uC744 \uC778\uC9C0\uD558\uC600\uC2B5\uB2C8\uB2E4." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs19("div", { className: "flex flex-col gap-3 sticky bottom-4 pt-2", children: [
        /* @__PURE__ */ jsxs19("button", { className: "w-full py-4 px-space-lg rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg shadow-md flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-all active:scale-[0.99]", onClick: () => history.back(), type: "button", children: [
          /* @__PURE__ */ jsx19("span", { className: "material-symbols-outlined text-[20px]", children: "spa" }),
          /* @__PURE__ */ jsx19("span", { children: "\uACB0\uACFC \uC778\uC5F0 \uACC4\uC18D \uC774\uC5B4\uAC00\uAE30" })
        ] }),
        /* @__PURE__ */ jsx19(
          "button",
          {
            className: "w-full py-3.5 px-space-lg rounded-xl bg-surface-container-high text-outline font-title-md text-title-md transition-all active:scale-[0.99] flex items-center justify-center",
            disabled: true,
            id: "delete-btn",
            type: "button",
            children: "\uD0C8\uD1F4 \uC9C4\uD589\uD558\uAE30"
          }
        )
      ] })
    ] }) })
  ] });
}

// src/screens/ReportFailed.tsx
import { useEffect as useEffect11 } from "react";
import { Fragment as Fragment20, jsx as jsx20, jsxs as jsxs20 } from "react/jsx-runtime";
var BODY_CLASS20 = "bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen";
function ReportFailed() {
  useBodyClass(BODY_CLASS20);
  useEffect11(() => {
    const retryBtn = byId("retry-button");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        const originalContent = retryBtn.innerHTML;
        retryBtn.innerHTML = `
          <svg class="animate-spin h-5 w-5 text-surface-bright" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>\uCC9C\uAE30(\u5929\u6C23) \uB2E4\uC2DC \uACC4\uC0B0 \uC911...</span>
        `;
        retryBtn.disabled = true;
        setTimeout(() => {
          retryBtn.innerHTML = originalContent;
          retryBtn.disabled = false;
          alert("\uBD84\uC11D \uC11C\uBC84\uC640\uC758 \uC5F0\uACB0\uC744 \uC7AC\uC2DC\uB3C4\uD569\uB2C8\uB2E4.");
        }, 1500);
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs20(Fragment20, { children: [
    /* @__PURE__ */ jsx20("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_12px_rgba(19,27,46,0.03)]", children: /* @__PURE__ */ jsxs20("div", { className: "h-14 px-margin-mobile flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx20(
          "button",
          {
            "aria-label": "\uC774\uC804 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9",
            className: "w-11 h-11 -ml-space-xs flex items-center justify-center text-on-surface hover:text-on-surface-variant transition-colors",
            onClick: () => window.history.back(),
            type: "button",
            children: /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back" })
          }
        ),
        /* @__PURE__ */ jsx20("span", { className: "font-headline-md text-headline-md text-on-surface tracking-tight truncate max-w-[200px]", children: "\uB9AC\uD3EC\uD2B8 \uC0DD\uC131 \uC2E4\uD328" })
      ] }),
      /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx20(
          "button",
          {
            "aria-label": "\uCC3D \uB2EB\uAE30",
            className: "w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors",
            onClick: () => window.location.href = "#",
            type: "button",
            children: /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[20px]", children: "close" })
          }
        ),
        /* @__PURE__ */ jsx20("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-on-primary text-[18px]", children: "person" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx20("main", { className: "flex flex-col flex-1 relative w-full pt-14 pb-safe bg-surface", children: /* @__PURE__ */ jsxs20("div", { className: "flex flex-col w-full px-margin-mobile py-space-md max-w-[480px] mx-auto items-center justify-between text-center min-h-[calc(100vh-4rem)]", children: [
      /* @__PURE__ */ jsxs20("div", { className: "w-full flex flex-col items-center my-auto", children: [
        /* @__PURE__ */ jsxs20("div", { className: "relative w-44 h-44 mb-space-lg flex items-center justify-center", children: [
          /* @__PURE__ */ jsx20("div", { className: "absolute inset-0 rounded-full bg-surface-container-high opacity-40 blur-xl" }),
          /* @__PURE__ */ jsxs20("svg", { className: "absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]", fill: "none", viewBox: "0 0 160 160", children: [
            /* @__PURE__ */ jsx20("circle", { className: "text-secondary-fixed-dim", cx: "80", cy: "80", opacity: "0.6", r: "74", stroke: "currentColor", strokeDasharray: "3 6", strokeWidth: "1" }),
            /* @__PURE__ */ jsx20("circle", { className: "text-outline-variant", cx: "80", cy: "80", r: "62", stroke: "currentColor", strokeOpacity: "0.5", strokeWidth: "0.75" }),
            /* @__PURE__ */ jsx20("circle", { className: "text-secondary", cx: "80", cy: "6", fill: "currentColor", r: "3" }),
            /* @__PURE__ */ jsx20("circle", { className: "text-outline", cx: "154", cy: "80", fill: "currentColor", r: "2" }),
            /* @__PURE__ */ jsx20("circle", { className: "text-secondary", cx: "80", cy: "154", fill: "currentColor", r: "2.5" }),
            /* @__PURE__ */ jsx20("circle", { className: "text-outline", cx: "6", cy: "80", fill: "currentColor", r: "2" })
          ] }),
          /* @__PURE__ */ jsxs20("div", { className: "relative w-32 h-32 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center overflow-hidden", children: [
            /* @__PURE__ */ jsx20("img", { className: "w-full h-full object-cover opacity-85 mix-blend-multiply", "data-alt": "An ethereal minimalist Korean ink-wash painting of ancient celestial chart paper Hanji with delicate golden constellations, a quiet brush mark paused mid-stroke, warm ivory tones, soft gold highlights, deep midnight navy ink, meditative and refined atmosphere", src: "/assets/img04.jpg" }),
            /* @__PURE__ */ jsx20("div", { className: "absolute inset-0 flex items-center justify-center bg-surface-container-lowest/30 backdrop-blur-[1px]", children: /* @__PURE__ */ jsx20("div", { className: "w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-secondary text-[26px]", style: { fontVariationSettings: "'FILL' 1" }, children: "hourglass_pause" }) }) })
          ] }),
          /* @__PURE__ */ jsxs20("div", { className: "absolute -bottom-1 bg-surface-container-low px-space-sm py-0.5 rounded-full shadow-sm flex items-center gap-1", children: [
            /* @__PURE__ */ jsx20("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
            /* @__PURE__ */ jsx20("span", { className: "font-label-sm text-label-sm text-secondary", children: "\uACC4\uC0B0 \uC77C\uC2DC \uC815\uC9C0" })
          ] })
        ] }),
        /* @__PURE__ */ jsx20("h1", { className: "font-headline-lg-mobile text-headline-lg-mobile text-primary-container font-headline-md tracking-tight mb-space-xs", children: "\uB9AC\uD3EC\uD2B8\uB97C \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC5B4\uC694" }),
        /* @__PURE__ */ jsx20("p", { className: "font-body-lg text-body-lg text-on-surface-variant mb-space-lg", children: "\uACB0\uC81C \uAE08\uC561\uC740 \uC790\uB3D9\uC73C\uB85C \uD658\uBD88\uB3FC\uC694" }),
        /* @__PURE__ */ jsxs20("div", { className: "w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm text-left relative overflow-hidden", children: [
          /* @__PURE__ */ jsx20("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-secondary-fixed-dim" }),
          /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-space-xs mb-space-xs pl-space-xs", children: [
            /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[18px] text-secondary", children: "check_circle" }),
            /* @__PURE__ */ jsx20("span", { className: "font-title-md text-title-md text-on-surface font-semibold", children: "\uC790\uB3D9 \uD658\uBD88 \uC811\uC218 \uC644\uB8CC" })
          ] }),
          /* @__PURE__ */ jsxs20("div", { className: "pl-space-xs space-y-1", children: [
            /* @__PURE__ */ jsxs20("p", { className: "font-label-md text-label-md text-on-surface-variant", children: [
              "\uC8FC\uBB38\uBC88\uD638:",
              " ",
              /* @__PURE__ */ jsx20("span", { className: "text-on-surface", children: "ORD-20241029-781" }),
              " ",
              "\xB7 \uACB0\uC81C \uC218\uB2E8 \uC2B9\uC778 \uC790\uB3D9 \uCDE8\uC18C \uC644\uB8CC"
            ] }),
            /* @__PURE__ */ jsx20("p", { className: "font-body-sm text-body-sm text-outline pt-space-xs", children: "\uBA85\uC2DD \uB370\uC774\uD130\uB97C \uBD84\uC11D\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC77C\uC2DC\uC801\uC778 \uC9C0\uC5F0\uC774 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ jsxs20("div", { className: "mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[16px] text-secondary", children: "auto_stories" }),
              /* @__PURE__ */ jsx20("span", { className: "font-label-md text-label-md text-on-surface-variant", children: "\uC0AC\uC8FC \uBA85\uB9AC\uD559 \uBD84\uC11D \uC5D4\uC9C4" })
            ] }),
            /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-1.5 font-label-sm text-label-sm text-outline", children: [
              /* @__PURE__ */ jsx20("span", { children: "\uC5F0" }),
              /* @__PURE__ */ jsx20("span", { children: "\xB7" }),
              /* @__PURE__ */ jsx20("span", { children: "\uC6D4" }),
              /* @__PURE__ */ jsx20("span", { children: "\xB7" }),
              /* @__PURE__ */ jsx20("span", { children: "\uC77C" }),
              /* @__PURE__ */ jsx20("span", { children: "\xB7" }),
              /* @__PURE__ */ jsx20("span", { children: "\uC2DC" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx20("p", { className: "font-label-md text-label-md text-outline mt-space-md", children: "\uCE74\uB4DC\uC0AC\uC5D0 \uB530\uB77C \uC2B9\uC778 \uCDE8\uC18C \uBC18\uC601\uAE4C\uC9C0 \uC601\uC5C5\uC77C \uAE30\uC900 1~3\uC77C \uC18C\uC694\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4." })
      ] }),
      /* @__PURE__ */ jsxs20("div", { className: "w-full flex flex-col gap-space-sm pt-space-md pb-space-xs", children: [
        /* @__PURE__ */ jsxs20("button", { className: "w-full py-4 px-space-md rounded-lg bg-primary-container text-surface-bright font-title-md text-title-md font-medium shadow-md active:scale-[0.99] transition-transform flex items-center justify-center gap-space-xs", id: "retry-button", type: "button", children: [
          /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[20px]", children: "refresh" }),
          /* @__PURE__ */ jsx20("span", { children: "\uB2E4\uC2DC \uC2DC\uB3C4" })
        ] }),
        /* @__PURE__ */ jsxs20("button", { className: "w-full py-3.5 px-space-md rounded-lg bg-surface-container text-primary-container font-title-md text-title-md font-medium hover:bg-surface-container-high active:scale-[0.99] transition-all flex items-center justify-center gap-space-xs", onClick: () => alert("\uACE0\uAC1D\uC13C\uD130 \uC5F0\uACB0: \uD3C9\uC77C 10:00 - 18:00 (1:1 \uC2E4\uC2DC\uAC04 \uC0C1\uB2F4)"), type: "button", children: [
          /* @__PURE__ */ jsx20("span", { className: "material-symbols-outlined text-[18px]", children: "support_agent" }),
          /* @__PURE__ */ jsx20("span", { children: "\uACE0\uAC1D\uC13C\uD130 \uBB38\uC758" })
        ] })
      ] })
    ] }) })
  ] });
}

// src/screens/NetworkError.tsx
import { useEffect as useEffect12 } from "react";
import { Fragment as Fragment21, jsx as jsx21, jsxs as jsxs21 } from "react/jsx-runtime";
var BODY_CLASS21 = "bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen";
function NetworkError() {
  useBodyClass(BODY_CLASS21);
  useEffect12(() => {
    const retryBtn = byId("retry-btn");
    const retryIcon = byId("retry-icon");
    if (retryBtn && retryIcon) {
      retryBtn.addEventListener("click", () => {
        retryIcon.classList.add("rotate-180");
        setTimeout(() => {
          retryIcon.classList.remove("rotate-180");
          window.location.reload();
        }, 500);
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs21(Fragment21, { children: [
    /* @__PURE__ */ jsx21("header", { className: "fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_12px_rgba(19,27,46,0.03)]", children: /* @__PURE__ */ jsxs21("div", { className: "h-14 px-margin-mobile flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx21(
          "button",
          {
            "aria-label": "\uC774\uC804 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9",
            className: "w-11 h-11 -ml-space-xs flex items-center justify-center text-on-surface hover:text-on-surface-variant transition-colors",
            onClick: () => window.history.back(),
            type: "button",
            children: /* @__PURE__ */ jsx21("span", { className: "material-symbols-outlined text-[22px]", children: "arrow_back" })
          }
        ),
        /* @__PURE__ */ jsx21("span", { className: "font-headline-md text-headline-md text-on-surface tracking-tight truncate max-w-[200px]", children: "\uB124\uD2B8\uC6CC\uD06C \uC624\uB958" })
      ] }),
      /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-space-xs", children: [
        /* @__PURE__ */ jsx21(
          "button",
          {
            "aria-label": "\uCC3D \uB2EB\uAE30",
            className: "w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors",
            onClick: () => window.location.href = "#",
            type: "button",
            children: /* @__PURE__ */ jsx21("span", { className: "material-symbols-outlined text-[20px]", children: "close" })
          }
        ),
        /* @__PURE__ */ jsx21("div", { className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center", children: /* @__PURE__ */ jsx21("span", { className: "material-symbols-outlined text-on-primary text-[18px]", children: "person" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx21("main", { className: "flex flex-col flex-1 relative w-full pt-14 pb-safe bg-surface", children: /* @__PURE__ */ jsxs21("div", { className: "flex flex-col w-full px-margin-mobile py-space-xl items-center justify-between min-h-[calc(100vh-3.5rem)]", children: [
      /* @__PURE__ */ jsx21("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ jsxs21("div", { className: "inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high shadow-sm", children: [
        /* @__PURE__ */ jsx21("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" }),
        /* @__PURE__ */ jsx21("span", { className: "font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase", children: "\uBA85\uC2DD \uB370\uC774\uD130 \uD1B5\uC2E0 \uB300\uAE30" })
      ] }) }),
      /* @__PURE__ */ jsxs21("div", { className: "w-full max-w-[340px] flex flex-col items-center text-center my-auto", children: [
        /* @__PURE__ */ jsxs21("div", { className: "relative w-52 h-52 flex items-center justify-center mb-space-lg", children: [
          /* @__PURE__ */ jsx21("div", { className: "absolute inset-0 rounded-full bg-surface-container-low/70 scale-95 blur-xl" }),
          /* @__PURE__ */ jsxs21("svg", { className: "w-48 h-48 drop-shadow-sm", fill: "none", viewBox: "0 0 160 160", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx21("circle", { className: "text-outline-variant/60", cx: "80", cy: "80", r: "70", stroke: "currentColor", strokeDasharray: "3 4", strokeWidth: "0.75" }),
            /* @__PURE__ */ jsx21("circle", { className: "text-secondary/70 opacity-80", cx: "80", cy: "80", r: "54", stroke: "currentColor", strokeDasharray: "18 10 4 10", strokeWidth: "1.2" }),
            /* @__PURE__ */ jsx21("circle", { className: "text-outline-variant/80", cx: "80", cy: "80", r: "38", stroke: "currentColor", strokeDasharray: "2 3", strokeWidth: "0.75" }),
            /* @__PURE__ */ jsx21("path", { className: "text-on-primary-fixed/40", d: "M42 62C52 48 76 44 94 50C108 55 116 66 114 78C111 92 98 100 84 98C68 96 64 82 72 74C80 66 94 70 96 82", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.2" }),
            /* @__PURE__ */ jsx21("path", { className: "text-secondary", d: "M28 88C44 86 58 92 68 84C76 78 88 77 98 83C110 91 126 89 136 80", stroke: "currentColor", strokeDasharray: "6 6", strokeLinecap: "round", strokeWidth: "1.5" }),
            /* @__PURE__ */ jsx21("circle", { className: "fill-primary", cx: "80", cy: "80", r: "3" }),
            /* @__PURE__ */ jsx21("circle", { className: "fill-secondary", cx: "48", cy: "48", r: "1.5" }),
            /* @__PURE__ */ jsx21("circle", { className: "fill-secondary", cx: "116", cy: "112", r: "1.5" }),
            /* @__PURE__ */ jsx21("circle", { className: "fill-outline-variant", cx: "122", cy: "56", r: "2" }),
            /* @__PURE__ */ jsx21("circle", { className: "fill-outline-variant", cx: "38", cy: "104", r: "1.5" }),
            /* @__PURE__ */ jsxs21("g", { opacity: "0.85", children: [
              /* @__PURE__ */ jsx21("circle", { className: "text-secondary animate-ping", cx: "98", cy: "83", r: "5", stroke: "currentColor", strokeWidth: "1", style: { animationDuration: "3s" } }),
              /* @__PURE__ */ jsx21("circle", { className: "fill-secondary", cx: "98", cy: "83", r: "2.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs21("div", { className: "absolute -bottom-1 bg-surface-container-lowest px-space-sm py-0.5 rounded-full shadow-sm flex items-center gap-1", children: [
            /* @__PURE__ */ jsx21("span", { className: "material-symbols-outlined text-secondary text-[14px]", children: "cloud_off" }),
            /* @__PURE__ */ jsx21("span", { className: "font-label-sm text-label-sm text-secondary tracking-tight", children: "\uD750\uB984 \uB04A\uAE40" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs21("div", { className: "flex flex-col items-center gap-space-xs mb-space-sm", children: [
          /* @__PURE__ */ jsx21("span", { className: "font-label-md text-label-md text-secondary tracking-widest", children: "\uCC9C\uC9C0\uC6B4\uAE30 \uC815\uCCB4" }),
          /* @__PURE__ */ jsx21("h1", { className: "font-headline-lg-mobile text-headline-lg-mobile text-on-primary-fixed font-semibold", children: "\uC5F0\uACB0\uC774 \uBD88\uC548\uC815\uD574\uC694" })
        ] }),
        /* @__PURE__ */ jsx21("p", { className: "font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg", children: "\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694" }),
        /* @__PURE__ */ jsx21("div", { className: "w-full bg-surface-container-low rounded-xl p-space-md shadow-sm mb-space-sm", children: /* @__PURE__ */ jsxs21("div", { className: "flex items-start gap-space-sm text-left", children: [
          /* @__PURE__ */ jsx21("span", { className: "material-symbols-outlined text-on-surface-variant text-[18px] shrink-0 mt-0.5", children: "info" }),
          /* @__PURE__ */ jsx21("p", { className: "font-body-sm text-body-sm text-on-surface-variant", children: "\uC778\uD130\uB137 \uC5F0\uACB0 \uC0C1\uD0DC\uB098 \uBE44\uD589\uAE30 \uD0D1\uC2B9 \uBAA8\uB4DC\uB97C \uD655\uC778\uD574 \uBCF4\uC138\uC694" })
        ] }) }),
        /* @__PURE__ */ jsxs21("div", { className: "flex items-center gap-space-xs mt-space-xs opacity-70", children: [
          /* @__PURE__ */ jsx21("span", { className: "font-label-sm text-label-sm text-outline", children: "\uC0AC\uC8FC\uAD6D \uC0C1\uD0DC\uCF54\uB4DC" }),
          /* @__PURE__ */ jsx21("span", { className: "font-label-sm text-label-sm font-semibold text-outline-variant", children: "ERR_CELESTIAL_SYNC_TIMEOUT" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs21("div", { className: "w-full max-w-[340px] flex flex-col items-center gap-space-md pt-space-md", children: [
        /* @__PURE__ */ jsxs21("button", { className: "w-full h-14 bg-primary-container text-on-primary rounded-xl flex items-center justify-center gap-space-xs shadow-md active:scale-[0.98] transition-all", id: "retry-btn", type: "button", children: [
          /* @__PURE__ */ jsx21("span", { className: "material-symbols-outlined text-[20px] transition-transform duration-700", id: "retry-icon", children: "refresh" }),
          /* @__PURE__ */ jsx21("span", { className: "font-title-md text-title-md tracking-normal", children: "\uB2E4\uC2DC \uC2DC\uB3C4" })
        ] }),
        /* @__PURE__ */ jsx21("button", { className: "w-full py-space-xs flex items-center justify-center gap-1 text-on-surface-variant hover:text-on-surface active:opacity-60 transition-colors", onClick: () => window.history.back(), type: "button", children: /* @__PURE__ */ jsx21("span", { className: "font-label-lg text-label-lg", children: "\uC774\uC804 \uD654\uBA74\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" }) })
      ] })
    ] }) })
  ] });
}

// src/screens/NotFound.tsx
import { useEffect as useEffect13 } from "react";
import { Fragment as Fragment22, jsx as jsx22, jsxs as jsxs22 } from "react/jsx-runtime";
var BODY_CLASS22 = "bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen pt-safe pb-safe";
function NotFound() {
  useBodyClass(BODY_CLASS22);
  useEffect13(() => {
    byId("homeBtn")?.addEventListener("click", () => {
      window.location.href = "/";
    });
  }, []);
  return /* @__PURE__ */ jsx22(Fragment22, { children: /* @__PURE__ */ jsx22("main", { className: "flex flex-col flex-1 relative w-full bg-surface", children: /* @__PURE__ */ jsxs22("div", { className: "flex flex-col w-full px-margin-mobile py-space-lg max-w-[480px] mx-auto min-w-0 items-center justify-center text-center select-none", children: [
    /* @__PURE__ */ jsxs22("div", { className: "relative w-full aspect-square max-w-[280px] my-space-md flex items-center justify-center", children: [
      /* @__PURE__ */ jsx22("div", { className: "absolute inset-0 rounded-full bg-surface-container-low opacity-60 scale-95 blur-xl" }),
      /* @__PURE__ */ jsxs22("div", { className: "relative w-full h-full rounded-full overflow-hidden shadow-sm flex items-center justify-center bg-surface-container-lowest", children: [
        /* @__PURE__ */ jsx22("img", { className: "w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105", "data-alt": "Tranquil Korean oriental watercolor painting depicting an uncharted celestial path with drifting soft midnight indigo ink clouds, minimalist constellations in muted antique gold, and a serene traditional stone lantern glowing softly in mist. Ethereal, meditative, textured Hanji paper aesthetic, balanced and calm.", src: "/assets/img10.jpg" }),
        /* @__PURE__ */ jsx22("div", { className: "absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-surface-container-lowest/20 pointer-events-none" }),
        /* @__PURE__ */ jsx22("div", { className: "absolute inset-x-0 bottom-4 flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxs22("div", { className: "px-space-md py-space-xs rounded-full bg-surface-container/90 backdrop-blur-sm shadow-sm flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx22("span", { className: "w-1.5 h-1.5 rounded-full bg-secondary" }),
          /* @__PURE__ */ jsx22("span", { className: "font-headline-md text-secondary tracking-widest text-body-sm font-semibold", children: "404" }),
          /* @__PURE__ */ jsx22("span", { className: "font-label-sm text-on-surface-variant font-medium", children: "\xB7 \uADA4\uB3C4 \uC774\uD0C8" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx22("div", { className: "absolute -top-1 right-3 w-8 h-8 rounded-full bg-surface-container-high/60 flex items-center justify-center backdrop-blur-xs", children: /* @__PURE__ */ jsx22("span", { className: "material-symbols-outlined text-secondary text-[18px]", children: "auto_awesome" }) })
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "flex flex-col items-center mt-space-sm mb-space-lg w-full max-w-[340px]", children: [
      /* @__PURE__ */ jsx22("span", { className: "font-label-md text-secondary font-medium tracking-wider mb-space-xs", children: "\uAE38\uC744 \uC783\uC740 \uC6B4\uD589" }),
      /* @__PURE__ */ jsx22("h1", { className: "font-headline-xl-mobile text-primary-container font-semibold tracking-tight text-on-surface mb-space-sm", children: "\uCC3E\uC744 \uC218 \uC5C6\uB294 \uD398\uC774\uC9C0\uC608\uC694" }),
      /* @__PURE__ */ jsx22("p", { className: "font-title-md text-on-surface-variant font-medium mb-space-xs", children: "\uC8FC\uC18C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694" }),
      /* @__PURE__ */ jsx22("p", { className: "font-body-sm text-outline leading-relaxed mt-space-xs break-keep", children: "\uC874\uC7AC\uD558\uC9C0 \uC54A\uAC70\uB098 \uC774\uBBF8 \uC0AD\uC81C\uB41C \uC8FC\uC18C\uC785\uB2C8\uB2E4. \uACB0\uC758 \uB2E4\uB978 \uC6B4\uC138\uC640 \uBD84\uC11D\uC744 \uACC4\uC18D \uC0B4\uD3B4\uBCF4\uC138\uC694." })
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "w-full max-w-[320px] flex flex-col gap-space-sm", children: [
      /* @__PURE__ */ jsxs22("button", { className: "w-full py-3.5 px-space-lg rounded-lg bg-primary-container text-on-primary font-title-md shadow-md active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group", id: "homeBtn", type: "button", children: [
        /* @__PURE__ */ jsx22("span", { className: "material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:-translate-x-0.5", children: "home" }),
        /* @__PURE__ */ jsx22("span", { children: "\uD648\uC73C\uB85C" })
      ] }),
      /* @__PURE__ */ jsxs22("button", { className: "w-full py-3 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-lg transition-colors duration-150 flex items-center justify-center gap-1.5", onClick: () => window.history.back(), type: "button", children: [
        /* @__PURE__ */ jsx22("span", { className: "material-symbols-outlined text-[18px]", children: "arrow_back" }),
        /* @__PURE__ */ jsx22("span", { children: "\uC774\uC804 \uD654\uBA74\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "mt-space-xl pt-space-md flex items-center gap-space-xs text-outline opacity-75", children: [
      /* @__PURE__ */ jsx22("span", { className: "material-symbols-outlined text-[15px]", children: "brightness_empty" }),
      /* @__PURE__ */ jsx22("span", { className: "font-label-sm tracking-wide", children: "\uC0AC\uC8FC\uBA85\uB9AC \uC5F0\uAD6C\uC18C \uACB0(\u7D50)" })
    ] })
  ] }) }) });
}

// src/screens/registry.ts
var screens = [
  { slug: "splash", title: "\uC2A4\uD50C\uB798\uC2DC", component: Splash },
  { slug: "login", title: "\uB85C\uADF8\uC778", component: Login },
  { slug: "login-sheet", title: "\uB85C\uADF8\uC778 \uBC14\uD140\uC2DC\uD2B8", component: LoginSheet },
  { slug: "terms", title: "\uC57D\uAD00 \uB3D9\uC758", component: TermsAgreement },
  { slug: "signup-complete", title: "\uAC00\uC785 \uC644\uB8CC", component: SignupComplete },
  { slug: "home-guest", title: "\uD648 (\uBE44\uB85C\uADF8\uC778)", component: HomeGuest },
  { slug: "home", title: "\uD648", component: Home },
  { slug: "saju-input", title: "\uC0AC\uC8FC \uC815\uBCF4 \uC785\uB825", component: SajuInput },
  { slug: "saju-options", title: "\uC0AC\uC8FC \uACC4\uC0B0 \uC635\uC158", component: SajuOptions },
  { slug: "saju-result", title: "\uC0AC\uC8FC \uBD84\uC11D \uACB0\uACFC", component: SajuResult },
  { slug: "daeun-flow", title: "\uB300\uC6B4 \uD750\uB984 \uBD84\uC11D", component: DaeunFlow },
  { slug: "saved-saju", title: "\uC800\uC7A5\uB41C \uC0AC\uC8FC", component: SavedSaju },
  { slug: "ai-chat", title: "\uC0AC\uC8FC AI \uC0C1\uB2F4", component: AiChat },
  { slug: "store", title: "\uD504\uB9AC\uBBF8\uC5C4 \uB9AC\uD3EC\uD2B8 \uC2A4\uD1A0\uC5B4", component: ReportStore },
  { slug: "checkout", title: "\uACB0\uC81C\uD558\uAE30", component: Checkout },
  { slug: "report-loading", title: "\uB9AC\uD3EC\uD2B8 \uC0DD\uC131 \uC911", component: ReportLoading },
  { slug: "report-career-move", title: "\uC774\uC9C1\uC6B4 \uB9AC\uD3EC\uD2B8", component: CareerMoveReport },
  { slug: "more", title: "\uB354\uBCF4\uAE30", component: More },
  { slug: "account-delete", title: "\uD68C\uC6D0 \uD0C8\uD1F4", component: AccountDelete },
  { slug: "report-failed", title: "\uB9AC\uD3EC\uD2B8 \uC0DD\uC131 \uC2E4\uD328", component: ReportFailed },
  { slug: "network-error", title: "\uB124\uD2B8\uC6CC\uD06C \uC624\uB958", component: NetworkError },
  { slug: "not-found", title: "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC74C", component: NotFound }
];

// .stitch/tools/verify-entry.tsx
var out = {};
for (const { slug, component } of screens) {
  out[slug] = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(component)));
}
process.stdout.write(JSON.stringify(out));
