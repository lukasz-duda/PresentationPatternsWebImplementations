function ExpensesView(presenter) {
	var me = this;

	me.presenter = presenter;

	me.addTypes = function() {
		for (var i = 0; i < me.presenter.types.length; i++) {
			var type = me.presenter.types[i];
			var typeOption = $("<option>");
			typeOption.text(type.text);
			typeOption.val(type.id);
			$("#type").append(typeOption);
		}
	}

	me.initialize = function() {
		me.addTypes();
		me.addEventHandlers();
	}

	me.addEventHandlers = function() {
		$("#type").change(me.onTypeChanged);
		$("#addExpense").click(me.onAddExpense);
	}

	me.onTypeChanged = function() {
		me.presenter.typeId = $("#type").val();
	}

	me.onAddExpense = function() {
		me.presenter.addExpense();
	}

	me.initialize();
}