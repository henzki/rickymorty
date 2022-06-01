    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const results = data.results;
            for (let i = 0; i < results.length; i++) {
                
                //Image
                let newImage = document.createElement('div');
                newImage.classList.add('image');

                let image = document.createElement('IMG');
                image.src = results[i].image;

                newImage.appendChild(image);

                document.getElementById('rm-api').append(newImage);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    fetch("https://rickandmortyapi.com/api/character/?name=Pickle")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const results = data.results;
            for (let i = 0; i < results.length; i++) {
                let newName = document.createElement('div');
                //Name
                newName.classList.add('name');

                let name = document.createElement("div");
                name.innerHTML = results[i].name;

                newName.appendChild(name);

                //Image
                let newImage = document.createElement('div');
                newImage.classList.add('image');

                let image = document.createElement('IMG');
                image.src = results[i].image;

                newImage.appendChild(image);

                //Status
                let newStatus = document.createElement('div');
                newStatus.classList.add('status');

                let status = document.createElement("dive");
                status.innerHTML = results[i].status;

                newStatus.appendChild(status);

                //Type
                let newType = document.createElement('div');
                newType.classList.add('type');

                let type = document.createElement("div");
                type.innerHTML = results[i].type;

                newType.appendChild(type);

                //Origin
                let newOrigin = document.createElement('div');
                newOrigin.classList.add('origin');

                let origin = document.createElement("div");
                origin.innerHTML = results[i].origin.name;

                newOrigin.appendChild(origin);

                document.getElementById('pickle-api').append(newName, newImage, newStatus, newType, newOrigin);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
