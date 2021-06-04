function toggle(e) {
    if (e.classList.contains("fa-moon-o")) { //se tem lua
        e.classList.remove("fa-moon-o"); //remove classe icone lua
        e.classList.add("fa-sun-o"); //coloca classedo sol
        // e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = 'rgb(10, 10, 10)';
        document.querySelector('#userName').style.color = '#fff';
        
        var titles = document.querySelectorAll('.grid-card-title');

        for (let i = 0; i < titles.length; i++) {
            titles[i].style.color = '#fff'
        }

        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.filter = 'grayscale(100%)';
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(100%)';
        }

        let circles = document.querySelectorAll('.circle');
        // Pega apenas o primeiro do array
        circles[0].style.filter = 'grayscale(100%)';
        // pega todos
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.filter = 'grayscale(100%)';
        }

    } else { //senão
        e.classList.remove("fa-sun-o"); //remove classe icone lua
        e.classList.add("fa-moon-o"); //coloca classedo sol
        e.style.color = "#585858";
        document.body.style.background = 'rgb(243, 242, 242)';
        document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';

        var titles = document.querySelectorAll('.grid-card-title');

        for (let i = 0; i < titles.length; i++) {
            titles[i].style.color = 'rgb(99, 99, 99)'
        }
        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circles = document.querySelectorAll('.circle');
        // Pega apenas o primeiro do array
        circles[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.filter = 'grayscale(0%)';
        }
    }

}