let tickets = 20;

window.onload = () => {
    const movie = localStorage.getItem('movie');
    // console.log(movie);
    document.getElementById('banner').style.backgroundImage = `url('./assets/${movie}_bkg.jpg')`;
}

function handleSelectSeat(element) {
    if (tickets === 0) {
        alert('Ingressos esgotados.')
        return false;
    }
    if (element.classList.contains('seat_item_sold')) {
        alert('Assento indisponível.')
        return false;
    }
    element.classList.toggle("seat_item_selected");
}

function handleBuySeat() {
    if (tickets === 0) {
        alert('Ingressos esgotados.')
        return false;
    }
    const seats = document.getElementsByClassName('seat_item_selected');

    for (let i = 0; i < seats.length; i++) {
        const seat = seats[i];
        seat.classList.add("seat_item_sold");
        tickets = tickets - 1;
    }
    for (let i = seats.length - 1; i >= 0; i--) {
        const seat = seats[i];
        seat.classList.remove('seat_item_selected');

    }
    alert('Ingressos comprados com sucesso!')
}