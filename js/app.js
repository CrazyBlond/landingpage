"use strict";

$(function () {
    setTimeout(showModal, 60000);
    function showModal() {
        const modalId = 'myMessageModal';
        const newModal = $(`
          <div class="modal fade" id="${modalId}" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel">Внимание! Картинка снизу!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true"><i class="fas fa-times"></i></span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="image-wrapper">
                        <img src=".//src/cat.svg" title="Картинка чего-то">
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Хорошо</button>
                  </div>
                </div>
              </div>
          </div>
          <div class="modal-backdrop fade show"></div>
          `).appendTo('body');

        const selector =  '#' + modalId;
        $(selector).addClass('show');
        $(selector).css('display', 'block');

        $(selector + ' button[data-dismiss="modal"]').on("click", function (e) {
            $(newModal).remove();
        });
    }

    $(".custom-select__title").text($(".custom-select__options").data("placeholder"));

    // Toggle menu
    $(".custom-select").on("click", function () {
        if ($(this).hasClass("opened")) {
            $(this).removeClass("opened");
        } else {
            $(this).addClass("opened");
        }
    });

    // Close when click to option
    $(".custom-select label").on("click", function (e) {
        $(".custom-select__title").text($(this).text());
        $(".custom-select").removeClass("opened");
    });


    $(".custom-range .custom-label__range-value").text("75 %");
    $(".custom-range input[type=range]").val(75);

    $(".custom-range input[type=range]").on("input", function (e) {
        $(this).prevAll(".custom-label").children(".custom-label__range-value").text($(this).val() + " %");
    });


});