'use strict';

const assert = require('assert');
const app = require('../../../../../src/app');

describe('test1 service', function() {
  it('registered the test1s service', () => {
    assert.ok(app.service('test1s'));
  });
});
