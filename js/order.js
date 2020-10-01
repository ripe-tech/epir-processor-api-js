export const OrderAPI = superclass =>
    class extends superclass {
        async getOrder(number, options = {}) {
            const url = this.baseUrl + `orders/${number}`;
            options = {
                headers: {
                    "X-Secret-Key": options.token
                }
            };
            const contents = await this.get(url, options);
            return contents;
        }
    };

export default OrderAPI;
