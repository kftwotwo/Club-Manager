import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Member } from '../member.model';
import {  MemberService } from '../member.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  updateMember(member){
    this.memberService.updateMember(member);
  }

  showSuccess() {
    this.toastr.success('Success!');
  }

  deleteMember(member){
    if(confirm("Are you sure you want to delete this person from the club?")){
      this.memberService.deleteMember(member);
    }
  }
}
