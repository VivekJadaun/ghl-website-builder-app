$(function () {
  //Section
  $(".hl_page-creator--content").on("mouseenter", ".hl_page-creator--section", function () {
    $(this).addClass("active");
  });
  $(".hl_page-creator--content").on("mouseleave", ".hl_page-creator--section", function () {
    $(this).removeClass("active");
  });

  //Row
  $(".hl_page-creator--content").on("mouseenter", ".hl_page-creator--row", function () {
    $(this).addClass("active");
    $(this).parent(".hl_page-creator--section").removeClass("active");
  });
  $(".hl_page-creator--content").on("mouseleave", ".hl_page-creator--row", function () {
    $(this).removeClass("active");
    $(this).parent(".hl_page-creator--section").addClass("active");
  });

  //Element
  $(".hl_page-creator--content").on("mouseenter", ".hl_page-creator--element", function () {
    $(this).addClass("active");
    $(this).parents(".hl_page-creator--row").removeClass("active");
  });
  $(".hl_page-creator--content").on("mouseleave", ".hl_page-creator--element", function () {
    $(this).removeClass("active");
    $(this).parents(".hl_page-creator--row").addClass("active");
  });
});