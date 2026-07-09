export const SCAN_DOM = {
    run() {
        const elements = document.querySelectorAll('*');
        return { count: elements.length, elements };
    }
};

