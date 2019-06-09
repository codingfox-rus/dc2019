$(function(){

    let modalInfo = $('#modalInfo');

    $(document).on('click', '.img-wrapper img', function(){

        $.get('/site/view-product-partial', {partial: $(this).data('partial')}, (data) => {

            modalInfo.find('.modal-title').text($(this).attr('alt'));
            modalInfo.find('.modal-body').html(data);
            modalInfo.modal('show');
        });
    });


});