import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage{

  mensagem='';
  textDigitado='';

  constructor(private alertController: AlertController) {}

  async msg() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an <strong>alert</strong>!',
      buttons:  [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.mensagem = 'Alerta Cancelado';
          },
        },
        {
          text: 'Sim, Por Favor',
          role: 'confirm',
          handler: () => {
            this.mensagem = 'Alerta Confirmado';
          },
        },
      ],
    });

    await alert.present();
  }
}

