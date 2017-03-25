'use strict';

const coffee = require('coffee');
const path = require('path');

describe('test/index.test.js', () => {

  // it('should work', () => {
  //   console.log('xx');
  // });

  it('should run bin', done => {
    const bin = require.resolve('./fixtures/bin');
    const cwd = path.join(__dirname, './fixtures');
    const execArgv = [ '--debug-brk' ];
    coffee.fork(bin, [ 'abc' ], { cwd, execArgv })
      .debug()
      .expect('code', 0)
      .end(done);
  });

  it.skip('should pass --debug-brk by egg-bin', done => {
    // use egg-bin test --debug-brk
    const bin = require.resolve('./fixtures/bin');
    const cwd = path.join(__dirname, './fixtures');
    coffee.fork(bin, [ 'abc' ], { cwd })
      .debug()
      .expect('code', 0)
      .end(done);
  });
});
