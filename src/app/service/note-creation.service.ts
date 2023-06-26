import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class NoteCreationService {

  constructor(private storage: Storage) { }

  async getAllNotesFromStorage() {
    return await this.storage.get('allNotes').then((data) => {
      if (data) { return data } else { return [] }
    });
  }

  async saveAllNotesArrayToStorage(allNotesArray: any) {
    await this.storage.set('allNotes', allNotesArray);
  }

  async saveNoteToStorage(note:any){
    let allNotesArray = await this.getAllNotesFromStorage();
    allNotesArray.push(note);
    await this.saveAllNotesArrayToStorage(allNotesArray);
  }

  // async

}
