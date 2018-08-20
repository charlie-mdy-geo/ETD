$(document).ready(function(){
	var database= firebase.database().ref().child("Interns");
	database.on("child_added", snap => {
		var name = snap.child("Student_name").val();
    $("#authors").append("<form id=mainForm name=mainForm><input type=radio name=radio>"+ name +"</form><span id = result></span><br><br>");
    document.mainForm.onclick = function(){
    	var gender = document.querySelector('input[name = radio]:checked').value;
    	result.innerHTML = 'Your name' + gender;
    }
	

});
});