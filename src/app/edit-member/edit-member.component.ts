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

  updateMember(memberToUpdate){
    this.memberService.updateAlbum(memberToUpdate);
    alert("Saved");
  }
}
