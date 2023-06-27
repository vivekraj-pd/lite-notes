import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { InputPage } from '../input/input.page';
import { NoteCreationService } from '../service/note-creation.service';
// import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  allNotes: any;
  constructor(private router: Router,
    private modalCtrl: ModalController,
    private storage: Storage,
    private notesService: NoteCreationService
  ) { }

  async initializeDatabase() {
    await this.storage.create();
  }

  openInputPage() {
    this.router.navigate(['/input']);
  }

  async ionViewWillEnter() {

    this.initializeDatabase().then(async () => {
      // Database is now created, you can safely access it
      // this.allNotes = await this.;
      this.allNotes = await this.notesService.getAllNotesFromStorage();
      console.log(this.allNotes);
    });
  }

  async showLargerView(data: any,iD:any) {
    console.log(data);
    let modal = await this.modalCtrl.create({
      component: InputPage,
      componentProps: { inputText: data,id: iD}
    })

    await modal.present();

  }



}
