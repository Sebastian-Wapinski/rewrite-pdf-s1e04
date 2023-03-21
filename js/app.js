const product = {
    name: 'Podstawy JS',
    type: 'book',
    price: {
        value: 49,
    },
    getName() {
        let value = null;
        
        const self = this;
        console.log(this.name);

        function fn() {
            console.log(this);
            value = self.name;
        }

        fn();
        return value;
    }
}

console.log(product.getName());

// z racji tego że this odwołuje się do obiektu przed obiektem w którym jest wywoływany 
// umieszczając go w funkcji wewnątrz funkcji wewnątrz obiektu będzie wskazywał na window
// i dlatego musimy stworzyć najpierw zmienną

