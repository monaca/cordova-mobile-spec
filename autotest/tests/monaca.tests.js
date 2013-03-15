/*
 * Monaca Tests
 */

describe("Monaca", function() {

  describe("retrieveUIStyle", function() {

    it("should return a header title", function(){
      var callback = jasmine.createSpy().andCallFake(function(v) {
        expect(v).toBe("UI Demo");
      });
      
      runs(function() {
        monaca.retrieveUIStyle("header", "title", callback);
      });

      waitsFor(function() { return callback.wasCalled; }, "callback not done.");
    });
    
  });
  
  describe("updateUIStyle", function() {
  
  	it("should update header title", function() {
  	  var text = "Updated";
  	  
  	  monaca.updateUIStyle("header", "title", text);
  	  
  	  var callback = jasmine.createSpy().andCallFake(function(v) {
        expect(v).toBe(text);
      });      
      runs(function() {
        setTimeout(function() {
          monaca.retrieveUIStyle("header", "title", callback);
        }, 1000);
      });
      waitsFor(function() { return callback.wasCalled; }, "retrieve callback not done.");
  	});
  	
  });
  
});
