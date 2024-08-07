/*
 * tietoevry-pong-mmr
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.58
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TietoevryPongMmr);
  }
}(this, function(expect, TietoevryPongMmr) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ModelsScore', function() {
      beforeEach(function() {
        instance = new TietoevryPongMmr.ModelsScore();
      });

      it('should create an instance of ModelsScore', function() {
        // TODO: update the code to test ModelsScore
        expect(instance).to.be.a(TietoevryPongMmr.ModelsScore);
      });

      it('should have the property matchId (base name: "match_id")', function() {
        // TODO: update the code to test the property matchId
        expect(instance).to.have.property('matchId');
        // expect(instance.matchId).to.be(expectedValueLiteral);
      });

      it('should have the property playerId (base name: "player_id")', function() {
        // TODO: update the code to test the property playerId
        expect(instance).to.have.property('playerId');
        // expect(instance.playerId).to.be(expectedValueLiteral);
      });

      it('should have the property score (base name: "score")', function() {
        // TODO: update the code to test the property score
        expect(instance).to.have.property('score');
        // expect(instance.score).to.be(expectedValueLiteral);
      });

    });
  });

}));
