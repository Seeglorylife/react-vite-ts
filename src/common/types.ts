/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

/** 动态对象 */
export interface DynamicObj {
  [key: string | symbol | number]: any;
}

export type CbFunc<T = any, D = any> = (param1?: T, param2?: D) => void;

/** 路由类型 */
export interface RouteType {
  path: string;
  /** 组件 */
  component?: () => Promise<{ default: ComponentType<any> }>;
  children?: Array<RouteType>;
  meta?: {
    /** 网页标题 */
    title?: string;
    /** 是否需要登录 */
    needLogin?: boolean;
    /** 左侧菜单展示 */
    showInMenu?: boolean;
    /** 菜单前icon */
    icon?: any;
    /** 顶部显示icon */
    headerIcon?: any;
  };
  redirect?: string;
  errorElement?: () => Promise<{ default: ComponentType<any> }>;
}

export interface ResponseObj<T> extends DynamicObj {
  code: number;
  msg: string;
  data: T;
}
