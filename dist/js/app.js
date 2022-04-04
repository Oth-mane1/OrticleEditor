const buttonInstall = document.getElementById('download');
var deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

buttonInstall && buttonInstall.addEventListener('click', (e) => {
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  });
});

// Apply the glassy theme 
setTimeout(() => {

  let glass = document.getElementsByClassName("glassy")[0];
  glass.style.height = document.body.offsetHeight + "px";
}, 111);

// Inint animation
AOS.init({
  delay: 100,
  duration: 600
});