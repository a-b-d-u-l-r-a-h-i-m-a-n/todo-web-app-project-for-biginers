
// const clor=["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white","yellow"];
// $("#taview").css('background-color',""+clor[Math.floor(Math.random()*16)]);
$(document).ready(function () {
    var today = new Date().toISOString().split('T')[0];
    $("#taskdate").attr('min', today);
});
