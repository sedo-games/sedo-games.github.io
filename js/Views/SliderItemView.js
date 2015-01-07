SliderItemView = Backbone.View.extend({   
    template: _.template($("#sliderItemTemplate").html()),   
    className: 'da-slide',

    render: function (eventName) {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});