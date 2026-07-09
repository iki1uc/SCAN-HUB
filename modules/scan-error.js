export const SCAN_ERROR = {
    run() {
        const errors = [];
        document.querySelectorAll("img").forEach(img => {
            if (!img.complete || img.naturalWidth === 0) {
                errors.push("Kaputtes Bild: " + img.src);
            }
        });
        return errors;
    }
};
