SliderView = Backbone.View.extend({   
    template: _.template($("#sliderTemplate").html()),
    el: $("#section-slider"),
   
    initialize: function (options) {       
        this.render();
        options.vent.bind("app:dataLoaded", this.dataLoaded, this);
    },

    render: function (eventName) {
        
        this.$el.html(this.template((new GameModel({})).toJSON()));        
        return this;
    },
    
    dataLoaded: function(collection){
         //render slides
        this.slidesContainer = $("#da-slider");
        var that = this;
        _.each(this.collection.models, function (item) {
            that.renderSlide(item);
        }, this);
        
        $('#da-slider').cslider({ bgincrement : 0 ,autoplay: true});
    },

    renderSlide: function (item) {
        var sliderItemView = new SliderItemView({
            model: item
        });
        this.slidesContainer.append(sliderItemView.render().el);
    }
});