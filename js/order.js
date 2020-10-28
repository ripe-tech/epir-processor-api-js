export const OrderAPI = superclass =>
    class extends superclass {
        async getOrder(number, options = {}) {
            const url = this.baseUrl + `orders/${number}`;
            const contents = await this.get(url, { auth: true, ...options });
            return contents;
        }
    };

export default OrderAPI;
