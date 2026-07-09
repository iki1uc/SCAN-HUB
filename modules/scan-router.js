import { SCAN_DOM } from "./scan-dom.js";
import { SCAN_ERROR } from "./scan-error.js";
import { SCAN_UI } from "./scan-ui.js";
import { SCAN_PERFORMANCE } from "./scan-performance.js";
import { SCAN_SEO } from "./scan-seo.js";
import { SCAN_DOC } from "./scan-doc.js";
import { SCAN_LIVE } from "./scan-live.js";
import { SCAN_COUNT } from "./scan-count.js";

export const SCAN_ROUTER = {
    run(type) {
        let result;

        switch(type) {
            case "dom": result = SCAN_DOM.run(); break;
            case "error": result = SCAN_ERROR.run(); break;
            case "ui": result = SCAN_UI.run(); break;
            case "perf": result = SCAN_PERFORMANCE.run(); break;
            case "seo": result = SCAN_SEO.run(); break;
            case "doc": result = SCAN_DOC.capture(); break;
            default: result = "Unbekannt";
        }

        SCAN_LIVE.send(result);
        SCAN_COUNT.add(type, result);

        return result;
    }
};
