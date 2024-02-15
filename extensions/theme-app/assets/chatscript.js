const responses = {
  "hi": "Hello,How can i help you!",
  "how are you": "I'm doing well, thank you!",
  "bye": "Goodbye!",
  "default": "I didn't understand that. Can you please rephrase?"
};
let count=0;
function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  displayMessageright(userInput);
    const botResponse = getBotResponse(userInput);
    displayMessageleft(botResponse);
  displayname(userInput);
  
  if(count==0){
    displayname(userInput);
    count=2;
  }
  else{
    const botResponse = getBotResponse(userInput);
    displayMessageleft(botResponse);
  }
  document.getElementById("user-input").value = "";
}
function displayname(message) {
  
  const chatMessages = document.getElementById("chat");
  chatMessages.innerHTML += `<div >
    <img src="{{'bot.jpg'|asset_url}}" style="width: 35px; background:white;">
    <span class="chatleft">${
    'Welcome , ' + message
  }</span></div>`;
  
}
function getBotResponse(userInput) {
  const lowerCaseInput = userInput.toLowerCase();
  const response = responses[lowerCaseInput] || responses["default"];
  return response;
}
function displayMessageright(message) {
  const chatMessages = document.getElementById("chat");
  chatMessages.innerHTML += `<div style="text-align:right;"><span class="chatright">${message}</span><img src="{{'user.jpg'|asset_url}}" style="width:35px;"></div>`;
}
function displayMessageleft(message) {
  const chatMessages = document.getElementById("chat");
  chatMessages.innerHTML += `<div >
    <img src="{{'bot.jpg'|asset_url}}" style="width: 35px; background:white;"><span class="chatleft">${message}</span></div>`;
}


//----------------------------------------------------------------------------
const liquidData = {
  buttons: [
      { label: "Product", value: "You can buy your own products" },
      { label: "Billing", value: "Contact the store owner" },
  ]
};
function renderButtons(data) {
  const buttonContainer = document.getElementById('button-container');
  data.buttons.forEach(button => {
      const buttonElement = document.createElement('button');
      buttonElement.textContent = button.label;
      buttonElement.value = button.value;
      buttonElement.addEventListener('click', () => handleButtonClick(button.label,button.value));
      buttonContainer.appendChild(buttonElement);
  });
}
function handleButtonClick(label,value) {
  displayMessageright(label);
  simulateBotResponse(value);
  function simulateBotResponse(value) {
    setTimeout(() => {
      displayMessageleft(value);
    }, 1000);
  }
function displayMessageright(message) {
  const chatMessages = document.getElementById("chat");
  chatMessages.innerHTML += `<div style="text-align:right;"><span class="chatright">${message}</span><img src="{{'user.jpg'|asset_url}}" style="width:35px;"></div>`;
}
function displayMessageleft(message) {
  const chatMessages = document.getElementById("chat");
  chatMessages.innerHTML += `<div >
    <img src="{{'bot.jpg'|asset_url}}" style="width: 35px; background:white;"><span class="chatleft">${message}</span></div>`;
}
}
renderButtons(liquidData);
//----------------------------------------------------------------------------