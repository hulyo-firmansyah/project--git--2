function eventListener()
{
	const enter = document.getElementById('name');
	enter.addEventListener("keydown", function(event){
		if(event.key === 'Enter'){
			view();
		}
	});
}

function view()
{
    var name = document.getElementById('name').value();
    document.getElementById('result').innerHTML = name;
}
