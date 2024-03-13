function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celcius").value;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f;
}

function weight(){
    //To convert kgs to lbs
    //Pounds = Kilograms * 2.2
    var kg = document.getElementById("kilograms").value;
    var lbs = kg * 2.2;
    document.getElementById("pounds").value = lbs;
}

function distance(){
    //To convert kms to miles
    //km * 0.62137
    var kms = document.getElementById("kilometers").value;
    var m = kms * 0.62137;
    document.getElementById("miles").value = m;
}