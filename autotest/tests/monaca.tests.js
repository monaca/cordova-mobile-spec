/*global monaca */

/*
 * Monaca Tests
 */

describe("Monaca", function() {

  describe("retrieveUIStyle", function() {

    function createRetrieveUIStyleTest(id, styles) {
      styles.forEach(function(object) {
        var key = object.key;
        var value = object.value;
        it(key, function(){
          var callback = jasmine.createSpy().andCallFake(function(v) {
            expect(v).toBe(value);
          });
           console.log('running retrieveStyle ' + id + ', ' + key + ' : ' + value );
          runs(function() { monaca.retrieveUIStyle(id, key, callback); });
          waitsFor(function() { return callback.wasCalled; }, "callback not done.");
        });
      });
    }

    describe("top toolbar", function() {
      var styles = [
        {"key": "visibility", "value": true},
        {"key": "disable", "value": false},
        {"key": "opacity", "value": 1.0},
        {"key": "backgroundColor", "value": "#000000"},
        {"key": "title", "value": "Title"},
        {"key": "subtitle", "value": "Subtitle"},
        {"key": "titleColor", "value": "#FFFFFF"},
        {"key": "subtitleColor", "value": "#FFFFFF"},
        {"key": "titleFontScale", "value": 1.0},
        {"key": "subtitleFontScale", "value": 1.0}
      ];
      createRetrieveUIStyleTest("header", styles);
    });

    describe("top left button", function() {
      var styles = [
        {"key": "visibility", "value": true},
        {"key": "disable", "value": false},
        {"key": "opacity", "value": 1.0},
        {"key": "backgroundColor", "value": "#000000"},
        {"key": "activeTextColor", "value": "#0000FF"},
        {"key": "textColor", "value": "#FFFFFF"},
        {"key": "image", "value": undefined},
        {"key": "innerImage", "value": undefined},
        {"key": "text", "value": "Button A"},
        {"key": "subtitle", "value": ""},
        {"key": "titleColor", "value": "#FFFFFF"},
        {"key": "subtitleColor", "value": "#FFFFFF"},
        {"key": "titleFontScale", "value": 1.0},
        {"key": "subtitleFontScale", "value": 1.0}
      ];
      createRetrieveUIStyleTest("top-left-button", styles);
    });

    describe("top left backButton", function() {
      var styles = [
        {"key": "visibility", "value": true},
        {"key": "disable", "value": false},
        {"key": "opacity", "value": 1.0},
        {"key": "activeTextColor", "value": "#0000FF"},
        {"key": "textColor", "value": "#FFFFFF"},
        {"key": "text", "value": "backButton A"},
        {"key": "innerImage", "value": undefined},
        {"key": "forceVisibility", "value": true}
      ];
      createRetrieveUIStyleTest("top-left-backbutton", styles);
    });

    describe("top left label", function() {
      var styles = [
        {"key": "opacity", "value": 1.0},
        {"key": "textColor", "value": "#FFFFFF"},
        {"key": "text", "value": "Label A"}
      ];
      createRetrieveUIStyleTest("top-left-label", styles);
    });

    describe("top right segment", function() {
      var styles = [
        {"key": "visibility", "value": true},
        {"key": "disable", "value": false},
        {"key": "opacity", "value": 1.0},
        {"key": "backgroundColor", "value": "#000000"},
        {"key": "activeTextColor", "value": "#0000FF"},
        {"key": "textColor", "value": "#FFFFFF"},
        {"key": "texts", "value": ["SegA", "SegB", "SegC"]},
        {"key": "activeIndex", "value": 0}
      ];
      createRetrieveUIStyleTest("top-right-segment", styles);
    });

    describe("top right searchbox", function() {
      var styles = [
        {"key": "visibility", "value": true},
        {"key": "disable", "value": false},
        {"key": "opacity", "value": 1.0},
        {"key": "backgroundColor", "value": "#000000"},
        {"key": "textColor", "value": "#FFFFFF"},
        {"key": "placeholder", "value": "Search"},
        {"key": "focus", "value": false}
      ];
      createRetrieveUIStyleTest("top-right-searchbox", styles);
    });

    describe("bottom tabbar", function() {
      var styles = [
        {"key": "visibility", "value": true},
        {"key": "opacity", "value": 1.0},
        {"key": "backgroundColor", "value": "#000000"},
        {"key": "activeIndex", "value": 0}
      ];
      createRetrieveUIStyleTest("footer", styles);
    });

    describe("bottom tabbaritem1", function() {
        var styles = [
        {"key": "text", "value": "Item1"},
        {"key": "opacity", "value": 1.0},
        {"key": "backgroundColor", "value": "#000000"},
        {"key": "activeIndex", "value": 0}
      ];
      createRetrieveUIStyleTest("tabbar-item1", styles);
    });

  });

  describe("updateUIStyle", function() {

    var DELAY_TIME = 100;

    function createUpdateUIStyleTest(id, styles) {
      styles.forEach(function(object) {
                     
        var key = object.key;
        var value = object.value;
        console.log('running updateStyle ' + id + ', ' + key + ' : ' + value );
        it(key, function(){
          monaca.updateUIStyle(id, key, value);
          var callback = jasmine.createSpy().andCallFake(function(v) {
            if (Array.isArray(v)) {
              expect(v.join(",")).toBe(value.join(","));
            } else {
              expect(v).toBe(value);
            }
          });
          runs(function() {
            setTimeout(function() { monaca.retrieveUIStyle(id, key, callback); }, DELAY_TIME);
          });
          waitsFor(function() { return callback.wasCalled; }, "callback not done.");
        });
      });
    }

    describe("top toolbar", function() {
      var styles = [
        {"key": "visibility", "value": false},
        {"key": "visibility", "value": true},
        {"key": "disable", "value": true},
        {"key": "opacity", "value": 0.5},
        {"key": "backgroundColor", "value": "#00FF00"},
        {"key": "title", "value": "TitleX"},
        {"key": "subtitle", "value": "SubtitleX"},
        {"key": "titleColor", "value": "#FF0000"},
        {"key": "subtitleColor", "value": "#FF0000"},
        {"key": "titleFontScale", "value": 0.5},
        {"key": "subtitleFontScale", "value": 0.5}
      ];

      createUpdateUIStyleTest("header", styles);
    });

    describe("top left button", function() {
      var styles = [
        {"key": "visibility", "value": false},
        {"key": "visibility", "value": true},
        {"key": "disable", "value": true},
        {"key": "opacity", "value": 0.5},
        {"key": "backgroundColor", "value": "#00FF00"},
        {"key": "activeTextColor", "value": "#FF0000"},
        {"key": "textColor", "value": "#0000FF"},
//        {"key": "image", "value": undefined},
//        {"key": "innerImage", "value": undefined},
        {"key": "text", "value": "Button AX"},
        {"key": "subtitle", "value": "X"},
        {"key": "titleColor", "value": "#222222"},
        {"key": "subtitleColor", "value": "#555555"},
        {"key": "titleFontScale", "value": 0.5},
        {"key": "subtitleFontScale", "value": 0.5}
      ];

      createUpdateUIStyleTest("top-left-button", styles);
    });

    describe("top left backButton", function() {
      var styles = [
        {"key": "visibility", "value": false},
        {"key": "visibility", "value": true},
        {"key": "disable", "value": false},
        {"key": "opacity", "value": 1.0},
        {"key": "activeTextColor", "value": "#0000FF"},
        {"key": "textColor", "value": "#FFFFFF"},
        {"key": "text", "value": "Button A"},
//        {"key": "innerImage", "value": undefined},
        {"key": "forceVisibility", "value": true}
      ];
      createUpdateUIStyleTest("top-left-backbutton", styles);
    });

    describe("top left label", function() {
      var styles = [
        {"key": "opacity", "value": 0.5},
        {"key": "textColor", "value": "#FF0000"},
        {"key": "text", "value": "Button BX"}
      ];
      createUpdateUIStyleTest("top-left-label", styles);
    });

    describe("top right segment", function() {
      var styles = [
        {"key": "visibility", "value": false},
        {"key": "visibility", "value": true},
        {"key": "disable", "value": true},
        {"key": "opacity", "value": 0.5},
        {"key": "backgroundColor", "value": "#00FF00"},
        {"key": "activeTextColor", "value": "#FF0000"},
        {"key": "textColor", "value": "#0000FF"},
        {"key": "texts", "value": ["SegAX", "SegBX", "SegCX"]}//,
//        {"key": "activeIndex", "value": 1}
      ];
      createUpdateUIStyleTest("top-right-segment", styles);
    });

    describe("top right searchbox", function() {
        console.log('top right searchbox update style');
      var styles = [
        {"key": "visibility", "value": false},
        {"key": "visibility", "value": true},
        {"key": "disable", "value": true},
        {"key": "opacity", "value": 0.5},
        {"key": "backgroundColor", "value": "#00FF00"},
        {"key": "textColor", "value": "#0000FF"},
        {"key": "placeholder", "value": "SearchX"},
        {"key": "focus", "value": true}
      ];
      createUpdateUIStyleTest("top-right-searchbox", styles);
    });

//    describe("bottom tabbar", function() {
//    console.log('bottom tabbar update style');
//      var styles = [
//        {"key": "visibility", "value": false},
//        {"key": "visibility", "value": true},
//        {"key": "opacity", "value": 0.5},
//        {"key": "backgroundColor", "value": "#00FF00"}//,
//        {"key": "activeIndex", "value": 1}
//      ];
//      createUpdateUIStyleTest("footer", styles);
//    });

//    describe("bottom tabbaritem1", function() {
//                 console.log('bottom tabbaritem1 update style');
//      var styles = [
//        {"key": "text", "value": "Item1X"},
//        {"key": "opacity", "value": 0.5},
//        {"key": "backgroundColor", "value": "#00FF00"}//,
//        {"key": "activeIndex", "value": 1}
//      ];
//      createUpdateUIStyleTest("tabbar-item1", styles);
//    });

  });
});
