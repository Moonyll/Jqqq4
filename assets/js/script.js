$(document).ready(function () {
    $('#ha').click(function () {
        var hauteur = $('#rect').height();
        var hauteurini = 10;
        if (hauteur <= 100)
           $('#rect').css('height', hauteur + 10);
        else
            $('#rect').css('height', hauteurini);
    });
    $('#cl').click(function () { $('#rect').css('border', '3px solid green'); });
    $('#icl').click(function () { $('#rect').css('border', '3px solid blue'); });
    $('#hid').click(function () { $('#rect').hide() });
    $('#sho').click(function () { $('#rect').show() });
}
);
Amélioration :
// Fonction Event sur tous les boutons
$('.button').click((event) => {
    // Si c'est le premier bouton qui a été cliqué
    if ($(event.target).attr('id') == 'btn1') {
        var height = $('#rectangle').height(); // on récupère la hauteur actuelle
        if (height + 10 > 100) {
            // Si hauteur + 10 supérieure à 100, on réinitialise.
            $('#rectangle').height(10);
        } else {
            // Sinon, on additionne.
            $('#rectangle').height(height + 10);
        }
        // Si c'est le deuxième bouton qui a été cliqué
    } else if ($(event.target).attr('id') == 'btn2') {
        $('#rectangle').css('background', 'green'); // On met le fond en vert
        // Si c'est le troisième bouton qui a été cliqué
    } else if ($(event.target).attr('id') == 'btn3') {
        $('#rectangle').css('background', ''); // On remet le fond à zéro
        // Si c'est le quatrième bouton qui a été cliqué
    } else if ($(event.target).attr('id') == 'btn4') {
        $('#rectangle').hide(); // on cache la div
        // Si c'est le cinquième bouton qui a été cliqué
    } else if ($(event.target).attr('id') == 'btn5') {
        $('#rectangle').show(); // on montre la div
    }
});
