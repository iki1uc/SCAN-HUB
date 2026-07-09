import { SCAN_DOM } from "./scan-dom.js";
import { SCAN_ARG } from "./scan-arg.js";
import { SCAN_POSITION } from "./scan-position.js";

export const SCAN_ROUTER = {
    route(type, payload) {
        switch(type) {
            case "dom": return SCAN_DOM.run();
            case "arg": return SCAN_ARG.run(payload);
            case "pos": return SCAN_POSITION.run();
            default: return { error: "Unbekannter Scan" };
        }
    }
};

