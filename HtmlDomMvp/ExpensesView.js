function ExpensesView(presenter) {
	var me = this;

	me.presenter = presenter;

	me.addTypes = function() {
		var typeSelect = me.getTypeSelect();
		for (var i = 0; i < me.presenter.types.length; i++) {
			var type = me.presenter.types[i];
			var typeOption = new Option(type.text, type.id);
			typeSelect.add(typeOption);
		}
	}

	me.getTypeSelect = function() {
		return document.getElementById("type");
	}

	me.initialize = function() {
		me.addTypes();
		me.addEventHandlers();
	}

	me.addEventHandlers = function() {
		var typeSelect = me.getTypeSelect();
		typeSelect.addEventListener("change", me.onTypeChanged);
		var addExpenseButton = document.getElementById("addExpense");
		addExpenseButton.addEventListener("click", me.onAddExpense);
	}

	me.onTypeChanged = function() {
		var typeElement = me.getTypeSelect();
		me.presenter.typeId = typeElement.value;
	}

	me.onAddExpense = function() {
		me.presenter.addExpense();
	}

	me.initialize();
}