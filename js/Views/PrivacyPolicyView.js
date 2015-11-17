PrivacyPolicyView = Backbone.View.extend({
    tagName: "div",
    className: "content-wrapper",
    template: _.template($("#privacyPolicyTemplate").html()),
    el: $("#privacy-policy"),

    initialize: function () {
        this.render();
    },

    render: function (eventName) {
       this.$el.html(this.template());
       return this;
    }

});