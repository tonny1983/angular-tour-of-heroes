/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Task } from '../models/task';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly getTaskPath = '/task';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Queries for tasks that fulfill a given filter. The size of the result set can be retrieved by using the Get Task Count method.
   * @param params The `ApiService.GetTaskParams` containing the following parameters:
   *
   * - `sortOrder`: Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
   *
   * - `sortBy`: Sort the results lexicographically by a given criterion. Valid values are instanceId, caseInstanceId, dueDate, executionId, caseExecutionId,assignee, created, description, id, name, nameCaseInsensitive and priority. Must be used in conjunction with the sortOrder parameter.
   *
   * - `processInstanceIds`: Filter by a comma-separated list of process instance ids.
   *
   * - `processInstanceBusinessKey`: Filter by process instance business key.
   *
   * - `candidateUser`: Only include tasks that are offered to the given user or to one of his groups.
   *
   * - `assignee`: Restrict to tasks that the given user is assigned to.
   *
   * @return OK
   */
  getTaskResponse(params: ApiService.GetTaskParams): __Observable<__StrictHttpResponse<Array<Task>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sortOrder != null) __params = __params.set('sortOrder', params.sortOrder.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.processInstanceIds != null) __params = __params.set('processInstanceIds', params.processInstanceIds.toString());
    if (params.processInstanceBusinessKey != null) __params = __params.set('processInstanceBusinessKey', params.processInstanceBusinessKey.toString());
    if (params.candidateUser != null) __params = __params.set('candidateUser', params.candidateUser.toString());
    if (params.assignee != null) __params = __params.set('assignee', params.assignee.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/task`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Task>>;
      })
    );
  }
  /**
   * Queries for tasks that fulfill a given filter. The size of the result set can be retrieved by using the Get Task Count method.
   * @param params The `ApiService.GetTaskParams` containing the following parameters:
   *
   * - `sortOrder`: Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
   *
   * - `sortBy`: Sort the results lexicographically by a given criterion. Valid values are instanceId, caseInstanceId, dueDate, executionId, caseExecutionId,assignee, created, description, id, name, nameCaseInsensitive and priority. Must be used in conjunction with the sortOrder parameter.
   *
   * - `processInstanceIds`: Filter by a comma-separated list of process instance ids.
   *
   * - `processInstanceBusinessKey`: Filter by process instance business key.
   *
   * - `candidateUser`: Only include tasks that are offered to the given user or to one of his groups.
   *
   * - `assignee`: Restrict to tasks that the given user is assigned to.
   *
   * @return OK
   */
  getTask(params: ApiService.GetTaskParams): __Observable<Array<Task>> {
    return this.getTaskResponse(params).pipe(
      __map(_r => _r.body as Array<Task>)
    );
  }
}

module ApiService {

  /**
   * Parameters for getTask
   */
  export interface GetTaskParams {

    /**
     * Sort the results in a given order. Values may be asc for ascending order or desc for descending order. Must be used in conjunction with the sortBy parameter.
     */
    sortOrder?: string;

    /**
     * Sort the results lexicographically by a given criterion. Valid values are instanceId, caseInstanceId, dueDate, executionId, caseExecutionId,assignee, created, description, id, name, nameCaseInsensitive and priority. Must be used in conjunction with the sortOrder parameter.
     */
    sortBy?: string;

    /**
     * Filter by a comma-separated list of process instance ids.
     */
    processInstanceIds?: string;

    /**
     * Filter by process instance business key.
     */
    processInstanceBusinessKey?: string;

    /**
     * Only include tasks that are offered to the given user or to one of his groups.
     */
    candidateUser?: string;

    /**
     * Restrict to tasks that the given user is assigned to.
     */
    assignee?: string;
  }
}

export { ApiService }
