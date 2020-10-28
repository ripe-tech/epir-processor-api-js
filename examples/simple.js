const epirProcessor = require("..");

const baseUrl = "http://epir-processor-now.platforme.com/api/v1/";
const token = process.env.RIPE_CORE_TOKEN;
const orderNumber = process.env.ORDER_NUMBER;

async function run() {
    await epirProcessor.API.load();
    const api = new epirProcessor.API({ baseUrl: baseUrl, token: token });
    try {
        console.info(await api.getOrder(orderNumber));
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
