// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-connector-db2
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

/* eslint-env node, mocha */

process.env.NODE_ENV = 'test';
require('./init.js');
// var assert = require('assert');
var DataSource = require('loopback-datasource-juggler').DataSource;

var config;

before(function() {
  config = global.config;
});

describe('testMessages', function() {
  it('should send and receive messages', function(done) {
    var ds = new DataSource(require('../'), config);

    var mq = ds.createModel('mqlight');
    mq.on('started', function() {
      done();
    });

    mq.start();
  });
});
