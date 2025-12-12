package auth

import "os"

var JWTKey []byte

func init() {
	secret := os.Getenv("JWT_SECRET")
	if secret == "" {
		secret = "super-secret-key-change-me"
	}
	JWTKey = []byte(secret)
}