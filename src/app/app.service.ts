import { Injectable } from '@angular/core';

import { addDoc, deleteDoc, collection, collectionData, CollectionReference, DocumentData, Firestore } from '@angular/fire/firestore';
import { doc, getFirestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
interface Todo {
  id?: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})


export class AppService {

  private todoCollection!: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.todoCollection = collection(this.firestore, 'todo');
  }

  addToTodoList(data: any) {
    return addDoc(this.todoCollection,data);
  }

  getTodoList() {
    return collectionData(this.todoCollection, {
      idField: 'id',
    }) as Observable<Todo[]>;
  }

  updateTodoList() { }

  async deleteTodoItem(id: string) {
    const db = getFirestore()
    const refDoc = doc(db,'todo',id);
    console.log(refDoc);
    return await deleteDoc(refDoc);  
  }

}
