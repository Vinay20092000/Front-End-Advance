interface GPS{
    getCoordinates() :void;
}

interface MediaPlayer{
    start():void;
    stop():void;
    pause():void;
}

class SmartPhone implements GPS, MediaPlayer{
    getCoordinates(): void {
        console.log(`The coordinates are 7,49`);
    }

    start(): void {
        console.log(`Music has started`);
    }

    stop():void {
        console.log(`Music has stopped`);
    }

    pause():void {
        console.log(`Music has paused`);
    }
}

const myPhone: SmartPhone = new SmartPhone();

myPhone.getCoordinates();
myPhone.start();
myPhone.pause();
myPhone.stop();