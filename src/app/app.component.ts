import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post { 
  id: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  postsCol: AngularFirestoreCollection<Post>;
  title: string;
  content: string;
  posts:any;


  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
        this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });


  }
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }

}
