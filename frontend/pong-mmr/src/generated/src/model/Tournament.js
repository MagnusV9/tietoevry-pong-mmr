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
import Game from './Game';

/**
 * The Tournament model module.
 * @module model/Tournament
 * @version 0.1
 */
export default class Tournament {
  /**
   * Constructs a new <code>Tournament</code>.
   * Tournament account information
   * @alias module:model/Tournament
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Tournament</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tournament} obj Optional instance to populate.
   * @return {module:model/Tournament} The populated <code>Tournament</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Tournament();
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], [Game]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Game>} games
 */
Tournament.prototype.games = undefined;

