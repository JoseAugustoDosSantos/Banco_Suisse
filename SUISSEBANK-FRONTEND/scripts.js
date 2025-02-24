
function includeUser(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var pwd = document.getElementById('pwd').value
    
    fetch('http://localhost:3000/users', {
        method: 'POST', // Tipo de requisição
        headers: {
          'Content-Type': 'application/json', // Indica o tipo de conteúdo
        },
        body: JSON.stringify(
            {
                "name": name,
                "balance": null,
                "login": {
                  "email": email,
                  "pwd": pwd
                }
              }
        ), // Dados enviados
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => console.log('Resposta do servidor:', data))
        .catch(error => console.error('Erro:', error));

        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('pwd').value = ''
        setTimeout(() => {
          listUsers()
        }, 1000);     
}

 function deleteUser(){
   const xhttp = new XMLHttpRequest();
   xhttp.onload =  function(){
    var obj = JSON.parse(this.response)
    
      fetch(`http://localhost:3000/users/${obj.users[0]._id}`, {
        method: 'DELETE', // Tipo de requisição
        headers: {
          'Content-Type': 'application/json', // Indica o tipo de conteúdo
        }, // Dados enviados
      })
        .then( response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => console.log('Resposta do servidor:', data))
        .catch(error => console.error('Erro:', error));
   }
    xhttp.open('GET', 'http://localhost:3000/users', true);
    xhttp.send();
    setTimeout(() => {
      listUsers();
    }, 500);

    


}


 function listUsers() {
  var doc = document.getElementById("pac")
  doc.innerHTML = '';
  const xhttp = new XMLHttpRequest();
  xhttp.onload = async function() {
    var obj =  await JSON.parse(this.responseText)
    var div = document.createElement('div')
    if(obj.users == ''){
      console.log('paozinho')
      div.appendChild(document.createTextNode("vazio")) 
      doc.appendChild(div)
    }
    obj.users.forEach(element => {
      
      
      var btn = document.createElement('button')
      var txt = document.createTextNode('Delete')
      var p = document.createElement('p')
      btn.appendChild(txt)
      btn.addEventListener('click', ()=>{
        deleteUser()
      })
      p.appendChild(document.createTextNode(JSON.stringify(element.name)))
      p.appendChild(btn)
      div.appendChild(p)
      doc.appendChild(div)
    });
    
    }
  xhttp.open("GET", "http://localhost:3000/users", true);
  xhttp.send();
}
  