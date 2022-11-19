const paths = document.querySelectorAll('path');

for (let i = 0; i < paths.length; i++) {
    console.log(`Length ${i} is ${Math.ceil(paths[i].getTotalLength())}`)
}