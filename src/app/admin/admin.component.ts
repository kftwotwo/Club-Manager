import { Component } from '@angular/core';
import { Member } from '../member.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent {

  constructor(private memberService: MemberService) { }

  submitForm(first: string, last: string, role: string, bio: string, profileImg: string) {
    var newMember: Member = new Member(first, last, role, bio, profileImg);
    this.memberService.addMember(newMember);
  }



}
