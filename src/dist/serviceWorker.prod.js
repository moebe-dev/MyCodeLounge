"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.register = register),
  (exports.unregister = unregister);
var isLocalhost = Boolean(
  "localhost" === window.location.hostname ||
    "[::1]" === window.location.hostname ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
function register(n) {
  if ("production" === process.env.NODE_ENV && "serviceWorker" in navigator) {
    if (
      new URL(process.env.PUBLIC_URL, window.location.href).origin !==
      window.location.origin
    )
      return;
    window.addEventListener("load", function () {
      var e = "".concat(process.env.PUBLIC_URL, "/service-worker.js");
      isLocalhost
        ? (checkValidServiceWorker(e, n),
          navigator.serviceWorker.ready.then(function () {
            console.log(
              "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
            );
          }))
        : registerValidSW(e, n);
    });
  }
}
function registerValidSW(e, o) {
  navigator.serviceWorker
    .register(e)
    .then(function (n) {
      n.onupdatefound = function () {
        var e = n.installing;
        null != e &&
          (e.onstatechange = function () {
            "installed" === e.state &&
              (navigator.serviceWorker.controller
                ? (console.log(
                    "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                  ),
                  o && o.onUpdate && o.onUpdate(n))
                : (console.log("Content is cached for offline use."),
                  o && o.onSuccess && o.onSuccess(n)));
          });
      };
    })
    .catch(function (e) {
      console.error("Error during service worker registration:", e);
    });
}
function checkValidServiceWorker(o, r) {
  fetch(o, { headers: { "Service-Worker": "script" } })
    .then(function (e) {
      var n = e.headers.get("content-type");
      404 === e.status || (null != n && -1 === n.indexOf("javascript"))
        ? navigator.serviceWorker.ready.then(function (e) {
            e.unregister().then(function () {
              window.location.reload();
            });
          })
        : registerValidSW(o, r);
    })
    .catch(function () {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}
function unregister() {
  "serviceWorker" in navigator &&
    navigator.serviceWorker.ready
      .then(function (e) {
        e.unregister();
      })
      .catch(function (e) {
        console.error(e.message);
      });
}
