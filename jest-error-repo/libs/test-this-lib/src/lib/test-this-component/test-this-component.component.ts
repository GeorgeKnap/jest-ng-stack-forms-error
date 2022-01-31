import { Component } from '@angular/core';
import { FormControl } from '@ng-stack/forms';

@Component({
  selector: 'jest-error-repo-test-this-component',
  templateUrl: './test-this-component.component.html',
  styleUrls: ['./test-this-component.component.css'],
})
export class TestThisComponentComponent {
  control = new FormControl<string>('init value');
}
