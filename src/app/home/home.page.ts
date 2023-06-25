import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
// import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  allNotes: any;
  constructor(private router: Router,
    private storage: Storage
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
    this.allNotes = await this.storage.get('notesArray');
    console.log(this.allNotes);
    });
  }

  showLargerView(data:any){
    console.log(data);
  }



}
