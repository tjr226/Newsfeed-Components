// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    // explicit binding
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    // not explicit binding, doesn't work
    // this.expandButton.addEventListener('click', () => expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
    // this.expandButton.style.display = 'None';
    if (this.expandButton.textContent == 'Expand') {
      this.expandButton.textContent = "Close and Hide";
    } else {
      this.article.style.display = 'None';
    }
  }

  createArticle(formEntry) {
    // heading text set from HTML form
    this.articleHeading = formEntry.articleHeading,
    // date of publication set to when the form is entered
    this.date = new Date(),
    // article text set from HTML form, let's pretend no newlines allowed
    this.articleText = formEntry.articleText;

    let newDiv = document.createElement('div');
    
    let newHeader = document.createElement('h2');
    let headerNode = document.createTextNode(newHeader);
    newDiv.appendChild(headerNode);

    let newDate = document.createElement('p');
    let dateNode = document.createTextNode(newDate);
    newDiv.appendChild(dateNode);

    let newText = document.createElement('p');
    let textNode = document.createTextNode(newText);
    newDiv.appendChild(textNode);

    let articles = document.querySelector('.articles');
    articles.appendChild(newDiv);
    
  }


}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.articles .article');

articles.forEach(function(article){
  return new Article(article);
});