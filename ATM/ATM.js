var ATM = {
    is_auth: false, 
    current_user:false,
    current_type:false,
     
    // all cash of ATM
    cash: 2000,
    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],

    // authorization
    auth: function(number, pin) {
    	for (var key in users) {
 			if (number == users["number"] && pin == users["pin"]) {
 				return is_auth = true;
 			} else return "Wrong password";
 		}
    },

    // check current debet
    check: function() {
    	if (this.is_auth) {
    		console.log(123);
 			return users["debet"];
 		} else {
 			console(123123);
 		}
    },

    // get cash - available for user only
    getCash: function(amount) {
    	if (is_auth) {
    		if (amount > users["debet"]) {
    			return "Not enought money"
    		} else {
 				users["debet"] -= amount;
 			}
 		} else { 
 			return "You are not login in";
 		}
    },

    // load cash - available for user only
    loadCash: function(amount){
 		if (is_auth) {
 			users["debet"] += amount;
 		} else {
 			return "You are not login in";
 		}
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {
 
    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {
 
    },
    // log out
    logout: function() {
    	if (is_auth) {
 			is_auth = false;
 		} else {
 			return "you are not login in";
 		}
    }
};