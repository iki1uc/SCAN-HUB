import { SCAN_ROUTER } from "./modules/scan-router.js";

export const Router = {
    run(type, payload) {
        const result = SCAN_ROUTER.route(type, payload);
        console.log("SCAN RESULT:", result);
        return result;
    }
};
