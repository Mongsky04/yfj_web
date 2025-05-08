public class latihan5 {

    public float BMI;
    
    public latihan5(int beratBadan, int tinggiBadan){
        BMI = (float) beratBadan / (tinggiBadan * tinggiBadan);
    }

    public static void main (String[] args) {
        latihan5 penghitungBB = new latihan5(60, 170);
        latihan5 penghitungBB2 = new latihan5(100, 200);

        System.out.println("The BMI adalah : " + penghitungBB2.BMI + " and the second one adalah " + penghitungBB.BMI);
    }
}
