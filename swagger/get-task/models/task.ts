/* tslint:disable */
export interface Task {

  /**
   * The task id.
   */
  id?: string;

  /**
   * The task name.
   */
  name?: string;

  /**
   * The assignee's id.
   */
  assignee?: string;

  /**
   * The date the task was created on. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ.
   */
  created?: string;

  /**
   * The task's due date. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ.
   */
  due?: string;

  /**
   * The follow-up date for the task. Default format* yyyy-MM-dd'T'HH:mm:ss.SSSZ.
   */
  followUp?: string;

  /**
   * The task's delegation state. Possible values are PENDING and RESOLVED.
   */
  delegationState?: 'PENDING' | 'RESOLVED';

  /**
   * The task's description.
   */
  description?: string;

  /**
   * The id of the execution the task belongs to.
   */
  executionId?: string;

  /**
   * The owner's id.
   */
  owner?: string;

  /**
   * The id the parent task, if this task is a subtask.
   */
  parentTaskId?: string;

  /**
   * The task's priority.
   */
  priority?: number;

  /**
   * The id of the process definition the task belongs to.
   */
  processDefinitionId?: string;

  /**
   * The id of the process instance the task belongs to.
   */
  processInstanceId?: string;

  /**
   * The id of the case definition the task belongs to.
   */
  caseDefinitionId?: string;

  /**
   * The id of the case instance the task belongs to.
   */
  caseInstanceId?: string;

  /**
   * The id of the case execution the task belongs to.
   */
  caseExecutionId?: string;

  /**
   * The task's key.
   */
  taskDefinitionKey?: string;

  /**
   * Whether the task belongs to a process instance that is suspended.
   */
  suspended?: boolean;

  /**
   * If not null, the form key for the task.
   */
  formKey?: string;

  /**
   * If not null, the tenant id of the task.
   */
  tenantId?: string;
}
