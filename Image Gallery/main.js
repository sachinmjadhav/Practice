const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

//Set first image opacity
imgs[0].style.opacity = opacity;

                                                    //ES5 method for changing images
                                                // imgs.forEach(imga);
                                                // function imga(a) {
                                                //     a.addEventListener('click', imgClick);
                                                // }

    // ES6 method arrow function for changing images
imgs.forEach(a => a.addEventListener('click', imgClick));

function imgClick(e) {
        //Reset opacity
                                                // imgs.forEach(q);
                                                // function q(w) {
                                                //     w.style.opacity = 1;
                                                // }
    imgs.forEach(img => (img.style.opacity = 1));



    //Change current image to src of clicked image
    current.src = e.target.src;



    //Add fade-in class
    current.classList.add('fade-in');



    //Remove fade-in class after 0.5s
                                                // setTimeout(z, 500);
                                                // function z() {
                                                //     current.classList.remove('fade-in');
                                                // }
    setTimeout(() => current.classList.remove('fade-in'), 500);




    //Change opacity to opacity var
    e.target.style.opacity = opacity;
}