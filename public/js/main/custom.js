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

  //Editor
  $(".hl_page-creator--content").on("mouseenter", ".hl_page-creator--element", function () {
    $(this).addClass("active");
    $(this).parents(".hl_page-creator--row").removeClass("active");
  });
  $(".hl_page-creator--content").on("mouseleave", ".hl_page-creator--element", function () {
    $(this).removeClass("active");
    $(this).parents(".hl_page-creator--row").addClass("active");
  });

  $("#close-editor-group").on("click", function () {
    $("#page-creator").removeClass("--menu-active");
    $(".hl_page-creator--editor-group").removeClass("active");
  });
  $("#editor-group .dropdown-item").on("click", function () {
    $("#page-creator").addClass("--menu-active");
    $(".hl_page-creator--editor-group").addClass("active");
  });
});
