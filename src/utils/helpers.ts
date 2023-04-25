import { APPS } from "./constants"

export const getApp = () => {
    //console.log(window.location.hostname);
    const subdomain = getSubdomain(window.location.hostname);

    const main = APPS.find(app => app.main)

    if (!main) throw new Error ("Must have main app");

    if (subdomain === "") return main.app;

    const app = APPS.find(app => subdomain === app.subDomain);

    if (!app) return main.app;
    return app.app;
};

const getSubdomain = (location: string) => {
    const locationParts = location.split(".");

    let sliceTill = -2

//for localhost
const isMainHost = locationParts.slice(-2)[0] === "www";
if (isMainHost) sliceTill = -2

        return locationParts.slice(0, sliceTill).join("");

};





//admin.localhost => ["admin", "localhost"]
//admin.xyz.com => ["admin", "xyz", "com"]