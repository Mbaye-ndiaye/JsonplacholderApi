
const myAffiche = document.getElementById('affichage')
const btn = document.getElementById('false')


btn.addEventListener('click', function() {
  async function getTodos() {
    try {
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
      const todos = await response.json();
       const falseTodos = todos.filter(index => index.completed === false)  
     for (let i  of falseTodos) {
       const tr = document.createElement("tr")
      //  console.log(tr);
       tr.innerHTML = `
       <td> ${i.userId} </td>
       <td> ${i.id} </td>
       <td> ${i.title} </td>
       <td> ${i.completed} </td>`
       myAffiche.appendChild(tr)

      
      // `<td>
       const bouton = document.createElement('Bouton')
       bouton.innerHTML = "Ajouter"
        bouton.classList.add('changer');
        bouton.style.backgroundColor = 'blue';
        bouton.onclick="addNotification()";
        tr.appendChild(bouton)
        let notification = '' ;
        // console.log({notification});
        function addNotification() {
          bouton.addEventListener('click', function() {
            
            
            const notif = document.getElementById('notification')
            if(notif) {
              notification++;

            }
           
            
           
            //  const text = document.getElementById('notification');
            //  const listItem = document.createElement('div')
            //  listItem.classList.add("noti-list-item")
            //  listItem.textContent = text;

          })
          
        }
        addNotification()
      //  console.log(bouton);
      
     }
     
     }catch (error) {
       console.log(error);
    }
     
  } 
  getTodos();
 
})





    

