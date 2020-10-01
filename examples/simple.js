const epirProcessor = require("..");

const baseUrl = "http://epir-processor-now.platforme.com/api/v1/";
const token = process.env.RIPE_CORE_TOKEN;

async function run() {
    await epirProcessor.API.load();
    const api = new epirProcessor.API({ baseUrl: baseUrl });
    const options = {
        token: token
    };
    try {
        console.info(await api.getOrder(5555, options));
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
