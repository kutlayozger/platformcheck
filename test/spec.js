/*global describe, it, assert */

'use strict';

var assert = require('assert'),
    platformCheck = require('../lib/platformcheck.js').platformCheck;

describe('Test 1', function () {
    it('test 1', function () {
        var answer = platformCheck.status();
        console.log('answer is', answer);
        assert.equal(answer, 'Console;');
        assert.equal(platformCheck.console, true);
        assert.equal(platformCheck.web, false);
        assert.equal(platformCheck.mobile, false);
    });
});
