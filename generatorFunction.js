function* loop() {
    for(let i = 1; i<=100;i++) {
        yield i;
        const counter = loop();
        console.log(counter.next().value);
    }
}