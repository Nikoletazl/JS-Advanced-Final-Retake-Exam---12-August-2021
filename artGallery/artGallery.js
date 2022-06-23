class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []
        this.personalities = {
            'Vip': 500,
            'Middle': 250,
        }
    }

    addArticle(articleModel, articleName, quantity) {
        for (let [key, value] of Object.entries(this.possibleArticles)) {

            if (articleModel.toLowerCase() == key) {
                let article = this.listOfArticles.find(a => a.articleName == articleName)

                if (article) {
                    article.quantity += quantity
                    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
                } else {
                    this.listOfArticles.push({
                        articleModel: articleModel.toLowerCase(),
                        articleName: articleName,
                        quantity: quantity
                    })

                    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
                }
            }
        }
        throw new Error("This article model is not included in this gallery!")
    }

    inviteGuest(guestName, personality) {
        let guest = this.guests.find(g => g.guestName == guestName)

        if (guest) {
            throw new Error(`${guestName} has already been invited.`)
        }
        for (let [key, value] of Object.entries(this.personalities)) {
            if (key == personality) {
                this.guests.push({
                    guestName: guestName,
                    points: value,
                    purchaseArticle: 0,
                })

                return `You have successfully invited ${guestName}!`
            }
        }

        this.guests.push({
            guestName: guestName,
            points: 50,
            purchaseArticle: 0,
        })
        return `You have successfully invited ${guestName}!`

    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(a => a.articleName == articleName)
        let guest = this.guests.find(g => g.guestName == guestName)

        if(article == undefined || article.articleModel != articleModel){
            throw new Error("This article is not found.")
        }
        
        if(article.quantity == 0){
            return `The ${articleName} is not available.`
        }

        if(guest == undefined){
            return "This guest is not invited."
        }

        for(let [key, value] of Object.entries(this.possibleArticles)){
            if(key == articleModel){
                if(guest.points < value){
                    return "You need to more points to purchase the article."
                }

                let worth = guest.points - value
                guest.points -= value
                guest.purchaseArticle++
                article.quantity--

                return `${guestName} successfully purchased the article worth ${value} points.`
            }
        }
    }

    showGalleryInfo(criteria) {
        let result = []
        if(criteria == 'article'){
            let firstLine = ["Articles information:"]
            result.push(firstLine)
            let secondLine = this.listOfArticles.map(a => `${a.articleModel} - ${a.articleName} - ${a.quantity}`).join('\n')
            result.push(secondLine)
        }
        if(criteria == 'guest'){
            let firstLine = ["Guests information:"]
            result.push(firstLine)
            let secondLine = this.guests.map(g => `${g.guestName} - ${g.purchaseArticle}`).join('\n')
            result.push(secondLine)
        }

        return result.join('\n')
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



