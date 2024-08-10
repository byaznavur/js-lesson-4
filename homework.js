// UYGA VAZIFA

//! For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
// let a = 1;
// let b = 12;
// for (let i = a; i <= b; i++) {
//   console.log(i);
// }
//! For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.
// let a = 1;
// let b = 12;
// for (let i = b; i > a; i--) {
//   console.log(i);
// }

//! For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let res;
// for (let i = 0; i <= 10; i++) {
//   res = i * 1200;
//   console.log(res);
// }

//! For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let res;
// for (let i = 1; i <= 2; i += 0.1) {
//   res = i * 1200;
//   console.log(res.toFixed());
// }
//! For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
// let res = 0;
// for (let i = 1; i <= 10; i++) {
//   res += i;
// }
// console.log(res);
//! For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
// let res = 1;
// for (let i = 1; i <= 5; i++) {
//   res *= i;
// }
// console.log(res);
//! For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
// let res = 1;
// for (let i = 1; i <= 5; i++) {
//   res += i**2;
// }
// console.log(res);
//! For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n
// let res = 0;
// for (let i = 1; i <= 2; i++) {
//   res += 1 / i;
// }
// console.log(res);
//! For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n
// let res = 1;
// for (let i = 1; i <= 10; i++) {
//   res *= i / 10;
// }
// console.log(res);
//! For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// n^2=1+3+5+... + (2*n-1)
// Har bir qo'shiluvchidan keyin natijani ekranga chiqarib boring. Natijda ekranda 1 dan n gacha bo'lgan sonlar kvadrati chiqariladi.
// let n = 2;
// let res = 0;
// let sum;

// for (let i = 0; i <= n; i++) {
//   res += i ** (2 * n - 1);
//   sum = i ** (2 * n - 1);
//   console.log(sum);
// }

// console.log(res);
//! For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;
// let a = 10;
// let n = 10,
//   res = 1;
// for (let i = 0; i <= n; i++) {
//   res = a ** i;

//   let sum = `${a} ning ${i} chi darajasi = ${res}`;
//   console.log(sum);
// }

//! For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.
// a^n=a*a*a...a;
// let a = 10;
// let n = 10,
//   res = 1;
// for (let i = 0; i <= n; i++) {
//   res = a ** i;

//   sum = `${a} ning ${i} chi darajasi = ${res}`;
//   console.log(sum);
// }
//! For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a^1+a^2 + a^3 + ... a^n
// let a = 10;
// let n = 10;
// let m = 0,
//   res = 1;
// for (let i = 0; i <= n; i++) {
//   res = a ** i;

//   let sum = `${a} ning ${i} chi darajasi = ${res}`;
//   m += res;
//   console.log(sum);
// }

// console.log(m);
//! For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!

// let n = 4;
// let S = 0;
// for (let i = 0; i <= n; i++) {
//   let res = 1;
//   for (let j = 1; j <= i; j++) {
//     res *= j;
//   }
//   S += res;
// }

// console.log(S);
//! For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^K + 2^K + ... + N^K
// let K = 2;
// let N = 10;
// let res = 0;
// for (let i = 0; i <= N; i++) {
//   res += i ** K;
// }

// console.log(res);
//! For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.'
// S = 1^1 + 2^2 + … + N^N
// let N = 2;
// let res = 0;
// for (let i = 1; i <= N; i++) {
//   res += i ** i;
// }
// console.log(res);
//! For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.
// let A = 1;
// let B = 10;
// for (let i = A; i <= B; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(i);
//   }
// }
//! For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.

// let num = 3,
//   res = 0,
//   sum = 0;
// for (let i = 0; i <= num; i++) {
//   if (num % i == 0) {
//     res += i;
//     sum++;
//   }
// }

// console.log(res, sum);
//! For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
// let num = 10,
//   res = 0,
//   sum = 0,
//   n;

// for (let i = 0; i <= num; i++) {
//   if (num % i == 0) {
//     res += i;
//     sum++;
//     if (sum > 2) {
//       n = "Tub son emas";
//     }
//   } else {
//     n = "Tub son ";
//   }
// }

// console.log(`${num} ni ${sum} ta bo'luvchisi bor va ${n}`);

// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let N = 5;
// for (let i = 1; i <= N; i++) {
//   let res = " ";
//   for (let j = 1; j <= i; j++) {
//     res += j + " ";
//   }
//   console.log(res);
// }

//? While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
// let A = 12;
// let B = 5;
// let count = 0;
// while (A >= B) {
//   A -= B;
//   count++;
// }

