function ExpensesPresenter() {
	var me = this;

	me.view = null;
	me.types = [ {
		id : null,
		text : "Select expense type..."
	}, {
		id : "FOOD",
		text : "Food"
	}, {
		id : "ENTERTAINMENT",
		text : "Entertainment"
	}, {
		id : "PAYMENTS",
		text : "Payments"
	} ];

	me.typeId = me.types[0].id;

	me.setView = function(view) {
		me.view = view;
	}

	me.addExpense = function() {
		var newExpense = {
			type : me.typeId
		}

		var useCase = new UseCase("AddExpense");
		useCase.execute(newExpense, me.handleAddExpenseResponse);
	}

	me.handleAddExpenseResponse = function(response) {
		if (response.expenseAdded) {
			alert("Expense added");
		} else {
			alert(response.message);
		}
	}
}

var presenter = new ExpensesPresenter();
var view = new ExpensesView(presenter);
presenter.setView(view);
