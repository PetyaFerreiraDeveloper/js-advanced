class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = {
      picture: 200,
      photo: 50,
      item: 250,
    }
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity ) {
    articleModel = articleModel.toLowerCase();
    
    if(!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error('This article model is not included in this gallery!')
    }

    let newArticle = {
      articleModel,
      articleName,
      quantity,
    };

    let articleIsInArray = false;

    for (let art of this.listOfArticles) {
      if (art.articleName === articleName && art.articleModel === articleModel) {
        articleIsInArray = true;
        art.quantity += quantity;
      } 
    }

    if(!articleIsInArray) {
      this.listOfArticles.push(newArticle);
    }
    
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
  }

  inviteGuest(guestName, personality) {
    let points = 0;
    switch (personality) {
      case 'Vip': points = 500;
                  break;
      case 'Middle': points = 250;
                     break;
      default: points = 50;
               break;
    }
    
    let newGuest = {
      guestName,
      points: points,
      purchaseArticle: 0
    }

    let guestIsInArray = this.guests.find(x => x.guestName === guestName);
    if (guestIsInArray) {
      throw new Error(`${guestName} has already been invited.`)
    }
    this.guests.push(newGuest);
    return `You have successfully invited ${guestName}!`
  }

  buyArticle(articleModel, articleName, guestName) {


    let articleIsInArray = false;
    for (let el of this.listOfArticles) {
      if(el.articleName === articleName && el.articleModel === articleModel) {
        articleIsInArray = true;
      } 
    }
    if(!articleIsInArray) {
      throw new Error('This article is not found.');
    }
    let article = this.listOfArticles.find(x => x.articleName === articleName);
    
    if(article.quantity == 0) {
      return `The ${articleName} is not available.`
    }

    let guestIsInArray = this.guests.find(x => x.guestName === guestName);
    if(!guestIsInArray) {
      return 'This guest is not invited.';
    }; 
    
    if(guestIsInArray.points < this.possibleArticles[articleModel]) {
      return "You need to more points to purchase the article.";
    } else {
      guestIsInArray.points -= this.possibleArticles[articleModel];
      article.quantity --;
      guestIsInArray.purchaseArticle ++;
      return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

  }

  showGalleryInfo(criteria) {
    let result = [];
    if (criteria === 'article') {
      let firstLine = 'Articles information:';
      result.push(firstLine);
      this.listOfArticles.forEach(x => result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
    } else if (criteria === 'guest') {
      let firstLine = 'Guests information:';
      result.push(firstLine);
      this.guests.forEach(x => result.push(`${x.guestName} - ${x.purchaseArticle}`));
    }
    return result.join('\n');
  }

}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 0);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));





