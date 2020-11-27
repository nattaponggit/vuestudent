package api

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

// Test - For testing
func Test() {
	fmt.Println("test")
}

// Setup - used to intialize api
func Setup(r *gin.Engine) {
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
