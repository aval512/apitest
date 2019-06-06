const app = document.getElementById('root');


var request = new XMLHttpRequest();

request.open('GET','https://api.sandbox.validis.com/v1/clients/bfda4997-02d2-4b29-9db8-60b2e3d81bd0/connectors', true)

request.onload = function() {

	var data = JSON.parse(this.response)

	if(request.status >= 200 && request.status < 400) {
		data.forEach(connectors => {
			console.log(connectors.name)
		})
	} else {
		console.log('error')
	}
}

request.send();

