# Introduction

PlatformCheck detects running platform Console(nodejs, nwjs, electron), Web (browsers), Mobile(cordova, phonegap etc)

# Usage
Download platformcheck.js and add html or npm install platformcheck

# Sample
in html
```
        <script type="text/javascript" src="js/platformcheck.js"></script>
```
in js
```
    var platformCheck = platformCheck || require('./platformcheck.js');
    if (platformCheck.console) {
        //do console operations
    }
    if (platformCheck.web) {
        //do browser operations
    }
    if (platformCheck.mobile) {
        //do mobile operations
    }

```
#Used Projects
* [apyon.net](http://apyon.net/) Turkish Apartment Management Software (Mobile/Web)
* [pisti game mobile](https://play.google.com/store/apps/details?id=com.ozger.pisti&hl=tr) [pisti game facebook](https://apps.facebook.com/aysipisti/)  Pisti Card Game

# License

The MIT License (MIT)

Copyright (c) 2013-2016 Kutlay Ozger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


