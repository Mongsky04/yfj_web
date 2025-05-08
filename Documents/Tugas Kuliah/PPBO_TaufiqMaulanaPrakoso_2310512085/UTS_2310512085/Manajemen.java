import java.util.Scanner;

class Pertunjukkan {
    String judul;
    String tanggal;
    String lokasi;
    int durasi;
    int jumlahTiket;
    int hargaTiket;

    static Pertunjukkan[] daftar = new Pertunjukkan[7];
    static int jumlah;

    Pertunjukkan(String judul, String tanggal, String lokasi, int durasi, int jumlahTiket, int hargaTiket) {
        this.judul = judul;
        this.tanggal = tanggal;
        this.lokasi = lokasi;
        this.durasi = durasi;
        this.jumlahTiket = jumlahTiket;
        this.hargaTiket = hargaTiket;
    }

    void tampilkanInfo() {
        System.out.println("Judul         : " + judul);
        System.out.println("Tanggal       : " + tanggal);
        System.out.println("Lokasi        : " + lokasi);
        System.out.println("Durasi        : " + durasi + " menit");
        System.out.println("Jumlah Tiket  : " + jumlahTiket);
        System.out.println("Harga Tiket   : " + hargaTiket);
        System.out.println("------------------------------------");
    }

    static void tampilkanSemua() {
        System.out.println("\n=== Jadwal Semua Pertunjukkan ===");
        for (int i = 0; i < jumlah; i++) {
            daftar[i].tampilkanInfo();
        }
    }

    static void tampilkanDurasiTerlama() {
        if (jumlah == 0) {
            System.out.println("Belum ada data pertunjukkan.");
            return;
        }

        Pertunjukkan max = daftar[0];
        for (int i = 1; i < jumlah; i++) {
            if (daftar[i].durasi > max.durasi) {
                max = daftar[i];
            }
        }

        System.out.println("\n=== Pertunjukkan dengan Durasi Terlama ===");
        max.tampilkanInfo();
    }

    static void tampilkanTotalTiket() {
        int total = 0;
        for (int i = 0; i < jumlah; i++) {
            total += daftar[i].jumlahTiket;
        }
        System.out.println("\nTotal Tiket dari Semua Pertunjukkan: " + total);
    }

    static void tampilkanTotalHarga() {
        int total = 0;
        for (int i = 0; i < jumlah; i++) {
            total += daftar[i].jumlahTiket * daftar[i].hargaTiket;
        }
        System.out.println("\nTotal Pendapatan dari Semua Pertunjukkan: " + total);
    }

    void inputData() {
        if (jumlah >= daftar.length) {
            System.out.println("Penuh, tidak dapat menambah data.");
        } else {
            Scanner scanner = new Scanner(System.in);

            System.out.println("Judul film : ");
            judul = scanner.nextLine();

            System.out.println("Tanggal tayang (2025-04-25) : ");
            tanggal = scanner.nextLine();

            System.out.println("Lokasi tayang : ");
            lokasi = scanner.nextLine();

            System.out.println("Durasi tayang: ");
            durasi = scanner.nextInt();

            System.out.println("Jumlah tiket : ");
            jumlahTiket = scanner.nextInt();

            System.out.println("Harga tiket : ");
            hargaTiket = scanner.nextInt();

            daftar[jumlah] = new Pertunjukkan(judul, tanggal, lokasi, durasi, jumlahTiket, hargaTiket);
            jumlah++; 

            scanner.close();

            System.out.println("Berhasil ditambahkan");
        }
    }

    void tambahkanData(Pertunjukkan dataPertunjukkan) {
        if (jumlah >= daftar.length) {
            System.out.println("Penuh, tidak dapat menambah data.");
        } else {
            daftar[jumlah] = dataPertunjukkan;
            jumlah++;
            System.out.println("Data berhasil ditambahkan");
        }
    }

}

public class Manajemen {
    public static void main(String[] args) {

        Pertunjukkan daftarPertunjukkan = new Pertunjukkan("A Minecraft Movie", "2025-04-25", "Teater Timbul", 120, 150, 100000);
        daftarPertunjukkan.tambahkanData(new Pertunjukkan("Laskar Pelangi", "2025-05-10", "XXI Kemayoran", 90, 200, 80000));
        daftarPertunjukkan.tambahkanData(new Pertunjukkan("Jumbo", "2025-06-01", "Bukit Kencana", 150, 180, 120000));

        daftarPertunjukkan.inputData();
        Pertunjukkan.tampilkanSemua();
        Pertunjukkan.tampilkanDurasiTerlama();
        Pertunjukkan.tampilkanTotalTiket();
        Pertunjukkan.tampilkanTotalHarga();
        
    }
}
