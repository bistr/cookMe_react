

var startFunctionTime = new Date().getTime();
this.testFuction();
var endFunctionTime = new Date().getTime();
var diff = endFunctionTime - startFunctionTime;

console.log("Test function executed in "+diff+"ms");

used -
1 https://pxpx.co.uk/blog/article/intro-web-timing-apis
2 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
3 https://developer.mozilla.org/en-US/docs/Web/API/Console/time
4 https://developers.google.com/web/fundamentals/performance/rendering
5 https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now
6 https://en.wikipedia.org/wiki/System_time
7 https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp
8 https://css-tricks.com/breaking-performance-api/
9 https://blog.logrocket.com/how-to-practically-use-performance-api-to-measure-performance/
10 https://w3c.github.io/perf-timing-primer/
11 https://www.w3.org/TR/frame-timing/
12 https://developer.mozilla.org/en-US/docs/Web/API/Frame_Timing_API
13 https://developer.mozilla.org/en-US/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API
14 https://www.html5rocks.com/en/tutorials/webperformance/usertiming/
15 https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API
16 https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API
17 https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing
18 https://www.w3.org/TR/navigation-timing-2/
19 https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API
20 https://levelup.gitconnected.com/navigation-timing-browser-api-track-and-improve-website-performance-in-javascript-f1dbfb45612
21 https://www.w3.org/TR/paint-timing/

navigation


resourse and Navigation


frame


user


Paint





console.time("test")
this.testFuction();
console.timeEnd("test");

var startTime = performance.now();
this.testFuction();
var elapsedTime = performance.now() - startTime;
console.log("Test function completes in " + elapsedTime);
