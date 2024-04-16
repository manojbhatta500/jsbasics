void main() {
  print('start');
  List<int> arrList = [];

  for (var i = 0; i <= 100; i++) {
    arrList.add(i);
    print('pussed ${i}into the numArray');
  }
  print(arrList);
  print(arrList.length);
  // var lenght = arrList.length;

  for (var i = 0; i <= arrList.length; i++) {
    arrList.remove(i);
    print('popped ${i}into the numArray');
  }
  // for (var i = 0; i <= 100; i++) {
  //   arrList.remove(i);
  //   print('popped ${i}into the numArray');
  // }
  print(arrList);
  print(arrList.length);
}
