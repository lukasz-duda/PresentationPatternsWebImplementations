var server = sinon.fakeServer.create();

server.respondWith("POST", "AddExpenseUseCase", function(httpRequest) {
	var request = JSON.parse(httpRequest.requestBody);
	var response = {};

	if (request.type != null) {
		response.expenseAdded = true;
	} else {
		response.expenseAdded = false;
		response.message = "Select expense type";
	}

	httpRequest.respond(200, {
		"Content-Type" : "application/json; charset=UTF-8"
	}, JSON.stringify(response));
});

server.autoRespond = true;