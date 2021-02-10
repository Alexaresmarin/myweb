const stock1 = document.getElementById('stock1');
const stock2 = document.getElementById('stock2');
const stock3 = document.getElementById('stock3');
const stock4 = document.getElementById('stock4');


stock1.addEventListener('click', (e) => {
    e.preventDefault();

    axios.get(`https://jsonserver-alexares.herokuapp.com/stock?id=1`)
        .then(({data}) => {
            var stock = data[0].stock;
            alert(`Hay un stock de ${stock} unidades`)
        });
});

stock2.addEventListener('click', (e) => {
    e.preventDefault();

    axios.get(`https://jsonserver-alexares.herokuapp.com/stock?id=2`)
        .then(({data}) => {
            var stock = data[0].stock;
            alert(`Hay un stock de ${stock} unidades`)
        });
});

stock3.addEventListener('click', (e) => {
    e.preventDefault();

    axios.get(`https://jsonserver-alexares.herokuapp.com/stock?id=3`)
        .then(({data}) => {
            var stock = data[0].stock;
            alert(`Hay un stock de ${stock} unidades`)
        });
});

stock4.addEventListener('click', (e) => {
    e.preventDefault();

    axios.get(`https://jsonserver-alexares.herokuapp.com/stock?id=4`)
        .then(({data}) => {
            var stock = data[0].stock;
            alert(`Hay un stock de ${stock} unidades`)
        });
});