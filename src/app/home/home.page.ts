import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { TextZoom } from '@capacitor/text-zoom';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() { }

  async get() {
    const result = await TextZoom.get();
    alert(`Text Zoom Value is ${result.value}`);
  }

  async getPreferred() {
    const result = await TextZoom.getPreferred();
    alert(`Text Zoom Value is ${result.value}`);
  }

  async set(s?: number) {
    const result = await TextZoom.getPreferred();
    await TextZoom.set({ value: s ? s : result.value });

  }
}
