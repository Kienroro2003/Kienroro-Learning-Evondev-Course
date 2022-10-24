#include <bits/stdc++.h>
#include <iostream>
#include <math.h>
using namespace std;

long double func(long long n)
{
    return (long double)(1000000000.0 / (n + 1));
}
void _setprecision(long double d)
{
    if (floor(d) * floor(d) == ceil(d * d))
        cout << (long long)d << ".0"
             << "\n";
    else
        cout << fixed << setprecision(3) << d << "\n";
}
int main()
{
    int str;
    cin >> str;
    for (int i = 0; i < str; i++)
    {
        long long n;
        cin >> n;
        long double res = func(n);
        _setprecision(res);
    }

    return 0;
}