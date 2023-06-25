import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DisplayPage } from '../display/display.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  inputText = null;
  constructor(private router: Router, private modalCtrl: ModalController, private storage: Storage) { }

  ngOnInit() {
  }

  async preview() {
    console.log(this.inputText);
    const modal = await this.modalCtrl.create({
      component: DisplayPage,
      componentProps: { data: this.inputText }
    });

    await modal.present();
  }

  async saveNote() {
    let obj: any = {};
    obj.data = this.inputText
    let array = [obj, obj]
    await this.storage.set('notesArray', array);
    console.log(array);
  }


}
