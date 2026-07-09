import { SCAN_ROUTER } from "./modules/scan-router.js";

export const Router = {
    route(type, payload) {
        const result = SCAN_ROUTER.route(type, payload);
        console.log("SCAN RESULT:", result);
    }
};

