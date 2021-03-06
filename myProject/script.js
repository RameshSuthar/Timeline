
function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	$(".g-signin2").css("display", "none");
    $("#sign-out").css("display", "block");
    $(".timeline").css("display", "block");
    $("#name").css("display", "block");
	$("#pic").attr('src', profile.getImageUrl());
	$("#name").text(profile.getName());
    
}

function signOut()
 {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
       alert("You Have Been Successfully signed out");
        $(".timeline").css("display", "none");
        $(".g-signin2").css("display", "block");
        $("#name").css("display", "none");
        $("#sign-out").css("display", "none");
    } );
 }


 function post() {

    var name = document.getElementById('name').innerText;
    if (name) {
        var list = document.getElementById('content-list').innerHTML;
        var content = document.getElementById('post-content').value;
        document.getElementById('post-content').value = '';
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    
        list += `
            <li>
                <div class="content">
                    <h3>
                        ${name}
                    </h3>
                    <p>
                        ${content}
                    </p>
                </div>
                <div class="time">
                    <h4>
                        ${date}
                    </h4>
                </div>
            </li>
            <div style="clear: both;"></div>
        `;
        document.getElementById('content-list').innerHTML = list;
    } else {
        alert("You Have to login first!!");
    }
 }