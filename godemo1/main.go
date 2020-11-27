package main

import "fmt"

func main() {
	fmt.Println("Hello go")

	// Explicit Declartion
	var tmp1 string = "lek"
	var tmp2 int = 1
	var tmp3 bool = true

	// Implicit Declartion
	t1 := "codemobiles"
	t2 := 10
	t3 := false

	fmt.Println(tmp1, tmp2, tmp3)
	fmt.Printf("%s,%d,%v", t1, t2, t3)
}
