const cards = [
  {
    id: "card0",
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
    text of the printing and typesetting industry. <span class="d-lg-inline d-none"> Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
    with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
    han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of 
    type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea</span>`,
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
  {
    id: "card1",
    title: 'Tonic',
    topList: [
      'CANOPY',
      'BACK End DEV',
      '2015'
    ],
    imgSrc: './img/Snapshoot-Portfolio2.png',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy 
    text of the printing and typesetting industry. <span class="d-lg-inline d-none"> Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
    with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
    han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of 
    type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea</span>`,
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
  {
    id: "card2",
    title: 'Tonic',
    topList: [
      'CANOPY',
      'BACK End DEV',
      '2015'
    ],
    imgSrc: './img/Snapshoot-Portfolio3.png',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy 
    text of the printing and typesetting industry. <span class="d-lg-inline d-none"> Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
    with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
    han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of 
    type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea</span>`,
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
  {
    id: "card3",
    title: 'Tonic',
    topList: [
      'CANOPY',
      'BACK End DEV',
      '2015'
    ],
    imgSrc: './img/Snapshoot-Portfolio4.png',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy 
    text of the printing and typesetting industry. <span class="d-lg-inline d-none"> Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s 
    with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
    han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of 
    type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea</span>`,
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
  modalContainer.id = cards[id].id;
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
        <div class="modal-body d-flex flex-wrap justify-content-center p-lg-5 p-3">
          <img src="${cards[id].imgSrc}" alt="${cards[id].title}" class="img-fluid w-100"/>
          <div class="content d-flex flex-wrap flex-lg-row flex-column justify-content-xl-evenly justify-content-lg-between justify-content-center w-100 mt-3">
            <p>${cards[id].description}</p>
            <div class="right-part d-flex flex-wrap align-items-lg-start">
              <ul class="list-unstyled d-flex flex-lg-wrap justify-content-lg-around justify-content-between text-primary text-center">
                <li class="ms-1 p-1 px-3 rounded">${cards[id].usedTechnologies[0]}</li>
                <li class="ms-1 p-1 px-3 rounded">${cards[id].usedTechnologies[1]}</li>
                <li class="ms-1 p-1 px-sm-3 px-0 rounded">${cards[id].usedTechnologies[2]}</li>
                <li class="ms-1 p-1 px-3 rounded d-lg-block d-none">${cards[id].usedTechnologies[3]}</li>
                <li class="ms-1 p-1 px-3 rounded d-lg-block d-none">${cards[id].usedTechnologies[4]}</li>
                <li class="ms-1 p-1 px-3 rounded d-lg-block d-none">${cards[id].usedTechnologies[5]}</li>
              </ul>
              <div class="btns d-flex flex-wrap justify-content-around align-items-center w-100">
                <button class="btn border-1 border-primary rounded p-2 d-flex justify-content-center align-items-center mb-2">
                  See Live <img src="./svg/Icon.svg" alt="see live icon" class="m-0 ms-2"/>
                </button>
                <button class="btn border-1 border-primary rounded p-2 d-flex justify-content-center align-items-center mb-2">
                  See Source <img src="./svg/github.svg" alt="see live icon" class="m-0 ms-2"/>
                </button>
              </div>
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
modal(1);
modal(2);
modal(3);