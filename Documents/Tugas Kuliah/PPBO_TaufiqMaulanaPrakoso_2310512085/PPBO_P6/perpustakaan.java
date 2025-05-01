package PPBO_P6;

class buku {
    String judul;
    String penulis;
    boolean status_peminjaman;

    buku(String judul, String penulis, boolean status_peminjaman) {
        this.judul = judul;
        this.penulis = penulis;
        this.status_peminjaman = status_peminjaman;
    }

    boolean peminjam() {
        status_peminjaman = true;
        return status_peminjaman;
    }

    boolean pengembalian() {
        status_peminjaman = false;
        return status_peminjaman;
    }
}


class anggota {
    String nama;
    buku[] daftarBuku = new buku[10];
    int jumlahDipinjam = 0;

    anggota(String nama) {
        this.nama = nama;
    }

    void pinjam(String judul, String penulis) {
        if (jumlahDipinjam < daftarBuku.length) {
            daftarBuku[jumlahDipinjam] = new buku(judul, penulis, true);
            jumlahDipinjam++;
        } else {
            System.out.println("Maksimum buku sudah dipinjam.");
        }
    }

    void pengembalian(int urutan) {
        if (urutan >= 0 && urutan < jumlahDipinjam) {
            for (int i = urutan; i < jumlahDipinjam - 1; i++) {
                daftarBuku[i] = daftarBuku[i + 1];
            }
            daftarBuku[jumlahDipinjam - 1] = null;
            jumlahDipinjam--;
        } else {
        System.out.print("Urutan tidak ada");
        }
    }

    void tampilkanBuku() {
        if (jumlahDipinjam == 0) {
            System.out.println("Tidak ada buku yang dipinjam.");
        } else {
            for(int i = 0; i < jumlahDipinjam; i++) {
                System.out.println("Buku urutan " + (i+1) + " = " 
                    + daftarBuku[i].judul + " oleh " + daftarBuku[i].penulis 
                    + (daftarBuku[i].status_peminjaman ? true : false));
            }
        }
    }    
}
   
public class perpustakaan {
    public static void main(String[] args) {
        anggota anggota1 = new anggota("Taufiq");

        anggota1.pinjam("Laskar Pelangi", "Andrea Hirata");
        anggota1.pinjam("Bumi", "Tere Liye");
        anggota1.pinjam("Negeri 5 Menara", "Ahmad Fuadi");

        System.out.println("Daftar buku yang dipinjam:");
        anggota1.tampilkanBuku();

        System.out.println("\nMengembalikan buku urutan ke-2...");
        anggota1.pengembalian(1);

        System.out.println("\nDaftar buku yang dipinjam setelah pengembalian:");
        anggota1.tampilkanBuku();
    }
}
