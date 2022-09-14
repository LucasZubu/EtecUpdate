import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage{
  constructor(private msg: ToastController) {}

  async presentToast() {
    const toast = await this.msg.create({
      message: 'Hello World!',
      duration: 1500,
      icon: 'globe'
    });

    await toast.present();
  }
}

