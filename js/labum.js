const url="https://jsonplaceholder.typicode.com/albums"
fetch(url)
.then(response => response.json())
.then(data => {
   const list = document.getElementById("#list");
    for (let i =0; i < data.length; i++){
        if(data[i].id <= 12){
            List.innerHTML +=` 
            <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">${}</a>
            <a href="#" class="list-group-item list-group-item-action"></a>
            <a href="#" class="list-group-item list-group-item-action"></a>
          </div>
            `;
        }
    }
})
.catch( () => console.error("My is sovath"))
.finally( () => console.warn("svoath"))