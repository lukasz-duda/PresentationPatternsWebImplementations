function UseCase(name) {
	var me = this;
	me.url = name + "UseCase";

	me.execute = function(useCaseRequest, responseHandler) {
		var httpRequest = new XMLHttpRequest();
		httpRequest.open("POST", me.url, true);
		httpRequest.setRequestHeader("Content-type", "application/json; charset=UTF-8");
		httpRequest.onreadystatechange = function() {
			if (httpRequest.readyState == 4 && httpRequest.status == 200) {
				var response = JSON.parse(httpRequest.responseText);
				responseHandler(response);
			}
		}
		httpRequest.send(JSON.stringify(useCaseRequest));
	}
}