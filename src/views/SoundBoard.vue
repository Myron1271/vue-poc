<script>
export default {
  data() {
    return {
      buttons: [
        { name: 'Deur Bel',         sound: 'https://www.mediacollege.com/downloads/sound-effects/star-trek/tng/tng-doorbell.mp3', },
        { name: 'Status Report',    sound: 'https://www.mediacollege.com/downloads/sound-effects/star-trek/tng/tng-picard-statusreport.mp3', },
        { name: 'Incoming Message', sound: 'https://www.mediacollege.com/downloads/sound-effects/star-trek/tng/tng-worf-incomingmessage.mp3', },
        { name: 'Affirmative',      sound: 'https://www.mediacollege.com/downloads/sound-effects/star-trek/tng/tng-computer-affirmative.mp3', },
        { name: 'Red Alert',        sound: 'https://www.mediacollege.com/downloads/sound-effects/star-trek/tos/tos-redalert.mp3' }
      ],
      currentAudio: null
    };
  },
  methods: {
    playSound(index) {
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }

      const audio = new Audio(this.buttons[index].sound);
      audio.play();

      this.currentAudio = audio;
    }
  }
};
</script>

<template>
  <div>
    <button class="buttonSound" v-for="(button, index) in buttons" :key="index" @click="playSound(index)">
      {{ button.name }}
    </button>
  </div>
</template>

<style scoped>
  .buttonSound {
    font-family: Verdana, sans-serif;
    font-size: 20px;
    margin: 10px;
    border-radius: 20px;
    height: 100px;
    width: 200px;
    box-shadow: 0 2px 10px #000;
    border: none;
    background-color: yellow;
    color: black;
    font-weight: bold;
  }

  .buttonSound:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px black;
    transition: all 0.1s ease;
  }
</style>