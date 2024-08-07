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
import ApiClient from '../ApiClient';
import Score from './Score';

/**
 * The Game model module.
 * @module model/Game
 * @version 0.1
 */
export default class Game {
  /**
   * Constructs a new <code>Game</code>.
   * Game information between an employee and an user
   * @alias module:model/Game
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Game</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Game} obj Optional instance to populate.
   * @return {module:model/Game} The populated <code>Game</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Game();
      if (data.hasOwnProperty('player1ID'))
        obj.player1ID = ApiClient.convertToType(data['player1ID'], 'String');
      if (data.hasOwnProperty('player1Score'))
        obj.player1Score = Score.constructFromObject(data['player1Score']);
      if (data.hasOwnProperty('player2ID'))
        obj.player2ID = ApiClient.convertToType(data['player2ID'], 'String');
      if (data.hasOwnProperty('player2Score'))
        obj.player2Score = Score.constructFromObject(data['player2Score']);
    }
    return obj;
  }
}

/**
 * @member {String} player1ID
 */
Game.prototype.player1ID = undefined;

/**
 * @member {module:model/Score} player1Score
 */
Game.prototype.player1Score = undefined;

/**
 * @member {String} player2ID
 */
Game.prototype.player2ID = undefined;

/**
 * @member {module:model/Score} player2Score
 */
Game.prototype.player2Score = undefined;

