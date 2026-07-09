import { SCAN_ROUTER } from "./scan-router.js";

export const SCAN_SYSTEM = {
    start() {
        return SCAN_ROUTER.route("dom");
    }
};

