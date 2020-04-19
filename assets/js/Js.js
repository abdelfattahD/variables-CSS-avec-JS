const inputs = document.querySelectorAll('.left input');

function handleUpdate () {
    Console.log(this.value)

}

imputs.forEach(imput => imput.addEventListener('change',handleUpdate));