// console.log(A + "ning bo'sh qisimi");

//! While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
// let A = 12;
// let B = 5;
// let count = 0;
// while (A >= B) {
//   A -= B;
//   count++;
// }

// console.log(A + " bo'sh qisimi" + " va " + count + " ta joylashgan");
// !While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

// let n = 25;
// let res;
// while (n > 0) {
//   if (Number.isInteger(Math.sqrt(n))) {
//     res = "3 ning darajasi";
//     break;
//   } else {
//     res = "3 ning darajasi emas";
//     break;
//   }
// }
// console.log(res);

// ! 2 - usul

// let n = 9;

// while (n > 1) {
//   if (n % 3 !== 0) {
//     console.log("3 ning darajasi emas");
//     break;
//   }
//   n /= 3;
// }

// if (n === 1) {
//   console.log("3 ning darajasi");
// }

//! While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.
// let n = 32,
//   m = 6,
//   count = 0;

// while (n >= m) {
//   n -= m;
//   count++;
// }

// console.log(n + " qoldiq", count + " bo'linma");
//! While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.
// let n = 325; // Berilgan son
// let sum = 0; // Raqamlar yig'indisini saqlash uchun
// let count = 0; // Raqamlar sonini saqlash uchun
// let res = "";
// while (n > 0) {
//   let digit = n % 10; // Sonning oxirgi raqamini olish
//   sum += digit;
//   res += digit; // Yig'indiga qo'shish
//   count++; // Raqamlar sonini oshirish
//   n = Math.floor(n / 10); // Sonni bir raqamga qisqartirish
// }

// console.log("Raqamlar yig'indisi:", sum);
// console.log("Raqamlar soni:", count);
// console.log("Raqamlar teskarsi:", res);
//! While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.
// let n = 325; // Berilgan son
// let sum = 0; // Raqamlar yig'indisini saqlash uchun
// let count = 0; // Raqamlar sonini saqlash uchun

// while (n > 0) {
//   let digit = n % 10; // Sonning oxirgi raqamini olish
//   sum += digit; // Yig'indiga qo'shish
//   count++; // Raqamlar sonini oshirish
//   n = Math.floor(n / 10); // Sonni bir raqamga qisqartirish
// }

// console.log("Raqamlar yig'indisi:", sum);
// console.log("Raqamlar soni:", count);
//! While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.
// let n = 325; // Berilgan son
// let sum = 0; // Raqamlar yig'indisini saqlash uchun
// let count = 0; // Raqamlar sonini saqlash uchun

// while (n > 0) {
//   let digit = n % 10; // Sonning oxirgi raqamini olish
//   if (digit == 2) {
//     console.log("Ikki raqam bor");
//   }
//   sum += digit; // Yig'indiga qo'shish
//   count++; // Raqamlar sonini oshirish
//   n = Math.floor(n / 10); // Sonni bir raqamga qisqartirish
// }

// console.log("Raqamlar yig'indisi:", sum);
// console.log("Raqamlar soni:", count);
//! While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.
// let n = 325; // Berilgan son
// let sum = 0; // Raqamlar yig'indisini saqlash uchun
// let count = 0; // Raqamlar sonini saqlash uchun

// while (n > 0) {
//   let digit = n % 10; // Sonning oxirgi raqamini olish
//   if (digit % 2 !== 0) {
//     console.log("Toq raqam bor");
//     break;
//   }
//   sum += digit; // Yig'indiga qo'shish
//   count++; // Raqamlar sonini oshirish
//   n = Math.floor(n / 10); // Sonni bir raqamga qisqartirish
// }

// console.log("Raqamlar yig'indisi:", sum);
// console.log("Raqamlar soni:", count);
//! While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754
// let n = 1345431; // Berilgan son
// let original = n; // Asl sonni saqlash
// let reversed = 0; // Teskari tartibda yig'ilgan son
// let digit;

// while (n > 0) {
//   digit = n % 10; // Sonning oxirgi raqamini olish
//   reversed = reversed * 10 + digit; // Teskari tartibda yig'ish
//   n = Math.floor(n / 10); // Sonni bir raqamga qisqartirish
// }

// Palindromikligini tekshirish
// if (original === reversed) {
//   console.log("True"); // Palindromik son
// } else {
//   console.log("False"); // Palindromik emas
// }

//! While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
let n = 9;

while (n > 0) {
  let digit = n % 10;
  if (digit % 2 === 0) {
    console.log(digit + " Tub son emas");
    break;
  } else {
    console.log(digit + " Tub son");
    break;
  }
}
