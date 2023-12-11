
const inputANode = document.querySelector('.js-input-a'),
      inputBNode = document.querySelector('.js-input-b'),
	  btnResultNode = document.querySelector('.js-btn-result'),
	  outputNode = document.querySelector('.js-output'),
	  selectOperationNode = document.querySelector('.js-select-operation');


btnResultNode.addEventListener('click', function() {
	const a = Number(inputANode.value);
	const b = Number(inputBNode.value);
	const operation = selectOperationNode.value;

	const result = calc({a,b,operation})

	outputNode.innerHTML = result;
})