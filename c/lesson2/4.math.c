#include <stdio.h>

int main() {
  int n, a = 3, b = 4;
  printf("a = %d, b = %d\n", a, b);
  a ^= b;
  b ^= a;
  a ^= b;
  printf("a = %d, b = %d\n", a, b);
  return 0;
  while (~scanf("%d", &n)) {
    if (n & 1) {
      printf("%d is odd\n", n);
    }
    printf("%d is even\n", n);
  }

  return 0;
}