import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    
    let emojiDiv = document.querySelector("#emojis");

    this.addBananas();
    let monkeyBananaParagraph = document.createElement("P");
    monkeyBananaParagraph.textContent = this.emojis.join('');
    emojiDiv.appendChild(monkeyBananaParagraph);
  }

  addBananas() {
    this.emojis = this.emojis.map((monkey) => {
      return monkey + this.banana;
    });
  }
}
