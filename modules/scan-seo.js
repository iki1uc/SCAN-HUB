export const SCAN_SEO = {
    run() {
        return {
            title: document.title,
            metaDescription: document.querySelector("meta[name='description']")?.content || "none",
            h1: document.querySelector("h1")?.innerText || "none"
        };
    }
};
