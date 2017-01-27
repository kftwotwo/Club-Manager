import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member.model';
import {  MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  updateMember(member){
    this.memberService.updateMember(member);
    alert("Saved");
  }

  deleteMember(member){
    if(confirm("Are you sure you want to delete this person from the club?")){
      this.memberService.deleteMember(member);
    }
  }
}
