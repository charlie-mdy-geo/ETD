$(document).ready(function(){
	var database= firebase.database().ref().child("Interns");
	database.on("child_added", snap => {
		var project= snap.child("Absrtact ThesiProject").val();
		var degree = snap.child("Degree").val();
		var name = snap.child("Name").val();
		var supervisor= snap.child("Supervisor Name").val();
		var title = snap.child("Thesis  Title").val();
		var year = snap.child("Year").val()
	$("#interns").append("<tr><td><p>"+ project + "</p></td><td>" + degree + "</td><td>" +
		name + "</td><td>" + supervisor + "</td><td><p>" + title + "</p></td><td>" + year + "</td></tr>");
});
});
