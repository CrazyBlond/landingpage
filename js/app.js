"use strict";

$(function () {
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