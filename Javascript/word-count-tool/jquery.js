//JQuery
$("#btn").click(function () {

    let texto = $("#str").val();
    $("#output").text(texto.length);

    // Cambiar la fuente del resultado a 32px
    $("#output").css({ "font-size": "30px", "border": "2px solid black" })
});