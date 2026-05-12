function show(id){
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function filter(type){
    document.querySelectorAll('.country').forEach(el => {
        el.style.display = (type === 'all' || el.classList.contains(type))
            ? 'list-item'
            : 'none';
    });
}

/* ГРАФІК */
const ctx = document.getElementById('chart');

if(ctx){
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Сомалі', 'Саудівська Аравія'],
        datasets: [
            {
                label: 'Опади',
                data: [20, 10]
            },
            {
                label: 'Рівень голоду',
                data: [90, 10]
            }
        ]
    }
});
}