const cards = [
  {
    id: 0,
    title: 'Tonic',
    topList: [
      'CANOPY',
      'BACK End DEV',
      '2015'
    ],
    imgSrc: './img/Snapshoot-Portfolio.png',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy 
    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
    with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
    han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of 
    type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    usedTechnologies: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'bootstrap',
    ],
    btns: [
      'See live',
      'See source'
    ]
  },
];

function modal(id) {
  const modalContainer = document.createElement('section');
  modalContainer.className = 'modal fade';
  modalContainer.tabIndex = '-1';
  modalContainer.id = cards[id].title;
  modalContainer.ariaLabelledby = cards[id].title;
  modalContainer.ariaHidden = "true";

  const modal = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${cards[id].title}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <ul class="top-list list-unstyled d-flex justify-content-around">
            <li>${cards[id].topList[0]}</li>
            <li class="text-black-50">${cards[id].topList[2]}</li>
            <li class="text-black-50">${cards[id].topList[1]}</li>
        </ul>
        <div class="modal-body d-flex flex-wrap justify-content-center p-5">
          <img src="${cards[id].imgSrc}" alt="${cards[id].title}" class="img-fluid w-75"/>
          <div class="content d-flex flex-wrap justify-content-between w-100">
            <p class="w-75">${cards[id].description}</p>
            <div class="right-part w-25">
              <ul class="list-unstyled d-flex flex-wrap justify-content-around text-primary">
                <li>${cards[id].usedTechnologies[0]}</li>
                <li>${cards[id].usedTechnologies[1]}</li>
                <li>${cards[id].usedTechnologies[2]}</li>
                <li>${cards[id].usedTechnologies[3]}</li>
                <li>${cards[id].usedTechnologies[4]}</li>
                <li>${cards[id].usedTechnologies[5]}</li>
              </ul>
              <button class="btn border-1 border-primary rounded p-2 me-2 d-flex align-items-center">
                See Live <img src="./svg/Icon.svg" alt="see live icon" class="ms-2"/>
              </button>
              <button class="btn border-1 border-primary rounded p-2 d-flex align-items-center">
                See Source <img src="./svg/Icon.svg" alt="see live icon" class="ms-2"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  modalContainer.innerHTML = modal;
  return document.body.appendChild(modalContainer);
}

modal(0);