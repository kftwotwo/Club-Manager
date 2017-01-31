import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {
  transform(people: any, byRole: any): any {
    var output: any[] = []
    if (byRole === undefined) return people;
      for( var i=0; i<people.length-1; i++) {
        if(people[i].role === byRole) {
          output.push(people[i])
        }
      }
      return output;
  }

}
