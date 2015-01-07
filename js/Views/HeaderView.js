HeaderView = Backbone.View.extend({
    tagName: "div",
    className: "header-wrapper",
    template: _.template($("#headerTemplate").html()),
    el: $("#header"),

    initialize: function () {
        this.render();
    },

    render: function (eventName) {
        this.$el.html(this.template((new GameModel({"title": "title"})).toJSON()));
        return this;
    }

});