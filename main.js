
const contentConfig = [
    { 
        id: 'hud-container', 
        filePath: 'assets/hud/hud.html', 
        cssPath: 'assets/hud/hud.css' 
    }
];
function loadContent(id) {
    const config = contentConfig.find(item => item.id === id);
    if (!config) {
        console.error(`კონფიგუროციო ვერ მოიძებნო '${id}'.`);
        return;
    }
    const container = document.getElementById(id);
    if (!container) {
        console.error(`კონტენტის ID '${id}' ვერ მოიძებნო.`);
        return;
    }
    if (container.innerHTML.trim()) {
        container.innerHTML = '';
        const existingLink = document.querySelector(`link[data-id="${id}"]`);
        if (existingLink) {
            existingLink.remove();
            console.log(`CSS for '${id}' წოიშოლო.`);
        }
        console.log(`კონტენტი '${id}' წოიშოლო.`);
    } else {
        Promise.all([
            fetch(config.filePath).then(response => {
                if (!response.ok) {
                    throw new Error(`ქსელთონ დოკოვშირებით ხორვეზიო: ${response.statusText}`);
                }
                return response.text();
            }),
            fetch(config.cssPath).then(response => {
                if (!response.ok) {
                    throw new Error(`ქსელთონ დოკოვშირებით ხორვეზიო: ${response.statusText}`);
                }
                return response.text();
            })
        ])
        .then(([htmlData, cssData]) => {
            container.innerHTML = htmlData;
            const existingLink = document.querySelector(`link[data-id="${id}"]`);
            if (!existingLink) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = config.cssPath;
                link.dataset.id = id;
                document.head.appendChild(link);
                console.log(`CSS '${config.cssPath}' წორმოტებით ჩოიტვირთო '${id}'.`);
            }
            console.log(`კონტენტი '${config.filePath}' წორმოტებით ჩოიტვირთო '${id}'.`);
        })
        .catch(error => console.error(`წორმოიქმნო შეცდომო ${config.filePath} ონ ${config.cssPath}:`, error));
    }
}