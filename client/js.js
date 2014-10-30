/**
 * Created by admin on 10/22/2014.
 */
$(document).ready(function() {

    // Add User button click
    $('#signInBtn').on('click', signIn);
    $('#create').on('click', create);

});

function create (event)
{
    var $signBtn = $('#signInBtn');
    var binary = parseInt(event.target.attributes[2].value);
    var notb = (!Boolean(binary)) ? 1 : 0;
    var state = ["Create", 'Sign in']

    $signBtn.attr("rel", state[binary]);
    $signBtn.text(state[binary]);
    $('#create').text(state[notb]);

    event.target.attributes[2].value = notb;
    $("#message").hide()
}
function signIn(event) {

//    event.preventDefault();
    var newUser = {
        'userName' : $('input[name=username]').val(),
        'passWord' : $('input[name=password]').val()
    };
    var btnState = event.target.attributes[1].value;

    $.get('http://localhost:3000/user?username=' + newUser.userName
            + "&password=" + newUser.passWord
            + "&signOrCreate=" + btnState
        , function(data,status){
//        alert(data);
            $("#message").text(data.message);
            if (data.link) window.location.replace(data.link);
    });
    console.log(newUser);
    console.log(newUser);

}