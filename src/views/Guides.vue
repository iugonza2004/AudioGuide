<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Text to Speech</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label position="floating">Enter Text</ion-label>
        <ion-input v-model="text"></ion-input>
      </ion-item>
      <ion-button expand="full" @click="generateAndSaveAudio()">Generate and Save Audio</ion-button>
    </ion-content>

  </ion-page>
</template>

<script>
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { defineComponent } from "vue";
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar, IonLabel } from "@ionic/vue";

export default defineComponent({
  name: "Guides",
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonTitle, IonItem, IonButton, IonInput, IonLabel },
  data() {
    return {
      text: 'Hola que tal, com estàs?. Míkonos és una illa....'
    };
  },
  async beforeMount() {
    console.log(await TextToSpeech.getSupportedLanguages());
    console.log(await TextToSpeech.getSupportedVoices());
  },
  methods: {
    async generateAndSaveAudio() {
      await TextToSpeech.speak({
        text: this.text,
        lang: 'ca-ES',
        rate: 1.0,
        pitch: 1.0,
        volume: 1.0,
      });
    },
  }
});
</script>

<style>
/* Add your styles here */
</style>
