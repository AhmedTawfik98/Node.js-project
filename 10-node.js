const fs = require('fs');

const calculateExpenses = () => {
  fs.readFile('receipts.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const expenses = data
      .split('\n') 
      .map(parseFloat) 
      .filter(expense => !isNaN(expense)); 
	  
	  
    const total = expenses.reduce((acc, expense) => acc + expense, 0);
    console.log('Total expenses:', total);
	
  });
};

calculateExpenses();
