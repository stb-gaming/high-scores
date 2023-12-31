const SCORE_TABLE = document.querySelector("#scores table"),
SCORE_DATA = tableToArray(SCORE_TABLE);

function tableToArray(table) {
	if(!table) return
	const rows = table.querySelectorAll('tbody tr');

	const data = [];

	rows.forEach(row => {
		const columns = row.querySelectorAll('td');
		const rowData = {};

		columns.forEach((column, index) => {
			const header = table.querySelector('thead th:nth-child(' + (index + 1) + ')').innerText;
			rowData[header] = column.innerHTML;
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
	if(!table) return
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
			  cell.innerHTML = value;
			  cell.classList = thead.children[headerIndex].classList
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
		filterLevel(levelInput.value)

		levelInput.addEventListener("input",e=>{
			filterLevel(e.target.value)
		})
	}

	if(modeInputs) {
		const activeMode = modeInputs.querySelector("input:checked");
		filterMode(activeMode.value)
		
		modeInputs.querySelectorAll("input").forEach(input=>{
			input.addEventListener("input",e=>{
				filterMode(e.target.value)
			})
		})
	}

})