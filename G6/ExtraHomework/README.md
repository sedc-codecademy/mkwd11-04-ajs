# Beer bar
## Information about all the beers in the world.

# Idea
This project should be all about beer.
We will offer the user beer information and if the user hesitate what beer to drink tonight we should offer him a random beer selection.

## Project requriments

#### Api that we should use
The Api witch you should use is:   https://punkapi.com/documentation/v2

#### Application flow

When the user comes to our page should get this screen.
![Screenshot](./img/homeScreen.png)

When the user click on Beers navigation link should be taken to the beers page.
On this page there should be pagination, user should be given a choise to pick how much beers should be shown per page,
also the user should have a choise to sort beers by:
- Name asc/desc
- Alcohol % - abv asc/desc
- Bitterness - ibu asc/desc -- bitterness is measured in IBU
- Production Date ????? this is optional.

![Screenshot](./img/beersScreen.png)
![Screenshot](./img/pageSizesScreen.png)
![Screenshot](./img/sortBySizesScreen.png)

When the user want to see More Details for some beer should be shown the detail for that beer.
Same as more details the Random Beer navigation link should have the same page structure.
The details that needs to be shown are:
- Name
- Tagline
- First Brewed
- Description
- Image
- abv - witch is alcohol in %
- ibu - witch is bitterness in IBU
- Food Pairing

![Screenshot](./img/moreDeailsScreen.png)


### Bonus
Bonus make search field work :)



```
if (questions)
	student.ask();
```