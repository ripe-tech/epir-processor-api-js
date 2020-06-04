const epirProcessor = require("..");

async function run() {
    await epirProcessor.API.load();
    const api = new epirProcessor.API();
    try {
        console.info(await api.info());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
