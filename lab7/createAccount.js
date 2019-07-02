(function(){
    "use strict";
    const accountCreator = (function(){
        let accountName; 
        let amount; 
        return {
            createAccount: function(name, amt){
                accountName = name;
                amount = amt;
                return {name: accountName, balance: amount};
            }
        }
    })();
    const accountInfoList = [];

    function createNewAccount(){
        const newAccount = accountCreator.createAccount(document.getElementById("accountname").value, document.getElementById("deposit").value);
        accountInfoList.push(newAccount);
        document.getElementById("display").value = '';
        for(const account of accountInfoList){
            document.getElementById("display").value += "Account Name:" + `${account.name}` + ", Balance: " + `${account.balance}; ` + "\n";
        }
    }
    window.onload = function(){document.getElementById("create").onclick = createNewAccount;}
})();
