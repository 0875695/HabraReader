Meteor.startup(function () {
   // code to run on server at startup
   Meteor.methods({
      initList() {
        feedData = Scrape.feed("https://habrahabr.ru/rss").items;
        return feedData;
      }
   });
});
