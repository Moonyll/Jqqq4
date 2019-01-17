$(document).ready(function () {
    $('#ha').click(function () {
        var hauteur = $('#rect').height();
        if (hauteur <= 100)
            $('#rect').css('height', hauteur + 10);
        else
            hauteur = 10;
    });
    $('#cl').click(function () { $('#rect').css('border', '3px solid green'); });
    $('#icl').click(function () { $('#rect').css('border', '3px solid blue'); });
    $('#hid').click(function () { $('#rect').hide() });
    $('#sho').click(function () { $('#rect').show() });
}
);