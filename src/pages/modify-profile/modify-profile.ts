import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modify-profile',
  templateUrl: 'modify-profile.html',
})
export class ModifyProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyProfilePage');
  }

  showPromptUsername() {
      let prompt = this.alertCtrl.create({
        title: 'Nom d\'utilisateur',
        message: "Entrez un nouveau nom d'utilisateur",
        inputs: [
          {
            name: 'username',
            placeholder: 'Nom d\'utilisateur'
          },
        ],
        buttons: [
          {
            text: 'Annuler',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Sauvegarder',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }

    showPromptEmail() {
        let prompt = this.alertCtrl.create({
          title: 'E-mail',
          message: "Entrez une nouvelle addresse e-mail",
          inputs: [
            {
              name: 'username',
              placeholder: 'E-mail'
            },
          ],
          buttons: [
            {
              text: 'Annuler',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Sauvegarder',
              handler: data => {
                console.log('Saved clicked');
              }
            }
          ]
        });
        prompt.present();
      }
}
