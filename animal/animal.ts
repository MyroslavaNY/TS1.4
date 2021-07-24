interface Animal{
    moves:string;
    speak:string;
    info():any
}



class Cat implements Animal{
    moves:string;
    speak:string;
    info():string{
        return (
            this.info()
        )
    };

}
class Bird implements Animal{
    moves:string;
    speak:string;
    info():string{
        return (
            this.info()

        )
    };

}
class Fish implements Animal{
    moves:string;
    speak:string;
    info():string{
        return (
            this.info()

        )
    };

}
