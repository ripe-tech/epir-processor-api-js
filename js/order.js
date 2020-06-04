export const OrderAPI = superclass =>
    class extends superclass {
        async getOrder(number) {
            const url = this.baseUrl + `orders/${number}`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default OrderAPI;
