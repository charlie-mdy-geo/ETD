$(document).ready(function(){
	var database= firebase.database().ref().child("Interns");
	database.on("child_added", snap => {
		var project= snap.child("Abstract").val();
		var degree = snap.child("Degree").val();
		var name = snap.child("Student_name").val();
		var supervisor= snap.child("Supervisor").val();
		var title = snap.child("Thesis Title").val();
		var year = snap.child("Year").val();
	$("#interns").append("<tr><td >"+ name + "</td><td>" + degree + "</td><td>" + supervisor
		 + "</td><td>" + year + "</td><td>" + title + "</td><td>" + project + "</td></tr>");
	$("#authors").append("<input type=radio name=radio onclick=author();/>"+ name +"<br><br>");
});
});