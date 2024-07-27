use std::ops::Mul;

/// This is the matrix type
#[derive(Debug, PartialEq)]
struct Matrix {
    rows: usize,
    cols: usize,
    data: Vec<Vec<f64>>,
}

trait Foo {
    fn foo(self) {
        match self.foo() {
            Ok(_) => println!("Foo {:?}", self),
            Err(_) => println!("err"),
        }
    }
}

impl Matrix {
    fn new(rows: usize, cols: usize, data: Vec<Vec<f64>>) -> Self {
        assert_eq!(rows, data.len());
        for row in &data {
            assert_eq!(cols, row.len());
        }
        Matrix { rows, cols, data }
    }
}

impl Mul for &Matrix {
    type Output = Matrix;

    fn mul(self, rhs: Self) -> Self::Output {
        assert_eq!(self.cols, rhs.rows);

        let mut result = vec![vec![0.0; rhs.cols]; self.rows];

        for i in 0..self.rows {
            for j in 0..rhs.cols {
                for k in 0..self.cols {
                    result[i][j] += self.data[i][k] * rhs.data[k][j];
                }
            }
        }

        Matrix::new(self.rows, rhs.cols, result)
    }
}

pub fn transpose(matrix: &Matrix) -> Matrix {
    let mut transposed_data = vec![vec![0.0; matrix.rows]; matrix.cols];

    for i in 0..matrix.rows {
        for j in 0..matrix.cols {
            transposed_data[j][i] = matrix.data[i][j];
        }
    }

    Matrix::new(matrix.cols, matrix.rows, transposed_data)
}

fn main() {
    let matrix_a = Matrix::new(2, 3, vec![vec![1.0, 2.0, 3.0], vec![4.0, 5.0, 6.0]]);
    let matrix_b = Matrix::new(3, 2, vec![vec![7.0, 8.0], vec![9.0, 10.0], vec![11.0, 12.0]]);

    let result = &matrix_a * &matrix_b;
    println!("Result of multiplication: {:?}", result);

    let transposed = transpose(&matrix_a);
    println!("Transposed matrix: {:?}", transposed);
}
