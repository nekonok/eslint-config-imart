module.exports = {
  parsers: [
    {
      parse: result => {
        const $ = result.$;
        const apiList = [];

        // globalとjQuery以外のAPI
        $(".jsdoc-member-definition > b > a")
          .not(".accordion-button")
          .get()
          .filter(e => !/jQuery|_global_/.test($(e).attr("href")))
          .forEach(e => apiList.push($(e).text()));

        // global
        const g = $("i.icon-jsdoc-namespace")
          .siblings("span.jsdoc-class-index")
          .get()
          .filter(e => $(e).text() === "_global_");

        $(g)
          .closest("li")
          .find("ul.nav-list li")
          .get()
          .forEach(e => apiList.push($(e).text()));

        return apiList;
      },

      targets: [
        {
          display: "intra-mart Accel Platform Core",
          file: "iap-client-core",
          url: "http://www.intra-mart.jp/apidoc/iap/jsdoc/index.html"
        }
      ]
    },

    {
      parse: result => {
        const $ = result.$;
        const apiList = [];

        $("a").each(function() {
          if ($(this).text().match(/(All Classes|GLOBALS)/)) {
            return true;
          }
          apiList.push($(this).text());
          return true;
        });

        return apiList;
      },

      targets: [
        {
          display: "Compatibility Module",
          file: "iap-client-compat",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/im_csjs/allclasses-frame.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-client-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/im_csjs/allclasses-frame.html"
        }
      ]
    },

    {
      parse: result => {
        const $ = result.$;
        const apiList = [];

        $("ul>li>a").each(function() {
          apiList.push($(this).text());
          return true;
        });

        return apiList;
      },

      targets: [
        {
          display: "IM-PDFDesigner",
          file: "iap-server-pdf_designer",
          url:
            "https://www.intra-mart.jp/apidoc/pdfd/apilist-pdfd-jsdoc/doc/index.html"
        }
      ]
    },

    {
      parse: result => {
        const $ = result.$;
        const apiList = [];

        $("h3").each(function() {
          apiList.push($(this).text());
        });
        return apiList;
      },
      targets: [
        {
          display: "Compatibility Module",
          file: "iap-client-compat",
          url: "http://www.intra-mart.jp/apidoc/v72/doclet/im_csjs/GLOBALS.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-client-core",
          url: "http://www.intra-mart.jp/apidoc/v72/doclet/im_csjs/GLOBALS.html"
        },
        {
          display: "IM-Workflow",
          file: "iwp-client-im_workflow",
          url:
            "http://www.intra-mart.jp/apidoc/im_workflow_v72/csjsdoc/GLOBALS.html"
        }
      ]
    },

    {
      parse: result => {
        const $ = result.$;
        const apiList = [];

        // 左ペインのメニューからヘッダ要素を抽出
        $("ul.nav.nav-list li.nav-header").each(function() {
          // ヘッダ要素のテキストが"グローバル関数"または"情報オブジェクト"の場合無視
          if ($(this).text().match(/(グローバル関数|情報オブジェクト)/)) {
            return true;
          }

          $(this)
            .nextUntil(".nav-header")
            .filter(function() {
              return $(this).text().match(/\w/);
            })
            .each(function() {
              apiList.push($(this).text());
            });
          return true;
        });

        return apiList;
      },

      targets: [
        {
          display: "intra-mart Accel Platform Core",
          file: "iap-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs/doc/platform/index.html"
        },
        {
          display: "intra-mart Accel Platform Core",
          file: "iap-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs/doc/tenant/index.html"
        },
        {
          display: "intra-mart Accel Platform Core",
          file: "iap-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs/doc/im_master/index.html"
        },
        {
          display: "intra-mart Accel Platform Core",
          file: "iap-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs/doc/im_workflow/index.html"
        },
        {
          display: "intra-mart Accel Platform Core",
          file: "iap-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs/doc/imbox/index.html"
        },
        {
          display: "intra-mart Accel Platform Core",
          file: "iap-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs/doc/application/index.html"
        },
        {
          display: "Compatibility Module",
          file: "iap-server-compat",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs-compatible/doc/bpw/index.html"
        },
        {
          display: "Compatibility Module",
          file: "iap-server-compat",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs-compatible/doc/master_v5/index.html"
        },
        {
          display: "Compatibility Module",
          file: "iap-server-compat",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs-compatible/doc/acssecurity_v5/index.html"
        },
        {
          display: "Compatibility Module",
          file: "iap-server-compat",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs-compatible/doc/compatible/index.html"
        },
        {
          display: "intra-mart Accel Collaboration",
          file: "iap-server-collaboration",
          url:
            "http://www.intra-mart.jp/apidoc/iac/apilist-iac-ssjs/doc/iac/index.html"
        },
        {
          display: "IM-FormaDesigner",
          file: "iap-server-forma",
          url:
            "http://www.intra-mart.jp/apidoc/forma/apilist-forma-ssjs/doc/forma/index.html"
        },
        {
          display: "IM-BIS",
          file: "iap-server-bis",
          url:
            "http://www.intra-mart.jp/apidoc/bis/apilist-bis-ssjs/doc/bis/index.html"
        },
        {
          display: "IM-ERP Real Connect",
          file: "iap-server-real_connect",
          url:
            "http://www.intra-mart.jp/apidoc/erp_connect/apilist-erp-ssjs/doc/erp/index.html"
        }
      ]
    },
    {
      parse: result => {
        const $ = result.$;
        const apiList = [];

        $("a.method-tooltip").each(function() {
          apiList.push($(this).text());
        });
        return apiList;
      },
      targets: [
        {
          display: "intra-mart Accel Platform Core",
          file: "iap-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/iap/apilist-ssjs/doc/platform/GlobalFunction/index.html"
        }
      ]
    },
    {
      parse: result => {
        const $ = result.$;
        const apiList = [];
        $("body > strong").each(function() {
          if ($(this).text().match(/情報オブジェクト/)) {
            return true;
          }
          $(this).next().find("a").each(function() {
            apiList.push($(this).text());
          });
          return true;
        });

        return apiList;
      },
      targets: [
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/foundation/js_api_menu.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/access_security/js_api_menu.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/app_cmn/js_api_menu.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/workflow/js_api_menu.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/format_creator/js_api_menu.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/portal/js_api_menu.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/im_maskat/js_api_menu.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/bpms/js_api_menu.html"
        },
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/im_master/js_api_menu.html"
        },
        {
          display: "IM-Workflow",
          file: "iwp-server-im_workflow",
          url:
            "http://www.intra-mart.jp/apidoc/im_workflow_v72/jsdoc/js_api_menu.html"
        },
        {
          display: "Mobile Framework",
          file: "iwp-server-mobile_framework",
          url:
            "http://www.intra-mart.jp/apidoc/im_mobileframework_v72/doclet/function_container/foundation/js_api_menu.html"
        }
      ]
    },
    {
      parse: result => {
        const $ = result.$;
        const apiList = [];
        $("a")
          .filter(function() {
            const h = $(this).attr("href");
            return h ? h.match(/^#/) : false;
          })
          .each(() => apiList.push($(this).text()));

        return apiList;
      },
      targets: [
        {
          display: "intra-mart WebPlatform Core",
          file: "iwp-server-core",
          url:
            "http://www.intra-mart.jp/apidoc/v72/doclet/function_container/foundation/global_function.html"
        }
      ]
    }
  ]
};
