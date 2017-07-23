var exec = require('child_process').exec;
function execute(command){
	console.log('...Executing..   >_ ' + command)
    exec(command, function(error, stdout, stderr){ 
    	console.log(stdout); 
    });
};

// execute('npm install');
execute('ember install semantic-ui-ember');
execute('ember generate semantic-ui-ember');
execute('ember install ember-model-validator');