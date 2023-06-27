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

  async saveNoteToStorage(note: any) {
    let allNotesArray = await this.getAllNotesFromStorage();
    let createdNoteObjectArray = await this.createNoteObjectArray(note, allNotesArray);
    // allNotesArray.push(note);
    await this.saveAllNotesArrayToStorage(createdNoteObjectArray);
  }

  async createNoteObjectArray(note: any, notesArray: Array<any>) {
    if (note.id) {

      let index = notesArray.findIndex((data) => {
        return data.id == note.id;
      });
      notesArray[index] = note;

      return notesArray;

    } else {
      note.id = notesArray.length + 1;
      notesArray.push(note);
      return notesArray;
    }


  }

}
