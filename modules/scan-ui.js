export const SCAN_UI = {
    run() {
        return {
            buttons: document.querySelectorAll("button").length,
            inputs: document.querySelectorAll("input").length,
            links: document.querySelectorAll("a").length
        };
    }
};

