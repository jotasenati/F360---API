async function getContent() {
    try {
        const response = await fetch('http://localhost:1234/')
        //console.log(response)
        const data = await response.json()
        var mapDados = data.map(function(item ,indice){
            return `<tr> 
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.username}</td>                    
                </tr>`;
        });           


        document.querySelector("#Users tbody").innerHTML = mapDados.join("");
        console.log(data)

    } catch (error) {
        console.error()
    }
}
getContent()