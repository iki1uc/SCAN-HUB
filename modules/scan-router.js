import { SCAN_DOM } from "./scan-dom.js";
import { SCAN_ARG } from "./scan-arg.js";
import { SCAN_POSITION } from "./scan-position.js";
import { SCAN_UI } from "./scan-ui.js";
import { SCAN_ERROR } from "./scan-error.js";
import { SCAN_PERFORMANCE } from "./scan-performance.js";
import { SCAN_SEO } from "./scan-seo.js";
import { SCAN_DOC } from "./scan-doc.js";
import { SCAN_COUNT } from "./scan-count.js";
import { SCAN_LIVE } from "./scan-live.js";

export const SCAN_ROUTER = {
    route(type, payload) {

        let result;

        switch(type) {
            case "dom": result = SCAN_DOM.run(); break;
            case "arg": result = SCAN_ARG.run(payload); break;
            case "pos": result = SCAN_POSITION.run(); break;
            case "ui": result = SCAN_UI.run(); break;
            case "error": result = SCAN_ERROR.run(); break;
            case "perf": result = SCAN_PERFORMANCE.run(); break;
            case "seo": result = SCAN_SEO.run(); break;
            case "doc": result = SCAN_DOC.run(); break;
            default: result = { error: "Unbekannter Scan" };
        }

        // COUNT
        SCAN_COUNT.add(type, result);

        // LIVE
        SCAN_LIVE.send({
            type,
            result,
            timestamp: Date.now()
        });

        return result;
    }
};
