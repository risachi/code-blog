describe('util.js', function() {
  describe('takeOne()', function() {

    it('returns the single element of a one-element array', function() {
      var names = ['Lisa'];
      expect( util.takeOne(names) ).to.be('Lisa');
    });

    it('returns undefined if the array is empty', function() {
      var names = [];
      expect( util.takeOne(names) ).to.be(undefined);
    });

    it('deletes the last element of a one-element array', function() {
      var names = ['Lisa'];
      util.takeOne(names);
      expect( names.length ).to.be(0);
    });

    it('deletes ONLY the element it returns', function() {
      var names = ['Lisa', 'Robb'];
      var chosen_name = util.takeOne(names);
      var remaining_name = names[0];
      expect( chosen_name ).not.to.be( remaining_name );
    });

    it ('removes only one item from the array', function() {
      var arr = [1,2,3,4,5,6,7,8,9,10];
      util.takeOne(arr);
      expect( arr.length ).to.be( 9 );
    });

  });
});


//
// Configuration
///
var expect = require('expect.js');
var util   = require('../util.js')._test;
