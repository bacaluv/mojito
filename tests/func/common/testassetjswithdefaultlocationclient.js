/*
 * This is a basic func test for a Common application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Common: assetjswithdefaultlocationclient");

    suite.add(new Y.Test.Case({

	  "test assetjswithdefaultlocationclient": function() {
          var that = this;
          Y.one('#assets_default_button').simulate('click');
          that.wait(function(){
	            //check if the scripts are load in the header
	            var pat1 = /\/static\/AssetsMojit\/assets\/js\/js1.js/gi;
	            var pat2 = /\/static\/AssetsMojit\/assets\/js\/js2.js/gi;
	            Y.Assert.areEqual('/static/AssetsMojit/assets/js/js1.js', checkscript(Y.one('head'), 'script', 'src', pat1));
	            Y.Assert.areEqual('/static/AssetsMojit/assets/js/js2.js', checkscript(Y.one('head'), 'script', 'src', pat2));       				
            }, 2000);
        }

     }));

     Y.Test.Runner.add(suite);

     function checkscript(mynode, assetLoc, assetTag, assetPat){
         var mystring;
         mynode.all(assetLoc).each(function (taskNode){
             var mysrc = taskNode.get(assetTag).match(assetPat);
             if(mysrc!=null){ mystring=mysrc; }   
         });
         return mystring;
     }
});