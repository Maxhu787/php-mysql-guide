#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;

  int a[n];
  for(int &i : a) cin >> i;

  for(int i = 0; i < n; i++) {
    cout << a[i] << " "[i == n-1];
  }
  return 0;
}
