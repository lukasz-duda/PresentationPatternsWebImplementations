function ExpensesViewModel() {
	var me = this;

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

	me.type = ko.observable();

	me.addExpense = function() {
		var newExpense = {
			type : me.type().id
		}

		var useCase = new UseCase("AddExpense");
		useCase.execute(newExpense, me.addExpenseResponseHandler);
	}

	me.addExpenseResponseHandler = function(response) {
		if (response.expenseAdded) {
			alert("Expense added.");
		} else {
			alert(response.message);
		}
	}
}

var viewModel = new ExpensesViewModel();
ko.applyBindings(viewModel);