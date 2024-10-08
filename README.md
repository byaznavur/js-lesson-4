# js-lesson-4

### Scopes

### **Scope Nima?**

- **"Scope"** dasturdagi o'zgaruvchilar, funksiyalar, va obyektlarning ma'lum bir qismda mavjudligi va ko'rinishini belgilaydi.
- Scope dasturdagi o'zgaruvchilar va funksiyalar qaerda foydalanilishi mumkinligini va ular qanday o'zaro aloqada bo'lishini belgilaydi.

### **Scope Turlari**

1. **Global Scope**: Dasturdagi barcha joydan foydalanish mumkin bo'lgan scope. Global o'zgaruvchilar va funksiyalar global scope'da mavjud bo'ladi.
2. **Block Scope**: `{}` qavslar ichida mavjud bo'lgan scope. `let` va `const` bilan e'lon qilingan o'zgaruvchilar block scope'da mavjud bo'ladi.
3. **Local yoki Function Scope**: Funksiya ichida e'lon qilingan o'zgaruvchilar faqat o'sha funksiyada mavjud bo'ladi.
4. **Module Scope**: ES6 modullari orqali yaratilgan scope. Modul ichidagi o'zgaruvchilar faqat shu moduldan foydalanishga ruxsat beradi.
5. **Lexical Scope**: Dasturdagi funksiyalarni yozilgan joyiga qarab qaysi scope'da mavjudligini belgilaydi. Lexical scoping yordamida ichki funksiyalar tashqi funksiyalarning scope'dan foydalanishi mumkin.

### `var` vs `let`

- **`var`**: Global yoki funksional scope'ga ega. O'zgaruvchi `var` yordamida e'lon qilinganda, u faqat o'sha blok ichida emas, balki boshqa bloklarda ham mavjud bo'ladi. Bu "hoisting" (yuklab olish) xususiyatiga ega bo'ladi.
  ```jsx
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // 20
  }
  console.log(x); // 20
  ```
- **`let`**: Block scope'ga ega. `let` yordamida e'lon qilingan o'zgaruvchi faqat o'sha blokda mavjud bo'ladi. Hoisting xususiyatiga ega emas.
  ```jsx
  let y = 10;
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  console.log(y); // 10
  ```

### Nima Uchun Loops?

- **Hisoblashni osonlashtirish**: Loops yordamida bir xil kodni takroriy bajarish mumkin.
- **DRY prinsipiga rioya qilish**: "Don't Repeat Yourself" tamoyilini qo'llashga yordam beradi, ya'ni kodni takrorlamaslik.

### Loop Turlari

1. **`for` Loop**
   - **Sintaksis**:
     ```jsx
     for (initializer; condition; iterator) {
       // statements
     }
     ```
   - **Misol**:
     ```jsx
     for (let i = 1; i <= 10; i++) {
       console.log(i);
     }
     ```
   - **Turli Holatlar**:
     - **Boshlang'ichsiz**:
       ```jsx
       let j = 1;
       for (; j <= 10; j++) {
         console.log(j);
       }
       ```
     - **Shartsiz**:
       ```jsx
       for (let j = 1; ; j++) {
         console.log(j);
         if (j > 10) {
           break;
         }
       }
       ```
     - **Iteratorisiz**:
       ```jsx
       for (let j = 1; j < 10; ) {
         console.log(j);
         j += 1;
       }
       ```
     - **Boshlang'ich va Shartsiz**:
       ```jsx
       let j = 1;
       for (; ; j++) {
         console.log(j);
         if (j > 10) {
           break;
         }
       }
       ```
     - **Shartsiz va Iteratorisiz**:
       ```jsx
       let j = 1;
       for (; j <= 10; ) {
         console.log(j);
         j++;
       }
       ```
     - **Hech qanday ifoda yo'q**:
       ```jsx
       let j = 1;
       for (;;) {
         if (j > 10) {
           break;
         }
         console.log(j);
         j++;
       }
       ```
   - **Mashqlar**:
     - 1 - n → oshirish;
     - 1 - n → juft va toq sonlar;
     - 1 - n → 5 ning ko'paytmalari;
     - 10 - 1 → kamaytirish;
     - 100 - 1 → kamaytirish;
     - n - 1 → kamaytirish;
     - a → b yoki b → a;
     - yig'indi va ko'paytma.
2. **`while` Loop**
   - **Sintaksis**:
     ```jsx
     while (condition) {
       // code block to be executed
     }
     ```
   - **Misol**:
     ```jsx
     let count = 1;
     while (count < 10) {
       console.log(count);
       count += 2;
     }
     ```
3. **`do while` Loop**
   - **Sintaksis**:
     ```jsx
     do {
       statements;
     } while (condition);
     ```
   - **Misol**:
     ```jsx
     let count = 0;
     do {
       console.log(count);
       count++;
     } while (count < 5);
     ```

### `break` Kalit So'zi

- **`for` Loop**:
  ```jsx
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
      break;
    }
  }
  ```
- **`while` Loop**:
  ```jsx
  let i = 0;
  while (i < 5) {
    i++;
    console.log(i);
    if (i == 3) {
      break;
    }
  }
  ```

### `continue` Kalit So'zi

- **`for` Loop**:
  ```jsx
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
  ```
- **`while` Loop**:
  ```jsx
  let i = 0;
  while (i < 10) {
    i++;
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
  ```

### Web-Development

- **HTML**:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <div id="row"></div>
      <script src="./main.js"></script>
    </body>
  </html>
  ```
- **CSS**:
  ```css
  #row {
    display: flex;
  }

  .card {
    width: 33.33333%;
    padding: 15px;
  }

  .card-inner {
    border: 1px solid #555;
    border-radius: 10px;
  }
  ```
- **JavaScript**:
  ```jsx
  let list = "";
  let card =
    "<div class='card'><div class='card-inner' style='border-radius: 15px'><img width='100%'style='border-radius: 15px'src='<https://www.bakeryandsnacks.com/var/wrbm_gb_food_pharma/storage/images/9/9/4/2/2162499-5-eng-GB/Natural-and-organic-food-product-trends-shape-sales-success.jpg'alt='product>'/><h2 style='text-align: center; font-size: 40px'>Snacks</h2></div></div>";

  for (let i = 1; i <= 3; i++) {
    list += card;
  }

  document.getElementById("row").innerHTML = list;
  ```

### Intervyu Savollari

1. **Scope** nima? Va uning turlari qanday?
2. **`var`** va **`let`** o'rtasidagi farqlar qanday?
3. **Loops** nima uchun ishlatiladi va ularning turlari qanday?
4. **`for`** loop qanday ishlaydi? Har xil holatlar uchun misollar keltiring.
5. **`while`** va **`do while`** loop'lari o'rtasidagi farqlar qanday?
6. **`break`** va **`continue`** kalit so'zlari qanday ishlaydi va ular qachon foydalaniladi?
7. **`while`** loopining cheksiz siklga kirishining oldini olish uchun qanday choralar ko'rish

mumkin? 8. JavaScript'da **scoping** nima? Block scope qanday ishlaydi? 9. **HTML** va **CSS** yordamida qanday qilib **JavaScript** orqali dinamik ravishda kontent yaratishingiz mumkin? 10. **for** loop orqali 1 dan 100 gacha bo'lgan juft sonlarni qanday chiqarasiz?
