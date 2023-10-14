const SCORE_TABLE = document.querySelector("#scores").querySelector("table"),
SCORE_DATA = tableToArray(SCORE_TABLE);

function tableToArray(table) {
	const rows = table.querySelectorAll('tbody tr');

	const data = [];

	rows.forEach(row => {
		const columns = row.querySelectorAll('td');
		const rowData = {};

		columns.forEach((column, index) => {
			const header = table.querySelector('thead th:nth-child(' + (index + 1) + ')').innerText;
			rowData[header] = column.innerText;
		});

		const dataAttrs = row.dataset;
		Object.keys(dataAttrs).forEach(attr => {
		  rowData[attr] = dataAttrs[attr];
		});

		data.push(rowData);
	});

	return data;
}



function updateTable(table, newData) {
	const tbody = table.querySelector('tbody'),
	thead = table.querySelector('thead tr');

	// Clear existing rows
	tbody.innerHTML = '';

	// Add new rows
	newData.forEach(item => {
		const row = tbody.insertRow();

		Object.entries(item).forEach(([key, value]) => {
			const headerIndex = Array.from(thead.children).findIndex(th => th.innerText === key);
	  
			if (headerIndex === -1) {
			  row.dataset[key] = value;
			} else {
			  const cell = row.insertCell();
			  cell.textContent = value;
			}
		  });
	});
}

function filterTable(filterCb) {
	const newData = SCORE_DATA.filter(filterCb);
	updateTable(SCORE_TABLE,newData);
}


const modeInputs = document.querySelector(".game-modes"),
levelInput = document.querySelector(".game-levels select");


window.addEventListener("DOMContentLoaded",()=> {
	const filterMode = mode=>{
		filterTable(item=>item.mode === mode)
	},
	filterLevel = level=>{
		filterTable(item=>item.level === level)
	}

	if(levelInput) {
		console.log("l");
		filterLevel(levelInput.value)

		levelInput.addEventListener("input",e=>{
			console.log(e.target.value);
			filterLevel(e.target.value)
		})
	}

	if(modeInputs) {
		console.log("m");
		const activeMode = modeInputs.querySelector("input:checked");
		filterMode(activeMode.value)
		
		modeInputs.querySelectorAll("input").forEach(input=>{
			input.addEventListener("input",e=>{
				console.log(e.target.value);
				filterMode(e.target.value)
			})
		})
	}

})