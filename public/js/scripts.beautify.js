!(function () {
  "use strict";
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var e = document.createElement("style");
    e.appendChild(
      document.createTextNode("@-ms-viewport{width:auto!important}")
    ),
      document.head.appendChild(e);
  }
})(),
  $(function () {
    outdatedBrowser({
      bgColor: "#f25648",
      color: "#ffffff",
      lowerThan: "transform",
    });
  }),
  $(function () {
    $(".selectpicker").selectpicker();
  }),
  $(function () {
    $('[data-toggle="popover"]').popover({
      html: !0,
    }),
      $("body").on("click", ".popover-close", function () {
        $(this).closest(".popover").popover("hide");
      });
  }),
  $(function () {
    $('[data-popover="popover"]')
      .popover({
        html: !0,
        trigger: "manual",
        container: ".hl_workflow--main",
        placement: "top",
      })
      .on("mouseenter", function () {
        var e = this;
        $(this).popover("show"),
          $(".popover").on("mouseleave", function () {
            $(e).popover("hide");
          });
      })
      .on("mouseleave", function () {
        var e = this;
        setTimeout(function () {
          $(".popover:hover").length || $(e).popover("hide");
        }, 200);
      });
  }),
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }),
  $(function () {
    $('[data-tooltip="tooltip"]').tooltip({
      trigger: "hover",
    });
  }),
  $(function () {
    $('[data-tooltip="nav-tooltip"]').tooltip({
      container: ".hl_navbar",
    });
  }),
  $(function () {
    $(document).tooltip({
      selector: ".workflow-action",
    });
  }),
  $(function () {
    $("#navbar-toggler").on("click", function (e) {
      e.preventDefault(),
        $(this).toggleClass("active"),
        $("#navbar-collapse").slideToggle(300);
    });
  }),
  $(function () {
    var e = $(".hl_wrapper--inner").attr("id");
    $("#nav-links")
      .find("#nav-" + e)
      .addClass("active")
      .siblings("li")
      .removeClass("active");
  }),
  $(function () {
    $("#recent_activities-toggle").on("click", function (e) {
      e.preventDefault(), $(".hl_recent-activities").toggleClass("--open");
    });
  }),
  $(function () {
    $("#hl_reviews--filter-btn").on("click", function (e) {
      e.preventDefault(),
        $(this).toggleClass("--open"),
        $(this).hasClass("--open")
          ? $(this)
              .find(".icon")
              .removeClass("icon-settings-2")
              .addClass("icon-close")
          : $(this)
              .find(".icon")
              .removeClass("icon-close")
              .addClass("icon-settings-2"),
        $("#hl_reviews--filter-group").toggleClass("--open"),
        $("#hl_reviews--filter").toggleClass("--open");
    });
  }),
  $(function () {
    $(".table-wrap").each(function () {
      var e = $(this),
        s = e.find("thead tr");
      e.find("tbody tr").each(function () {
        for (var e = $(this), t = 0; t < e.find("td").length; t++) {
          var i = "td:eq(" + t + ")",
            n = "th:eq(" + t + ")";
          e.find(i).attr("data-title", s.find(n).text());
        }
      });
    });
  }),
  $(function () {
    $(".table-sort").stupidtable();
  }),
  $(function () {
    var e = $("#sentiment_positive-review").find(".percentage"),
      t = $("#sentiment_positive-review")
        .find(".percentage")
        .data("percentage"),
      i = $("#sentiment_negative-review").find(".percentage"),
      n = $("#sentiment_negative-review")
        .find(".percentage")
        .data("percentage");

    function s(e) {
      return 100 - e;
    }
    e.css("height", s(t) + "%"), i.css("height", s(n) + "%");
  }),
  $(function () {
    $(".semi-progress").each(function () {
      var t = $(this).find(".bar"),
        e = $(this).data("progress"),
        i = parseInt(e, 10);
      $({
        p: 0,
      }).animate(
        {
          p: i,
        },
        {
          duration: 0,
          easing: "swing",
          step: function (e) {
            t.css({
              transform: "rotate(" + (45 + 1.8 * e) + "deg)",
            });
          },
        }
      );
    });
  }),
  $(function () {
    $(".respond-toggle").on("click", function () {
      $(this).toggleClass("active"),
        $(this).closest(".hl_reviews--item").toggleClass("comment-active");
    });
  }),
  $(function () {
    objectFitImages();
  }),
  $(function () {
    $(".hl_wrapper--inner").is("#settings") &&
      ($(".hl_header").addClass("--no-shadow"),
      $(".hl_recent-activities").addClass("--settings"));
  }),
  $(function () {
    $(".hl_settings--sms-color .option label").on("click", function () {
      var e = $(this);
      e.siblings("input").is(":checked")
        ? e.closest(".box").removeClass("active")
        : e.closest(".box").addClass("active");
    });
  }),
  $(function () {
    $("#hl_location--filter-btn").on("click", function (e) {
      e.preventDefault(),
        $(this).toggleClass("--open"),
        $(this).hasClass("--open")
          ? $(this)
              .find(".icon")
              .removeClass("icon-settings-2")
              .addClass("icon-close")
          : $(this)
              .find(".icon")
              .removeClass("icon-close")
              .addClass("icon-settings-2"),
        $("#hl_location--filter-group").toggleClass("--open"),
        $("#hl_location--filter").toggleClass("--open");
    });
  }),
  $(function () {
    $("#map-search").on("keyup keydown", function (e) {
      e.stopPropagation(),
        "" != $(this).val()
          ? ($(this).addClass("active"),
            $(this).siblings(".dropdown").addClass("show"),
            $(this)
              .siblings(".dropdown")
              .find(".dropdown-menu")
              .addClass("show"))
          : ($(this).removeClass("active"),
            $(this).siblings(".dropdown").removeClass("show"),
            $(this)
              .siblings(".dropdown")
              .find(".dropdown-menu")
              .removeClass("show"));
    });
  }),
  $(function () {
    $(".hl_wrapper--inner").hasClass("hl_agency") &&
      $(".hl_header").addClass("--agency");
  }),
  $(function () {
    $(document).on(
      "click",
      "#messages-filter-dropdown .dropdown-menu",
      function (e) {
        e.stopPropagation();
      }
    );
  }),
  $(function () {
    $(".files-heading-action a").on("click", function () {
      $(this).addClass("active").siblings("a").removeClass("active");
    }),
      $("#files-list").on("click", function (e) {
        e.preventDefault(), $(".files-group").addClass("--list");
      }),
      $("#files-tiles").on("click", function (e) {
        e.preventDefault(), $(".files-group").removeClass("--list");
      });
  }),
  $(function () {
    $("#new-chat-customer").on("keyup keydown", function (e) {
      e.stopPropagation(),
        "" != $(this).val()
          ? ($(this).addClass("active"),
            $(this).siblings(".dropdown").addClass("show"),
            $(this)
              .siblings(".dropdown")
              .find(".dropdown-menu")
              .addClass("show"))
          : ($(this).removeClass("active"),
            $(this).siblings(".dropdown").removeClass("show"),
            $(this)
              .siblings(".dropdown")
              .find(".dropdown-menu")
              .removeClass("show"));
    });
  }),
  $(function () {
    var i, n;
    $(document).on("dragover", "#messages-group", function (e) {
      var t = e.originalEvent.dataTransfer;
      t.types &&
        (t.types.indexOf
          ? -1 != t.types.indexOf("Files")
          : t.types.contains("Files")) &&
        ($("#messages-group").addClass("drag-active"), window.clearTimeout(i));
    }),
      $(document).on("dragleave", "#messages-group", function (e) {
        i = window.setTimeout(function () {
          $("#messages-group").removeClass("drag-active");
        }, 25);
      }),
      $(document).on("dragover", "#message-box", function (e) {
        var t = e.originalEvent.dataTransfer;
        t.types &&
          (t.types.indexOf
            ? -1 != t.types.indexOf("Files")
            : t.types.contains("Files")) &&
          ($("#message-box").addClass("drag-active"), window.clearTimeout(n));
      }),
      $(document).on("dragleave", "#message-box", function (e) {
        n = window.setTimeout(function () {
          $("#message-box").removeClass("drag-active");
        }, 25);
      });
  }),
  $(function () {
    $("body").on("click", ".popover-close", function () {
      $(this).closest(".popover").popover("hide");
    });
  }),
  $(function () {
    $(".reputation-nav-toggle").on("click", function () {
      $(".reputation-nav-toggle")
        .find("#reputation-nav-toggle")
        .hasClass("collapsed")
        ? $(".reputation-nav-toggle").addClass("open")
        : $(".reputation-nav-toggle").removeClass("open");
    });
  }),
  $(function () {
    $(".hl_screen-select-item").on("change", function () {
      var e = $(this).find("input").attr("id"),
        t = $("#hl_visual-preview");
      "hl_phone" == e
        ? t.attr({
            width: "375px",
            height: "700px",
          })
        : "hl_table" == e
        ? t.attr({
            width: "768px",
            height: "550px",
          })
        : "hl_desktop" == e &&
          t.attr({
            width: "100%",
            height: "500px",
          });
    });
  }),
  $(function () {
    $(".card-campaign-activity .dropdown-menu").click(function (e) {
      e.stopPropagation();
    });
  }),
  $(function () {
    $(".form-group.with-dropdown")
      .find(".form-control")
      .on("keyup keydown", function (e) {
        e.stopPropagation(),
          "" != $(this).val()
            ? ($(this).siblings(".dropdown").addClass("show"),
              $(this)
                .siblings(".dropdown")
                .find(".dropdown-menu")
                .addClass("show"))
            : ($(this).siblings(".dropdown").removeClass("show"),
              $(this)
                .siblings(".dropdown")
                .find(".dropdown-menu")
                .removeClass("show"));
      });
  }),
  $(function () {
    $(".open-email-tab").on("shown.bs.tab", function (e) {
      $(".hl_contact-messages").find(".card-body").addClass("email-box-active"),
        $(".hl_conversations--message-body")
          .find(".messages-group")
          .addClass("email-box-active");
    }),
      $(".open-sms-tab").on("shown.bs.tab", function (e) {
        $(".hl_contact-messages")
          .find(".card-body")
          .removeClass("email-box-active"),
          $(".hl_conversations--message-body")
            .find(".messages-group")
            .removeClass("email-box-active");
      });
  }),
  $(function () {
    $("#hide-sidebar").on("click", function (e) {
      e.preventDefault(),
        $(this).toggleClass("active"),
        $(".hl_workflow--sidebar").toggleClass("hide"),
        $(".hl_wrapper--inner.workflow").toggleClass("sidebar-hide"),
        $(".hl_workflow--main").toggleClass("sidebar-hide");
    });
  }),
  $(function () {
    $("#automation-list li").on("click", function () {
      $(this).addClass("active").siblings("li").removeClass("active");
    }),
      $("#automation-list .favorite").on("click", function () {
        $(this).toggleClass("active");
      });
    var i = 150,
      n = "Read more";
    $("#automation-list p:not(.category)").each(function () {
      var e = $(this).html();
      if (e.length > i) {
        var t =
          e.substr(0, i) +
          '<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>' +
          e.substr(i, e.length - i) +
          '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
          n +
          "</a></span>";
        $(this).html(t);
      }
    }),
      $(".morelink").click(function () {
        return (
          $(this).hasClass("less")
            ? ($(this).removeClass("less"),
              $(this).html(n),
              $(this).prev().css("display", "none"))
            : ($(this).addClass("less"),
              $(this).html("Read less"),
              $(this).prev().css("display", "inline")),
          $(this).parent().prev().toggle(),
          !1
        );
      });
  }),
  $(function () {
    $("#add-tasks-tab").on("show.bs.tab", function (e) {
      $(
        ".hl_contact-details-right-tabs-bottom, .hl_contact-details-right-tabs"
      ).addClass("expand");
    }),
      $("#add-tasks-tab").on("hide.bs.tab", function (e) {
        $(
          ".hl_contact-details-right-tabs-bottom, .hl_contact-details-right-tabs"
        ).removeClass("expand");
      });
  }),
  $(function () {
    $(document).on("click", ".hl_header--phone .dropdown-menu", function (e) {
      e.stopPropagation();
    });
  }),
  $(function () {
    $("#page-creator-mobile").on("click", function () {
      $(".hl_page-creator--content").addClass("--mobile");
    }),
      $("#page-creator-desktop").on("click", function () {
        $(".hl_page-creator--content").removeClass("--mobile");
      }),
      $(".hl_page-creator--section").on("mouseenter", function () {
        $(this).addClass("active");
      }),
      $(".hl_page-creator--section").on("mouseleave", function () {
        $(this).removeClass("active");
      }),
      $(".hl_page-creator--row").on("mouseenter", function () {
        $(this).addClass("active"),
          $(this).parent(".hl_page-creator--section").removeClass("active");
      }),
      $(".hl_page-creator--row").on("mouseleave", function () {
        $(this).removeClass("active"),
          $(this).parent(".hl_page-creator--section").addClass("active");
      }),
      $(".hl_page-creator--element").on("mouseenter", function () {
        $(this).addClass("active"),
          $(this).parents(".hl_page-creator--row").removeClass("active");
      }),
      $(".hl_page-creator--element").on("mouseleave", function () {
        $(this).removeClass("active"),
          $(this).parents(".hl_page-creator--row").addClass("active");
      }),
      $("#close-settings-group").on("click", function () {
        $("#page-creator").removeClass("--menu-active"),
          $(".hl_page-creator--settings-group").removeClass("active");
      }),
      $("#settings-group .dropdown-item").on("click", function () {
        $("#page-creator").addClass("--menu-active"),
          $(".hl_page-creator--settings-group").addClass("active");
      }),
      $("#close-section-group").on("click", function () {
        $("#page-creator").removeClass("--menu-active"),
          $(".hl_page-creator--sections-group").removeClass("active");
      }),
      $("#section-group .dropdown-item").on("click", function () {
        $("#page-creator").addClass("--menu-active"),
          $(".hl_page-creator--sections-group").addClass("active");
      }),
      $("#close-row-group").on("click", function () {
        $("#page-creator").removeClass("--menu-active"),
          $(".hl_page-creator--rows-group").removeClass("active");
      }),
      $("#row-group .dropdown-item").on("click", function () {
        $("#page-creator").addClass("--menu-active"),
          $(".hl_page-creator--rows-group").addClass("active");
      }),
      $("#close-column-group").on("click", function () {
        $("#page-creator").removeClass("--menu-active"),
          $(".hl_page-creator--columns-group").removeClass("active");
      }),
      $("#column-group").on("click", function () {
        $("#page-creator").addClass("--menu-active"),
          $(".hl_page-creator--columns-group").addClass("active");
      }),
      $("#close-element-group").on("click", function () {
        $("#page-creator").removeClass("--menu-active"),
          $(".hl_page-creator--element-group").removeClass("active");
      }),
      $("#element-group .dropdown-item").on("click", function () {
        $("#page-creator").addClass("--menu-active"),
          $(".hl_page-creator--element-group").addClass("active");
      });
  }),
  (function (U) {
    "use strict";
    var e,
      c,
      t,
      i = document.createElement("_");
    if ((i.classList.toggle("c3", !1), i.classList.contains("c3"))) {
      var n = DOMTokenList.prototype.toggle;
      DOMTokenList.prototype.toggle = function (e, t) {
        return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e);
      };
    }
    String.prototype.startsWith ||
      ((e = (function () {
        try {
          var e = {},
            t = Object.defineProperty,
            i = t(e, e, e) && t;
        } catch (e) {}
        return i;
      })()),
      (c = {}.toString),
      (t = function (e) {
        if (null == this) throw new TypeError();
        var t = String(this);
        if (e && "[object RegExp]" == c.call(e)) throw new TypeError();
        var i = t.length,
          n = String(e),
          s = n.length,
          o = 1 < arguments.length ? arguments[1] : void 0,
          r = o ? Number(o) : 0;
        r != r && (r = 0);
        var a = Math.min(Math.max(r, 0), i);
        if (i < s + a) return !1;
        for (var l = -1; ++l < s; )
          if (t.charCodeAt(a + l) != n.charCodeAt(l)) return !1;
        return !0;
      }),
      e
        ? e(String.prototype, "startsWith", {
            value: t,
            configurable: !0,
            writable: !0,
          })
        : (String.prototype.startsWith = t)),
      Object.keys ||
        (Object.keys = function (e, t, i) {
          for (t in ((i = []), e)) i.hasOwnProperty.call(e, t) && i.push(t);
          return i;
        });
    var s = {
      useDefault: !1,
      _set: U.valHooks.select.set,
    };
    U.valHooks.select.set = function (e, t) {
      return (
        t && !s.useDefault && U(e).data("selected", !0),
        s._set.apply(this, arguments)
      );
    };
    var C = null,
      o = (function () {
        try {
          return new Event("change"), !0;
        } catch (e) {
          return !1;
        }
      })();

    function k(e, t, i, n) {
      for (
        var s = ["content", "subtext", "tokens"], o = !1, r = 0;
        r < s.length;
        r++
      ) {
        var a = e[s[r]];
        if (
          a &&
          (n && (a = l(a)),
          (a = a.toUpperCase()),
          (o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t)))
        )
          break;
      }
      return o;
    }

    function E(e) {
      return parseInt(e, 10) || 0;
    }

    function l(e) {
      return (
        U.each(
          [
            {
              re: /[\xC0-\xC6]/g,
              ch: "A",
            },
            {
              re: /[\xE0-\xE6]/g,
              ch: "a",
            },
            {
              re: /[\xC8-\xCB]/g,
              ch: "E",
            },
            {
              re: /[\xE8-\xEB]/g,
              ch: "e",
            },
            {
              re: /[\xCC-\xCF]/g,
              ch: "I",
            },
            {
              re: /[\xEC-\xEF]/g,
              ch: "i",
            },
            {
              re: /[\xD2-\xD6]/g,
              ch: "O",
            },
            {
              re: /[\xF2-\xF6]/g,
              ch: "o",
            },
            {
              re: /[\xD9-\xDC]/g,
              ch: "U",
            },
            {
              re: /[\xF9-\xFC]/g,
              ch: "u",
            },
            {
              re: /[\xC7-\xE7]/g,
              ch: "c",
            },
            {
              re: /[\xD1]/g,
              ch: "N",
            },
            {
              re: /[\xF1]/g,
              ch: "n",
            },
          ],
          function () {
            e = e ? e.replace(this.re, this.ch) : "";
          }
        ),
        e
      );
    }
    U.fn.triggerNative = function (e) {
      var t,
        i = this[0];
      i.dispatchEvent
        ? (o
            ? (t = new Event(e, {
                bubbles: !0,
              }))
            : (t = document.createEvent("Event")).initEvent(e, !0, !1),
          i.dispatchEvent(t))
        : i.fireEvent
        ? (((t = document.createEventObject()).eventType = e),
          i.fireEvent("on" + e, t))
        : this.trigger(e);
    };
    var r = function (t) {
        var i = function (e) {
            return t[e];
          },
          e = "(?:" + Object.keys(t).join("|") + ")",
          n = RegExp(e),
          s = RegExp(e, "g");
        return function (e) {
          return (e = null == e ? "" : "" + e), n.test(e) ? e.replace(s, i) : e;
        };
      },
      V = r({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      }),
      d = r({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x60;": "`",
      }),
      I = {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
      },
      y = 27,
      S = 13,
      T = 32,
      z = 9,
      O = 38,
      D = 40,
      G = {};
    (G.full = (U.fn.dropdown.Constructor.VERSION || "")
      .split(" ")[0]
      .split(".")),
      (G.major = G.full[0]);
    var q = {
        DISABLED: "disabled",
        DIVIDER: "4" === G.major ? "dropdown-divider" : "divider",
        SHOW: "4" === G.major ? "show" : "open",
        DROPUP: "dropup",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        BUTTONCLASS: "4" === G.major ? "btn-light" : "btn-default",
      },
      _ = new RegExp(O + "|" + D),
      H = new RegExp("^" + z + "$|" + y),
      h =
        (new RegExp(S + "|" + T),
        function (e, t) {
          var i = this;
          s.useDefault ||
            ((U.valHooks.select.set = s._set), (s.useDefault = !0)),
            (this.$element = U(e)),
            (this.$newElement = null),
            (this.$button = null),
            (this.$menu = null),
            (this.options = t),
            (this.selectpicker = {
              main: {
                map: {
                  newIndex: {},
                  originalIndex: {},
                },
              },
              current: {
                map: {},
              },
              search: {
                map: {},
              },
              view: {},
              keydown: {
                keyHistory: "",
                resetKeyHistory: {
                  start: function () {
                    return setTimeout(function () {
                      i.selectpicker.keydown.keyHistory = "";
                    }, 800);
                  },
                },
              },
            }),
            null === this.options.title &&
              (this.options.title = this.$element.attr("title"));
          var n = this.options.windowPadding;
          "number" == typeof n && (this.options.windowPadding = [n, n, n, n]),
            (this.val = h.prototype.val),
            (this.render = h.prototype.render),
            (this.refresh = h.prototype.refresh),
            (this.setStyle = h.prototype.setStyle),
            (this.selectAll = h.prototype.selectAll),
            (this.deselectAll = h.prototype.deselectAll),
            (this.destroy = h.prototype.destroy),
            (this.remove = h.prototype.remove),
            (this.show = h.prototype.show),
            (this.hide = h.prototype.hide),
            this.init();
        });

    function a(e) {
      var o,
        r = arguments,
        a = e;
      [].shift.apply(r);
      var t = this.each(function () {
        var e = U(this);
        if (e.is("select")) {
          var t = e.data("selectpicker"),
            i = "object" == typeof a && a;
          if (t) {
            if (i)
              for (var n in i) i.hasOwnProperty(n) && (t.options[n] = i[n]);
          } else {
            var s = U.extend(
              {},
              h.DEFAULTS,
              U.fn.selectpicker.defaults || {},
              e.data(),
              i
            );
            (s.template = U.extend(
              {},
              h.DEFAULTS.template,
              U.fn.selectpicker.defaults
                ? U.fn.selectpicker.defaults.template
                : {},
              e.data().template,
              i.template
            )),
              e.data("selectpicker", (t = new h(this, s)));
          }
          "string" == typeof a &&
            (o = t[a] instanceof Function ? t[a].apply(t, r) : t.options[a]);
        }
      });
      return void 0 !== o ? o : t;
    }
    (h.VERSION = "1.13.0-beta"),
      (h.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function (e, t) {
          return 1 == e ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function (e, t) {
          return [
            1 == e
              ? "Limit reached ({n} item max)"
              : "Limit reached ({n} items max)",
            1 == t
              ? "Group limit reached ({n} item max)"
              : "Group limit reached ({n} items max)",
          ];
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        showTick: !1,
        template: {
          caret: '<span class="caret"></span>',
        },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1,
        windowPadding: 0,
        virtualScroll: 600,
      }),
      "4" === G.major &&
        ((h.DEFAULTS.style = "btn-light"),
        (h.DEFAULTS.iconBase = ""),
        (h.DEFAULTS.tickIcon = "bs-ok-default")),
      (h.prototype = {
        constructor: h,
        init: function () {
          var i = this,
            e = this.$element.attr("id");
          this.$element.addClass("bs-select-hidden"),
            (this.multiple = this.$element.prop("multiple")),
            (this.autofocus = this.$element.prop("autofocus")),
            (this.$newElement = this.createDropdown()),
            this.createLi(),
            this.$element.after(this.$newElement).prependTo(this.$newElement),
            (this.$button = this.$newElement.children("button")),
            (this.$menu = this.$newElement.children(".dropdown-menu")),
            (this.$menuInner = this.$menu.children(".inner")),
            (this.$searchbox = this.$menu.find("input")),
            this.$element.removeClass("bs-select-hidden"),
            !0 === this.options.dropdownAlignRight &&
              this.$menu.addClass(q.MENURIGHT),
            void 0 !== e && this.$button.attr("data-id", e),
            this.checkDisabled(),
            this.clickListener(),
            this.options.liveSearch && this.liveSearchListener(),
            this.render(),
            this.setStyle(),
            this.setWidth(),
            this.options.container
              ? this.selectPosition()
              : this.$element.on("hide.bs.select", function () {
                  if (i.isVirtual()) {
                    var e = i.$menuInner[0],
                      t = e.firstChild.cloneNode(!1);
                    e.replaceChild(t, e.firstChild), (e.scrollTop = 0);
                  }
                }),
            this.$menu.data("this", this),
            this.$newElement.data("this", this),
            this.options.mobile && this.mobile(),
            this.$newElement.on({
              "hide.bs.dropdown": function (e) {
                i.$menuInner.attr("aria-expanded", !1),
                  i.$element.trigger("hide.bs.select", e);
              },
              "hidden.bs.dropdown": function (e) {
                i.$element.trigger("hidden.bs.select", e);
              },
              "show.bs.dropdown": function (e) {
                i.$menuInner.attr("aria-expanded", !0),
                  i.$element.trigger("show.bs.select", e);
              },
              "shown.bs.dropdown": function (e) {
                i.$element.trigger("shown.bs.select", e);
              },
            }),
            i.$element[0].hasAttribute("required") &&
              this.$element.on("invalid", function () {
                i.$button.addClass("bs-invalid"),
                  i.$element.on({
                    "shown.bs.select": function () {
                      i.$element.val(i.$element.val()).off("shown.bs.select");
                    },
                    "rendered.bs.select": function () {
                      this.validity.valid &&
                        i.$button.removeClass("bs-invalid"),
                        i.$element.off("rendered.bs.select");
                    },
                  }),
                  i.$button.on("blur.bs.select", function () {
                    i.$element.focus().blur(), i.$button.off("blur.bs.select");
                  });
              }),
            setTimeout(function () {
              i.$element.trigger("loaded.bs.select");
            });
        },
        createDropdown: function () {
          var e = this.multiple || this.options.showTick ? " show-tick" : "",
            t = this.$element.parent().hasClass("input-group")
              ? " input-group-btn"
              : "",
            i = this.autofocus ? " autofocus" : "",
            n = this.options.header
              ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' +
                this.options.header +
                "</div>"
              : "",
            s = this.options.liveSearch
              ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' +
                (null === this.options.liveSearchPlaceholder
                  ? ""
                  : ' placeholder="' +
                    V(this.options.liveSearchPlaceholder) +
                    '"') +
                ' role="textbox" aria-label="Search"></div>'
              : "",
            o =
              this.multiple && this.options.actionsBox
                ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' +
                  q.BUTTONCLASS +
                  '">' +
                  this.options.selectAllText +
                  '</button><button type="button" class="actions-btn bs-deselect-all btn ' +
                  q.BUTTONCLASS +
                  '">' +
                  this.options.deselectAllText +
                  "</button></div></div>"
                : "",
            r =
              this.multiple && this.options.doneButton
                ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' +
                  q.BUTTONCLASS +
                  '">' +
                  this.options.doneButtonText +
                  "</button></div></div>"
                : "",
            a =
              '<div class="dropdown bootstrap-select' +
              e +
              t +
              '"><button type="button" class="' +
              this.options.styleBase +
              ' dropdown-toggle" data-toggle="dropdown"' +
              i +
              ' role="button"><div class="filter-option"><div class="filter-option-inner"></div></div>' +
              ("4" === G.major
                ? ""
                : '<span class="bs-caret">' +
                  this.options.template.caret +
                  "</span>") +
              '</button><div class="dropdown-menu ' +
              ("4" === G.major ? "" : q.SHOW) +
              '" role="combobox">' +
              n +
              s +
              o +
              '<div class="inner ' +
              q.SHOW +
              '" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner ' +
              ("4" === G.major ? q.SHOW : "") +
              '"></ul></div>' +
              r +
              "</div></div>";
          return U(a);
        },
        setPositionData: function () {
          this.selectpicker.view.canHighlight = [];
          for (var e = 0; e < this.selectpicker.current.data.length; e++) {
            var t = this.selectpicker.current.data[e],
              i = !0;
            "divider" === t.type
              ? ((i = !1), (t.height = this.sizeInfo.dividerHeight))
              : "optgroup-label" === t.type
              ? ((i = !1), (t.height = this.sizeInfo.dropdownHeaderHeight))
              : (t.height = this.sizeInfo.liHeight),
              t.disabled && (i = !1),
              this.selectpicker.view.canHighlight.push(i),
              (t.position =
                (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) +
                t.height);
          }
        },
        isVirtual: function () {
          return (
            (!1 !== this.options.virtualScroll &&
              this.selectpicker.main.elements.length >=
                this.options.virtualScroll) ||
            !0 === this.options.virtualScroll
          );
        },
        createView: function (T, e) {
          e = e || 0;
          var E = this;
          this.selectpicker.current = T
            ? this.selectpicker.search
            : this.selectpicker.main;
          var z,
            O,
            D = [];

          function i(e, t) {
            var i,
              n,
              s,
              o,
              r,
              a,
              l,
              c,
              d,
              h = E.selectpicker.current.elements.length,
              p = [],
              u = void 0,
              f = !0,
              m = E.isVirtual();
            (E.selectpicker.view.scrollTop = e),
              !0 === m &&
                E.sizeInfo.hasScrollBar &&
                E.$menu[0].offsetWidth > E.sizeInfo.totalMenuWidth &&
                ((E.sizeInfo.menuWidth = E.$menu[0].offsetWidth),
                (E.sizeInfo.totalMenuWidth =
                  E.sizeInfo.menuWidth + E.sizeInfo.scrollBarWidth),
                E.$menu.css("min-width", E.sizeInfo.menuWidth)),
              (i = Math.ceil(
                (E.sizeInfo.menuInnerHeight / E.sizeInfo.liHeight) * 1.5
              )),
              (n = Math.round(h / i) || 1);
            for (var g = 0; g < n; g++) {
              var v = (g + 1) * i;
              if (
                (g === n - 1 && (v = h), (p[g] = [g * i + (g ? 1 : 0), v]), !h)
              )
                break;
              void 0 === u &&
                e <=
                  E.selectpicker.current.data[v - 1].position -
                    E.sizeInfo.menuInnerHeight &&
                (u = g);
            }
            if (
              (void 0 === u && (u = 0),
              (r = [
                E.selectpicker.view.position0,
                E.selectpicker.view.position1,
              ]),
              (s = Math.max(0, u - 1)),
              (o = Math.min(n - 1, u + 1)),
              (E.selectpicker.view.position0 = Math.max(0, p[s][0]) || 0),
              (E.selectpicker.view.position1 = Math.min(h, p[o][1]) || 0),
              (a =
                r[0] !== E.selectpicker.view.position0 ||
                r[1] !== E.selectpicker.view.position1),
              void 0 !== E.activeIndex &&
                ((O =
                  E.selectpicker.current.elements[
                    E.selectpicker.current.map.newIndex[E.prevActiveIndex]
                  ]),
                (D =
                  E.selectpicker.current.elements[
                    E.selectpicker.current.map.newIndex[E.activeIndex]
                  ]),
                (z =
                  E.selectpicker.current.elements[
                    E.selectpicker.current.map.newIndex[E.selectedIndex]
                  ]),
                t &&
                  (E.activeIndex !== E.selectedIndex &&
                    (D.classList.remove("active"),
                    D.firstChild && D.firstChild.classList.remove("active")),
                  (E.activeIndex = void 0)),
                E.activeIndex &&
                  E.activeIndex !== E.selectedIndex &&
                  z &&
                  z.length &&
                  (z.classList.remove("active"),
                  z.firstChild && z.firstChild.classList.remove("active"))),
              void 0 !== E.prevActiveIndex &&
                E.prevActiveIndex !== E.activeIndex &&
                E.prevActiveIndex !== E.selectedIndex &&
                O &&
                O.length &&
                (O.classList.remove("active"),
                O.firstChild && O.firstChild.classList.remove("active")),
              (t || a) &&
                ((l = E.selectpicker.view.visibleElements
                  ? E.selectpicker.view.visibleElements.slice()
                  : []),
                (E.selectpicker.view.visibleElements =
                  E.selectpicker.current.elements.slice(
                    E.selectpicker.view.position0,
                    E.selectpicker.view.position1
                  )),
                E.setOptionStatus(),
                (T || (!1 === m && t)) &&
                  ((c = l),
                  (d = E.selectpicker.view.visibleElements),
                  (f = !(
                    c.length === d.length &&
                    c.every(function (e, t) {
                      return e === d[t];
                    })
                  ))),
                (t || !0 === m) && f))
            ) {
              var b,
                $,
                w = E.$menuInner[0],
                x = document.createDocumentFragment(),
                k = w.firstChild.cloneNode(!1),
                C =
                  !0 === m
                    ? E.selectpicker.view.visibleElements
                    : E.selectpicker.current.elements;
              w.replaceChild(k, w.firstChild);
              g = 0;
              for (var I = C.length; g < I; g++) x.appendChild(C[g]);
              !0 === m &&
                ((b =
                  0 === E.selectpicker.view.position0
                    ? 0
                    : E.selectpicker.current.data[
                        E.selectpicker.view.position0 - 1
                      ].position),
                ($ =
                  E.selectpicker.view.position1 > h - 1
                    ? 0
                    : E.selectpicker.current.data[h - 1].position -
                      E.selectpicker.current.data[
                        E.selectpicker.view.position1 - 1
                      ].position),
                (w.firstChild.style.marginTop = b + "px"),
                (w.firstChild.style.marginBottom = $ + "px")),
                w.firstChild.appendChild(x);
            }
            if (((E.prevActiveIndex = E.activeIndex), E.options.liveSearch)) {
              if (T && t) {
                var y,
                  S = 0;
                E.selectpicker.view.canHighlight[S] ||
                  (S =
                    1 + E.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                  (y = E.selectpicker.view.visibleElements[S]),
                  E.selectpicker.view.currentActive &&
                    (E.selectpicker.view.currentActive.classList.remove(
                      "active"
                    ),
                    E.selectpicker.view.currentActive.firstChild &&
                      E.selectpicker.view.currentActive.firstChild.classList.remove(
                        "active"
                      )),
                  y &&
                    (y.classList.add("active"),
                    y.firstChild && y.firstChild.classList.add("active")),
                  (E.activeIndex = E.selectpicker.current.map.originalIndex[S]);
              }
            } else E.$menuInner.focus();
          }
          this.setPositionData(),
            i(e, !0),
            this.$menuInner
              .off("scroll.createView")
              .on("scroll.createView", function (e, t) {
                E.noScroll || i(this.scrollTop, t), (E.noScroll = !1);
              }),
            U(window)
              .off("resize.createView")
              .on("resize.createView", function () {
                i(E.$menuInner[0].scrollTop);
              });
        },
        createLi: function () {
          var z,
            O = this,
            D = [],
            _ = 0,
            H = 0,
            L = [],
            A = 0,
            N = 0,
            P = -1;
          this.selectpicker.view.titleOption ||
            (this.selectpicker.view.titleOption =
              document.createElement("option"));
          var W = {
              span: document.createElement("span"),
              subtext: document.createElement("small"),
              a: document.createElement("a"),
              li: document.createElement("li"),
              whitespace: document.createTextNode(" "),
            },
            e = W.span.cloneNode(!1),
            B = document.createDocumentFragment();
          (e.className =
            O.options.iconBase + " " + O.options.tickIcon + " check-mark"),
            W.a.appendChild(e),
            W.a.setAttribute("role", "option"),
            (W.subtext.className = "text-muted"),
            (W.text = W.span.cloneNode(!1)),
            (W.text.className = "text");
          var M = function (e, t, i, n) {
              var s = W.li.cloneNode(!1);
              return (
                e &&
                  (1 === e.nodeType || 11 === e.nodeType
                    ? s.appendChild(e)
                    : (s.innerHTML = e)),
                void 0 !== i && "" !== i && (s.className = i),
                null != n && s.classList.add("optgroup-" + n),
                s
              );
            },
            R = function (e, t, i) {
              var n = W.a.cloneNode(!0);
              return (
                e &&
                  (11 === e.nodeType
                    ? n.appendChild(e)
                    : n.insertAdjacentHTML("beforeend", e)),
                (void 0 !== t) & ("" !== t) && (n.className = t),
                "4" === G.major && n.classList.add("dropdown-item"),
                i && n.setAttribute("style", i),
                n
              );
            },
            j = function (e) {
              var t,
                i,
                n = W.text.cloneNode(!1);
              if (e.optionContent) n.innerHTML = e.optionContent;
              else {
                if (((n.textContent = e.text), e.optionIcon)) {
                  var s = W.whitespace.cloneNode(!1);
                  ((i = W.span.cloneNode(!1)).className =
                    O.options.iconBase + " " + e.optionIcon),
                    B.appendChild(i),
                    B.appendChild(s);
                }
                e.optionSubtext &&
                  (((t = W.subtext.cloneNode(!1)).textContent =
                    e.optionSubtext),
                  n.appendChild(t));
              }
              return B.appendChild(n), B;
            };
          if (this.options.title && !this.multiple) {
            P--;
            var t = this.$element[0],
              i = !1;
            if (!this.selectpicker.view.titleOption.parentNode)
              (this.selectpicker.view.titleOption.className =
                "bs-title-option"),
                (this.selectpicker.view.titleOption.innerHTML =
                  this.options.title),
                (this.selectpicker.view.titleOption.value = ""),
                (i =
                  void 0 === U(t.options[t.selectedIndex]).attr("selected") &&
                  void 0 === this.$element.data("selected"));
            t.insertBefore(this.selectpicker.view.titleOption, t.firstChild),
              i && (t.selectedIndex = 0);
          }
          var F = this.$element.find("option");
          F.each(function (e) {
            var t = U(this);
            if ((P++, !t.hasClass("bs-title-option"))) {
              var i,
                n,
                s = t.data(),
                o = this.className || "",
                r = V(this.style.cssText),
                a = s.content,
                l = this.textContent,
                c = s.tokens,
                d = s.subtext,
                h = s.icon,
                p = t.parent(),
                u = p[0],
                f = "OPTGROUP" === u.tagName,
                m = f && u.disabled,
                g = this.disabled || m,
                v =
                  this.previousElementSibling &&
                  "OPTGROUP" === this.previousElementSibling.tagName,
                b = p.data();
              if (
                !0 === s.hidden ||
                (O.options.hideDisabled && ((g && !f) || m))
              ) {
                (i = s.prevHiddenIndex),
                  t.next().data("prevHiddenIndex", void 0 !== i ? i : e),
                  P--,
                  v ||
                    (void 0 !== i &&
                      (S = F[i].previousElementSibling) &&
                      "OPTGROUP" === S.tagName &&
                      !S.disabled &&
                      (v = !0)),
                  v &&
                    "divider" !== L[L.length - 1].type &&
                    (P++,
                    D.push(M(!1, 0, q.DIVIDER, A + "div")),
                    L.push({
                      type: "divider",
                      optID: A,
                      originalIndex: e,
                    }));
              } else {
                if (f && !0 !== s.divider) {
                  if (O.options.hideDisabled && g) {
                    if (void 0 === b.allOptionsDisabled) {
                      var $ = p.children();
                      p.data(
                        "allOptionsDisabled",
                        $.filter(":disabled").length === $.length
                      );
                    }
                    if (p.data("allOptionsDisabled")) return void P--;
                  }
                  var w = " " + u.className || "";
                  if (!this.previousElementSibling) {
                    A += 1;
                    var x = u.label,
                      k = V(x),
                      C = b.subtext,
                      I = b.icon;
                    0 !== e &&
                      0 < D.length &&
                      (P++,
                      D.push(M(!1, 0, q.DIVIDER, A + "div")),
                      L.push({
                        type: "divider",
                        optID: A,
                        originalIndex: e,
                      })),
                      P++;
                    var y = (function (e) {
                      var t,
                        i,
                        n = W.text.cloneNode(!1);
                      if (((n.textContent = e.labelEscaped), e.labelIcon)) {
                        var s = W.whitespace.cloneNode(!1);
                        ((i = W.span.cloneNode(!1)).className =
                          O.options.iconBase + " " + e.labelIcon),
                          B.appendChild(i),
                          B.appendChild(s);
                      }
                      return (
                        e.labelSubtext &&
                          (((t = W.subtext.cloneNode(!1)).textContent =
                            e.labelSubtext),
                          n.appendChild(t)),
                        B.appendChild(n),
                        B
                      );
                    })({
                      labelEscaped: k,
                      labelSubtext: C,
                      labelIcon: I,
                    });
                    D.push(M(y, 0, "dropdown-header" + w, A)),
                      L.push({
                        content: k,
                        subtext: C,
                        type: "optgroup-label",
                        optID: A,
                        originalIndex: e,
                      }),
                      (N = P - 1);
                  }
                  if ((O.options.hideDisabled && g) || !0 === s.hidden)
                    return void P--;
                  (n = j({
                    text: l,
                    optionContent: a,
                    optionSubtext: d,
                    optionIcon: h,
                  })),
                    D.push(M(R(n, "opt " + o + w, r), 0, "", A)),
                    L.push({
                      content: l,
                      subtext: d,
                      tokens: c,
                      type: "option",
                      optID: A,
                      headerIndex: N,
                      lastIndex: N + u.childElementCount,
                      originalIndex: e,
                    }),
                    _++;
                } else if (!0 === s.divider)
                  D.push(M(!1, 0, "divider")),
                    L.push({
                      type: "divider",
                      originalIndex: e,
                    });
                else {
                  var S;
                  if (!v && O.options.hideDisabled)
                    if (void 0 !== (i = s.prevHiddenIndex))
                      (S = F[i].previousElementSibling) &&
                        "OPTGROUP" === S.tagName &&
                        !S.disabled &&
                        (v = !0);
                  v &&
                    "divider" !== L[L.length - 1].type &&
                    (P++,
                    D.push(M(!1, 0, q.DIVIDER, A + "div")),
                    L.push({
                      type: "divider",
                      optID: A,
                      originalIndex: e,
                    })),
                    (n = j({
                      text: l,
                      optionContent: a,
                      optionSubtext: d,
                      optionIcon: h,
                    })),
                    D.push(M(R(n, o, r))),
                    L.push({
                      content: l,
                      subtext: d,
                      tokens: c,
                      type: "option",
                      originalIndex: e,
                    }),
                    _++;
                }
                (O.selectpicker.main.map.newIndex[e] = P),
                  (O.selectpicker.main.map.originalIndex[P] = e);
                var T = L[L.length - 1];
                T.disabled = g;
                var E = 0;
                T.content && (E += T.content.length),
                  T.subtext && (E += T.subtext.length),
                  h && (E += 1),
                  H < E && ((H = E), (z = D[D.length - 1]));
              }
            }
          }),
            (this.selectpicker.main.elements = D),
            (this.selectpicker.main.data = L),
            (this.selectpicker.current = this.selectpicker.main),
            (this.selectpicker.view.widestOption = z),
            (this.selectpicker.view.availableOptionsCount = _);
        },
        findLis: function () {
          return this.$menuInner.find(".inner > li");
        },
        render: function () {
          var r = this,
            e = this.$element.find("option"),
            a = [],
            l = [];
          this.togglePlaceholder(),
            this.tabIndex(),
            e.each(function (e) {
              if (
                this.selected &&
                (a.push(this),
                l.length < 100 && "count" !== r.options.selectedTextFormat)
              ) {
                if (
                  r.options.hideDisabled &&
                  (this.disabled ||
                    ("OPTGROUP" === this.parentNode.tagName &&
                      this.parentNode.disabled))
                )
                  return;
                var t,
                  i,
                  n = U(this),
                  s = n.data(),
                  o =
                    s.icon && r.options.showIcon
                      ? '<i class="' +
                        r.options.iconBase +
                        " " +
                        s.icon +
                        '"></i> '
                      : "";
                (t =
                  r.options.showSubtext && s.subtext && !r.multiple
                    ? ' <small class="text-muted">' + s.subtext + "</small>"
                    : ""),
                  (i =
                    void 0 !== n.attr("title")
                      ? n.attr("title")
                      : s.content && r.options.showContent
                      ? s.content.toString()
                      : o + n.html() + t),
                  l.push(i);
              }
            });
          var t = this.multiple ? l.join(this.options.multipleSeparator) : l[0];
          if (
            (100 < a.length && (t += "..."),
            this.multiple &&
              -1 < this.options.selectedTextFormat.indexOf("count"))
          ) {
            var i = this.options.selectedTextFormat.split(">");
            if (
              (1 < i.length && a.length > i[1]) ||
              (1 === i.length && 2 <= a.length)
            ) {
              var n = this.selectpicker.view.availableOptionsCount;
              t = (
                "function" == typeof this.options.countSelectedText
                  ? this.options.countSelectedText(a.length, n)
                  : this.options.countSelectedText
              )
                .replace("{0}", a.length.toString())
                .replace("{1}", n.toString());
            }
          }
          null == this.options.title &&
            (this.options.title = this.$element.attr("title")),
            "static" == this.options.selectedTextFormat &&
              (t = this.options.title),
            t ||
              (t =
                void 0 !== this.options.title
                  ? this.options.title
                  : this.options.noneSelectedText),
            this.$button.attr("title", d(U.trim(t.replace(/<[^>]*>?/g, "")))),
            this.$button.find(".filter-option-inner").html(t),
            this.$element.trigger("rendered.bs.select");
        },
        setStyle: function (e, t) {
          this.$element.attr("class") &&
            this.$newElement.addClass(
              this.$element
                .attr("class")
                .replace(
                  /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                  ""
                )
            );
          var i = e || this.options.style;
          "add" == t
            ? this.$button.addClass(i)
            : "remove" == t
            ? this.$button.removeClass(i)
            : (this.$button.removeClass(this.options.style),
              this.$button.addClass(i));
        },
        liHeight: function (e) {
          if (e || (!1 !== this.options.size && !this.sizeInfo)) {
            this.sizeInfo || (this.sizeInfo = {});
            var t = document.createElement("div"),
              i = document.createElement("div"),
              n = document.createElement("div"),
              s = document.createElement("ul"),
              o = document.createElement("li"),
              r = document.createElement("li"),
              a = document.createElement("li"),
              l = document.createElement("a"),
              c = document.createElement("span"),
              d =
                this.options.header &&
                0 < this.$menu.find(".popover-title").length
                  ? this.$menu.find(".popover-title")[0].cloneNode(!0)
                  : null,
              h = this.options.liveSearch
                ? document.createElement("div")
                : null,
              p =
                this.options.actionsBox &&
                this.multiple &&
                0 < this.$menu.find(".bs-actionsbox").length
                  ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0)
                  : null,
              u =
                this.options.doneButton &&
                this.multiple &&
                0 < this.$menu.find(".bs-donebutton").length
                  ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0)
                  : null;
            if (
              ((this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth),
              (c.className = "text"),
              (l.className = "dropdown-item"),
              (t.className = this.$menu[0].parentNode.className + " " + q.SHOW),
              (t.style.width = this.sizeInfo.selectWidth + "px"),
              (i.className = "dropdown-menu " + q.SHOW),
              (n.className = "inner " + q.SHOW),
              (s.className =
                "dropdown-menu inner " + ("4" === G.major ? q.SHOW : "")),
              (o.className = q.DIVIDER),
              (r.className = "dropdown-header"),
              c.appendChild(document.createTextNode("Inner text")),
              l.appendChild(c),
              a.appendChild(l),
              r.appendChild(c.cloneNode(!0)),
              this.selectpicker.view.widestOption &&
                s.appendChild(
                  this.selectpicker.view.widestOption.cloneNode(!0)
                ),
              s.appendChild(a),
              s.appendChild(o),
              s.appendChild(r),
              d && i.appendChild(d),
              h)
            ) {
              var f = document.createElement("input");
              (h.className = "bs-searchbox"),
                (f.className = "form-control"),
                h.appendChild(f),
                i.appendChild(h);
            }
            p && i.appendChild(p),
              n.appendChild(s),
              i.appendChild(n),
              u && i.appendChild(u),
              t.appendChild(i),
              document.body.appendChild(t);
            var m,
              g = l.offsetHeight,
              v = r ? r.offsetHeight : 0,
              b = d ? d.offsetHeight : 0,
              $ = h ? h.offsetHeight : 0,
              w = p ? p.offsetHeight : 0,
              x = u ? u.offsetHeight : 0,
              k = U(o).outerHeight(!0),
              C = !!window.getComputedStyle && window.getComputedStyle(i),
              I = i.offsetWidth,
              y = C ? null : U(i),
              S = {
                vert:
                  E(C ? C.paddingTop : y.css("paddingTop")) +
                  E(C ? C.paddingBottom : y.css("paddingBottom")) +
                  E(C ? C.borderTopWidth : y.css("borderTopWidth")) +
                  E(C ? C.borderBottomWidth : y.css("borderBottomWidth")),
                horiz:
                  E(C ? C.paddingLeft : y.css("paddingLeft")) +
                  E(C ? C.paddingRight : y.css("paddingRight")) +
                  E(C ? C.borderLeftWidth : y.css("borderLeftWidth")) +
                  E(C ? C.borderRightWidth : y.css("borderRightWidth")),
              },
              T = {
                vert:
                  S.vert +
                  E(C ? C.marginTop : y.css("marginTop")) +
                  E(C ? C.marginBottom : y.css("marginBottom")) +
                  2,
                horiz:
                  S.horiz +
                  E(C ? C.marginLeft : y.css("marginLeft")) +
                  E(C ? C.marginRight : y.css("marginRight")) +
                  2,
              };
            (n.style.overflowY = "scroll"),
              (m = i.offsetWidth - I),
              document.body.removeChild(t),
              (this.sizeInfo.liHeight = g),
              (this.sizeInfo.dropdownHeaderHeight = v),
              (this.sizeInfo.headerHeight = b),
              (this.sizeInfo.searchHeight = $),
              (this.sizeInfo.actionsHeight = w),
              (this.sizeInfo.doneButtonHeight = x),
              (this.sizeInfo.dividerHeight = k),
              (this.sizeInfo.menuPadding = S),
              (this.sizeInfo.menuExtras = T),
              (this.sizeInfo.menuWidth = I),
              (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth),
              (this.sizeInfo.scrollBarWidth = m),
              (this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight),
              this.setPositionData();
          }
        },
        getSelectPosition: function () {
          var e,
            t = U(window),
            i = this.$newElement.offset(),
            n = U(this.options.container);
          this.options.container && !n.is("body")
            ? (((e = n.offset()).top += parseInt(n.css("borderTopWidth"))),
              (e.left += parseInt(n.css("borderLeftWidth"))))
            : (e = {
                top: 0,
                left: 0,
              });
          var s = this.options.windowPadding;
          (this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop()),
            (this.sizeInfo.selectOffsetBot =
              t.height() -
              this.sizeInfo.selectOffsetTop -
              this.sizeInfo.selectHeight -
              e.top -
              s[2]),
            (this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft()),
            (this.sizeInfo.selectOffsetRight =
              t.width() -
              this.sizeInfo.selectOffsetLeft -
              this.sizeInfo.selectWidth -
              e.left -
              s[1]),
            (this.sizeInfo.selectOffsetTop -= s[0]),
            (this.sizeInfo.selectOffsetLeft -= s[3]);
        },
        setMenuSize: function (e) {
          this.getSelectPosition();
          var t,
            i,
            n,
            s,
            o,
            r,
            a,
            l = this.sizeInfo.selectWidth,
            c = this.sizeInfo.liHeight,
            d = this.sizeInfo.headerHeight,
            h = this.sizeInfo.searchHeight,
            p = this.sizeInfo.actionsHeight,
            u = this.sizeInfo.doneButtonHeight,
            f = this.sizeInfo.dividerHeight,
            m = this.sizeInfo.menuPadding,
            g = 0;
          if (
            (this.options.dropupAuto &&
              ((a = c * this.selectpicker.current.elements.length + m.vert),
              this.$newElement.toggleClass(
                q.DROPUP,
                this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot >
                  this.sizeInfo.menuExtras.vert &&
                  a + this.sizeInfo.menuExtras.vert + 50 >
                    this.sizeInfo.selectOffsetBot
              )),
            "auto" === this.options.size)
          )
            (s =
              3 < this.selectpicker.current.elements.length
                ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2
                : 0),
              (i =
                this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert),
              (n = s + d + h + p + u),
              (r = Math.max(s - m.vert, 0)),
              this.$newElement.hasClass(q.DROPUP) &&
                (i =
                  this.sizeInfo.selectOffsetTop -
                  this.sizeInfo.menuExtras.vert),
              (t = (o = i) - d - h - p - u - m.vert);
          else if (
            this.options.size &&
            "auto" != this.options.size &&
            this.selectpicker.current.elements.length > this.options.size
          ) {
            for (var v = 0; v < this.options.size; v++)
              "divider" === this.selectpicker.current.data[v].type && g++;
            (t = (i = c * this.options.size + g * f + m.vert) - m.vert),
              (o = i + d + h + p + u),
              (n = r = "");
          }
          "auto" === this.options.dropdownAlignRight &&
            this.$menu.toggleClass(
              q.MENURIGHT,
              this.sizeInfo.selectOffsetLeft >
                this.sizeInfo.selectOffsetRight &&
                this.sizeInfo.selectOffsetRight < this.$menu[0].offsetWidth - l
            ),
            this.$menu.css({
              "max-height": o + "px",
              overflow: "hidden",
              "min-height": n + "px",
            }),
            this.$menuInner.css({
              "max-height": t + "px",
              "overflow-y": "auto",
              "min-height": r + "px",
            }),
            (this.sizeInfo.menuInnerHeight = t),
            this.selectpicker.current.data.length &&
              this.selectpicker.current.data[
                this.selectpicker.current.data.length - 1
              ].position > this.sizeInfo.menuInnerHeight &&
              ((this.sizeInfo.hasScrollBar = !0),
              (this.sizeInfo.totalMenuWidth =
                this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth),
              this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)),
            this.dropdown &&
              this.dropdown._popper &&
              this.dropdown._popper.update();
        },
        setSize: function (e) {
          if (
            (this.liHeight(e),
            this.options.header && this.$menu.css("padding-top", 0),
            !1 !== this.options.size)
          ) {
            var t,
              i = this,
              n = U(window),
              s = 0;
            this.setMenuSize(),
              "auto" === this.options.size
                ? (this.$searchbox
                    .off("input.setMenuSize propertychange.setMenuSize")
                    .on(
                      "input.setMenuSize propertychange.setMenuSize",
                      function () {
                        return i.setMenuSize();
                      }
                    ),
                  n
                    .off("resize.setMenuSize scroll.setMenuSize")
                    .on("resize.setMenuSize scroll.setMenuSize", function () {
                      return i.setMenuSize();
                    }))
                : this.options.size &&
                  "auto" != this.options.size &&
                  this.selectpicker.current.elements.length >
                    this.options.size &&
                  (this.$searchbox.off(
                    "input.setMenuSize propertychange.setMenuSize"
                  ),
                  n.off("resize.setMenuSize scroll.setMenuSize")),
              e
                ? (s = this.$menuInner[0].scrollTop)
                : i.multiple ||
                  ("number" ==
                    typeof (t =
                      i.selectpicker.main.map.newIndex[
                        i.$element[0].selectedIndex
                      ]) &&
                    !1 !== i.options.size &&
                    (s =
                      (s = i.sizeInfo.liHeight * t) -
                      i.sizeInfo.menuInnerHeight / 2 +
                      i.sizeInfo.liHeight / 2)),
              i.createView(!1, s);
          }
        },
        setWidth: function () {
          var i = this;
          "auto" === this.options.width
            ? requestAnimationFrame(function () {
                i.$menu.css("min-width", "0"), i.liHeight(), i.setMenuSize();
                var e = i.$newElement.clone().appendTo("body"),
                  t = e.css("width", "auto").children("button").outerWidth();
                e.remove(),
                  (i.sizeInfo.selectWidth = Math.max(
                    i.sizeInfo.totalMenuWidth,
                    t
                  )),
                  i.$newElement.css("width", i.sizeInfo.selectWidth + "px");
              })
            : "fit" === this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "").addClass("fit-width"))
            : this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", this.options.width))
            : (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "")),
            this.$newElement.hasClass("fit-width") &&
              "fit" !== this.options.width &&
              this.$newElement.removeClass("fit-width");
        },
        selectPosition: function () {
          this.$bsContainer = U('<div class="bs-container" />');
          var i,
            n,
            s,
            o = this,
            r = U(this.options.container),
            e = function (e) {
              var t = {};
              o.$bsContainer
                .addClass(
                  e.attr("class").replace(/form-control|fit-width/gi, "")
                )
                .toggleClass(q.DROPUP, e.hasClass(q.DROPUP)),
                (i = e.offset()),
                r.is("body")
                  ? (n = {
                      top: 0,
                      left: 0,
                    })
                  : (((n = r.offset()).top +=
                      parseInt(r.css("borderTopWidth")) - r.scrollTop()),
                    (n.left +=
                      parseInt(r.css("borderLeftWidth")) - r.scrollLeft())),
                (s = e.hasClass(q.DROPUP) ? 0 : e[0].offsetHeight),
                G.major < 4 &&
                  ((t.top = i.top - n.top + s), (t.left = i.left - n.left)),
                (t.width = e[0].offsetWidth),
                o.$bsContainer.css(t);
            };
          this.$button.on("click.bs.dropdown.data-api", function () {
            o.isDisabled() ||
              (e(o.$newElement),
              o.$bsContainer
                .appendTo(o.options.container)
                .toggleClass(q.SHOW, !o.$button.hasClass(q.SHOW))
                .append(o.$menu));
          }),
            U(window).on("resize scroll", function () {
              e(o.$newElement);
            }),
            this.$element.on("hide.bs.select", function () {
              o.$menu.data("height", o.$menu.height()), o.$bsContainer.detach();
            });
        },
        setOptionStatus: function () {
          var e = this,
            t = this.$element.find("option");
          if (
            ((e.noScroll = !1),
            e.selectpicker.view.visibleElements &&
              e.selectpicker.view.visibleElements.length)
          )
            for (
              var i = 0;
              i < e.selectpicker.view.visibleElements.length;
              i++
            ) {
              var n =
                  e.selectpicker.current.map.originalIndex[
                    i + e.selectpicker.view.position0
                  ],
                s = t[n];
              if (s) {
                var o = this.selectpicker.main.map.newIndex[n],
                  r = this.selectpicker.main.elements[o];
                e.setDisabled(
                  n,
                  s.disabled ||
                    ("OPTGROUP" === s.parentNode.tagName &&
                      s.parentNode.disabled),
                  o,
                  r
                ),
                  e.setSelected(n, s.selected, o, r);
              }
            }
        },
        setSelected: function (e, t, i, n) {
          var s,
            o,
            r,
            a = void 0 !== this.activeIndex,
            l = this.activeIndex === e || (t && !this.multiple && !a);
          i || (i = this.selectpicker.main.map.newIndex[e]),
            n || (n = this.selectpicker.main.elements[i]),
            (r = n.firstChild),
            t && (this.selectedIndex = e),
            n.classList.toggle("selected", t),
            n.classList.toggle("active", l),
            l &&
              ((this.selectpicker.view.currentActive = n),
              (this.activeIndex = e)),
            r &&
              (r.classList.toggle("selected", t),
              r.classList.toggle("active", l),
              r.setAttribute("aria-selected", t)),
            l ||
              (!a &&
                t &&
                this.prevActiveIndex &&
                ((s =
                  this.selectpicker.main.map.newIndex[this.prevActiveIndex]),
                (o = this.selectpicker.main.elements[s]).classList.remove(
                  "active"
                ),
                o.firstChild && o.firstChild.classList.remove("active")));
        },
        setDisabled: function (e, t, i, n) {
          var s;
          i || (i = this.selectpicker.main.map.newIndex[e]),
            n || (n = this.selectpicker.main.elements[i]),
            (s = n.firstChild),
            n.classList.toggle(q.DISABLED, t),
            s &&
              ("4" === G.major && s.classList.toggle(q.DISABLED, t),
              s.setAttribute("aria-disabled", t),
              t
                ? s.setAttribute("tabindex", -1)
                : s.setAttribute("tabindex", 0));
        },
        isDisabled: function () {
          return this.$element[0].disabled;
        },
        checkDisabled: function () {
          var e = this;
          this.isDisabled()
            ? (this.$newElement.addClass(q.DISABLED),
              this.$button
                .addClass(q.DISABLED)
                .attr("tabindex", -1)
                .attr("aria-disabled", !0))
            : (this.$button.hasClass(q.DISABLED) &&
                (this.$newElement.removeClass(q.DISABLED),
                this.$button.removeClass(q.DISABLED).attr("aria-disabled", !1)),
              -1 != this.$button.attr("tabindex") ||
                this.$element.data("tabindex") ||
                this.$button.removeAttr("tabindex")),
            this.$button.click(function () {
              return !e.isDisabled();
            });
        },
        togglePlaceholder: function () {
          var e = this.$element[0],
            t = e.selectedIndex,
            i = -1 === t;
          i || e.options[t].value || (i = !0),
            this.$button.toggleClass("bs-placeholder", i);
        },
        tabIndex: function () {
          this.$element.data("tabindex") !== this.$element.attr("tabindex") &&
            -98 !== this.$element.attr("tabindex") &&
            "-98" !== this.$element.attr("tabindex") &&
            (this.$element.data("tabindex", this.$element.attr("tabindex")),
            this.$button.attr("tabindex", this.$element.data("tabindex"))),
            this.$element.attr("tabindex", -98);
        },
        clickListener: function () {
          var k = this,
            t = U(document);
          t.data("spaceSelect", !1),
            this.$button.on("keyup", function (e) {
              /(32)/.test(e.keyCode.toString(10)) &&
                t.data("spaceSelect") &&
                (e.preventDefault(), t.data("spaceSelect", !1));
            }),
            this.$newElement.on("show.bs.dropdown", function () {
              3 < G.major &&
                !k.dropdown &&
                ((k.dropdown = k.$button.data("bs.dropdown")),
                (k.dropdown._menu = k.$menu[0]));
            }),
            this.$button.on("click.bs.dropdown.data-api", function () {
              k.$newElement.hasClass(q.SHOW) || k.setSize();
            }),
            this.$element.on("shown.bs.select", function () {
              k.$menuInner[0].scrollTop !== k.selectpicker.view.scrollTop &&
                (k.$menuInner[0].scrollTop = k.selectpicker.view.scrollTop),
                k.options.liveSearch
                  ? k.$searchbox.focus()
                  : k.$menuInner.focus();
            }),
            this.$menuInner.on("click", "li a", function (e, t) {
              var i = U(this),
                n = k.isVirtual() ? k.selectpicker.view.position0 : 0,
                s =
                  k.selectpicker.current.map.originalIndex[
                    i.parent().index() + n
                  ],
                o = k.$element.val(),
                r = k.$element.prop("selectedIndex"),
                a = !0;
              if (
                (k.multiple &&
                  1 !== k.options.maxOptions &&
                  e.stopPropagation(),
                e.preventDefault(),
                !k.isDisabled() && !i.parent().hasClass(q.DISABLED))
              ) {
                var l = k.$element.find("option"),
                  c = l.eq(s),
                  d = c.prop("selected"),
                  h = c.parent("optgroup"),
                  p = k.options.maxOptions,
                  u = h.data("maxOptions") || !1;
                if (k.multiple) {
                  if (
                    (c.prop("selected", !d),
                    s === k.activeIndex && (t = !0),
                    t ||
                      ((k.prevActiveIndex = k.activeIndex),
                      (k.activeIndex = void 0)),
                    k.setSelected(s, !d),
                    i.blur(),
                    !1 !== p || !1 !== u)
                  ) {
                    var f = p < l.filter(":selected").length,
                      m = u < h.find("option:selected").length;
                    if ((p && f) || (u && m))
                      if (p && 1 == p)
                        l.prop("selected", !1),
                          c.prop("selected", !0),
                          k.$menuInner
                            .find(".selected")
                            .removeClass("selected"),
                          k.setSelected(s, !0);
                      else if (u && 1 == u) {
                        h.find("option:selected").prop("selected", !1),
                          c.prop("selected", !0);
                        var g =
                          k.selectpicker.current.data[
                            i.parent().index() + k.selectpicker.view.position0
                          ].optID;
                        k.$menuInner
                          .find(".optgroup-" + g)
                          .removeClass("selected"),
                          k.setSelected(s, !0);
                      } else {
                        var v =
                            "string" == typeof k.options.maxOptionsText
                              ? [
                                  k.options.maxOptionsText,
                                  k.options.maxOptionsText,
                                ]
                              : k.options.maxOptionsText,
                          b = "function" == typeof v ? v(p, u) : v,
                          $ = b[0].replace("{n}", p),
                          w = b[1].replace("{n}", u),
                          x = U('<div class="notify"></div>');
                        b[2] &&
                          (($ = $.replace("{var}", b[2][1 < p ? 0 : 1])),
                          (w = w.replace("{var}", b[2][1 < u ? 0 : 1]))),
                          c.prop("selected", !1),
                          k.$menu.append(x),
                          p &&
                            f &&
                            (x.append(U("<div>" + $ + "</div>")),
                            (a = !1),
                            k.$element.trigger("maxReached.bs.select")),
                          u &&
                            m &&
                            (x.append(U("<div>" + w + "</div>")),
                            (a = !1),
                            k.$element.trigger("maxReachedGrp.bs.select")),
                          setTimeout(function () {
                            k.setSelected(s, !1);
                          }, 10),
                          x.delay(750).fadeOut(300, function () {
                            U(this).remove();
                          });
                      }
                  }
                } else
                  l.prop("selected", !1),
                    c.prop("selected", !0),
                    k.setSelected(s, !0);
                !k.multiple || (k.multiple && 1 === k.options.maxOptions)
                  ? k.$button.focus()
                  : k.options.liveSearch && k.$searchbox.focus(),
                  a &&
                    ((o != k.$element.val() && k.multiple) ||
                      (r != k.$element.prop("selectedIndex") && !k.multiple)) &&
                    ((C = [s, c.prop("selected"), d]),
                    k.$element.triggerNative("change"));
              }
            }),
            this.$menu.on(
              "click",
              "li." +
                q.DISABLED +
                " a, .popover-title, .popover-title :not(.close)",
              function (e) {
                e.currentTarget == this &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  k.options.liveSearch && !U(e.target).hasClass("close")
                    ? k.$searchbox.focus()
                    : k.$button.focus());
              }
            ),
            this.$menuInner.on(
              "click",
              ".divider, .dropdown-header",
              function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  k.options.liveSearch
                    ? k.$searchbox.focus()
                    : k.$button.focus();
              }
            ),
            this.$menu.on("click", ".popover-title .close", function () {
              k.$button.click();
            }),
            this.$searchbox.on("click", function (e) {
              e.stopPropagation();
            }),
            this.$menu.on("click", ".actions-btn", function (e) {
              k.options.liveSearch ? k.$searchbox.focus() : k.$button.focus(),
                e.preventDefault(),
                e.stopPropagation(),
                U(this).hasClass("bs-select-all")
                  ? k.selectAll()
                  : k.deselectAll();
            }),
            this.$element.on({
              change: function () {
                k.render(),
                  k.$element.trigger("changed.bs.select", C),
                  (C = null);
              },
              focus: function () {
                k.$button.focus();
              },
            });
        },
        liveSearchListener: function () {
          var u = this,
            f = document.createElement("li");
          this.$button.on("click.bs.dropdown.data-api", function () {
            u.$searchbox.val() && u.$searchbox.val("");
          }),
            this.$searchbox.on(
              "click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",
              function (e) {
                e.stopPropagation();
              }
            ),
            this.$searchbox.on("input propertychange", function () {
              var e = u.$searchbox.val();
              if (
                ((u.selectpicker.search.map.newIndex = {}),
                (u.selectpicker.search.map.originalIndex = {}),
                (u.selectpicker.search.elements = []),
                (u.selectpicker.search.data = []),
                e)
              ) {
                var t = [],
                  i = e.toUpperCase(),
                  n = {},
                  s = [],
                  o = u._searchStyle(),
                  r = u.options.liveSearchNormalize;
                u._$lisSelected = u.$menuInner.find(".selected");
                for (var a = 0; a < u.selectpicker.main.data.length; a++) {
                  var l = u.selectpicker.main.data[a];
                  n[a] || (n[a] = k(l, i, o, r)),
                    n[a] &&
                      void 0 !== l.headerIndex &&
                      -1 === s.indexOf(l.headerIndex) &&
                      (0 < l.headerIndex &&
                        ((n[l.headerIndex - 1] = !0),
                        s.push(l.headerIndex - 1)),
                      (n[l.headerIndex] = !0),
                      s.push(l.headerIndex),
                      (n[l.lastIndex + 1] = !0)),
                    n[a] && "optgroup-label" !== l.type && s.push(a);
                }
                a = 0;
                for (var c = s.length; a < c; a++) {
                  var d = s[a],
                    h = s[a - 1],
                    p =
                      ((l = u.selectpicker.main.data[d]),
                      u.selectpicker.main.data[h]);
                  ("divider" !== l.type ||
                    ("divider" === l.type &&
                      p &&
                      "divider" !== p.type &&
                      c - 1 !== a)) &&
                    (u.selectpicker.search.data.push(l),
                    t.push(u.selectpicker.main.elements[d]),
                    (u.selectpicker.search.map.newIndex[l.originalIndex] =
                      t.length - 1),
                    (u.selectpicker.search.map.originalIndex[t.length - 1] =
                      l.originalIndex));
                }
                (u.activeIndex = void 0),
                  (u.noScroll = !0),
                  u.$menuInner.scrollTop(0),
                  (u.selectpicker.search.elements = t),
                  u.createView(!0),
                  t.length ||
                    ((f.className = "no-results"),
                    (f.innerHTML = u.options.noneResultsText.replace(
                      "{0}",
                      '"' + V(e) + '"'
                    )),
                    u.$menuInner[0].firstChild.appendChild(f));
              } else u.$menuInner.scrollTop(0), u.createView(!1);
            });
        },
        _searchStyle: function () {
          return this.options.liveSearchStyle || "contains";
        },
        val: function (e) {
          return void 0 !== e
            ? (this.$element.val(e).triggerNative("change"), this.$element)
            : this.$element.val();
        },
        changeAll: function (e) {
          if (this.multiple) {
            void 0 === e && (e = !0);
            for (
              var t = this.$element.find("option"), i = 0, n = 0, s = 0;
              s < this.selectpicker.current.elements.length;
              s++
            ) {
              var o = t[this.selectpicker.current.map.originalIndex[s]];
              o && (o.selected && i++, (o.selected = e), o.selected && n++);
            }
            i !== n &&
              (this.setOptionStatus(),
              this.togglePlaceholder(),
              this.$element.triggerNative("change"));
          }
        },
        selectAll: function () {
          return this.changeAll(!0);
        },
        deselectAll: function () {
          return this.changeAll(!1);
        },
        toggle: function (e) {
          (e = e || window.event) && e.stopPropagation(),
            this.$button.trigger("click.bs.dropdown.data-api");
        },
        keydown: function (e) {
          var t,
            i,
            n,
            s,
            o,
            r = U(this),
            a = (r.is("input") ? r.parent().parent() : r.parent()).data("this"),
            l = a.findLis(),
            c = !1,
            d =
              e.which === z &&
              !r.hasClass("dropdown-toggle") &&
              !a.options.selectOnTab,
            h = _.test(e.which) || d,
            p = a.$menuInner[0].scrollTop,
            u = a.isVirtual(),
            f = !0 === u ? a.selectpicker.view.position0 : 0;
          if (
            (!(i = a.$newElement.hasClass(q.SHOW)) &&
              (h ||
                (48 <= e.which && e.which <= 57) ||
                (96 <= e.which && e.which <= 105) ||
                (65 <= e.which && e.which <= 90)) &&
              a.$button.trigger("click.bs.dropdown.data-api"),
            e.which === y &&
              i &&
              (e.preventDefault(),
              a.$button.trigger("click.bs.dropdown.data-api").focus()),
            h)
          ) {
            if (!l.length) return;
            void 0 ===
              (t =
                !0 === u
                  ? l.index(l.filter(".active"))
                  : a.selectpicker.current.map.newIndex[a.activeIndex]) &&
              (t = -1),
              -1 !== t &&
                ((n = a.selectpicker.current.elements[t + f]).classList.remove(
                  "active"
                ),
                n.firstChild && n.firstChild.classList.remove("active")),
              e.which === O
                ? (-1 !== t && t--,
                  t + f < 0 && (t += l.length),
                  a.selectpicker.view.canHighlight[t + f] ||
                    (-1 ===
                      (t =
                        a.selectpicker.view.canHighlight
                          .slice(0, t + f)
                          .lastIndexOf(!0) - f) &&
                      (t = l.length - 1)))
                : (e.which === D || d) &&
                  (++t + f >= a.selectpicker.view.canHighlight.length &&
                    (t = 0),
                  a.selectpicker.view.canHighlight[t + f] ||
                    (t =
                      t +
                      1 +
                      a.selectpicker.view.canHighlight
                        .slice(t + f + 1)
                        .indexOf(!0))),
              e.preventDefault();
            var m = f + t;
            e.which === O
              ? 0 === f && t === l.length - 1
                ? ((a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight),
                  (m = a.selectpicker.current.elements.length - 1))
                : (c =
                    (o =
                      (s = a.selectpicker.current.data[m]).position -
                      s.height) < p)
              : (e.which === D || d) &&
                (0 !== f && 0 === t
                  ? (m = a.$menuInner[0].scrollTop = 0)
                  : (c =
                      p <
                      (o =
                        (s = a.selectpicker.current.data[m]).position -
                        a.sizeInfo.menuInnerHeight))),
              (n = a.selectpicker.current.elements[m]).classList.add("active"),
              n.firstChild && n.firstChild.classList.add("active"),
              (a.activeIndex = a.selectpicker.current.map.originalIndex[m]),
              (a.selectpicker.view.currentActive = n),
              c && (a.$menuInner[0].scrollTop = o),
              a.options.liveSearch ? a.$searchbox.focus() : r.focus();
          } else if (
            (!r.is("input") && !H.test(e.which)) ||
            (e.which === T && a.selectpicker.keydown.keyHistory)
          ) {
            var g,
              v,
              b = [];
            e.preventDefault(),
              (a.selectpicker.keydown.keyHistory += I[e.which]),
              a.selectpicker.keydown.resetKeyHistory.cancel &&
                clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),
              (a.selectpicker.keydown.resetKeyHistory.cancel =
                a.selectpicker.keydown.resetKeyHistory.start()),
              (v = a.selectpicker.keydown.keyHistory),
              /^(.)\1+$/.test(v) && (v = v.charAt(0));
            for (var $ = 0; $ < a.selectpicker.current.data.length; $++) {
              var w = a.selectpicker.current.data[$];
              k(w, v, "startsWith", !0) &&
                a.selectpicker.view.canHighlight[$] &&
                ((w.index = $), b.push(w.originalIndex));
            }
            if (b.length) {
              var x = 0;
              l.removeClass("active").find("a").removeClass("active"),
                1 === v.length &&
                  (-1 === (x = b.indexOf(a.activeIndex)) || x === b.length - 1
                    ? (x = 0)
                    : x++),
                (g = a.selectpicker.current.map.newIndex[b[x]]),
                (c =
                  0 < p - (s = a.selectpicker.current.data[g]).position
                    ? ((o = s.position - s.height), !0)
                    : ((o = s.position - a.sizeInfo.menuInnerHeight),
                      s.position > p + a.sizeInfo.menuInnerHeight)),
                (n = a.selectpicker.current.elements[g]).classList.add(
                  "active"
                ),
                n.firstChild && n.firstChild.classList.add("active"),
                (a.activeIndex = b[x]),
                n.firstChild.focus(),
                c && (a.$menuInner[0].scrollTop = o),
                r.focus();
            }
          }
          i &&
            ((e.which === T && !a.selectpicker.keydown.keyHistory) ||
              e.which === S ||
              (e.which === z && a.options.selectOnTab)) &&
            (e.which !== T && e.preventDefault(),
            (a.options.liveSearch && e.which === T) ||
              (a.$menuInner.find(".active a").trigger("click", !0),
              r.focus(),
              a.options.liveSearch ||
                (e.preventDefault(), U(document).data("spaceSelect", !0))));
        },
        mobile: function () {
          this.$element.addClass("mobile-device");
        },
        refresh: function () {
          var e = U.extend({}, this.options, this.$element.data());
          (this.options = e),
            (this.selectpicker.main.map.newIndex = {}),
            (this.selectpicker.main.map.originalIndex = {}),
            this.createLi(),
            this.checkDisabled(),
            this.render(),
            this.setStyle(),
            this.setWidth(),
            this.setSize(!0),
            this.$element.trigger("refreshed.bs.select");
        },
        hide: function () {
          this.$newElement.hide();
        },
        show: function () {
          this.$newElement.show();
        },
        remove: function () {
          this.$newElement.remove(), this.$element.remove();
        },
        destroy: function () {
          this.$newElement.before(this.$element).remove(),
            this.$bsContainer
              ? this.$bsContainer.remove()
              : this.$menu.remove(),
            this.$element
              .off(".bs.select")
              .removeData("selectpicker")
              .removeClass("bs-select-hidden selectpicker");
        },
      });
    var p = U.fn.selectpicker;
    (U.fn.selectpicker = a),
      (U.fn.selectpicker.Constructor = h),
      (U.fn.selectpicker.noConflict = function () {
        return (U.fn.selectpicker = p), this;
      }),
      U(document)
        .off("keydown.bs.dropdown.data-api")
        .on(
          "keydown.bs.select",
          '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input',
          h.prototype.keydown
        )
        .on(
          "focusin.modal",
          '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input',
          function (e) {
            e.stopPropagation();
          }
        ),
      U(window).on("load.bs.select.data-api", function () {
        U(".selectpicker").each(function () {
          var e = U(this);
          a.call(e, e.data());
        });
      });
  })(jQuery);
var objectFitImages = (function () {
    "use strict";

    function o(e, t, i) {
      var n =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
        (t || 1) +
        "' height='" +
        (i || 0) +
        "'%3E%3C/svg%3E";
      f.call(e, "src") !== n && m.call(e, "src", n);
    }

    function r(e, t) {
      e.naturalWidth ? t(e) : setTimeout(r, 100, e, t);
    }

    function a(t) {
      var i,
        n,
        e = (function (e) {
          for (
            var t, i = getComputedStyle(e).fontFamily, n = {};
            null !== (t = c.exec(i));

          )
            n[t[1]] = t[2];
          return n;
        })(t),
        s = t[l];
      if (((e["object-fit"] = e["object-fit"] || "fill"), !s.img)) {
        if ("fill" === e["object-fit"]) return;
        if (!s.skipTest && d && !e["object-position"]) return;
      }
      if (!s.img) {
        (s.img = new Image(t.width, t.height)),
          (s.img.srcset = f.call(t, "data-ofi-srcset") || t.srcset),
          (s.img.src = f.call(t, "data-ofi-src") || t.src),
          m.call(t, "data-ofi-src", t.src),
          t.srcset && m.call(t, "data-ofi-srcset", t.srcset),
          o(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
          t.srcset && (t.srcset = "");
        try {
          (i = t),
            (n = {
              get: function (e) {
                return i[l].img[e || "src"];
              },
              set: function (e, t) {
                return (
                  (i[l].img[t || "src"] = e),
                  m.call(i, "data-ofi-" + t, e),
                  a(i),
                  e
                );
              },
            }),
            Object.defineProperty(i, "src", n),
            Object.defineProperty(i, "currentSrc", {
              get: function () {
                return n.get("currentSrc");
              },
            }),
            Object.defineProperty(i, "srcset", {
              get: function () {
                return n.get("srcset");
              },
              set: function (e) {
                return n.set(e, "srcset");
              },
            });
        } catch (t) {
          window.console && console.warn("https://bit.ly/ofi-old-browser");
        }
      }
      (function (e) {
        if (e.srcset && !u && window.picturefill) {
          var t = window.picturefill._;
          (e[t.ns] && e[t.ns].evaled) ||
            t.fillImg(e, {
              reselect: !0,
            }),
            e[t.ns].curSrc ||
              ((e[t.ns].supported = !1),
              t.fillImg(e, {
                reselect: !0,
              })),
            (e.currentSrc = e[t.ns].curSrc || e.src);
        }
      })(s.img),
        (t.style.backgroundImage =
          'url("' +
          (s.img.currentSrc || s.img.src).replace(/"/g, '\\"') +
          '")'),
        (t.style.backgroundPosition = e["object-position"] || "center"),
        (t.style.backgroundRepeat = "no-repeat"),
        (t.style.backgroundOrigin = "content-box"),
        /scale-down/.test(e["object-fit"])
          ? r(s.img, function () {
              s.img.naturalWidth > t.width || s.img.naturalHeight > t.height
                ? (t.style.backgroundSize = "contain")
                : (t.style.backgroundSize = "auto");
            })
          : (t.style.backgroundSize = e["object-fit"]
              .replace("none", "auto")
              .replace("fill", "100% 100%")),
        r(s.img, function (e) {
          o(t, e.naturalWidth, e.naturalHeight);
        });
    }

    function s(e, t) {
      var i = !g && !e;
      if (((t = t || {}), (e = e || "img"), (h && !t.skipTest) || !p))
        return !1;
      "img" === e
        ? (e = document.getElementsByTagName("img"))
        : "string" == typeof e
        ? (e = document.querySelectorAll(e))
        : "length" in e || (e = [e]);
      for (var n = 0; n < e.length; n++)
        (e[n][l] = e[n][l] || {
          skipTest: t.skipTest,
        }),
          a(e[n]);
      i &&
        (document.body.addEventListener(
          "load",
          function (e) {
            "IMG" === e.target.tagName &&
              s(e.target, {
                skipTest: t.skipTest,
              });
          },
          !0
        ),
        (g = !0),
        (e = "img")),
        t.watchMQ &&
          window.addEventListener(
            "resize",
            s.bind(null, e, {
              skipTest: t.skipTest,
            })
          );
    }
    var l = "bfred-it:object-fit-images",
      c = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
      e =
        "undefined" == typeof Image
          ? {
              style: {
                "object-position": 1,
              },
            }
          : new Image(),
      d = "object-fit" in e.style,
      h = "object-position" in e.style,
      p = "background-size" in e.style,
      u = "string" == typeof e.currentSrc,
      f = e.getAttribute,
      m = e.setAttribute,
      g = !1;
    return (
      (s.supportsObjectFit = d),
      (s.supportsObjectPosition = h),
      (function () {
        function i(e, t) {
          return e[l] && e[l].img && ("src" === t || "srcset" === t)
            ? e[l].img
            : e;
        }
        h ||
          ((HTMLImageElement.prototype.getAttribute = function (e) {
            return f.call(i(this, e), e);
          }),
          (HTMLImageElement.prototype.setAttribute = function (e, t) {
            return m.call(i(this, e), e, String(t));
          }));
      })(),
      s
    );
  })(),
  outdatedBrowser = function (e) {
    function t(e) {
      var t;
      (t = e),
        (n.style.opacity = t / 100),
        (n.style.filter = "alpha(opacity=" + t + ")"),
        1 == e && (n.style.display = "block"),
        100 == e && (c = !0);
    }

    function i() {
      var e = document.getElementById("btnCloseUpdateBrowser"),
        t = document.getElementById("btnUpdateBrowser");
      (n.style.backgroundColor = bkgColor),
        (n.style.color = txtColor),
        (n.children[0].style.color = txtColor),
        (n.children[1].style.color = txtColor),
        (t.style.color = txtColor),
        t.style.borderColor && (t.style.borderColor = txtColor),
        (e.style.color = txtColor),
        (e.onmousedown = function () {
          return !(n.style.display = "none");
        }),
        (t.onmouseover = function () {
          (this.style.color = bkgColor),
            (this.style.backgroundColor = txtColor);
        }),
        (t.onmouseout = function () {
          (this.style.color = txtColor),
            (this.style.backgroundColor = bkgColor);
        });
    }
    var n = document.getElementById("outdated");
    (this.defaultOpts = {
      bgColor: "#f25648",
      color: "#ffffff",
      lowerThan: "transform",
      languagePath: "../outdatedbrowser/lang/en.html",
    }),
      (languagePath =
        ((cssProp =
          ((txtColor =
            ((bkgColor =
              (e &&
                ("IE8" == e.lowerThan || "borderSpacing" == e.lowerThan
                  ? (e.lowerThan = "borderSpacing")
                  : "IE9" == e.lowerThan || "boxShadow" == e.lowerThan
                  ? (e.lowerThan = "boxShadow")
                  : "IE10" == e.lowerThan ||
                    "transform" == e.lowerThan ||
                    "" == e.lowerThan ||
                    void 0 === e.lowerThan
                  ? (e.lowerThan = "transform")
                  : ("IE11" == e.lowerThan || "borderImage" == e.lowerThan) &&
                    (e.lowerThan = "borderImage"),
                (this.defaultOpts.bgColor = e.bgColor),
                (this.defaultOpts.color = e.color),
                (this.defaultOpts.lowerThan = e.lowerThan),
                (this.defaultOpts.languagePath = e.languagePath)),
              this.defaultOpts.bgColor)),
            this.defaultOpts.color)),
          this.defaultOpts.lowerThan)),
        this.defaultOpts.languagePath));
    var s,
      o,
      r,
      a,
      l,
      c = !0;
    if (
      !((s = document.createElement("div")),
      (o = "Khtml Ms O Moz Webkit".split(" ")),
      (r = o.length),
      function (e) {
        if (e in s.style) return !0;
        for (
          e = e.replace(/^[a-z]/, function (e) {
            return e.toUpperCase();
          });
          r--;

        )
          if (o[r] + e in s.style) return !0;
        return !1;
      })("" + cssProp)
    ) {
      if (c && "1" !== n.style.opacity) {
        c = !1;
        for (var d = 1; d <= 100; d++)
          setTimeout(
            (function (e) {
              return function () {
                t(e);
              };
            })(d),
            8 * d
          );
      }
      " " === languagePath || 0 == languagePath.length
        ? i()
        : ((a = languagePath),
          (l = (function () {
            var t = !1;
            if (window.XMLHttpRequest) t = new XMLHttpRequest();
            else if (window.ActiveXObject)
              try {
                t = new ActiveXObject("Msxml2.XMLHTTP");
              } catch (e) {
                try {
                  t = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                  t = !1;
                }
              }
            return t;
          })()) &&
            ((l.onreadystatechange = function () {
              var e, t;
              (e = l),
                (t = document.getElementById("outdated")),
                4 == e.readyState &&
                  ((t.innerHTML =
                    200 == e.status || 304 == e.status ? e.responseText : h),
                  i());
            }),
            l.open("GET", a, !0),
            l.send(null)));
      var h =
        '<h6>Your browser is out-of-date!</h6><p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p><p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>';
    }
  };
!(function (l) {
  (l.fn.stupidtable = function (t) {
    return this.each(function () {
      var e = l(this);
      (t = t || {}),
        (t = l.extend({}, l.fn.stupidtable.default_sort_fns, t)),
        e.data("sortFns", t),
        e.stupidtable_build(),
        e.on("click.stupidtable", "thead th", function () {
          l(this).stupidsort();
        }),
        e.find("th[data-sort-onload=yes]").eq(0).stupidsort();
    });
  }),
    (l.fn.stupidtable.default_settings = {
      should_redraw: function (e) {
        return !0;
      },
      will_manually_build_table: !1,
    }),
    (l.fn.stupidtable.dir = {
      ASC: "asc",
      DESC: "desc",
    }),
    (l.fn.stupidtable.default_sort_fns = {
      int: function (e, t) {
        return parseInt(e, 10) - parseInt(t, 10);
      },
      float: function (e, t) {
        return parseFloat(e) - parseFloat(t);
      },
      string: function (e, t) {
        return e.toString().localeCompare(t.toString());
      },
      "string-ins": function (e, t) {
        return (
          (e = e.toString().toLocaleLowerCase()),
          (t = t.toString().toLocaleLowerCase()),
          e.localeCompare(t)
        );
      },
    }),
    (l.fn.stupidtable_settings = function (i) {
      return this.each(function () {
        var e = l(this),
          t = l.extend({}, l.fn.stupidtable.default_settings, i);
        e.stupidtable.settings = t;
      });
    }),
    (l.fn.stupidsort = function (e) {
      var n = l(this),
        t = n.data("sort") || null;
      if (null !== t) {
        var s = n.closest("table"),
          o = {
            $th: n,
            $table: s,
            datatype: t,
          };
        return (
          s.stupidtable.settings ||
            (s.stupidtable.settings = l.extend(
              {},
              l.fn.stupidtable.default_settings
            )),
          (o.compare_fn = s.data("sortFns")[t]),
          (o.th_index = c(o)),
          (o.sort_dir = i(e, o)),
          n.data("sort-dir", o.sort_dir),
          s.trigger("beforetablesort", {
            column: o.th_index,
            direction: o.sort_dir,
            $th: n,
          }),
          s.css("display"),
          setTimeout(function () {
            s.stupidtable.settings.will_manually_build_table ||
              s.stupidtable_build();
            var e = r(o);
            e = a(e, o);
            if (s.stupidtable.settings.should_redraw(o)) {
              s.children("tbody").append(e);
              e = o.$table;
              var t = o.$th,
                i = t.data("sort-dir");
              e
                .find("th")
                .data("sort-dir", null)
                .removeClass("sorting-desc sorting-asc"),
                t.data("sort-dir", i).addClass("sorting-" + i),
                s.trigger("aftertablesort", {
                  column: o.th_index,
                  direction: o.sort_dir,
                  $th: n,
                }),
                s.css("display");
            }
          }, 10),
          n
        );
      }
    }),
    (l.fn.updateSortVal = function (e) {
      var t = l(this);
      return (
        t.is("[data-sort-value]") && t.attr("data-sort-value", e),
        t.data("sort-value", e),
        t
      );
    }),
    (l.fn.stupidtable_build = function () {
      return this.each(function () {
        var e = l(this),
          i = [];
        e
          .children("tbody")
          .children("tr")
          .each(function (e, t) {
            var n = {
              $tr: l(t),
              columns: [],
              index: e,
            };
            l(t)
              .children("td")
              .each(function (e, t) {
                var i = l(t).data("sort-value");
                void 0 === i && ((i = l(t).text()), l(t).data("sort-value", i)),
                  n.columns.push(i);
              }),
              i.push(n);
          }),
          e.data("stupidsort_internaltable", i);
      });
    });
  var r = function (o) {
      var e = o.$table.data("stupidsort_internaltable"),
        r = o.th_index,
        t = (t = o.$th.data("sort-multicolumn")) ? t.split(",") : [],
        a = l.map(t, function (e, t) {
          var i,
            n = o.$table.find("th"),
            s = parseInt(e, 10);
          return (
            s || 0 === s
              ? (i = n.eq(s))
              : ((i = n.siblings("#" + e)), (s = n.index(i))),
            {
              index: s,
              $e: i,
            }
          );
        });
      return (
        e.sort(function (e, t) {
          for (
            var i = a.slice(0), n = o.compare_fn(e.columns[r], t.columns[r]);
            0 === n && i.length;

          ) {
            var s = (n = i[0]).$e.data("sort");
            n = (0, o.$table.data("sortFns")[s])(
              e.columns[n.index],
              t.columns[n.index]
            );
            i.shift();
          }
          return 0 === n ? e.index - t.index : n;
        }),
        o.sort_dir != l.fn.stupidtable.dir.ASC && e.reverse(),
        e
      );
    },
    a = function (e, i) {
      var t = l.map(e, function (e, t) {
        return [[e.columns[i.th_index], e.$tr, t]];
      });
      return (
        (i.column = t),
        l.map(e, function (e) {
          return e.$tr;
        })
      );
    },
    i = function (e, t) {
      var i,
        n = t.$th,
        s = l.fn.stupidtable.dir;
      return (
        e
          ? (i = e)
          : ((i = e || n.data("sort-default") || s.ASC),
            n.data("sort-dir") &&
              (i = n.data("sort-dir") === s.ASC ? s.DESC : s.ASC)),
        i
      );
    },
    c = function (e) {
      var t = 0,
        i = e.$th.index();
      return (
        e.$th
          .parents("tr")
          .find("th")
          .slice(0, i)
          .each(function () {
            var e = l(this).attr("colspan") || 1;
            t += parseInt(e, 10);
          }),
        t
      );
    };
})(jQuery);
//# sourceMappingURL=scripts.min.js.map
