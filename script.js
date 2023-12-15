var cardArr = [
    {
      id: 4,
      image: "https://static8.depositphotos.com/1559986/1051/i/450/depositphotos_10513998-stock-photo-red-jacket.jpg",
      title: "new title",
      price: 205,
      des: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    },
    {
      id: 7,
      image: "https://media.istockphoto.com/id/177016269/photo/red-baseball-cap.jpg?s=612x612&w=0&k=20&c=cPhg_dJgK9cRVP9SAgJ08yrW_rTiL7ZoeCHLSfoW7XE=",
      title: "Ergonomic Wooden Tuna",
      price: 743,
      des: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    },
    {
      id: 9,
      image: "https://media.istockphoto.com/id/497040301/photo/white-baseball-hat.jpg?s=612x612&w=0&k=20&c=CdfjW7GlFoUOvUozoe3UL0fe205V3FcaCwDxfipsQ1g=",
      title: "Electronic Bronze Chips",
      price: 808,
      des: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    },
    {
      id: 11,
      image: "https://i.pinimg.com/originals/9f/cf/09/9fcf0924df9611bd35ff3871e5dd4bd1.jpg",
      title: "Awesome Bronze Car",
      price: 382,
      des: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    },
    {
      id: 12,
      image: "https://img.freepik.com/premium-vector/vector-baseball-cap-illustration_723554-150.jpg",
      title: "Recycled Rubber Cheese",
      price: 30,
      des: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    },
  ];
  
  var cardCon = document.getElementById("cardContent");
  
  // Use map to create an array of card elements
  var cardElements = cardArr.map(function (card) {
    return `
      <div class="card m-2" style="width: 18rem">
        <img src=${card.image} class="card-img-top" alt="..." height="160px" />
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">${card.des}</p>
          <p class="card-text">Price: ${card.price}</p>
        </div>
      </div>
    `;
  });
  
  cardCon.innerHTML = cardElements.join('');
  