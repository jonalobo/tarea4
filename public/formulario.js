const btn = document.getElementById('agregar')

const entradas = document.querySelectorAll('input')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const title = entradas[0].value
    const price = entradas[1].value
    const thumbnail = entradas[2].value

    const nuevoProducto = {
        title,
        price,
        thumbnail
    }

    async function postData(url = '', data = {}) {
    
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify(data)
        });
        return response.json();
      }
      
      postData('http://localhost:8080/api/productos/', nuevoProducto)
        .then(data => {
          console.log(data);
        });

})


const btnObtener = document.getElementById('obtener')

btnObtener.addEventListener('click',()=>{
    async function getData(url = '') {
    
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer'
        });
        return response.json();
      }
      
      getData('http://localhost:8080/api/productos/')
        .then(data => {
          console.log(data);
        });
})

