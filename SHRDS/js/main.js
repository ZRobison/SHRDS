var app = {
		
	initialize: function() {
		var self = this;
		
		//Detect if HASH changes
		$(window).on('hashchange',function(){ 
			self.route();
		});
		
		//URL detection
		this.prevailingStartURL = /^#prevailing1/;
		this.SHRURLS = [/^#WHR/, /^#WTR/, /^#WPR/, /^#ZWR/, /^#STR/, /^#LDR/, /^#RCR/, /^#OHR/, /^#REV/, /^#SHR/];
		
		//remove
		self.route();
	},
		
	
	
	route: function() {
		var hash = window.location.hash;
		if (!hash) {
			new LogonView().render();
			return;
		} else if (hash.match(app.SHRURLS[0])){
			new SHRView().render("WHR"));
		}else if (hash.match(app.SHRURLS[1])){
			new SHRView().render("WTR"));
		} else if (hash.match(app.SHRURLS[2])){
			new SHRView().render("WPR"));
		} else if (hash.match(app.SHRURLS[3])){
			new SHRView().render("ZWR"));
		} else if (hash.match(app.SHRURLS[4])){
			new SHRView().render("STR"));
		} else if (hash.match(app.SHRURLS[5])){
			new SHRView().render("LDR"));
		} else if (hash.match(app.SHRURLS[6])){
			new SHRView().render("RCR"));
		} else if (hash.match(app.SHRURLS[7])){
			new SHRView().render("OHR"));
		} else if (hash.match(app.SHRURLS[8])){
			new SHRView().render("REV"));
		} else if (hash.match(app.SHRURLS[9])){
			new SHRView().render("SHR"));
		}else if (hash.match(app.prevailingURL)) {
			new PrevailingView().render());
        
		} 
	}
};


