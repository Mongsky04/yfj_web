import java.util.Scanner;

public class Buah {
    public static void main(String[] args) {
        // Membuat array buah-buahan
        String[] buah = new String[5];

        // Membuat scanner
        Scanner scan = new Scanner(System.in);

        // Mengisi data ke array
        for (int i = 0; i < buah.length; i++) {
            System.out.print("Buah ke-" + i + ": ");
            buah[i] = scan.nextLine();
        }

        System.out.println("----------------------------");

        // Menampilkan semua isi array
        for (String b : buah) {
            System.out.println(b);
        }
    }
}
