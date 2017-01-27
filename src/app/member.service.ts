import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  member: any;
  members: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('/members')
   }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  // getMemberById(memberId: string){
  //   this.angularFire.database.object('/members/' + memberId).subscribe(data=>{
  //     this.member = data;
  //     console.log("object!!!!!!!", this.member)
  //   });
  //   return this.member
  // }

  getMemberById(memberId: string){
    return this.angularFire.database.object('members/' + memberId);
  }
}
