/**
 * So these are all encapsulated in the wallet class.And then we're also we also have data hiding
    Because balance transactions, processWithdraw, processDeposit these.
 * These are hidden from the user of the wallet class or the wallet object.
 */

class Wallet{
    /*@&@&@*****Now, again, I've said it a bunch of times that adding the underscore doesn't prevent you from accessing these from outside of the class.
     For solving this problem we have class fields or private fields.
     and the syntax is remove constructor and add the required properties with hash(#).
     But I think it is definitely the future of, of being able to have private methods I should say private fields.
    */

   /* constructor(){
        this._balance = 0;
        this._transactions = [];
    }
   */
    #balance = 0;
    #transactions = [];
   
    deposit(amount){
        this.#processDeposit(amount);
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log('Requested amount is greater than balance...');
            return;
        };
        this.#processWithdraw(amount);
        this.#balance -= amount;
    }
    /*
     * We could create a function so we could say get balance and then we can just return this dot, hash balance.
     */
    get balance(){
        return this.#balance;
    };

    get transactions(){
        return this.#transactions;
    }

    /*
    Now, this is going to be a private method because there's no reason for the user of this to access process deposit.
    It's something that's going to happen when they make a deposit, when they call this method.
     */

    /*
    Abstraction....
    And this goes back to the example I gave you for abstraction with like with your car.
    You don't have to know about that stuff in order to use your car, likewise you no need to know 
     these process deposit and withdraw. 
    */
    #processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this.#transactions.push({
            type:'Deposit',
            amount,
        });
    };

    #processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);

        this.#transactions.push({
            type:'Withdraw',
            amount,
        })
    }
}

const amount = new Wallet();
amount.deposit(3000000);
amount.withdraw(500000);
amount.deposit(300000);
amount.withdraw(50000);
amount.deposit(10000);
amount.withdraw(20000);
amount.deposit(6000);
amount.withdraw(1000);
console.log(amount.transactions);
console.log(amount.balance);