export const OrderAPI = superclass =>
    class extends superclass {
        async getOrder(number, mapper) {
            const url = this.baseUrl + `orders/${number}?mapper=${mapper}`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default OrderAPI;
