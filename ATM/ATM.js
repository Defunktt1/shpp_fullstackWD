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
    log: [],

    // authorization
    auth: function (number, pin) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].number === number && this.users[i].pin === pin) {
                this.current_user = i;
                this.is_auth = true;
                this.current_type = this.users[i].type;
                if (this.current_type === "admin") {
                    console.log("Admin login in");
                } else {
                    console.log("User login in");
                }

            }

        }
    },

    // check current debet
    check: function () {
        if (this.is_auth) {
            console.log(this.users[this.current_user].debet);
        } else {
            console.log('You are not login in')
        }
    },

    // get cash - available for user only
    getCash: function (amount) {
        if (this.is_auth) {
            if (this.current_type === "user") {
                if ((this.users[this.current_user].debet- amount) >= 0) {
                    if ((this.cash - amount) >= 0) {
                        this.users[this.current_user].debet-= amount;
                        this.cash -= amount;
                        this.log.push("User got " + amount);
                        console.log("operation is successful");
                    } else {
                        console.log("Error. ATM don`t have enough money");
                    }
                } else {
                    console.log("Error. You don`t have enough money");
                }
            } else {
                console.log("this function is allowed only for users");
            }
        } else {
            console.log("You are not login in");
        }
    },

    // load cash - available for user only
    loadCash: function (amount) {
        if (this.is_auth) {
            if (this.current_type === "user") {
                this.users[this.current_user].debet += amount;
                this.cash += amount;
                this.log.push("User loaded " + amount);
                console.log("You added " + amount + " dollars");
            } else {
                console.log("this function is allowed only for users");
            }
        } else {
            console.log("You are not login in")
        }
    },

    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function (addition) {
        if (this.is_auth) {
            if (this.current_type === "admin") {
                this.cash += addition;
                this.log.push("Admin loaded " + addition);
                console.log("Cash successfully added");
            } else {
                console.log("You are not admin");
            }
        } else {
            console.log("You are not login in");
        }
    },

    // get report about cash actions - available for admin only - EXTENDED
    getReport: function () {
        if (this.is_auth) {
            if (this.current_type === "admin") {
                for (var i = 0; i < this.log.length; i++) {
                    console.log(this.log[i] + "\n");
                }
            }
        } else {
            console.log("You are not login in");
        }
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