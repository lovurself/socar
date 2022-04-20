document.addEventListener("DOMContentLoaded", () => {
    new TypeIt("#typeit_txt", {
      speed: 100,
      startDelay: 50,
    })
    .type('어디로든 떠나고 싶을 때 , <span class="color_blue">So Car !</span>')
    .pause(1000)
    .delete(24, {delay: 100})
    .type('무거운 짐을 옮겨야 할 때 , <span class="color_blue">So Car !</span>')
    .pause(1000)
    .delete(25, {delay: 100})
    .type('대중교통으로 떠나기 힘들 때 , <span class="color_blue">So Car !</span>')
    .pause(1000)
    .delete(26, {delay: 100})
    .type('차가 필요한 모든 순간, <span class="color_blue">쏘카 !</span>')
    .go();
  });