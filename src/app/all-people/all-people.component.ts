import { Component } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css']
})
export class AllPeopleComponent {

  constructor(private router: Router){}

  members: Member[] = [
     new Member("Kevin", "Finley",
         "Manager", 'Fun to work with', 1),
     new Member("Joe", "Bob",
         "Cook", 'I have been cooking for 20 years', 2),
     new Member("Nick", "Goldman",
         "Head Chef", 'I love team work and I like keeping everyone together and being on the same page', 3)
   ];
   goToDetailPage(clickedMember: Member) {
     this.router.navigate(['teams', clickedMember.id]);
   };
  }
