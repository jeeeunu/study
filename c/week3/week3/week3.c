/* �ΰ��� ������ ���� ����ϴ� ���α׷� */
#include <stdio.h>

int main(void)
{
	int x; // ù��° ������ ������ ����
	int y;	// �ι�° ������ ������ ����
	int sum,diff,mul,div; //�� ���� ���� ������ ����� �����ϴ� ����

	x = 20;	// ���� x�� 2�� ����
	y = 30;	// ���� y�� 10�� ����

	sum = x + y;
	printf("�μ��� ��: %d", sum);

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

	printf("�簢���� ����: %lf\n", area);
	printf("�簢���� �ѷ�:%lf\n", perimeter);

}