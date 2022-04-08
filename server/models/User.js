class User {
    constructor(name , password , email){
        this.name = name;
        this.password = password;
        this.email = email;
        this.id ="user" + Date.now()
        this.isloggedIn = true

    }
    singIn (){
        this.isloggedIn = true
    }
    singOut(){
        this.isloggedIn = false
    }

}
export default User