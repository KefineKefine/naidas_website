

const blob = document.getElementById("blob");
const eril = document.getElementById("eril");
const messages = [
  "Hidey ho hello hello...",
  "Heya heya hi!",
  "I programmed this last minute...",
  "Heya!!!",
  "Heya World",
  "Clicked on Me?",
  "What in the skibidi",
  "Animate smoother? What smoother?",
  "RAHHHHHHHHHHHHHHHHHH",
  "I'm thinking of more to say...",
  "RED FLAGS RESCUE TEAM ROCKS",
  "Brain damage? Yeah I ahve that.",
  "This random text function is fun",
  "I need to add more entries to this...",
  "Toby Fox my beloved",
  "Gang idk if I should ask my crush out",
  "Hi Sir Salud",
  "Welcome to my website!",
  "Hey (with rizz)",
  "Happy to help you, Anytime!",
  "CHATGPT IS BETTER THAN LOVABLEAI",
  "Mega mega shoutout Matteo Dela Cruz",
  "Mega mega shoutout Matteo Dela Cruz 🐒",
  "Mega mega shoutout Oceana Nebre",
  "Mega mega shoutout Sev Mallabo",
  "Mega mega shoutout Caden Silao",
  "Mega mega shoutout Marjosef Tactay",
  "Mega mega shoutout Eril Guevarra",
  "Mega mega shoutout Amber Hope",
  "Mega mega shoutout Mirami hehehe",
  "Mega mega shoutout Descended One",
  "Mega mega shoutout Pax Corder",
  "Mega mega shoutout Paopuhpaopaopew",
  "Mega mega shoutout Rian Recana",
  "Mega mega shoutout Magnus Naida- wait...",
  "So many shoutouts",
  "WUAHHAHAHAHAHAAHAAAHHAHHA",
  "WUAHHAHAHAH",
  "WUHAHA",
  "WUHAHAHAHAAHHAHAHHAHAHAHHAHHAHAHAHHAH",
  "HAHAHAHAHAHhAHAHAHAHAHAHAHAH",
  "Hahaha",
  "What in the skibidi TOILET",
  "I can't see",
  "(╯°□°）╯︵ ┻━┻",
  "You'll never see all the entries MUWAHAHAHAHA",
  "Aw you'll never see all the entries",
  "I genuinely don't know what to say.",
  "I know what to say! This!",
  "Man what the skibidi",
  "There's a starman",
  "GODOT IS THE BEST GODOT IS THE BEST GODOT IS THE BEST GODOT IS THE BEST GODOT IS THE BEST GODOT IS THE BEST GODOT IS THE BEST GODOT IS THE BEST",
  "This is lowk fun",
  "I... Am Magnus",
  "Flint & Steel",
  "I shouldn't add this many messages",
  "Hi",
  "EXPERIMENT 10-T",
  "Guh",
  "I used to be called 'num kun'",
  "I CAN'T SEE",
  "I'm like half deaf lmao",
  "flexboxes might just be the end of me",
  "You AI GENERATED YOUR WEBSITE???",
  ":))",
  "DELTARUNE TOMORROW",
  "SILKSONG IS REAL",
  "Thunder Knight ; Bermadunia",
  "Maroon Jacket Kid?",
  "I can't use emojis properly 😔",
  "Zamn I'm called for dinner",
  "Zamn I'm called for lunch",
  "Zamn I'm called for breakfast",
  "Are you a 10? Because... Uhm... Uhhh?",
  "Marjo, you a weird kid 💔🥀",
  "Legit?",
  "They call me the homework-doer",
  "OKAY OKAY OKAY",
  "The ocean breeze is calming",
  "Are you reading this from github...?", // I see you bastard
  "I love and hate flexboxes",
  "Ascended Mangos",
  "Ouch I scratched on somethig",
  "YOUCH!",
  "Instant noodles 🍜",
  "I love this gradient effect 🎸",
  "（￣︶￣）y",
  "WARHAMMER 40K SPACE MARINE",
  "Iii loooooove, ii looooove her, i love, i love, i love",
  "IF THE WORLD WAS ENDING",
  "Cause it was all... Purple?",
  "┗( T^T )┛",
  "Sakamoto Days",
  "SO LET'S ENJOY THE SHOW!",
  "FLStudio is goated",
  "Baby Gronk rizzed up Livvy Dunne",
  "Christian Joseph",
  "[[[UNSPOKEN RIZZ]]]",
  "I'm the alpha, I'm the leader, I'm the one to trus",
  "MY WEBSITE IS [title card]",
  "Woaw",
  "Baby Gronk could never",
  "I bomboclat metal pipe falling rn",
  "what L sisyphus you ice spice glazing",
  "this 1 2 buckle my shoe ahh sbidi toiledt pmo",
  "Gon be hitting the griddy",
  "<a href='thisinfactdidnot.work'>this will defo work</a>",
  "There's more than 50 rando messages here.",
  "Huh? I dint here yew sorey",
  "smh ts pmo i gtg wth iykyk bro ttyl",
  "Can I borrow a fry?",
  "Potato na may corners",
  "Put an 'ing' on Moe. 'Moeing'.",
  "Just put the fries in the bag lil bro",
  "Contacts? What are those?",
  "What's a 'Profile'?",
  "So many inside jokes here",
  "Anytime ;)",
  "Need a PT done ;) ?",
  "Sans Undertale",
  "Guitar is fun",
  "I LOVE GUITAR HERO",
  "I forgor to put 'gaming' in my hobbies... Prolly for the best.", // remove when I actually add 'gaming'
  "Okay stop clicking me",
  "It's almost like we 'click' tgt, ykwim?",
  "ZAMN",
  "WHAT THE HELL IS AN inline-block",


];

vis_prompts = false

window.onpointermove = event => { 
  const { pageX, pageY } = event; // Tracks position beyond viewport height

  blob.animate({
    left: `${pageX}px`,
    top: `${pageY}px`
  }, { duration: 1000, fill: "forwards" });

};



document.addEventListener("DOMContentLoaded", function() {
  const main_image = document.getElementById("main-img");
  const main_container = document.getElementById("beside-home-img-container");
  const button_container = document.getElementById("button-container");

  for (let button of button_container.children) {
    button.style.display = 'none';
  }

  main_container.style.display = 'none';

  changeText();

  if (main_image) {
    main_image.addEventListener("click", function() {
      
      

      for (let element of button_container.children) {
        element.style.display = (element.style.display === 'none') ? '' : 'none';
      }

      main_container.style.display = (main_container.style.display === 'none') ? 'block' : 'none';

      if (main_container.style.display == 'none') {
        changeText();
      }

      });
  }
});



function changeText() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  document.getElementById('rando-text').textContent = randomMessage;
}