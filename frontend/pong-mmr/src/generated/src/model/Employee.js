/*
 * tietoevry-pong-mmr
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';

/**
 * The Employee model module.
 * @module model/Employee
 * @version 0.1
 */
export default class Employee {
  /**
   * Constructs a new <code>Employee</code>.
   * Employee account information
   * @alias module:model/Employee
   * @class
   * @param department {String} 
   * @param elo {Number} 
   * @param email {String} 
   * @param name {String} 
   * @param password {String} 
   */
  constructor(department, elo, email, name, password) {
    this.department = department;
    this.elo = elo;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  /**
   * Constructs a <code>Employee</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Employee} obj Optional instance to populate.
   * @return {module:model/Employee} The populated <code>Employee</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Employee();
      if (data.hasOwnProperty('department'))
        obj.department = ApiClient.convertToType(data['department'], 'String');
      if (data.hasOwnProperty('elo'))
        obj.elo = ApiClient.convertToType(data['elo'], 'Number');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} department
 */
Employee.prototype.department = undefined;

/**
 * @member {Number} elo
 */
Employee.prototype.elo = undefined;

/**
 * @member {String} email
 */
Employee.prototype.email = undefined;

/**
 * @member {String} name
 */
Employee.prototype.name = undefined;

/**
 * @member {String} password
 */
Employee.prototype.password = undefined;
