#Repo to reproduce the problem with @ng-stack/forms and jest

There are two workspaces: NX workspace and native Angular workspace, both in latest ng version (13).

- In NX workspace run the jest test of the library `nx test test-this-lib` and you get error
- In native Angular workspace run the `ng test` and Karma test passes.

this repo is linked to github issues:

ng-stack/forms: https://github.com/KostyaTretyak/ng-stack/issues/107
jest: https://github.com/facebook/jest/issues/12282
