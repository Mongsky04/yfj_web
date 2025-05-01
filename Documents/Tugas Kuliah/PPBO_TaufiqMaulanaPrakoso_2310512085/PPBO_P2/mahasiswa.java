package PPBO_P2;

public class mahasiswa {
    String nama;
    int umur;

    mahasiswa(String nama, int umur) {
        this.nama = nama;
        this.umur = umur;
    }

    void tampilkaninfo() {
        System.out.println("Nama : " + nama);
        System.out.println("Umur : " + umur);
    }
}
