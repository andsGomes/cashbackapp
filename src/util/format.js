// numberToReal
function toPrice(price, scale = 2) {
    return String(((price * 100) / 100).toFixed(scale)).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export default {
    toPrice,
};
