function debounce(fn, delay){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);

    };
}

function sayHello(){
    console.log("Hello");
}

const debouncedHello = debounce(sayHello, 1000);

debouncedHello();
debouncedHello();
debouncedHello();