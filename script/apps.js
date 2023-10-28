const about = document.querySelector('.about')
const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'));

        // warna
        btn.classList.add('active'); 
        
        articles.forEach(content => {
            content.classList.remove('active');
            if (btn.getAttribute('data-id') === content.getAttribute('id')) {
                content.classList.add('active');
            };
        });
    });
});