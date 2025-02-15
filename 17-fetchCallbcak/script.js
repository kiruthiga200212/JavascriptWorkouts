
const myList = document.querySelector("ul");
fetch("./data.json")
 .then((response) => {
    if(!response.ok){
        throw new Error (`HTTP Error,${response.status}`);

    }
    return response.json();
})

.then((data)=>{
    for(const person of data.person){
        const listItem = document.createElement("li");

            const nameElement = document.createElement("strong");
            nameElement.textContent = person.name;
            listItem.append(
                nameElement,
                ` Located at  ${person.address} `
                
              );
              myList.appendChild(listItem);
    }
})

.catch((error) => {
    const p = document.createElement("h1");
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    document.body.insertBefore(p, myList);
  });