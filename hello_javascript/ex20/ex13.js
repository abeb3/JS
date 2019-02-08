var value = 100;

var myObject = {
    value : 1,
    fucn1 :  function(){
        this.value += 1;
        console.log('func1() calles this value  : ' + this.value);

        func2 = function () {
            this.value += 1;
            console.log('func2() calles this value  : ' + this.value);

            func3 = function () {
                this.value += 1;
                console.log('func3() calles this value  : ' + this.value);
            }
            func3();
        }
        func2();
    }
};

myObject.fucn1();