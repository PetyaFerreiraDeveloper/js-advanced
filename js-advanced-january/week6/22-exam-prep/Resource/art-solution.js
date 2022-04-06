class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
 
    addArticle(articleModel, articleName, quantity) {
        let articleKeys = Object.keys(this.possibleArticles);
        let isArticlePossible = articleKeys.some((x) => {
            return x.toLowerCase() == articleModel.toLowerCase();
        });
 
        if (!isArticlePossible) {
            throw new Error(
                'This article model is not included in this gallery!'
            );
        }
 
        let article = this.listOfArticles.find((x) => {
            return x.articleModel == articleModel.toLowerCase();
        });
 
        if (article) {
            article.quantity += quantity;
        } else {
            let articleObj = {
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity: Number(quantity),
            };
 
            this.listOfArticles.push(articleObj);
        }
 
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
 
    inviteGuest(guestName, personality) {
        if (this.guests.some((x) => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }
 
        let points = 50;
        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        }
 
        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }
 
    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find((x) => {
            return (
                x.articleModel == articleModel && x.articleName == articleName
            );
        });
 
        if (!article) {
            throw new Error('This article is not found.');
        }
        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }
 
        let guest = this.guests.find((x) => x.guestName == guestName);
        if (!guest) {
            return 'This guest is not invited.';
        }
 
        let requiredPoints = this.possibleArticles[article.articleModel];
        if (guest.points < requiredPoints) {
            return 'You need to more points to purchase the article.';
        }
 
        guest.points -= requiredPoints;
        guest.purchaseArticle++;
        article.quantity--;
 
        return `${guestName} successfully purchased the article worth ${requiredPoints} points.`;
    }
 
    showGalleryInfo(criteria) {
        let stringArr = [];
        if (criteria == 'article') {
            stringArr.push('Articles information:');
            for (let article of this.listOfArticles) {
                let articleInfo = '';
                articleInfo += `${article.articleModel} - ${article.articleName} - ${article.quantity}`;
                stringArr.push(articleInfo);
            }
        } else {
            stringArr.push('Guests information:');
            for (let guest of this.guests) {
                let guestInfo = '';
                guestInfo += `${guest.guestName} - ${guest.purchaseArticle}`;
                stringArr.push(guestInfo);
            }
        }
 
        return stringArr.join('\n');
    }
}