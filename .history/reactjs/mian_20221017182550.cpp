#include<iostream>
using namespace std;

void input(int **arr, int col, int row){
    for (int i = 0; i < row; i++){
        for (int j = 0; j < col; j++){
            cin >> arr[i][j];
        }
    }
}

void output(int **arr, int col, int row){
    for (int i = 0; i < row; i++){
        for (int j = 0; j < col; j++){
           cout << arr[i][j] << " ";
        }
        cout << endl;
    }
}

int main(){
    
    return 0;
}