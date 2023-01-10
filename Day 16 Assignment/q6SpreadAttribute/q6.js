function maximum() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var val = Math.max.apply(Math, ar);
    console.log(val);
}
maximum(1, 2, 3, 4, 5);
maximum(11, 33, 55, 66);
maximum(112, 1, -2, 234);
maximum(-1, -2, -3);
