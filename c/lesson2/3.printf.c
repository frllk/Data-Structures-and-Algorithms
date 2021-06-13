#include <stdio.h>

int main() {
  int n;
  char str[100] = {0};
  scanf("%d", &n);        // 标准输入对应的文件描述符stdin
  printf("n = %d\n", n);  // 标准输出的文件描述符stdout
  sprintf(str, "%d.%d.%d.%d", 192, 168, 1, 2);
  printf("str = %s\n", str);
  FILE* fout =
      fopen("output", "w");  // 存储的是对于某个文件操作之后的文件描述符的内容
  //  r: 文件如果没有会报错， w：文件如果没有会创建
  // fout：文件描述符
  // fprintf(fout, "%s\n", str);
  fprintf(stdout, "stdout = %s\n", str);
  fprintf(stderr, "stderr = %s\n", str);
  // > 输出重定向
  return 0;
}