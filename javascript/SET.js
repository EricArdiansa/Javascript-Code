/* Set
Struktur data yang akan kita bahas berikutnya adalah Set. 
Set sederhananya merupakan kumpulan nilai (set of values). 
Hal yang membedakan Set dengan struktur data yang lain adalah data pada 
Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga 
bersifat unik dan tidak ada duplikasi. Perhatikan contoh deklarasi Set di bawah ini: */

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Pada kode di atas terdapat beberapa angka yang duplikat, yaitu angka 1 dan 4. 
Secara otomatis Set akan membuang angka yang sama, sehingga nilai yang tersimpan adalah {1, 4, 6}.

Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
*/
const numberSet2 = new Set([1, 4, 6, 4, 1]);
numberSet2.add(5);
numberSet2.add(10);
numberSet2.add(6);

console.log(numberSet2);

/* output
Fungsi add() hanya menerima satu argumen. 
Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. 
Nilai yang duplikat akan diabaikan.
*/
const numberSet3 = new Set([1, 4, 6, 4, 1]);
numberSet3.add(5);
numberSet3.add(10);
numberSet3.add(6);

numberSet3.delete(4);

console.log(numberSet3);

/* output
Ingat bahwa Set tidak memiliki urutan atau index, 
sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, 
bukan index-nya.
*/
