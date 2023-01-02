import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.page.html',
  styleUrls: ['./cources.page.scss'],
})
export class CourcesPage implements OnInit {
  data:any = [
      "pomme",
      "poire",
      "bannane"
  ]
  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }
  async alerte(){
    const alerte = await this.alertController.create({
      header:'Erreur',
      message:'momo',
      buttons:['ok']
    }) 
    await alerte.present();
    await alerte.onDidDismiss();
  }   
}

