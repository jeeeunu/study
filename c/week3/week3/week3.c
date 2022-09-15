/* 두개의 숫자의 합을 계산하는 프로그램 */
#include <stdio.h>

int main(void)
{
	int x; // 첫번째 정수를 저장할 변수
	int y;	// 두번째 정수를 저장할 변수
	int sum,diff,mul,div; //두 정수 간의 연산의 결과를 저장하는 변수

	x = 20;	// 변수 x에 2를 저장
	y = 30;	// 변수 y에 10을 저장

	sum = x + y;
	printf("두수의 합: %d", sum);

	diff = x + y;
	mul = x * y;
	div = x / y;

	double w;
	double h;
	double area;
	double perimeter;

	w = 10.0;
	h = 5.0;
	area = w * h;
	perimeter = 2 * (w + h);

	printf("사각형의 넓이: %lf\n", area);
	printf("사각형의 둘레:%lf\n", perimeter);

}