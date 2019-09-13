var john = {
    name: 'john',
    age: 23,
    dateOfBirth: 1994,
    job:'teacher',
    presentation: function (style, timeOfDay){
        if(style === 'formal'){
        console.log('Good ' + timeOfDay + ' Ladies and Gentlemen, Im ' + this.name + ',' + ' Im a ' + this.job + ' and Im ' + this.age + ' years old.');
    }else if (style === 'friendly'){
        console.log('Hey! Whats up, Im ' + this.name + ' I am a ' + this.job + ' and I am ' + this.age + ' years old. Have a nice ' + timeOfDay);
    }
  }
};

var emily = {
    name: 'Emily',
    age: 23,
    dateOfBirth: 1995,
    job: 'Designer'
    

};

john.presentation('formal', 'morning');

//allows you to set the this variable.
john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


var years = [1990, 1996, 1998, 1999, 1990];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}


function calculateAge(element){
    return 2016 - element;
}


function isOfFullAge(limit, element){
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isOfFullAge.bind(this, 20));

console.log(fullJapan);
console.log(ages);


// USING john.presentation.apply(emily, ['friendly, 'afternoon]). Because there is no array.