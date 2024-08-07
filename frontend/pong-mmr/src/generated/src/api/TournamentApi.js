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
import ApiClient from "../ApiClient";
import Tournament from '../model/Tournament';

/**
* Tournament service.
* @module api/TournamentApi
* @version 0.1
*/
export default class TournamentApi {

    /**
    * Constructs a new TournamentApi. 
    * @alias module:api/TournamentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiTournamentsGet operation.
     * @callback moduleapi/TournamentApi~apiTournamentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tournament>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all tournaments
     * Get all tournaments
     * @param {module:api/TournamentApi~apiTournamentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiTournamentsGet(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Tournament];

      return this.apiClient.callApi(
        '/api/tournaments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiTournamentsIdDelete operation.
     * @callback moduleapi/TournamentApi~apiTournamentsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tournament
     * Delete a tournament
     * @param {Number} id Tournament ID
     * @param {module:api/TournamentApi~apiTournamentsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiTournamentsIdDelete(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiTournamentsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/tournaments/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiTournamentsIdGet operation.
     * @callback moduleapi/TournamentApi~apiTournamentsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tournament{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a tournament by ID
     * Get a tournament by its ID
     * @param {Number} id Tournament ID
     * @param {module:api/TournamentApi~apiTournamentsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiTournamentsIdGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiTournamentsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Tournament;

      return this.apiClient.callApi(
        '/api/tournaments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiTournamentsIdPut operation.
     * @callback moduleapi/TournamentApi~apiTournamentsIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tournament{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a tournament
     * Update a tournament
     * @param {module:model/Tournament} body Tournament object
     * @param {Number} id Tournament ID
     * @param {module:api/TournamentApi~apiTournamentsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiTournamentsIdPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiTournamentsIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiTournamentsIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['*/*'];
      let accepts = ['application/json'];
      let returnType = Tournament;

      return this.apiClient.callApi(
        '/api/tournaments/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiTournamentsPost operation.
     * @callback moduleapi/TournamentApi~apiTournamentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tournament{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new tournament
     * Create a new tournament
     * @param {module:model/Tournament} body Tournament object
     * @param {module:api/TournamentApi~apiTournamentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiTournamentsPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling apiTournamentsPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['*/*'];
      let accepts = ['application/json'];
      let returnType = Tournament;

      return this.apiClient.callApi(
        '/api/tournaments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}