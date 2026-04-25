/**
 * Mintlify custom script: top progress bar for client-side doc navigation.
 * Fills 0% → (trickle toward ~90%) → always 100% with a minimum on-screen time.
 */
(function () {
  'use strict';

  var BAR_ID = 'typingmind-docs-nav-progress';
  var INNER_CLASS = 'tm-nav-progress-fill';
  var MIN_MS = 480;
  var TRICKLE_CAP = 0.89;
  var TRICKLE_MS = 55;
  var COMPLETE_MS = 100;
  var SAFETY_MS = 4000;

  var lastPath = location.pathname + location.search;
  var session = 0;
  var fromClick = false;
  var fillLevel = 0;
  var startedAt = 0;
  var activeSid = 0;
  var trickleTimer;
  var safetyTimer;
  var doneTimer;
  var settleTimer;
  var elRoot;
  var elFill;

  function getPath() {
    return location.pathname + location.search;
  }

  function inject() {
    if (elRoot) {
      return;
    }
    elRoot = document.getElementById(BAR_ID);
    if (elRoot) {
      elFill = elRoot.querySelector('.' + INNER_CLASS);
      return;
    }
    var style = document.createElement('style');
    style.textContent =
      '#' +
      BAR_ID +
      '{position:fixed;top:0;left:0;right:0;height:3px;z-index:2147483646;pointer-events:none;overflow:hidden;background:transparent;visibility:hidden;}' +
      '#' +
      BAR_ID +
      '[data-tm-active="1"]{visibility:visible;}' +
      '.' +
      INNER_CLASS +
      '{position:absolute;left:0;top:0;height:100%;width:100%;transform-origin:0 50%;' +
      'transform:scaleX(0);will-change:transform;opacity:0.98;' +
      'background:linear-gradient(90deg,#1539a3 0%,#3d6af0 55%,#1e4bd4 100%);' +
      'transition:transform 0.3s ease;}' +
      '@media (prefers-reduced-motion:reduce){' +
      '.' +
      INNER_CLASS +
      '{transition:transform 0.45s ease;}' +
      '[' +
      BAR_ID +
      '][data-tm-calm="1"] .' +
      INNER_CLASS +
      '{transition:transform 0.55s ease;}' +
      '}';
    (document.head || document.documentElement).appendChild(style);

    elRoot = document.createElement('div');
    elRoot.id = BAR_ID;
    elRoot.setAttribute('data-tm-active', '0');
    elRoot.setAttribute('role', 'presentation');
    elRoot.setAttribute('aria-hidden', 'true');
    elFill = document.createElement('div');
    elFill.className = INNER_CLASS;
    elRoot.appendChild(elFill);
    (document.body || document.documentElement).appendChild(elRoot);
  }

  function setFill(f, withTransition) {
    inject();
    fillLevel = f;
    if (!elFill) {
      return;
    }
    elFill.style.transition = withTransition ? 'transform 0.28s ease' : 'none';
    elFill.style.transform = 'scaleX(' + f + ')';
  }

  function clearAllTimers() {
    if (trickleTimer) {
      clearInterval(trickleTimer);
      trickleTimer = null;
    }
    if (safetyTimer) {
      clearTimeout(safetyTimer);
      safetyTimer = null;
    }
    if (doneTimer) {
      clearTimeout(doneTimer);
      doneTimer = null;
    }
    if (settleTimer) {
      clearTimeout(settleTimer);
      settleTimer = null;
    }
  }

  function hideAndReset() {
    if (elRoot) {
      elRoot.setAttribute('data-tm-active', '0');
      elRoot.removeAttribute('data-tm-calm');
    }
    if (elFill) {
      elFill.style.transition = 'none';
      elFill.style.transform = 'scaleX(0)';
    }
    fillLevel = 0;
  }

  function startTrickle(sid) {
    if (trickleTimer) {
      clearInterval(trickleTimer);
    }
    trickleTimer = setInterval(function () {
      if (sid !== session) {
        clearInterval(trickleTimer);
        trickleTimer = null;
        return;
      }
      if (fillLevel >= TRICKLE_CAP) {
        return;
      }
      var room = TRICKLE_CAP - fillLevel;
      var n = fillLevel + room * 0.06 + Math.random() * 0.035;
      setFill(Math.min(TRICKLE_CAP, n), true);
    }, TRICKLE_MS);
  }

  function markRouteBegin() {
    clearAllTimers();
    session += 1;
    var sid = session;
    activeSid = sid;
    startedAt = Date.now();
    inject();
    if (elRoot) {
      elRoot.setAttribute('data-tm-active', '1');
    }
    setFill(0, false);
    requestAnimationFrame(function () {
      if (sid !== session) {
        return;
      }
      requestAnimationFrame(function () {
        if (sid !== session) {
          return;
        }
        setFill(0.1, true);
        startTrickle(sid);
        safetyTimer = setTimeout(function () {
          if (sid !== session) {
            return;
          }
          markRouteSettled();
        }, SAFETY_MS);
      });
    });
  }

  function markRouteSettled() {
    if (safetyTimer) {
      clearTimeout(safetyTimer);
      safetyTimer = null;
    }
    if (trickleTimer) {
      clearInterval(trickleTimer);
      trickleTimer = null;
    }
    if (settleTimer) {
      clearTimeout(settleTimer);
      settleTimer = null;
    }
    if (!elRoot || elRoot.getAttribute('data-tm-active') !== '1') {
      return;
    }
    var sid = activeSid;
    var go = function () {
      if (sid !== session) {
        return;
      }
      clearAllTimers();
      if (elRoot) {
        elRoot.setAttribute('data-tm-calm', '1');
      }
      if (elFill) {
        elFill.style.transition =
          'transform ' +
          COMPLETE_MS * 0.001 +
          's cubic-bezier(0.2, 0.85, 0.35, 1)';
        elFill.style.transform = 'scaleX(1)';
      }
      doneTimer = setTimeout(function () {
        if (sid !== session) {
          return;
        }
        hideAndReset();
      }, COMPLETE_MS + 100);
    };
    var elapsed = Date.now() - startedAt;
    var wait = Math.max(0, MIN_MS - elapsed);
    if (wait > 0) {
      settleTimer = setTimeout(function () {
        settleTimer = null;
        go();
      }, wait);
    } else {
      go();
    }
  }

  function pathFromURL(urlish) {
    if (!urlish) {
      return getPath();
    }
    try {
      var u = new URL(String(urlish), location.href);
      return u.pathname + u.search;
    } catch (e) {
      return getPath();
    }
  }

  function isInternalDocLink(anchor) {
    if (!anchor || anchor.nodeName.toLowerCase() !== 'a') {
      return false;
    }
    if (anchor.target && anchor.target.toLowerCase() === '_blank') {
      return false;
    }
    if (anchor.hasAttribute('download')) {
      return false;
    }
    var href = anchor.getAttribute('href');
    if (
      href == null ||
      href === '' ||
      href === '#' ||
      href.indexOf('javascript:') === 0 ||
      href.indexOf('mailto:') === 0 ||
      href.indexOf('tel:') === 0
    ) {
      return false;
    }
    var url;
    try {
      url = new URL(anchor.href, location.href);
    } catch (e) {
      return false;
    }
    if (url.origin !== location.origin) {
      return false;
    }
    if (url.pathname + url.search === getPath() && url.hash) {
      return false;
    }
    return url.pathname + url.search !== getPath();
  }

  function wrapHistoryMethod(methodName) {
    var orig = history[methodName];
    if (typeof orig !== 'function') {
      return;
    }
    history[methodName] = function (state, title, url) {
      var fromPath = getPath();
      var nextPath = pathFromURL(url);
      var pathChange = nextPath && nextPath !== fromPath;
      if (methodName === 'replaceState' && !pathChange) {
        return orig.apply(this, arguments);
      }
      if (pathChange && !fromClick) {
        markRouteBegin();
      }
      var result = orig.apply(this, arguments);
      if (pathChange) {
        lastPath = getPath();
        fromClick = false;
        markRouteSettled();
      }
      return result;
    };
  }

  function onPopState() {
    var next = getPath();
    if (next === lastPath) {
      return;
    }
    markRouteBegin();
    lastPath = next;
    markRouteSettled();
  }

  function onLinkClick(e) {
    if (e.defaultPrevented) {
      return;
    }
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    var t = e.target;
    var anchor = t && t.closest ? t.closest('a[href]') : null;
    if (isInternalDocLink(anchor)) {
      fromClick = true;
      markRouteBegin();
    }
  }

  function init() {
    lastPath = getPath();
    wrapHistoryMethod('pushState');
    wrapHistoryMethod('replaceState');
    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', onLinkClick, true);
    window.addEventListener('pagehide', function () {
      clearAllTimers();
      session += 1;
      hideAndReset();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
