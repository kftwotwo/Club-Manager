import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../member.service'
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) {}

  ngOnInit() {
  this.route.params.forEach((urlParameters) => {
     this.memberId = urlParameters['id'];
   });
   this.memberToDisplay = this.memberService.getMemberById(this.memberId);
   console.log("Member to display?",this.memberToDisplay);
  }

}
