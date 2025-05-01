package UTS;
class Pertunjukan {
    String judul;
    String tanggal;
    String lokasi;
    int durasi;
    int jumlahTiket;

    static Pertunjukan[] daftar = new Pertunjukan[7];
    static int jumlah = 0;

    Pertunjukan(String judul, String tanggal, String lokasi, int durasi, int jumlahTiket) {
        this.judul = judul;
        this.tanggal = tanggal;
        this.lokasi = lokasi;
        this.durasi = durasi;
        this.jumlahTiket = jumlahTiket;
    }

    void tampilkanInfo() {
        System.out.println("Judul         : " + judul);
        System.out.println("Tanggal       : " + tanggal);
        System.out.println("Lokasi        : " + lokasi);
        System.out.println("Durasi        : " + durasi + " menit");
        System.out.println("Jumlah Tiket  : " + jumlahTiket);
        System.out.println("------------------------------------");
    }

    static void tambahData(Pertunjukan p) {
        if (jumlah < daftar.length) {
            daftar[jumlah] = p;
            jumlah++;
            System.out.println("Pertunjukan berhasil ditambahkan.");
        } else {
            System.out.println("Array penuh. Tidak dapat menambah data.");
        }
    }

    static void tampilkanSemua() {
        System.out.println("\n=== Jadwal Semua Pertunjukan ===");
        for (int i = 0; i < jumlah; i++) {
            daftar[i].tampilkanInfo();
        }
    }


    static void tampilkanDurasiTerlama() {
        if (jumlah == 0) {
            System.out.println("Belum ada data pertunjukan.");
            return;
        }

        Pertunjukan max = daftar[0];
        for (int i = 1; i < jumlah; i++) {
            if (daftar[i].durasi > max.durasi) {
                max = daftar[i];
            }
        }

        System.out.println("\n=== Pertunjukan dengan Durasi Terlama ===");
        max.tampilkanInfo();
    }

    static void tampilkanTotalTiket() {
        int total = 0;
        for (int i = 0; i < jumlah; i++) {
            total += daftar[i].jumlahTiket;
        }
        System.out.println("\nTotal Tiket dari Semua Pertunjukan: " + total);
    }
}

public class ManajemenTeater {
    public static void main(String[] args) {

        Pertunjukan.tambahData(new Pertunjukan("A Minecraft Movie", "2025-04-25", "Teater Timbul", 120, 150));
        Pertunjukan.tambahData(new Pertunjukan("Laskar Pelangi", "2025-05-10", "XXI Kemayoran", 90, 200));
        Pertunjukan.tambahData(new Pertunjukan("Jumbo", "2025-06-01", "Bukit Kencana", 150, 180));

        Pertunjukan.tampilkanSemua();
        Pertunjukan.tampilkanDurasiTerlama();
        Pertunjukan.tampilkanTotalTiket();
    }
}
