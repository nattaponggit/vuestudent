package api

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Test - For testing
func Test() {
	fmt.Println("test")
}

type account struct {
	Username string
	Password string
}

// Setup - used to intialize api
func Setup(r *gin.Engine) {
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.POST("/register", register)
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

func register(c *gin.Context) {

	var input account
	c.ShouldBind(&input)
	c.JSON(http.StatusOK, gin.H{"result": "ok", "data": input})

}
