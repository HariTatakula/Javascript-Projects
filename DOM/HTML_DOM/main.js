// changing heading

document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';
document.body.innerHTML = '<h2>This is now the heading of the body element</h2>';


// changing Element
document.getElementById('fourth').innerHTML = 'Professor Snape';

//changing class
document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';

//changing first list item
document.getElementsByTagName('li')[0].innerHTML = 'Dobby';

// Hiding the button onclick
document.getElementById('button').onclick.hidden = true;

/*
 To access the first child element of the body
' .children and .parentNode '

let first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

first.parentNode.style.backgroundColor = 'beige';*/