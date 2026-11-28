const data = [
    { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
    { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
    { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
    { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
    { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
    { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
    { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
    { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
    { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
    { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
    { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
    { name: "Ethereum Classic", ticker: "ETC", value: "12.5988", change: "4.09%" },
    { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
    { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
    { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const sortByName = document.getElementById("sortByName");
let isAscending = true;
function displayData(array) {
    tableBody.innerHTML = "";
    array.forEach(coin => {
        const row = document.createElement("tr");
        const changeValue = parseFloat(coin.change);
        row.innerHTML = `
            <td class="px-7 py-5">${coin.name}</td>
            <td class="px-7 py-5">${coin.ticker}</td>
            <td class="px-7 py-5">$${coin.value}</td>
            <td class="px-7 py-5 font-semibold"
                style="color: ${changeValue < 0 ? '#ef4444' : '#22c55e'}">
                ${coin.change}
            </td>
        `;
        tableBody.appendChild(row);
    });
}
searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    const filteredData = data.filter(coin => {
        return coin.name.toLowerCase().includes(searchValue) ||
               coin.ticker.toLowerCase().includes(searchValue);
    });

    displayData(filteredData);
});
sortByName.addEventListener("click", function () {
    const sortedData = [data].sort((a, b) => {
        if (isAscending) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
    isAscending = !isAscending;
    displayData(sortedData);
});
displayData(data);
