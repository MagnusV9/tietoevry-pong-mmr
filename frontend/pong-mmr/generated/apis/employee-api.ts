/* tslint:disable */
/* eslint-disable */
/**
 * tietoevry-pong-mmr
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Employee } from '../models';
import { UpdateEmployee } from '../models';
/**
 * EmployeeApi - axios parameter creator
 * @export
 */
export const EmployeeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all employees
         * @summary Get all employees
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmployeesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/employees`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an employee by its ID
         * @summary Delete an employee by ID
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmployeesIdDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiEmployeesIdDelete.');
            }
            const localVarPath = `/api/employees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get an employee by its ID
         * @summary Get an employee by ID
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmployeesIdGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiEmployeesIdGet.');
            }
            const localVarPath = `/api/employees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an existing employee by its ID
         * @summary Update an existing employee
         * @param {UpdateEmployee} body UpdateEmployee object
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmployeesIdPut: async (body: UpdateEmployee, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiEmployeesIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiEmployeesIdPut.');
            }
            const localVarPath = `/api/employees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new employee
         * @summary Create a new employee
         * @param {Employee} body Employee object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiEmployeesPost: async (body: Employee, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiEmployeesPost.');
            }
            const localVarPath = `/api/employees`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = '*/*';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmployeeApi - functional programming interface
 * @export
 */
export const EmployeeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get all employees
         * @summary Get all employees
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<Employee>>>> {
            const localVarAxiosArgs = await EmployeeApiAxiosParamCreator(configuration).apiEmployeesGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete an employee by its ID
         * @summary Delete an employee by ID
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesIdDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await EmployeeApiAxiosParamCreator(configuration).apiEmployeesIdDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get an employee by its ID
         * @summary Get an employee by ID
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesIdGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Employee>>> {
            const localVarAxiosArgs = await EmployeeApiAxiosParamCreator(configuration).apiEmployeesIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update an existing employee by its ID
         * @summary Update an existing employee
         * @param {UpdateEmployee} body UpdateEmployee object
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesIdPut(body: UpdateEmployee, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await EmployeeApiAxiosParamCreator(configuration).apiEmployeesIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create a new employee
         * @summary Create a new employee
         * @param {Employee} body Employee object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesPost(body: Employee, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Employee>>> {
            const localVarAxiosArgs = await EmployeeApiAxiosParamCreator(configuration).apiEmployeesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EmployeeApi - factory interface
 * @export
 */
export const EmployeeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get all employees
         * @summary Get all employees
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<Employee>>> {
            return EmployeeApiFp(configuration).apiEmployeesGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an employee by its ID
         * @summary Delete an employee by ID
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesIdDelete(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return EmployeeApiFp(configuration).apiEmployeesIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an employee by its ID
         * @summary Get an employee by ID
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesIdGet(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Employee>> {
            return EmployeeApiFp(configuration).apiEmployeesIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an existing employee by its ID
         * @summary Update an existing employee
         * @param {UpdateEmployee} body UpdateEmployee object
         * @param {number} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesIdPut(body: UpdateEmployee, id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return EmployeeApiFp(configuration).apiEmployeesIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new employee
         * @summary Create a new employee
         * @param {Employee} body Employee object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiEmployeesPost(body: Employee, options?: AxiosRequestConfig): Promise<AxiosResponse<Employee>> {
            return EmployeeApiFp(configuration).apiEmployeesPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmployeeApi - object-oriented interface
 * @export
 * @class EmployeeApi
 * @extends {BaseAPI}
 */
export class EmployeeApi extends BaseAPI {
    /**
     * Get all employees
     * @summary Get all employees
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    public async apiEmployeesGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<Employee>>> {
        return EmployeeApiFp(this.configuration).apiEmployeesGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete an employee by its ID
     * @summary Delete an employee by ID
     * @param {number} id Employee ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    public async apiEmployeesIdDelete(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return EmployeeApiFp(this.configuration).apiEmployeesIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get an employee by its ID
     * @summary Get an employee by ID
     * @param {number} id Employee ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    public async apiEmployeesIdGet(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Employee>> {
        return EmployeeApiFp(this.configuration).apiEmployeesIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update an existing employee by its ID
     * @summary Update an existing employee
     * @param {UpdateEmployee} body UpdateEmployee object
     * @param {number} id Employee ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    public async apiEmployeesIdPut(body: UpdateEmployee, id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return EmployeeApiFp(this.configuration).apiEmployeesIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new employee
     * @summary Create a new employee
     * @param {Employee} body Employee object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeApi
     */
    public async apiEmployeesPost(body: Employee, options?: AxiosRequestConfig) : Promise<AxiosResponse<Employee>> {
        return EmployeeApiFp(this.configuration).apiEmployeesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
