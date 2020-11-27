package main

import (
	"fmt"
	"main/api"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Hello go")

	// Explicit Declartion
	var tmp1 string = "lek"
	var tmp2 int = 1
	var tmp3 bool = true

	// Implicit Declartion
	t1 := "codemobiles"
	t2 := 10
	// t3 := false

	fmt.Println(tmp1, tmp2, tmp3)
	var msg = fmt.Sprintf("%s,%d", t1, t2)
	fn1(msg)
	fmt.Println(fn2("Lek"))

	api.Test()
	r := gin.Default()
	api.Setup(r)

}

func fn1(msg string) {
	fmt.Println("Msg : " + msg)
}

func fn2(msg string) string {
	return msg + " : Yes"
}
