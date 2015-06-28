function UseCase(name) {
	var me = this;
	me.url = name + "UseCase";

	me.execute = function(useCaseRequest, responseHandler) {
		$.ajax({
			method : "POST",
			url : me.url,
			data : JSON.stringify(useCaseRequest),
			contentType : "application/json; charset=UTF-8",
			success : function(response) {
				responseHandler(response);
			}
		});
	}
}