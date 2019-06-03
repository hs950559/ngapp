# Update Angular 7 to Angular 8

## Step 1

Update cli, Install npm-check-updates


```
npm i @angular/cli -g
npm install -g npm-check-updates
```

## Step 2

```
ncu
```

you will see something like this...

```
Hemants-MacBook-Air:ngapp hemant$ ncu
Checking /Users/hemant/GITHUB/ngapp/package.json
[====================] 39/39 100%

 @angular/animations                 ~7.2.0  →    ~8.0.0 
 @angular/cdk                        ~7.3.7  →    ~8.0.0 
 @angular/common                     ~7.2.0  →    ~8.0.0 
 @angular/compiler                   ~7.2.0  →    ~8.0.0 
 @angular/core                       ~7.2.0  →    ~8.0.0 
 @angular/forms                      ~7.2.0  →    ~8.0.0 
 @angular/material                   ^7.3.7  →    ^8.0.0 
 @angular/platform-browser           ~7.2.0  →    ~8.0.0 
 @angular/platform-browser-dynamic   ~7.2.0  →    ~8.0.0 
 @angular/router                     ~7.2.0  →    ~8.0.0 
 core-js                             ^2.5.4  →    ^3.1.3 
 rxjs                                ~6.3.3  →    ~6.5.2 
 tslib                               ^1.9.0  →    ^1.9.3 
 zone.js                            ~0.8.26  →    ~0.9.1 
 @angular-devkit/build-angular      ~0.13.0  →  ~0.800.0 
 @angular/cli                        ~7.3.8  →    ~8.0.0 
 @angular/compiler-cli               ~7.2.0  →    ~8.0.0 
 @angular/language-service           ~7.2.0  →    ~8.0.0 
 @types/jasmine                      ~2.8.8  →   ~3.3.13 
 @types/jasminewd2                   ~2.0.3  →    ~2.0.6 
 @types/node                         ~8.9.4  →   ~12.0.3 
 codelyzer                           ~4.5.0  →    ~5.0.1 
 jasmine-core                       ~2.99.1  →    ~3.4.0 
 json-server                        ^0.14.2  →   ^0.15.0 
 karma                               ~4.0.0  →    ~4.1.0 
 karma-coverage-istanbul-reporter    ~2.0.1  →    ~2.0.5 
 karma-jasmine                       ~1.1.2  →    ~2.0.1 
 karma-jasmine-html-reporter         ^0.2.2  →    ^1.4.2 
 protractor                          ~5.4.0  →    ~5.4.2 
 ts-node                             ~7.0.0  →    ~8.2.0 
 tslint                             ~5.11.0  →   ~5.16.0 
 typescript                          ~3.2.2  →    ~3.5.1 

Run ncu -u to upgrade package.json
```

## Step 3

```
ncu -u
```

it will update your `package.json` with latest versions.

You will see something like this...

```
Upgrading /Users/hemant/GITHUB/ngapp/package.json
[====================] 39/39 100%

 @angular/animations                 ~7.2.0  →    ~8.0.0 
 @angular/cdk                        ~7.3.7  →    ~8.0.0 
 @angular/common                     ~7.2.0  →    ~8.0.0 
 @angular/compiler                   ~7.2.0  →    ~8.0.0 
 @angular/core                       ~7.2.0  →    ~8.0.0 
 @angular/forms                      ~7.2.0  →    ~8.0.0 
 @angular/material                   ^7.3.7  →    ^8.0.0 
 @angular/platform-browser           ~7.2.0  →    ~8.0.0 
 @angular/platform-browser-dynamic   ~7.2.0  →    ~8.0.0 
 @angular/router                     ~7.2.0  →    ~8.0.0 
 core-js                             ^2.5.4  →    ^3.1.3 
 rxjs                                ~6.3.3  →    ~6.5.2 
 tslib                               ^1.9.0  →    ^1.9.3 
 zone.js                            ~0.8.26  →    ~0.9.1 
 @angular-devkit/build-angular      ~0.13.0  →  ~0.800.0 
 @angular/cli                        ~7.3.8  →    ~8.0.0 
 @angular/compiler-cli               ~7.2.0  →    ~8.0.0 
 @angular/language-service           ~7.2.0  →    ~8.0.0 
 @types/jasmine                      ~2.8.8  →   ~3.3.13 
 @types/jasminewd2                   ~2.0.3  →    ~2.0.6 
 @types/node                         ~8.9.4  →   ~12.0.3 
 codelyzer                           ~4.5.0  →    ~5.0.1 
 jasmine-core                       ~2.99.1  →    ~3.4.0 
 json-server                        ^0.14.2  →   ^0.15.0 
 karma                               ~4.0.0  →    ~4.1.0 
 karma-coverage-istanbul-reporter    ~2.0.1  →    ~2.0.5 
 karma-jasmine                       ~1.1.2  →    ~2.0.1 
 karma-jasmine-html-reporter         ^0.2.2  →    ^1.4.2 
 protractor                          ~5.4.0  →    ~5.4.2 
 ts-node                             ~7.0.0  →    ~8.2.0 
 tslint                             ~5.11.0  →   ~5.16.0 
 typescript                          ~3.2.2  →    ~3.5.1 

Run npm install to install new versions.
```

## Step 4

```
npm update
npm install
```

## Step 5

```
ng serve -o

// You may get following error
ERROR in The Angular Compiler requires TypeScript >=3.4.0 and <3.5.0 but 3.5.1 was found instead.

// Fix- install typescript
npm i typescript@3.4.3 -D

// Now run `ng serve -o` again
http://localhost:4200/
```

## Step 6 

```
// update your code to v8, angular material imports, lazy load syntax etc
ng update --all

Boom! all done
```


## How i came to this version of `typescript@3.4.3`

After upgrading angular cli, generate a sample angular 8 project

```
ng new myapp --routing --style scss
```

from this sample project i got this version of typescript 'typescript@3.4.3'

## Do some cleanup

Compare generated new angular 8 sample project with your existing angular 7 project and move your some files around ( tslint.json, tsconfig.app.json etc) remove some files make the structure in sync with sample project.

Still have problem in upgrading call me at 7799111008.

