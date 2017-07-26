/// <reference types="express" />

import * as express from "express";

declare module threerest {
    
}

//export interface treerest { ServiceLoader: ServiceLoader, Service: Service, Hal, Methods, Convert, pagination, NotFoundError, RestError };

export namespace ServiceLoader {
  export function loadServices(expressInst: express.Application, serviceDirPath: string): void;
  export function loadService(expressInst: express.Application, service: any): void;
}

export namespace Service {
    export function path(path: string): (target: any) => void;
    export function getParams(requete: Request): any;
}

export namespace Hal {
    export function halServiceMethod(pagination: IPaginationData | boolean): (target: any, key: string, descriptor: PropertyDescriptor) => void;
    export function halEntity(link: string, paramName?: string): (target: any) => void;
    export function resourceId(): (target: any, key: string, descriptor: PropertyDescriptor) => void;
}

export namespace Methods {
    var  METHODS: {
        get: boolean;
        post: boolean;
        delete: boolean;
        put: boolean;
        patch: boolean;
        [key: string]: boolean;
    };
    function get(path: string): (target: any, key: string, descriptor: PropertyDescriptor) => void;
    function post(path: string): (target: any, key: string, descriptor: PropertyDescriptor) => void;
    function put(path: string): (target: any, key: string, descriptor: PropertyDescriptor) => void;
    function del(path: string): ((target: any, key: string, descriptor: PropertyDescriptor) => void);
    function patch(path: string): (target: any, key: string, descriptor: PropertyDescriptor) => void;
}

export function convert(ConvertClass: new () => any): Function;

export namespace Pagination {
    function paginate(pageSizeKeyWord: string, pageIdxKeyWord: string): (target: any, key: string, descriptor: PropertyDescriptor) => void;
    function managePagination(result: Array<any>, pageSize: number, pageIdx?: number, startIdx?: number): any[];
    function extractPaginationData(query: any, pageSizeKeyWord?: string, pageIdxKeyWord?: string, startIdxKeyWord?: string): PaginationData;
}

export class NotFoundError extends RestError {
    constructor(message?: string);
}

export class RestError extends Error {
    message: string;
    code: number;
    constructor(message: string, code: number);
}

interface IPaginationData {
    startIdx?: number;
    pageIdx?: number;
    pageSize?: number;
    pageIdxKeyWord?: string;
    pageSizeKeyWord?: string;
    startIdxKeyWord?: string;
    length?: number;
}

declare class PaginationData {
    pageIdxKeyWord: string;
    pageSizeKeyWord: string;
    startIdxKeyWord: string;
    pageIdx: number;
    pageSize: number;
    startIdx: number;
    length: number;
    constructor(pageIdxKeyWord: string, pageSizeKeyWord: string, startIdxKeyWord: string, pageIdx?: number, pageSize?: number, startIdx?: number, length?: number);
    getPageMetadata(): MetaData;
}
interface MetaData {
    nextIdx?: number;
    prevIdx?: number;
    nextPage?: number;
    lastPage?: number;
    pageSize?: number;
    pageIdxKeyWord?: string;
    pageSizeKeyWord?: string;
    startIdxKeyWord?: string;
}