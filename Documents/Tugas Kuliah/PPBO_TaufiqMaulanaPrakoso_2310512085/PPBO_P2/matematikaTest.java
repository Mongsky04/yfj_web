package PPBO_P2;

public class matematikaTest {

    public static void main(String[] args) {
        double a = 100.00;
        double b = 3.0;
    
        double hasilTambah, hasilKurang, hasilKali, hasilBagi;
        matematika hitung = new matematika();
    
        hasilTambah = hitung.tambah(a,b);
        hasilKurang = hitung.kurang(a,b);
        hasilKali = hitung.kali(a,b);
        hasilBagi = hitung.bagi(a,b);

        System.out.println("Hasil penjumlahan" + a + " + " + b + " : " + hasilTambah);
        System.out.println("Hasil pengurangan" + a + " + " + b + " : " + hasilKurang);
        System.out.println("Hasil kali" + a + " + " + b + " : " + hasilKali);
        System.out.println("Hasil pembagian" + a + " + " + b + " : " + hasilBagi);
        
    }
}
