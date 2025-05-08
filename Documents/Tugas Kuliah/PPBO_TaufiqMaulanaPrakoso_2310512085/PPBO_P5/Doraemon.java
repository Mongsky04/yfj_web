import java.util.ArrayList;

public class Doraemon {
    public static void main(String[] args) {
        // Membuat objek array list
        ArrayList kantongAjaib = new ArrayList();

        // Mengisi kantong ajaib dengan 5 benda
        kantongAjaib.add("Senter Pembesar");
        kantongAjaib.add(532);
        kantongAjaib.add("tikus");
        kantongAjaib.add(1231234.132);
        kantongAjaib.add(true);

        // Menghapus tikus dari kantong ajaib
        kantongAjaib.remove("tikus");

        // Menampilkan isi kantong ajaib
        System.out.println(kantongAjaib);

        // Menampilkan banyak isi kantong ajaib
        System.out.println("Kantong ajaib berisi " + kantongAjaib.size() + " item");
    }
}
