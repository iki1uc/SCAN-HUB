import { SCAN_ROUTER } from "./modules/scan-router.js";
import { SCAN_COUNT } from "./modules/scan-count.js";
import { SCAN_LIVE } from "./modules/scan-live.js";

export const Router = {
    route(type, payload) {

        // 1. Scan ausführen
        const result = SCAN_ROUTER.route(type, payload);

        // 2. Ergebnis anzeigen
        console.log("SCAN RESULT:", result);

        // 3. COUNT verbinden
        SCAN_COUNT.add(type, result);

        // 4. LIVE senden
        SCAN_LIVE.send({
            type,
            result,
            timestamp: Date.now()
        });

        return result;
    }
};
