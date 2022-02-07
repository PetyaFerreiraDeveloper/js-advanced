function getArticleGenerator(articles) {

    return ()=> {
        if (articles.length) {

            let containerElement = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = articles.shift();
            article.innerText = currentText;
            containerElement.appendChild(article) 
        }
        
    }
}
