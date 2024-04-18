#include <iostream>
using namespace std;

int main() {
    int n;
    cin>>n;

    for (int i = 0; i <= n; i++) {
        //if its odd row then print num...
        if (i % 2 != 0) {
            for (int j = 0; j < i; j++) {
                cout << j + 1 << " ";
            }
        } 
        //else print alphabet...
        else {
            for (int j = 0; j < i; j++) {
                cout << char(j+65) << " ";
            }
        }
        cout <<endl;
    }

    return 0;
}