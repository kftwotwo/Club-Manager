import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css'],
  providers: [MemberService]
})
export class AllPeopleComponent implements OnInit {

  members: FirebaseListObservable<any[]>;

  constructor(private router: Router, private memberService: MemberService){}

   goToDetailPage(clickedMember: Member) {
     this.router.navigate(['teams', clickedMember.id]);
   };

   ngOnInit(){
     this.members = this.memberService.getMembers();
   }
  }
