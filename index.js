const heroTube = async () => {
    const res  = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const tube = data.data ;
    // console.log(tube);
    displayTube(tube);

} 

const displayTube = tube => {

    const tubeContainer = document.getElementById('tube-container')

    //  1. loop er opre call kora lagbe re ...
    tube.forEach(tubes => {
        console.log(tubes);
        // 2. create a div
        const tubeCard = document.createElement('div');
        tubeCard.classList = ` m-2`
        // set innerText or innerHtml..
        tubeCard.innerHTML = `
        <figure>
        <img src="${tubes.thumbnail}" alt="Shoes" class="w-80 h-48 mb-5 rounded-md" /></figure>
        <div class="  ">
        <h2 class="flex gap-x-2">
          <img src="${tubes.authors[0].profile_picture}" class="w-10 h-10 rounded-full"/>
         <div class="font-medium pb-2">${tubes.title}</div>
          </h2>
          <div class="flex gap-2"> <h2 class="pb-1 text-gray-500">${tubes.authors[0].profile_name}</h2>
          <p>${tubes.authors[0].verified}</p></div>
          <p class="text-gray-500">${tubes.others.views} views </p>
          <div class="justify-end">
           
          </div>
        </div>
        `;
        // 4. append Child ....
        tubeContainer.appendChild(tubeCard) ;


    });
}

heroTube();