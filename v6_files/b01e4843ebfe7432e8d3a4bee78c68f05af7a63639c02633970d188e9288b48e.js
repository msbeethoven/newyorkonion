window.optimizely.push({type:"load",data:{changes:[{"dependencies": [], "type": "custom_code", "id": "956D62A4-E735-45EA-83D4-38ED934CE7FB", "value": function($){//  Bar1 - NYT4/NYT5, Dynamic ET, TagX Integration 20160128 ~matt.milligan
// 201600309 Edited by Frederic.Gurnot: Add meter count messaging
// 20160108 Edited by Frederic.Gurnot: Add check for prototype page
// 20160421 Edited by Matt.Milligan: Include Text-Only Version
// Refactor Wait for DOM changes to display on NYT5
// NYT5 Selector: #Bar1
// NYT4 Selector: #bar1-3panel
// To pull ADX Campaign Name, replace line below within creative:
// <div id="hovercard" data-campaign-name="%%CAMP%%">

(function (window) {
    "use strict";

    var $, Meter, hasMeter;

    /**
     * Checking if current page depends on NYT5 foundation framework.
     * @returns {boolean}
     */
    function isPrototype() {
        // Pages with metatag prototype cannot use require
        // Jquery is defined globally on these pages and require is not...required

        return document.querySelectorAll("meta[name='prototype']").length > 0;

    }


    // -----------------------------------------
    // ------      Select NYT4/NYT5       ------

    function isNyt5() {
        var nyt5meta = document.getElementsByName('sourceApp'),
            nytApps = {
                'nyt-v5': true,
                'blogs': true
            };
        return (typeof nyt5meta[0] !== "undefined") && (nyt5meta[0].getAttribute('content') in nytApps);
    }


    if (isPrototype()) {

        $ = window.NYTD && window.NYTD.jQuery || window.jQuery;
        showOnNYT5();

    } else {

        if (isNyt5()) {
            require(['foundation/main'], function () {
                $ = require('jquery/nyt');
                try {
                    Meter = require('auth/mtr');
                    hasMeter = true;
                } catch (e) {
                    // Page doesn't have mtr.js
                }

                showOnNYT5();
            });
        } else {
            // NYT4
            $ = (window.NYTD && window.NYTD.jQuery) || window.jQuery;
            showOnNYT4();
            run();
        }
    }

    function showOnNYT4() {
        $('#bar1-nyt5wrapper ul').contents().unwrap();
        $('#bar1-nyt5wrapper').contents().unwrap();
    }


    /**
     * Modify DOM for NYT5
     */
    function showOnNYT5() {
        //Check Bar1 Version: Text or Hover
        var $container = $('#bar1-textlink');

        if ($container.length > 0) {
            $container.wrap('<div id="bar1-textlink" class="user-subscriptions-group"><ul class="user-subscriptions-menu"></ul></div>');
        } else {
            // The container is hidden while this is happening
            $container = $('.bar1_hover');
            $('#nyt-button-sub').addClass('button');
        }
        //Fix FireFox NYT subscribe button issue
        var FIREFOX = /Firefox/i.test(navigator.userAgent);
        if (FIREFOX) {
            $('#nyt-button-sub').css("height", "30px");
        } else {
            $('#nyt-button-sub').css("height", "15px");
        }

        // Wrap a string of HTML around NYT4 container
        //$container.wrap('<div id="bar1-nyt5wrapper" class="user-subscriptions-group"><ul class="user-subscriptions-menu"></ul></div>');

        // Add subscribe link for small view port
        $('#subscribe_small').removeClass("sub_small_hide");
        $('#subscribe_small').css("visibility", "visible");

        runWhenReady(
            function () {
                return $('#bar1-nyt5wrapper');
            },
            run,
            200, 50
        );


    }


    function runWhenReady(testFunction, inFunction, mlsecs, reps) {
        setTimeout(function z() {
            if (testFunction()) {
                inFunction();
            } else if (--reps) {
                setTimeout(z, mlsecs);
            }
        }, mlsecs);
    }

    //ET tracking
    function trackET(dataObj, config) {
        dataObj = dataObj || {};
        runWhenReady(
            function () {
                return (window.NYTD && NYTD.EventTracker && NYTD.EventTracker().track);
            },
            function () {
                NYTD.EventTracker().track(dataObj, config);
            },
            100, 50
        );
    }



    // -----------------------------------------
    // ------      Creative Specific      ------

    function run() {
        $('#bar1-nyt5wrapper').css("opacity", "1");
        $('.bar1_hover').css("opacity", "1");
        $('#nyt-button-sub').show();

        //impressions and hover are for control and variations
        //this will be reused for hover: action: "hover"
        var campname = $("#hovercard").data("campaign-name");
        var eventObj = {
            subject: "module-interactions",
            moduleData: JSON.stringify({
                contentCollection: ("" + campname), //adxCampaignName,

                module: "Ad",
                version: "Bar1",
                action: "hover",
                eventName: "adExpansion"
            })
        };

        // Bar1 user interaction
        $('.bar1_hover').hover(function (e) {
            $('#hovercard').stop(true, true).delay(400).fadeIn('fast');
            $('.nyt-button-actions').removeClass('highlightButton');
            trackET($.extend({}, eventObj, {
                action: "hover",
                eventName: "adExpansion"
            }), {
                buffer: false
            });
        }, function () {
            $('#hovercard').stop(true, true).delay(0).fadeOut('fast');
        });

        $('.split').hover(function () {
            $('.nyt-button-actions').removeClass('highlightButton');
            $(this).find('.nyt-button-actions').addClass('highlightButton');
        });


        //Update meter
        if (hasMeter) {
            var mc = Meter.pageCount;

            $(".bar1--meter--count").each(function (i) {
                $(this).text(mc);
            });
            if (mc === 1) {
                $('.ad.bar1-ad .user-subscriptions-menu .plural-s').addClass('hidden');
            } else if (mc > 10 || !mc) {
                $('.ad.bar1-ad .bar1-hidden').addClass('hidden');
            }
        } else {
            $('.bar1-hidden').addClass('hidden');
        }


        if (typeof addFloodlight == 'function') {
            addFloodlight();
        }

    }
})(window);
}}, {"name": "Bar1", "config": {"custom_js": "", "nytID": "US_JulySale_0719", "full_html": "<span class=\"adxInfo mktInfo\" style=\"display:none;\">campaign: bar1_nons_US_julySale_0713, creative: Bar1, source: optimizely, creator: DH</span>\n<div id=\"bar1-nyt5wrapper\" class=\"user-subscriptions-group\">\n        <ul class=\"user-subscriptions-menu\">\n            <li id=\"bar1-3panel\" class=\"user-subscriptions-menu user-subscriptions-group bar1_hover\"><a id=\"nyt-button-sub\" href=\"%%CLICKTHRU1%%\" target=\"_blank\" data-content-collection=\"\" data-content-placement=\"1\" style=\"display:none\">SUBSCRIBE NOW\n            <div id=\"hovercard\" class=\"font-smoothing\">\n                    <div id=\"bar1-body\">                                                \n                        <div id=\"bar1-headline\">\n                            THE TIMES SALE<br>\n                            <span id=\"headline--price\">50% off for one year.</span><br>\n                            <p>Limited time offer.</p>\n                        </div>\n                        <div class=\"bar1-hero\">\n                        </div>\n                        <div id=\"bar1-Subhead\">\n                        Come for the Washington insight.<br>\n                            <span>Stay for the global perspective.</span>\n                        </div>\n                        <div id=\"bar1-cta\">SEE MY OPTIONS</div>                \n                    </div>\n                </div></a>\n            </li>\n        </ul>\n    </div>\n    <a id=\"subscribe_small\" href=\"%%CLICKTHRU1%%\" class=\"subscribe-link sub_small_hide\" style=\"visibility:hidden\" target=\"_blank\">SUBSCRIBE NOW</a>", "extra_js": "https://static01.nyt.com/marketing/assets/optly/scripts/bar1/bar1_meter_count_v2.js", "click4": "4", "click2": "", "click3": "3", "css": "@import url(https://a1.nyt.com/fonts/css/fonts.css);\n.font-smoothing {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.sub_small_hide {\n    display: none;\n}\n.NYT5Style .masthead-tools {\n    padding-right: 0\n}\n.NYT5Style .masthead-tools #bar1-3panel {\n    display: inline;\n    vertical-align: top;\n    background-image: none\n}\n#bar1-3panel {\n    border: 0;\n    position: relative\n}\n#bar1-nyt5wrapper {\n    opacity: 0\n}\n\n/* to eliminate FOUT */\n#bar1-3panel > a {\n    -moz-box-sizing: border-box;\n    background-color: #6288A5;\n    border: 1px solid #4D7B9F;\n    border-radius: 3px;\n    color: #fff !important;\n    display: inline-block;\n    font-size: 1em;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    padding: 7px 10px 6px;\n    text-transform: none;\n    text-decoration: none;\n}\n#bar1-3panel > a:hover {\n    background-color: #6288A5;\n    border: 1px solid #265E8B;\n    text-decoration: none;\n}\n.NYT4 #bar1-3panel {\n    display: none\n}\n#hovercard {\n    width: 450px;\n    height: 330px;\n    max-width: 450px;\n    display: none;\n    margin-left: -360px;\n    z-index: 1000000152;\n    border: 0;\n    position: absolute;\n    left: 50%;\n    top: 30px;\n    text-align: left;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px #888;\n    box-shadow: 0 0 5px #888;\n    white-space: normal;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    border: 4px solid #f26c4f;\n    background-color: #edece8;\n/*\n    background: url('//cdn.optimizely.com/img/3013110282/01754e3633a2419ea237004990566d3b.png') 0 0 no-repeat;\n    background-size: cover;\n*/\n}\n #bar1-headline {\n    position: absolute;\n    top: 15px;\n    left: 126px;\n    font-family: franklin-normal-700, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 19.8px;\n    letter-spacing: -.1px;\n    color: #000;\n    text-align: center;\n}        \n    \n    #bar1-headline #headline--price {    \n        color: #f26c4f;\n        font-size: 22px;\n        letter-spacing: -.6px;    \n        font-family: franklin-normal-600;\n        font-style: normal;\n        font-weight: 600;\n    }\n    \n    #bar1-headline p {        \n        font-family: franklin-normal-600;\n        font-style: normal;\n        font-weight: 600;\n        font-size: 15px; \n        color: #f26c4f;\n        margin-top: 1px;        \n        letter-spacing: .3px;\n    }\n\n.bar1-hero {\n    position: absolute;\n    left: 144px;\n    top: 83px;\n    width: 150px;\n    height: 135px;\n    background: url('//cdn.optimizely.com/img/3013110282/4ac9a69a281d4f67bf9f15a00995d668.png') 0 0 no-repeat;\n    background-size: cover;\n    z-index: -1;        \n}\n    \n#bar1-Subhead {\n    position: absolute;\n    bottom: 59px;\n    left: 105px;\n    font-family: franklin-normal-600, sans-serif;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 19px;\n    letter-spacing: -.1px;\n    text-align: center;\n    color: #000;\n}\n    \n    #bar1-Subhead span {        \n        font-family: franklin-normal-600, sans-serif;\n        font-style: normal;\n        font-weight: 600;\n        color: #f26c4f;\n    }\n\n\n\n#bar1-cta {\n    position: absolute;\n    bottom: 19px;\n    left: 163px;\n    font-family: franklin-normal-700, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    width: 102px;\n    height: 28px;  \n    margin: 0 auto;\n    background: #f26c4f;\n    font-size: 10.5px;\n    line-height: 27px;\n    padding: 0;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 3px;\n    color: #fff;\n}\n    #bar1-cta a {\n        display: block;\n        height: 100%;\n        cursor: pointer;\n        color: #fff;\n        text-decoration: none;\n        text-transform: uppercase;\n        border: 0px;\n        padding-top: 9px;\n        padding-left: 0 !important;\n    }\n#hovercard:after {\n        bottom: 100%;\n        left: 350px;\n        border: solid transparent;\n        content: \" \";\n        width: 0;\n        height: 0;\n        position: absolute;\n        pointer-events: none;\n        border-bottom-color: #d7e67d;\n        border-width: 8px;\n        margin: 0;\n    }\n#bar1-offer-msg {\n        font-family:  nyt-franklin, sans-serif;\n        font-style: normal;\n        font-weight: 400;\n        position: absolute;\n        top: 270px;\n        left: 40px !important;\n        width: 150px;\n        height: 30px;\n        font-size: 11px;\n        line-height: 15px;\n        padding: 0;\n        text-decoration: none;\n        color: #363636;\n    }\n#hovercard hr {\n    margin: 4px;\n    width: 320px;\n    opacity: 0.5;\n    color: #000\n}\n.hover-subhead {\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 13px;\n    color: #333;\n    margin: 1px 0 0;\n    width: 170px;\n    position: absolute;\n    top: 10px\n}\n#hovercard h3 a,\n#hovercard p a {\n    color: #000 !important;\n    text-decoration: none;\n    display: block\n}\na.nyt-button-actions {\n    background: #f7f7f5;\n    color: #58595b !important;\n    width: 126px;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    border: 1px solid #ccc !important;\n    text-transform: uppercase;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 15px;\n    text-align: center;\n    padding: 6px 0;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    top: 10px;\n    left: 194px;\n    text-decoration: none !important\n}\n#hovercard a.nyt-button-actions:hover {\n    background: #3c6791;\n    color: #fff !important;\n    text-decoration: none !important\n}\n\n#hovercard a.nyt-button-actions.highlightButton:link,\n#hovercard a.nyt-button-actions.highlightButton:visited {\n    color: #fff !important;\n    background: #3c6791;\n    text-decoration: none !important\n}\n\na.split-all-button {\n    background: #f3f3f4;\n    width: 345px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 30px;\n    margin: 0;\n    border: 1px solid #CCC;\n    text-align: center;\n    vertical-align: middle\n}\n\n#hovercard a.split-all-button:hover {\n    background: #73afff;\n    color: #004276 !important;\n    text-decoration: underline !important\n}\n\n.NYT5Style #hovercard {\n    top: 26px\n}\n\n.ad.bar1-ad a.bar1-introtext,\n#memberTools .bar1-introtext,\n.masthead-tools a.bar1-introtext {\n    text-decoration: none;\n    color: #666\n}\n\n.masthead-tools a.bar1-introtext {\n    position: relative;\n    margin-top: 2px\n}\n\n.bar1-introtext {\n    padding-right: 5px\n}\n\n.ad.bar1-ad .user-subscriptions-menu li a {\n    padding-left: 0;\n    border-left: 0\n}\n\n#hovercard::after {bottom: 100%;left: 350px;border: solid transparent;content: \" \";width: 0;height: 0;position: absolute;pointer-events: none;border-bottom-color: #edece8;border-width: 8px;margin: 0;}\n\n/* Chrome-only */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    .NYT5Style #hovercard {\n        left: 50%;\n        top: 29px\n    }\n    .NYT5Style #hovercard:before {\n        top: -14px\n    }\n}\n/* Responsive\n@media screen and (max-width: 734px) {  \n    #bar1-3panel {\n        display: none\n    }\n    .ad.bar1-ad .user-subscriptions-group {\n        display: block\n    }\n} */\n/* Not on interactives */\n#interactiveABC #bar1-3panel {\n    display: none\n}\n    \n.viewport-medium .masthead.masthead-theme-standard.in-content.fixed-nav-subscribe .bar1-ad #nyt-button-sub {\n   background-color: transparent;\n   border-right: none;\n   text-transform: none;\n}", "click1": "https://www.nytimes.com/subscriptions/Multiproduct/lp8XKUR.html?campaignId=6URF8"}, "id": "6A103FEE-D53F-43BC-A751-9EBDCD015282", "dependencies": ["956D62A4-E735-45EA-83D4-38ED934CE7FB"], "type": "widget", "widget_id": "bar1poc2_staging"}]}});