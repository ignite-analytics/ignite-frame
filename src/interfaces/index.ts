/**
 *  IFrame options interface
 *
 *  @property {number}          departmentId:   The department id that owns the dashboard
 *  @property {number}          dashboardId:    The id of the dashboard that should be displayed inside the iFrame
 *  @property {string}          background?:    A css compatible color string
 *  @property {string}          baseUrl?:       The baseUrl that should be used
 *
 */

export interface IFrameOptions {
    departmentId: number;
    dashboardId: number;
    background?: string;
    baseUrl?: string;
}
