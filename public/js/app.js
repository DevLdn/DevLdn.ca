(function ($, window) {
    var app = window.app || {};

    app.postForm = function (e) {
        e.preventDefault();
        $.ajax({
            type : 'POST',
            url  : app.$form.attr('action'),
            data : app.$form.serialize()
        }).done(function (response) {
            app.$form.find('.form-group')
                .removeClass('has-error')
                .addClass('has-success');
            app.$form.find('.help-block').text($.parseJSON(response.responseText).message);
        }).fail(function (response) {
            app.$form.find('.form-group')
                .removeClass('has-success')
                .addClass('has-error');
            app.$form.find('.help-block').text($.parseJSON(response.responseText).errors.email);
        });
    };

    app.init = function () {
        this.$form = $('form');
        this.$form.on('submit', app.postForm);
    };

    app.init();
})(jQuery, window);
