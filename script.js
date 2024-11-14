document.addEventListener('DOMContentLoaded', function() {
  const parrotContainer = document.getElementById('parrot-container');
  const parrotImage = document.getElementById('parrot');
  const parrotAudio = document.getElementById('parrot-audio');

  // List of sound file paths
  const sounds = [	  
	  'geoff_sound1.mp3',
	  'geoff_sound2.mp3',
	  'geoff_sound3.mp3',
	  'geoff_sound4.mp3',
	  'geoff_sound5.mp3',
	  'geoff_sound6.mp3',
	  'geoff_sound7.mp3',
	  'geoff_sound8.mp3',
	  'geoff_sound9.mp3',	  	  
	  'geoff_sound10.mp3',	  
	  'geoff_sound11.mp3'
  ];
  
 // Current sound index
  let currentSoundIndex = 0;

  // Flag to indicate if the parrot is ready for another click
  let isReady = true;

  // Function to get the next sound in the list
  function getNextSound() {
    // Increment the index, reset if it reaches the end of the list
    currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
    return sounds[currentSoundIndex];
  }

  // Click event on the parrot
  parrotContainer.addEventListener('click', () => {
    if (!isReady) return; // Ignore clicks if a sound is still playing

    isReady = false; // Block additional clicks
    parrotImage.src = 'parrot_open.png'; // Open mouth image

    // Play the next sound
    const nextSound = getNextSound();
    parrotAudio.src = nextSound;
    parrotAudio.play();

    // When sound finishes, close the mouth and allow new clicks
    parrotAudio.onended = () => {
      parrotImage.src = 'parrot_closed.png'; // Close mouth image
      isReady = true; // Allow new clicks
    };
  });
});