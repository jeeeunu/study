#include <stdio.h>

int main(void) {
    printf("����Ʈ������а� ������(202232190)");
    printf("\n");

    for (int number = 1000; number < 10000; number++) {
        int division = number / 100;
        int percent = number % 100;
        int sum = division + percent;

        if (sum * sum == number) {
            printf("���: %d", number);
            printf("\n");
        }
    }
}
