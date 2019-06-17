const showDate = () => {
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() +1;
    let year = today.getFullYear();

    let displayDate = `Today's date is ${day}/${month}-${year}`;
    document.getElementById("putdate").innerHTML = displayDate
}

const showJoke = () => {
    let jokes = ['I told the doctor I broke my leg in two places. He told me to quit going to those places.', 
    'The patient has been depressed since she began seeing me in 1993.',
    'Patient has chest pain if she lies on her left side for over a year.', 
    'You’d better be a cardiologist, because something about you makes me want to give you my heart.'];

    let randoJoke = jokes[Math.floor(Math.random() * jokes.length)];
    let displayJoke = document.getElementById('printjoke');
    displayJoke.innerHTML = randoJoke
}
document.getElementById("putdate").addEventListener("click", showDate);
document.getElementById("putjoke").addEventListener("click", showJoke);