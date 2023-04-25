import { AppRouter, AngeliaRouter } from "../routers";

export const APPS = [
    {
        subDomain: "www",
        app: AppRouter,
        main: true,
    },
    {
        subDomain: "angelia",
        app: AngeliaRouter,
        main: false,
    },
]