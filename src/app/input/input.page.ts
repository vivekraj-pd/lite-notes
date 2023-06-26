import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DisplayPage } from '../display/display.page';
import { Storage } from '@ionic/storage-angular';
import { NoteCreationService } from '../service/note-creation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  @Input() inputText: any = null;
  constructor(private router: Router, private modalCtrl: ModalController, private storage: Storage, private notesService: NoteCreationService) { }

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
    var lastIndex = this.inputText.ops.length - 1;
    var lastOp = this.inputText.ops[lastIndex];
    if (typeof lastOp.insert === 'string') {
      this.inputText.ops[lastIndex].insert = lastOp.insert.trimEnd();
    }

    console.log(this.inputText);
    obj.data = this.inputText;

    // let array = [obj, obj]
    // await this.storage.set('notesArray', array);
    await this.notesService.saveNoteToStorage(obj);
    console.log(obj);
  }


}
