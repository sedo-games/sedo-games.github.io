// Router
var AppRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "game/:id": "gameDetails",
        "privacy-policy":"privacyPolicy"
    },

    //    list:function () {
    //        this.wineList = new WineCollection();
    //        this.wineListView = new WineListView({model:this.wineList});
    //        this.wineList.fetch();
    //        $('#sidebar').html(this.wineListView.render().el);
    //    },

    home: function () {
        var header = new HeaderView();
        var slider = new SliderView({ collection : window.gamesCollection, vent: vent });
    },
    gameDetails: function (id) {
        //   this.wine = this.wineList.get(id);
        //    this.wineView = new WineView({model:this.wine});
        //    $('#content').html(this.wineView.render().el);
    },
    privacyPolicy : function(){
        var header = new HeaderView();
        var privacyPolicy = new PrivacyPolicyView();
    }
    
});







// load data from config
window.gamesCollection = new GamesCollection();
gamesCollection.fetch({
    url: "js/config.json",
    success: function () {
        console.log("JSON file load was successful", gamesCollection);
        this.vent.trigger("app:dataLoaded", gamesCollection);
    },
    error: function () {
        console.log('There was some error in loading and processing the JSON file');
    }
});

//global event agregator
window.vent = _.extend({}, Backbone.Events);

var app = new AppRouter();
Backbone.history.start();