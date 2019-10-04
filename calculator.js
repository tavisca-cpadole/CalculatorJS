


var Calci=function Calculator()
{
	var operand1='';
	var operand2='';
	var operator='';
	var calciElements=['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']
	//let view=document.getElementById('calci');
	var body = document.getElementsByTagName('body')[0];
	var tbl = document.createElement('table');
	
	tbl.style.width = '100%';
	tbl.setAttribute('border', '1');
	
	var tbdy = document.createElement('tbody');
	
	var tr = document.createElement('tr');
	var td = document.createElement('td');

	var inputBar=document.createElement('input');
	inputBar.type="text";
	td.colSpan=4;
	inputBar.setAttribute('id','calciDisplay');
	inputBar.style.width='100%';
	inputBar.readOnly=true;
	td.appendChild(inputBar);
	tr.appendChild(td);
	tbdy.appendChild(tr);
	
	

	var index=0;
	for (var i = 0; i < 4; i++) {
	var tr = document.createElement('tr');
	for (var j = 0; j < 4; j++) {
	  
		var td = document.createElement('td');
		td.innerHTML=calciElements[index];

		
		
		
		 if(IsOperator(calciElements[index]))
		td.onclick=Calculate;
	
		else
			td.onclick=Display;
			
		index++;
		tr.appendChild(td)
	  
	}
	tbdy.appendChild(tr);
	}
	tbl.appendChild(tbdy);
	body.appendChild(tbl)
	
	
	function IsOperator(data)
{
	if(data=='/' || data=='+'||data=='-'||data=='*'||data=='=')
		return true;
	return false;
}


function Calculate(event)
{
	// var operation=inputBar.value.split('');
	// count=0;
	// if(IsOperator(operation[operation.length-1]))
	// {}

	if(operand1=='')
	{}
	else
	{
		if(operand2==''){
			if(event.target.innerHTML=='=')
			{
				operator='';
			}
			else{
			operator=event.target.innerHTML;
			//if(IsOperator(inputBar.value[inputBar.value-1]))
			inputBar.value+=operator;
			}
		}
		else
		{
			
			switch(operator)
			{
				case '+':
				inputBar.value=parseFloat(operand1)+parseFloat(operand2);
				
				break;
				
				case '-':
				inputBar.value=parseFloat(operand1)-parseFloat(operand2);
				break;
				
				case '/':
				inputBar.value=parseFloat(operand1)/parseFloat(operand2);
				break;
				
				case '*':
				inputBar.value=parseFloat(operand1)*parseFloat(operand2);
				break;
				
				// case '=':
				// inputBar.value=parseInt(operand1)*parseInt(operand2);
				// break;
			}
			operator=event.target.innerHTML;
			if(operator=='=')
			{
				//inputBar.value=parseInt(operand1)parseInt(operand2);
				
				operand1=inputBar.value;
				operator='';
				operand2='';
			}
			{
			operand1=inputBar.value;
			inputBar.value+=operator;
			operand2='';
			}
		}
	}
	
	console.log(operand1+"	"+operator+"	"+operand2);
}

function Display(event)
{
	if(operator==''){		
		operand1+=event.target.innerHTML;
	}
	else{
		operand2+=event.target.innerHTML;
	}
	inputBar.value+=event.target.innerHTML;
}


// window.addEventListener('keyup', function (e) {
    // if (e.keyCode === 49) {
        // Display({
			// target
		// });
    // }
// }, false);
}

