
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