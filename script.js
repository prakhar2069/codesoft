
document.querySelector('a[href="#download"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#download').scrollIntoView({ behavior: 'smooth' });
});