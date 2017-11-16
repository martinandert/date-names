var assert  = require('assert');
var hasKey  = Object.prototype.hasOwnProperty;

testLocale('cs');
testLocale('da');
testLocale('de');
testLocale('en');
testLocale('es');
testLocale('fi');
testLocale('fr');
testLocale('nl');
testLocale('pt-br');
testLocale('ru');
testLocale('sk');

function testLocale(locale, path, name) {
  path = path || ('./' + locale);
  name = name || ('the `' + locale + '` module');

  describe('requiring ' + name, function() {
    var mod = require(path);

    it('loads the `' + locale + '` locale', function() {
      assert.equal(mod.__locale, locale);
    });

    it('exports the correct keys', function() {
      assert(hasKey.call(mod, 'months'));
      assert(hasKey.call(mod, 'abbreviated_months'));
      assert(hasKey.call(mod, 'days'));
      assert(hasKey.call(mod, 'abbreviated_days'));
      assert(hasKey.call(mod, 'am'));
      assert(hasKey.call(mod, 'pm'));
    });

    it('exports twelve month names as strings', function() {
      assert.equal(mod.months.length, 12);
      assert.equal(mod.abbreviated_months.length, 12);

      mod.months.forEach(function(name) {
        assert.equal(typeof name, "string");
      });

      mod.abbreviated_months.forEach(function(name) {
        assert.equal(typeof name, "string");
      });
    });

    it('exports seven day names as strings', function() {
      assert.equal(mod.days.length, 7);
      assert.equal(mod.abbreviated_days.length, 7);

      mod.days.forEach(function(name) {
        assert.equal(typeof name, "string");
        assert(name.length);
      });

      mod.abbreviated_days.forEach(function(name) {
        assert.equal(typeof name, "string");
        assert(name.length);
      });
    });

    it('exports an am value as string', function() {
      assert.equal(typeof mod.am, "string");
      assert(mod.am.length);
    });

    it('exports a pm value as string', function() {
      assert.equal(typeof mod.pm, "string");
      assert(mod.pm.length);
    });
  });
}

testLocale('en', './', 'the package main');
