








var product = {
    saree: {
      item_1: {
        title: "saree",
        name: "SEA GREEN LAWN SAREE",
        price: "PKR 5,496 ",
        Image: "images/jsr-23-512_1_.jpg",
      },
      item_2: {
        title: "saree",
        name: "ORANGE SAREE",
        price: "PKR 5,992 ",
        Image: "images/jsr-23-510_1_.png",
      },
      item_3: {
        title: "saree",
        name: "BLACK-WHITE SAREE",
        price: "PKR 5,496 ",
        Image: "images/jsr-s-23-509_1_.jpg",
      },
      item_4: {
          title: "saree",
          name: "SKY BLUE SAREE",
          price: "PKR 6,496 ",
          Image: "images/jpws-23-558_1_-removebg-preview.png",
        },
    },
    jeans:{
      item_1: {
          title: "Jeans",
          name: "Light Blue",
          price: "PKR 4,496 ",
          Image: "images/product-0-2.jpg",
        },
        item_2: {
          title: "Jeans",
          name: "Dark Blue",
          price: "PKR 2,992 ",
          Image: "images/product-1-2.jpg",
        },
        item_3: {
          title: "Jeans",
          name: "BLACK",
          price: "PKR 2,496 ",
          Image: "images/product-3-1.jpg",
        },
        item_4: {
            title: "Jeans",
            name: "brown",
            price: "PKR 3,496 ",
            Image: "images/product-2-2.jpg",
          },
    },
    bags:{
        item_1: {
            title: "bags",
            name: "ALEXANDRA GOLD",
            price: "PKR 14,496 ",
            Image: "images/ALEXANDRA - GOLD.jpg",
          },
          item_2: {
            title: "bags",
            name: "KYOTO VANILLA BEAN ",
            price: "PKR w2,992 ",
            Image: "images/KYOTO - VANILLA BEAN.jpg",
          },
          item_3: {
            title: "bags",
            name: "KYOTO NOIR",
            price: "PKR 12,496 ",
            Image: "images/KYOTO - NOIR.jpg",
          },
          item_4: {
              title: "bags",
              name: "RAVEN RED ONYX",
              price: "PKR 3,496 ",
              Image: "images/RAVEN - RED ONYX.jpg",
            },
    },
    shoes:{
        item_1: {
            title: "Jordan",
            name: "Air Jordan 1 Brooklyn",
            price: "PKR 14,496 ",
            Image: "images/Air-Jordan-1-Brooklyn.jpg",
          },
          item_2: {
            title: "Jordan",
            name: "Air Jordan 1 Retro Low ",
            price: "PKR 22,992 ",
            Image: "images/Air Jordan 1 Retro Low Slip.jpg",
          },
          item_3: {
            title: "Jordan",
            name: "Air Jordan 11 Retro",
            price: "PKR 12,496 ",
            Image: "images/Air-jordan-11.jpg",
          },
          item_4: {
              title: "Jordan",
              name: "Air Jordan 4 Craft",
              price: "PKR 3,496 ",
              Image: "images/Air-Jordan-4-Craft.jpg",
            },
    }
  
  };





var saree = document.getElementById("saree");
var jeans = document.getElementById("jeans");
var bags = document.getElementById("bags");
var shoes = document.getElementById("shoes");

function filterCards(category) {
    var main = document.getElementById("main-cards");
    const QuickVeiwBtn = document.getElementById("QuickVeiwBtn")

    main.innerHTML = ""


    
    for (var key in product[category]) {
        main.innerHTML += `
            <div class="col my-col">
                <div class="card">
                    <img src="${product[category][key].Image}" class="card-img-top" alt="...">
                    <div class="top-right-heart"><img src="images/icons/heart.png" alt=""></div>
                    <div class="bottom-buttons">
                        <button>ADD TO CART</button>
                        <button id="QuickVeiwBtn">QUICK VIEW</button>
                        <div class="modal" id="imageModalBtn">
                            <span class="close" onclick="closeModalBtn()">&times;</span>
                            <img class="modal-content" id="modalImageBtn">
                        </div>                 
                        </div>
                    <div class="card-body  saree-card">
                        <h5 class="card-title">${product[category][key].title}</h5>
                        <h3 class="card-title">${product[category][key].name}</h3>
                        <p class="card-text">${product[category][key].price}</p>
                    </div>
                </div>
            </div>
            
        `;
        var main = document.getElementById("main-cards");
        const QuickVeiwBtn = document.getElementById("QuickVeiwBtn")
        
        main.addEventListener("click" , ()=> {
          QuickVeiwBtn = `${(product[category][key].Image)}`
        })
        
      
    }

}





// Event listeners for category links
saree.addEventListener("click", function () {
    filterCards("saree");
});

jeans.addEventListener("click", function () {
    filterCards("jeans");
});

bags.addEventListener("click", function () {
    filterCards("bags");
});

shoes.addEventListener("click", function () {
    filterCards("shoes");
});





/// modal # 1

const quickViewButton = document.getElementById("QuickVeiw");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
quickViewButton.addEventListener("click", () => {
    modalImage.src = "images/jsr-23-512_1_.jpg";
    modal.style.display = "block";
});


function closeModal() {
    modal.style.display = "none";
}

/// modal # 2

const quickViewButton2 = document.getElementById("QuickVeiw_2");
const modal_2 = document.getElementById("imageModal_2");
const modalImage_2 = document.getElementById("modalImage_2");

quickViewButton2.addEventListener("click", () => {
  modalImage_2.src = "images/product-0-2.jpg";
  modal_2.style.display = "block";
});
function closeModal2() {
  modal_2.style.display = "none";
}


/// modal # 3

const quickViewButton3 = document.getElementById("QuickVeiw_3");
const modal_3 = document.getElementById("imageModal_3");
const modalImage_3 = document.getElementById("modalImage_3");

quickViewButton3.addEventListener("click", () => {
  modalImage_3.src = "images/ALEXANDRA - GOLD.jpg";
  modal_3.style.display = "block";
});
function closeModal3() {
  modal_3.style.display = "none";
}


/// modal # 4

const quickViewButton4 = document.getElementById("QuickVeiw_4");
const modal_4 = document.getElementById("imageModal_4");
const modalImage_4 = document.getElementById("modalImage_4");

quickViewButton4.addEventListener("click", () => {
  modalImage_4.src = "images/Air-Jordan-1-Brooklyn.jpg";
  modal_4.style.display = "block";
});
function closeModal4() {
  modal_4.style.display = "none";
}





// owl carousel code start

$('#slider-area').owlCarousel({
  loop: true,
  autoplay: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
})

$('#shop-categoryy').owlCarousel({
      loop: true,
      autoplay: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          }
      }
  })
// owl carousel code end


















