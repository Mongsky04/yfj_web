package PPBO_P6;

class Printer {
    // Metode pertama
    void cetak(String teks) {
        System.out.println("Mencetak teks: " + teks);
    }

    // Metode kedua (overloading)
    void cetak(int angka) {
        System.out.println("Mencetak angka: " + angka);
    }

    public static void main(String[] args) {
        Printer p = new Printer();
        p.cetak("Hello, Java!");
        p.cetak(123);
    }
}

