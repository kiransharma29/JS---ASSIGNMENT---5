console.log("class in js");

class user {
    constructor(name, age, email){
     this.name = name;
     this.age = age;
     this.email = email;   
     this.coins=0;
     this.courses=[];
    }
    login()
    {
        console.log(`${this.name} has logged in`);
    }
    logout()
    {
        console.log(`${this.name} has logged out`);
    }
}

class Moderator extends user{
    addCoins(user,coin){
        coin = coin+1;
        user.coin = coin;
        console.log(user);
    }
    removeCoins(user, coin){
        coin = coin - 1;
        user.coin = coin;
        console.log(user);
    }
}

class Admin extends Moderator{
    addCourse(user, course){
        user.courses.push(course);
        console.log(user);
    }
    deleteCourse(user){
        user.courses.pop();
        console.log(user);
    }
}


let user1 = new user('Kiran', 21, 'sailaxmikiran29@gmail.com');
let mod = new Moderator('kittu', 20, 'challakiran29@yahoo.com');
let admin = new Admin('kethan', 22, 'kethantkyt@gmail.com');
mod.addCoins(user1, 12);
console.log(mod);
mod.removeCoins(user1, 12);
admin.addCourse(mod, 'AI');
admin.addCourse(mod, 'python');
admin.addCourse(user1, 'JAVASCRIPT');
admin.deleteCourse(user1);
