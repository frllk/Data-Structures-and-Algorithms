#include <stdio.h>

int main()
{
  // 读入一行字符串（可能包含空格），输出这个字符串中字符的梳理。
  // 开通100位的数组并进行清空操作
  char str[100] = {0};
  // c语言支持正则表达式  []字符匹配集  []中匹配的内容都会读到str中
  // 除了\n
  int ret = 0;
  while ((ret = scanf("%[^\n]s", str)) != -1)
  {
    getchar(); // 强行吞掉上一个字符
    printf("%s ret = %d\n", str, ret);
  }
  return 0;
}