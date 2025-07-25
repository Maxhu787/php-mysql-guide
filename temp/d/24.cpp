#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;

  if(n == 1 || n == 2) {
    cout << 1 << "\n";
    return 0;
  }

  int a[n];
  a[1] = 1, a[2] = 1;
  for(int i = 3; i <= n; i++) {
    a[i] = a[i-1] + a[i-2];
  }
  cout << a[n] << "\n";
}