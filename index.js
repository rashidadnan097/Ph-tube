// --------click button here ....
const buttonTube = async () => {
    const btn = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const button = await btn.json();
    const hug = button.data;
    // console.log(hug);
    displayButton(hug);

}

const displayButton = hug => {
     
    const buttonContainer = document.getElementById('button-container')
    hug.forEach(huge => {
       console.log(huge);
       const tubeButton = document.createElement('div');
       tubeButton.classList = `text-center mb-9 gap-x-10`;
       tubeButton.innerHTML = `
       <button onclick ="handleButton(${huge?.category_id? huge?.category_id : `<span><img src="icon.png"/>Oops!!sorry,There is no content here</span>`})" class="btn btn-active">${huge.category}</button>
       `;
       buttonContainer.appendChild(tubeButton);
    }); 
}

const handleButton = async(okkButton) => {
    const tip = await fetch(`https://openapi.programming-hero.com/api/videos/category/${okkButton}`);
    const tipButton = await tip.json();

    const tubeContainer = document.getElementById('tube-container');


    tubeContainer.innerHTML = " ";

    //  1. loop er opre call kora lagbe re ...
    tipButton.data.forEach(tubes => {
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
         <div class="font-medium">${tubes.title}</div>
        
          </h2>
          <div class="flex gap-2 pl-11"> <h2 class="text-gray-500">${tubes.authors[0].profile_name}</h2>
         <span><img src="${tubes.authors[0]?.verified}"/>
         </span></div>
          <p class="text-gray-500 pl-11">${tubes.others.views} views </p>
          <div class="justify-end">
           
          </div>
        </div>
        `;
        // 4. append Child ....
        tubeContainer.appendChild(tubeCard) ;
    });

    
}


handleButton(1000);

buttonTube();