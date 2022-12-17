import { lazy } from "react";

export function lazyLoad(path) {
    return lazy(() => {
        return import(path);
    })
}