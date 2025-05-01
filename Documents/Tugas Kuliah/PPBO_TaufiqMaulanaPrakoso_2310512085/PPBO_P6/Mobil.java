package PPBO_P6;

class Mobil {
    String merk;

    // Constructor
    Mobil(String merk) {
        this.merk = merk;
    }

    // Metode untuk menampilkan informasi
    void tampilkanInfo() {
        System.out.println("Mobil ini adalah " + merk);
    }

    public static void main(String[] args) {
        Mobil mobil1 = new Mobil("Toyota");
        mobil1.tampilkanInfo();
    }
}
