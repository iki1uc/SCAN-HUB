export const SCAN_PERFORMANCE = {
    run() {
        return {
            loadTime: performance.now(),
            domSize: document.querySelectorAll('*').length
        };
    }
};

