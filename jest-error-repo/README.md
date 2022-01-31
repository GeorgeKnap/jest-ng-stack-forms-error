# Repository to reproduce problem with @ng-stack/form

how to:
1. install node modules with `npm ci`
2. test the library: `nx test test-this-lib`
3. jest will throw following error: 
```
C:\development\jest-ng-stack-forms-error\jest-error-repo>nx test test-this-lib

> nx run test-this-lib:test

 FAIL   test-this-lib  libs/test-this-lib/src/lib/test-this-component/test-this-component.component.spec.ts
  TestThisComponentComponent
    × should create (27 ms)

  ● TestThisComponentComponent › should create

    TypeError: Class constructor FormControl cannot be invoked without 'new'

       8 | })
       9 | export class TestThisComponentComponent {
    > 10 |   control = new FormControl<string>('init value');
         |             ^
      11 | }
      12 |

      at new FormControl (../../node_modules/projects/forms/src/lib/form-control.ts:42:5)
      at new TestThisComponentComponent (src/lib/test-this-component/test-this-component.component.ts:10:13)
      at NodeInjectorFactory.TestThisComponentComponent_Factory [as factory] (..\..\ng:\TestThisComponentComponent\ɵfac.js:5:10)
      at src/lib/test-this-component/test-this-component.component.spec.ts:17:23

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.362 s
Ran all test suites.

 ———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Running target "test-this-lib:test" failed

   Failed tasks:

   - test-this-lib:test

   Hint: run the command with --verbose for more details.

```
