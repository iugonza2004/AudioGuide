<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent} from "vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/vue";

export default defineComponent({
  name: "Settings",
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonTitle }
});

</script>
