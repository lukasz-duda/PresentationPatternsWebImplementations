function ExpensesView(presenter) {
	// View logic still needs to be separated from presenter.
	var me = this;

	me.presenter = presenter;

	me.addTypes = function() {
		for (var i = 0; i < me.presenter.types.length; i++) {
			var type = me.presenter.types[i];
			var typeOption = $("<option>");
			// JQuery encourages parsing, which could by slightly slower than
			// HTML DOM's way to create an option.
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
		// JQuery encourages repetitions such as type element identifier.
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