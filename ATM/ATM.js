var ATM = {
    is_auth: false,
    current_user: false,
    current_type: false,

    // all cash of ATM
    cash: 2000,
    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],

    // authorization
    auth: function (number, pin) {
        if (number === this.users[0]['number'] && pin === this.users[0]['pin'] && this.is_auth === false) {
            ATM.current_type = 'admin';
            ATM.current_user = this.users[0];
            ATM.is_auth = true;
            console.log("Admin logged in");
        } else if (number === this.users[1]['number'] && pin === this.users[1]['pin']) {
            ATM.current_type = 'user';
            ATM.current_user = this.users[1];
            ATM.is_auth = true;
            console.log("User logged in");
        } else {
            console.log('Wrong number or pin');
            return false;
        }
    },

    // check current debet
    check: function () {
        if (ATM.current_user) {
            console.log(ATM.current_user.debet);
        } else {
            console.log('You are not login in')
        }
    },

    // get cash - available for user only
    getCash: function (amount) {
        if (this.is_auth && ATM.current_type === "user") {
            if ((ATM.current_user.debet - amount) >= 0) {
                ATM.current_user.debet -= amount;
                console.log('Done')
            } else {
                console.log("Not enough money in ATM");
            }
        }
    },

    // load cash - available for user only
    loadCash: function (amount) {
        if (ATM.is_auth && ATM.current_type === "user") {
            ATM.current_user.debet += amount;
            console.log("Cash successfully added");
        }
    },

    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function (addition) {
        if (this.is_auth && this.current_type === "admin") {
            this.cash += addition;
            console.log("Cash successfully added");
        } else {
            console.log("You are not admin");
        }
    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function () {

    },

    // log out
    logout: function () {
        if(this.is_auth) {
            this.is_auth = false;
            this.current_user = false;
            this.current_type = false;
            console.log('logout');
        } else {
            console.log('You are not login in')
        }
    }
};