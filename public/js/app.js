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
		$("#authors").append("<div class=mdl-list__item><span class=mdl-list__item-primary-content><i class=material-icons mdl-list__item-avatar>person</i>"+ name +"</span></div>");
	});

	$('#internGetInfo').bind('click', function () {
		var name = $('input[name="internNameRead"]').val();
		console.log(name);
		database.orderByChild('Student_name').equalTo(name).on("child_added", function(snapshot){
			console.log(snapshot.val());
			var project= snapshot.child("Abstract").val();
			var degree = snapshot.child("Degree").val();
			var name = snapshot.child("Student_name").val();
			var supervisor= snapshot.child("Supervisor").val();
			var title = snapshot.child("Thesis Title").val();
			var year = snapshot.child("Year").val();
			//$("#internNameResult").val(name);
			//$("#internIDResult").val(title);
			//$("#internTeamResult").val(year);
			$("#internsNameResult").append("<tr><td >"+ name + "</td><td>" + degree + "</td><td>" + supervisor
			 	+ "</td><td>" + year + "</td><td>" + title + "</td><td>" + project + "</td></tr>");
		});
	});
	//event.preventDefault();
});


