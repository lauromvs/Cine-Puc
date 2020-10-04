function handleSelectMovie(element) {
    localStorage.setItem('movie', element.id);
    window.location.href = '/sell.html'
}