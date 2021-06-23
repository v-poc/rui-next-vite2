/*
 * Inspired by screenfull.js | MIT License (https://github.com/sindresorhus/screenfull.js)
 */
const doc =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'
    ? window.document
    : {};

const fn = (function () {
  let val;
  const ret = {};

  const fnMap = [
    [
      'requestFullscreen',
      'exitFullscreen',
      'fullscreenElement',
      'fullscreenEnabled',
      'fullscreenchange',
      'fullscreenerror',
    ],
    // New WebKit
    [
      'webkitRequestFullscreen',
      'webkitExitFullscreen',
      'webkitFullscreenElement',
      'webkitFullscreenEnabled',
      'webkitfullscreenchange',
      'webkitfullscreenerror',
    ],
    // Old WebKit
    [
      'webkitRequestFullScreen',
      'webkitCancelFullScreen',
      'webkitCurrentFullScreenElement',
      'webkitCancelFullScreen',
      'webkitfullscreenchange',
      'webkitfullscreenerror',
    ],
    [
      'mozRequestFullScreen',
      'mozCancelFullScreen',
      'mozFullScreenElement',
      'mozFullScreenEnabled',
      'mozfullscreenchange',
      'mozfullscreenerror',
    ],
    [
      'msRequestFullscreen',
      'msExitFullscreen',
      'msFullscreenElement',
      'msFullscreenEnabled',
      'MSFullscreenChange',
      'MSFullscreenError',
    ],
  ];

  for (let i = 0; i < fnMap.length; i++) {
    val = fnMap[i];
    if (val && val[1] in doc) {
      for (i = 0; i < val.length; i++) {
        ret[fnMap[0][i]] = val[i];
      }
      return ret;
    }
  }

  return false;
})();

const eventNameMap = {
  change: fn.fullscreenchange,
  error: fn.fullscreenerror,
};

let screenfull = {
  request: function (element, options) {
    return new Promise(
      function (resolve, reject) {
        const onFullScreenEntered = function () {
          this.off('change', onFullScreenEntered);
          resolve();
        }.bind(this);

        this.on('change', onFullScreenEntered);

        element = element || doc.documentElement;

        const returnPromise = element[fn.requestFullscreen](options);
        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenEntered).catch(reject);
        }
      }.bind(this),
    );
  },

  exit: function () {
    return new Promise(
      function (resolve, reject) {
        if (!this.isFullscreen) {
          resolve();
          return;
        }

        const onFullScreenExit = function () {
          this.off('change', onFullScreenExit);
          resolve();
        }.bind(this);

        this.on('change', onFullScreenExit);

        const returnPromise = doc[fn.exitFullscreen]();
        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenExit).catch(reject);
        }
      }.bind(this),
    );
  },

  toggle: function (element, options) {
    return this.isFullscreen ? this.exit() : this.request(element, options);
  },

  onchange: function (callback) {
    this.on('change', callback);
  },

  onerror: function (callback) {
    this.on('error', callback);
  },

  on: function (event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      doc.addEventListener(eventName, callback, false);
    }
  },

  off: function (event, callback) {
    const eventName = eventNameMap[event];
    if (eventName) {
      doc.removeEventListener(eventName, callback, false);
    }
  },

  raw: fn,
};

if (!fn) {
  screenfull = { isEnabled: false };
} else {
  Object.defineProperties(screenfull, {
    isFullscreen: {
      get: function () {
        return Boolean(doc[fn.fullscreenElement]);
      },
    },
    element: {
      enumerable: true,
      get: function () {
        return doc[fn.fullscreenElement];
      },
    },
    isEnabled: {
      enumerable: true,
      get: function () {
        // To boolean in case of old WebKit
        return Boolean(doc[fn.fullscreenEnabled]);
      },
    },
  });
}

export default screenfull;
