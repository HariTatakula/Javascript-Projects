const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {
        modern : true,
        name: 'HTML'
    },
    {
      modern : true,
      name:'CSS'
    }, 
    {
      modern : true,
      name: 'JavaScript'
    },
    {
      modern: false,
      name : 'COBOL'
     }
  ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;
