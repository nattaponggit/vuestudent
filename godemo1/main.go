package main

import "fmt"
import "github.com/gin-gonic/gin"

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


	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

func fn1(msg string) {
	fmt.Println("Msg : " + msg)
}

func fn2(msg string) string {
	return msg + " : Yes"
}
