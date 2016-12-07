/*global define, document, exports */
(function () {
    'use strict';
    function PlatformCheck() {
        var self = this;
        self.root = PlatformCheck.root;
        self.check();
    }
    PlatformCheck.root = this;

    function is_nwjs() {
        try {
            return (typeof require('nw.gui') !== "undefined");
        } catch (e) {
            return false;
        }
    }
    PlatformCheck.prototype.check = function () {
        var self = this;
        self.moduleExist = self.root && self.root.module !== undefined;
        if (!self.moduleExist) {
            self.moduleExist = typeof module !== 'undefined';
        }
        self.windowExist = self.root && (self.root.window !== undefined);
        //self.cordovaExist = typeof cordova !== 'undefined';
        self.cordovaExist = (!self.moduleExist) && (typeof document !== 'undefined' && document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1);

        //self.root && (self.root.cordova !== undefined);

        self.nwjs = is_nwjs();
        self.desktop = self.nwjs;
        self.web = self.windowExist && !self.cordovaExist && !self.nwjs;
        self.console = self.moduleExist && !self.cordovaExist && !self.windowExist;
        self.mobile = self.cordovaExist;
        self.desktoporconsole = self.desktop || self.console;
        console.log('PLATFORM', self.status());
    };
    PlatformCheck.prototype.status = function () {
        var self = this, res = '';
        if (self.desktop) {
            res = 'Desktop;';
        }
        if (self.web) {
            res = 'Web;';
        }
        if (self.mobile) {
            res = 'Mobile;';
        }
        if (self.console) {
            res = 'Console;';
        }
        return res;
    };

    var platformCheck = new PlatformCheck();

    if (platformCheck.module) {
        GLOBAL.platformCheck = platformCheck;
    }
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = platformCheck;
        }
        exports.platformCheck = platformCheck;
    } else {
        if (PlatformCheck.root) {
            PlatformCheck.root.platformCheck = platformCheck;
        }
    }
    if (typeof define === 'function' && define.amd) {
        define('platformCheck', [], function () {
            return platformCheck;
        });
    }
}.call(this));

